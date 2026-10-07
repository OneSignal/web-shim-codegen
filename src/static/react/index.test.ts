import { afterEach, beforeAll, beforeEach, describe, expect, test, vi } from 'vitest';

import OneSignal from './index';

const APP_ID = '123456';

const originalDocument = window.document;
const documentSpy = vi.spyOn(window, 'document', 'get');

beforeAll(() => {
  // jsdom lacks PushSubscriptionOptions; stub it so init()'s push-support check passes.
  function PushSubscriptionOptionsStub() {}
  PushSubscriptionOptionsStub.prototype = { applicationServerKey: undefined };
  (globalThis as unknown as { PushSubscriptionOptions: unknown }).PushSubscriptionOptions =
    PushSubscriptionOptionsStub;
});

const init = vi.fn();
// @ts-expect-error - mocking OneSignal class that comes from the cdn
window.OneSignal = {
  init,
};
window.OneSignalDeferred = [];
Object.defineProperty(window.OneSignalDeferred, 'push', {
  value: (cb: (OneSignal: typeof window.OneSignal) => void) => {
    cb(window.OneSignal);
  },
});

describe('React OneSignal', () => {
  test('init method', async () => {
    // no document error
    // @ts-expect-error - simulating missing document
    documentSpy.mockReturnValue(undefined);
    await expect(OneSignal.init({ appId: APP_ID })).rejects.toThrow(
      'Document is not defined.',
    );
    documentSpy.mockImplementation(() => originalDocument);

    // no appId error
    // @ts-expect-error - appId is required but purposely not provided for this test
    await expect(OneSignal.init({})).rejects.toThrow(
      'You need to provide your OneSignal appId.',
    );

    // init error
    init.mockRejectedValue(new Error('init error'));
    await expect(OneSignal.init({ appId: APP_ID })).rejects.toThrow(
      'init error',
    );

    // init success
    init.mockResolvedValue(undefined);
    await expect(OneSignal.init({ appId: APP_ID })).resolves.not.toThrow();

    // already initialized error
    await expect(OneSignal.init({ appId: APP_ID })).rejects.toThrow(
      'OneSignal is already initialized.',
    );
  });
});

