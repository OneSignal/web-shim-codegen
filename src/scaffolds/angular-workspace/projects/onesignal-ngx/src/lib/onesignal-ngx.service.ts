interface Action<T>{ (item: T): void; }
interface AutoPromptOptions { force?: boolean; forceSlidedownOverNative?: boolean; slidedownPromptOptions?: IOneSignalAutoPromptOptions; }
interface RegisterOptions { modalPrompt?: boolean; httpPermissionRequest?: boolean; slidedown?: boolean; autoAccept?: boolean }
interface SetSMSOptions { identifierAuthHash?: string; }
interface SetEmailOptions { identifierAuthHash?: string; emailAuthHash?: string; }
interface TagsObject<T> { [key: string]: T; }
interface IOneSignalAutoPromptOptions { force?: boolean; forceSlidedownOverNative?: boolean; isInUpdateMode?: boolean; categoryOptions?: IOneSignalCategories; }
interface IOneSignalCategories { positiveUpdateButton: string; negativeUpdateButton: string; savingButtonText: string; errorButtonText: string; updateMessage: string; tags: IOneSignalTagCategory[]; }
interface IOneSignalTagCategory { tag: string; label: string; checked?: boolean; }


import { Injectable } from '@angular/core';
const ONESIGNAL_SDK_ID = 'onesignal-sdk';
const ONE_SIGNAL_SCRIPT_SRC = 'https://cdn.onesignal.com/sdks/OneSignalSDK.js';
const ONESIGNAL_NOT_SETUP_ERROR = 'OneSignal is not setup correctly.';
const MAX_TIMEOUT = 30;

declare global {
  interface Window {
    OneSignal: any;
  }
}

interface IOneSignalFunctionCall {
  name: string;
  args: IArguments;
  promiseResolver?: Function;
}

interface IOneSignalService {
  [key: string]: any
}

interface IInitObject {
  appId: string;
  subdomainName?: string;
  requiresUserPrivacyConsent?: boolean;
  promptOptions?: Object;
  welcomeNotification?: Object;
  notifyButton?: Object;
  persistNotification?: boolean;
  webhooks?: Object;
  autoResubscribe?: boolean;
  autoRegister?: boolean;
  notificationClickHandlerMatch?: string;
  notificationClickHandlerAction?: string;
  path?: string;
  [key: string]: any;
}

@Injectable({
  providedIn: 'root'
})
export class OneSignalService implements IOneSignalService {
  private isOneSignalInitialized = false;
  private ngOneSignalFunctionQueue: IOneSignalFunctionCall[] = [];

  constructor() { }

  /* H E L P E R S */

  private injectScript = () => {
    const script = document.createElement('script');
    script.id = ONESIGNAL_SDK_ID;
    script.src = ONE_SIGNAL_SCRIPT_SRC;
    script.async = true;
    document.head.appendChild(script);
  }

  private doesOneSignalExist = () => {
    if (window.OneSignal) {
      return true;
    }
    return false;
  }

  private processQueuedOneSignalFunctions = () => {
    this.ngOneSignalFunctionQueue.forEach(element => {
      const { name, args, promiseResolver } = element;

      if (!!promiseResolver) {
        (this as IOneSignalService)[name](...args).then((result: any) => {
          promiseResolver(result);
        });
      } else {
        window.OneSignal[name](...args);
      }
    });
  }

  private setupOneSignalIfMissing = () => {
    if (!this.doesOneSignalExist()) {
      window.OneSignal = window.OneSignal || [];
    }
  }

  /* P U B L I C */

  init(options: IInitObject) {
    return new Promise<void>(resolve => {
      if (this.isOneSignalInitialized) {
        return;
      }

      this.injectScript();
      this.setupOneSignalIfMissing();
      window.OneSignal.push(() => {
        window.OneSignal.init(options);
      })

      const timeout = setTimeout(() => {
        console.error(ONESIGNAL_NOT_SETUP_ERROR);
      }, MAX_TIMEOUT * 1_000);

      window.OneSignal.push(() => {
        clearTimeout(timeout);
        this.isOneSignalInitialized = true;
        this.processQueuedOneSignalFunctions();
        resolve();
      });
    })
  }


  on(event: string, listener: Function): void {
    if (!this.doesOneSignalExist()) {
      this.ngOneSignalFunctionQueue.push({
        name: "on",
        args: arguments,
      });
      return;
    }

    window.OneSignal.push(() => {
      window.OneSignal.on(event, listener)
    });
  };

  off(event: string, listener: Function): void {
    if (!this.doesOneSignalExist()) {
      this.ngOneSignalFunctionQueue.push({
        name: "off",
        args: arguments,
      });
      return;
    }

    window.OneSignal.push(() => {
      window.OneSignal.off(event, listener)
    });
  };

