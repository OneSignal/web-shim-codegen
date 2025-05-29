function oneSignalLogin(externalId, jwtToken) {
    return new Promise((resolve, reject) => {
        var _a;
        if (isOneSignalScriptFailed) {
            reject(new Error('OneSignal script failed to load.'));
            return;
        }
        (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
            oneSignal.login(externalId, jwtToken).then(() => resolve());
        });
    });
}
function oneSignalLogout() {
    return new Promise((resolve, reject) => {
        var _a;
        if (isOneSignalScriptFailed) {
            reject(new Error('OneSignal script failed to load.'));
            return;
        }
        (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
            oneSignal.logout().then(() => resolve());
        });
    });
}
function oneSignalSetConsentGiven(consent) {
    return new Promise((resolve, reject) => {
        var _a;
        if (isOneSignalScriptFailed) {
            reject(new Error('OneSignal script failed to load.'));
            return;
        }
        (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
            oneSignal.setConsentGiven(consent).then(() => resolve());
        });
    });
}
function oneSignalSetConsentRequired(requiresConsent) {
    return new Promise((resolve, reject) => {
        var _a;
        if (isOneSignalScriptFailed) {
            reject(new Error('OneSignal script failed to load.'));
            return;
        }
        (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
            oneSignal.setConsentRequired(requiresConsent).then(() => resolve());
        });
    });
}
function slidedownPromptPush(options) {
    return new Promise((resolve, reject) => {
        var _a;
        if (isOneSignalScriptFailed) {
            reject(new Error('OneSignal script failed to load.'));
            return;
        }
        (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
            oneSignal.Slidedown.promptPush(options).then(() => resolve());
        });
    });
}
function slidedownPromptPushCategories(options) {
    return new Promise((resolve, reject) => {
        var _a;
        if (isOneSignalScriptFailed) {
            reject(new Error('OneSignal script failed to load.'));
            return;
        }
        (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
            oneSignal.Slidedown.promptPushCategories(options).then(() => resolve());
        });
    });
}
function slidedownPromptSms(options) {
    return new Promise((resolve, reject) => {
        var _a;
        if (isOneSignalScriptFailed) {
            reject(new Error('OneSignal script failed to load.'));
            return;
        }
        (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
            oneSignal.Slidedown.promptSms(options).then(() => resolve());
        });
    });
}
function slidedownPromptEmail(options) {
    return new Promise((resolve, reject) => {
        var _a;
        if (isOneSignalScriptFailed) {
            reject(new Error('OneSignal script failed to load.'));
            return;
        }
        (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
            oneSignal.Slidedown.promptEmail(options).then(() => resolve());
        });
    });
}
function slidedownPromptSmsAndEmail(options) {
    return new Promise((resolve, reject) => {
        var _a;
        if (isOneSignalScriptFailed) {
            reject(new Error('OneSignal script failed to load.'));
            return;
        }
        (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
            oneSignal.Slidedown.promptSmsAndEmail(options).then(() => resolve());
        });
    });
}
function slidedownAddEventListener(event, listener) {
    var _a;
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
        oneSignal.Slidedown.addEventListener(event, listener);
    });
}
function slidedownRemoveEventListener(event, listener) {
    var _a;
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
        oneSignal.Slidedown.removeEventListener(event, listener);
    });
}
function notificationsSetDefaultUrl(url) {
    return new Promise((resolve, reject) => {
        var _a;
        if (isOneSignalScriptFailed) {
            reject(new Error('OneSignal script failed to load.'));
            return;
        }
        (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
            oneSignal.Notifications.setDefaultUrl(url).then(() => resolve());
        });
    });
}
function notificationsSetDefaultTitle(title) {
    return new Promise((resolve, reject) => {
        var _a;
        if (isOneSignalScriptFailed) {
            reject(new Error('OneSignal script failed to load.'));
            return;
        }
        (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
            oneSignal.Notifications.setDefaultTitle(title).then(() => resolve());
        });
    });
}
function notificationsRequestPermission() {
    return new Promise((resolve, reject) => {
        var _a;
        if (isOneSignalScriptFailed) {
            reject(new Error('OneSignal script failed to load.'));
            return;
        }
        (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
            oneSignal.Notifications.requestPermission().then(() => resolve());
        });
    });
}
function notificationsAddEventListener(event, listener) {
    var _a;
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
        oneSignal.Notifications.addEventListener(event, listener);
    });
}
function notificationsRemoveEventListener(event, listener) {
    var _a;
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
        oneSignal.Notifications.removeEventListener(event, listener);
    });
}
function sessionSendOutcome(outcomeName, outcomeWeight) {
    return new Promise((resolve, reject) => {
        var _a;
        if (isOneSignalScriptFailed) {
            reject(new Error('OneSignal script failed to load.'));
            return;
        }
        (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
            oneSignal.Session.sendOutcome(outcomeName, outcomeWeight).then(() => resolve());
        });
    });
}
function sessionSendUniqueOutcome(outcomeName) {
    return new Promise((resolve, reject) => {
        var _a;
        if (isOneSignalScriptFailed) {
            reject(new Error('OneSignal script failed to load.'));
            return;
        }
        (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
            oneSignal.Session.sendUniqueOutcome(outcomeName).then(() => resolve());
        });
    });
}
function userAddAlias(label, id) {
    var _a;
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
        oneSignal.User.addAlias(label, id);
    });
}
function userAddAliases(aliases) {
    var _a;
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
        oneSignal.User.addAliases(aliases);
    });
}
function userRemoveAlias(label) {
    var _a;
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
        oneSignal.User.removeAlias(label);
    });
}
function userRemoveAliases(labels) {
    var _a;
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
        oneSignal.User.removeAliases(labels);
    });
}
function userAddEmail(email) {
    var _a;
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
        oneSignal.User.addEmail(email);
    });
}
function userRemoveEmail(email) {
    var _a;
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
        oneSignal.User.removeEmail(email);
    });
}
function userAddSms(smsNumber) {
    var _a;
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
        oneSignal.User.addSms(smsNumber);
    });
}
function userRemoveSms(smsNumber) {
    var _a;
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
        oneSignal.User.removeSms(smsNumber);
    });
}
function userAddTag(key, value) {
    var _a;
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
        oneSignal.User.addTag(key, value);
    });
}
function userAddTags(tags) {
    var _a;
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
        oneSignal.User.addTags(tags);
    });
}
function userRemoveTag(key) {
    var _a;
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
        oneSignal.User.removeTag(key);
    });
}
function userRemoveTags(keys) {
    var _a;
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
        oneSignal.User.removeTags(keys);
    });
}
function userGetTags() {
    var _a;
    let retVal;
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
        retVal = oneSignal.User.getTags();
    });
    // @ts-ignore
    return retVal;
}
function userAddEventListener(event, listener) {
    var _a;
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
        oneSignal.User.addEventListener(event, listener);
    });
}
function userRemoveEventListener(event, listener) {
    var _a;
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
        oneSignal.User.removeEventListener(event, listener);
    });
}
function userSetLanguage(language) {
    var _a;
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
        oneSignal.User.setLanguage(language);
    });
}
function userGetLanguage() {
    var _a;
    let retVal;
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
        retVal = oneSignal.User.getLanguage();
    });
    // @ts-ignore
    return retVal;
}
function pushSubscriptionOptIn() {
    return new Promise((resolve, reject) => {
        var _a;
        if (isOneSignalScriptFailed) {
            reject(new Error('OneSignal script failed to load.'));
            return;
        }
        (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
            oneSignal.User.PushSubscription.optIn().then(() => resolve());
        });
    });
}
function pushSubscriptionOptOut() {
    return new Promise((resolve, reject) => {
        var _a;
        if (isOneSignalScriptFailed) {
            reject(new Error('OneSignal script failed to load.'));
            return;
        }
        (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
            oneSignal.User.PushSubscription.optOut().then(() => resolve());
        });
    });
}
function pushSubscriptionAddEventListener(event, listener) {
    var _a;
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
        oneSignal.User.PushSubscription.addEventListener(event, listener);
    });
}
function pushSubscriptionRemoveEventListener(event, listener) {
    var _a;
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
        oneSignal.User.PushSubscription.removeEventListener(event, listener);
    });
}
function debugSetLogLevel(logLevel) {
    var _a;
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
        oneSignal.Debug.setLogLevel(logLevel);
    });
}
const PushSubscriptionNamespace = {
    get id() { var _a, _b, _c; return (_c = (_b = (_a = window.OneSignal) === null || _a === void 0 ? void 0 : _a.User) === null || _b === void 0 ? void 0 : _b.PushSubscription) === null || _c === void 0 ? void 0 : _c.id; },
    get token() { var _a, _b, _c; return (_c = (_b = (_a = window.OneSignal) === null || _a === void 0 ? void 0 : _a.User) === null || _b === void 0 ? void 0 : _b.PushSubscription) === null || _c === void 0 ? void 0 : _c.token; },
    get optedIn() { var _a, _b, _c; return (_c = (_b = (_a = window.OneSignal) === null || _a === void 0 ? void 0 : _a.User) === null || _b === void 0 ? void 0 : _b.PushSubscription) === null || _c === void 0 ? void 0 : _c.optedIn; },
    optIn: pushSubscriptionOptIn,
    optOut: pushSubscriptionOptOut,
    addEventListener: pushSubscriptionAddEventListener,
    removeEventListener: pushSubscriptionRemoveEventListener,
};
const UserNamespace = {
    get onesignalId() { var _a, _b; return (_b = (_a = window.OneSignal) === null || _a === void 0 ? void 0 : _a.User) === null || _b === void 0 ? void 0 : _b.onesignalId; },
    get externalId() { var _a, _b; return (_b = (_a = window.OneSignal) === null || _a === void 0 ? void 0 : _a.User) === null || _b === void 0 ? void 0 : _b.externalId; },
    addAlias: userAddAlias,
    addAliases: userAddAliases,
    removeAlias: userRemoveAlias,
    removeAliases: userRemoveAliases,
    addEmail: userAddEmail,
    removeEmail: userRemoveEmail,
    addSms: userAddSms,
    removeSms: userRemoveSms,
    addTag: userAddTag,
    addTags: userAddTags,
    removeTag: userRemoveTag,
    removeTags: userRemoveTags,
    getTags: userGetTags,
    addEventListener: userAddEventListener,
    removeEventListener: userRemoveEventListener,
    setLanguage: userSetLanguage,
    getLanguage: userGetLanguage,
    PushSubscription: PushSubscriptionNamespace,
};
const SessionNamespace = {
    sendOutcome: sessionSendOutcome,
    sendUniqueOutcome: sessionSendUniqueOutcome,
};
const DebugNamespace = {
    setLogLevel: debugSetLogLevel,
};
const SlidedownNamespace = {
    promptPush: slidedownPromptPush,
    promptPushCategories: slidedownPromptPushCategories,
    promptSms: slidedownPromptSms,
    promptEmail: slidedownPromptEmail,
    promptSmsAndEmail: slidedownPromptSmsAndEmail,
    addEventListener: slidedownAddEventListener,
    removeEventListener: slidedownRemoveEventListener,
};
const NotificationsNamespace = {
    get permissionNative() { var _a, _b, _c; return (_c = (_b = (_a = window.OneSignal) === null || _a === void 0 ? void 0 : _a.Notifications) === null || _b === void 0 ? void 0 : _b.permissionNative) !== null && _c !== void 0 ? _c : 'default'; },
    get permission() { var _a, _b, _c; return (_c = (_b = (_a = window.OneSignal) === null || _a === void 0 ? void 0 : _a.Notifications) === null || _b === void 0 ? void 0 : _b.permission) !== null && _c !== void 0 ? _c : false; },
    setDefaultUrl: notificationsSetDefaultUrl,
    setDefaultTitle: notificationsSetDefaultTitle,
    isPushSupported,
    requestPermission: notificationsRequestPermission,
    addEventListener: notificationsAddEventListener,
    removeEventListener: notificationsRemoveEventListener,
};
/**
 * @PublicApi
 */
