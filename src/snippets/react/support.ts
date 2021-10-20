const ONESIGNAL_SDK_ID = 'onesignal-sdk';
const ONE_SIGNAL_SCRIPT_SRC = 'https://cdn.onesignal.com/sdks/OneSignalSDK.js';
const ONESIGNAL_NOT_SETUP_ERROR = 'OneSignal is not setup correctly.';
const reactOneSignalFunctionQueue = [];
const MAX_TIMEOUT = 30;

let isOneSignalInitialized = false;

const injectScript = () => {
  const script = document.createElement('script');
  script.id = ONESIGNAL_SDK_ID;
  script.src = ONE_SIGNAL_SCRIPT_SRC;
  script.async = true;
  document.head.appendChild(script);
}

const processQueuedOneSignalFunctions = () => {
  reactOneSignalFunctionQueue.forEach(element => {
    const { name, args, promiseResolver } = element;

    if (!!promiseResolver) {
      OneSignalReact[name](...args).then(result => {
        promiseResolver(result);
      });
    } else {
      OneSignalReact[name](...args);
    }
  });
}

const doesOneSignalExist = () => {
  if (window["OneSignal"]) {
    return true;
  }
  return false;
}

const setupOneSignalIfMissing = () => {
  if (!doesOneSignalExist()) {
    window["OneSignal"] = window["OneSignal"] || [];
  }
}

const init = (options: IInitObject) => new Promise<void>(resolve => {
  if (isOneSignalInitialized) {
    return;
  }

  if (!options || !options.appId) {
    throw new Error('You need to provide your OneSignal appId.');
  }
  if (!document) {
    return;
  }
  injectScript();
  setupOneSignalIfMissing();
  window["OneSignal"].push(() => {
    window["OneSignal"].init(options);
  });

  const timeout = setTimeout(() => {
    console.error(ONESIGNAL_NOT_SETUP_ERROR);
  }, MAX_TIMEOUT * 1_000);


  window["OneSignal"].push(() => {
    clearTimeout(timeout);
    processQueuedOneSignalFunctions();
    resolve();
  });

  isOneSignalInitialized = true;
});
