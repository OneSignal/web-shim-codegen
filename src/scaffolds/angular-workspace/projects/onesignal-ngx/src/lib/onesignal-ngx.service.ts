type Action<T> = (item: T) => void;
interface AutoPromptOptions { force?: boolean; forceSlidedownOverNative?: boolean; slidedownPromptOptions?: IOneSignalAutoPromptOptions; }
interface IOneSignalAutoPromptOptions { force?: boolean; forceSlidedownOverNative?: boolean; isInUpdateMode?: boolean; categoryOptions?: IOneSignalCategories; }
interface IOneSignalCategories { positiveUpdateButton: string; negativeUpdateButton: string; savingButtonText: string; errorButtonText: string; updateMessage: string; tags: IOneSignalTagCategory[]; }
interface IOneSignalTagCategory { tag: string; label: string; checked?: boolean; }
type PushSubscriptionNamespaceProperties = { id: string | null | undefined; token: string | null | undefined; optedIn: boolean; };
type SubscriptionChangeEvent = { previous: PushSubscriptionNamespaceProperties; current: PushSubscriptionNamespaceProperties; };
type NotificationEventName = 'click' | 'willDisplay' | 'dismiss' | 'permissionChange' | 'permissionPromptDisplay';
interface NotificationButtonData { action?: string; title?: string; icon?: string; url?: string; }
interface StructuredNotification { id: string; content: string; heading?: string; url?: string; data?: object; rr?: string; icon?: string; image?: string; tag?: string; badge?: string; vibrate?: string; buttons?: NotificationButtonData[]; }
type SlidedownEventName = 'slidedownShown';
type OneSignalDeferredLoadedCallback = (onesignal: IOneSignalOneSignal) => void;

interface IInitObject {
  appId: string;
  subdomainName?: string;
  requiresUserPrivacyConsent?: boolean;
  promptOptions?: object;
  welcomeNotification?: object;
  notifyButton?: object;
  persistNotification?: boolean;
  webhooks?: object;
  autoResubscribe?: boolean;
  autoRegister?: boolean;
  notificationClickHandlerMatch?: string;
  notificationClickHandlerAction?: string;
  serviceWorkerParam?: { scope: string };
  serviceWorkerPath?: string;
  serviceWorkerUpdaterPath?: string;
  path?: string;
  allowLocalhostAsSecureOrigin?: boolean;
  [key: string]: any;
}

interface IOneSignalOneSignal {
	Slidedown: IOneSignalSlidedown;
	Notifications: IOneSignalNotifications;
	Session: IOneSignalSession;
	User: IOneSignalUser;
	Debug: IOneSignalDebug;
	login(externalId: string, jwtToken?: string): Promise<void>;
	logout(): Promise<void>;
	init(options: IInitObject): Promise<void>;
	setConsentGiven(consent: boolean): Promise<void>;
	setConsentRequired(requiresConsent: boolean): Promise<void>;
}
interface IOneSignalNotifications {
	setDefaultUrl(url: string): Promise<void>;
	setDefaultTitle(title: string): Promise<void>;
	isPushSupported(): boolean;
	getPermissionStatus(onComplete: Action<NotificationPermission>): Promise<NotificationPermission>;
	requestPermission(): Promise<void>;
	addEventListener(event: NotificationEventName, listener: (obj: any) => void): void;
	removeEventListener(event: NotificationEventName, listener: (obj: any) => void): void;
}
interface IOneSignalSlidedown {
	promptPush(options?: AutoPromptOptions): Promise<void>;
	promptPushCategories(options?: AutoPromptOptions): Promise<void>;
	promptSms(options?: AutoPromptOptions): Promise<void>;
	promptEmail(options?: AutoPromptOptions): Promise<void>;
	promptSmsAndEmail(options?: AutoPromptOptions): Promise<void>;
	addEventListener(event: SlidedownEventName, listener: (wasShown: boolean) => void): void;
	removeEventListener(event: SlidedownEventName, listener: (wasShown: boolean) => void): void;
}
interface IOneSignalDebug {
	setLogLevel(logLevel: string): void;
}
interface IOneSignalSession {
	sendOutcome(outcomeName: string, outcomeWeight?: number): Promise<void>;
	sendUniqueOutcome(outcomeName: string): Promise<void>;
}
interface IOneSignalUser {
	PushSubscription: IOneSignalPushSubscription;
	addAlias(label: string, id: string): void;
	addAliases(aliases: { [key: string]: string }): void;
	removeAlias(label: string): void;
	removeAliases(labels: string[]): void;
	addEmail(email: string): void;
	removeEmail(email: string): void;
	addSms(smsNumber: string): void;
	removeSms(smsNumber: string): void;
	addTag(key: string, value: string): void;
	addTags(tags: { [key: string]: string }): void;
	removeTag(key: string): void;
	removeTags(keys: string[]): void;
}
interface IOneSignalPushSubscription {
	id: string | null | undefined;
	token: string | null | undefined;
	optedIn: boolean | undefined;
	optIn(): Promise<void>;
	optOut(): Promise<void>;
	addEventListener(event: 'subscriptionChange', listener: (change: SubscriptionChangeEvent) => void): void;
	removeEventListener(event: 'subscriptionChange', listener: (change: SubscriptionChangeEvent) => void): void;
}

