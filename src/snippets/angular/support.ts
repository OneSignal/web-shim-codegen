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

  private doesOneSignalExist = () => {
    if (window.OneSignalDeferred) {
      return true;
    }
    return false;
  }

  private handleOnLoad(resolve: () => void, options: IInitObject): void {
    isOneSignalInitialized = true;

    // OneSignal is assumed to be loaded correctly because this method
    // is called after the script is successfully loaded by CDN, but
    // just in case.
    window.OneSignalDeferred = window.OneSignalDeferred || []

    window.OneSignalDeferred.push((oneSignal: IOneSignal) => {
      oneSignal.init(options);
    });

    window.OneSignalDeferred.push(() => {
      this.processQueuedOneSignalFunctions();
      resolve();
    });
  }

  private handleOnError(resolve: () => void): void {
    isOneSignalScriptFailed = true;
    // Ensure that any unresolved functions are cleared from the queue,
    // even in the event of a CDN load failure.
    this.processQueuedOneSignalFunctions();
    resolve();
  }

  private processQueuedOneSignalFunctions = () => {
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
    return new Promise<void>(resolve => {
      if (this.isOneSignalInitialized) {
        resolve();
        return;
      }

      if (!options || !options.appId) {
        throw new Error('You need to provide your OneSignal appId.');
      }
      if (!document) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.id = ONESIGNAL_SDK_ID;
      script.defer = true;
      script.src = ONE_SIGNAL_SCRIPT_SRC;

      script.onload = () => {
        this.handleOnLoad(resolve, options);
      };

      // Always resolve whether or not the script is successfully initialized.
      // This is important for users who may block cdn.onesignal.com w/ adblock.
      script.onerror = () => {
        this.handleOnError(resolve);
      };

      document.head.appendChild(script);
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

