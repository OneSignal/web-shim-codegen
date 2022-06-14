import { App } from 'vue';

const ONESIGNAL_SDK_ID = 'onesignal-sdk';
const ONE_SIGNAL_SCRIPT_SRC = 'https://cdn.onesignal.com/sdks/OneSignalSDK.js';
const ONESIGNAL_NOT_SETUP_ERROR = 'OneSignal is not setup correctly.';
const MAX_TIMEOUT = 30;

let isOneSignalInitialized = false;
const vueOneSignalFunctionQueue: IOneSignalFunctionCall[] = [];

/* H E L P E R S */

const injectScript = () => {
  const script = document.createElement('script');
  script.id = ONESIGNAL_SDK_ID;
  script.src = ONE_SIGNAL_SCRIPT_SRC;
  script.async = true;
  document.head.appendChild(script);
}

const doesOneSignalExist = () => {
  if (window.OneSignal) {
    return true;
  }
  return false;
}

const processQueuedOneSignalFunctions = () => {
  vueOneSignalFunctionQueue.forEach(element => {
    const { name, args, promiseResolver } = element;

    if (!!promiseResolver) {
      OneSignalVue[name](...args).then((result: any) => {
        promiseResolver(result);
      });
    } else {
      window.OneSignal[name](...args);
    }
  });
}

const setupOneSignalIfMissing = () => {
  if (!doesOneSignalExist()) {
    window.OneSignal = window.OneSignal || [];
  }
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
  }
}

interface IOneSignalFunctionCall {
  name: string;
  args: IArguments;
  promiseResolver?: Function;
}
