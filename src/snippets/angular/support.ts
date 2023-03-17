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
        this[namespaceName][name](...args).then((result: any) => {
          promiseResolver(result);
        });
      } else {
        this[namespaceName][name](...args);
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
