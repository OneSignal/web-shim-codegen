const ONESIGNAL_SDK_ID = 'onesignal-sdk';
const ONE_SIGNAL_SCRIPT_SRC = 'https://cdn.onesignal.com/sdks/OneSignalSDK.js';
const reactOneSignalFunctionQueue = [];

// true if the script is successfully loaded from CDN.
let isOneSignalInitialized = false;
// true if the script fails to load from CDN. A separate flag is necessary
// to disambiguate between a CDN load failure and a delayed call to
// OneSignal#init.
let isOneSignalScriptFailed = false;

const doesOneSignalExist = () => {
  if (window["OneSignal"]) {
    return true;
  }
  return false;
}

const handleOnLoad = (resolve: () => void, options: IInitObject) => {
  isOneSignalInitialized = true;

  // OneSignal is assumed to be loaded correctly because this method
  // is called after the script is successfully loaded by CDN, but
  // just in case.
  window["OneSignal"] = window["OneSignal"] || []

  window["OneSignal"].push(() => {
    window["OneSignal"].init(options);
  });

  window["OneSignal"].push(() => {
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
  script.src = ONE_SIGNAL_SCRIPT_SRC;
  script.async = true;

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