function oneSignalLogin(externalId: string, jwtToken?: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (isOneSignalScriptFailed) {
      reject();
    }

    window.OneSignalDeferred?.push((oneSignal: IOneSignalOneSignal) => {
      oneSignal.login(externalId, jwtToken)
        .then((value: any) => resolve(value))
        .catch((error: Error) => reject(error));
    });
  });
}

function oneSignalLogout(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (isOneSignalScriptFailed) {
      reject();
    }

    window.OneSignalDeferred?.push((oneSignal: IOneSignalOneSignal) => {
      oneSignal.logout()
        .then((value: any) => resolve(value))
        .catch((error: Error) => reject(error));
    });
  });
}

function oneSignalSetConsentGiven(consent: boolean): Promise<void> {
  return new Promise((resolve, reject) => {
    if (isOneSignalScriptFailed) {
      reject();
    }

    window.OneSignalDeferred?.push((oneSignal: IOneSignalOneSignal) => {
      oneSignal.setConsentGiven(consent)
        .then((value: any) => resolve(value))
        .catch((error: Error) => reject(error));
    });
  });
}

function oneSignalSetConsentRequired(requiresConsent: boolean): Promise<void> {
  return new Promise((resolve, reject) => {
    if (isOneSignalScriptFailed) {
      reject();
    }

    window.OneSignalDeferred?.push((oneSignal: IOneSignalOneSignal) => {
      oneSignal.setConsentRequired(requiresConsent)
        .then((value: any) => resolve(value))
        .catch((error: Error) => reject(error));
    });
  });
}

function slidedownPromptPush(options?: AutoPromptOptions): Promise<void> {
  return new Promise((resolve, reject) => {
    if (isOneSignalScriptFailed) {
      reject();
    }

    window.OneSignalDeferred?.push((oneSignal: IOneSignalOneSignal) => {
      oneSignal.Slidedown.promptPush(options)
        .then((value: any) => resolve(value))
        .catch((error: Error) => reject(error));
    });
  });
}

function slidedownPromptPushCategories(options?: AutoPromptOptions): Promise<void> {
  return new Promise((resolve, reject) => {
    if (isOneSignalScriptFailed) {
      reject();
    }

    window.OneSignalDeferred?.push((oneSignal: IOneSignalOneSignal) => {
      oneSignal.Slidedown.promptPushCategories(options)
        .then((value: any) => resolve(value))
        .catch((error: Error) => reject(error));
    });
  });
}