describe('identity guards', () => {
  let error: ReturnType<typeof vi.spyOn>;
  let user: Record<string, ReturnType<typeof vi.fn>>;

  beforeEach(() => {
    error = vi.spyOn(console, 'error').mockImplementation(() => undefined);
    user = {
      addAlias: vi.fn(),
      addAliases: vi.fn(),
      removeAliases: vi.fn(),
      addEmail: vi.fn(),
      addSms: vi.fn(),
      addTag: vi.fn(),
      addTags: vi.fn(),
      removeTags: vi.fn(),
      setLanguage: vi.fn(),
      trackEvent: vi.fn(),
    };
    window.OneSignal = { User: user } as unknown as typeof window.OneSignal;
  });

  afterEach(() => {
    error.mockRestore();
  });

  test('login skips empty and a null byte, resolves, and keeps whitespace', async () => {
    const login = vi.fn().mockResolvedValue(undefined);
    window.OneSignal = { login } as unknown as typeof window.OneSignal;
    await expect(OneSignal.login('')).resolves.toBeUndefined();
    await expect(OneSignal.login('ab\u0000c')).resolves.toBeUndefined();
    expect(login).not.toHaveBeenCalled();
    await OneSignal.login(' user ');
    expect(login).toHaveBeenCalledTimes(1);
    expect(login).toHaveBeenCalledWith(' user ', undefined);
    expect(error).toHaveBeenCalledWith('[OneSignal] login: externalId is required');
    expect(error).toHaveBeenCalledWith('[OneSignal] login: externalId contains a null byte');
  });

  test('login passes non-strings through to the SDK', async () => {
    const login = vi.fn().mockRejectedValue(new Error('sdk error'));
    window.OneSignal = { login } as unknown as typeof window.OneSignal;
    await expect(OneSignal.login(undefined as unknown as string)).rejects.toThrow('sdk error');
    expect(login).toHaveBeenCalledWith(undefined, undefined);
  });

  test('aliases skip empty or null-byte labels, ids, keys and values', () => {
    OneSignal.User.addAlias('', 'id');
    OneSignal.User.addAlias('label', 'a\u0000');
    OneSignal.User.addAlias('label', 'id');
    OneSignal.User.addAliases({ '': 'id' });
    OneSignal.User.addAliases({ label: '' });
    OneSignal.User.addAliases({ label: 'id' });
    OneSignal.User.removeAliases(['ok', '']);
    OneSignal.User.removeAliases(['ok']);
    expect(user.addAlias).toHaveBeenCalledTimes(1);
    expect(user.addAlias).toHaveBeenCalledWith('label', 'id');
    expect(user.addAliases).toHaveBeenCalledTimes(1);
    expect(user.addAliases).toHaveBeenCalledWith({ label: 'id' });
    expect(user.removeAliases).toHaveBeenCalledTimes(1);
    expect(user.removeAliases).toHaveBeenCalledWith(['ok']);
    expect(error).toHaveBeenCalledWith('[OneSignal] addAlias: label is required');
    expect(error).toHaveBeenCalledWith('[OneSignal] addAlias: id contains a null byte');
    expect(error).toHaveBeenCalledWith('[OneSignal] addAliases: key is required');
    expect(error).toHaveBeenCalledWith('[OneSignal] addAliases: value is required');
    expect(error).toHaveBeenCalledWith('[OneSignal] removeAliases: labels is required');
  });

  test('email and sms skip empty values', () => {
    OneSignal.User.addEmail('');
    OneSignal.User.addSms('');
    OneSignal.User.addEmail('a@b.co');
    OneSignal.User.addSms('+15551234567');
    expect(user.addEmail).toHaveBeenCalledTimes(1);
    expect(user.addEmail).toHaveBeenCalledWith('a@b.co');
    expect(user.addSms).toHaveBeenCalledTimes(1);
    expect(user.addSms).toHaveBeenCalledWith('+15551234567');
  });

  test('tags check keys only, so empty and null-byte values are kept', () => {
    OneSignal.User.addTag('kept', '');
    OneSignal.User.addTag('nul-value', 'a\u0000b');
    OneSignal.User.addTag('', 'nope');
    OneSignal.User.addTag('k\u0000', 'nope');
    OneSignal.User.addTags({ '\u0000': 'nope', sibling: 'nope' });
    OneSignal.User.addTags({ k: '' });
    OneSignal.User.removeTags(['ok', 'a\u0000']);
    OneSignal.User.removeTags(['ok']);
    expect(user.addTag).toHaveBeenCalledTimes(2);
    expect(user.addTag).toHaveBeenCalledWith('kept', '');
    expect(user.addTag).toHaveBeenCalledWith('nul-value', 'a\u0000b');
    expect(user.addTags).toHaveBeenCalledTimes(1);
    expect(user.addTags).toHaveBeenCalledWith({ k: '' });
    expect(user.removeTags).toHaveBeenCalledTimes(1);
    expect(user.removeTags).toHaveBeenCalledWith(['ok']);
    expect(error).toHaveBeenCalledWith('[OneSignal] addTag: key is required');
    expect(error).toHaveBeenCalledWith('[OneSignal] addTags: key contains a null byte');
    expect(error).toHaveBeenCalledWith('[OneSignal] removeTags: keys contains a null byte');
  });

  test('setLanguage keeps empty and skips a null byte', () => {
    OneSignal.User.setLanguage('');
    OneSignal.User.setLanguage('en\u0000');
    expect(user.setLanguage).toHaveBeenCalledTimes(1);
    expect(user.setLanguage).toHaveBeenCalledWith('');
    expect(error).toHaveBeenCalledWith('[OneSignal] setLanguage: language contains a null byte');
  });

  test('trackEvent skips an empty name', () => {
    OneSignal.User.trackEvent('');
    OneSignal.User.trackEvent('purchase');
    expect(user.trackEvent).toHaveBeenCalledTimes(1);
    expect(user.trackEvent).toHaveBeenCalledWith('purchase', undefined);
    expect(error).toHaveBeenCalledWith('[OneSignal] trackEvent: name is required');
  });
});

describe('init() rejects instead of hanging', () => {
  let OneSignalModule: typeof import('./index').default;

  beforeEach(async () => {
    vi.resetModules();
    window.OneSignalDeferred = [];
    // addSDKScript() short-circuits if #onesignal-sdk already exists in the DOM.
    document.querySelectorAll('script#onesignal-sdk').forEach((el) => el.remove());
    OneSignalModule = (await import('./index')).default;
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  test('rejects when the browser does not support Web Push', async () => {
    const originalPushSubscriptionOptions = (
      globalThis as unknown as { PushSubscriptionOptions: unknown }
    ).PushSubscriptionOptions;
    (globalThis as unknown as { PushSubscriptionOptions: unknown }).PushSubscriptionOptions =
      undefined;
    window.safari = undefined;

    try {
      await expect(OneSignalModule.init({ appId: APP_ID })).rejects.toThrow(
        'This browser does not support Web Push notifications.',
      );
    } finally {
      (globalThis as unknown as { PushSubscriptionOptions: unknown }).PushSubscriptionOptions =
        originalPushSubscriptionOptions;
    }
  });

  test('rejects an appId with a null byte', async () => {
    vi.spyOn(console, 'error').mockImplementation(() => undefined);
    await expect(OneSignalModule.init({ appId: 'ab\u0000c' })).rejects.toThrow(
      'You need to provide your OneSignal appId.',
    );
  });

  test('rejects when the SDK script fails to load', async () => {
    const initPromise = OneSignalModule.init({ appId: APP_ID });

    const scriptElement = document.getElementById('onesignal-sdk') as HTMLScriptElement | null;
    expect(scriptElement).not.toBeNull();
    scriptElement?.onerror?.(new Event('error'));

    await expect(initPromise).rejects.toThrow('OneSignal script failed to load.');
  });
});
