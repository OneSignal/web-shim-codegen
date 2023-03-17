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

