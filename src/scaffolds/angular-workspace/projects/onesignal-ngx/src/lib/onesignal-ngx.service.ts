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

type FunctionQueueItem = { name: string; args: IArguments; namespaceName: string, promiseResolver?: (result: any) => any };

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

      if (!!promiseResolver) {
        (this as IOneSignal)[namespaceName][name](...args).then((result: any) => {
          promiseResolver(result);
        });
      } else {
        (this as IOneSignal)[namespaceName][name](...args);
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
    const isSafariInIframe = navigator.vendor === 'Apple Computer, Inc.' && window.top !== window && navigator.platform === "MacIntel";
    const supportsSafari = typeof window.safari !== 'undefined' &&
      typeof window.safari.pushNotification !== 'undefined' || isSafariInIframe;

    return supportsVapid || supportsSafari;
  }



  oneSignalLogin(externalId: string, jwtToken?: string): Promise<void> {
    return new Promise((resolve, reject) => {
      if (isOneSignalScriptFailed) {
        reject();
      }

      if (!this.doesOneSignalExist()) {
        this.ngOneSignalFunctionQueue.push({
          name: 'oneSignalLogin',
          namespaceName: '',
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      window.OneSignalDeferred.push((oneSignal: IOneSignal) => {
        oneSignal.oneSignalLogin(externalId, jwtToken)
          .then((value: Promise<void>) => resolve(value))
          .catch((error: Error) => reject(error));
      });
    });
  }

  oneSignalLogout(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (isOneSignalScriptFailed) {
        reject();
      }

      if (!this.doesOneSignalExist()) {
        this.ngOneSignalFunctionQueue.push({
          name: 'oneSignalLogout',
          namespaceName: '',
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      window.OneSignalDeferred.push((oneSignal: IOneSignal) => {
        oneSignal.oneSignalLogout()
          .then((value: Promise<void>) => resolve(value))
          .catch((error: Error) => reject(error));
      });
    });
  }

  oneSignalSetConsentGiven(consent: boolean): Promise<void> {
    return new Promise((resolve, reject) => {
      if (isOneSignalScriptFailed) {
        reject();
      }

      if (!this.doesOneSignalExist()) {
        this.ngOneSignalFunctionQueue.push({
          name: 'oneSignalSetConsentGiven',
          namespaceName: '',
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      window.OneSignalDeferred.push((oneSignal: IOneSignal) => {
        oneSignal.oneSignalSetConsentGiven(consent)
          .then((value: Promise<void>) => resolve(value))
          .catch((error: Error) => reject(error));
      });
    });
  }

  oneSignalSetConsentRequired(requiresConsent: boolean): Promise<void> {
    return new Promise((resolve, reject) => {
      if (isOneSignalScriptFailed) {
        reject();
      }

      if (!this.doesOneSignalExist()) {
        this.ngOneSignalFunctionQueue.push({
          name: 'oneSignalSetConsentRequired',
          namespaceName: '',
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      window.OneSignalDeferred.push((oneSignal: IOneSignal) => {
        oneSignal.oneSignalSetConsentRequired(requiresConsent)
          .then((value: Promise<void>) => resolve(value))
          .catch((error: Error) => reject(error));
      });
    });
  }

  notificationsSetDefaultUrl(url: string): Promise<void> {
    return new Promise((resolve, reject) => {
      if (isOneSignalScriptFailed) {
        reject();
      }

      if (!this.doesOneSignalExist()) {
        this.ngOneSignalFunctionQueue.push({
          name: 'notificationsSetDefaultUrl',
          namespaceName: 'Notifications',
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      window.OneSignalDeferred.push((oneSignal: IOneSignal) => {
        oneSignal.Notifications.notificationsSetDefaultUrl(url)
          .then((value: Promise<void>) => resolve(value))
          .catch((error: Error) => reject(error));
      });
    });
  }

  notificationsSetDefaultTitle(title: string): Promise<void> {
    return new Promise((resolve, reject) => {
      if (isOneSignalScriptFailed) {
        reject();
      }

      if (!this.doesOneSignalExist()) {
        this.ngOneSignalFunctionQueue.push({
          name: 'notificationsSetDefaultTitle',
          namespaceName: 'Notifications',
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      window.OneSignalDeferred.push((oneSignal: IOneSignal) => {
        oneSignal.Notifications.notificationsSetDefaultTitle(title)
          .then((value: Promise<void>) => resolve(value))
          .catch((error: Error) => reject(error));
      });
    });
  }

  notificationsGetPermissionStatus(onComplete: Action<NotificationPermission>): Promise<NotificationPermission> {
    return new Promise((resolve, reject) => {
      if (isOneSignalScriptFailed) {
        reject();
      }

      if (!this.doesOneSignalExist()) {
        this.ngOneSignalFunctionQueue.push({
          name: 'notificationsGetPermissionStatus',
          namespaceName: 'Notifications',
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      window.OneSignalDeferred.push((oneSignal: IOneSignal) => {
        oneSignal.Notifications.notificationsGetPermissionStatus(onComplete)
          .then((value: Promise<NotificationPermission>) => resolve(value))
          .catch((error: Error) => reject(error));
      });
    });
  }

  notificationsRequestPermission(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (isOneSignalScriptFailed) {
        reject();
      }

      if (!this.doesOneSignalExist()) {
        this.ngOneSignalFunctionQueue.push({
          name: 'notificationsRequestPermission',
          namespaceName: 'Notifications',
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      window.OneSignalDeferred.push((oneSignal: IOneSignal) => {
        oneSignal.Notifications.notificationsRequestPermission()
          .then((value: Promise<void>) => resolve(value))
          .catch((error: Error) => reject(error));
      });
    });
  }

  notificationsAddEventListener(event: NotificationEventName, listener: (obj: any) => void): void {
    if (!this.doesOneSignalExist()) {
      this.ngOneSignalFunctionQueue.push({
        name: 'notificationsAddEventListener',
        namespaceName: 'Notifications',
        args: arguments,
      });
      return;
    }

    window.OneSignalDeferred.push((oneSignal: IOneSignal) => {
      oneSignal.notificationsAddEventListener(event, listener);
    });
  }

  notificationsRemoveEventListener(event: NotificationEventName, listener: (obj: any) => void): void {
    if (!this.doesOneSignalExist()) {
      this.ngOneSignalFunctionQueue.push({
        name: 'notificationsRemoveEventListener',
        namespaceName: 'Notifications',
        args: arguments,
      });
      return;
    }

    window.OneSignalDeferred.push((oneSignal: IOneSignal) => {
      oneSignal.notificationsRemoveEventListener(event, listener);
    });
  }

  slidedownPromptPush(options?: AutoPromptOptions): Promise<void> {
    return new Promise((resolve, reject) => {
      if (isOneSignalScriptFailed) {
        reject();
      }

      if (!this.doesOneSignalExist()) {
        this.ngOneSignalFunctionQueue.push({
          name: 'slidedownPromptPush',
          namespaceName: 'Slidedown',
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      window.OneSignalDeferred.push((oneSignal: IOneSignal) => {
        oneSignal.Slidedown.slidedownPromptPush(options)
          .then((value: Promise<void>) => resolve(value))
          .catch((error: Error) => reject(error));
      });
    });
  }

  slidedownPromptPushCategories(options?: AutoPromptOptions): Promise<void> {
    return new Promise((resolve, reject) => {
      if (isOneSignalScriptFailed) {
        reject();
      }

      if (!this.doesOneSignalExist()) {
        this.ngOneSignalFunctionQueue.push({
          name: 'slidedownPromptPushCategories',
          namespaceName: 'Slidedown',
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      window.OneSignalDeferred.push((oneSignal: IOneSignal) => {
        oneSignal.Slidedown.slidedownPromptPushCategories(options)
          .then((value: Promise<void>) => resolve(value))
          .catch((error: Error) => reject(error));
      });
    });
  }

  slidedownPromptSms(options?: AutoPromptOptions): Promise<void> {
    return new Promise((resolve, reject) => {
      if (isOneSignalScriptFailed) {
        reject();
      }

      if (!this.doesOneSignalExist()) {
        this.ngOneSignalFunctionQueue.push({
          name: 'slidedownPromptSms',
          namespaceName: 'Slidedown',
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      window.OneSignalDeferred.push((oneSignal: IOneSignal) => {
        oneSignal.Slidedown.slidedownPromptSms(options)
          .then((value: Promise<void>) => resolve(value))
          .catch((error: Error) => reject(error));
      });
    });
  }

  slidedownPromptEmail(options?: AutoPromptOptions): Promise<void> {
    return new Promise((resolve, reject) => {
      if (isOneSignalScriptFailed) {
        reject();
      }

      if (!this.doesOneSignalExist()) {
        this.ngOneSignalFunctionQueue.push({
          name: 'slidedownPromptEmail',
          namespaceName: 'Slidedown',
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      window.OneSignalDeferred.push((oneSignal: IOneSignal) => {
        oneSignal.Slidedown.slidedownPromptEmail(options)
          .then((value: Promise<void>) => resolve(value))
          .catch((error: Error) => reject(error));
      });
    });
  }

  slidedownPromptSmsAndEmail(options?: AutoPromptOptions): Promise<void> {
    return new Promise((resolve, reject) => {
      if (isOneSignalScriptFailed) {
        reject();
      }

      if (!this.doesOneSignalExist()) {
        this.ngOneSignalFunctionQueue.push({
          name: 'slidedownPromptSmsAndEmail',
          namespaceName: 'Slidedown',
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      window.OneSignalDeferred.push((oneSignal: IOneSignal) => {
        oneSignal.Slidedown.slidedownPromptSmsAndEmail(options)
          .then((value: Promise<void>) => resolve(value))
          .catch((error: Error) => reject(error));
      });
    });
  }

  slidedownAddEventListener(event: SlidedownEventName, listener: (wasShown: boolean) => void): void {
    if (!this.doesOneSignalExist()) {
      this.ngOneSignalFunctionQueue.push({
        name: 'slidedownAddEventListener',
        namespaceName: 'Slidedown',
        args: arguments,
      });
      return;
    }

    window.OneSignalDeferred.push((oneSignal: IOneSignal) => {
      oneSignal.slidedownAddEventListener(event, listener);
    });
  }

  slidedownRemoveEventListener(event: SlidedownEventName, listener: (wasShown: boolean) => void): void {
    if (!this.doesOneSignalExist()) {
      this.ngOneSignalFunctionQueue.push({
        name: 'slidedownRemoveEventListener',
        namespaceName: 'Slidedown',
        args: arguments,
      });
      return;
    }

    window.OneSignalDeferred.push((oneSignal: IOneSignal) => {
      oneSignal.slidedownRemoveEventListener(event, listener);
    });
  }

  debugSetLogLevel(logLevel: string): void {
    if (!this.doesOneSignalExist()) {
      this.ngOneSignalFunctionQueue.push({
        name: 'debugSetLogLevel',
        namespaceName: 'Debug',
        args: arguments,
      });
      return;
    }

    window.OneSignalDeferred.push((oneSignal: IOneSignal) => {
      oneSignal.debugSetLogLevel(logLevel);
    });
  }

  sessionSendOutcome(outcomeName: string, outcomeWeight?: number): Promise<void> {
    return new Promise((resolve, reject) => {
      if (isOneSignalScriptFailed) {
        reject();
      }

      if (!this.doesOneSignalExist()) {
        this.ngOneSignalFunctionQueue.push({
          name: 'sessionSendOutcome',
          namespaceName: 'Session',
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      window.OneSignalDeferred.push((oneSignal: IOneSignal) => {
        oneSignal.Session.sessionSendOutcome(outcomeName, outcomeWeight)
          .then((value: Promise<void>) => resolve(value))
          .catch((error: Error) => reject(error));
      });
    });
  }

  sessionSendUniqueOutcome(outcomeName: string): Promise<void> {
    return new Promise((resolve, reject) => {
      if (isOneSignalScriptFailed) {
        reject();
      }

      if (!this.doesOneSignalExist()) {
        this.ngOneSignalFunctionQueue.push({
          name: 'sessionSendUniqueOutcome',
          namespaceName: 'Session',
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      window.OneSignalDeferred.push((oneSignal: IOneSignal) => {
        oneSignal.Session.sessionSendUniqueOutcome(outcomeName)
          .then((value: Promise<void>) => resolve(value))
          .catch((error: Error) => reject(error));
      });
    });
  }

  userAddAlias(label: string, id: string): void {
    if (!this.doesOneSignalExist()) {
      this.ngOneSignalFunctionQueue.push({
        name: 'userAddAlias',
        namespaceName: 'User',
        args: arguments,
      });
      return;
    }

    window.OneSignalDeferred.push((oneSignal: IOneSignal) => {
      oneSignal.userAddAlias(label, id);
    });
  }

  userAddAliases(aliases: { [key: string]: string }): void {
    if (!this.doesOneSignalExist()) {
      this.ngOneSignalFunctionQueue.push({
        name: 'userAddAliases',
        namespaceName: 'User',
        args: arguments,
      });
      return;
    }

    window.OneSignalDeferred.push((oneSignal: IOneSignal) => {
      oneSignal.userAddAliases(aliases);
    });
  }

  userRemoveAlias(label: string): void {
    if (!this.doesOneSignalExist()) {
      this.ngOneSignalFunctionQueue.push({
        name: 'userRemoveAlias',
        namespaceName: 'User',
        args: arguments,
      });
      return;
    }

    window.OneSignalDeferred.push((oneSignal: IOneSignal) => {
      oneSignal.userRemoveAlias(label);
    });
  }

  userRemoveAliases(labels: string[]): void {
    if (!this.doesOneSignalExist()) {
      this.ngOneSignalFunctionQueue.push({
        name: 'userRemoveAliases',
        namespaceName: 'User',
        args: arguments,
      });
      return;
    }

    window.OneSignalDeferred.push((oneSignal: IOneSignal) => {
      oneSignal.userRemoveAliases(labels);
    });
  }

  userAddEmail(email: string): void {
    if (!this.doesOneSignalExist()) {
      this.ngOneSignalFunctionQueue.push({
        name: 'userAddEmail',
        namespaceName: 'User',
        args: arguments,
      });
      return;
    }

    window.OneSignalDeferred.push((oneSignal: IOneSignal) => {
      oneSignal.userAddEmail(email);
    });
  }

  userRemoveEmail(email: string): void {
    if (!this.doesOneSignalExist()) {
      this.ngOneSignalFunctionQueue.push({
        name: 'userRemoveEmail',
        namespaceName: 'User',
        args: arguments,
      });
      return;
    }

    window.OneSignalDeferred.push((oneSignal: IOneSignal) => {
      oneSignal.userRemoveEmail(email);
    });
  }

  userAddSms(smsNumber: string): void {
    if (!this.doesOneSignalExist()) {
      this.ngOneSignalFunctionQueue.push({
        name: 'userAddSms',
        namespaceName: 'User',
        args: arguments,
      });
      return;
    }

    window.OneSignalDeferred.push((oneSignal: IOneSignal) => {
      oneSignal.userAddSms(smsNumber);
    });
  }

  userRemoveSms(smsNumber: string): void {
    if (!this.doesOneSignalExist()) {
      this.ngOneSignalFunctionQueue.push({
        name: 'userRemoveSms',
        namespaceName: 'User',
        args: arguments,
      });
      return;
    }

    window.OneSignalDeferred.push((oneSignal: IOneSignal) => {
      oneSignal.userRemoveSms(smsNumber);
    });
  }

  pushSubscriptionOptIn(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (isOneSignalScriptFailed) {
        reject();
      }

      if (!this.doesOneSignalExist()) {
        this.ngOneSignalFunctionQueue.push({
          name: 'pushSubscriptionOptIn',
          namespaceName: 'PushSubscription',
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      window.OneSignalDeferred.push((oneSignal: IOneSignal) => {
        oneSignal.PushSubscription.pushSubscriptionOptIn()
          .then((value: Promise<void>) => resolve(value))
          .catch((error: Error) => reject(error));
      });
    });
  }

  pushSubscriptionOptOut(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (isOneSignalScriptFailed) {
        reject();
      }

      if (!this.doesOneSignalExist()) {
        this.ngOneSignalFunctionQueue.push({
          name: 'pushSubscriptionOptOut',
          namespaceName: 'PushSubscription',
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      window.OneSignalDeferred.push((oneSignal: IOneSignal) => {
        oneSignal.PushSubscription.pushSubscriptionOptOut()
          .then((value: Promise<void>) => resolve(value))
          .catch((error: Error) => reject(error));
      });
    });
  }

  pushSubscriptionAddEventListener(event: string, listener: (change: SubscriptionChangeEvent) => void): void {
    if (!this.doesOneSignalExist()) {
      this.ngOneSignalFunctionQueue.push({
        name: 'pushSubscriptionAddEventListener',
        namespaceName: 'PushSubscription',
        args: arguments,
      });
      return;
    }

    window.OneSignalDeferred.push((oneSignal: IOneSignal) => {
      oneSignal.pushSubscriptionAddEventListener(event, listener);
    });
  }

  pushSubscriptionRemoveEventListener(event: string, listener: (change: SubscriptionChangeEvent) => void): void {
    if (!this.doesOneSignalExist()) {
      this.ngOneSignalFunctionQueue.push({
        name: 'pushSubscriptionRemoveEventListener',
        namespaceName: 'PushSubscription',
        args: arguments,
      });
      return;
    }

    window.OneSignalDeferred.push((oneSignal: IOneSignal) => {
      oneSignal.pushSubscriptionRemoveEventListener(event, listener);
    });
  }
}
