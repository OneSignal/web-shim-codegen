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
type NotificationCallbackType = | ((obj: StructuredNotification) => void) | ((obj: { to: NotificationPermission }) => void) | ((obj: (arg: any) => void) => void);

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

import { Injectable } from '@angular/core';
const ONESIGNAL_SDK_ID = 'onesignal-sdk';
const ONE_SIGNAL_SCRIPT_SRC = 'https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js';

type FunctionQueueItem = { name: string; args: IArguments; namespaceName?: string, promiseResolver?: (result: any) => any };

// true if the script is successfully loaded from CDN.
let isOneSignalInitialized = false;
// true if the script fails to load from CDN. A separate flag is necessary
// to disambiguate between a CDN load failure and a delayed call to
// OneSignal#init.
let isOneSignalScriptFailed = false;

declare global {
  interface Window {
    OneSignalDeferred: any;
    safari?: {
      pushNotificationPermission: (permissionData: any) => void;
      pushNotification: any;
    };
  }
}

interface IOneSignal {
  [key: string]: any;
}

@Injectable({
  providedIn: 'root'
})
export class OneSignal implements IOneSignal {
  private isOneSignalInitialized = false;
  private ngOneSignalFunctionQueue: FunctionQueueItem[] = [];

  constructor() { }

  /* H E L P E R S */

  doesOneSignalExist(): boolean {
    if (window.OneSignalDeferred) {
      return true;
    }
    return false;
  }

  handleOnError(): void {
    isOneSignalScriptFailed = true;
    // Ensure that any unresolved functions are cleared from the queue,
    // even in the event of a CDN load failure.
    this.processQueuedOneSignalFunctions();
  }

  addSDKScript(): void {
    const script = document.createElement('script');
    script.id = ONESIGNAL_SDK_ID;
    script.defer = true;
    script.src = ONE_SIGNAL_SCRIPT_SRC;

    script.onload = () => {
      this.processQueuedOneSignalFunctions();
    };

    // Always resolve whether or not the script is successfully initialized.
    // This is important for users who may block cdn.onesignal.com w/ adblock.
    script.onerror = () => {
      this.handleOnError();
    };

    document.head.appendChild(script);
  }