function slidedownPromptSms(options?: AutoPromptOptions): Promise<void> {
  return new Promise((resolve, reject) => {
    if (isOneSignalScriptFailed) {
      reject();
    }

    window.OneSignalDeferred?.push((oneSignal: IOneSignalOneSignal) => {
      oneSignal.Slidedown.promptSms(options)
        .then((value: any) => resolve(value))
        .catch((error: Error) => reject(error));
    });
  });
}

function slidedownPromptEmail(options?: AutoPromptOptions): Promise<void> {
  return new Promise((resolve, reject) => {
    if (isOneSignalScriptFailed) {
      reject();
    }

    window.OneSignalDeferred?.push((oneSignal: IOneSignalOneSignal) => {
      oneSignal.Slidedown.promptEmail(options)
        .then((value: any) => resolve(value))
        .catch((error: Error) => reject(error));
    });
  });
}

function slidedownPromptSmsAndEmail(options?: AutoPromptOptions): Promise<void> {
  return new Promise((resolve, reject) => {
    if (isOneSignalScriptFailed) {
      reject();
    }

    window.OneSignalDeferred?.push((oneSignal: IOneSignalOneSignal) => {
      oneSignal.Slidedown.promptSmsAndEmail(options)
        .then((value: any) => resolve(value))
        .catch((error: Error) => reject(error));
    });
  });
}

function slidedownAddEventListener(event: SlidedownEventName, listener: (wasShown: boolean) => void): void {
  window.OneSignalDeferred?.push((oneSignal: IOneSignalOneSignal) => {
    oneSignal.Slidedown.addEventListener(event, listener);
  });
}

function slidedownRemoveEventListener(event: SlidedownEventName, listener: (wasShown: boolean) => void): void {
  window.OneSignalDeferred?.push((oneSignal: IOneSignalOneSignal) => {
    oneSignal.Slidedown.removeEventListener(event, listener);
  });
}

function notificationsSetDefaultUrl(url: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (isOneSignalScriptFailed) {
      reject();
    }

    window.OneSignalDeferred?.push((oneSignal: IOneSignalOneSignal) => {
      oneSignal.Notifications.setDefaultUrl(url)
        .then((value: any) => resolve(value))
        .catch((error: Error) => reject(error));
    });
  });
}

function notificationsSetDefaultTitle(title: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (isOneSignalScriptFailed) {
      reject();
    }

    window.OneSignalDeferred?.push((oneSignal: IOneSignalOneSignal) => {
      oneSignal.Notifications.setDefaultTitle(title)
        .then((value: any) => resolve(value))
        .catch((error: Error) => reject(error));
    });
  });
}

function notificationsGetPermissionStatus(onComplete: Action<NotificationPermission>): Promise<NotificationPermission> {
  return new Promise((resolve, reject) => {
    if (isOneSignalScriptFailed) {
      reject();
    }

    window.OneSignalDeferred?.push((oneSignal: IOneSignalOneSignal) => {
      oneSignal.Notifications.getPermissionStatus(onComplete)
        .then((value: any) => resolve(value))
        .catch((error: Error) => reject(error));
    });
  });
}

function notificationsRequestPermission(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (isOneSignalScriptFailed) {
      reject();
    }

    window.OneSignalDeferred?.push((oneSignal: IOneSignalOneSignal) => {
      oneSignal.Notifications.requestPermission()
        .then((value: any) => resolve(value))
        .catch((error: Error) => reject(error));
    });
  });
}

function notificationsAddEventListener(event: 'click' | 'willDisplay' | 'dismiss', listener: (obj: StructuredNotification) => void): void;
function notificationsAddEventListener(event: 'permissionChange', listener: (obj: { to: NotificationPermission }) => void): void;
function notificationsAddEventListener(event: 'permissionPromptDisplay', listener: () => void): void;