  once(event: string, listener: Function): void {
    if (!this.doesOneSignalExist()) {
      this.ngOneSignalFunctionQueue.push({
        name: "once",
        args: arguments,
      });
      return;
    }

    window.OneSignal.push(() => {
      window.OneSignal.once(event, listener)
    });
  };

  isPushNotificationsEnabled(callback?: Action<boolean>): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (!this.doesOneSignalExist()) {
        this.ngOneSignalFunctionQueue.push({
          name: "isPushNotificationsEnabled",
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      window.OneSignal.push(() => {
        window.OneSignal.isPushNotificationsEnabled(callback)
          .then((value: Promise<boolean>) => resolve(value))
          .catch((error: Error) => reject(error));
      });
    });
  };

  showHttpPrompt(options?: AutoPromptOptions): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!this.doesOneSignalExist()) {
        this.ngOneSignalFunctionQueue.push({
          name: "showHttpPrompt",
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      window.OneSignal.push(() => {
        window.OneSignal.showHttpPrompt(options)
          .then((value: Promise<void>) => resolve(value))
          .catch((error: Error) => reject(error));
      });
    });
  };

  registerForPushNotifications(options?: RegisterOptions): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!this.doesOneSignalExist()) {
        this.ngOneSignalFunctionQueue.push({
          name: "registerForPushNotifications",
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      window.OneSignal.push(() => {
        window.OneSignal.registerForPushNotifications(options)
          .then((value: Promise<void>) => resolve(value))
          .catch((error: Error) => reject(error));
      });
    });
  };

  setDefaultNotificationUrl(url: string): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!this.doesOneSignalExist()) {
        this.ngOneSignalFunctionQueue.push({
          name: "setDefaultNotificationUrl",
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      window.OneSignal.push(() => {
        window.OneSignal.setDefaultNotificationUrl(url)
          .then((value: Promise<void>) => resolve(value))
          .catch((error: Error) => reject(error));
      });
    });
  };

  setDefaultTitle(title: string): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!this.doesOneSignalExist()) {
        this.ngOneSignalFunctionQueue.push({
          name: "setDefaultTitle",
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      window.OneSignal.push(() => {
        window.OneSignal.setDefaultTitle(title)
          .then((value: Promise<void>) => resolve(value))
          .catch((error: Error) => reject(error));
      });
    });
  };

  getTags(callback?: Action<any>): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!this.doesOneSignalExist()) {
        this.ngOneSignalFunctionQueue.push({
          name: "getTags",
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      window.OneSignal.push(() => {
        window.OneSignal.getTags(callback)
          .then((value: Promise<void>) => resolve(value))
          .catch((error: Error) => reject(error));
      });
    });
  };

  sendTag(key: string, value: any, callback?: Action<Object>): Promise<Object | null> {
    return new Promise((resolve, reject) => {
      if (!this.doesOneSignalExist()) {
        this.ngOneSignalFunctionQueue.push({
          name: "sendTag",
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      window.OneSignal.push(() => {
        window.OneSignal.sendTag(key, value, callback)
          .then((value: Promise<Object | null>) => resolve(value))
          .catch((error: Error) => reject(error));
      });
    });
  };

  sendTags(tags: TagsObject<any>, callback?: Action<Object>): Promise<Object | null> {
    return new Promise((resolve, reject) => {
      if (!this.doesOneSignalExist()) {
        this.ngOneSignalFunctionQueue.push({
          name: "sendTags",
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      window.OneSignal.push(() => {
        window.OneSignal.sendTags(tags, callback)
          .then((value: Promise<Object | null>) => resolve(value))
          .catch((error: Error) => reject(error));
      });
    });
  };

  deleteTag(tag: string): Promise<Array<string>> {
    return new Promise((resolve, reject) => {
      if (!this.doesOneSignalExist()) {
        this.ngOneSignalFunctionQueue.push({
          name: "deleteTag",
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      window.OneSignal.push(() => {
        window.OneSignal.deleteTag(tag)
          .then((value: Promise<Array<string>>) => resolve(value))
          .catch((error: Error) => reject(error));
      });
    });
  };

  deleteTags(tags: Array<string>, callback?: Action<Array<string>>): Promise<Array<string>> {
    return new Promise((resolve, reject) => {
      if (!this.doesOneSignalExist()) {
        this.ngOneSignalFunctionQueue.push({
          name: "deleteTags",
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      window.OneSignal.push(() => {
        window.OneSignal.deleteTags(tags, callback)
          .then((value: Promise<Array<string>>) => resolve(value))
          .catch((error: Error) => reject(error));
      });
    });
  };

  addListenerForNotificationOpened(callback?: Action<Notification>): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!this.doesOneSignalExist()) {
        this.ngOneSignalFunctionQueue.push({
          name: "addListenerForNotificationOpened",
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      window.OneSignal.push(() => {
        window.OneSignal.addListenerForNotificationOpened(callback)
          .then((value: Promise<void>) => resolve(value))
          .catch((error: Error) => reject(error));
      });
    });
  };

  setSubscription(newSubscription: boolean): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!this.doesOneSignalExist()) {
        this.ngOneSignalFunctionQueue.push({
          name: "setSubscription",
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      window.OneSignal.push(() => {
        window.OneSignal.setSubscription(newSubscription)
          .then((value: Promise<void>) => resolve(value))
          .catch((error: Error) => reject(error));
      });
    });
  };

  showHttpPermissionRequest(options?: AutoPromptOptions): Promise<any> {
    return new Promise((resolve, reject) => {
      if (!this.doesOneSignalExist()) {
        this.ngOneSignalFunctionQueue.push({
          name: "showHttpPermissionRequest",
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      window.OneSignal.push(() => {
        window.OneSignal.showHttpPermissionRequest(options)
          .then((value: Promise<any>) => resolve(value))
          .catch((error: Error) => reject(error));
      });
    });
  };

  showNativePrompt(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!this.doesOneSignalExist()) {
        this.ngOneSignalFunctionQueue.push({
          name: "showNativePrompt",
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      window.OneSignal.push(() => {
        window.OneSignal.showNativePrompt()
          .then((value: Promise<void>) => resolve(value))
          .catch((error: Error) => reject(error));
      });
    });
  };

  showSlidedownPrompt(options?: AutoPromptOptions): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!this.doesOneSignalExist()) {
        this.ngOneSignalFunctionQueue.push({
          name: "showSlidedownPrompt",
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      window.OneSignal.push(() => {
        window.OneSignal.showSlidedownPrompt(options)
          .then((value: Promise<void>) => resolve(value))
          .catch((error: Error) => reject(error));
      });
    });
  };

  showCategorySlidedown(options?: AutoPromptOptions): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!this.doesOneSignalExist()) {
        this.ngOneSignalFunctionQueue.push({
          name: "showCategorySlidedown",
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      window.OneSignal.push(() => {
        window.OneSignal.showCategorySlidedown(options)
          .then((value: Promise<void>) => resolve(value))
          .catch((error: Error) => reject(error));
      });
    });
  };

  showSmsSlidedown(options?: AutoPromptOptions): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!this.doesOneSignalExist()) {
        this.ngOneSignalFunctionQueue.push({
          name: "showSmsSlidedown",
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      window.OneSignal.push(() => {
        window.OneSignal.showSmsSlidedown(options)
          .then((value: Promise<void>) => resolve(value))
          .catch((error: Error) => reject(error));
      });
    });
  };

  showEmailSlidedown(options?: AutoPromptOptions): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!this.doesOneSignalExist()) {
        this.ngOneSignalFunctionQueue.push({
          name: "showEmailSlidedown",
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      window.OneSignal.push(() => {
        window.OneSignal.showEmailSlidedown(options)
          .then((value: Promise<void>) => resolve(value))
          .catch((error: Error) => reject(error));
      });
    });
  };

  showSmsAndEmailSlidedown(options?: AutoPromptOptions): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!this.doesOneSignalExist()) {
        this.ngOneSignalFunctionQueue.push({
          name: "showSmsAndEmailSlidedown",
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      window.OneSignal.push(() => {
        window.OneSignal.showSmsAndEmailSlidedown(options)
          .then((value: Promise<void>) => resolve(value))
          .catch((error: Error) => reject(error));
      });
    });
  };

  getNotificationPermission(onComplete?: Function): Promise<NotificationPermission> {
    return new Promise((resolve, reject) => {
      if (!this.doesOneSignalExist()) {
        this.ngOneSignalFunctionQueue.push({
          name: "getNotificationPermission",
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      window.OneSignal.push(() => {
        window.OneSignal.getNotificationPermission(onComplete)
          .then((value: Promise<NotificationPermission>) => resolve(value))
          .catch((error: Error) => reject(error));
      });
    });
  };

  getUserId(callback?: Action<string | undefined | null>): Promise<string | undefined | null> {
    return new Promise((resolve, reject) => {
      if (!this.doesOneSignalExist()) {
        this.ngOneSignalFunctionQueue.push({
          name: "getUserId",
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      window.OneSignal.push(() => {
        window.OneSignal.getUserId(callback)
          .then((value: Promise<string | undefined | null>) => resolve(value))
          .catch((error: Error) => reject(error));
      });
    });
  };

  getSubscription(callback?: Action<boolean>): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (!this.doesOneSignalExist()) {
        this.ngOneSignalFunctionQueue.push({
          name: "getSubscription",
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      window.OneSignal.push(() => {
        window.OneSignal.getSubscription(callback)
          .then((value: Promise<boolean>) => resolve(value))
          .catch((error: Error) => reject(error));
      });
    });
  };

  setEmail(email: string, options?: SetEmailOptions): Promise<string|null> {
    return new Promise((resolve, reject) => {
      if (!this.doesOneSignalExist()) {
        this.ngOneSignalFunctionQueue.push({
          name: "setEmail",
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      window.OneSignal.push(() => {
        window.OneSignal.setEmail(email, options)
          .then((value: Promise<string|null>) => resolve(value))
          .catch((error: Error) => reject(error));
      });
    });
  };

  setSMSNumber(smsNumber: string, options?: SetSMSOptions): Promise<string | null> {
    return new Promise((resolve, reject) => {
      if (!this.doesOneSignalExist()) {
        this.ngOneSignalFunctionQueue.push({
          name: "setSMSNumber",
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      window.OneSignal.push(() => {
        window.OneSignal.setSMSNumber(smsNumber, options)
          .then((value: Promise<string | null>) => resolve(value))
          .catch((error: Error) => reject(error));
      });
    });
  };

  logoutEmail(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!this.doesOneSignalExist()) {
        this.ngOneSignalFunctionQueue.push({
          name: "logoutEmail",
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      window.OneSignal.push(() => {
        window.OneSignal.logoutEmail()
          .then((value: Promise<void>) => resolve(value))
          .catch((error: Error) => reject(error));
      });
    });
  };

  logoutSMS(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!this.doesOneSignalExist()) {
        this.ngOneSignalFunctionQueue.push({
          name: "logoutSMS",
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      window.OneSignal.push(() => {
        window.OneSignal.logoutSMS()
          .then((value: Promise<void>) => resolve(value))
          .catch((error: Error) => reject(error));
      });
    });
  };

  setExternalUserId(externalUserId: string | undefined | null, authHash?: string): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!this.doesOneSignalExist()) {
        this.ngOneSignalFunctionQueue.push({
          name: "setExternalUserId",
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      window.OneSignal.push(() => {
        window.OneSignal.setExternalUserId(externalUserId, authHash)
          .then((value: Promise<void>) => resolve(value))
          .catch((error: Error) => reject(error));
      });
    });
  };

  removeExternalUserId(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!this.doesOneSignalExist()) {
        this.ngOneSignalFunctionQueue.push({
          name: "removeExternalUserId",
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      window.OneSignal.push(() => {
        window.OneSignal.removeExternalUserId()
          .then((value: Promise<void>) => resolve(value))
          .catch((error: Error) => reject(error));
      });
    });
  };

  getExternalUserId(): Promise<string | undefined | null> {
    return new Promise((resolve, reject) => {
      if (!this.doesOneSignalExist()) {
        this.ngOneSignalFunctionQueue.push({
          name: "getExternalUserId",
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      window.OneSignal.push(() => {
        window.OneSignal.getExternalUserId()
          .then((value: Promise<string | undefined | null>) => resolve(value))
          .catch((error: Error) => reject(error));
      });
    });
  };

  provideUserConsent(consent: boolean): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!this.doesOneSignalExist()) {
        this.ngOneSignalFunctionQueue.push({
          name: "provideUserConsent",
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      window.OneSignal.push(() => {
        window.OneSignal.provideUserConsent(consent)
          .then((value: Promise<void>) => resolve(value))
          .catch((error: Error) => reject(error));
      });
    });
  };

  getEmailId(callback?: Action<string | undefined>): Promise<string | null | undefined> {
    return new Promise((resolve, reject) => {
      if (!this.doesOneSignalExist()) {
        this.ngOneSignalFunctionQueue.push({
          name: "getEmailId",
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      window.OneSignal.push(() => {
        window.OneSignal.getEmailId(callback)
          .then((value: Promise<string | null | undefined>) => resolve(value))
          .catch((error: Error) => reject(error));
      });
    });
  };

  getSMSId(callback?: Action<string | undefined>): Promise<string | null | undefined> {
    return new Promise((resolve, reject) => {
      if (!this.doesOneSignalExist()) {
        this.ngOneSignalFunctionQueue.push({
          name: "getSMSId",
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      window.OneSignal.push(() => {
        window.OneSignal.getSMSId(callback)
          .then((value: Promise<string | null | undefined>) => resolve(value))
          .catch((error: Error) => reject(error));
      });
    });
  };

  sendOutcome(outcomeName: string, outcomeWeight?: number | undefined): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!this.doesOneSignalExist()) {
        this.ngOneSignalFunctionQueue.push({
          name: "sendOutcome",
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      window.OneSignal.push(() => {
        window.OneSignal.sendOutcome(outcomeName, outcomeWeight)
          .then((value: Promise<void>) => resolve(value))
          .catch((error: Error) => reject(error));
      });
    });
  };
}
