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

import { Injectable } from '@angular/core';
const ONESIGNAL_SDK_ID = 'onesignal-sdk';
const ONE_SIGNAL_SCRIPT_SRC = 'https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js';

// true if the script is successfully loaded from CDN.
let isOneSignalInitialized = false;
// true if the script fails to load from CDN. A separate flag is necessary
// to disambiguate between a CDN load failure and a delayed call to
// OneSignal#init.
let isOneSignalScriptFailed = false;

declare global {
  interface Window {
    OneSignalDeferred?: OneSignalDeferredLoadedCallback[];
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
  private isOneSignalInitialized = false;

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
  }

  addSDKScript(): void {
    const script = document.createElement('script');
    script.id = ONESIGNAL_SDK_ID;
    script.defer = true;
    script.src = ONE_SIGNAL_SCRIPT_SRC;

    // Always resolve whether or not the script is successfully initialized.
    // This is important for users who may block cdn.onesignal.com w/ adblock.
    script.onerror = () => {
      this.handleOnError();
    };

    document.head.appendChild(script);
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
      window.OneSignalDeferred?.push((oneSignal: IOneSignalOneSignal) => {
        oneSignal.init(options).then(() => {
          isOneSignalInitialized = true;
          resolve();
        });
      });
    });
  }

  /**
   * The following code is copied directly from the native SDK source file BrowserSupportsPush.ts
   * S T A R T
   */

  // Checks if the browser supports push notifications by checking if specific
  //   classes and properties on them exist
  private isPushNotificationsSupported() {
    return this.supportsVapidPush() || this.supportsSafariPush();
  }

  private isMacOSSafariInIframe(): boolean {
    // Fallback detection for Safari on macOS in an iframe context
    return window.top !== window && // isContextIframe
    navigator.vendor === "Apple Computer, Inc." && // isSafari
    navigator.platform === "MacIntel"; // isMacOS
  }

  private supportsSafariPush(): boolean {
    return (window.safari && typeof window.safari.pushNotification !== "undefined") ||
            this.isMacOSSafariInIframe();
  }

  // Does the browser support the standard Push API
  private supportsVapidPush(): boolean {
    return typeof PushSubscriptionOptions !== "undefined" &&
          PushSubscriptionOptions.prototype.hasOwnProperty("applicationServerKey");
  }
  /* E N D */

  /**
   * @PublicApi
   */
  isPushSupported(): boolean {
    return this.isPushNotificationsSupported();
  }


  oneSignalLogin(externalId: string, jwtToken?: string): Promise<void> {
    return new Promise((resolve, reject) => {
      if (isOneSignalScriptFailed) {
        reject();
      }

      window.OneSignalDeferred?.push((oneSignal: IOneSignalOneSignal) => {
        oneSignal.login(externalId, jwtToken)
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

      window.OneSignalDeferred?.push((oneSignal: IOneSignalOneSignal) => {
        oneSignal.logout()
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

      window.OneSignalDeferred?.push((oneSignal: IOneSignalOneSignal) => {
        oneSignal.setConsentGiven(consent)
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

      window.OneSignalDeferred?.push((oneSignal: IOneSignalOneSignal) => {
        oneSignal.setConsentRequired(requiresConsent)
          .then((value: Promise<void>) => resolve(value))
          .catch((error: Error) => reject(error));
      });
    });
  }

  slidedownPromptPush(options?: AutoPromptOptions): Promise<void> {
    return new Promise((resolve, reject) => {
      if (isOneSignalScriptFailed) {
        reject();
      }

      window.OneSignalDeferred?.push((oneSignal: IOneSignalOneSignal) => {
        oneSignal.Slidedown.promptPush(options)
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

      window.OneSignalDeferred?.push((oneSignal: IOneSignalOneSignal) => {
        oneSignal.Slidedown.promptPushCategories(options)
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

      window.OneSignalDeferred?.push((oneSignal: IOneSignalOneSignal) => {
        oneSignal.Slidedown.promptSms(options)
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

      window.OneSignalDeferred?.push((oneSignal: IOneSignalOneSignal) => {
        oneSignal.Slidedown.promptEmail(options)
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

      window.OneSignalDeferred?.push((oneSignal: IOneSignalOneSignal) => {
        oneSignal.Slidedown.promptSmsAndEmail(options)
          .then((value: Promise<void>) => resolve(value))
          .catch((error: Error) => reject(error));
      });
    });
  }

  slidedownAddEventListener(event: SlidedownEventName, listener: (wasShown: boolean) => void): void {
    window.OneSignalDeferred?.push((oneSignal: IOneSignalOneSignal) => {
      oneSignal.Slidedown.addEventListener(event, listener);
    });
  }

  slidedownRemoveEventListener(event: SlidedownEventName, listener: (wasShown: boolean) => void): void {
    window.OneSignalDeferred?.push((oneSignal: IOneSignalOneSignal) => {
      oneSignal.Slidedown.removeEventListener(event, listener);
    });
  }

  notificationsSetDefaultUrl(url: string): Promise<void> {
    return new Promise((resolve, reject) => {
      if (isOneSignalScriptFailed) {
        reject();
      }

      window.OneSignalDeferred?.push((oneSignal: IOneSignalOneSignal) => {
        oneSignal.Notifications.setDefaultUrl(url)
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

      window.OneSignalDeferred?.push((oneSignal: IOneSignalOneSignal) => {
        oneSignal.Notifications.setDefaultTitle(title)
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

      window.OneSignalDeferred?.push((oneSignal: IOneSignalOneSignal) => {
        oneSignal.Notifications.getPermissionStatus(onComplete)
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

      window.OneSignalDeferred?.push((oneSignal: IOneSignalOneSignal) => {
        oneSignal.Notifications.requestPermission()
          .then((value: Promise<void>) => resolve(value))
          .catch((error: Error) => reject(error));
      });
    });
  }

notificationsAddEventListener(event: 'click' | 'willDisplay' | 'dismiss', listener: (obj: StructuredNotification) => void): void;
notificationsAddEventListener(event: 'permissionChange', listener: (obj: { to: NotificationPermission }) => void): void;
notificationsAddEventListener(event: 'permissionPromptDisplay', listener: () => void): void;

  notificationsAddEventListener(event: NotificationEventName, listener: (obj: any) => void): void {
    window.OneSignalDeferred?.push((oneSignal: IOneSignalOneSignal) => {
      oneSignal.Notifications.addEventListener(event, listener);
    });
  }

notificationsRemoveEventListener(event: 'click' | 'willDisplay' | 'dismiss', listener: (obj: StructuredNotification) => void): void;
notificationsRemoveEventListener(event: 'permissionChange', listener: (obj: { to: NotificationPermission }) => void): void;
notificationsRemoveEventListener(event: 'permissionPromptDisplay', listener: () => void): void;

  notificationsRemoveEventListener(event: NotificationEventName, listener: (obj: any) => void): void {
    window.OneSignalDeferred?.push((oneSignal: IOneSignalOneSignal) => {
      oneSignal.Notifications.removeEventListener(event, listener);
    });
  }

  sessionSendOutcome(outcomeName: string, outcomeWeight?: number): Promise<void> {
    return new Promise((resolve, reject) => {
      if (isOneSignalScriptFailed) {
        reject();
      }

      window.OneSignalDeferred?.push((oneSignal: IOneSignalOneSignal) => {
        oneSignal.Session.sendOutcome(outcomeName, outcomeWeight)
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

      window.OneSignalDeferred?.push((oneSignal: IOneSignalOneSignal) => {
        oneSignal.Session.sendUniqueOutcome(outcomeName)
          .then((value: Promise<void>) => resolve(value))
          .catch((error: Error) => reject(error));
      });
    });
  }

  userAddAlias(label: string, id: string): void {
    window.OneSignalDeferred?.push((oneSignal: IOneSignalOneSignal) => {
      oneSignal.User.addAlias(label, id);
    });
  }

  userAddAliases(aliases: { [key: string]: string }): void {
    window.OneSignalDeferred?.push((oneSignal: IOneSignalOneSignal) => {
      oneSignal.User.addAliases(aliases);
    });
  }

  userRemoveAlias(label: string): void {
    window.OneSignalDeferred?.push((oneSignal: IOneSignalOneSignal) => {
      oneSignal.User.removeAlias(label);
    });
  }

  userRemoveAliases(labels: string[]): void {
    window.OneSignalDeferred?.push((oneSignal: IOneSignalOneSignal) => {
      oneSignal.User.removeAliases(labels);
    });
  }

  userAddEmail(email: string): void {
    window.OneSignalDeferred?.push((oneSignal: IOneSignalOneSignal) => {
      oneSignal.User.addEmail(email);
    });
  }

  userRemoveEmail(email: string): void {
    window.OneSignalDeferred?.push((oneSignal: IOneSignalOneSignal) => {
      oneSignal.User.removeEmail(email);
    });
  }

  userAddSms(smsNumber: string): void {
    window.OneSignalDeferred?.push((oneSignal: IOneSignalOneSignal) => {
      oneSignal.User.addSms(smsNumber);
    });
  }

  userRemoveSms(smsNumber: string): void {
    window.OneSignalDeferred?.push((oneSignal: IOneSignalOneSignal) => {
      oneSignal.User.removeSms(smsNumber);
    });
  }

  pushSubscriptionOptIn(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (isOneSignalScriptFailed) {
        reject();
      }

      window.OneSignalDeferred?.push((oneSignal: IOneSignalOneSignal) => {
        oneSignal.User.PushSubscription.optIn()
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

      window.OneSignalDeferred?.push((oneSignal: IOneSignalOneSignal) => {
        oneSignal.User.PushSubscription.optOut()
          .then((value: Promise<void>) => resolve(value))
          .catch((error: Error) => reject(error));
      });
    });
  }

  pushSubscriptionAddEventListener(event: 'subscriptionChange', listener: (change: SubscriptionChangeEvent) => void): void {
    window.OneSignalDeferred?.push((oneSignal: IOneSignalOneSignal) => {
      oneSignal.User.PushSubscription.addEventListener(event, listener);
    });
  }

  pushSubscriptionRemoveEventListener(event: 'subscriptionChange', listener: (change: SubscriptionChangeEvent) => void): void {
    window.OneSignalDeferred?.push((oneSignal: IOneSignalOneSignal) => {
      oneSignal.User.PushSubscription.removeEventListener(event, listener);
    });
  }

  debugSetLogLevel(logLevel: string): void {
    window.OneSignalDeferred?.push((oneSignal: IOneSignalOneSignal) => {
      oneSignal.Debug.setLogLevel(logLevel);
    });
  }
}