function notificationsAddEventListener(event: NotificationEventName, listener: (obj: any) => void): void {
  window.OneSignalDeferred?.push((oneSignal: IOneSignalOneSignal) => {
    oneSignal.Notifications.addEventListener(event, listener);
  });
}

function notificationsRemoveEventListener(event: 'click' | 'willDisplay' | 'dismiss', listener: (obj: StructuredNotification) => void): void;
function notificationsRemoveEventListener(event: 'permissionChange', listener: (obj: { to: NotificationPermission }) => void): void;
function notificationsRemoveEventListener(event: 'permissionPromptDisplay', listener: () => void): void;

function notificationsRemoveEventListener(event: NotificationEventName, listener: (obj: any) => void): void {
  window.OneSignalDeferred?.push((oneSignal: IOneSignalOneSignal) => {
    oneSignal.Notifications.removeEventListener(event, listener);
  });
}

function sessionSendOutcome(outcomeName: string, outcomeWeight?: number): Promise<void> {
  return new Promise((resolve, reject) => {
    if (isOneSignalScriptFailed) {
      reject();
    }

    window.OneSignalDeferred?.push((oneSignal: IOneSignalOneSignal) => {
      oneSignal.Session.sendOutcome(outcomeName, outcomeWeight)
        .then((value: any) => resolve(value))
        .catch((error: Error) => reject(error));
    });
  });
}

function sessionSendUniqueOutcome(outcomeName: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (isOneSignalScriptFailed) {
      reject();
    }

    window.OneSignalDeferred?.push((oneSignal: IOneSignalOneSignal) => {
      oneSignal.Session.sendUniqueOutcome(outcomeName)
        .then((value: any) => resolve(value))
        .catch((error: Error) => reject(error));
    });
  });
}

function userAddAlias(label: string, id: string): void {
  window.OneSignalDeferred?.push((oneSignal: IOneSignalOneSignal) => {
    oneSignal.User.addAlias(label, id);
  });
}

function userAddAliases(aliases: { [key: string]: string }): void {
  window.OneSignalDeferred?.push((oneSignal: IOneSignalOneSignal) => {
    oneSignal.User.addAliases(aliases);
  });
}

function userRemoveAlias(label: string): void {
  window.OneSignalDeferred?.push((oneSignal: IOneSignalOneSignal) => {
    oneSignal.User.removeAlias(label);
  });
}

function userRemoveAliases(labels: string[]): void {
  window.OneSignalDeferred?.push((oneSignal: IOneSignalOneSignal) => {
    oneSignal.User.removeAliases(labels);
  });
}

function userAddEmail(email: string): void {
  window.OneSignalDeferred?.push((oneSignal: IOneSignalOneSignal) => {
    oneSignal.User.addEmail(email);
  });
}

function userRemoveEmail(email: string): void {
  window.OneSignalDeferred?.push((oneSignal: IOneSignalOneSignal) => {
    oneSignal.User.removeEmail(email);
  });
}

function userAddSms(smsNumber: string): void {
  window.OneSignalDeferred?.push((oneSignal: IOneSignalOneSignal) => {
    oneSignal.User.addSms(smsNumber);
  });
}

function userRemoveSms(smsNumber: string): void {
  window.OneSignalDeferred?.push((oneSignal: IOneSignalOneSignal) => {
    oneSignal.User.removeSms(smsNumber);
  });
}

function userAddTag(key: string, value: string): void {
  window.OneSignalDeferred?.push((oneSignal: IOneSignalOneSignal) => {
    oneSignal.User.addTag(key, value);
  });
}

function userAddTags(tags: { [key: string]: string }): void {
  window.OneSignalDeferred?.push((oneSignal: IOneSignalOneSignal) => {
    oneSignal.User.addTags(tags);
  });
}

function userRemoveTag(key: string): void {
  window.OneSignalDeferred?.push((oneSignal: IOneSignalOneSignal) => {
    oneSignal.User.removeTag(key);
  });
}

