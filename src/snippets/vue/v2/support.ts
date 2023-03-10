import Vue from 'vue';

const ONESIGNAL_SDK_ID = 'onesignal-sdk';
const ONE_SIGNAL_SCRIPT_SRC = "https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js";

type FunctionQueueItem = { name: string; args: IArguments; namespaceName?: string, promiseResolver?: (result: any) => any };
const vueOneSignalFunctionQueue: FunctionQueueItem[] = [];

// true if the script is successfully loaded from CDN.
let isOneSignalInitialized = false;
// true if the script fails to load from CDN. A separate flag is necessary
// to disambiguate between a CDN load failure and a delayed call to
// OneSignal#init.
let isOneSignalScriptFailed = false;

const VueApp: any = Vue;

/* H E L P E R S */

const doesOneSignalExist = () => {
  if (window["OneSignalDeferred"]) {
    return true;
  }
  return false;
}

const handleOnLoad = (resolve: () => void, options: IInitObject) => {
  isOneSignalInitialized = true;

  // OneSignal is assumed to be loaded correctly because this method
  // is called after the script is successfully loaded by CDN, but
  // just in case.
  window["OneSignalDeferred"] = window["OneSignalDeferred"] || []

  window["OneSignalDeferred"].push((OneSignal) => {
    OneSignal.init(options);
  });

  window["OneSignalDeferred"].push(() => {
    processQueuedOneSignalFunctions();
    resolve();
  });
}

const handleOnError = (resolve: () => void) => {
  isOneSignalScriptFailed = true;
  // Ensure that any unresolved functions are cleared from the queue,
  // even in the event of a CDN load failure.
  processQueuedOneSignalFunctions();
  resolve();
}

const processQueuedOneSignalFunctions = () => {
  vueOneSignalFunctionQueue.forEach(element => {
    const { name, args, namespaceName, promiseResolver } = element;

    if (!!promiseResolver && !!namespaceName) {
      OneSignalNamespace[namespaceName][name](...args).then(result => {
        promiseResolver(result);
      });
    } else if (!!namespaceName) {
      OneSignalNamespace[namespaceName][name](...args);
    }
  });
}

/* T Y P E   D E C L A R A T I O N S */

declare module 'vue/types/vue' {
  interface Vue {
    $OneSignal: IOneSignal;
  }
}

declare global {
  interface Window {
    OneSignal: any;
    safari?: {
      pushNotificationPermission: (permissionData: any) => void;
      pushNotification: any;
    };
  }
}

/* O N E S I G N A L   A P I  */

/**
 * @PublicApi
 */
const init = (options: IInitObject) => new Promise<void>(resolve => {
  if (isOneSignalInitialized) {
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
    handleOnLoad(resolve, options);
  };

  // Always resolve whether or not the script is successfully initialized.
  // This is important for users who may block cdn.onesignal.com w/ adblock.
  script.onerror = () => {
    handleOnError(resolve);
  }

  document.head.appendChild(script);
});

/**
 * @PublicApi
 */
const isPushSupported = (): boolean => {
  const supportsVapid = typeof PushSubscriptionOptions !== "undefined" && PushSubscriptionOptions.prototype.hasOwnProperty("applicationServerKey");
  const isSafariInIframe = navigator.vendor === "Apple Computer, Inc." && window.top !== window;
  const supportsSafari = typeof window.safari !== "undefined" && typeof window.safari.pushNotification !== "undefined" || isSafariInIframe;

  return supportsVapid || supportsSafari;
}
