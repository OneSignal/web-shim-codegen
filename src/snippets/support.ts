export const scriptConstantsTemplate = () => {
  return `
const ONESIGNAL_SDK_ID = 'onesignal-sdk';
const MODULE_ID = 'onesignal-module';
const ONE_SIGNAL_SCRIPT_SRC = 'https://cdn.onesignal.com/sdks/OneSignalSDK.js';
const ONESIGNAL_NOT_SETUP_ERROR = 'OneSignal is not setup correctly.';`;
};

export const eventListenersTemplate = () => {
  return `
const buildEventListeners = (eventsArr) => {
  let returnStr = '';

  if (Array.isArray(eventsArr) && eventsArr.length) {
    eventsArr.forEach((event) => {
      event.listener = event.listener || 'on';
      returnStr += `+"`OneSignal.${event.listener}('${event.event}', ${event.callback});`;"+`
    });
  }
  return returnStr;
};\n`
};

export const moduleScriptTemplate = () => {
  return `const getModuleScriptBody = (appId, options = {}, events = []) => {
    const mappedOptions = JSON.stringify(options, null, 2);
    const listeners = buildEventListeners(events);

    return `+"`"+
      `var OneSignal = window.OneSignal || [];
      OneSignal.push(function() {`+
        "${listeners}"+
        `OneSignal.init({`+
          "appId: '${appId}', "+
          "promptOptions: ${mappedOptions}});});`;\n"+
  `};\n`
};

export const oneSignalInstanceScriptTemplate = () => {
  return `export const getOneSignalInstance = () => {
    const OneSignal = window['OneSignal'];

    if (OneSignal?.initialized) {
      return OneSignal;
    }

    return null;
  };\n`
};

export const injectScriptTemplate = () => {
  return `const injectScript = (id, buildScript) => {
  const hasScript = !!document.getElementById(id);
  if (hasScript) {
    return;
  }
  let script = document.createElement('script');
  script.id = id;
  script = buildScript(script);
  document.body.appendChild(script);
};\n`
};

export const injectOneSignalSDKScriptTemplate = () => {
  return `const injectSDKScript = () => {
    injectScript(ONESIGNAL_SDK_ID, (script) => {
      script.src = ONE_SIGNAL_SCRIPT_SRC;
      return script;
    });
};\n`;
}

export const injectModuleScriptTemplate = () => {
  return `const injectModuleScript = (appId, options= {}, events = []) => {
  injectScript(MODULE_ID, (script) => {
    script.innerHTML = getModuleScriptBody(appId, options, events);
    script.async = true;
    return script;
  });
};\n`
}

export const initOneSignalTemplate = () => {
  return `const initialize = (appId, options, events = []) => new Promise((resolve, reject) => {
  if (!appId) {
    throw new Error('You need to provide your OneSignal appId.');
  }
  if (!document) {
    return;
  }
  injectSDKScript();
  injectModuleScript(appId, options, events);

  let i = 0;
  const interval = setInterval(() => {
    i++;
    const oneSignal = getOneSignalInstance();
    if (oneSignal) {
      clearInterval(interval);
      resolve();
    }
    if (i === 10) {
      reject(new Error(ONESIGNAL_NOT_SETUP_ERROR));
    }
  }, 1000);
});`
}