function userRemoveTags(keys: string[]): void {
  window.OneSignalDeferred?.push((oneSignal: IOneSignalOneSignal) => {
    oneSignal.User.removeTags(keys);
  });
}

function pushSubscriptionOptIn(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (isOneSignalScriptFailed) {
      reject();
    }

    window.OneSignalDeferred?.push((oneSignal: IOneSignalOneSignal) => {
      oneSignal.User.PushSubscription.optIn()
        .then((value: any) => resolve(value))
        .catch((error: Error) => reject(error));
    });
  });
}

function pushSubscriptionOptOut(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (isOneSignalScriptFailed) {
      reject();
    }

    window.OneSignalDeferred?.push((oneSignal: IOneSignalOneSignal) => {
      oneSignal.User.PushSubscription.optOut()
        .then((value: any) => resolve(value))
        .catch((error: Error) => reject(error));
    });
  });
}

function pushSubscriptionAddEventListener(event: 'subscriptionChange', listener: (change: SubscriptionChangeEvent) => void): void {
  window.OneSignalDeferred?.push((oneSignal: IOneSignalOneSignal) => {
    oneSignal.User.PushSubscription.addEventListener(event, listener);
  });
}

function pushSubscriptionRemoveEventListener(event: 'subscriptionChange', listener: (change: SubscriptionChangeEvent) => void): void {
  window.OneSignalDeferred?.push((oneSignal: IOneSignalOneSignal) => {
    oneSignal.User.PushSubscription.removeEventListener(event, listener);
  });
}

function debugSetLogLevel(logLevel: string): void {
  window.OneSignalDeferred?.push((oneSignal: IOneSignalOneSignal) => {
    oneSignal.Debug.setLogLevel(logLevel);
  });
}

const PushSubscriptionNamespace: IOneSignalPushSubscription = {
	get id(): string | null | undefined { return window.OneSignal?.User?.PushSubscription?.id },
	get token(): string | null | undefined { return window.OneSignal?.User?.PushSubscription?.token },
	get optedIn(): boolean | undefined { return window.OneSignal?.User?.PushSubscription?.optedIn },
	optIn: pushSubscriptionOptIn,
	optOut: pushSubscriptionOptOut,
	addEventListener: pushSubscriptionAddEventListener,
	removeEventListener: pushSubscriptionRemoveEventListener,
};

const UserNamespace: IOneSignalUser = {
	addAlias: userAddAlias,
	addAliases: userAddAliases,
	removeAlias: userRemoveAlias,
	removeAliases: userRemoveAliases,
	addEmail: userAddEmail,
	removeEmail: userRemoveEmail,
	addSms: userAddSms,
	removeSms: userRemoveSms,
	addTag: userAddTag,
	addTags: userAddTags,
	removeTag: userRemoveTag,
	removeTags: userRemoveTags,
	PushSubscription: PushSubscriptionNamespace,
};

const SessionNamespace: IOneSignalSession = {
	sendOutcome: sessionSendOutcome,
	sendUniqueOutcome: sessionSendUniqueOutcome,
};

const DebugNamespace: IOneSignalDebug = {
	setLogLevel: debugSetLogLevel,
};

const SlidedownNamespace: IOneSignalSlidedown = {
	promptPush: slidedownPromptPush,
	promptPushCategories: slidedownPromptPushCategories,
	promptSms: slidedownPromptSms,
	promptEmail: slidedownPromptEmail,
	promptSmsAndEmail: slidedownPromptSmsAndEmail,
	addEventListener: slidedownAddEventListener,
	removeEventListener: slidedownRemoveEventListener,
};

const NotificationsNamespace: IOneSignalNotifications = {
	setDefaultUrl: notificationsSetDefaultUrl,
	setDefaultTitle: notificationsSetDefaultTitle,
	isPushSupported,
	getPermissionStatus: notificationsGetPermissionStatus,
	requestPermission: notificationsRequestPermission,
	addEventListener: notificationsAddEventListener,
	removeEventListener: notificationsRemoveEventListener,
};

