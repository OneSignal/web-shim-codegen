import { App } from 'vue';

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

window['OneSignalDeferred'] = window['OneSignalDeferred'] || [];

addSDKScript();

/* H E L P E R S */

function doesOneSignalExist() {
  if (window['OneSignalDeferred']) {
    return true;
  }
  return false;
}

const processQueuedOneSignalFunctions = () => {
  vueOneSignalFunctionQueue.forEach(element => {
    const { name, args, namespaceName, promiseResolver } = element;

    if (!!promiseResolver) {
      OneSignalNamespace[namespaceName][name](...args).then(result => {
        promiseResolver(result);
      });
    } else {
      OneSignalNamespace[namespaceName][name](...args);
    }
  });
}

function handleOnError() {
  isOneSignalScriptFailed = true;
  // Ensure that any unresolved functions are cleared from the queue,
  // even in the event of a CDN load failure.
  processQueuedOneSignalFunctions();
}

function addSDKScript() {
  const script = document.createElement('script');
  script.id = ONESIGNAL_SDK_ID;
  script.defer = true;
  script.src = ONE_SIGNAL_SCRIPT_SRC;

  script.onload = () => {
    processQueuedOneSignalFunctions();
  };

  // Always resolve whether or not the script is successfully initialized.
  // This is important for users who may block cdn.onesignal.com w/ adblock.
  script.onerror = () => {
    handleOnError();
  }

  document.head.appendChild(script);
}
/* T Y P E   D E C L A R A T I O N S */

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
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
    return Promise.reject(`OneSignal is already initialized.`);
  }

  if (!options || !options.appId) {
    throw new Error('You need to provide your OneSignal appId.');
  }

  if (!document) {
    return Promise.reject(`Document is not defined.`);
  }

  return new Promise<void>((resolve) => {
    window['OneSignalDeferred'].push((OneSignal) => {
      OneSignal.init(options).then(() => {
        isOneSignalInitialized = true;
        resolve();
      });
    });
  });
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
