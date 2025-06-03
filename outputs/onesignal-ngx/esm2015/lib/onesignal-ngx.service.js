import { __awaiter } from "tslib";
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
    return __awaiter(this, void 0, void 0, function* () {
        let retVal;
        yield ((_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
            retVal = oneSignal.User.getTags();
        }));
        // @ts-ignore
        return retVal;
    });
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
    return __awaiter(this, void 0, void 0, function* () {
        let retVal;
        yield ((_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
            retVal = oneSignal.User.getLanguage();
        }));
        // @ts-ignore
        return retVal;
    });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25lc2lnbmFsLW5neC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvb25lc2lnbmFsLW5neC9zcmMvbGliL29uZXNpZ25hbC1uZ3guc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBc1pBLFNBQVMsY0FBYyxDQUFDLFVBQWtCLEVBQUUsUUFBaUI7SUFFM0QsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTs7UUFDckMsSUFBSSx1QkFBdUIsRUFBRTtZQUMzQixNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsa0NBQWtDLENBQUMsQ0FBQyxDQUFDO1lBQ3RELE9BQU87U0FDUjtRQUVELE1BQUEsTUFBTSxDQUFDLGlCQUFpQiwwQ0FBRSxJQUFJLENBQUMsQ0FBQyxTQUE4QixFQUFFLEVBQUU7WUFDaEUsU0FBUyxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDOUQsQ0FBQyxFQUFFO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBQ0QsU0FBUyxlQUFlO0lBRXRCLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7O1FBQ3JDLElBQUksdUJBQXVCLEVBQUU7WUFDM0IsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLGtDQUFrQyxDQUFDLENBQUMsQ0FBQztZQUN0RCxPQUFPO1NBQ1I7UUFFRCxNQUFBLE1BQU0sQ0FBQyxpQkFBaUIsMENBQUUsSUFBSSxDQUFDLENBQUMsU0FBOEIsRUFBRSxFQUFFO1lBQ2hFLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUMzQyxDQUFDLEVBQUU7SUFDTCxDQUFDLENBQUMsQ0FB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RTtZQUN2RCxPQUFPLENBQUMsbUJBQW1CLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUM7U0FDNUU7UUFFRCxPQUFPLElBQUksT0FBTyxDQUFPLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFOztZQUMzQyxNQUFBLE1BQU0sQ0FBQyxpQkFBaUIsMENBQUUsSUFBSSxDQUFDLENBQUMsU0FBOEIsRUFBRSxFQUFFO2dCQUNoRSxTQUFTO3FCQUNOLElBQUksQ0FBQyxPQUFPLENBQUM7cUJBQ2IsSUFBSSxDQUFDLEdBQUcsRUFBRTtvQkFDVCxzQkFBc0IsR0FBRyxJQUFJLENBQUM7b0JBQzlCLE9BQU8sRUFBRSxDQUFDO2dCQUNaLENBQUMsQ0FBQztxQkFDRCxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkIsQ0FBQyxFQUFFO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7O1lBMUNGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgQXV0b1Byb21wdE9wdGlvbnMgeyBmb3JjZT86IGJvb2xlYW47IGZvcmNlU2xpZGVkb3duT3Zlck5hdGl2ZT86IGJvb2xlYW47IHNsaWRlZG93blByb21wdE9wdGlvbnM/OiBJT25lU2lnbmFsQXV0b1Byb21wdE9wdGlvbnM7IH1cbmV4cG9ydCBpbnRlcmZhY2UgSU9uZVNpZ25hbEF1dG9Qcm9tcHRPcHRpb25zIHsgZm9yY2U/OiBib29sZWFuOyBmb3JjZVNsaWRlZG93bk92ZXJOYXRpdmU/OiBib29sZWFuOyBpc0luVXBkYXRlTW9kZT86IGJvb2xlYW47IGNhdGVnb3J5T3B0aW9ucz86IElPbmVTaWduYWxDYXRlZ29yaWVzOyB9XG5leHBvcnQgaW50ZXJmYWNlIElPbmVTaWduYWxDYXRlZ29yaWVzIHsgcG9zaXRpdmVVcGRhdGVCdXR0b246IHN0cmluZzsgbmVnYXRpdmVVcGRhdGVCdXR0b246IHN0cmluZzsgc2F2aW5nQnV0dG9uVGV4dDogc3RyaW5nOyBlcnJvckJ1dHRvblRleHQ6IHN0cmluZzsgdXBkYXRlTWVzc2FnZTogc3RyaW5nOyB0YWdzOiBJT25lU2lnbmFsVGFnQ2F0ZWdvcnlbXTsgfVxuZXhwb3J0IGludGVyZmFjZSBJT25lU2lnbmFsVGFnQ2F0ZWdvcnkgeyB0YWc6IHN0cmluZzsgbGFiZWw6IHN0cmluZzsgY2hlY2tlZD86IGJvb2xlYW47IH1cbmV4cG9ydCB0eXBlIFB1c2hTdWJzY3JpcHRpb25OYW1lc3BhY2VQcm9wZXJ0aWVzID0geyBpZDogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZDsgdG9rZW46IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQ7IG9wdGVkSW46IGJvb2xlYW47IH07XG5leHBvcnQgdHlwZSBTdWJzY3JpcHRpb25DaGFuZ2VFdmVudCA9IHsgcHJldmlvdXM6IFB1c2hTdWJzY3JpcHRpb25OYW1lc3BhY2VQcm9wZXJ0aWVzOyBjdXJyZW50OiBQdXNoU3Vic2NyaXB0aW9uTmFtZXNwYWNlUHJvcGVydGllczsgfTtcbmV4cG9ydCB0eXBlIE5vdGlmaWNhdGlvbkV2ZW50TmFtZSA9ICdjbGljaycgfCAnZm9yZWdyb3VuZFdpbGxEaXNwbGF5JyB8ICdkaXNtaXNzJyB8ICdwZXJtaXNzaW9uQ2hhbmdlJyB8ICdwZXJtaXNzaW9uUHJvbXB0RGlzcGxheSc7XG5leHBvcnQgdHlwZSBTbGlkZWRvd25FdmVudE5hbWUgPSAnc2xpZGVkb3duQWxsb3dDbGljaycgfCAnc2xpZGVkb3duQ2FuY2VsQ2xpY2snIHwgJ3NsaWRlZG93bkNsb3NlZCcgfCAnc2xpZGVkb3duUXVldWVkJyB8ICdzbGlkZWRvd25TaG93bic7XG5leHBvcnQgdHlwZSBPbmVTaWduYWxEZWZlcnJlZExvYWRlZENhbGxiYWNrID0gKG9uZXNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4gdm9pZDtcbmV4cG9ydCBpbnRlcmZhY2UgSU9TTm90aWZpY2F0aW9uIHtcbiAgLyoqXG4gICAqIFRoZSBPbmVTaWduYWwgbm90aWZpY2F0aW9uIGlkO1xuICAgKiAgLSBQcmltYXJ5IGlkIG9uIE9uZVNpZ25hbCdzIFJFU1QgQVBJIGFuZCBkYXNoYm9hcmRcbiAgICovXG4gIHJlYWRvbmx5IG5vdGlmaWNhdGlvbklkOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFZpc2libGUgdGl0bGUgdGV4dCBvbiB0aGUgbm90aWZpY2F0aW9uXG4gICAqL1xuICByZWFkb25seSB0aXRsZT86IHN0cmluZztcblxuICAvKipcbiAgICogVmlzaWJsZSBib2R5IHRleHQgb24gdGhlIG5vdGlmaWNhdGlvblxuICAgKi9cbiAgcmVhZG9ubHkgYm9keTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBWaXNpYmxlIGljb24gdGhlIG5vdGlmaWNhdGlvbjsgVVJMIGZvcm1hdFxuICAgKi9cbiAgcmVhZG9ubHkgaWNvbj86IHN0cmluZztcblxuICAvKipcbiAgICogVmlzaWJsZSBzbWFsbCBiYWRnZUljb24gdGhhdCBkaXNwbGF5cyBvbiBzb21lIGRldmljZXM7IFVSTCBmb3JtYXRcbiAgICogRXhhbXBsZTogT24gQW5kcm9pZCdzIHN0YXR1cyBiYXJcbiAgICovXG4gIHJlYWRvbmx5IGJhZGdlSWNvbj86IHN0cmluZztcblxuICAvKipcbiAgICogVmlzaWJsZSBpbWFnZSBvbiB0aGUgbm90aWZpY2F0aW9uOyBVUkwgZm9ybWF0XG4gICAqL1xuICByZWFkb25seSBpbWFnZT86IHN0cmluZztcblxuICAvKipcbiAgICogVmlzaWJsZSBidXR0b25zIG9uIHRoZSBub3RpZmljYXRpb25cbiAgICovXG4gIHJlYWRvbmx5IGFjdGlvbkJ1dHRvbnM/OiBJT1NOb3RpZmljYXRpb25BY3Rpb25CdXR0b25bXTtcblxuICAvKipcbiAgICogSWYgdGhpcyB2YWx1ZSBpcyB0aGUgc2FtZSBhcyBleGlzdGluZyBub3RpZmljYXRpb24sIGl0IHdpbGwgcmVwbGFjZSBpdFxuICAgKiBDYW4gYmUgc2V0IHdoZW4gY3JlYXRpbmcgdGhlIG5vdGlmaWNhdGlvbiB3aXRoIFwiV2ViIFB1c2ggVG9waWNcIiBvbiB0aGUgZGFzaGJvYXJkXG4gICAqIG9yIHdlYl9wdXNoX3RvcGljIGZyb20gdGhlIFJFU1QgQVBJLlxuICAgKi9cbiAgcmVhZG9ubHkgdG9waWM/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEN1c3RvbSBvYmplY3QgdGhhdCB3YXMgc2VudCB3aXRoIHRoZSBub3RpZmljYXRpb247XG4gICAqIGRlZmluYWJsZSB3aGVuIGNyZWF0aW5nIHRoZSBub3RpZmljYXRpb24gZnJvbSB0aGUgT25lU2lnbmFsIFJFU1QgQVBJIG9yIGRhc2hib2FyZFxuICAgKi9cbiAgcmVhZG9ubHkgYWRkaXRpb25hbERhdGE/OiBvYmplY3Q7XG5cbiAgLyoqXG4gICAqIFVSTCB0byBvcGVuIHdoZW4gY2xpY2tpbmcgb3IgdGFwcGluZyBvbiB0aGUgbm90aWZpY2F0aW9uXG4gICAqL1xuICByZWFkb25seSBsYXVuY2hVUkw/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENvbmZpcm0gdGhlIHB1c2ggd2FzIHJlY2VpdmVkIGJ5IHJlcG9ydGluZyBiYWNrIHRvIE9uZVNpZ25hbFxuICAgKi9cbiAgcmVhZG9ubHkgY29uZmlybURlbGl2ZXJ5OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElPU05vdGlmaWNhdGlvbkFjdGlvbkJ1dHRvbiB7XG4gIC8qKlxuICAgKiBBbnkgdW5pcXVlIGlkZW50aWZpZXIgdG8gcmVwcmVzZW50IHdoaWNoIGJ1dHRvbiB3YXMgY2xpY2tlZC4gVGhpcyBpcyB0eXBpY2FsbHkgcGFzc2VkIGJhY2sgdG8gdGhlIHNlcnZpY2Ugd29ya2VyXG4gICAqIGFuZCBob3N0IHBhZ2UgdGhyb3VnaCBldmVudHMgdG8gaWRlbnRpZnkgd2hpY2ggYnV0dG9uIHdhcyBjbGlja2VkLlxuICAgKiBlLmcuICdsaWtlLWJ1dHRvbidcbiAgICovXG4gIHJlYWRvbmx5IGFjdGlvbklkOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgbm90aWZpY2F0aW9uIGFjdGlvbiBidXR0b24ncyB0ZXh0LlxuICAgKi9cbiAgcmVhZG9ubHkgdGV4dDogc3RyaW5nO1xuICAvKipcbiAgICogQSB2YWxpZCBwdWJsaWNseSByZWFjaGFibGUgSFRUUFMgVVJMIHRvIGFuIGltYWdlLlxuICAgKi9cbiAgcmVhZG9ubHkgaWNvbj86IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBVUkwgdG8gb3BlbiB0aGUgd2ViIGJyb3dzZXIgdG8gd2hlbiB0aGlzIGFjdGlvbiBidXR0b24gaXMgY2xpY2tlZC5cbiAgICovXG4gIHJlYWRvbmx5IGxhdW5jaFVSTD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOb3RpZmljYXRpb25DbGlja1Jlc3VsdCB7XG4gIHJlYWRvbmx5IGFjdGlvbklkPzogc3RyaW5nO1xuICByZWFkb25seSB1cmw/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCB0eXBlIE5vdGlmaWNhdGlvbkV2ZW50VHlwZU1hcCA9IHtcbiAgJ2NsaWNrJzogTm90aWZpY2F0aW9uQ2xpY2tFdmVudDtcbiAgJ2ZvcmVncm91bmRXaWxsRGlzcGxheSc6IE5vdGlmaWNhdGlvbkZvcmVncm91bmRXaWxsRGlzcGxheUV2ZW50O1xuICAnZGlzbWlzcyc6IE5vdGlmaWNhdGlvbkRpc21pc3NFdmVudDtcbiAgJ3Blcm1pc3Npb25DaGFuZ2UnOiBib29sZWFuO1xuICAncGVybWlzc2lvblByb21wdERpc3BsYXknOiB2b2lkO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBOb3RpZmljYXRpb25Gb3JlZ3JvdW5kV2lsbERpc3BsYXlFdmVudCB7XG4gIHJlYWRvbmx5IG5vdGlmaWNhdGlvbjogSU9TTm90aWZpY2F0aW9uO1xuICBwcmV2ZW50RGVmYXVsdCgpOiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5vdGlmaWNhdGlvbkRpc21pc3NFdmVudCB7XG4gIG5vdGlmaWNhdGlvbjogSU9TTm90aWZpY2F0aW9uO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5vdGlmaWNhdGlvbkNsaWNrRXZlbnQge1xuICByZWFkb25seSBub3RpZmljYXRpb246IElPU05vdGlmaWNhdGlvbjtcbiAgcmVhZG9ubHkgcmVzdWx0OiBOb3RpZmljYXRpb25DbGlja1Jlc3VsdDtcbn1cblxuZXhwb3J0IHR5cGUgVXNlckNoYW5nZUV2ZW50ID0ge1xuICBjdXJyZW50OiBVc2VyTmFtZXNwYWNlUHJvcGVydGllcztcbn07XG5leHBvcnQgdHlwZSBVc2VyTmFtZXNwYWNlUHJvcGVydGllcyA9IHtcbiAgb25lc2lnbmFsSWQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZXh0ZXJuYWxJZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBJSW5pdE9iamVjdCB7XG4gIGFwcElkOiBzdHJpbmc7XG4gIHN1YmRvbWFpbk5hbWU/OiBzdHJpbmc7XG4gIHJlcXVpcmVzVXNlclByaXZhY3lDb25zZW50PzogYm9vbGVhbjtcbiAgcHJvbXB0T3B0aW9ucz86IHtcbiAgICBzbGlkZWRvd246IHtcbiAgICAgIHByb21wdHM6IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdoZXRoZXIgdG8gYXV0b21hdGljYWxseSBkaXNwbGF5IHRoZSBwcm9tcHQuXG4gICAgICAgICAqIGB0cnVlYCB3aWxsIGRpc3BsYXkgdGhlIHByb21wdCBiYXNlZCBvbiB0aGUgZGVsYXkgb3B0aW9ucy5cbiAgICAgICAgICogYGZhbHNlYCB3aWxsIHByZXZlbnQgdGhlIHByb21wdCBmcm9tIGRpc3BsYXlpbmcgdW50aWwgdGhlIFNsaWRlZG93bnMgbWV0aG9kcyBhcmUgdXNlZC5cbiAgICAgICAgICovXG4gICAgICAgIGF1dG9Qcm9tcHQ6IGJvb2xlYW47XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE9ubHkgYXZhaWxhYmxlIGZvciB0eXBlOiBjYXRlZ29yeS4gVXAgdG8gMTAgY2F0ZWdvcmllcy5cbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICogIGNhdGVnb3JpZXM6IFt7IHRhZzogJ2xvY2FsX25ld3MnLCBsYWJlbDogJ0xvY2FsIE5ld3MnIH1dIC8vIFRoZSB1c2VyIHdpbGwgYmUgdGFnZ2VkIHdpdGggbG9jYWxfbmV3cyBidXQgd2lsbCBzZWUgXCJMb2NhbCBOZXdzXCIgaW4gdGhlIHByb21wdC5cbiAgICAgICAgICovXG4gICAgICAgIGNhdGVnb3JpZXM6IHtcbiAgICAgICAgICAvKiogU2hvdWxkIGlkZW50aWZ5IHRoZSBhY3Rpb24uICovXG4gICAgICAgICAgdGFnOiBzdHJpbmc7XG5cbiAgICAgICAgICAvKiogV2hhdCB0aGUgdXNlciB3aWxsIHNlZS4gKi9cbiAgICAgICAgICBsYWJlbDogc3RyaW5nO1xuICAgICAgICB9W107XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBkZWxheSBvcHRpb25zIGZvciB0aGUgcHJvbXB0LlxuICAgICAgICAgKiBAZXhhbXBsZSBkZWxheTogeyBwYWdlVmlld3M6IDMsIHRpbWVEZWxheTogMjAgfSAvLyBUaGUgdXNlciB3aWxsIG5vdCBiZSBzaG93biB0aGUgcHJvbXB0IHVudGlsIDIwIHNlY29uZHMgYWZ0ZXIgdGhlIDNyZCBwYWdlIHZpZXcuXG4gICAgICAgICAqL1xuICAgICAgICBkZWxheToge1xuICAgICAgICAgIC8qKiBUaGUgbnVtYmVyIG9mIHBhZ2VzIGEgdXNlciBuZWVkcyB0byB2aXNpdCBiZWZvcmUgdGhlIHByb21wdCBpcyBkaXNwbGF5ZWQuICovXG4gICAgICAgICAgcGFnZVZpZXdzPzogbnVtYmVyO1xuXG4gICAgICAgICAgLyoqIFRoZSBudW1iZXIgb2Ygc2Vjb25kcyBhIHVzZXIgbmVlZHMgdG8gd2FpdCBiZWZvcmUgdGhlIHByb21wdCBpcyBkaXNwbGF5ZWQuQm90aCBvcHRpb25zIG11c3QgYmUgc2F0aXNmaWVkIGZvciB0aGUgcHJvbXB0IHRvIGRpc3BsYXkgKi9cbiAgICAgICAgICB0aW1lRGVsYXk/OiBudW1iZXI7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB0ZXh0IHRvIGRpc3BsYXkgaW4gdGhlIHByb21wdC5cbiAgICAgICAgICovXG4gICAgICAgIHRleHQ/OiB7XG4gICAgICAgICAgLyoqIFRoZSBjYWxsb3V0IGFza2luZyB0aGUgdXNlciB0byBvcHQtaW4uIFVwIHRvIDkwIGNoYXJhY3RlcnMuICovXG4gICAgICAgICAgYWN0aW9uTWVzc2FnZT86IHN0cmluZztcblxuICAgICAgICAgIC8qKiBUcmlnZ2VycyB0aGUgb3B0LWluLiBVcCB0byAxNSBjaGFyYWN0ZXJzLiAqL1xuICAgICAgICAgIGFjY2VwdEJ1dHRvbj86IHN0cmluZztcblxuICAgICAgICAgIC8qKiBDYW5jZWxzIG9wdC1pbi4gVXAgdG8gMTUgY2hhcmFjdGVycy4gKi9cbiAgICAgICAgICBjYW5jZWxNZXNzYWdlPzogc3RyaW5nO1xuXG4gICAgICAgICAgLyoqIFRoZSBtZXNzYWdlIG9mIHRoZSBjb25maXJtYXRpb24gcHJvbXB0IGRpc3BsYXllZCBhZnRlciB0aGUgZW1haWwgYW5kL29yIHBob25lIG51bWJlciBpcyBwcm92aWRlZC4gVXAgdG8gOTAgY2hhcmFjdGVycy4gKi9cbiAgICAgICAgICBjb25maXJtTWVzc2FnZT86IHN0cmluZztcblxuICAgICAgICAgIC8qKiBJZGVudGlmaWVzIHRoZSBlbWFpbCB0ZXh0IGZpZWxkLiBVcCB0byAxNSBjaGFyYWN0ZXJzLiAqL1xuICAgICAgICAgIGVtYWlsTGFiZWw/OiBzdHJpbmc7XG5cbiAgICAgICAgICAvKiogQ2FuY2VscyB0aGUgY2F0ZWdvcnkgdXBkYXRlLiBVcCB0byAxNSBjaGFyYWN0ZXJzLiAqL1xuICAgICAgICAgIG5lZ2F0aXZlVXBkYXRlQnV0dG9uPzogc3RyaW5nO1xuXG4gICAgICAgICAgLyoqIFNhdmVzIHRoZSB1cGRhdGVkIGNhdGVnb3J5IHRhZ3MuIFVwIHRvIDE1IGNoYXJhY3RlcnMuICovXG4gICAgICAgICAgcG9zaXRpdmVVcGRhdGVCdXR0b24/OiBzdHJpbmc7XG5cbiAgICAgICAgICAvKiogSWRlbnRpZmllcyB0aGUgcGhvbmUgbnVtYmVyIHRleHQgZmllbGQuIFVwIHRvIDE1IGNoYXJhY3RlcnMuICovXG4gICAgICAgICAgc21zTGFiZWw/OiBzdHJpbmc7XG5cbiAgICAgICAgICAvKiogQSBkaWZmZXJlbnQgbWVzc2FnZSBzaG93biB0byBzdWJzY3JpYmVycyBwcmVzZW50ZWQgdGhlIHByb21wdCBhZ2FpbiB0byB1cGRhdGUgY2F0ZWdvcmllcy4gVXAgdG8gOTAgY2hhcmFjdGVycy4gKi9cbiAgICAgICAgICB1cGRhdGVNZXNzYWdlPzogc3RyaW5nO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdHlwZSBvZiBwcm9tcHQgdG8gZGlzcGxheS5cbiAgICAgICAgICogYHB1c2hgIHdoaWNoIGlzIHRoZSBTbGlkZSBQcm9tcHQgd2l0aG91dCBjYXRlZ29yaWVzLlxuICAgICAgICAgKiBgY2F0ZWdvcnlgIHdoaWNoIGlzIHRoZSBTbGlkZSBQcm9tcHQgd2l0aCBjYXRlZ29yaWVzLlxuICAgICAgICAgKiBgc21zYCBvbmx5IGFza3MgZm9yIHBob25lIG51bWJlci5cbiAgICAgICAgICogYGVtYWlsYCBvbmx5IGFza3MgZm9yIGVtYWlsIGFkZHJlc3MuXG4gICAgICAgICAqIGBzbXNBbmRFbWFpbGAgYXNrcyBmb3IgYm90aCBwaG9uZSBudW1iZXIgYW5kIGVtYWlsIGFkZHJlc3MuXG4gICAgICAgICAqL1xuICAgICAgICB0eXBlOiAncHVzaCcgfCAnY2F0ZWdvcnknIHwgJ3NtcycgfCAnZW1haWwnIHwgJ3Ntc0FuZEVtYWlsJztcbiAgICAgIH1bXTtcbiAgICB9O1xuICB9O1xuICB3ZWxjb21lTm90aWZpY2F0aW9uPzoge1xuICAgIC8qKlxuICAgICAqIERpc2FibGVzIHNlbmRpbmcgYSB3ZWxjb21lIG5vdGlmaWNhdGlvbiB0byBuZXcgc2l0ZSB2aXNpdG9ycy4gSWYgeW91IHdhbnQgdG8gZGlzYWJsZSB3ZWxjb21lIG5vdGlmaWNhdGlvbnMsIHRoaXMgaXMgdGhlIG9ubHkgb3B0aW9uIHlvdSBuZWVkLlxuICAgICAqIEBkZXByZWNhdGVkIFVzZSAnZGlzYWJsZScgaW5zdGVhZC4gVGhpcyB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgdmVyc2lvbi5cbiAgICAgKi9cbiAgICBkaXNhYmxlZD86IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBEaXNhYmxlcyBzZW5kaW5nIGEgd2VsY29tZSBub3RpZmljYXRpb24gdG8gbmV3IHNpdGUgdmlzaXRvcnMuIElmIHlvdSB3YW50IHRvIGRpc2FibGUgd2VsY29tZSBub3RpZmljYXRpb25zLCB0aGlzIGlzIHRoZSBvbmx5IG9wdGlvbiB5b3UgbmVlZC5cbiAgICAgKi9cbiAgICBkaXNhYmxlPzogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIFRoZSB3ZWxjb21lIG5vdGlmaWNhdGlvbidzIG1lc3NhZ2UuIFlvdSBjYW4gbG9jYWxpemUgdGhpcyB0byB5b3VyIG93biBsYW5ndWFnZS5cbiAgICAgKiBJZiBsZWZ0IGJsYW5rIG9yIHNldCB0byBibGFuaywgdGhlIGRlZmF1bHQgb2YgJ1RoYW5rcyBmb3Igc3Vic2NyaWJpbmchJyB3aWxsIGJlIHVzZWQuXG4gICAgICovXG4gICAgbWVzc2FnZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHdlbGNvbWUgbm90aWZpY2F0aW9uJ3MgdGl0bGUuIFlvdSBjYW4gbG9jYWxpemUgdGhpcyB0byB5b3VyIG93biBsYW5ndWFnZS4gSWYgbm90IHNldCwgb3IgbGVmdCBibGFuaywgdGhlIHNpdGUncyB0aXRsZSB3aWxsIGJlIHVzZWQuXG4gICAgICogU2V0IHRvIG9uZSBzcGFjZSAnICcgdG8gY2xlYXIgdGhlIHRpdGxlLCBhbHRob3VnaCB0aGlzIGlzIG5vdCByZWNvbW1lbmRlZC5cbiAgICAgKi9cbiAgICB0aXRsZT86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEJ5IGRlZmF1bHQsIGNsaWNraW5nIHRoZSB3ZWxjb21lIG5vdGlmaWNhdGlvbiBkb2VzIG5vdCBvcGVuIGFueSBsaW5rLlxuICAgICAqIFRoaXMgaXMgcmVjb21tZW5kZWQgYmVjYXVzZSB0aGUgdXNlciBoYXMganVzdCB2aXNpdGVkIHlvdXIgc2l0ZSBhbmQgc3Vic2NyaWJlZC5cbiAgICAgKi9cbiAgICB1cmw/OiBzdHJpbmc7XG4gIH07XG5cbiAgLyoqXG4gICAqIFdpbGwgZW5hYmxlIGN1c3RvbWl6YXRpb24gb2YgdGhlIG5vdGlmeS9zdWJzY3JpcHRpb24gYmVsbCBidXR0b24uXG4gICAqL1xuICBub3RpZnlCdXR0b24/OiB7XG4gICAgLyoqXG4gICAgICogQSBmdW5jdGlvbiB5b3UgZGVmaW5lIHRoYXQgcmV0dXJucyB0cnVlIHRvIHNob3cgdGhlIFN1YnNjcmlwdGlvbiBCZWxsLCBvciBmYWxzZSB0byBoaWRlIGl0LlxuICAgICAqIFR5cGljYWxseSB1c2VkIHRoZSBoaWRlIHRoZSBTdWJzY3JpcHRpb24gQmVsbCBhZnRlciB0aGUgdXNlciBpcyBzdWJzY3JpYmVkLlxuICAgICAqIFRoaXMgZnVuY3Rpb24gaXMgbm90IHJlLWV2YWx1YXRlZCBvbiBldmVyeSBzdGF0ZSBjaGFuZ2U7IHRoaXMgZnVuY3Rpb24gaXMgb25seSBldmFsdWF0ZWQgb25jZSB3aGVuIHRoZSBTdWJzY3JpcHRpb24gQmVsbCBiZWdpbnMgdG8gc2hvdy5cbiAgICAgKi9cbiAgICBkaXNwbGF5UHJlZGljYXRlPzogKCkgPT4gYm9vbGVhbiB8IFByb21pc2U8Ym9vbGVhbj47XG5cbiAgICAvKipcbiAgICAgKiBFbmFibGUgdGhlIFN1YnNjcmlwdGlvbiBCZWxsLiBUaGUgU3Vic2NyaXB0aW9uIEJlbGwgaXMgb3RoZXJ3aXNlIGRpc2FibGVkIGJ5IGRlZmF1bHQuXG4gICAgICovXG4gICAgZW5hYmxlPzogYm9vbGVhbjtcblxuICAgIC8qKiBTcGVjaWZ5IENTUy12YWxpZCBwaXhlbCBvZmZzZXRzIHVzaW5nIGJvdHRvbSwgbGVmdCwgYW5kIHJpZ2h0LiAqL1xuICAgIG9mZnNldD86IHsgYm90dG9tOiBzdHJpbmc7IGxlZnQ6IHN0cmluZzsgcmlnaHQ6IHN0cmluZyB9O1xuXG4gICAgLyoqXG4gICAgICogSWYgYHRydWVgLCB0aGUgU3Vic2NyaXB0aW9uIEJlbGwgd2lsbCBkaXNwbGF5IGFuIGljb24gdGhhdCB0aGVyZSBpcyAxIHVucmVhZCBtZXNzYWdlLlxuICAgICAqIFdoZW4gaG92ZXJpbmcgb3ZlciB0aGUgU3Vic2NyaXB0aW9uIEJlbGwsIHRoZSB1c2VyIHdpbGwgc2VlIGN1c3RvbSB0ZXh0IHNldCBieSBtZXNzYWdlLnByZW5vdGlmeS5cbiAgICAgKi9cbiAgICBwcmVub3RpZnk6IGJvb2xlYW47XG5cbiAgICAvKiogRWl0aGVyIGBib3R0b20tbGVmdGAgb3IgYGJvdHRvbS1yaWdodGAuIFRoZSBTdWJzY3JpcHRpb24gQmVsbCB3aWxsIGJlIGZpeGVkIGF0IHRoaXMgbG9jYXRpb24gb24geW91ciBwYWdlLiAqL1xuICAgIHBvc2l0aW9uPzogJ2JvdHRvbS1sZWZ0JyB8ICdib3R0b20tcmlnaHQnO1xuXG4gICAgLyoqICBTZXQgYGZhbHNlYCB0byBoaWRlIHRoZSAnUG93ZXJlZCBieSBPbmVTaWduYWwnIHRleHQgaW4gdGhlIFN1YnNjcmlwdGlvbiBCZWxsIGRpYWxvZyBwb3B1cC4gKi9cbiAgICBzaG93Q3JlZGl0OiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogVGhlIFN1YnNjcmlwdGlvbiBCZWxsIHdpbGwgaW5pdGlhbGx5IGFwcGVhciBhdCBvbmUgb2YgdGhlc2Ugc2l6ZXMsIGFuZCB0aGVuIHNocmluayBkb3duIHRvIHNpemUgYHNtYWxsYCBhZnRlciB0aGUgdXNlciBzdWJzY3JpYmVzLlxuICAgICAqL1xuICAgIHNpemU/OiAnc21hbGwnIHwgJ21lZGl1bScgfCAnbGFyZ2UnO1xuXG4gICAgLyoqIEN1c3RvbWl6ZSB0aGUgU3Vic2NyaXB0aW9uIEJlbGwgdGV4dC4gKi9cbiAgICB0ZXh0OiB7XG4gICAgICAnZGlhbG9nLmJsb2NrZWQubWVzc2FnZSc6IHN0cmluZztcbiAgICAgICdkaWFsb2cuYmxvY2tlZC50aXRsZSc6IHN0cmluZztcbiAgICAgICdkaWFsb2cubWFpbi5idXR0b24uc3Vic2NyaWJlJzogc3RyaW5nO1xuICAgICAgJ2RpYWxvZy5tYWluLmJ1dHRvbi51bnN1YnNjcmliZSc6IHN0cmluZztcbiAgICAgICdkaWFsb2cubWFpbi50aXRsZSc6IHN0cmluZztcbiAgICAgICdtZXNzYWdlLmFjdGlvbi5yZXN1YnNjcmliZWQnOiBzdHJpbmc7XG4gICAgICAnbWVzc2FnZS5hY3Rpb24uc3Vic2NyaWJlZCc6IHN0cmluZztcbiAgICAgICdtZXNzYWdlLmFjdGlvbi5zdWJzY3JpYmluZyc6IHN0cmluZztcbiAgICAgICdtZXNzYWdlLmFjdGlvbi51bnN1YnNjcmliZWQnOiBzdHJpbmc7XG4gICAgICAnbWVzc2FnZS5wcmVub3RpZnknOiBzdHJpbmc7XG4gICAgICAndGlwLnN0YXRlLmJsb2NrZWQnOiBzdHJpbmc7XG4gICAgICAndGlwLnN0YXRlLnN1YnNjcmliZWQnOiBzdHJpbmc7XG4gICAgICAndGlwLnN0YXRlLnVuc3Vic2NyaWJlZCc6IHN0cmluZztcbiAgICB9O1xuICB9O1xuXG4gIHBlcnNpc3ROb3RpZmljYXRpb24/OiBib29sZWFuO1xuICB3ZWJob29rcz86IHtcbiAgICAvKipcbiAgICAgKiBFbmFibGUgdGhpcyBzZXR0aW5nIG9ubHkgaWYgeW91ciBzZXJ2ZXIgaGFzIENPUlMgZW5hYmxlZCBhbmQgc3VwcG9ydHMgbm9uLXNpbXBsZSBDT1JTIHJlcXVlc3RzLlxuICAgICAqIElmIHRoaXMgc2V0dGluZyBpcyBkaXNhYmxlZCwgeW91ciB3ZWJob29rIHdpbGwgbm90IG5lZWQgQ09SUyB0byByZWNlaXZlIGRhdGEsIGJ1dCBpdCB3aWxsIG5vdCByZWNlaXZlIHRoZSBjdXN0b20gaGVhZGVycy5cbiAgICAgKiBUaGUgc2ltcGxlc3Qgb3B0aW9uIGlzIHRvIGxlYXZlIGl0IGRpc2FibGVkLlxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG4gICAgY29yczogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIFRoaXMgZXZlbnQgb2NjdXJzIGFmdGVyIGEgbm90aWZpY2F0aW9uIGlzIGNsaWNrZWQuXG4gICAgICogQGV4YW1wbGUgaHR0cHM6Ly9zaXRlLmNvbS9ob29rXG4gICAgICovXG4gICAgJ25vdGlmaWNhdGlvbi5jbGlja2VkJz86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIFRoaXMgZXZlbnQgb2NjdXJzIGFmdGVyIGEgbm90aWZpY2F0aW9uIGlzIGludGVudGlvbmFsbHkgZGlzbWlzc2VkIGJ5IHRoZSB1c2VyIChjbGlja2luZyB0aGUgbm90aWZpY2F0aW9uIGJvZHkgb3Igb25lIG9mIHRoZSBub3RpZmljYXRpb24gYWN0aW9uIGJ1dHRvbnMgZG9lcyBub3QgdHJpZ2dlciB0aGUgZGlzbWlzc2VkIHdlYmhvb2spLFxuICAgICAqIGFmdGVyIGEgZ3JvdXAgb2Ygbm90aWZpY2F0aW9ucyBhcmUgYWxsIGRpc21pc3NlZCAod2l0aCB0aGlzIG5vdGlmaWNhdGlvbiBhcyBwYXJ0IG9mIHRoYXQgZ3JvdXApLCBvciBhZnRlciBhIG5vdGlmaWNhdGlvbiBleHBpcmVzIG9uIGl0cyBvd24gdGltZSBhbmQgZGlzYXBwZWFycy4gVGhpcyBldmVudCBpcyBzdXBwb3J0ZWQgb24gQ2hyb21lIG9ubHkuXG4gICAgICogQGV4YW1wbGUgaHR0cHM6Ly9zaXRlLmNvbS9ob29rXG4gICAgICovXG4gICAgJ25vdGlmaWNhdGlvbi5kaXNtaXNzZWQnPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogVGhpcyBldmVudCBvY2N1cnMgYWZ0ZXIgYSBub3RpZmljYXRpb24gaXMgZGlzcGxheWVkLlxuICAgICAqIEBleGFtcGxlIGh0dHBzOi8vc2l0ZS5jb20vaG9va1xuICAgICAqL1xuICAgICdub3RpZmljYXRpb24ud2lsbERpc3BsYXknPzogc3RyaW5nO1xuICB9O1xuICBhdXRvUmVzdWJzY3JpYmU/OiBib29sZWFuO1xuICBhdXRvUmVnaXN0ZXI/OiBib29sZWFuO1xuICBub3RpZmljYXRpb25DbGlja0hhbmRsZXJNYXRjaD86IHN0cmluZztcbiAgbm90aWZpY2F0aW9uQ2xpY2tIYW5kbGVyQWN0aW9uPzogc3RyaW5nO1xuICBwYXRoPzogc3RyaW5nO1xuICBzZXJ2aWNlV29ya2VyUGFyYW0/OiB7IHNjb3BlOiBzdHJpbmcgfTtcbiAgc2VydmljZVdvcmtlclBhdGg/OiBzdHJpbmc7XG4gIHNlcnZpY2VXb3JrZXJPdmVycmlkZUZvclR5cGljYWw/OiBib29sZWFuO1xuICBzZXJ2aWNlV29ya2VyVXBkYXRlclBhdGg/OiBzdHJpbmc7XG4gIGFsbG93TG9jYWxob3N0QXNTZWN1cmVPcmlnaW4/OiBib29sZWFuO1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU9uZVNpZ25hbE9uZVNpZ25hbCB7XG5cdFNsaWRlZG93bjogSU9uZVNpZ25hbFNsaWRlZG93bjtcblx0Tm90aWZpY2F0aW9uczogSU9uZVNpZ25hbE5vdGlmaWNhdGlvbnM7XG5cdFNlc3Npb246IElPbmVTaWduYWxTZXNzaW9uO1xuXHRVc2VyOiBJT25lU2lnbmFsVXNlcjtcblx0RGVidWc6IElPbmVTaWduYWxEZWJ1Zztcblx0bG9naW4oZXh0ZXJuYWxJZDogc3RyaW5nLCBqd3RUb2tlbj86IHN0cmluZyk6IFByb21pc2U8dm9pZD47XG5cdGxvZ291dCgpOiBQcm9taXNlPHZvaWQ+O1xuXHRpbml0KG9wdGlvbnM6IElJbml0T2JqZWN0KTogUHJvbWlzZTx2b2lkPjtcblx0c2V0Q29uc2VudEdpdmVuKGNvbnNlbnQ6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+O1xuXHRzZXRDb25zZW50UmVxdWlyZWQocmVxdWlyZXNDb25zZW50OiBib29sZWFuKTogUHJvbWlzZTx2b2lkPjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSU9uZVNpZ25hbE5vdGlmaWNhdGlvbnMge1xuXHRwZXJtaXNzaW9uTmF0aXZlOiBOb3RpZmljYXRpb25QZXJtaXNzaW9uO1xuXHRwZXJtaXNzaW9uOiBib29sZWFuO1xuXHRzZXREZWZhdWx0VXJsKHVybDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPjtcblx0c2V0RGVmYXVsdFRpdGxlKHRpdGxlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+O1xuXHRpc1B1c2hTdXBwb3J0ZWQoKTogYm9vbGVhbjtcblx0cmVxdWVzdFBlcm1pc3Npb24oKTogUHJvbWlzZTx2b2lkPjtcblx0YWRkRXZlbnRMaXN0ZW5lcjxLIGV4dGVuZHMgTm90aWZpY2F0aW9uRXZlbnROYW1lPihldmVudDogSywgbGlzdGVuZXI6IChvYmo6IE5vdGlmaWNhdGlvbkV2ZW50VHlwZU1hcFtLXSkgPT4gdm9pZCk6IHZvaWQ7XG5cdHJlbW92ZUV2ZW50TGlzdGVuZXI8SyBleHRlbmRzIE5vdGlmaWNhdGlvbkV2ZW50TmFtZT4oZXZlbnQ6IEssIGxpc3RlbmVyOiAob2JqOiBOb3RpZmljYXRpb25FdmVudFR5cGVNYXBbS10pID0+IHZvaWQpOiB2b2lkO1xufVxuZXhwb3J0IGludGVyZmFjZSBJT25lU2lnbmFsU2xpZGVkb3duIHtcblx0cHJvbXB0UHVzaChvcHRpb25zPzogQXV0b1Byb21wdE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+O1xuXHRwcm9tcHRQdXNoQ2F0ZWdvcmllcyhvcHRpb25zPzogQXV0b1Byb21wdE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+O1xuXHRwcm9tcHRTbXMob3B0aW9ucz86IEF1dG9Qcm9tcHRPcHRpb25zKTogUHJvbWlzZTx2b2lkPjtcblx0cHJvbXB0RW1haWwob3B0aW9ucz86IEF1dG9Qcm9tcHRPcHRpb25zKTogUHJvbWlzZTx2b2lkPjtcblx0cHJvbXB0U21zQW5kRW1haWwob3B0aW9ucz86IEF1dG9Qcm9tcHRPcHRpb25zKTogUHJvbWlzZTx2b2lkPjtcblx0YWRkRXZlbnRMaXN0ZW5lcihldmVudDogU2xpZGVkb3duRXZlbnROYW1lLCBsaXN0ZW5lcjogKHdhc1Nob3duOiBib29sZWFuKSA9PiB2b2lkKTogdm9pZDtcblx0cmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudDogU2xpZGVkb3duRXZlbnROYW1lLCBsaXN0ZW5lcjogKHdhc1Nob3duOiBib29sZWFuKSA9PiB2b2lkKTogdm9pZDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSU9uZVNpZ25hbERlYnVnIHtcblx0c2V0TG9nTGV2ZWwobG9nTGV2ZWw6ICd0cmFjZScgfCAnZGVidWcnIHwgJ2luZm8nIHwgJ3dhcm4nIHwgJ2Vycm9yJyk6IHZvaWQ7XG59XG5leHBvcnQgaW50ZXJmYWNlIElPbmVTaWduYWxTZXNzaW9uIHtcblx0c2VuZE91dGNvbWUob3V0Y29tZU5hbWU6IHN0cmluZywgb3V0Y29tZVdlaWdodD86IG51bWJlcik6IFByb21pc2U8dm9pZD47XG5cdHNlbmRVbmlxdWVPdXRjb21lKG91dGNvbWVOYW1lOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+O1xufVxuZXhwb3J0IGludGVyZmFjZSBJT25lU2lnbmFsVXNlciB7XG5cdG9uZXNpZ25hbElkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdGV4dGVybmFsSWQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0UHVzaFN1YnNjcmlwdGlvbjogSU9uZVNpZ25hbFB1c2hTdWJzY3JpcHRpb247XG5cdGFkZEFsaWFzKGxhYmVsOiBzdHJpbmcsIGlkOiBzdHJpbmcpOiB2b2lkO1xuXHRhZGRBbGlhc2VzKGFsaWFzZXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pOiB2b2lkO1xuXHRyZW1vdmVBbGlhcyhsYWJlbDogc3RyaW5nKTogdm9pZDtcblx0cmVtb3ZlQWxpYXNlcyhsYWJlbHM6IHN0cmluZ1tdKTogdm9pZDtcblx0YWRkRW1haWwoZW1haWw6IHN0cmluZyk6IHZvaWQ7XG5cdHJlbW92ZUVtYWlsKGVtYWlsOiBzdHJpbmcpOiB2b2lkO1xuXHRhZGRTbXMoc21zTnVtYmVyOiBzdHJpbmcpOiB2b2lkO1xuXHRyZW1vdmVTbXMoc21zTnVtYmVyOiBzdHJpbmcpOiB2b2lkO1xuXHRhZGRUYWcoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkO1xuXHRhZGRUYWdzKHRhZ3M6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pOiB2b2lkO1xuXHRyZW1vdmVUYWcoa2V5OiBzdHJpbmcpOiB2b2lkO1xuXHRyZW1vdmVUYWdzKGtleXM6IHN0cmluZ1tdKTogdm9pZDtcblx0Z2V0VGFncygpOiBQcm9taXNlPHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0+O1xuXHRhZGRFdmVudExpc3RlbmVyKGV2ZW50OiAnY2hhbmdlJywgbGlzdGVuZXI6IChjaGFuZ2U6IFVzZXJDaGFuZ2VFdmVudCkgPT4gdm9pZCk6IHZvaWQ7XG5cdHJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQ6ICdjaGFuZ2UnLCBsaXN0ZW5lcjogKGNoYW5nZTogVXNlckNoYW5nZUV2ZW50KSA9PiB2b2lkKTogdm9pZDtcblx0c2V0TGFuZ3VhZ2UobGFuZ3VhZ2U6IHN0cmluZyk6IHZvaWQ7XG5cdGdldExhbmd1YWdlKCk6IFByb21pc2U8c3RyaW5nPjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSU9uZVNpZ25hbFB1c2hTdWJzY3JpcHRpb24ge1xuXHRpZDogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZDtcblx0dG9rZW46IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQ7XG5cdG9wdGVkSW46IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cdG9wdEluKCk6IFByb21pc2U8dm9pZD47XG5cdG9wdE91dCgpOiBQcm9taXNlPHZvaWQ+O1xuXHRhZGRFdmVudExpc3RlbmVyKGV2ZW50OiAnY2hhbmdlJywgbGlzdGVuZXI6IChjaGFuZ2U6IFN1YnNjcmlwdGlvbkNoYW5nZUV2ZW50KSA9PiB2b2lkKTogdm9pZDtcblx0cmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudDogJ2NoYW5nZScsIGxpc3RlbmVyOiAoY2hhbmdlOiBTdWJzY3JpcHRpb25DaGFuZ2VFdmVudCkgPT4gdm9pZCk6IHZvaWQ7XG59XG5mdW5jdGlvbiBvbmVTaWduYWxMb2dpbihleHRlcm5hbElkOiBzdHJpbmcsIGp3dFRva2VuPzogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gIFxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCkge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcignT25lU2lnbmFsIHNjcmlwdCBmYWlsZWQgdG8gbG9hZC4nKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC5sb2dpbihleHRlcm5hbElkLCBqd3RUb2tlbikudGhlbigoKSA9PiByZXNvbHZlKCkpO1xuICAgIH0pO1xuICB9KTtcbn1cbmZ1bmN0aW9uIG9uZVNpZ25hbExvZ291dCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgaWYgKGlzT25lU2lnbmFsU2NyaXB0RmFpbGVkKSB7XG4gICAgICByZWplY3QobmV3IEVycm9yKCdPbmVTaWduYWwgc2NyaXB0IGZhaWxlZCB0byBsb2FkLicpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgICAgb25lU2lnbmFsLmxvZ291dCgpLnRoZW4oKCkgPT4gcmVzb2x2ZSgpKTtcbiAgICB9KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBvbmVTaWduYWxTZXRDb25zZW50R2l2ZW4oY29uc2VudDogYm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xuICBcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQpIHtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoJ09uZVNpZ25hbCBzY3JpcHQgZmFpbGVkIHRvIGxvYWQuJykpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgICBvbmVTaWduYWwuc2V0Q29uc2VudEdpdmVuKGNvbnNlbnQpLnRoZW4oKCkgPT4gcmVzb2x2ZSgpKTtcbiAgICB9KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBvbmVTaWduYWxTZXRDb25zZW50UmVxdWlyZWQocmVxdWlyZXNDb25zZW50OiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XG4gIFxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCkge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcignT25lU2lnbmFsIHNjcmlwdCBmYWlsZWQgdG8gbG9hZC4nKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC5zZXRDb25zZW50UmVxdWlyZWQocmVxdWlyZXNDb25zZW50KS50aGVuKCgpID0+IHJlc29sdmUoKSk7XG4gICAgfSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gc2xpZGVkb3duUHJvbXB0UHVzaChvcHRpb25zPzogQXV0b1Byb21wdE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgaWYgKGlzT25lU2lnbmFsU2NyaXB0RmFpbGVkKSB7XG4gICAgICByZWplY3QobmV3IEVycm9yKCdPbmVTaWduYWwgc2NyaXB0IGZhaWxlZCB0byBsb2FkLicpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgICAgb25lU2lnbmFsLlNsaWRlZG93bi5wcm9tcHRQdXNoKG9wdGlvbnMpLnRoZW4oKCkgPT4gcmVzb2x2ZSgpKTtcbiAgICB9KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBzbGlkZWRvd25Qcm9tcHRQdXNoQ2F0ZWdvcmllcyhvcHRpb25zPzogQXV0b1Byb21wdE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgaWYgKGlzT25lU2lnbmFsU2NyaXB0RmFpbGVkKSB7XG4gICAgICByZWplY3QobmV3IEVycm9yKCdPbmVTaWduYWwgc2NyaXB0IGZhaWxlZCB0byBsb2FkLicpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgICAgb25lU2lnbmFsLlNsaWRlZG93bi5wcm9tcHRQdXNoQ2F0ZWdvcmllcyhvcHRpb25zKS50aGVuKCgpID0+IHJlc29sdmUoKSk7XG4gICAgfSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gc2xpZGVkb3duUHJvbXB0U21zKG9wdGlvbnM/OiBBdXRvUHJvbXB0T3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xuICBcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQpIHtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoJ09uZVNpZ25hbCBzY3JpcHQgZmFpbGVkIHRvIGxvYWQuJykpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgICBvbmVTaWduYWwuU2xpZGVkb3duLnByb21wdFNtcyhvcHRpb25zKS50aGVuKCgpID0+IHJlc29sdmUoKSk7XG4gICAgfSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gc2xpZGVkb3duUHJvbXB0RW1haWwob3B0aW9ucz86IEF1dG9Qcm9tcHRPcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XG4gIFxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCkge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcignT25lU2lnbmFsIHNjcmlwdCBmYWlsZWQgdG8gbG9hZC4nKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC5TbGlkZWRvd24ucHJvbXB0RW1haWwob3B0aW9ucykudGhlbigoKSA9PiByZXNvbHZlKCkpO1xuICAgIH0pO1xuICB9KTtcbn1cbmZ1bmN0aW9uIHNsaWRlZG93blByb21wdFNtc0FuZEVtYWlsKG9wdGlvbnM/OiBBdXRvUHJvbXB0T3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xuICBcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQpIHtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoJ09uZVNpZ25hbCBzY3JpcHQgZmFpbGVkIHRvIGxvYWQuJykpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgICBvbmVTaWduYWwuU2xpZGVkb3duLnByb21wdFNtc0FuZEVtYWlsKG9wdGlvbnMpLnRoZW4oKCkgPT4gcmVzb2x2ZSgpKTtcbiAgICB9KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBzbGlkZWRvd25BZGRFdmVudExpc3RlbmVyKGV2ZW50OiBTbGlkZWRvd25FdmVudE5hbWUsIGxpc3RlbmVyOiAod2FzU2hvd246IGJvb2xlYW4pID0+IHZvaWQpOiB2b2lkIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuU2xpZGVkb3duLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNsaWRlZG93blJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQ6IFNsaWRlZG93bkV2ZW50TmFtZSwgbGlzdGVuZXI6ICh3YXNTaG93bjogYm9vbGVhbikgPT4gdm9pZCk6IHZvaWQge1xuICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgIG9uZVNpZ25hbC5TbGlkZWRvd24ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbm90aWZpY2F0aW9uc1NldERlZmF1bHRVcmwodXJsOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgaWYgKGlzT25lU2lnbmFsU2NyaXB0RmFpbGVkKSB7XG4gICAgICByZWplY3QobmV3IEVycm9yKCdPbmVTaWduYWwgc2NyaXB0IGZhaWxlZCB0byBsb2FkLicpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgICAgb25lU2lnbmFsLk5vdGlmaWNhdGlvbnMuc2V0RGVmYXVsdFVybCh1cmwpLnRoZW4oKCkgPT4gcmVzb2x2ZSgpKTtcbiAgICB9KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBub3RpZmljYXRpb25zU2V0RGVmYXVsdFRpdGxlKHRpdGxlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgaWYgKGlzT25lU2lnbmFsU2NyaXB0RmFpbGVkKSB7XG4gICAgICByZWplY3QobmV3IEVycm9yKCdPbmVTaWduYWwgc2NyaXB0IGZhaWxlZCB0byBsb2FkLicpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgICAgb25lU2lnbmFsLk5vdGlmaWNhdGlvbnMuc2V0RGVmYXVsdFRpdGxlKHRpdGxlKS50aGVuKCgpID0+IHJlc29sdmUoKSk7XG4gICAgfSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gbm90aWZpY2F0aW9uc1JlcXVlc3RQZXJtaXNzaW9uKCk6IFByb21pc2U8dm9pZD4ge1xuICBcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQpIHtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoJ09uZVNpZ25hbCBzY3JpcHQgZmFpbGVkIHRvIGxvYWQuJykpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgICBvbmVTaWduYWwuTm90aWZpY2F0aW9ucy5yZXF1ZXN0UGVybWlzc2lvbigpLnRoZW4oKCkgPT4gcmVzb2x2ZSgpKTtcbiAgICB9KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBub3RpZmljYXRpb25zQWRkRXZlbnRMaXN0ZW5lcjxLIGV4dGVuZHMgTm90aWZpY2F0aW9uRXZlbnROYW1lPihldmVudDogSywgbGlzdGVuZXI6IChvYmo6IE5vdGlmaWNhdGlvbkV2ZW50VHlwZU1hcFtLXSkgPT4gdm9pZCk6IHZvaWQge1xuICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgIG9uZVNpZ25hbC5Ob3RpZmljYXRpb25zLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG5vdGlmaWNhdGlvbnNSZW1vdmVFdmVudExpc3RlbmVyPEsgZXh0ZW5kcyBOb3RpZmljYXRpb25FdmVudE5hbWU+KGV2ZW50OiBLLCBsaXN0ZW5lcjogKG9iajogTm90aWZpY2F0aW9uRXZlbnRUeXBlTWFwW0tdKSA9PiB2b2lkKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLk5vdGlmaWNhdGlvbnMucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc2Vzc2lvblNlbmRPdXRjb21lKG91dGNvbWVOYW1lOiBzdHJpbmcsIG91dGNvbWVXZWlnaHQ/OiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgaWYgKGlzT25lU2lnbmFsU2NyaXB0RmFpbGVkKSB7XG4gICAgICByZWplY3QobmV3IEVycm9yKCdPbmVTaWduYWwgc2NyaXB0IGZhaWxlZCB0byBsb2FkLicpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgICAgb25lU2lnbmFsLlNlc3Npb24uc2VuZE91dGNvbWUob3V0Y29tZU5hbWUsIG91dGNvbWVXZWlnaHQpLnRoZW4oKCkgPT4gcmVzb2x2ZSgpKTtcbiAgICB9KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBzZXNzaW9uU2VuZFVuaXF1ZU91dGNvbWUob3V0Y29tZU5hbWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICBcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQpIHtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoJ09uZVNpZ25hbCBzY3JpcHQgZmFpbGVkIHRvIGxvYWQuJykpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgICBvbmVTaWduYWwuU2Vzc2lvbi5zZW5kVW5pcXVlT3V0Y29tZShvdXRjb21lTmFtZSkudGhlbigoKSA9PiByZXNvbHZlKCkpO1xuICAgIH0pO1xuICB9KTtcbn1cbmZ1bmN0aW9uIHVzZXJBZGRBbGlhcyhsYWJlbDogc3RyaW5nLCBpZDogc3RyaW5nKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlVzZXIuYWRkQWxpYXMobGFiZWwsIGlkKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVzZXJBZGRBbGlhc2VzKGFsaWFzZXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pOiB2b2lkIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuVXNlci5hZGRBbGlhc2VzKGFsaWFzZXMpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdXNlclJlbW92ZUFsaWFzKGxhYmVsOiBzdHJpbmcpOiB2b2lkIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuVXNlci5yZW1vdmVBbGlhcyhsYWJlbCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1c2VyUmVtb3ZlQWxpYXNlcyhsYWJlbHM6IHN0cmluZ1tdKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlVzZXIucmVtb3ZlQWxpYXNlcyhsYWJlbHMpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdXNlckFkZEVtYWlsKGVtYWlsOiBzdHJpbmcpOiB2b2lkIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuVXNlci5hZGRFbWFpbChlbWFpbCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1c2VyUmVtb3ZlRW1haWwoZW1haWw6IHN0cmluZyk6IHZvaWQge1xuICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgIG9uZVNpZ25hbC5Vc2VyLnJlbW92ZUVtYWlsKGVtYWlsKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVzZXJBZGRTbXMoc21zTnVtYmVyOiBzdHJpbmcpOiB2b2lkIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuVXNlci5hZGRTbXMoc21zTnVtYmVyKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVzZXJSZW1vdmVTbXMoc21zTnVtYmVyOiBzdHJpbmcpOiB2b2lkIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuVXNlci5yZW1vdmVTbXMoc21zTnVtYmVyKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVzZXJBZGRUYWcoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuVXNlci5hZGRUYWcoa2V5LCB2YWx1ZSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1c2VyQWRkVGFncyh0YWdzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlVzZXIuYWRkVGFncyh0YWdzKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVzZXJSZW1vdmVUYWcoa2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuVXNlci5yZW1vdmVUYWcoa2V5KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVzZXJSZW1vdmVUYWdzKGtleXM6IHN0cmluZ1tdKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlVzZXIucmVtb3ZlVGFncyhrZXlzKTtcbiAgfSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHVzZXJHZXRUYWdzKCk6IFByb21pc2U8eyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfT4ge1xuICBsZXQgcmV0VmFsOiBQcm9taXNlPHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0+O1xuICBhd2FpdCB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgIHJldFZhbCA9IG9uZVNpZ25hbC5Vc2VyLmdldFRhZ3MoKTtcbiAgfSk7XG4gIC8vIEB0cy1pZ25vcmVcbiAgcmV0dXJuIHJldFZhbDtcbn1cblxuZnVuY3Rpb24gdXNlckFkZEV2ZW50TGlzdGVuZXIoZXZlbnQ6ICdjaGFuZ2UnLCBsaXN0ZW5lcjogKGNoYW5nZTogVXNlckNoYW5nZUV2ZW50KSA9PiB2b2lkKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlVzZXIuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdXNlclJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQ6ICdjaGFuZ2UnLCBsaXN0ZW5lcjogKGNoYW5nZTogVXNlckNoYW5nZUV2ZW50KSA9PiB2b2lkKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlVzZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdXNlclNldExhbmd1YWdlKGxhbmd1YWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuVXNlci5zZXRMYW5ndWFnZShsYW5ndWFnZSk7XG4gIH0pO1xufVxuXG5hc3luYyBmdW5jdGlvbiB1c2VyR2V0TGFuZ3VhZ2UoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgbGV0IHJldFZhbDogUHJvbWlzZTxzdHJpbmc+O1xuICBhd2FpdCB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgIHJldFZhbCA9IG9uZVNpZ25hbC5Vc2VyLmdldExhbmd1YWdlKCk7XG4gIH0pO1xuICAvLyBAdHMtaWdub3JlXG4gIHJldHVybiByZXRWYWw7XG59XG5cbmZ1bmN0aW9uIHB1c2hTdWJzY3JpcHRpb25PcHRJbigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgaWYgKGlzT25lU2lnbmFsU2NyaXB0RmFpbGVkKSB7XG4gICAgICByZWplY3QobmV3IEVycm9yKCdPbmVTaWduYWwgc2NyaXB0IGZhaWxlZCB0byBsb2FkLicpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgICAgb25lU2lnbmFsLlVzZXIuUHVzaFN1YnNjcmlwdGlvbi5vcHRJbigpLnRoZW4oKCkgPT4gcmVzb2x2ZSgpKTtcbiAgICB9KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBwdXNoU3Vic2NyaXB0aW9uT3B0T3V0KCk6IFByb21pc2U8dm9pZD4ge1xuICBcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQpIHtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoJ09uZVNpZ25hbCBzY3JpcHQgZmFpbGVkIHRvIGxvYWQuJykpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgICBvbmVTaWduYWwuVXNlci5QdXNoU3Vic2NyaXB0aW9uLm9wdE91dCgpLnRoZW4oKCkgPT4gcmVzb2x2ZSgpKTtcbiAgICB9KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBwdXNoU3Vic2NyaXB0aW9uQWRkRXZlbnRMaXN0ZW5lcihldmVudDogJ2NoYW5nZScsIGxpc3RlbmVyOiAoY2hhbmdlOiBTdWJzY3JpcHRpb25DaGFuZ2VFdmVudCkgPT4gdm9pZCk6IHZvaWQge1xuICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgIG9uZVNpZ25hbC5Vc2VyLlB1c2hTdWJzY3JpcHRpb24uYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcHVzaFN1YnNjcmlwdGlvblJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQ6ICdjaGFuZ2UnLCBsaXN0ZW5lcjogKGNoYW5nZTogU3Vic2NyaXB0aW9uQ2hhbmdlRXZlbnQpID0+IHZvaWQpOiB2b2lkIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuVXNlci5QdXNoU3Vic2NyaXB0aW9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRlYnVnU2V0TG9nTGV2ZWwobG9nTGV2ZWw6ICd0cmFjZScgfCAnZGVidWcnIHwgJ2luZm8nIHwgJ3dhcm4nIHwgJ2Vycm9yJyk6IHZvaWQge1xuICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgIG9uZVNpZ25hbC5EZWJ1Zy5zZXRMb2dMZXZlbChsb2dMZXZlbCk7XG4gIH0pO1xufVxuXG5cbmNvbnN0IFB1c2hTdWJzY3JpcHRpb25OYW1lc3BhY2U6IElPbmVTaWduYWxQdXNoU3Vic2NyaXB0aW9uID0ge1xuXHRnZXQgaWQoKTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCB7IHJldHVybiB3aW5kb3cuT25lU2lnbmFsPy5Vc2VyPy5QdXNoU3Vic2NyaXB0aW9uPy5pZDsgfSxcblx0Z2V0IHRva2VuKCk6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQgeyByZXR1cm4gd2luZG93Lk9uZVNpZ25hbD8uVXNlcj8uUHVzaFN1YnNjcmlwdGlvbj8udG9rZW47IH0sXG5cdGdldCBvcHRlZEluKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQgeyByZXR1cm4gd2luZG93Lk9uZVNpZ25hbD8uVXNlcj8uUHVzaFN1YnNjcmlwdGlvbj8ub3B0ZWRJbjsgfSxcblx0b3B0SW46IHB1c2hTdWJzY3JpcHRpb25PcHRJbixcblx0b3B0T3V0OiBwdXNoU3Vic2NyaXB0aW9uT3B0T3V0LFxuXHRhZGRFdmVudExpc3RlbmVyOiBwdXNoU3Vic2NyaXB0aW9uQWRkRXZlbnRMaXN0ZW5lcixcblx0cmVtb3ZlRXZlbnRMaXN0ZW5lcjogcHVzaFN1YnNjcmlwdGlvblJlbW92ZUV2ZW50TGlzdGVuZXIsXG59O1xuXG5jb25zdCBVc2VyTmFtZXNwYWNlOiBJT25lU2lnbmFsVXNlciA9IHtcblx0Z2V0IG9uZXNpZ25hbElkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7IHJldHVybiB3aW5kb3cuT25lU2lnbmFsPy5Vc2VyPy5vbmVzaWduYWxJZDsgfSxcblx0Z2V0IGV4dGVybmFsSWQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHdpbmRvdy5PbmVTaWduYWw/LlVzZXI/LmV4dGVybmFsSWQ7IH0sXG5cdGFkZEFsaWFzOiB1c2VyQWRkQWxpYXMsXG5cdGFkZEFsaWFzZXM6IHVzZXJBZGRBbGlhc2VzLFxuXHRyZW1vdmVBbGlhczogdXNlclJlbW92ZUFsaWFzLFxuXHRyZW1vdmVBbGlhc2VzOiB1c2VyUmVtb3ZlQWxpYXNlcyxcblx0YWRkRW1haWw6IHVzZXJBZGRFbWFpbCxcblx0cmVtb3ZlRW1haWw6IHVzZXJSZW1vdmVFbWFpbCxcblx0YWRkU21zOiB1c2VyQWRkU21zLFxuXHRyZW1vdmVTbXM6IHVzZXJSZW1vdmVTbXMsXG5cdGFkZFRhZzogdXNlckFkZFRhZyxcblx0YWRkVGFnczogdXNlckFkZFRhZ3MsXG5cdHJlbW92ZVRhZzogdXNlclJlbW92ZVRhZyxcblx0cmVtb3ZlVGFnczogdXNlclJlbW92ZVRhZ3MsXG5cdGdldFRhZ3M6IHVzZXJHZXRUYWdzLFxuXHRhZGRFdmVudExpc3RlbmVyOiB1c2VyQWRkRXZlbnRMaXN0ZW5lcixcblx0cmVtb3ZlRXZlbnRMaXN0ZW5lcjogdXNlclJlbW92ZUV2ZW50TGlzdGVuZXIsXG5cdHNldExhbmd1YWdlOiB1c2VyU2V0TGFuZ3VhZ2UsXG5cdGdldExhbmd1YWdlOiB1c2VyR2V0TGFuZ3VhZ2UsXG5cdFB1c2hTdWJzY3JpcHRpb246IFB1c2hTdWJzY3JpcHRpb25OYW1lc3BhY2UsXG59O1xuXG5jb25zdCBTZXNzaW9uTmFtZXNwYWNlOiBJT25lU2lnbmFsU2Vzc2lvbiA9IHtcblx0c2VuZE91dGNvbWU6IHNlc3Npb25TZW5kT3V0Y29tZSxcblx0c2VuZFVuaXF1ZU91dGNvbWU6IHNlc3Npb25TZW5kVW5pcXVlT3V0Y29tZSxcbn07XG5cbmNvbnN0IERlYnVnTmFtZXNwYWNlOiBJT25lU2lnbmFsRGVidWcgPSB7XG5cdHNldExvZ0xldmVsOiBkZWJ1Z1NldExvZ0xldmVsLFxufTtcblxuY29uc3QgU2xpZGVkb3duTmFtZXNwYWNlOiBJT25lU2lnbmFsU2xpZGVkb3duID0ge1xuXHRwcm9tcHRQdXNoOiBzbGlkZWRvd25Qcm9tcHRQdXNoLFxuXHRwcm9tcHRQdXNoQ2F0ZWdvcmllczogc2xpZGVkb3duUHJvbXB0UHVzaENhdGVnb3JpZXMsXG5cdHByb21wdFNtczogc2xpZGVkb3duUHJvbXB0U21zLFxuXHRwcm9tcHRFbWFpbDogc2xpZGVkb3duUHJvbXB0RW1haWwsXG5cdHByb21wdFNtc0FuZEVtYWlsOiBzbGlkZWRvd25Qcm9tcHRTbXNBbmRFbWFpbCxcblx0YWRkRXZlbnRMaXN0ZW5lcjogc2xpZGVkb3duQWRkRXZlbnRMaXN0ZW5lcixcblx0cmVtb3ZlRXZlbnRMaXN0ZW5lcjogc2xpZGVkb3duUmVtb3ZlRXZlbnRMaXN0ZW5lcixcbn07XG5cbmNvbnN0IE5vdGlmaWNhdGlvbnNOYW1lc3BhY2U6IElPbmVTaWduYWxOb3RpZmljYXRpb25zID0ge1xuXHRnZXQgcGVybWlzc2lvbk5hdGl2ZSgpOiBOb3RpZmljYXRpb25QZXJtaXNzaW9uIHsgcmV0dXJuIHdpbmRvdy5PbmVTaWduYWw/Lk5vdGlmaWNhdGlvbnM/LnBlcm1pc3Npb25OYXRpdmUgPz8gJ2RlZmF1bHQnOyB9LFxuXHRnZXQgcGVybWlzc2lvbigpOiBib29sZWFuIHsgcmV0dXJuIHdpbmRvdy5PbmVTaWduYWw/Lk5vdGlmaWNhdGlvbnM/LnBlcm1pc3Npb24gPz8gZmFsc2U7IH0sXG5cdHNldERlZmF1bHRVcmw6IG5vdGlmaWNhdGlvbnNTZXREZWZhdWx0VXJsLFxuXHRzZXREZWZhdWx0VGl0bGU6IG5vdGlmaWNhdGlvbnNTZXREZWZhdWx0VGl0bGUsXG5cdGlzUHVzaFN1cHBvcnRlZCxcblx0cmVxdWVzdFBlcm1pc3Npb246IG5vdGlmaWNhdGlvbnNSZXF1ZXN0UGVybWlzc2lvbixcblx0YWRkRXZlbnRMaXN0ZW5lcjogbm90aWZpY2F0aW9uc0FkZEV2ZW50TGlzdGVuZXIsXG5cdHJlbW92ZUV2ZW50TGlzdGVuZXI6IG5vdGlmaWNhdGlvbnNSZW1vdmVFdmVudExpc3RlbmVyLFxufTtcblxuLyoqXG4gKiBAUHVibGljQXBpXG4gKi9cbmZ1bmN0aW9uIGlzUHVzaFN1cHBvcnRlZCgpOiBib29sZWFuIHtcbiAgcmV0dXJuIGlzUHVzaE5vdGlmaWNhdGlvbnNTdXBwb3J0ZWQoKTtcbn1cblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuY29uc3QgT05FU0lHTkFMX1NES19JRCA9ICdvbmVzaWduYWwtc2RrJztcbmNvbnN0IE9ORV9TSUdOQUxfU0NSSVBUX1NSQyA9XG4gICdodHRwczovL2Nkbi5vbmVzaWduYWwuY29tL3Nka3Mvd2ViL3YxNi9PbmVTaWduYWxTREsucGFnZS5qcyc7XG5cbi8vIHRydWUgaWYgdGhlIHNjcmlwdCBpcyBzdWNjZXNzZnVsbHkgbG9hZGVkIGZyb20gQ0ROLlxubGV0IGlzT25lU2lnbmFsSW5pdGlhbGl6ZWQgPSBmYWxzZTtcbi8vIHRydWUgaWYgdGhlIHNjcmlwdCBmYWlscyB0byBsb2FkIGZyb20gQ0ROLiBBIHNlcGFyYXRlIGZsYWcgaXMgbmVjZXNzYXJ5XG4vLyB0byBkaXNhbWJpZ3VhdGUgYmV0d2VlbiBhIENETiBsb2FkIGZhaWx1cmUgYW5kIGEgZGVsYXllZCBjYWxsIHRvXG4vLyBPbmVTaWduYWwjaW5pdC5cbmxldCBpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCA9IGZhbHNlO1xuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkID0gd2luZG93Lk9uZVNpZ25hbERlZmVycmVkIHx8IFtdO1xuICBhZGRTREtTY3JpcHQoKTtcbn1cblxuLyoqXG4gKiBUaGUgZm9sbG93aW5nIGNvZGUgaXMgY29waWVkIGRpcmVjdGx5IGZyb20gdGhlIG5hdGl2ZSBTREsgc291cmNlIGZpbGUgQnJvd3NlclN1cHBvcnRzUHVzaC50c1xuICogUyBUIEEgUiBUXG4gKi9cblxuLy8gQ2hlY2tzIGlmIHRoZSBicm93c2VyIHN1cHBvcnRzIHB1c2ggbm90aWZpY2F0aW9ucyBieSBjaGVja2luZyBpZiBzcGVjaWZpY1xuLy8gICBjbGFzc2VzIGFuZCBwcm9wZXJ0aWVzIG9uIHRoZW0gZXhpc3RcbmZ1bmN0aW9uIGlzUHVzaE5vdGlmaWNhdGlvbnNTdXBwb3J0ZWQoKTogYm9vbGVhbiB7XG4gIHJldHVybiBzdXBwb3J0c1ZhcGlkUHVzaCgpIHx8IHN1cHBvcnRzU2FmYXJpUHVzaCgpO1xufVxuXG5mdW5jdGlvbiBpc01hY09TU2FmYXJpSW5JZnJhbWUoKTogYm9vbGVhbiB7XG4gIC8vIEZhbGxiYWNrIGRldGVjdGlvbiBmb3IgU2FmYXJpIG9uIG1hY09TIGluIGFuIGlmcmFtZSBjb250ZXh0XG4gIHJldHVybiAoXG4gICAgd2luZG93LnRvcCAhPT0gd2luZG93ICYmIC8vIGlzQ29udGV4dElmcmFtZVxuICAgIG5hdmlnYXRvci52ZW5kb3IgPT09ICdBcHBsZSBDb21wdXRlciwgSW5jLicgJiYgLy8gaXNTYWZhcmlcbiAgICBuYXZpZ2F0b3IucGxhdGZvcm0gPT09ICdNYWNJbnRlbCdcbiAgKTsgLy8gaXNNYWNPU1xufVxuXG5mdW5jdGlvbiBzdXBwb3J0c1NhZmFyaVB1c2goKTogYm9vbGVhbiB7XG4gIHJldHVybiAoXG4gICAgKHdpbmRvdy5zYWZhcmkgJiYgdHlwZW9mIHdpbmRvdy5zYWZhcmkucHVzaE5vdGlmaWNhdGlvbiAhPT0gJ3VuZGVmaW5lZCcpIHx8XG4gICAgaXNNYWNPU1NhZmFyaUluSWZyYW1lKClcbiAgKTtcbn1cblxuLy8gRG9lcyB0aGUgYnJvd3NlciBzdXBwb3J0IHRoZSBzdGFuZGFyZCBQdXNoIEFQSVxuZnVuY3Rpb24gc3VwcG9ydHNWYXBpZFB1c2goKTogYm9vbGVhbiB7XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIFB1c2hTdWJzY3JpcHRpb25PcHRpb25zICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIFB1c2hTdWJzY3JpcHRpb25PcHRpb25zLnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSgnYXBwbGljYXRpb25TZXJ2ZXJLZXknKVxuICApO1xufVxuLyogRSBOIEQgKi9cblxuZnVuY3Rpb24gaGFuZGxlT25FcnJvcigpOiB2b2lkIHtcbiAgaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQgPSB0cnVlO1xufVxuXG5mdW5jdGlvbiBhZGRTREtTY3JpcHQoKTogdm9pZCB7XG4gIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICBzY3JpcHQuaWQgPSBPTkVTSUdOQUxfU0RLX0lEO1xuICBzY3JpcHQuZGVmZXIgPSB0cnVlO1xuICBzY3JpcHQuc3JjID0gT05FX1NJR05BTF9TQ1JJUFRfU1JDO1xuXG4gIC8vIEFsd2F5cyByZXNvbHZlIHdoZXRoZXIgb3Igbm90IHRoZSBzY3JpcHQgaXMgc3VjY2Vzc2Z1bGx5IGluaXRpYWxpemVkLlxuICAvLyBUaGlzIGlzIGltcG9ydGFudCBmb3IgdXNlcnMgd2hvIG1heSBibG9jayBjZG4ub25lc2lnbmFsLmNvbSB3LyBhZGJsb2NrLlxuICBzY3JpcHQub25lcnJvciA9ICgpID0+IHtcbiAgICBoYW5kbGVPbkVycm9yKCk7XG4gIH07XG5cbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIE9uZVNpZ25hbERlZmVycmVkPzogT25lU2lnbmFsRGVmZXJyZWRMb2FkZWRDYWxsYmFja1tdO1xuICAgIE9uZVNpZ25hbD86IElPbmVTaWduYWxPbmVTaWduYWw7XG4gICAgc2FmYXJpPzoge1xuICAgICAgcHVzaE5vdGlmaWNhdGlvbjogYW55O1xuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJT25lU2lnbmFsT25lU2lnbmFsIHtcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgT25lU2lnbmFsIGltcGxlbWVudHMgSU9uZVNpZ25hbE9uZVNpZ25hbCB7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgLyogUCBVIEIgTCBJIEMgKi9cblxuICAvKipcbiAgICogQFB1YmxpY0FwaVxuICAgKi9cbiAgaW5pdChvcHRpb25zOiBJSW5pdE9iamVjdCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmIChpc09uZVNpZ25hbEluaXRpYWxpemVkKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoYE9uZVNpZ25hbCBpcyBhbHJlYWR5IGluaXRpYWxpemVkLmApO1xuICAgIH1cblxuICAgIGlmICghb3B0aW9ucyB8fCAhb3B0aW9ucy5hcHBJZCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCdZb3UgbmVlZCB0byBwcm92aWRlIHlvdXIgT25lU2lnbmFsIGFwcElkLicpO1xuICAgIH1cblxuICAgIGlmICghZG9jdW1lbnQpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChgRG9jdW1lbnQgaXMgbm90IGRlZmluZWQuYCk7XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIGJvdGggZGlzYWJsZWQgYW5kIGRpc2FibGUga2V5cyBmb3Igd2VsY29tZSBub3RpZmljYXRpb25cbiAgICBpZiAob3B0aW9ucy53ZWxjb21lTm90aWZpY2F0aW9uPy5kaXNhYmxlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBvcHRpb25zLndlbGNvbWVOb3RpZmljYXRpb24uZGlzYWJsZSA9IG9wdGlvbnMud2VsY29tZU5vdGlmaWNhdGlvbi5kaXNhYmxlZDtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICAgICAgb25lU2lnbmFsXG4gICAgICAgICAgLmluaXQob3B0aW9ucylcbiAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBpc09uZVNpZ25hbEluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaChyZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuXHRVc2VyID0gVXNlck5hbWVzcGFjZTtcblx0U2Vzc2lvbiA9IFNlc3Npb25OYW1lc3BhY2U7XG5cdERlYnVnID0gRGVidWdOYW1lc3BhY2U7XG5cdFNsaWRlZG93biA9IFNsaWRlZG93bk5hbWVzcGFjZTtcblx0Tm90aWZpY2F0aW9ucyA9IE5vdGlmaWNhdGlvbnNOYW1lc3BhY2U7XG5cdGxvZ2luID0gb25lU2lnbmFsTG9naW47XG5cdGxvZ291dCA9IG9uZVNpZ25hbExvZ291dDtcblx0c2V0Q29uc2VudEdpdmVuID0gb25lU2lnbmFsU2V0Q29uc2VudEdpdmVuO1xuXHRzZXRDb25zZW50UmVxdWlyZWQgPSBvbmVTaWduYWxTZXRDb25zZW50UmVxdWlyZWQ7XG59XG4iXX0=