/**
 * @PublicApi
 */
function isPushSupported(): boolean {
  return isPushNotificationsSupported();
}

import { Injectable } from '@angular/core';
const ONESIGNAL_SDK_ID = 'onesignal-sdk';
const ONE_SIGNAL_SCRIPT_SRC = 'https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js';

// true if the script is successfully loaded from CDN.
let isOneSignalInitialized = false;
// true if the script fails to load from CDN. A separate flag is necessary
// to disambiguate between a CDN load failure and a delayed call to
// OneSignal#init.
let isOneSignalScriptFailed = false;

if (window) {
  window.OneSignalDeferred = window.OneSignalDeferred || [];
  addSDKScript();
}

/**
 * The following code is copied directly from the native SDK source file BrowserSupportsPush.ts
 * S T A R T
 */

// Checks if the browser supports push notifications by checking if specific
//   classes and properties on them exist
function isPushNotificationsSupported(): boolean {
  return supportsVapidPush() || supportsSafariPush();
}

function isMacOSSafariInIframe(): boolean {
  // Fallback detection for Safari on macOS in an iframe context
  return window.top !== window && // isContextIframe
  navigator.vendor === 'Apple Computer, Inc.' && // isSafari
  navigator.platform === 'MacIntel'; // isMacOS
}

function supportsSafariPush(): boolean {
  return (window.safari && typeof window.safari.pushNotification !== 'undefined') ||
          isMacOSSafariInIframe();
}

// Does the browser support the standard Push API
function supportsVapidPush(): boolean {
  return typeof PushSubscriptionOptions !== 'undefined' &&
        PushSubscriptionOptions.prototype.hasOwnProperty('applicationServerKey');
}
/* E N D */

function handleOnError(): void {
  isOneSignalScriptFailed = true;
}

function addSDKScript(): void {
  const script = document.createElement('script');
  script.id = ONESIGNAL_SDK_ID;
  script.defer = true;
  script.src = ONE_SIGNAL_SCRIPT_SRC;

  // Always resolve whether or not the script is successfully initialized.
  // This is important for users who may block cdn.onesignal.com w/ adblock.
  script.onerror = () => {
    handleOnError();
  };

  document.head.appendChild(script);
}


declare global {
  interface Window {
    OneSignalDeferred?: OneSignalDeferredLoadedCallback[];
    OneSignal?: IOneSignalOneSignal;
    safari?: {
      pushNotification: any;
    };
  }
}

interface IOneSignalOneSignal {
  [key: string]: any;
}

@Injectable({
  providedIn: 'root'
})
export class OneSignal implements IOneSignalOneSignal {
  [key: string]: any;

  constructor() { }

  /* P U B L I C */

  /**
   * @PublicApi
   */
  init(options: IInitObject): Promise<void> {
    if (isOneSignalInitialized) {
      return Promise.reject(`OneSignal is already initialized.`);
    }

    if (!options || !options.appId) {
      throw new Error('You need to provide your OneSignal appId.');
    }

    if (!document) {
      return Promise.reject(`Document is not defined.`);
    }

    return new Promise<void>((resolve) => {
      window.OneSignalDeferred?.push((oneSignal: IOneSignalOneSignal) => {
        oneSignal.init(options).then(() => {
          isOneSignalInitialized = true;
          resolve();
        });
      });
    });
  }

	User = UserNamespace;
	Session = SessionNamespace;
	Debug = DebugNamespace;
	Slidedown = SlidedownNamespace;
	Notifications = NotificationsNamespace;
	login = oneSignalLogin;
	logout = oneSignalLogout;
	setConsentGiven = oneSignalSetConsentGiven;
	setConsentRequired = oneSignalSetConsentRequired;
}