function isPushSupported() {
    return isPushNotificationsSupported();
}
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
const ONESIGNAL_SDK_ID = 'onesignal-sdk';
const ONE_SIGNAL_SCRIPT_SRC = 'https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js';
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
/**
 * The following code is copied directly from the native SDK source file BrowserSupportsPush.ts
 * S T A R T
 */
// Checks if the browser supports push notifications by checking if specific
//   classes and properties on them exist
function isPushNotificationsSupported() {
    return supportsVapidPush() || supportsSafariPush();
}
function isMacOSSafariInIframe() {
    // Fallback detection for Safari on macOS in an iframe context
    return (window.top !== window && // isContextIframe
        navigator.vendor === 'Apple Computer, Inc.' && // isSafari
        navigator.platform === 'MacIntel'); // isMacOS
}
function supportsSafariPush() {
    return ((window.safari && typeof window.safari.pushNotification !== 'undefined') ||
        isMacOSSafariInIframe());
}
// Does the browser support the standard Push API
function supportsVapidPush() {
    return (typeof PushSubscriptionOptions !== 'undefined' &&
        PushSubscriptionOptions.prototype.hasOwnProperty('applicationServerKey'));
}
/* E N D */
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
    };
    document.head.appendChild(script);
}
export class OneSignal {
    constructor() {
        this.User = UserNamespace;
        this.Session = SessionNamespace;
        this.Debug = DebugNamespace;
        this.Slidedown = SlidedownNamespace;
        this.Notifications = NotificationsNamespace;
        this.login = oneSignalLogin;
        this.logout = oneSignalLogout;
        this.setConsentGiven = oneSignalSetConsentGiven;
        this.setConsentRequired = oneSignalSetConsentRequired;
    }
    /* P U B L I C */
    /**
     * @PublicApi
     */
    init(options) {
        var _a;
        if (isOneSignalInitialized) {
            return Promise.reject(`OneSignal is already initialized.`);
        }
        if (!options || !options.appId) {
            return Promise.reject('You need to provide your OneSignal appId.');
        }
        if (!document) {
            return Promise.reject(`Document is not defined.`);
        }
        // Handle both disabled and disable keys for welcome notification
        if (((_a = options.welcomeNotification) === null || _a === void 0 ? void 0 : _a.disabled) !== undefined) {
            options.welcomeNotification.disable = options.welcomeNotification.disabled;
        }
        return new Promise((resolve, reject) => {
            var _a;
            (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
                oneSignal
                    .init(options)
                    .then(() => {
                    isOneSignalInitialized = true;
                    resolve();
                })
                    .catch(reject);
            });
        });
    }
}
OneSignal.ɵprov = i0.ɵɵdefineInjectable({ factory: function OneSignal_Factory() { return new OneSignal(); }, token: OneSignal, providedIn: "root" });
OneSignal.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
OneSignal.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25lc2lnbmFsLW5neC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvb25lc2lnbmFsLW5neC9zcmMvbGliL29uZXNpZ25hbC1uZ3guc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzWkEsU0FBUyxjQUFjLENBQUMsVUFBa0IsRUFBRSxRQUFpQjtJQUMzRCxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFOztRQUNyQyxJQUFJLHVCQUF1QixFQUFFO1lBQzNCLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDLENBQUM7WUFDdEQsT0FBTztTQUNSO1FBRUQsTUFBQSxNQUFNLENBQUMsaUJBQWlCLDBDQUFFLElBQUksQ0FBQyxDQUFDLFNBQThCLEVBQUUsRUFBRTtZQUNoRSxTQUFTLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUM5RCxDQUFDLEVBQUU7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7QUFDRCxTQUFTLGVBQWU7SUFDdEIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTs7UUFDckMsSUFBSSx1QkFBdUIsRUFBRTtZQUMzQixNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsa0NBQWtDLENBQUMsQ0FBQyxDQUFDO1lBQ3RELE9BQU87U0FDUjtRQUVELE1BQUEsTUFBTSxDQUFDLGlCQUFpQiwwQ0FBRSxJQUFJLENBQUMsQ0FBQyxTQUE4QixFQUFFLEVBQUU7WUFDaEUsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQzNDLENBQUMsRUFBRTtJQUNMLENBQUMsQ0FBQyxDQUFD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Q3ZELE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQztTQUM1RTtRQUVELE9BQU8sSUFBSSxPQUFPLENBQU8sQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7O1lBQzNDLE1BQUEsTUFBTSxDQUFDLGlCQUFpQiwwQ0FBRSxJQUFJLENBQUMsQ0FBQyxTQUE4QixFQUFFLEVBQUU7Z0JBQ2hFLFNBQVM7cUJBQ04sSUFBSSxDQUFDLE9BQU8sQ0FBQztxQkFDYixJQUFJLENBQUMsR0FBRyxFQUFFO29CQUNULHNCQUFzQixHQUFHLElBQUksQ0FBQztvQkFDOUIsT0FBTyxFQUFFLENBQUM7Z0JBQ1osQ0FBQyxDQUFDO3FCQUNELEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuQixDQUFDLEVBQUU7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7WUExQ0YsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBBdXRvUHJvbXB0T3B0aW9ucyB7IGZvcmNlPzogYm9vbGVhbjsgZm9yY2VTbGlkZWRvd25PdmVyTmF0aXZlPzogYm9vbGVhbjsgc2xpZGVkb3duUHJvbXB0T3B0aW9ucz86IElPbmVTaWduYWxBdXRvUHJvbXB0T3B0aW9uczsgfVxuZXhwb3J0IGludGVyZmFjZSBJT25lU2lnbmFsQXV0b1Byb21wdE9wdGlvbnMgeyBmb3JjZT86IGJvb2xlYW47IGZvcmNlU2xpZGVkb3duT3Zlck5hdGl2ZT86IGJvb2xlYW47IGlzSW5VcGRhdGVNb2RlPzogYm9vbGVhbjsgY2F0ZWdvcnlPcHRpb25zPzogSU9uZVNpZ25hbENhdGVnb3JpZXM7IH1cbmV4cG9ydCBpbnRlcmZhY2UgSU9uZVNpZ25hbENhdGVnb3JpZXMgeyBwb3NpdGl2ZVVwZGF0ZUJ1dHRvbjogc3RyaW5nOyBuZWdhdGl2ZVVwZGF0ZUJ1dHRvbjogc3RyaW5nOyBzYXZpbmdCdXR0b25UZXh0OiBzdHJpbmc7IGVycm9yQnV0dG9uVGV4dDogc3RyaW5nOyB1cGRhdGVNZXNzYWdlOiBzdHJpbmc7IHRhZ3M6IElPbmVTaWduYWxUYWdDYXRlZ29yeVtdOyB9XG5leHBvcnQgaW50ZXJmYWNlIElPbmVTaWduYWxUYWdDYXRlZ29yeSB7IHRhZzogc3RyaW5nOyBsYWJlbDogc3RyaW5nOyBjaGVja2VkPzogYm9vbGVhbjsgfVxuZXhwb3J0IHR5cGUgUHVzaFN1YnNjcmlwdGlvbk5hbWVzcGFjZVByb3BlcnRpZXMgPSB7IGlkOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkOyB0b2tlbjogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZDsgb3B0ZWRJbjogYm9vbGVhbjsgfTtcbmV4cG9ydCB0eXBlIFN1YnNjcmlwdGlvbkNoYW5nZUV2ZW50ID0geyBwcmV2aW91czogUHVzaFN1YnNjcmlwdGlvbk5hbWVzcGFjZVByb3BlcnRpZXM7IGN1cnJlbnQ6IFB1c2hTdWJzY3JpcHRpb25OYW1lc3BhY2VQcm9wZXJ0aWVzOyB9O1xuZXhwb3J0IHR5cGUgTm90aWZpY2F0aW9uRXZlbnROYW1lID0gJ2NsaWNrJyB8ICdmb3JlZ3JvdW5kV2lsbERpc3BsYXknIHwgJ2Rpc21pc3MnIHwgJ3Blcm1pc3Npb25DaGFuZ2UnIHwgJ3Blcm1pc3Npb25Qcm9tcHREaXNwbGF5JztcbmV4cG9ydCB0eXBlIFNsaWRlZG93bkV2ZW50TmFtZSA9ICdzbGlkZWRvd25BbGxvd0NsaWNrJyB8ICdzbGlkZWRvd25DYW5jZWxDbGljaycgfCAnc2xpZGVkb3duQ2xvc2VkJyB8ICdzbGlkZWRvd25RdWV1ZWQnIHwgJ3NsaWRlZG93blNob3duJztcbmV4cG9ydCB0eXBlIE9uZVNpZ25hbERlZmVycmVkTG9hZGVkQ2FsbGJhY2sgPSAob25lc2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB2b2lkO1xuZXhwb3J0IGludGVyZmFjZSBJT1NOb3RpZmljYXRpb24ge1xuICAvKipcbiAgICogVGhlIE9uZVNpZ25hbCBub3RpZmljYXRpb24gaWQ7XG4gICAqICAtIFByaW1hcnkgaWQgb24gT25lU2lnbmFsJ3MgUkVTVCBBUEkgYW5kIGRhc2hib2FyZFxuICAgKi9cbiAgcmVhZG9ubHkgbm90aWZpY2F0aW9uSWQ6IHN0cmluZztcblxuICAvKipcbiAgICogVmlzaWJsZSB0aXRsZSB0ZXh0IG9uIHRoZSBub3RpZmljYXRpb25cbiAgICovXG4gIHJlYWRvbmx5IHRpdGxlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBWaXNpYmxlIGJvZHkgdGV4dCBvbiB0aGUgbm90aWZpY2F0aW9uXG4gICAqL1xuICByZWFkb25seSBib2R5OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFZpc2libGUgaWNvbiB0aGUgbm90aWZpY2F0aW9uOyBVUkwgZm9ybWF0XG4gICAqL1xuICByZWFkb25seSBpY29uPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBWaXNpYmxlIHNtYWxsIGJhZGdlSWNvbiB0aGF0IGRpc3BsYXlzIG9uIHNvbWUgZGV2aWNlczsgVVJMIGZvcm1hdFxuICAgKiBFeGFtcGxlOiBPbiBBbmRyb2lkJ3Mgc3RhdHVzIGJhclxuICAgKi9cbiAgcmVhZG9ubHkgYmFkZ2VJY29uPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBWaXNpYmxlIGltYWdlIG9uIHRoZSBub3RpZmljYXRpb247IFVSTCBmb3JtYXRcbiAgICovXG4gIHJlYWRvbmx5IGltYWdlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBWaXNpYmxlIGJ1dHRvbnMgb24gdGhlIG5vdGlmaWNhdGlvblxuICAgKi9cbiAgcmVhZG9ubHkgYWN0aW9uQnV0dG9ucz86IElPU05vdGlmaWNhdGlvbkFjdGlvbkJ1dHRvbltdO1xuXG4gIC8qKlxuICAgKiBJZiB0aGlzIHZhbHVlIGlzIHRoZSBzYW1lIGFzIGV4aXN0aW5nIG5vdGlmaWNhdGlvbiwgaXQgd2lsbCByZXBsYWNlIGl0XG4gICAqIENhbiBiZSBzZXQgd2hlbiBjcmVhdGluZyB0aGUgbm90aWZpY2F0aW9uIHdpdGggXCJXZWIgUHVzaCBUb3BpY1wiIG9uIHRoZSBkYXNoYm9hcmRcbiAgICogb3Igd2ViX3B1c2hfdG9waWMgZnJvbSB0aGUgUkVTVCBBUEkuXG4gICAqL1xuICByZWFkb25seSB0b3BpYz86IHN0cmluZztcblxuICAvKipcbiAgICogQ3VzdG9tIG9iamVjdCB0aGF0IHdhcyBzZW50IHdpdGggdGhlIG5vdGlmaWNhdGlvbjtcbiAgICogZGVmaW5hYmxlIHdoZW4gY3JlYXRpbmcgdGhlIG5vdGlmaWNhdGlvbiBmcm9tIHRoZSBPbmVTaWduYWwgUkVTVCBBUEkgb3IgZGFzaGJvYXJkXG4gICAqL1xuICByZWFkb25seSBhZGRpdGlvbmFsRGF0YT86IG9iamVjdDtcblxuICAvKipcbiAgICogVVJMIHRvIG9wZW4gd2hlbiBjbGlja2luZyBvciB0YXBwaW5nIG9uIHRoZSBub3RpZmljYXRpb25cbiAgICovXG4gIHJlYWRvbmx5IGxhdW5jaFVSTD86IHN0cmluZztcblxuICAvKipcbiAgICogQ29uZmlybSB0aGUgcHVzaCB3YXMgcmVjZWl2ZWQgYnkgcmVwb3J0aW5nIGJhY2sgdG8gT25lU2lnbmFsXG4gICAqL1xuICByZWFkb25seSBjb25maXJtRGVsaXZlcnk6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU9TTm90aWZpY2F0aW9uQWN0aW9uQnV0dG9uIHtcbiAgLyoqXG4gICAqIEFueSB1bmlxdWUgaWRlbnRpZmllciB0byByZXByZXNlbnQgd2hpY2ggYnV0dG9uIHdhcyBjbGlja2VkLiBUaGlzIGlzIHR5cGljYWxseSBwYXNzZWQgYmFjayB0byB0aGUgc2VydmljZSB3b3JrZXJcbiAgICogYW5kIGhvc3QgcGFnZSB0aHJvdWdoIGV2ZW50cyB0byBpZGVudGlmeSB3aGljaCBidXR0b24gd2FzIGNsaWNrZWQuXG4gICAqIGUuZy4gJ2xpa2UtYnV0dG9uJ1xuICAgKi9cbiAgcmVhZG9ubHkgYWN0aW9uSWQ6IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBub3RpZmljYXRpb24gYWN0aW9uIGJ1dHRvbidzIHRleHQuXG4gICAqL1xuICByZWFkb25seSB0ZXh0OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBBIHZhbGlkIHB1YmxpY2x5IHJlYWNoYWJsZSBIVFRQUyBVUkwgdG8gYW4gaW1hZ2UuXG4gICAqL1xuICByZWFkb25seSBpY29uPzogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIFVSTCB0byBvcGVuIHRoZSB3ZWIgYnJvd3NlciB0byB3aGVuIHRoaXMgYWN0aW9uIGJ1dHRvbiBpcyBjbGlja2VkLlxuICAgKi9cbiAgcmVhZG9ubHkgbGF1bmNoVVJMPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5vdGlmaWNhdGlvbkNsaWNrUmVzdWx0IHtcbiAgcmVhZG9ubHkgYWN0aW9uSWQ/OiBzdHJpbmc7XG4gIHJlYWRvbmx5IHVybD86IHN0cmluZztcbn1cblxuZXhwb3J0IHR5cGUgTm90aWZpY2F0aW9uRXZlbnRUeXBlTWFwID0ge1xuICAnY2xpY2snOiBOb3RpZmljYXRpb25DbGlja0V2ZW50O1xuICAnZm9yZWdyb3VuZFdpbGxEaXNwbGF5JzogTm90aWZpY2F0aW9uRm9yZWdyb3VuZFdpbGxEaXNwbGF5RXZlbnQ7XG4gICdkaXNtaXNzJzogTm90aWZpY2F0aW9uRGlzbWlzc0V2ZW50O1xuICAncGVybWlzc2lvbkNoYW5nZSc6IGJvb2xlYW47XG4gICdwZXJtaXNzaW9uUHJvbXB0RGlzcGxheSc6IHZvaWQ7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIE5vdGlmaWNhdGlvbkZvcmVncm91bmRXaWxsRGlzcGxheUV2ZW50IHtcbiAgcmVhZG9ubHkgbm90aWZpY2F0aW9uOiBJT1NOb3RpZmljYXRpb247XG4gIHByZXZlbnREZWZhdWx0KCk6IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm90aWZpY2F0aW9uRGlzbWlzc0V2ZW50IHtcbiAgbm90aWZpY2F0aW9uOiBJT1NOb3RpZmljYXRpb247XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm90aWZpY2F0aW9uQ2xpY2tFdmVudCB7XG4gIHJlYWRvbmx5IG5vdGlmaWNhdGlvbjogSU9TTm90aWZpY2F0aW9uO1xuICByZWFkb25seSByZXN1bHQ6IE5vdGlmaWNhdGlvbkNsaWNrUmVzdWx0O1xufVxuXG5leHBvcnQgdHlwZSBVc2VyQ2hhbmdlRXZlbnQgPSB7XG4gIGN1cnJlbnQ6IFVzZXJOYW1lc3BhY2VQcm9wZXJ0aWVzO1xufTtcbmV4cG9ydCB0eXBlIFVzZXJOYW1lc3BhY2VQcm9wZXJ0aWVzID0ge1xuICBvbmVzaWduYWxJZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBleHRlcm5hbElkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIElJbml0T2JqZWN0IHtcbiAgYXBwSWQ6IHN0cmluZztcbiAgc3ViZG9tYWluTmFtZT86IHN0cmluZztcbiAgcmVxdWlyZXNVc2VyUHJpdmFjeUNvbnNlbnQ/OiBib29sZWFuO1xuICBwcm9tcHRPcHRpb25zPzoge1xuICAgIHNsaWRlZG93bjoge1xuICAgICAgcHJvbXB0czoge1xuICAgICAgICAvKipcbiAgICAgICAgICogV2hldGhlciB0byBhdXRvbWF0aWNhbGx5IGRpc3BsYXkgdGhlIHByb21wdC5cbiAgICAgICAgICogYHRydWVgIHdpbGwgZGlzcGxheSB0aGUgcHJvbXB0IGJhc2VkIG9uIHRoZSBkZWxheSBvcHRpb25zLlxuICAgICAgICAgKiBgZmFsc2VgIHdpbGwgcHJldmVudCB0aGUgcHJvbXB0IGZyb20gZGlzcGxheWluZyB1bnRpbCB0aGUgU2xpZGVkb3ducyBtZXRob2RzIGFyZSB1c2VkLlxuICAgICAgICAgKi9cbiAgICAgICAgYXV0b1Byb21wdDogYm9vbGVhbjtcblxuICAgICAgICAvKipcbiAgICAgICAgICogT25seSBhdmFpbGFibGUgZm9yIHR5cGU6IGNhdGVnb3J5LiBVcCB0byAxMCBjYXRlZ29yaWVzLlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiAgY2F0ZWdvcmllczogW3sgdGFnOiAnbG9jYWxfbmV3cycsIGxhYmVsOiAnTG9jYWwgTmV3cycgfV0gLy8gVGhlIHVzZXIgd2lsbCBiZSB0YWdnZWQgd2l0aCBsb2NhbF9uZXdzIGJ1dCB3aWxsIHNlZSBcIkxvY2FsIE5ld3NcIiBpbiB0aGUgcHJvbXB0LlxuICAgICAgICAgKi9cbiAgICAgICAgY2F0ZWdvcmllczoge1xuICAgICAgICAgIC8qKiBTaG91bGQgaWRlbnRpZnkgdGhlIGFjdGlvbi4gKi9cbiAgICAgICAgICB0YWc6IHN0cmluZztcblxuICAgICAgICAgIC8qKiBXaGF0IHRoZSB1c2VyIHdpbGwgc2VlLiAqL1xuICAgICAgICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgICAgIH1bXTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGRlbGF5IG9wdGlvbnMgZm9yIHRoZSBwcm9tcHQuXG4gICAgICAgICAqIEBleGFtcGxlIGRlbGF5OiB7IHBhZ2VWaWV3czogMywgdGltZURlbGF5OiAyMCB9IC8vIFRoZSB1c2VyIHdpbGwgbm90IGJlIHNob3duIHRoZSBwcm9tcHQgdW50aWwgMjAgc2Vjb25kcyBhZnRlciB0aGUgM3JkIHBhZ2Ugdmlldy5cbiAgICAgICAgICovXG4gICAgICAgIGRlbGF5OiB7XG4gICAgICAgICAgLyoqIFRoZSBudW1iZXIgb2YgcGFnZXMgYSB1c2VyIG5lZWRzIHRvIHZpc2l0IGJlZm9yZSB0aGUgcHJvbXB0IGlzIGRpc3BsYXllZC4gKi9cbiAgICAgICAgICBwYWdlVmlld3M/OiBudW1iZXI7XG5cbiAgICAgICAgICAvKiogVGhlIG51bWJlciBvZiBzZWNvbmRzIGEgdXNlciBuZWVkcyB0byB3YWl0IGJlZm9yZSB0aGUgcHJvbXB0IGlzIGRpc3BsYXllZC5Cb3RoIG9wdGlvbnMgbXVzdCBiZSBzYXRpc2ZpZWQgZm9yIHRoZSBwcm9tcHQgdG8gZGlzcGxheSAqL1xuICAgICAgICAgIHRpbWVEZWxheT86IG51bWJlcjtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHRleHQgdG8gZGlzcGxheSBpbiB0aGUgcHJvbXB0LlxuICAgICAgICAgKi9cbiAgICAgICAgdGV4dD86IHtcbiAgICAgICAgICAvKiogVGhlIGNhbGxvdXQgYXNraW5nIHRoZSB1c2VyIHRvIG9wdC1pbi4gVXAgdG8gOTAgY2hhcmFjdGVycy4gKi9cbiAgICAgICAgICBhY3Rpb25NZXNzYWdlPzogc3RyaW5nO1xuXG4gICAgICAgICAgLyoqIFRyaWdnZXJzIHRoZSBvcHQtaW4uIFVwIHRvIDE1IGNoYXJhY3RlcnMuICovXG4gICAgICAgICAgYWNjZXB0QnV0dG9uPzogc3RyaW5nO1xuXG4gICAgICAgICAgLyoqIENhbmNlbHMgb3B0LWluLiBVcCB0byAxNSBjaGFyYWN0ZXJzLiAqL1xuICAgICAgICAgIGNhbmNlbE1lc3NhZ2U/OiBzdHJpbmc7XG5cbiAgICAgICAgICAvKiogVGhlIG1lc3NhZ2Ugb2YgdGhlIGNvbmZpcm1hdGlvbiBwcm9tcHQgZGlzcGxheWVkIGFmdGVyIHRoZSBlbWFpbCBhbmQvb3IgcGhvbmUgbnVtYmVyIGlzIHByb3ZpZGVkLiBVcCB0byA5MCBjaGFyYWN0ZXJzLiAqL1xuICAgICAgICAgIGNvbmZpcm1NZXNzYWdlPzogc3RyaW5nO1xuXG4gICAgICAgICAgLyoqIElkZW50aWZpZXMgdGhlIGVtYWlsIHRleHQgZmllbGQuIFVwIHRvIDE1IGNoYXJhY3RlcnMuICovXG4gICAgICAgICAgZW1haWxMYWJlbD86IHN0cmluZztcblxuICAgICAgICAgIC8qKiBDYW5jZWxzIHRoZSBjYXRlZ29yeSB1cGRhdGUuIFVwIHRvIDE1IGNoYXJhY3RlcnMuICovXG4gICAgICAgICAgbmVnYXRpdmVVcGRhdGVCdXR0b24/OiBzdHJpbmc7XG5cbiAgICAgICAgICAvKiogU2F2ZXMgdGhlIHVwZGF0ZWQgY2F0ZWdvcnkgdGFncy4gVXAgdG8gMTUgY2hhcmFjdGVycy4gKi9cbiAgICAgICAgICBwb3NpdGl2ZVVwZGF0ZUJ1dHRvbj86IHN0cmluZztcblxuICAgICAgICAgIC8qKiBJZGVudGlmaWVzIHRoZSBwaG9uZSBudW1iZXIgdGV4dCBmaWVsZC4gVXAgdG8gMTUgY2hhcmFjdGVycy4gKi9cbiAgICAgICAgICBzbXNMYWJlbD86IHN0cmluZztcblxuICAgICAgICAgIC8qKiBBIGRpZmZlcmVudCBtZXNzYWdlIHNob3duIHRvIHN1YnNjcmliZXJzIHByZXNlbnRlZCB0aGUgcHJvbXB0IGFnYWluIHRvIHVwZGF0ZSBjYXRlZ29yaWVzLiBVcCB0byA5MCBjaGFyYWN0ZXJzLiAqL1xuICAgICAgICAgIHVwZGF0ZU1lc3NhZ2U/OiBzdHJpbmc7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB0eXBlIG9mIHByb21wdCB0byBkaXNwbGF5LlxuICAgICAgICAgKiBgcHVzaGAgd2hpY2ggaXMgdGhlIFNsaWRlIFByb21wdCB3aXRob3V0IGNhdGVnb3JpZXMuXG4gICAgICAgICAqIGBjYXRlZ29yeWAgd2hpY2ggaXMgdGhlIFNsaWRlIFByb21wdCB3aXRoIGNhdGVnb3JpZXMuXG4gICAgICAgICAqIGBzbXNgIG9ubHkgYXNrcyBmb3IgcGhvbmUgbnVtYmVyLlxuICAgICAgICAgKiBgZW1haWxgIG9ubHkgYXNrcyBmb3IgZW1haWwgYWRkcmVzcy5cbiAgICAgICAgICogYHNtc0FuZEVtYWlsYCBhc2tzIGZvciBib3RoIHBob25lIG51bWJlciBhbmQgZW1haWwgYWRkcmVzcy5cbiAgICAgICAgICovXG4gICAgICAgIHR5cGU6ICdwdXNoJyB8ICdjYXRlZ29yeScgfCAnc21zJyB8ICdlbWFpbCcgfCAnc21zQW5kRW1haWwnO1xuICAgICAgfVtdO1xuICAgIH07XG4gIH07XG4gIHdlbGNvbWVOb3RpZmljYXRpb24/OiB7XG4gICAgLyoqXG4gICAgICogRGlzYWJsZXMgc2VuZGluZyBhIHdlbGNvbWUgbm90aWZpY2F0aW9uIHRvIG5ldyBzaXRlIHZpc2l0b3JzLiBJZiB5b3Ugd2FudCB0byBkaXNhYmxlIHdlbGNvbWUgbm90aWZpY2F0aW9ucywgdGhpcyBpcyB0aGUgb25seSBvcHRpb24geW91IG5lZWQuXG4gICAgICogQGRlcHJlY2F0ZWQgVXNlICdkaXNhYmxlJyBpbnN0ZWFkLiBUaGlzIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSB2ZXJzaW9uLlxuICAgICAqL1xuICAgIGRpc2FibGVkPzogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIERpc2FibGVzIHNlbmRpbmcgYSB3ZWxjb21lIG5vdGlmaWNhdGlvbiB0byBuZXcgc2l0ZSB2aXNpdG9ycy4gSWYgeW91IHdhbnQgdG8gZGlzYWJsZSB3ZWxjb21lIG5vdGlmaWNhdGlvbnMsIHRoaXMgaXMgdGhlIG9ubHkgb3B0aW9uIHlvdSBuZWVkLlxuICAgICAqL1xuICAgIGRpc2FibGU/OiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHdlbGNvbWUgbm90aWZpY2F0aW9uJ3MgbWVzc2FnZS4gWW91IGNhbiBsb2NhbGl6ZSB0aGlzIHRvIHlvdXIgb3duIGxhbmd1YWdlLlxuICAgICAqIElmIGxlZnQgYmxhbmsgb3Igc2V0IHRvIGJsYW5rLCB0aGUgZGVmYXVsdCBvZiAnVGhhbmtzIGZvciBzdWJzY3JpYmluZyEnIHdpbGwgYmUgdXNlZC5cbiAgICAgKi9cbiAgICBtZXNzYWdlOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgd2VsY29tZSBub3RpZmljYXRpb24ncyB0aXRsZS4gWW91IGNhbiBsb2NhbGl6ZSB0aGlzIHRvIHlvdXIgb3duIGxhbmd1YWdlLiBJZiBub3Qgc2V0LCBvciBsZWZ0IGJsYW5rLCB0aGUgc2l0ZSdzIHRpdGxlIHdpbGwgYmUgdXNlZC5cbiAgICAgKiBTZXQgdG8gb25lIHNwYWNlICcgJyB0byBjbGVhciB0aGUgdGl0bGUsIGFsdGhvdWdoIHRoaXMgaXMgbm90IHJlY29tbWVuZGVkLlxuICAgICAqL1xuICAgIHRpdGxlPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQnkgZGVmYXVsdCwgY2xpY2tpbmcgdGhlIHdlbGNvbWUgbm90aWZpY2F0aW9uIGRvZXMgbm90IG9wZW4gYW55IGxpbmsuXG4gICAgICogVGhpcyBpcyByZWNvbW1lbmRlZCBiZWNhdXNlIHRoZSB1c2VyIGhhcyBqdXN0IHZpc2l0ZWQgeW91ciBzaXRlIGFuZCBzdWJzY3JpYmVkLlxuICAgICAqL1xuICAgIHVybD86IHN0cmluZztcbiAgfTtcblxuICAvKipcbiAgICogV2lsbCBlbmFibGUgY3VzdG9taXphdGlvbiBvZiB0aGUgbm90aWZ5L3N1YnNjcmlwdGlvbiBiZWxsIGJ1dHRvbi5cbiAgICovXG4gIG5vdGlmeUJ1dHRvbj86IHtcbiAgICAvKipcbiAgICAgKiBBIGZ1bmN0aW9uIHlvdSBkZWZpbmUgdGhhdCByZXR1cm5zIHRydWUgdG8gc2hvdyB0aGUgU3Vic2NyaXB0aW9uIEJlbGwsIG9yIGZhbHNlIHRvIGhpZGUgaXQuXG4gICAgICogVHlwaWNhbGx5IHVzZWQgdGhlIGhpZGUgdGhlIFN1YnNjcmlwdGlvbiBCZWxsIGFmdGVyIHRoZSB1c2VyIGlzIHN1YnNjcmliZWQuXG4gICAgICogVGhpcyBmdW5jdGlvbiBpcyBub3QgcmUtZXZhbHVhdGVkIG9uIGV2ZXJ5IHN0YXRlIGNoYW5nZTsgdGhpcyBmdW5jdGlvbiBpcyBvbmx5IGV2YWx1YXRlZCBvbmNlIHdoZW4gdGhlIFN1YnNjcmlwdGlvbiBCZWxsIGJlZ2lucyB0byBzaG93LlxuICAgICAqL1xuICAgIGRpc3BsYXlQcmVkaWNhdGU/OiAoKSA9PiBib29sZWFuIHwgUHJvbWlzZTxib29sZWFuPjtcblxuICAgIC8qKlxuICAgICAqIEVuYWJsZSB0aGUgU3Vic2NyaXB0aW9uIEJlbGwuIFRoZSBTdWJzY3JpcHRpb24gQmVsbCBpcyBvdGhlcndpc2UgZGlzYWJsZWQgYnkgZGVmYXVsdC5cbiAgICAgKi9cbiAgICBlbmFibGU/OiBib29sZWFuO1xuXG4gICAgLyoqIFNwZWNpZnkgQ1NTLXZhbGlkIHBpeGVsIG9mZnNldHMgdXNpbmcgYm90dG9tLCBsZWZ0LCBhbmQgcmlnaHQuICovXG4gICAgb2Zmc2V0PzogeyBib3R0b206IHN0cmluZzsgbGVmdDogc3RyaW5nOyByaWdodDogc3RyaW5nIH07XG5cbiAgICAvKipcbiAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBTdWJzY3JpcHRpb24gQmVsbCB3aWxsIGRpc3BsYXkgYW4gaWNvbiB0aGF0IHRoZXJlIGlzIDEgdW5yZWFkIG1lc3NhZ2UuXG4gICAgICogV2hlbiBob3ZlcmluZyBvdmVyIHRoZSBTdWJzY3JpcHRpb24gQmVsbCwgdGhlIHVzZXIgd2lsbCBzZWUgY3VzdG9tIHRleHQgc2V0IGJ5IG1lc3NhZ2UucHJlbm90aWZ5LlxuICAgICAqL1xuICAgIHByZW5vdGlmeTogYm9vbGVhbjtcblxuICAgIC8qKiBFaXRoZXIgYGJvdHRvbS1sZWZ0YCBvciBgYm90dG9tLXJpZ2h0YC4gVGhlIFN1YnNjcmlwdGlvbiBCZWxsIHdpbGwgYmUgZml4ZWQgYXQgdGhpcyBsb2NhdGlvbiBvbiB5b3VyIHBhZ2UuICovXG4gICAgcG9zaXRpb24/OiAnYm90dG9tLWxlZnQnIHwgJ2JvdHRvbS1yaWdodCc7XG5cbiAgICAvKiogIFNldCBgZmFsc2VgIHRvIGhpZGUgdGhlICdQb3dlcmVkIGJ5IE9uZVNpZ25hbCcgdGV4dCBpbiB0aGUgU3Vic2NyaXB0aW9uIEJlbGwgZGlhbG9nIHBvcHVwLiAqL1xuICAgIHNob3dDcmVkaXQ6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBUaGUgU3Vic2NyaXB0aW9uIEJlbGwgd2lsbCBpbml0aWFsbHkgYXBwZWFyIGF0IG9uZSBvZiB0aGVzZSBzaXplcywgYW5kIHRoZW4gc2hyaW5rIGRvd24gdG8gc2l6ZSBgc21hbGxgIGFmdGVyIHRoZSB1c2VyIHN1YnNjcmliZXMuXG4gICAgICovXG4gICAgc2l6ZT86ICdzbWFsbCcgfCAnbWVkaXVtJyB8ICdsYXJnZSc7XG5cbiAgICAvKiogQ3VzdG9taXplIHRoZSBTdWJzY3JpcHRpb24gQmVsbCB0ZXh0LiAqL1xuICAgIHRleHQ6IHtcbiAgICAgICdkaWFsb2cuYmxvY2tlZC5tZXNzYWdlJzogc3RyaW5nO1xuICAgICAgJ2RpYWxvZy5ibG9ja2VkLnRpdGxlJzogc3RyaW5nO1xuICAgICAgJ2RpYWxvZy5tYWluLmJ1dHRvbi5zdWJzY3JpYmUnOiBzdHJpbmc7XG4gICAgICAnZGlhbG9nLm1haW4uYnV0dG9uLnVuc3Vic2NyaWJlJzogc3RyaW5nO1xuICAgICAgJ2RpYWxvZy5tYWluLnRpdGxlJzogc3RyaW5nO1xuICAgICAgJ21lc3NhZ2UuYWN0aW9uLnJlc3Vic2NyaWJlZCc6IHN0cmluZztcbiAgICAgICdtZXNzYWdlLmFjdGlvbi5zdWJzY3JpYmVkJzogc3RyaW5nO1xuICAgICAgJ21lc3NhZ2UuYWN0aW9uLnN1YnNjcmliaW5nJzogc3RyaW5nO1xuICAgICAgJ21lc3NhZ2UuYWN0aW9uLnVuc3Vic2NyaWJlZCc6IHN0cmluZztcbiAgICAgICdtZXNzYWdlLnByZW5vdGlmeSc6IHN0cmluZztcbiAgICAgICd0aXAuc3RhdGUuYmxvY2tlZCc6IHN0cmluZztcbiAgICAgICd0aXAuc3RhdGUuc3Vic2NyaWJlZCc6IHN0cmluZztcbiAgICAgICd0aXAuc3RhdGUudW5zdWJzY3JpYmVkJzogc3RyaW5nO1xuICAgIH07XG4gIH07XG5cbiAgcGVyc2lzdE5vdGlmaWNhdGlvbj86IGJvb2xlYW47XG4gIHdlYmhvb2tzPzoge1xuICAgIC8qKlxuICAgICAqIEVuYWJsZSB0aGlzIHNldHRpbmcgb25seSBpZiB5b3VyIHNlcnZlciBoYXMgQ09SUyBlbmFibGVkIGFuZCBzdXBwb3J0cyBub24tc2ltcGxlIENPUlMgcmVxdWVzdHMuXG4gICAgICogSWYgdGhpcyBzZXR0aW5nIGlzIGRpc2FibGVkLCB5b3VyIHdlYmhvb2sgd2lsbCBub3QgbmVlZCBDT1JTIHRvIHJlY2VpdmUgZGF0YSwgYnV0IGl0IHdpbGwgbm90IHJlY2VpdmUgdGhlIGN1c3RvbSBoZWFkZXJzLlxuICAgICAqIFRoZSBzaW1wbGVzdCBvcHRpb24gaXMgdG8gbGVhdmUgaXQgZGlzYWJsZWQuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cbiAgICBjb3JzOiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogVGhpcyBldmVudCBvY2N1cnMgYWZ0ZXIgYSBub3RpZmljYXRpb24gaXMgY2xpY2tlZC5cbiAgICAgKiBAZXhhbXBsZSBodHRwczovL3NpdGUuY29tL2hvb2tcbiAgICAgKi9cbiAgICAnbm90aWZpY2F0aW9uLmNsaWNrZWQnPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogVGhpcyBldmVudCBvY2N1cnMgYWZ0ZXIgYSBub3RpZmljYXRpb24gaXMgaW50ZW50aW9uYWxseSBkaXNtaXNzZWQgYnkgdGhlIHVzZXIgKGNsaWNraW5nIHRoZSBub3RpZmljYXRpb24gYm9keSBvciBvbmUgb2YgdGhlIG5vdGlmaWNhdGlvbiBhY3Rpb24gYnV0dG9ucyBkb2VzIG5vdCB0cmlnZ2VyIHRoZSBkaXNtaXNzZWQgd2ViaG9vayksXG4gICAgICogYWZ0ZXIgYSBncm91cCBvZiBub3RpZmljYXRpb25zIGFyZSBhbGwgZGlzbWlzc2VkICh3aXRoIHRoaXMgbm90aWZpY2F0aW9uIGFzIHBhcnQgb2YgdGhhdCBncm91cCksIG9yIGFmdGVyIGEgbm90aWZpY2F0aW9uIGV4cGlyZXMgb24gaXRzIG93biB0aW1lIGFuZCBkaXNhcHBlYXJzLiBUaGlzIGV2ZW50IGlzIHN1cHBvcnRlZCBvbiBDaHJvbWUgb25seS5cbiAgICAgKiBAZXhhbXBsZSBodHRwczovL3NpdGUuY29tL2hvb2tcbiAgICAgKi9cbiAgICAnbm90aWZpY2F0aW9uLmRpc21pc3NlZCc/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGV2ZW50IG9jY3VycyBhZnRlciBhIG5vdGlmaWNhdGlvbiBpcyBkaXNwbGF5ZWQuXG4gICAgICogQGV4YW1wbGUgaHR0cHM6Ly9zaXRlLmNvbS9ob29rXG4gICAgICovXG4gICAgJ25vdGlmaWNhdGlvbi53aWxsRGlzcGxheSc/OiBzdHJpbmc7XG4gIH07XG4gIGF1dG9SZXN1YnNjcmliZT86IGJvb2xlYW47XG4gIGF1dG9SZWdpc3Rlcj86IGJvb2xlYW47XG4gIG5vdGlmaWNhdGlvbkNsaWNrSGFuZGxlck1hdGNoPzogc3RyaW5nO1xuICBub3RpZmljYXRpb25DbGlja0hhbmRsZXJBY3Rpb24/OiBzdHJpbmc7XG4gIHBhdGg/OiBzdHJpbmc7XG4gIHNlcnZpY2VXb3JrZXJQYXJhbT86IHsgc2NvcGU6IHN0cmluZyB9O1xuICBzZXJ2aWNlV29ya2VyUGF0aD86IHN0cmluZztcbiAgc2VydmljZVdvcmtlck92ZXJyaWRlRm9yVHlwaWNhbD86IGJvb2xlYW47XG4gIHNlcnZpY2VXb3JrZXJVcGRhdGVyUGF0aD86IHN0cmluZztcbiAgYWxsb3dMb2NhbGhvc3RBc1NlY3VyZU9yaWdpbj86IGJvb2xlYW47XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJT25lU2lnbmFsT25lU2lnbmFsIHtcblx0U2xpZGVkb3duOiBJT25lU2lnbmFsU2xpZGVkb3duO1xuXHROb3RpZmljYXRpb25zOiBJT25lU2lnbmFsTm90aWZpY2F0aW9ucztcblx0U2Vzc2lvbjogSU9uZVNpZ25hbFNlc3Npb247XG5cdFVzZXI6IElPbmVTaWduYWxVc2VyO1xuXHREZWJ1ZzogSU9uZVNpZ25hbERlYnVnO1xuXHRsb2dpbihleHRlcm5hbElkOiBzdHJpbmcsIGp3dFRva2VuPzogc3RyaW5nKTogUHJvbWlzZTx2b2lkPjtcblx0bG9nb3V0KCk6IFByb21pc2U8dm9pZD47XG5cdGluaXQob3B0aW9uczogSUluaXRPYmplY3QpOiBQcm9taXNlPHZvaWQ+O1xuXHRzZXRDb25zZW50R2l2ZW4oY29uc2VudDogYm9vbGVhbik6IFByb21pc2U8dm9pZD47XG5cdHNldENvbnNlbnRSZXF1aXJlZChyZXF1aXJlc0NvbnNlbnQ6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+O1xufVxuZXhwb3J0IGludGVyZmFjZSBJT25lU2lnbmFsTm90aWZpY2F0aW9ucyB7XG5cdHBlcm1pc3Npb25OYXRpdmU6IE5vdGlmaWNhdGlvblBlcm1pc3Npb247XG5cdHBlcm1pc3Npb246IGJvb2xlYW47XG5cdHNldERlZmF1bHRVcmwodXJsOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+O1xuXHRzZXREZWZhdWx0VGl0bGUodGl0bGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD47XG5cdGlzUHVzaFN1cHBvcnRlZCgpOiBib29sZWFuO1xuXHRyZXF1ZXN0UGVybWlzc2lvbigpOiBQcm9taXNlPHZvaWQ+O1xuXHRhZGRFdmVudExpc3RlbmVyPEsgZXh0ZW5kcyBOb3RpZmljYXRpb25FdmVudE5hbWU+KGV2ZW50OiBLLCBsaXN0ZW5lcjogKG9iajogTm90aWZpY2F0aW9uRXZlbnRUeXBlTWFwW0tdKSA9PiB2b2lkKTogdm9pZDtcblx0cmVtb3ZlRXZlbnRMaXN0ZW5lcjxLIGV4dGVuZHMgTm90aWZpY2F0aW9uRXZlbnROYW1lPihldmVudDogSywgbGlzdGVuZXI6IChvYmo6IE5vdGlmaWNhdGlvbkV2ZW50VHlwZU1hcFtLXSkgPT4gdm9pZCk6IHZvaWQ7XG59XG5leHBvcnQgaW50ZXJmYWNlIElPbmVTaWduYWxTbGlkZWRvd24ge1xuXHRwcm9tcHRQdXNoKG9wdGlvbnM/OiBBdXRvUHJvbXB0T3B0aW9ucyk6IFByb21pc2U8dm9pZD47XG5cdHByb21wdFB1c2hDYXRlZ29yaWVzKG9wdGlvbnM/OiBBdXRvUHJvbXB0T3B0aW9ucyk6IFByb21pc2U8dm9pZD47XG5cdHByb21wdFNtcyhvcHRpb25zPzogQXV0b1Byb21wdE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+O1xuXHRwcm9tcHRFbWFpbChvcHRpb25zPzogQXV0b1Byb21wdE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+O1xuXHRwcm9tcHRTbXNBbmRFbWFpbChvcHRpb25zPzogQXV0b1Byb21wdE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+O1xuXHRhZGRFdmVudExpc3RlbmVyKGV2ZW50OiBTbGlkZWRvd25FdmVudE5hbWUsIGxpc3RlbmVyOiAod2FzU2hvd246IGJvb2xlYW4pID0+IHZvaWQpOiB2b2lkO1xuXHRyZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50OiBTbGlkZWRvd25FdmVudE5hbWUsIGxpc3RlbmVyOiAod2FzU2hvd246IGJvb2xlYW4pID0+IHZvaWQpOiB2b2lkO1xufVxuZXhwb3J0IGludGVyZmFjZSBJT25lU2lnbmFsRGVidWcge1xuXHRzZXRMb2dMZXZlbChsb2dMZXZlbDogc3RyaW5nKTogdm9pZDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSU9uZVNpZ25hbFNlc3Npb24ge1xuXHRzZW5kT3V0Y29tZShvdXRjb21lTmFtZTogc3RyaW5nLCBvdXRjb21lV2VpZ2h0PzogbnVtYmVyKTogUHJvbWlzZTx2b2lkPjtcblx0c2VuZFVuaXF1ZU91dGNvbWUob3V0Y29tZU5hbWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD47XG59XG5leHBvcnQgaW50ZXJmYWNlIElPbmVTaWduYWxVc2VyIHtcblx0b25lc2lnbmFsSWQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0ZXh0ZXJuYWxJZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHRQdXNoU3Vic2NyaXB0aW9uOiBJT25lU2lnbmFsUHVzaFN1YnNjcmlwdGlvbjtcblx0YWRkQWxpYXMobGFiZWw6IHN0cmluZywgaWQ6IHN0cmluZyk6IHZvaWQ7XG5cdGFkZEFsaWFzZXMoYWxpYXNlczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSk6IHZvaWQ7XG5cdHJlbW92ZUFsaWFzKGxhYmVsOiBzdHJpbmcpOiB2b2lkO1xuXHRyZW1vdmVBbGlhc2VzKGxhYmVsczogc3RyaW5nW10pOiB2b2lkO1xuXHRhZGRFbWFpbChlbWFpbDogc3RyaW5nKTogdm9pZDtcblx0cmVtb3ZlRW1haWwoZW1haWw6IHN0cmluZyk6IHZvaWQ7XG5cdGFkZFNtcyhzbXNOdW1iZXI6IHN0cmluZyk6IHZvaWQ7XG5cdHJlbW92ZVNtcyhzbXNOdW1iZXI6IHN0cmluZyk6IHZvaWQ7XG5cdGFkZFRhZyhrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQ7XG5cdGFkZFRhZ3ModGFnczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSk6IHZvaWQ7XG5cdHJlbW92ZVRhZyhrZXk6IHN0cmluZyk6IHZvaWQ7XG5cdHJlbW92ZVRhZ3Moa2V5czogc3RyaW5nW10pOiB2b2lkO1xuXHRnZXRUYWdzKCk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG5cdGFkZEV2ZW50TGlzdGVuZXIoZXZlbnQ6ICdjaGFuZ2UnLCBsaXN0ZW5lcjogKGNoYW5nZTogVXNlckNoYW5nZUV2ZW50KSA9PiB2b2lkKTogdm9pZDtcblx0cmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudDogJ2NoYW5nZScsIGxpc3RlbmVyOiAoY2hhbmdlOiBVc2VyQ2hhbmdlRXZlbnQpID0+IHZvaWQpOiB2b2lkO1xuXHRzZXRMYW5ndWFnZShsYW5ndWFnZTogc3RyaW5nKTogdm9pZDtcblx0Z2V0TGFuZ3VhZ2UoKTogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBJT25lU2lnbmFsUHVzaFN1YnNjcmlwdGlvbiB7XG5cdGlkOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkO1xuXHR0b2tlbjogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZDtcblx0b3B0ZWRJbjogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblx0b3B0SW4oKTogUHJvbWlzZTx2b2lkPjtcblx0b3B0T3V0KCk6IFByb21pc2U8dm9pZD47XG5cdGFkZEV2ZW50TGlzdGVuZXIoZXZlbnQ6ICdjaGFuZ2UnLCBsaXN0ZW5lcjogKGNoYW5nZTogU3Vic2NyaXB0aW9uQ2hhbmdlRXZlbnQpID0+IHZvaWQpOiB2b2lkO1xuXHRyZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50OiAnY2hhbmdlJywgbGlzdGVuZXI6IChjaGFuZ2U6IFN1YnNjcmlwdGlvbkNoYW5nZUV2ZW50KSA9PiB2b2lkKTogdm9pZDtcbn1cbmZ1bmN0aW9uIG9uZVNpZ25hbExvZ2luKGV4dGVybmFsSWQ6IHN0cmluZywgand0VG9rZW4/OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQpIHtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoJ09uZVNpZ25hbCBzY3JpcHQgZmFpbGVkIHRvIGxvYWQuJykpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgICBvbmVTaWduYWwubG9naW4oZXh0ZXJuYWxJZCwgand0VG9rZW4pLnRoZW4oKCkgPT4gcmVzb2x2ZSgpKTtcbiAgICB9KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBvbmVTaWduYWxMb2dvdXQoKTogUHJvbWlzZTx2b2lkPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgaWYgKGlzT25lU2lnbmFsU2NyaXB0RmFpbGVkKSB7XG4gICAgICByZWplY3QobmV3IEVycm9yKCdPbmVTaWduYWwgc2NyaXB0IGZhaWxlZCB0byBsb2FkLicpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgICAgb25lU2lnbmFsLmxvZ291dCgpLnRoZW4oKCkgPT4gcmVzb2x2ZSgpKTtcbiAgICB9KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBvbmVTaWduYWxTZXRDb25zZW50R2l2ZW4oY29uc2VudDogYm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCkge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcignT25lU2lnbmFsIHNjcmlwdCBmYWlsZWQgdG8gbG9hZC4nKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC5zZXRDb25zZW50R2l2ZW4oY29uc2VudCkudGhlbigoKSA9PiByZXNvbHZlKCkpO1xuICAgIH0pO1xuICB9KTtcbn1cbmZ1bmN0aW9uIG9uZVNpZ25hbFNldENvbnNlbnRSZXF1aXJlZChyZXF1aXJlc0NvbnNlbnQ6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQpIHtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoJ09uZVNpZ25hbCBzY3JpcHQgZmFpbGVkIHRvIGxvYWQuJykpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgICBvbmVTaWduYWwuc2V0Q29uc2VudFJlcXVpcmVkKHJlcXVpcmVzQ29uc2VudCkudGhlbigoKSA9PiByZXNvbHZlKCkpO1xuICAgIH0pO1xuICB9KTtcbn1cbmZ1bmN0aW9uIHNsaWRlZG93blByb21wdFB1c2gob3B0aW9ucz86IEF1dG9Qcm9tcHRPcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgaWYgKGlzT25lU2lnbmFsU2NyaXB0RmFpbGVkKSB7XG4gICAgICByZWplY3QobmV3IEVycm9yKCdPbmVTaWduYWwgc2NyaXB0IGZhaWxlZCB0byBsb2FkLicpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgICAgb25lU2lnbmFsLlNsaWRlZG93bi5wcm9tcHRQdXNoKG9wdGlvbnMpLnRoZW4oKCkgPT4gcmVzb2x2ZSgpKTtcbiAgICB9KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBzbGlkZWRvd25Qcm9tcHRQdXNoQ2F0ZWdvcmllcyhvcHRpb25zPzogQXV0b1Byb21wdE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQpIHtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoJ09uZVNpZ25hbCBzY3JpcHQgZmFpbGVkIHRvIGxvYWQuJykpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgICBvbmVTaWduYWwuU2xpZGVkb3duLnByb21wdFB1c2hDYXRlZ29yaWVzKG9wdGlvbnMpLnRoZW4oKCkgPT4gcmVzb2x2ZSgpKTtcbiAgICB9KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBzbGlkZWRvd25Qcm9tcHRTbXMob3B0aW9ucz86IEF1dG9Qcm9tcHRPcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgaWYgKGlzT25lU2lnbmFsU2NyaXB0RmFpbGVkKSB7XG4gICAgICByZWplY3QobmV3IEVycm9yKCdPbmVTaWduYWwgc2NyaXB0IGZhaWxlZCB0byBsb2FkLicpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgICAgb25lU2lnbmFsLlNsaWRlZG93bi5wcm9tcHRTbXMob3B0aW9ucykudGhlbigoKSA9PiByZXNvbHZlKCkpO1xuICAgIH0pO1xuICB9KTtcbn1cbmZ1bmN0aW9uIHNsaWRlZG93blByb21wdEVtYWlsKG9wdGlvbnM/OiBBdXRvUHJvbXB0T3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCkge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcignT25lU2lnbmFsIHNjcmlwdCBmYWlsZWQgdG8gbG9hZC4nKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC5TbGlkZWRvd24ucHJvbXB0RW1haWwob3B0aW9ucykudGhlbigoKSA9PiByZXNvbHZlKCkpO1xuICAgIH0pO1xuICB9KTtcbn1cbmZ1bmN0aW9uIHNsaWRlZG93blByb21wdFNtc0FuZEVtYWlsKG9wdGlvbnM/OiBBdXRvUHJvbXB0T3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCkge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcignT25lU2lnbmFsIHNjcmlwdCBmYWlsZWQgdG8gbG9hZC4nKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC5TbGlkZWRvd24ucHJvbXB0U21zQW5kRW1haWwob3B0aW9ucykudGhlbigoKSA9PiByZXNvbHZlKCkpO1xuICAgIH0pO1xuICB9KTtcbn1cbmZ1bmN0aW9uIHNsaWRlZG93bkFkZEV2ZW50TGlzdGVuZXIoZXZlbnQ6IFNsaWRlZG93bkV2ZW50TmFtZSwgbGlzdGVuZXI6ICh3YXNTaG93bjogYm9vbGVhbikgPT4gdm9pZCk6IHZvaWQge1xuICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgIG9uZVNpZ25hbC5TbGlkZWRvd24uYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc2xpZGVkb3duUmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudDogU2xpZGVkb3duRXZlbnROYW1lLCBsaXN0ZW5lcjogKHdhc1Nob3duOiBib29sZWFuKSA9PiB2b2lkKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlNsaWRlZG93bi5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBub3RpZmljYXRpb25zU2V0RGVmYXVsdFVybCh1cmw6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCkge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcignT25lU2lnbmFsIHNjcmlwdCBmYWlsZWQgdG8gbG9hZC4nKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC5Ob3RpZmljYXRpb25zLnNldERlZmF1bHRVcmwodXJsKS50aGVuKCgpID0+IHJlc29sdmUoKSk7XG4gICAgfSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gbm90aWZpY2F0aW9uc1NldERlZmF1bHRUaXRsZSh0aXRsZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgaWYgKGlzT25lU2lnbmFsU2NyaXB0RmFpbGVkKSB7XG4gICAgICByZWplY3QobmV3IEVycm9yKCdPbmVTaWduYWwgc2NyaXB0IGZhaWxlZCB0byBsb2FkLicpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgICAgb25lU2lnbmFsLk5vdGlmaWNhdGlvbnMuc2V0RGVmYXVsdFRpdGxlKHRpdGxlKS50aGVuKCgpID0+IHJlc29sdmUoKSk7XG4gICAgfSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gbm90aWZpY2F0aW9uc1JlcXVlc3RQZXJtaXNzaW9uKCk6IFByb21pc2U8dm9pZD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCkge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcignT25lU2lnbmFsIHNjcmlwdCBmYWlsZWQgdG8gbG9hZC4nKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC5Ob3RpZmljYXRpb25zLnJlcXVlc3RQZXJtaXNzaW9uKCkudGhlbigoKSA9PiByZXNvbHZlKCkpO1xuICAgIH0pO1xuICB9KTtcbn1cbmZ1bmN0aW9uIG5vdGlmaWNhdGlvbnNBZGRFdmVudExpc3RlbmVyPEsgZXh0ZW5kcyBOb3RpZmljYXRpb25FdmVudE5hbWU+KGV2ZW50OiBLLCBsaXN0ZW5lcjogKG9iajogTm90aWZpY2F0aW9uRXZlbnRUeXBlTWFwW0tdKSA9PiB2b2lkKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLk5vdGlmaWNhdGlvbnMuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbm90aWZpY2F0aW9uc1JlbW92ZUV2ZW50TGlzdGVuZXI8SyBleHRlbmRzIE5vdGlmaWNhdGlvbkV2ZW50TmFtZT4oZXZlbnQ6IEssIGxpc3RlbmVyOiAob2JqOiBOb3RpZmljYXRpb25FdmVudFR5cGVNYXBbS10pID0+IHZvaWQpOiB2b2lkIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuTm90aWZpY2F0aW9ucy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzZXNzaW9uU2VuZE91dGNvbWUob3V0Y29tZU5hbWU6IHN0cmluZywgb3V0Y29tZVdlaWdodD86IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCkge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcignT25lU2lnbmFsIHNjcmlwdCBmYWlsZWQgdG8gbG9hZC4nKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC5TZXNzaW9uLnNlbmRPdXRjb21lKG91dGNvbWVOYW1lLCBvdXRjb21lV2VpZ2h0KS50aGVuKCgpID0+IHJlc29sdmUoKSk7XG4gICAgfSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gc2Vzc2lvblNlbmRVbmlxdWVPdXRjb21lKG91dGNvbWVOYW1lOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQpIHtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoJ09uZVNpZ25hbCBzY3JpcHQgZmFpbGVkIHRvIGxvYWQuJykpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgICBvbmVTaWduYWwuU2Vzc2lvbi5zZW5kVW5pcXVlT3V0Y29tZShvdXRjb21lTmFtZSkudGhlbigoKSA9PiByZXNvbHZlKCkpO1xuICAgIH0pO1xuICB9KTtcbn1cbmZ1bmN0aW9uIHVzZXJBZGRBbGlhcyhsYWJlbDogc3RyaW5nLCBpZDogc3RyaW5nKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlVzZXIuYWRkQWxpYXMobGFiZWwsIGlkKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVzZXJBZGRBbGlhc2VzKGFsaWFzZXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pOiB2b2lkIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuVXNlci5hZGRBbGlhc2VzKGFsaWFzZXMpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdXNlclJlbW92ZUFsaWFzKGxhYmVsOiBzdHJpbmcpOiB2b2lkIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuVXNlci5yZW1vdmVBbGlhcyhsYWJlbCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1c2VyUmVtb3ZlQWxpYXNlcyhsYWJlbHM6IHN0cmluZ1tdKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlVzZXIucmVtb3ZlQWxpYXNlcyhsYWJlbHMpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdXNlckFkZEVtYWlsKGVtYWlsOiBzdHJpbmcpOiB2b2lkIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuVXNlci5hZGRFbWFpbChlbWFpbCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1c2VyUmVtb3ZlRW1haWwoZW1haWw6IHN0cmluZyk6IHZvaWQge1xuICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgIG9uZVNpZ25hbC5Vc2VyLnJlbW92ZUVtYWlsKGVtYWlsKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVzZXJBZGRTbXMoc21zTnVtYmVyOiBzdHJpbmcpOiB2b2lkIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuVXNlci5hZGRTbXMoc21zTnVtYmVyKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVzZXJSZW1vdmVTbXMoc21zTnVtYmVyOiBzdHJpbmcpOiB2b2lkIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuVXNlci5yZW1vdmVTbXMoc21zTnVtYmVyKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVzZXJBZGRUYWcoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuVXNlci5hZGRUYWcoa2V5LCB2YWx1ZSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1c2VyQWRkVGFncyh0YWdzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlVzZXIuYWRkVGFncyh0YWdzKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVzZXJSZW1vdmVUYWcoa2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuVXNlci5yZW1vdmVUYWcoa2V5KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVzZXJSZW1vdmVUYWdzKGtleXM6IHN0cmluZ1tdKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlVzZXIucmVtb3ZlVGFncyhrZXlzKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVzZXJHZXRUYWdzKCk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0ge1xuICBsZXQgcmV0VmFsOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgIHJldFZhbCA9IG9uZVNpZ25hbC5Vc2VyLmdldFRhZ3MoKTtcbiAgfSk7XG4gIC8vIEB0cy1pZ25vcmVcbiAgcmV0dXJuIHJldFZhbDtcbn1cblxuZnVuY3Rpb24gdXNlckFkZEV2ZW50TGlzdGVuZXIoZXZlbnQ6ICdjaGFuZ2UnLCBsaXN0ZW5lcjogKGNoYW5nZTogVXNlckNoYW5nZUV2ZW50KSA9PiB2b2lkKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlVzZXIuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdXNlclJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQ6ICdjaGFuZ2UnLCBsaXN0ZW5lcjogKGNoYW5nZTogVXNlckNoYW5nZUV2ZW50KSA9PiB2b2lkKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlVzZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdXNlclNldExhbmd1YWdlKGxhbmd1YWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuVXNlci5zZXRMYW5ndWFnZShsYW5ndWFnZSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1c2VyR2V0TGFuZ3VhZ2UoKTogc3RyaW5nIHtcbiAgbGV0IHJldFZhbDogc3RyaW5nO1xuICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgIHJldFZhbCA9IG9uZVNpZ25hbC5Vc2VyLmdldExhbmd1YWdlKCk7XG4gIH0pO1xuICAvLyBAdHMtaWdub3JlXG4gIHJldHVybiByZXRWYWw7XG59XG5cbmZ1bmN0aW9uIHB1c2hTdWJzY3JpcHRpb25PcHRJbigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQpIHtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoJ09uZVNpZ25hbCBzY3JpcHQgZmFpbGVkIHRvIGxvYWQuJykpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgICBvbmVTaWduYWwuVXNlci5QdXNoU3Vic2NyaXB0aW9uLm9wdEluKCkudGhlbigoKSA9PiByZXNvbHZlKCkpO1xuICAgIH0pO1xuICB9KTtcbn1cbmZ1bmN0aW9uIHB1c2hTdWJzY3JpcHRpb25PcHRPdXQoKTogUHJvbWlzZTx2b2lkPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgaWYgKGlzT25lU2lnbmFsU2NyaXB0RmFpbGVkKSB7XG4gICAgICByZWplY3QobmV3IEVycm9yKCdPbmVTaWduYWwgc2NyaXB0IGZhaWxlZCB0byBsb2FkLicpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgICAgb25lU2lnbmFsLlVzZXIuUHVzaFN1YnNjcmlwdGlvbi5vcHRPdXQoKS50aGVuKCgpID0+IHJlc29sdmUoKSk7XG4gICAgfSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gcHVzaFN1YnNjcmlwdGlvbkFkZEV2ZW50TGlzdGVuZXIoZXZlbnQ6ICdjaGFuZ2UnLCBsaXN0ZW5lcjogKGNoYW5nZTogU3Vic2NyaXB0aW9uQ2hhbmdlRXZlbnQpID0+IHZvaWQpOiB2b2lkIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuVXNlci5QdXNoU3Vic2NyaXB0aW9uLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHB1c2hTdWJzY3JpcHRpb25SZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50OiAnY2hhbmdlJywgbGlzdGVuZXI6IChjaGFuZ2U6IFN1YnNjcmlwdGlvbkNoYW5nZUV2ZW50KSA9PiB2b2lkKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlVzZXIuUHVzaFN1YnNjcmlwdGlvbi5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkZWJ1Z1NldExvZ0xldmVsKGxvZ0xldmVsOiBzdHJpbmcpOiB2b2lkIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuRGVidWcuc2V0TG9nTGV2ZWwobG9nTGV2ZWwpO1xuICB9KTtcbn1cblxuXG5jb25zdCBQdXNoU3Vic2NyaXB0aW9uTmFtZXNwYWNlOiBJT25lU2lnbmFsUHVzaFN1YnNjcmlwdGlvbiA9IHtcblx0Z2V0IGlkKCk6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQgeyByZXR1cm4gd2luZG93Lk9uZVNpZ25hbD8uVXNlcj8uUHVzaFN1YnNjcmlwdGlvbj8uaWQ7IH0sXG5cdGdldCB0b2tlbigpOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHdpbmRvdy5PbmVTaWduYWw/LlVzZXI/LlB1c2hTdWJzY3JpcHRpb24/LnRva2VuOyB9LFxuXHRnZXQgb3B0ZWRJbigpOiBib29sZWFuIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHdpbmRvdy5PbmVTaWduYWw/LlVzZXI/LlB1c2hTdWJzY3JpcHRpb24/Lm9wdGVkSW47IH0sXG5cdG9wdEluOiBwdXNoU3Vic2NyaXB0aW9uT3B0SW4sXG5cdG9wdE91dDogcHVzaFN1YnNjcmlwdGlvbk9wdE91dCxcblx0YWRkRXZlbnRMaXN0ZW5lcjogcHVzaFN1YnNjcmlwdGlvbkFkZEV2ZW50TGlzdGVuZXIsXG5cdHJlbW92ZUV2ZW50TGlzdGVuZXI6IHB1c2hTdWJzY3JpcHRpb25SZW1vdmVFdmVudExpc3RlbmVyLFxufTtcblxuY29uc3QgVXNlck5hbWVzcGFjZTogSU9uZVNpZ25hbFVzZXIgPSB7XG5cdGdldCBvbmVzaWduYWxJZCgpOiBzdHJpbmcgfCB1bmRlZmluZWQgeyByZXR1cm4gd2luZG93Lk9uZVNpZ25hbD8uVXNlcj8ub25lc2lnbmFsSWQ7IH0sXG5cdGdldCBleHRlcm5hbElkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7IHJldHVybiB3aW5kb3cuT25lU2lnbmFsPy5Vc2VyPy5leHRlcm5hbElkOyB9LFxuXHRhZGRBbGlhczogdXNlckFkZEFsaWFzLFxuXHRhZGRBbGlhc2VzOiB1c2VyQWRkQWxpYXNlcyxcblx0cmVtb3ZlQWxpYXM6IHVzZXJSZW1vdmVBbGlhcyxcblx0cmVtb3ZlQWxpYXNlczogdXNlclJlbW92ZUFsaWFzZXMsXG5cdGFkZEVtYWlsOiB1c2VyQWRkRW1haWwsXG5cdHJlbW92ZUVtYWlsOiB1c2VyUmVtb3ZlRW1haWwsXG5cdGFkZFNtczogdXNlckFkZFNtcyxcblx0cmVtb3ZlU21zOiB1c2VyUmVtb3ZlU21zLFxuXHRhZGRUYWc6IHVzZXJBZGRUYWcsXG5cdGFkZFRhZ3M6IHVzZXJBZGRUYWdzLFxuXHRyZW1vdmVUYWc6IHVzZXJSZW1vdmVUYWcsXG5cdHJlbW92ZVRhZ3M6IHVzZXJSZW1vdmVUYWdzLFxuXHRnZXRUYWdzOiB1c2VyR2V0VGFncyxcblx0YWRkRXZlbnRMaXN0ZW5lcjogdXNlckFkZEV2ZW50TGlzdGVuZXIsXG5cdHJlbW92ZUV2ZW50TGlzdGVuZXI6IHVzZXJSZW1vdmVFdmVudExpc3RlbmVyLFxuXHRzZXRMYW5ndWFnZTogdXNlclNldExhbmd1YWdlLFxuXHRnZXRMYW5ndWFnZTogdXNlckdldExhbmd1YWdlLFxuXHRQdXNoU3Vic2NyaXB0aW9uOiBQdXNoU3Vic2NyaXB0aW9uTmFtZXNwYWNlLFxufTtcblxuY29uc3QgU2Vzc2lvbk5hbWVzcGFjZTogSU9uZVNpZ25hbFNlc3Npb24gPSB7XG5cdHNlbmRPdXRjb21lOiBzZXNzaW9uU2VuZE91dGNvbWUsXG5cdHNlbmRVbmlxdWVPdXRjb21lOiBzZXNzaW9uU2VuZFVuaXF1ZU91dGNvbWUsXG59O1xuXG5jb25zdCBEZWJ1Z05hbWVzcGFjZTogSU9uZVNpZ25hbERlYnVnID0ge1xuXHRzZXRMb2dMZXZlbDogZGVidWdTZXRMb2dMZXZlbCxcbn07XG5cbmNvbnN0IFNsaWRlZG93bk5hbWVzcGFjZTogSU9uZVNpZ25hbFNsaWRlZG93biA9IHtcblx0cHJvbXB0UHVzaDogc2xpZGVkb3duUHJvbXB0UHVzaCxcblx0cHJvbXB0UHVzaENhdGVnb3JpZXM6IHNsaWRlZG93blByb21wdFB1c2hDYXRlZ29yaWVzLFxuXHRwcm9tcHRTbXM6IHNsaWRlZG93blByb21wdFNtcyxcblx0cHJvbXB0RW1haWw6IHNsaWRlZG93blByb21wdEVtYWlsLFxuXHRwcm9tcHRTbXNBbmRFbWFpbDogc2xpZGVkb3duUHJvbXB0U21zQW5kRW1haWwsXG5cdGFkZEV2ZW50TGlzdGVuZXI6IHNsaWRlZG93bkFkZEV2ZW50TGlzdGVuZXIsXG5cdHJlbW92ZUV2ZW50TGlzdGVuZXI6IHNsaWRlZG93blJlbW92ZUV2ZW50TGlzdGVuZXIsXG59O1xuXG5jb25zdCBOb3RpZmljYXRpb25zTmFtZXNwYWNlOiBJT25lU2lnbmFsTm90aWZpY2F0aW9ucyA9IHtcblx0Z2V0IHBlcm1pc3Npb25OYXRpdmUoKTogTm90aWZpY2F0aW9uUGVybWlzc2lvbiB7IHJldHVybiB3aW5kb3cuT25lU2lnbmFsPy5Ob3RpZmljYXRpb25zPy5wZXJtaXNzaW9uTmF0aXZlID8/ICdkZWZhdWx0JzsgfSxcblx0Z2V0IHBlcm1pc3Npb24oKTogYm9vbGVhbiB7IHJldHVybiB3aW5kb3cuT25lU2lnbmFsPy5Ob3RpZmljYXRpb25zPy5wZXJtaXNzaW9uID8/IGZhbHNlOyB9LFxuXHRzZXREZWZhdWx0VXJsOiBub3RpZmljYXRpb25zU2V0RGVmYXVsdFVybCxcblx0c2V0RGVmYXVsdFRpdGxlOiBub3RpZmljYXRpb25zU2V0RGVmYXVsdFRpdGxlLFxuXHRpc1B1c2hTdXBwb3J0ZWQsXG5cdHJlcXVlc3RQZXJtaXNzaW9uOiBub3RpZmljYXRpb25zUmVxdWVzdFBlcm1pc3Npb24sXG5cdGFkZEV2ZW50TGlzdGVuZXI6IG5vdGlmaWNhdGlvbnNBZGRFdmVudExpc3RlbmVyLFxuXHRyZW1vdmVFdmVudExpc3RlbmVyOiBub3RpZmljYXRpb25zUmVtb3ZlRXZlbnRMaXN0ZW5lcixcbn07XG5cbi8qKlxuICogQFB1YmxpY0FwaVxuICovXG5mdW5jdGlvbiBpc1B1c2hTdXBwb3J0ZWQoKTogYm9vbGVhbiB7XG4gIHJldHVybiBpc1B1c2hOb3RpZmljYXRpb25zU3VwcG9ydGVkKCk7XG59XG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmNvbnN0IE9ORVNJR05BTF9TREtfSUQgPSAnb25lc2lnbmFsLXNkayc7XG5jb25zdCBPTkVfU0lHTkFMX1NDUklQVF9TUkMgPVxuICAnaHR0cHM6Ly9jZG4ub25lc2lnbmFsLmNvbS9zZGtzL3dlYi92MTYvT25lU2lnbmFsU0RLLnBhZ2UuanMnO1xuXG4vLyB0cnVlIGlmIHRoZSBzY3JpcHQgaXMgc3VjY2Vzc2Z1bGx5IGxvYWRlZCBmcm9tIENETi5cbmxldCBpc09uZVNpZ25hbEluaXRpYWxpemVkID0gZmFsc2U7XG4vLyB0cnVlIGlmIHRoZSBzY3JpcHQgZmFpbHMgdG8gbG9hZCBmcm9tIENETi4gQSBzZXBhcmF0ZSBmbGFnIGlzIG5lY2Vzc2FyeVxuLy8gdG8gZGlzYW1iaWd1YXRlIGJldHdlZW4gYSBDRE4gbG9hZCBmYWlsdXJlIGFuZCBhIGRlbGF5ZWQgY2FsbCB0b1xuLy8gT25lU2lnbmFsI2luaXQuXG5sZXQgaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQgPSBmYWxzZTtcblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZCA9IHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZCB8fCBbXTtcbiAgYWRkU0RLU2NyaXB0KCk7XG59XG5cbi8qKlxuICogVGhlIGZvbGxvd2luZyBjb2RlIGlzIGNvcGllZCBkaXJlY3RseSBmcm9tIHRoZSBuYXRpdmUgU0RLIHNvdXJjZSBmaWxlIEJyb3dzZXJTdXBwb3J0c1B1c2gudHNcbiAqIFMgVCBBIFIgVFxuICovXG5cbi8vIENoZWNrcyBpZiB0aGUgYnJvd3NlciBzdXBwb3J0cyBwdXNoIG5vdGlmaWNhdGlvbnMgYnkgY2hlY2tpbmcgaWYgc3BlY2lmaWNcbi8vICAgY2xhc3NlcyBhbmQgcHJvcGVydGllcyBvbiB0aGVtIGV4aXN0XG5mdW5jdGlvbiBpc1B1c2hOb3RpZmljYXRpb25zU3VwcG9ydGVkKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gc3VwcG9ydHNWYXBpZFB1c2goKSB8fCBzdXBwb3J0c1NhZmFyaVB1c2goKTtcbn1cblxuZnVuY3Rpb24gaXNNYWNPU1NhZmFyaUluSWZyYW1lKCk6IGJvb2xlYW4ge1xuICAvLyBGYWxsYmFjayBkZXRlY3Rpb24gZm9yIFNhZmFyaSBvbiBtYWNPUyBpbiBhbiBpZnJhbWUgY29udGV4dFxuICByZXR1cm4gKFxuICAgIHdpbmRvdy50b3AgIT09IHdpbmRvdyAmJiAvLyBpc0NvbnRleHRJZnJhbWVcbiAgICBuYXZpZ2F0b3IudmVuZG9yID09PSAnQXBwbGUgQ29tcHV0ZXIsIEluYy4nICYmIC8vIGlzU2FmYXJpXG4gICAgbmF2aWdhdG9yLnBsYXRmb3JtID09PSAnTWFjSW50ZWwnXG4gICk7IC8vIGlzTWFjT1Ncbn1cblxuZnVuY3Rpb24gc3VwcG9ydHNTYWZhcmlQdXNoKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gKFxuICAgICh3aW5kb3cuc2FmYXJpICYmIHR5cGVvZiB3aW5kb3cuc2FmYXJpLnB1c2hOb3RpZmljYXRpb24gIT09ICd1bmRlZmluZWQnKSB8fFxuICAgIGlzTWFjT1NTYWZhcmlJbklmcmFtZSgpXG4gICk7XG59XG5cbi8vIERvZXMgdGhlIGJyb3dzZXIgc3VwcG9ydCB0aGUgc3RhbmRhcmQgUHVzaCBBUElcbmZ1bmN0aW9uIHN1cHBvcnRzVmFwaWRQdXNoKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gKFxuICAgIHR5cGVvZiBQdXNoU3Vic2NyaXB0aW9uT3B0aW9ucyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICBQdXNoU3Vic2NyaXB0aW9uT3B0aW9ucy5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkoJ2FwcGxpY2F0aW9uU2VydmVyS2V5JylcbiAgKTtcbn1cbi8qIEUgTiBEICovXG5cbmZ1bmN0aW9uIGhhbmRsZU9uRXJyb3IoKTogdm9pZCB7XG4gIGlzT25lU2lnbmFsU2NyaXB0RmFpbGVkID0gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gYWRkU0RLU2NyaXB0KCk6IHZvaWQge1xuICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgc2NyaXB0LmlkID0gT05FU0lHTkFMX1NES19JRDtcbiAgc2NyaXB0LmRlZmVyID0gdHJ1ZTtcbiAgc2NyaXB0LnNyYyA9IE9ORV9TSUdOQUxfU0NSSVBUX1NSQztcblxuICAvLyBBbHdheXMgcmVzb2x2ZSB3aGV0aGVyIG9yIG5vdCB0aGUgc2NyaXB0IGlzIHN1Y2Nlc3NmdWxseSBpbml0aWFsaXplZC5cbiAgLy8gVGhpcyBpcyBpbXBvcnRhbnQgZm9yIHVzZXJzIHdobyBtYXkgYmxvY2sgY2RuLm9uZXNpZ25hbC5jb20gdy8gYWRibG9jay5cbiAgc2NyaXB0Lm9uZXJyb3IgPSAoKSA9PiB7XG4gICAgaGFuZGxlT25FcnJvcigpO1xuICB9O1xuXG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBPbmVTaWduYWxEZWZlcnJlZD86IE9uZVNpZ25hbERlZmVycmVkTG9hZGVkQ2FsbGJhY2tbXTtcbiAgICBPbmVTaWduYWw/OiBJT25lU2lnbmFsT25lU2lnbmFsO1xuICAgIHNhZmFyaT86IHtcbiAgICAgIHB1c2hOb3RpZmljYXRpb246IGFueTtcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU9uZVNpZ25hbE9uZVNpZ25hbCB7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE9uZVNpZ25hbCBpbXBsZW1lbnRzIElPbmVTaWduYWxPbmVTaWduYWwge1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIC8qIFAgVSBCIEwgSSBDICovXG5cbiAgLyoqXG4gICAqIEBQdWJsaWNBcGlcbiAgICovXG4gIGluaXQob3B0aW9uczogSUluaXRPYmplY3QpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAoaXNPbmVTaWduYWxJbml0aWFsaXplZCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGBPbmVTaWduYWwgaXMgYWxyZWFkeSBpbml0aWFsaXplZC5gKTtcbiAgICB9XG5cbiAgICBpZiAoIW9wdGlvbnMgfHwgIW9wdGlvbnMuYXBwSWQpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgnWW91IG5lZWQgdG8gcHJvdmlkZSB5b3VyIE9uZVNpZ25hbCBhcHBJZC4nKTtcbiAgICB9XG5cbiAgICBpZiAoIWRvY3VtZW50KSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoYERvY3VtZW50IGlzIG5vdCBkZWZpbmVkLmApO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBib3RoIGRpc2FibGVkIGFuZCBkaXNhYmxlIGtleXMgZm9yIHdlbGNvbWUgbm90aWZpY2F0aW9uXG4gICAgaWYgKG9wdGlvbnMud2VsY29tZU5vdGlmaWNhdGlvbj8uZGlzYWJsZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgb3B0aW9ucy53ZWxjb21lTm90aWZpY2F0aW9uLmRpc2FibGUgPSBvcHRpb25zLndlbGNvbWVOb3RpZmljYXRpb24uZGlzYWJsZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgICAgIG9uZVNpZ25hbFxuICAgICAgICAgIC5pbml0KG9wdGlvbnMpXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgaXNPbmVTaWduYWxJbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2gocmVqZWN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cblx0VXNlciA9IFVzZXJOYW1lc3BhY2U7XG5cdFNlc3Npb24gPSBTZXNzaW9uTmFtZXNwYWNlO1xuXHREZWJ1ZyA9IERlYnVnTmFtZXNwYWNlO1xuXHRTbGlkZWRvd24gPSBTbGlkZWRvd25OYW1lc3BhY2U7XG5cdE5vdGlmaWNhdGlvbnMgPSBOb3RpZmljYXRpb25zTmFtZXNwYWNlO1xuXHRsb2dpbiA9IG9uZVNpZ25hbExvZ2luO1xuXHRsb2dvdXQgPSBvbmVTaWduYWxMb2dvdXQ7XG5cdHNldENvbnNlbnRHaXZlbiA9IG9uZVNpZ25hbFNldENvbnNlbnRHaXZlbjtcblx0c2V0Q29uc2VudFJlcXVpcmVkID0gb25lU2lnbmFsU2V0Q29uc2VudFJlcXVpcmVkO1xufVxuIl19