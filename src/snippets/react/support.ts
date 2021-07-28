// file written in pure JS
const ONESIGNAL_SDK_ID = 'onesignal-sdk';
const MODULE_ID = 'onesignal-module';
const ONE_SIGNAL_SCRIPT_SRC = 'https://cdn.onesignal.com/sdks/OneSignalSDK.js';
const ONESIGNAL_NOT_SETUP_ERROR = 'OneSignal is not setup correctly.';
const reactOneSignalFunctionQueue = [];
const MAX_TIMEOUT = 30;

const getModuleScriptBody = (options = {}) => {
    const mappedOptions = JSON.stringify(options, null, 2);

    return `
      var OneSignal = window.OneSignal || [];
      OneSignal.push(function() {
        OneSignal.init(${mappedOptions});
      });
    `;
};

const injectScript = (id, buildScript) => {
  const hasScript = !!document.getElementById(id);
  if (hasScript) {
    return;
  }
  let script = document.createElement('script');
  script.id = id;
  script = buildScript(script);
  document.body.appendChild(script);
};

const injectSDKScript = () => {
    injectScript(ONESIGNAL_SDK_ID, (script) => {
      script.src = ONE_SIGNAL_SCRIPT_SRC;
      return script;
    });
};

const injectModuleScript = (options= {}) => {
  injectScript(MODULE_ID, (script) => {
    script.innerHTML = getModuleScriptBody(options);
    script.async = true;
    return script;
  });
};

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

const init = (options) => new Promise(resolve => {
  if (!options || !options.appId) {
    throw new Error('You need to provide your OneSignal appId.');
  }
  if (!document) {
    return;
  }
  injectSDKScript();
  injectModuleScript(options);

  const timeout = setTimeout(() => {
    console.error(ONESIGNAL_NOT_SETUP_ERROR);
  }, MAX_TIMEOUT * 1_000);

  OneSignal.push(() => {
    clearTimeout(timeout);
    processQueuedOneSignalFunctions();
    resolve();
  });
});
