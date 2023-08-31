const ONESIGNAL_SDK_ID = 'onesignal-sdk';
const ONE_SIGNAL_SCRIPT_SRC = "https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js";

// true if the script is successfully loaded from CDN.
let isOneSignalInitialized = false;
// true if the script fails to load from CDN. A separate flag is necessary
// to disambiguate between a CDN load failure and a delayed call to
// OneSignal#init.
let isOneSignalScriptFailed = false;

if (typeof window !== 'undefined') {
  window.OneSignalDeferred = window.OneSignalDeferred || [];
  addSDKScript();
}

declare global {
  interface Window {
    OneSignalDeferred?: OneSignalDeferredLoadedCallback[];
    OneSignal?: IOneSignalOneSignal;
    safari?: {
      pushNotification: any;
    };
  }
}

/* H E L P E R S */

function handleOnError() {
  isOneSignalScriptFailed = true;
}

function addSDKScript() {
  const script = document.createElement('script');
  script.id = ONESIGNAL_SDK_ID;
  script.defer = true;
  script.src = ONE_SIGNAL_SCRIPT_SRC;

  // Always resolve whether or not the script is successfully initialized.
  // This is important for users who may block cdn.onesignal.com w/ adblock.
  script.onerror = () => {
    handleOnError();
  }

  document.head.appendChild(script);
}

/**
 * The following code is copied directly from the native SDK source file BrowserSupportsPush.ts
 * S T A R T
 */

// Checks if the browser supports push notifications by checking if specific
//   classes and properties on them exist
function isPushNotificationsSupported() {
  return supportsVapidPush() || supportsSafariPush();
}

function isMacOSSafariInIframe(): boolean {
  // Fallback detection for Safari on macOS in an iframe context
  return window.top !== window && // isContextIframe
  navigator.vendor === "Apple Computer, Inc." && // isSafari
  navigator.platform === "MacIntel"; // isMacOS
}

function supportsSafariPush(): boolean {
  return (window.safari && typeof window.safari.pushNotification !== "undefined") ||
          isMacOSSafariInIframe();
}

// Does the browser support the standard Push API
function supportsVapidPush(): boolean {
  return typeof PushSubscriptionOptions !== "undefined" &&
         PushSubscriptionOptions.prototype.hasOwnProperty("applicationServerKey");
}
/* E N D */

/**
 * This is a SPECIAL FUNCTION
 * It is a hardcoded implementation copied from the upstream/native WebSDK since we want to return a boolean immediately
 * Natively, this is done via the shimloading mechanism (i.e. if the SDK loads, push is supported)
 * @PublicApi
 */
const isPushSupported = (): boolean => {
  return isPushNotificationsSupported();
}

/**
 * @PublicApi
 */
const init = (options: IInitObject): Promise<void> => {
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
    window.OneSignalDeferred?.push((OneSignal) => {
      OneSignal.init(options).then(() => {
        isOneSignalInitialized = true;
        resolve();
      });
    });
  });
};