  private processQueuedOneSignalFunctions = (): void => {
    this.ngOneSignalFunctionQueue.forEach(element => {
      const { name, args, namespaceName, promiseResolver } = element;

      if (!!promiseResolver && !!namespaceName) {
        (this as IOneSignal)[namespaceName][name](...args).then((result: any) => {
          promiseResolver(result);
        });
      } else if (!!namespaceName) {
        window.OneSignalDeferred[namespaceName][name](...args);
      }
    });
  }

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
      window.OneSignalDeferred.push((oneSignal: IOneSignal) => {
        oneSignal.init(options).then(() => {
          isOneSignalInitialized = true;
          resolve();
        });
      });
    });
  }

  /**
   * @PublicApi
   */
  isPushSupported(): boolean {
    const supportsVapid = typeof PushSubscriptionOptions !== 'undefined' && PushSubscriptionOptions.prototype.hasOwnProperty('applicationServerKey');
    const isSafariInIframe = navigator.vendor === 'Apple Computer, Inc.' && window.top !== window;
    const supportsSafari = typeof window.safari !== 'undefined' &&
      typeof window.safari.pushNotification !== 'undefined' || isSafariInIframe;

    return supportsVapid || supportsSafari;
  }



  login(externalId: string, token?: string): Promise<void> {
    return new Promise((resolve, reject) => {
      if (isOneSignalScriptFailed) {
        reject();
      }

      if (!this.doesOneSignalExist()) {
        this.ngOneSignalFunctionQueue.push({
          name: 'login',
          namespaceName: '',
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      window.OneSignalDeferred.push((oneSignal: IOneSignal) => {
        oneSignal.login(externalId, token)
          .then((value: Promise<void>) => resolve(value))
          .catch((error: Error) => reject(error));
      });
    });
  }

  logout(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (isOneSignalScriptFailed) {
        reject();
      }

      if (!this.doesOneSignalExist()) {
        this.ngOneSignalFunctionQueue.push({
          name: 'logout',
          namespaceName: '',
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      window.OneSignalDeferred.push((oneSignal: IOneSignal) => {
        oneSignal.logout()
          .then((value: Promise<void>) => resolve(value))
          .catch((error: Error) => reject(error));
      });
    });
  }

  setConsentGiven(consent: boolean): Promise<void> {
    return new Promise((resolve, reject) => {
      if (isOneSignalScriptFailed) {
        reject();
      }

      if (!this.doesOneSignalExist()) {
        this.ngOneSignalFunctionQueue.push({
          name: 'setConsentGiven',
          namespaceName: '',
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      window.OneSignalDeferred.push((oneSignal: IOneSignal) => {
        oneSignal.setConsentGiven(consent)
          .then((value: Promise<void>) => resolve(value))
          .catch((error: Error) => reject(error));
      });
    });
  }

  setConsentRequired(requiresConsent: boolean): Promise<void> {
    return new Promise((resolve, reject) => {
      if (isOneSignalScriptFailed) {
        reject();
      }

      if (!this.doesOneSignalExist()) {
        this.ngOneSignalFunctionQueue.push({
          name: 'setConsentRequired',
          namespaceName: '',
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      window.OneSignalDeferred.push((oneSignal: IOneSignal) => {
        oneSignal.setConsentRequired(requiresConsent)
          .then((value: Promise<void>) => resolve(value))
          .catch((error: Error) => reject(error));
      });
    });
  }

  setDefaultUrl(url: string): Promise<void> {
    return new Promise((resolve, reject) => {
      if (isOneSignalScriptFailed) {
        reject();
      }

      if (!this.doesOneSignalExist()) {
        this.ngOneSignalFunctionQueue.push({
          name: 'setDefaultUrl',
          namespaceName: 'Notifications',
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      window.OneSignalDeferred.push((oneSignal: IOneSignal) => {
        oneSignal.Notifications.setDefaultUrl(url)
          .then((value: Promise<void>) => resolve(value))
          .catch((error: Error) => reject(error));
      });
    });
  }

  setDefaultTitle(title: string): Promise<void> {
    return new Promise((resolve, reject) => {
      if (isOneSignalScriptFailed) {
        reject();
      }

      if (!this.doesOneSignalExist()) {
        this.ngOneSignalFunctionQueue.push({
          name: 'setDefaultTitle',
          namespaceName: 'Notifications',
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      window.OneSignalDeferred.push((oneSignal: IOneSignal) => {
        oneSignal.Notifications.setDefaultTitle(title)
          .then((value: Promise<void>) => resolve(value))
          .catch((error: Error) => reject(error));
      });
    });
  }

  getPermissionStatus(onComplete: Action<NotificationPermission>): Promise<NotificationPermission> {
    return new Promise((resolve, reject) => {
      if (isOneSignalScriptFailed) {
        reject();
      }

      if (!this.doesOneSignalExist()) {
        this.ngOneSignalFunctionQueue.push({
          name: 'getPermissionStatus',
          namespaceName: 'Notifications',
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      window.OneSignalDeferred.push((oneSignal: IOneSignal) => {
        oneSignal.Notifications.getPermissionStatus(onComplete)
          .then((value: Promise<NotificationPermission>) => resolve(value))
          .catch((error: Error) => reject(error));
      });
    });
  }

  requestPermission(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (isOneSignalScriptFailed) {
        reject();
      }

      if (!this.doesOneSignalExist()) {
        this.ngOneSignalFunctionQueue.push({
          name: 'requestPermission',
          namespaceName: 'Notifications',
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      window.OneSignalDeferred.push((oneSignal: IOneSignal) => {
        oneSignal.Notifications.requestPermission()
          .then((value: Promise<void>) => resolve(value))
          .catch((error: Error) => reject(error));
      });
    });
  }

  addNotificationsEventListener(event: NotificationEventName, listener: NotificationCallbackType): void {
    if (!this.doesOneSignalExist()) {
      this.ngOneSignalFunctionQueue.push({
        name: 'addNotificationsEventListener',
        namespaceName: 'Notifications',
        args: arguments,
      });
      return;
    }

    window.OneSignalDeferred.push((oneSignal: IOneSignal) => {
      oneSignal.addNotificationsEventListener(event, listener);
    });
  }

  removeNotificationsEventListener(event: NotificationEventName, listener: NotificationCallbackType): void {
    if (!this.doesOneSignalExist()) {
      this.ngOneSignalFunctionQueue.push({
        name: 'removeNotificationsEventListener',
        namespaceName: 'Notifications',
        args: arguments,
      });
      return;
    }

    window.OneSignalDeferred.push((oneSignal: IOneSignal) => {
      oneSignal.removeNotificationsEventListener(event, listener);
    });
  }

  promptPush(options?: AutoPromptOptions): Promise<void> {
    return new Promise((resolve, reject) => {
      if (isOneSignalScriptFailed) {
        reject();
      }

      if (!this.doesOneSignalExist()) {
        this.ngOneSignalFunctionQueue.push({
          name: 'promptPush',
          namespaceName: 'Slidedown',
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      window.OneSignalDeferred.push((oneSignal: IOneSignal) => {
        oneSignal.Slidedown.promptPush(options)
          .then((value: Promise<void>) => resolve(value))
          .catch((error: Error) => reject(error));
      });
    });
  }

  promptPushCategories(options?: AutoPromptOptions): Promise<void> {
    return new Promise((resolve, reject) => {
      if (isOneSignalScriptFailed) {
        reject();
      }

      if (!this.doesOneSignalExist()) {
        this.ngOneSignalFunctionQueue.push({
          name: 'promptPushCategories',
          namespaceName: 'Slidedown',
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      window.OneSignalDeferred.push((oneSignal: IOneSignal) => {
        oneSignal.Slidedown.promptPushCategories(options)
          .then((value: Promise<void>) => resolve(value))
          .catch((error: Error) => reject(error));
      });
    });
  }

  promptSms(options?: AutoPromptOptions): Promise<void> {
    return new Promise((resolve, reject) => {
      if (isOneSignalScriptFailed) {
        reject();
      }

      if (!this.doesOneSignalExist()) {
        this.ngOneSignalFunctionQueue.push({
          name: 'promptSms',
          namespaceName: 'Slidedown',
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      window.OneSignalDeferred.push((oneSignal: IOneSignal) => {
        oneSignal.Slidedown.promptSms(options)
          .then((value: Promise<void>) => resolve(value))
          .catch((error: Error) => reject(error));
      });
    });
  }

  promptEmail(options?: AutoPromptOptions): Promise<void> {
    return new Promise((resolve, reject) => {
      if (isOneSignalScriptFailed) {
        reject();
      }

      if (!this.doesOneSignalExist()) {
        this.ngOneSignalFunctionQueue.push({
          name: 'promptEmail',
          namespaceName: 'Slidedown',
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      window.OneSignalDeferred.push((oneSignal: IOneSignal) => {
        oneSignal.Slidedown.promptEmail(options)
          .then((value: Promise<void>) => resolve(value))
          .catch((error: Error) => reject(error));
      });
    });
  }

  promptSmsAndEmail(options?: AutoPromptOptions): Promise<void> {
    return new Promise((resolve, reject) => {
      if (isOneSignalScriptFailed) {
        reject();
      }

      if (!this.doesOneSignalExist()) {
        this.ngOneSignalFunctionQueue.push({
          name: 'promptSmsAndEmail',
          namespaceName: 'Slidedown',
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      window.OneSignalDeferred.push((oneSignal: IOneSignal) => {
        oneSignal.Slidedown.promptSmsAndEmail(options)
          .then((value: Promise<void>) => resolve(value))
          .catch((error: Error) => reject(error));
      });
    });
  }

  addSlidedownEventListener(event: SlidedownEventName, listener: (wasShown: boolean) => void): void {
    if (!this.doesOneSignalExist()) {
      this.ngOneSignalFunctionQueue.push({
        name: 'addSlidedownEventListener',
        namespaceName: 'Slidedown',
        args: arguments,
      });
      return;
    }

    window.OneSignalDeferred.push((oneSignal: IOneSignal) => {
      oneSignal.addSlidedownEventListener(event, listener);
    });
  }

  removeSlidedownEventListener(event: SlidedownEventName, listener: (wasShown: boolean) => void): void {
    if (!this.doesOneSignalExist()) {
      this.ngOneSignalFunctionQueue.push({
        name: 'removeSlidedownEventListener',
        namespaceName: 'Slidedown',
        args: arguments,
      });
      return;
    }

    window.OneSignalDeferred.push((oneSignal: IOneSignal) => {
      oneSignal.removeSlidedownEventListener(event, listener);
    });
  }

  setLogLevel(logLevel: string): void {
    if (!this.doesOneSignalExist()) {
      this.ngOneSignalFunctionQueue.push({
        name: 'setLogLevel',
        namespaceName: 'Debug',
        args: arguments,
      });
      return;
    }

    window.OneSignalDeferred.push((oneSignal: IOneSignal) => {
      oneSignal.setLogLevel(logLevel);
    });
  }

  sendOutcome(outcomeName: string, outcomeWeight?: number): Promise<void> {
    return new Promise((resolve, reject) => {
      if (isOneSignalScriptFailed) {
        reject();
      }

      if (!this.doesOneSignalExist()) {
        this.ngOneSignalFunctionQueue.push({
          name: 'sendOutcome',
          namespaceName: 'Session',
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      window.OneSignalDeferred.push((oneSignal: IOneSignal) => {
        oneSignal.Session.sendOutcome(outcomeName, outcomeWeight)
          .then((value: Promise<void>) => resolve(value))
          .catch((error: Error) => reject(error));
      });
    });
  }

  sendUniqueOutcome(outcomeName: string): Promise<void> {
    return new Promise((resolve, reject) => {
      if (isOneSignalScriptFailed) {
        reject();
      }

      if (!this.doesOneSignalExist()) {
        this.ngOneSignalFunctionQueue.push({
          name: 'sendUniqueOutcome',
          namespaceName: 'Session',
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      window.OneSignalDeferred.push((oneSignal: IOneSignal) => {
        oneSignal.Session.sendUniqueOutcome(outcomeName)
          .then((value: Promise<void>) => resolve(value))
          .catch((error: Error) => reject(error));
      });
    });
  }

  addAlias(label: string, id: string): void {
    if (!this.doesOneSignalExist()) {
      this.ngOneSignalFunctionQueue.push({
        name: 'addAlias',
        namespaceName: 'User',
        args: arguments,
      });
      return;
    }

    window.OneSignalDeferred.push((oneSignal: IOneSignal) => {
      oneSignal.addAlias(label, id);
    });
  }

  addAliases(aliases: { [key: string]: string }): void {
    if (!this.doesOneSignalExist()) {
      this.ngOneSignalFunctionQueue.push({
        name: 'addAliases',
        namespaceName: 'User',
        args: arguments,
      });
      return;
    }

    window.OneSignalDeferred.push((oneSignal: IOneSignal) => {
      oneSignal.addAliases(aliases);
    });
  }

  removeAlias(label: string): void {
    if (!this.doesOneSignalExist()) {
      this.ngOneSignalFunctionQueue.push({
        name: 'removeAlias',
        namespaceName: 'User',
        args: arguments,
      });
      return;
    }

    window.OneSignalDeferred.push((oneSignal: IOneSignal) => {
      oneSignal.removeAlias(label);
    });
  }

  removeAliases(labels: string[]): void {
    if (!this.doesOneSignalExist()) {
      this.ngOneSignalFunctionQueue.push({
        name: 'removeAliases',
        namespaceName: 'User',
        args: arguments,
      });
      return;
    }

    window.OneSignalDeferred.push((oneSignal: IOneSignal) => {
      oneSignal.removeAliases(labels);
    });
  }

  addEmail(email: string): void {
    if (!this.doesOneSignalExist()) {
      this.ngOneSignalFunctionQueue.push({
        name: 'addEmail',
        namespaceName: 'User',
        args: arguments,
      });
      return;
    }

    window.OneSignalDeferred.push((oneSignal: IOneSignal) => {
      oneSignal.addEmail(email);
    });
  }

  removeEmail(email: string): void {
    if (!this.doesOneSignalExist()) {
      this.ngOneSignalFunctionQueue.push({
        name: 'removeEmail',
        namespaceName: 'User',
        args: arguments,
      });
      return;
    }

    window.OneSignalDeferred.push((oneSignal: IOneSignal) => {
      oneSignal.removeEmail(email);
    });
  }

  addSms(smsNumber: string): void {
    if (!this.doesOneSignalExist()) {
      this.ngOneSignalFunctionQueue.push({
        name: 'addSms',
        namespaceName: 'User',
        args: arguments,
      });
      return;
    }

    window.OneSignalDeferred.push((oneSignal: IOneSignal) => {
      oneSignal.addSms(smsNumber);
    });
  }

  removeSms(smsNumber: string): void {
    if (!this.doesOneSignalExist()) {
      this.ngOneSignalFunctionQueue.push({
        name: 'removeSms',
        namespaceName: 'User',
        args: arguments,
      });
      return;
    }

    window.OneSignalDeferred.push((oneSignal: IOneSignal) => {
      oneSignal.removeSms(smsNumber);
    });
  }

  optIn(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (isOneSignalScriptFailed) {
        reject();
      }

      if (!this.doesOneSignalExist()) {
        this.ngOneSignalFunctionQueue.push({
          name: 'optIn',
          namespaceName: 'PushSubscription',
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      window.OneSignalDeferred.push((oneSignal: IOneSignal) => {
        oneSignal.PushSubscription.optIn()
          .then((value: Promise<void>) => resolve(value))
          .catch((error: Error) => reject(error));
      });
    });
  }

  optOut(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (isOneSignalScriptFailed) {
        reject();
      }

      if (!this.doesOneSignalExist()) {
        this.ngOneSignalFunctionQueue.push({
          name: 'optOut',
          namespaceName: 'PushSubscription',
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      window.OneSignalDeferred.push((oneSignal: IOneSignal) => {
        oneSignal.PushSubscription.optOut()
          .then((value: Promise<void>) => resolve(value))
          .catch((error: Error) => reject(error));
      });
    });
  }

  addPushSubscriptionEventListener(event: string, listener: (change: SubscriptionChangeEvent) => void): void {
    if (!this.doesOneSignalExist()) {
      this.ngOneSignalFunctionQueue.push({
        name: 'addPushSubscriptionEventListener',
        namespaceName: 'PushSubscription',
        args: arguments,
      });
      return;
    }

    window.OneSignalDeferred.push((oneSignal: IOneSignal) => {
      oneSignal.addPushSubscriptionEventListener(event, listener);
    });
  }

  removePushSubscriptionEventListener(event: string, listener: (change: SubscriptionChangeEvent) => void): void {
    if (!this.doesOneSignalExist()) {
      this.ngOneSignalFunctionQueue.push({
        name: 'removePushSubscriptionEventListener',
        namespaceName: 'PushSubscription',
        args: arguments,
      });
      return;
    }

    window.OneSignalDeferred.push((oneSignal: IOneSignal) => {
      oneSignal.removePushSubscriptionEventListener(event, listener);
    });
  }
}
