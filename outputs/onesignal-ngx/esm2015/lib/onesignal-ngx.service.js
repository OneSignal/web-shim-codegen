import { __awaiter } from "tslib";
/**
 * Returns true and logs when [value] is a string that is "" (unless [allowEmpty]) or has a NUL.
 * Non-strings return false so the SDK still validates their type.
 */
function isMissing(value, api, allowEmpty = false) {
    if (typeof value !== 'string')
        return false;
    // A NUL cannot be stored in a text column, so it is never a usable value.
    if (value.includes('\u0000')) {
        console.error('[OneSignal] ' + api + ' contains a null byte');
        return true;
    }
    if (value === '' && !allowEmpty) {
        console.error('[OneSignal] ' + api + ' is required');
        return true;
    }
    return false;
}
function hasMissingItems(values, api) {
    return Array.isArray(values) && values.some((value) => isMissing(value, api));
}
function hasMissingEntries(values, api, checkValues) {
    if (typeof values !== 'object' || values === null || Array.isArray(values))
        return false;
    return Object.entries(values).some(([key, value]) => isMissing(key, api + ': key') || (checkValues && isMissing(value, api + ': value')));
}
function oneSignalLogin(externalId, jwtToken) {
    if (isMissing(externalId, 'login: externalId'))
        return Promise.resolve();
    return new Promise((resolve, reject) => {
        var _a;
        if (isOneSignalScriptFailed) {
            reject(new Error('OneSignal script failed to load.'));
            return;
        }
        (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
            oneSignal.login(externalId, jwtToken)
                .then(() => resolve())
                .catch(error => reject(error));
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
            oneSignal.logout()
                .then(() => resolve())
                .catch(error => reject(error));
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
            oneSignal.setConsentGiven(consent)
                .then(() => resolve())
                .catch(error => reject(error));
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
            oneSignal.setConsentRequired(requiresConsent)
                .then(() => resolve())
                .catch(error => reject(error));
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
            oneSignal.Slidedown.promptPush(options)
                .then(() => resolve())
                .catch(error => reject(error));
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
            oneSignal.Slidedown.promptPushCategories(options)
                .then(() => resolve())
                .catch(error => reject(error));
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
            oneSignal.Slidedown.promptSms(options)
                .then(() => resolve())
                .catch(error => reject(error));
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
            oneSignal.Slidedown.promptEmail(options)
                .then(() => resolve())
                .catch(error => reject(error));
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
            oneSignal.Slidedown.promptSmsAndEmail(options)
                .then(() => resolve())
                .catch(error => reject(error));
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
            oneSignal.Notifications.setDefaultUrl(url)
                .then(() => resolve())
                .catch(error => reject(error));
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
            oneSignal.Notifications.setDefaultTitle(title)
                .then(() => resolve())
                .catch(error => reject(error));
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
            oneSignal.Notifications.requestPermission()
                .then(result => resolve(result))
                .catch(error => reject(error));
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
            oneSignal.Session.sendOutcome(outcomeName, outcomeWeight)
                .then(() => resolve())
                .catch(error => reject(error));
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
            oneSignal.Session.sendUniqueOutcome(outcomeName)
                .then(() => resolve())
                .catch(error => reject(error));
        });
    });
}
function userAddAlias(label, id) {
    var _a;
    if (isMissing(label, 'addAlias: label') || isMissing(id, 'addAlias: id'))
        return;
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
        oneSignal.User.addAlias(label, id);
    });
}
function userAddAliases(aliases) {
    var _a;
    if (hasMissingEntries(aliases, 'addAliases', true))
        return;
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
        oneSignal.User.addAliases(aliases);
    });
}
function userRemoveAlias(label) {
    var _a;
    if (isMissing(label, 'removeAlias: label'))
        return;
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
        oneSignal.User.removeAlias(label);
    });
}
function userRemoveAliases(labels) {
    var _a;
    if (hasMissingItems(labels, 'removeAliases: labels'))
        return;
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
        oneSignal.User.removeAliases(labels);
    });
}
function userAddEmail(email) {
    var _a;
    if (isMissing(email, 'addEmail: email'))
        return;
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
        oneSignal.User.addEmail(email);
    });
}
function userRemoveEmail(email) {
    var _a;
    if (isMissing(email, 'removeEmail: email'))
        return;
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
        oneSignal.User.removeEmail(email);
    });
}
function userAddSms(smsNumber) {
    var _a;
    if (isMissing(smsNumber, 'addSms: smsNumber'))
        return;
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
        oneSignal.User.addSms(smsNumber);
    });
}
function userRemoveSms(smsNumber) {
    var _a;
    if (isMissing(smsNumber, 'removeSms: smsNumber'))
        return;
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
        oneSignal.User.removeSms(smsNumber);
    });
}
function userAddTag(key, value) {
    var _a;
    if (isMissing(key, 'addTag: key'))
        return;
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
        oneSignal.User.addTag(key, value);
    });
}
function userAddTags(tags) {
    var _a;
    if (hasMissingEntries(tags, 'addTags', false))
        return;
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
        oneSignal.User.addTags(tags);
    });
}
function userRemoveTag(key) {
    var _a;
    if (isMissing(key, 'removeTag: key'))
        return;
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
        oneSignal.User.removeTag(key);
    });
}
function userRemoveTags(keys) {
    var _a;
    if (hasMissingItems(keys, 'removeTags: keys'))
        return;
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
        oneSignal.User.removeTags(keys);
    });
}
// @ts-expect-error - return non-Promise type despite needing to await OneSignalDeferred
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
    if (isMissing(language, 'setLanguage: language', true))
        return;
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
        oneSignal.User.setLanguage(language);
    });
}
// @ts-expect-error - return non-Promise type despite needing to await OneSignalDeferred
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
function userTrackEvent(name, properties) {
    var _a;
    if (isMissing(name, 'trackEvent: name'))
        return;
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
        oneSignal.User.trackEvent(name, properties);
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
            oneSignal.User.PushSubscription.optIn()
                .then(() => resolve())
                .catch(error => reject(error));
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
            oneSignal.User.PushSubscription.optOut()
                .then(() => resolve())
                .catch(error => reject(error));
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
    trackEvent: userTrackEvent,
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
const DEFAULT_SCRIPT_SRC = 'https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js';
let isOneSignalInitialized = false;
let isOneSignalScriptFailed = false;
let pendingInitReject;
if (typeof window !== 'undefined') {
    window.OneSignalDeferred = window.OneSignalDeferred || [];
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
    pendingInitReject === null || pendingInitReject === void 0 ? void 0 : pendingInitReject(new Error('OneSignal script failed to load.'));
    pendingInitReject = undefined;
}
function addSDKScript(scriptSrc) {
    if (document.getElementById(ONESIGNAL_SDK_ID)) {
        return;
    }
    const script = document.createElement('script');
    script.id = ONESIGNAL_SDK_ID;
    script.defer = true;
    script.src = scriptSrc || DEFAULT_SCRIPT_SRC;
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
        if (!options || !options.appId || isMissing(options.appId, 'init: appId')) {
            return Promise.reject('You need to provide your OneSignal appId.');
        }
        if (!document) {
            return Promise.reject(`Document is not defined.`);
        }
        // Required: the CDN script silently exits on unsupported browsers without
        // draining OneSignalDeferred, so init() would hang forever otherwise.
        if (!isPushNotificationsSupported()) {
            return Promise.reject(new Error('This browser does not support Web Push notifications.'));
        }
        // Handle both disabled and disable keys for welcome notification
        if (((_a = options.welcomeNotification) === null || _a === void 0 ? void 0 : _a.disabled) !== undefined) {
            options.welcomeNotification.disable = options.welcomeNotification.disabled;
        }
        addSDKScript(options.scriptSrc);
        return new Promise((resolve, reject) => {
            var _a;
            pendingInitReject = reject;
            (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
                oneSignal
                    .init(options)
                    .then(() => {
                    isOneSignalInitialized = true;
                    pendingInitReject = undefined;
                    resolve();
                })
                    .catch((err) => {
                    pendingInitReject = undefined;
                    reject(err);
                });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25lc2lnbmFsLW5neC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvb25lc2lnbmFsLW5neC9zcmMvbGliL29uZXNpZ25hbC1uZ3guc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBaWFBOzs7R0FHRztBQUNILFNBQVMsU0FBUyxDQUFDLEtBQWMsRUFBRSxHQUFXLEVBQUUsVUFBVSxHQUFHLEtBQUs7SUFDaEUsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRO1FBQUUsT0FBTyxLQUFLLENBQUM7SUFDNUMsMEVBQTBFO0lBQzFFLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUM1QixPQUFPLENBQUMsS0FBSyxDQUFDLGNBQWMsR0FBRyxHQUFHLEdBQUcsdUJBQXVCLENBQUMsQ0FBQztRQUM5RCxPQUFPLElBQUksQ0FBQztLQUNiO0lBQ0QsSUFBSSxLQUFLLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFO1FBQy9CLE9BQU8sQ0FBQyxLQUFLLENBQUMsY0FBYyxHQUFHLEdBQUcsR0FBRyxjQUFjLENBQUMsQ0FBQztRQUNyRCxPQUFPLElBQUksQ0FBQztLQUNiO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDO0FBRUQsU0FBUyxlQUFlLENBQUMsTUFBZSxFQUFFLEdBQVc7SUFDbkQsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNoRixDQUFDO0FBRUQsU0FBUyxpQkFBaUIsQ0FBQyxNQUFlLEVBQUUsR0FBVyxFQUFFLFdBQW9CO0lBQzNFLElBQUksT0FBTyxNQUFNLEtBQUssUUFBUSxJQUFJLE1BQU0sS0FBSyxJQUFJLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxN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QUFPLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFOztZQUMzQyxpQkFBaUIsR0FBRyxNQUFNLENBQUM7WUFDM0IsTUFBQSxNQUFNLENBQUMsaUJBQWlCLDBDQUFFLElBQUksQ0FBQyxDQUFDLFNBQThCLEVBQUUsRUFBRTtnQkFDaEUsU0FBUztxQkFDTixJQUFJLENBQUMsT0FBTyxDQUFDO3FCQUNiLElBQUksQ0FBQyxHQUFHLEVBQUU7b0JBQ1Qsc0JBQXNCLEdBQUcsSUFBSSxDQUFDO29CQUM5QixpQkFBaUIsR0FBRyxTQUFTLENBQUM7b0JBQzlCLE9BQU8sRUFBRSxDQUFDO2dCQUNaLENBQUMsQ0FBQztxQkFDRCxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtvQkFDYixpQkFBaUIsR0FBRyxTQUFTLENBQUM7b0JBQzlCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZCxDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsRUFBRTtRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztZQXpERixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIEF1dG9Qcm9tcHRPcHRpb25zIHsgZm9yY2U/OiBib29sZWFuOyBmb3JjZVNsaWRlZG93bk92ZXJOYXRpdmU/OiBib29sZWFuOyBzbGlkZWRvd25Qcm9tcHRPcHRpb25zPzogSU9uZVNpZ25hbEF1dG9Qcm9tcHRPcHRpb25zOyB9XG5leHBvcnQgaW50ZXJmYWNlIElPbmVTaWduYWxBdXRvUHJvbXB0T3B0aW9ucyB7IGZvcmNlPzogYm9vbGVhbjsgZm9yY2VTbGlkZWRvd25PdmVyTmF0aXZlPzogYm9vbGVhbjsgaXNJblVwZGF0ZU1vZGU/OiBib29sZWFuOyBjYXRlZ29yeU9wdGlvbnM/OiBJT25lU2lnbmFsQ2F0ZWdvcmllczsgfVxuZXhwb3J0IGludGVyZmFjZSBJT25lU2lnbmFsQ2F0ZWdvcmllcyB7IHBvc2l0aXZlVXBkYXRlQnV0dG9uOiBzdHJpbmc7IG5lZ2F0aXZlVXBkYXRlQnV0dG9uOiBzdHJpbmc7IHNhdmluZ0J1dHRvblRleHQ6IHN0cmluZzsgZXJyb3JCdXR0b25UZXh0OiBzdHJpbmc7IHVwZGF0ZU1lc3NhZ2U6IHN0cmluZzsgdGFnczogSU9uZVNpZ25hbFRhZ0NhdGVnb3J5W107IH1cbmV4cG9ydCBpbnRlcmZhY2UgSU9uZVNpZ25hbFRhZ0NhdGVnb3J5IHsgdGFnOiBzdHJpbmc7IGxhYmVsOiBzdHJpbmc7IGNoZWNrZWQ/OiBib29sZWFuOyB9XG5leHBvcnQgdHlwZSBQdXNoU3Vic2NyaXB0aW9uTmFtZXNwYWNlUHJvcGVydGllcyA9IHsgaWQ6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQ7IHRva2VuOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkOyBvcHRlZEluOiBib29sZWFuOyB9O1xuZXhwb3J0IHR5cGUgU3Vic2NyaXB0aW9uQ2hhbmdlRXZlbnQgPSB7IHByZXZpb3VzOiBQdXNoU3Vic2NyaXB0aW9uTmFtZXNwYWNlUHJvcGVydGllczsgY3VycmVudDogUHVzaFN1YnNjcmlwdGlvbk5hbWVzcGFjZVByb3BlcnRpZXM7IH07XG5leHBvcnQgdHlwZSBOb3RpZmljYXRpb25FdmVudE5hbWUgPSAnY2xpY2snIHwgJ2ZvcmVncm91bmRXaWxsRGlzcGxheScgfCAnZGlzbWlzcycgfCAncGVybWlzc2lvbkNoYW5nZScgfCAncGVybWlzc2lvblByb21wdERpc3BsYXknO1xuZXhwb3J0IHR5cGUgU2xpZGVkb3duRXZlbnROYW1lID0gJ3NsaWRlZG93bkFsbG93Q2xpY2snIHwgJ3NsaWRlZG93bkNhbmNlbENsaWNrJyB8ICdzbGlkZWRvd25DbG9zZWQnIHwgJ3NsaWRlZG93blF1ZXVlZCcgfCAnc2xpZGVkb3duU2hvd24nO1xuZXhwb3J0IHR5cGUgT25lU2lnbmFsRGVmZXJyZWRMb2FkZWRDYWxsYmFjayA9IChvbmVzaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHZvaWQ7XG5leHBvcnQgaW50ZXJmYWNlIElPU05vdGlmaWNhdGlvbiB7XG4gIC8qKlxuICAgKiBUaGUgT25lU2lnbmFsIG5vdGlmaWNhdGlvbiBpZDtcbiAgICogIC0gUHJpbWFyeSBpZCBvbiBPbmVTaWduYWwncyBSRVNUIEFQSSBhbmQgZGFzaGJvYXJkXG4gICAqL1xuICByZWFkb25seSBub3RpZmljYXRpb25JZDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBWaXNpYmxlIHRpdGxlIHRleHQgb24gdGhlIG5vdGlmaWNhdGlvblxuICAgKi9cbiAgcmVhZG9ubHkgdGl0bGU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFZpc2libGUgYm9keSB0ZXh0IG9uIHRoZSBub3RpZmljYXRpb25cbiAgICovXG4gIHJlYWRvbmx5IGJvZHk6IHN0cmluZztcblxuICAvKipcbiAgICogVmlzaWJsZSBpY29uIHRoZSBub3RpZmljYXRpb247IFVSTCBmb3JtYXRcbiAgICovXG4gIHJlYWRvbmx5IGljb24/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFZpc2libGUgc21hbGwgYmFkZ2VJY29uIHRoYXQgZGlzcGxheXMgb24gc29tZSBkZXZpY2VzOyBVUkwgZm9ybWF0XG4gICAqIEV4YW1wbGU6IE9uIEFuZHJvaWQncyBzdGF0dXMgYmFyXG4gICAqL1xuICByZWFkb25seSBiYWRnZUljb24/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFZpc2libGUgaW1hZ2Ugb24gdGhlIG5vdGlmaWNhdGlvbjsgVVJMIGZvcm1hdFxuICAgKi9cbiAgcmVhZG9ubHkgaW1hZ2U/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFZpc2libGUgYnV0dG9ucyBvbiB0aGUgbm90aWZpY2F0aW9uXG4gICAqL1xuICByZWFkb25seSBhY3Rpb25CdXR0b25zPzogSU9TTm90aWZpY2F0aW9uQWN0aW9uQnV0dG9uW107XG5cbiAgLyoqXG4gICAqIElmIHRoaXMgdmFsdWUgaXMgdGhlIHNhbWUgYXMgZXhpc3Rpbmcgbm90aWZpY2F0aW9uLCBpdCB3aWxsIHJlcGxhY2UgaXRcbiAgICogQ2FuIGJlIHNldCB3aGVuIGNyZWF0aW5nIHRoZSBub3RpZmljYXRpb24gd2l0aCBcIldlYiBQdXNoIFRvcGljXCIgb24gdGhlIGRhc2hib2FyZFxuICAgKiBvciB3ZWJfcHVzaF90b3BpYyBmcm9tIHRoZSBSRVNUIEFQSS5cbiAgICovXG4gIHJlYWRvbmx5IHRvcGljPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDdXN0b20gb2JqZWN0IHRoYXQgd2FzIHNlbnQgd2l0aCB0aGUgbm90aWZpY2F0aW9uO1xuICAgKiBkZWZpbmFibGUgd2hlbiBjcmVhdGluZyB0aGUgbm90aWZpY2F0aW9uIGZyb20gdGhlIE9uZVNpZ25hbCBSRVNUIEFQSSBvciBkYXNoYm9hcmRcbiAgICovXG4gIHJlYWRvbmx5IGFkZGl0aW9uYWxEYXRhPzogb2JqZWN0O1xuXG4gIC8qKlxuICAgKiBVUkwgdG8gb3BlbiB3aGVuIGNsaWNraW5nIG9yIHRhcHBpbmcgb24gdGhlIG5vdGlmaWNhdGlvblxuICAgKi9cbiAgcmVhZG9ubHkgbGF1bmNoVVJMPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDb25maXJtIHRoZSBwdXNoIHdhcyByZWNlaXZlZCBieSByZXBvcnRpbmcgYmFjayB0byBPbmVTaWduYWxcbiAgICovXG4gIHJlYWRvbmx5IGNvbmZpcm1EZWxpdmVyeTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJT1NOb3RpZmljYXRpb25BY3Rpb25CdXR0b24ge1xuICAvKipcbiAgICogQW55IHVuaXF1ZSBpZGVudGlmaWVyIHRvIHJlcHJlc2VudCB3aGljaCBidXR0b24gd2FzIGNsaWNrZWQuIFRoaXMgaXMgdHlwaWNhbGx5IHBhc3NlZCBiYWNrIHRvIHRoZSBzZXJ2aWNlIHdvcmtlclxuICAgKiBhbmQgaG9zdCBwYWdlIHRocm91Z2ggZXZlbnRzIHRvIGlkZW50aWZ5IHdoaWNoIGJ1dHRvbiB3YXMgY2xpY2tlZC5cbiAgICogZS5nLiAnbGlrZS1idXR0b24nXG4gICAqL1xuICByZWFkb25seSBhY3Rpb25JZDogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIG5vdGlmaWNhdGlvbiBhY3Rpb24gYnV0dG9uJ3MgdGV4dC5cbiAgICovXG4gIHJlYWRvbmx5IHRleHQ6IHN0cmluZztcbiAgLyoqXG4gICAqIEEgdmFsaWQgcHVibGljbHkgcmVhY2hhYmxlIEhUVFBTIFVSTCB0byBhbiBpbWFnZS5cbiAgICovXG4gIHJlYWRvbmx5IGljb24/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgVVJMIHRvIG9wZW4gdGhlIHdlYiBicm93c2VyIHRvIHdoZW4gdGhpcyBhY3Rpb24gYnV0dG9uIGlzIGNsaWNrZWQuXG4gICAqL1xuICByZWFkb25seSBsYXVuY2hVUkw/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURpc3BsYXlhYmxlT1NOb3RpZmljYXRpb24gZXh0ZW5kcyBJT1NOb3RpZmljYXRpb24ge1xuICBkaXNwbGF5KCk6IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm90aWZpY2F0aW9uQ2xpY2tSZXN1bHQge1xuICByZWFkb25seSBhY3Rpb25JZD86IHN0cmluZztcbiAgcmVhZG9ubHkgdXJsPzogc3RyaW5nO1xufVxuXG5leHBvcnQgdHlwZSBOb3RpZmljYXRpb25FdmVudFR5cGVNYXAgPSB7XG4gICdjbGljayc6IE5vdGlmaWNhdGlvbkNsaWNrRXZlbnQ7XG4gICdmb3JlZ3JvdW5kV2lsbERpc3BsYXknOiBOb3RpZmljYXRpb25Gb3JlZ3JvdW5kV2lsbERpc3BsYXlFdmVudDtcbiAgJ2Rpc21pc3MnOiBOb3RpZmljYXRpb25EaXNtaXNzRXZlbnQ7XG4gICdwZXJtaXNzaW9uQ2hhbmdlJzogYm9vbGVhbjtcbiAgJ3Blcm1pc3Npb25Qcm9tcHREaXNwbGF5Jzogdm9pZDtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm90aWZpY2F0aW9uRm9yZWdyb3VuZFdpbGxEaXNwbGF5RXZlbnQge1xuICByZWFkb25seSBub3RpZmljYXRpb246IElEaXNwbGF5YWJsZU9TTm90aWZpY2F0aW9uO1xuICBwcmV2ZW50RGVmYXVsdCgpOiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5vdGlmaWNhdGlvbkRpc21pc3NFdmVudCB7XG4gIG5vdGlmaWNhdGlvbjogSU9TTm90aWZpY2F0aW9uO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5vdGlmaWNhdGlvbkNsaWNrRXZlbnQge1xuICByZWFkb25seSBub3RpZmljYXRpb246IElPU05vdGlmaWNhdGlvbjtcbiAgcmVhZG9ubHkgcmVzdWx0OiBOb3RpZmljYXRpb25DbGlja1Jlc3VsdDtcbn1cblxuZXhwb3J0IHR5cGUgVXNlckNoYW5nZUV2ZW50ID0ge1xuICBjdXJyZW50OiBVc2VyTmFtZXNwYWNlUHJvcGVydGllcztcbn07XG5leHBvcnQgdHlwZSBVc2VyTmFtZXNwYWNlUHJvcGVydGllcyA9IHtcbiAgb25lc2lnbmFsSWQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZXh0ZXJuYWxJZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBJSW5pdE9iamVjdCB7XG4gIGFwcElkOiBzdHJpbmc7XG4gIHJlcXVpcmVzVXNlclByaXZhY3lDb25zZW50PzogYm9vbGVhbjtcbiAgc2FmYXJpX3dlYl9pZD86IHN0cmluZztcbiAgc3ViZG9tYWluTmFtZT86IHN0cmluZztcbiAgcHJvbXB0T3B0aW9ucz86IHtcbiAgICBzbGlkZWRvd246IHtcbiAgICAgIHByb21wdHM6IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdoZXRoZXIgdG8gYXV0b21hdGljYWxseSBkaXNwbGF5IHRoZSBwcm9tcHQuXG4gICAgICAgICAqIGB0cnVlYCB3aWxsIGRpc3BsYXkgdGhlIHByb21wdCBiYXNlZCBvbiB0aGUgZGVsYXkgb3B0aW9ucy5cbiAgICAgICAgICogYGZhbHNlYCB3aWxsIHByZXZlbnQgdGhlIHByb21wdCBmcm9tIGRpc3BsYXlpbmcgdW50aWwgdGhlIFNsaWRlZG93bnMgbWV0aG9kcyBhcmUgdXNlZC5cbiAgICAgICAgICovXG4gICAgICAgIGF1dG9Qcm9tcHQ6IGJvb2xlYW47XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE9ubHkgYXZhaWxhYmxlIGZvciB0eXBlOiBjYXRlZ29yeS4gVXAgdG8gMTAgY2F0ZWdvcmllcy5cbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICogIGNhdGVnb3JpZXM6IFt7IHRhZzogJ2xvY2FsX25ld3MnLCBsYWJlbDogJ0xvY2FsIE5ld3MnIH1dIC8vIFRoZSB1c2VyIHdpbGwgYmUgdGFnZ2VkIHdpdGggbG9jYWxfbmV3cyBidXQgd2lsbCBzZWUgXCJMb2NhbCBOZXdzXCIgaW4gdGhlIHByb21wdC5cbiAgICAgICAgICovXG4gICAgICAgIGNhdGVnb3JpZXM/OiB7XG4gICAgICAgICAgLyoqIFNob3VsZCBpZGVudGlmeSB0aGUgYWN0aW9uLiAqL1xuICAgICAgICAgIHRhZzogc3RyaW5nO1xuXG4gICAgICAgICAgLyoqIFdoYXQgdGhlIHVzZXIgd2lsbCBzZWUuICovXG4gICAgICAgICAgbGFiZWw6IHN0cmluZztcbiAgICAgICAgfVtdO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgZGVsYXkgb3B0aW9ucyBmb3IgdGhlIHByb21wdC5cbiAgICAgICAgICogQGV4YW1wbGUgZGVsYXk6IHsgcGFnZVZpZXdzOiAzLCB0aW1lRGVsYXk6IDIwIH0gLy8gVGhlIHVzZXIgd2lsbCBub3QgYmUgc2hvd24gdGhlIHByb21wdCB1bnRpbCAyMCBzZWNvbmRzIGFmdGVyIHRoZSAzcmQgcGFnZSB2aWV3LlxuICAgICAgICAgKi9cbiAgICAgICAgZGVsYXk6IHtcbiAgICAgICAgICAvKiogVGhlIG51bWJlciBvZiBwYWdlcyBhIHVzZXIgbmVlZHMgdG8gdmlzaXQgYmVmb3JlIHRoZSBwcm9tcHQgaXMgZGlzcGxheWVkLiAqL1xuICAgICAgICAgIHBhZ2VWaWV3cz86IG51bWJlcjtcblxuICAgICAgICAgIC8qKiBUaGUgbnVtYmVyIG9mIHNlY29uZHMgYSB1c2VyIG5lZWRzIHRvIHdhaXQgYmVmb3JlIHRoZSBwcm9tcHQgaXMgZGlzcGxheWVkLkJvdGggb3B0aW9ucyBtdXN0IGJlIHNhdGlzZmllZCBmb3IgdGhlIHByb21wdCB0byBkaXNwbGF5ICovXG4gICAgICAgICAgdGltZURlbGF5PzogbnVtYmVyO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdGV4dCB0byBkaXNwbGF5IGluIHRoZSBwcm9tcHQuXG4gICAgICAgICAqL1xuICAgICAgICB0ZXh0Pzoge1xuICAgICAgICAgIC8qKiBUaGUgY2FsbG91dCBhc2tpbmcgdGhlIHVzZXIgdG8gb3B0LWluLiBVcCB0byA5MCBjaGFyYWN0ZXJzLiAqL1xuICAgICAgICAgIGFjdGlvbk1lc3NhZ2U/OiBzdHJpbmc7XG5cbiAgICAgICAgICAvKiogVHJpZ2dlcnMgdGhlIG9wdC1pbi4gVXAgdG8gMTUgY2hhcmFjdGVycy4gKi9cbiAgICAgICAgICBhY2NlcHRCdXR0b24/OiBzdHJpbmc7XG5cbiAgICAgICAgICAvKiogQ2FuY2VscyBvcHQtaW4uIFVwIHRvIDE1IGNoYXJhY3RlcnMuICovXG4gICAgICAgICAgY2FuY2VsQnV0dG9uPzogc3RyaW5nO1xuXG4gICAgICAgICAgLyoqIFRoZSBtZXNzYWdlIG9mIHRoZSBjb25maXJtYXRpb24gcHJvbXB0IGRpc3BsYXllZCBhZnRlciB0aGUgZW1haWwgYW5kL29yIHBob25lIG51bWJlciBpcyBwcm92aWRlZC4gVXAgdG8gOTAgY2hhcmFjdGVycy4gKi9cbiAgICAgICAgICBjb25maXJtTWVzc2FnZT86IHN0cmluZztcblxuICAgICAgICAgIC8qKiBJZGVudGlmaWVzIHRoZSBlbWFpbCB0ZXh0IGZpZWxkLiBVcCB0byAxNSBjaGFyYWN0ZXJzLiAqL1xuICAgICAgICAgIGVtYWlsTGFiZWw/OiBzdHJpbmc7XG5cbiAgICAgICAgICAvKiogQ2FuY2VscyB0aGUgY2F0ZWdvcnkgdXBkYXRlLiBVcCB0byAxNSBjaGFyYWN0ZXJzLiAqL1xuICAgICAgICAgIG5lZ2F0aXZlVXBkYXRlQnV0dG9uPzogc3RyaW5nO1xuXG4gICAgICAgICAgLyoqIFNhdmVzIHRoZSB1cGRhdGVkIGNhdGVnb3J5IHRhZ3MuIFVwIHRvIDE1IGNoYXJhY3RlcnMuICovXG4gICAgICAgICAgcG9zaXRpdmVVcGRhdGVCdXR0b24/OiBzdHJpbmc7XG5cbiAgICAgICAgICAvKiogSWRlbnRpZmllcyB0aGUgcGhvbmUgbnVtYmVyIHRleHQgZmllbGQuIFVwIHRvIDE1IGNoYXJhY3RlcnMuICovXG4gICAgICAgICAgc21zTGFiZWw/OiBzdHJpbmc7XG5cbiAgICAgICAgICAvKiogQSBkaWZmZXJlbnQgbWVzc2FnZSBzaG93biB0byBzdWJzY3JpYmVycyBwcmVzZW50ZWQgdGhlIHByb21wdCBhZ2FpbiB0byB1cGRhdGUgY2F0ZWdvcmllcy4gVXAgdG8gOTAgY2hhcmFjdGVycy4gKi9cbiAgICAgICAgICB1cGRhdGVNZXNzYWdlPzogc3RyaW5nO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdHlwZSBvZiBwcm9tcHQgdG8gZGlzcGxheS5cbiAgICAgICAgICogYHB1c2hgIHdoaWNoIGlzIHRoZSBTbGlkZSBQcm9tcHQgd2l0aG91dCBjYXRlZ29yaWVzLlxuICAgICAgICAgKiBgY2F0ZWdvcnlgIHdoaWNoIGlzIHRoZSBTbGlkZSBQcm9tcHQgd2l0aCBjYXRlZ29yaWVzLlxuICAgICAgICAgKiBgc21zYCBvbmx5IGFza3MgZm9yIHBob25lIG51bWJlci5cbiAgICAgICAgICogYGVtYWlsYCBvbmx5IGFza3MgZm9yIGVtYWlsIGFkZHJlc3MuXG4gICAgICAgICAqIGBzbXNBbmRFbWFpbGAgYXNrcyBmb3IgYm90aCBwaG9uZSBudW1iZXIgYW5kIGVtYWlsIGFkZHJlc3MuXG4gICAgICAgICAqL1xuICAgICAgICB0eXBlOiAncHVzaCcgfCAnY2F0ZWdvcnknIHwgJ3NtcycgfCAnZW1haWwnIHwgJ3Ntc0FuZEVtYWlsJztcbiAgICAgIH1bXTtcbiAgICB9O1xuICB9O1xuICB3ZWxjb21lTm90aWZpY2F0aW9uPzoge1xuICAgIC8qKlxuICAgICAqIERpc2FibGVzIHNlbmRpbmcgYSB3ZWxjb21lIG5vdGlmaWNhdGlvbiB0byBuZXcgc2l0ZSB2aXNpdG9ycy4gSWYgeW91IHdhbnQgdG8gZGlzYWJsZSB3ZWxjb21lIG5vdGlmaWNhdGlvbnMsIHRoaXMgaXMgdGhlIG9ubHkgb3B0aW9uIHlvdSBuZWVkLlxuICAgICAqIEBkZXByZWNhdGVkIFVzZSAnZGlzYWJsZScgaW5zdGVhZC4gVGhpcyB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgdmVyc2lvbi5cbiAgICAgKi9cbiAgICBkaXNhYmxlZD86IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBEaXNhYmxlcyBzZW5kaW5nIGEgd2VsY29tZSBub3RpZmljYXRpb24gdG8gbmV3IHNpdGUgdmlzaXRvcnMuIElmIHlvdSB3YW50IHRvIGRpc2FibGUgd2VsY29tZSBub3RpZmljYXRpb25zLCB0aGlzIGlzIHRoZSBvbmx5IG9wdGlvbiB5b3UgbmVlZC5cbiAgICAgKi9cbiAgICBkaXNhYmxlPzogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIFRoZSB3ZWxjb21lIG5vdGlmaWNhdGlvbidzIG1lc3NhZ2UuIFlvdSBjYW4gbG9jYWxpemUgdGhpcyB0byB5b3VyIG93biBsYW5ndWFnZS5cbiAgICAgKiBJZiBsZWZ0IGJsYW5rIG9yIHNldCB0byBibGFuaywgdGhlIGRlZmF1bHQgb2YgJ1RoYW5rcyBmb3Igc3Vic2NyaWJpbmchJyB3aWxsIGJlIHVzZWQuXG4gICAgICovXG4gICAgbWVzc2FnZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHdlbGNvbWUgbm90aWZpY2F0aW9uJ3MgdGl0bGUuIFlvdSBjYW4gbG9jYWxpemUgdGhpcyB0byB5b3VyIG93biBsYW5ndWFnZS4gSWYgbm90IHNldCwgb3IgbGVmdCBibGFuaywgdGhlIHNpdGUncyB0aXRsZSB3aWxsIGJlIHVzZWQuXG4gICAgICogU2V0IHRvIG9uZSBzcGFjZSAnICcgdG8gY2xlYXIgdGhlIHRpdGxlLCBhbHRob3VnaCB0aGlzIGlzIG5vdCByZWNvbW1lbmRlZC5cbiAgICAgKi9cbiAgICB0aXRsZT86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEJ5IGRlZmF1bHQsIGNsaWNraW5nIHRoZSB3ZWxjb21lIG5vdGlmaWNhdGlvbiBkb2VzIG5vdCBvcGVuIGFueSBsaW5rLlxuICAgICAqIFRoaXMgaXMgcmVjb21tZW5kZWQgYmVjYXVzZSB0aGUgdXNlciBoYXMganVzdCB2aXNpdGVkIHlvdXIgc2l0ZSBhbmQgc3Vic2NyaWJlZC5cbiAgICAgKi9cbiAgICB1cmw/OiBzdHJpbmc7XG4gIH07XG5cbiAgLyoqXG4gICAqIFdpbGwgZW5hYmxlIGN1c3RvbWl6YXRpb24gb2YgdGhlIG5vdGlmeS9zdWJzY3JpcHRpb24gYmVsbCBidXR0b24uXG4gICAqL1xuICBub3RpZnlCdXR0b24/OiB7XG4gICAgLyoqXG4gICAgICogQSBmdW5jdGlvbiB5b3UgZGVmaW5lIHRoYXQgcmV0dXJucyB0cnVlIHRvIHNob3cgdGhlIFN1YnNjcmlwdGlvbiBCZWxsLCBvciBmYWxzZSB0byBoaWRlIGl0LlxuICAgICAqIFR5cGljYWxseSB1c2VkIHRoZSBoaWRlIHRoZSBTdWJzY3JpcHRpb24gQmVsbCBhZnRlciB0aGUgdXNlciBpcyBzdWJzY3JpYmVkLlxuICAgICAqIFRoaXMgZnVuY3Rpb24gaXMgbm90IHJlLWV2YWx1YXRlZCBvbiBldmVyeSBzdGF0ZSBjaGFuZ2U7IHRoaXMgZnVuY3Rpb24gaXMgb25seSBldmFsdWF0ZWQgb25jZSB3aGVuIHRoZSBTdWJzY3JpcHRpb24gQmVsbCBiZWdpbnMgdG8gc2hvdy5cbiAgICAgKi9cbiAgICBkaXNwbGF5UHJlZGljYXRlPzogKCkgPT4gYm9vbGVhbiB8IFByb21pc2U8Ym9vbGVhbj47XG5cbiAgICAvKipcbiAgICAgKiBFbmFibGUgdGhlIFN1YnNjcmlwdGlvbiBCZWxsLiBUaGUgU3Vic2NyaXB0aW9uIEJlbGwgaXMgb3RoZXJ3aXNlIGRpc2FibGVkIGJ5IGRlZmF1bHQuXG4gICAgICovXG4gICAgZW5hYmxlPzogYm9vbGVhbjtcblxuICAgIC8qKiBTcGVjaWZ5IENTUy12YWxpZCBwaXhlbCBvZmZzZXRzIHVzaW5nIGJvdHRvbSwgbGVmdCwgYW5kIHJpZ2h0LiAqL1xuICAgIG9mZnNldD86IHsgYm90dG9tOiBzdHJpbmc7IGxlZnQ6IHN0cmluZzsgcmlnaHQ6IHN0cmluZyB9O1xuXG4gICAgLyoqXG4gICAgICogSWYgYHRydWVgLCB0aGUgU3Vic2NyaXB0aW9uIEJlbGwgd2lsbCBkaXNwbGF5IGFuIGljb24gdGhhdCB0aGVyZSBpcyAxIHVucmVhZCBtZXNzYWdlLlxuICAgICAqIFdoZW4gaG92ZXJpbmcgb3ZlciB0aGUgU3Vic2NyaXB0aW9uIEJlbGwsIHRoZSB1c2VyIHdpbGwgc2VlIGN1c3RvbSB0ZXh0IHNldCBieSBtZXNzYWdlLnByZW5vdGlmeS5cbiAgICAgKi9cbiAgICBwcmVub3RpZnk6IGJvb2xlYW47XG5cbiAgICAvKiogRWl0aGVyIGBib3R0b20tbGVmdGAgb3IgYGJvdHRvbS1yaWdodGAuIFRoZSBTdWJzY3JpcHRpb24gQmVsbCB3aWxsIGJlIGZpeGVkIGF0IHRoaXMgbG9jYXRpb24gb24geW91ciBwYWdlLiAqL1xuICAgIHBvc2l0aW9uPzogJ2JvdHRvbS1sZWZ0JyB8ICdib3R0b20tcmlnaHQnO1xuXG4gICAgLyoqICBTZXQgYGZhbHNlYCB0byBoaWRlIHRoZSAnUG93ZXJlZCBieSBPbmVTaWduYWwnIHRleHQgaW4gdGhlIFN1YnNjcmlwdGlvbiBCZWxsIGRpYWxvZyBwb3B1cC4gKi9cbiAgICBzaG93Q3JlZGl0OiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogVGhlIFN1YnNjcmlwdGlvbiBCZWxsIHdpbGwgaW5pdGlhbGx5IGFwcGVhciBhdCBvbmUgb2YgdGhlc2Ugc2l6ZXMsIGFuZCB0aGVuIHNocmluayBkb3duIHRvIHNpemUgYHNtYWxsYCBhZnRlciB0aGUgdXNlciBzdWJzY3JpYmVzLlxuICAgICAqL1xuICAgIHNpemU/OiAnc21hbGwnIHwgJ21lZGl1bScgfCAnbGFyZ2UnO1xuXG4gICAgLyoqIEN1c3RvbWl6ZSB0aGUgU3Vic2NyaXB0aW9uIEJlbGwgdGV4dC4gKi9cbiAgICB0ZXh0OiB7XG4gICAgICAnZGlhbG9nLmJsb2NrZWQubWVzc2FnZSc6IHN0cmluZztcbiAgICAgICdkaWFsb2cuYmxvY2tlZC50aXRsZSc6IHN0cmluZztcbiAgICAgICdkaWFsb2cubWFpbi5idXR0b24uc3Vic2NyaWJlJzogc3RyaW5nO1xuICAgICAgJ2RpYWxvZy5tYWluLmJ1dHRvbi51bnN1YnNjcmliZSc6IHN0cmluZztcbiAgICAgICdkaWFsb2cubWFpbi50aXRsZSc6IHN0cmluZztcbiAgICAgICdtZXNzYWdlLmFjdGlvbi5yZXN1YnNjcmliZWQnOiBzdHJpbmc7XG4gICAgICAnbWVzc2FnZS5hY3Rpb24uc3Vic2NyaWJlZCc6IHN0cmluZztcbiAgICAgICdtZXNzYWdlLmFjdGlvbi5zdWJzY3JpYmluZyc6IHN0cmluZztcbiAgICAgICdtZXNzYWdlLmFjdGlvbi51bnN1YnNjcmliZWQnOiBzdHJpbmc7XG4gICAgICAnbWVzc2FnZS5wcmVub3RpZnknOiBzdHJpbmc7XG4gICAgICAndGlwLnN0YXRlLmJsb2NrZWQnOiBzdHJpbmc7XG4gICAgICAndGlwLnN0YXRlLnN1YnNjcmliZWQnOiBzdHJpbmc7XG4gICAgICAndGlwLnN0YXRlLnVuc3Vic2NyaWJlZCc6IHN0cmluZztcbiAgICB9O1xuICB9O1xuXG4gIHBlcnNpc3ROb3RpZmljYXRpb24/OiBib29sZWFuO1xuICB3ZWJob29rcz86IHtcbiAgICAvKipcbiAgICAgKiBFbmFibGUgdGhpcyBzZXR0aW5nIG9ubHkgaWYgeW91ciBzZXJ2ZXIgaGFzIENPUlMgZW5hYmxlZCBhbmQgc3VwcG9ydHMgbm9uLXNpbXBsZSBDT1JTIHJlcXVlc3RzLlxuICAgICAqIElmIHRoaXMgc2V0dGluZyBpcyBkaXNhYmxlZCwgeW91ciB3ZWJob29rIHdpbGwgbm90IG5lZWQgQ09SUyB0byByZWNlaXZlIGRhdGEsIGJ1dCBpdCB3aWxsIG5vdCByZWNlaXZlIHRoZSBjdXN0b20gaGVhZGVycy5cbiAgICAgKiBUaGUgc2ltcGxlc3Qgb3B0aW9uIGlzIHRvIGxlYXZlIGl0IGRpc2FibGVkLlxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG4gICAgY29yczogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIFRoaXMgZXZlbnQgb2NjdXJzIGFmdGVyIGEgbm90aWZpY2F0aW9uIGlzIGNsaWNrZWQuXG4gICAgICogQGV4YW1wbGUgaHR0cHM6Ly9zaXRlLmNvbS9ob29rXG4gICAgICovXG4gICAgJ25vdGlmaWNhdGlvbi5jbGlja2VkJz86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIFRoaXMgZXZlbnQgb2NjdXJzIGFmdGVyIGEgbm90aWZpY2F0aW9uIGlzIGludGVudGlvbmFsbHkgZGlzbWlzc2VkIGJ5IHRoZSB1c2VyIChjbGlja2luZyB0aGUgbm90aWZpY2F0aW9uIGJvZHkgb3Igb25lIG9mIHRoZSBub3RpZmljYXRpb24gYWN0aW9uIGJ1dHRvbnMgZG9lcyBub3QgdHJpZ2dlciB0aGUgZGlzbWlzc2VkIHdlYmhvb2spLFxuICAgICAqIGFmdGVyIGEgZ3JvdXAgb2Ygbm90aWZpY2F0aW9ucyBhcmUgYWxsIGRpc21pc3NlZCAod2l0aCB0aGlzIG5vdGlmaWNhdGlvbiBhcyBwYXJ0IG9mIHRoYXQgZ3JvdXApLCBvciBhZnRlciBhIG5vdGlmaWNhdGlvbiBleHBpcmVzIG9uIGl0cyBvd24gdGltZSBhbmQgZGlzYXBwZWFycy4gVGhpcyBldmVudCBpcyBzdXBwb3J0ZWQgb24gQ2hyb21lIG9ubHkuXG4gICAgICogQGV4YW1wbGUgaHR0cHM6Ly9zaXRlLmNvbS9ob29rXG4gICAgICovXG4gICAgJ25vdGlmaWNhdGlvbi5kaXNtaXNzZWQnPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogVGhpcyBldmVudCBvY2N1cnMgYWZ0ZXIgYSBub3RpZmljYXRpb24gaXMgZGlzcGxheWVkLlxuICAgICAqIEBleGFtcGxlIGh0dHBzOi8vc2l0ZS5jb20vaG9va1xuICAgICAqL1xuICAgICdub3RpZmljYXRpb24ud2lsbERpc3BsYXknPzogc3RyaW5nO1xuICB9O1xuICBhdXRvUmVzdWJzY3JpYmU/OiBib29sZWFuO1xuICBhdXRvUmVnaXN0ZXI/OiBib29sZWFuO1xuICBub3RpZmljYXRpb25DbGlja0hhbmRsZXJNYXRjaD86ICdleGFjdCcgfCAnb3JpZ2luJztcbiAgbm90aWZpY2F0aW9uQ2xpY2tIYW5kbGVyQWN0aW9uPzogJ25hdmlnYXRlJyB8ICdmb2N1cyc7XG4gIHBhdGg/OiBzdHJpbmc7XG4gIHNlcnZpY2VXb3JrZXJQYXJhbT86IHsgc2NvcGU6IHN0cmluZyB9O1xuICBzZXJ2aWNlV29ya2VyUGF0aD86IHN0cmluZztcbiAgc2VydmljZVdvcmtlck92ZXJyaWRlRm9yVHlwaWNhbD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBPdmVycmlkZXMgdGhlIGRlZmF1bHQgT25lU2lnbmFsIFNESyBzY3JpcHQgVVJMLlxuICAgKiBVc2UgdGhpcyB0byBzZWxmLWhvc3QgdGhlIFNESyBzY3JpcHQgb24geW91ciBvd24gZG9tYWluLCBlLmcuIHRvIGNvbXBseVxuICAgKiB3aXRoIHN0cmljdCBDcm9zcy1PcmlnaW4tRW1iZWRkZXItUG9saWN5IChDT0VQKSBvciBDb250ZW50LVNlY3VyaXR5LVBvbGljeSAoQ1NQKSBoZWFkZXJzLlxuICAgKiBAZGVmYXVsdCAnaHR0cHM6Ly9jZG4ub25lc2lnbmFsLmNvbS9zZGtzL3dlYi92MTYvT25lU2lnbmFsU0RLLnBhZ2UuanMnXG4gICAqL1xuICBzY3JpcHRTcmM/OiBzdHJpbmc7XG4gIFtrZXk6IHN0cmluZ106IHVua25vd247XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU9uZVNpZ25hbE9uZVNpZ25hbCB7XG5cdFNsaWRlZG93bjogSU9uZVNpZ25hbFNsaWRlZG93bjtcblx0Tm90aWZpY2F0aW9uczogSU9uZVNpZ25hbE5vdGlmaWNhdGlvbnM7XG5cdFNlc3Npb246IElPbmVTaWduYWxTZXNzaW9uO1xuXHRVc2VyOiBJT25lU2lnbmFsVXNlcjtcblx0RGVidWc6IElPbmVTaWduYWxEZWJ1Zztcblx0bG9naW4oZXh0ZXJuYWxJZDogc3RyaW5nLCBqd3RUb2tlbj86IHN0cmluZyk6IFByb21pc2U8dm9pZD47XG5cdGxvZ291dCgpOiBQcm9taXNlPHZvaWQ+O1xuXHRpbml0KG9wdGlvbnM6IElJbml0T2JqZWN0KTogUHJvbWlzZTx2b2lkPjtcblx0c2V0Q29uc2VudEdpdmVuKGNvbnNlbnQ6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+O1xuXHRzZXRDb25zZW50UmVxdWlyZWQocmVxdWlyZXNDb25zZW50OiBib29sZWFuKTogUHJvbWlzZTx2b2lkPjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSU9uZVNpZ25hbE5vdGlmaWNhdGlvbnMge1xuXHRwZXJtaXNzaW9uTmF0aXZlOiBOb3RpZmljYXRpb25QZXJtaXNzaW9uO1xuXHRwZXJtaXNzaW9uOiBib29sZWFuO1xuXHRzZXREZWZhdWx0VXJsKHVybDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPjtcblx0c2V0RGVmYXVsdFRpdGxlKHRpdGxlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+O1xuXHRpc1B1c2hTdXBwb3J0ZWQoKTogYm9vbGVhbjtcblx0cmVxdWVzdFBlcm1pc3Npb24oKTogUHJvbWlzZTxib29sZWFuPjtcblx0YWRkRXZlbnRMaXN0ZW5lcjxLIGV4dGVuZHMgTm90aWZpY2F0aW9uRXZlbnROYW1lPihldmVudDogSywgbGlzdGVuZXI6IChvYmo6IE5vdGlmaWNhdGlvbkV2ZW50VHlwZU1hcFtLXSkgPT4gdm9pZCk6IHZvaWQ7XG5cdHJlbW92ZUV2ZW50TGlzdGVuZXI8SyBleHRlbmRzIE5vdGlmaWNhdGlvbkV2ZW50TmFtZT4oZXZlbnQ6IEssIGxpc3RlbmVyOiAob2JqOiBOb3RpZmljYXRpb25FdmVudFR5cGVNYXBbS10pID0+IHZvaWQpOiB2b2lkO1xufVxuZXhwb3J0IGludGVyZmFjZSBJT25lU2lnbmFsU2xpZGVkb3duIHtcblx0cHJvbXB0UHVzaChvcHRpb25zPzogQXV0b1Byb21wdE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+O1xuXHRwcm9tcHRQdXNoQ2F0ZWdvcmllcyhvcHRpb25zPzogQXV0b1Byb21wdE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+O1xuXHRwcm9tcHRTbXMob3B0aW9ucz86IEF1dG9Qcm9tcHRPcHRpb25zKTogUHJvbWlzZTx2b2lkPjtcblx0cHJvbXB0RW1haWwob3B0aW9ucz86IEF1dG9Qcm9tcHRPcHRpb25zKTogUHJvbWlzZTx2b2lkPjtcblx0cHJvbXB0U21zQW5kRW1haWwob3B0aW9ucz86IEF1dG9Qcm9tcHRPcHRpb25zKTogUHJvbWlzZTx2b2lkPjtcblx0YWRkRXZlbnRMaXN0ZW5lcihldmVudDogU2xpZGVkb3duRXZlbnROYW1lLCBsaXN0ZW5lcjogKHdhc1Nob3duOiBib29sZWFuKSA9PiB2b2lkKTogdm9pZDtcblx0cmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudDogU2xpZGVkb3duRXZlbnROYW1lLCBsaXN0ZW5lcjogKHdhc1Nob3duOiBib29sZWFuKSA9PiB2b2lkKTogdm9pZDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSU9uZVNpZ25hbERlYnVnIHtcblx0c2V0TG9nTGV2ZWwobG9nTGV2ZWw6ICd0cmFjZScgfCAnZGVidWcnIHwgJ2luZm8nIHwgJ3dhcm4nIHwgJ2Vycm9yJyk6IHZvaWQ7XG59XG5leHBvcnQgaW50ZXJmYWNlIElPbmVTaWduYWxTZXNzaW9uIHtcblx0c2VuZE91dGNvbWUob3V0Y29tZU5hbWU6IHN0cmluZywgb3V0Y29tZVdlaWdodD86IG51bWJlcik6IFByb21pc2U8dm9pZD47XG5cdHNlbmRVbmlxdWVPdXRjb21lKG91dGNvbWVOYW1lOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+O1xufVxuZXhwb3J0IGludGVyZmFjZSBJT25lU2lnbmFsVXNlciB7XG5cdG9uZXNpZ25hbElkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdGV4dGVybmFsSWQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0UHVzaFN1YnNjcmlwdGlvbjogSU9uZVNpZ25hbFB1c2hTdWJzY3JpcHRpb247XG5cdGFkZEFsaWFzKGxhYmVsOiBzdHJpbmcsIGlkOiBzdHJpbmcpOiB2b2lkO1xuXHRhZGRBbGlhc2VzKGFsaWFzZXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pOiB2b2lkO1xuXHRyZW1vdmVBbGlhcyhsYWJlbDogc3RyaW5nKTogdm9pZDtcblx0cmVtb3ZlQWxpYXNlcyhsYWJlbHM6IHN0cmluZ1tdKTogdm9pZDtcblx0YWRkRW1haWwoZW1haWw6IHN0cmluZyk6IHZvaWQ7XG5cdHJlbW92ZUVtYWlsKGVtYWlsOiBzdHJpbmcpOiB2b2lkO1xuXHRhZGRTbXMoc21zTnVtYmVyOiBzdHJpbmcpOiB2b2lkO1xuXHRyZW1vdmVTbXMoc21zTnVtYmVyOiBzdHJpbmcpOiB2b2lkO1xuXHRhZGRUYWcoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkO1xuXHRhZGRUYWdzKHRhZ3M6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pOiB2b2lkO1xuXHRyZW1vdmVUYWcoa2V5OiBzdHJpbmcpOiB2b2lkO1xuXHRyZW1vdmVUYWdzKGtleXM6IHN0cmluZ1tdKTogdm9pZDtcblx0Z2V0VGFncygpOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuXHRhZGRFdmVudExpc3RlbmVyKGV2ZW50OiAnY2hhbmdlJywgbGlzdGVuZXI6IChjaGFuZ2U6IFVzZXJDaGFuZ2VFdmVudCkgPT4gdm9pZCk6IHZvaWQ7XG5cdHJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQ6ICdjaGFuZ2UnLCBsaXN0ZW5lcjogKGNoYW5nZTogVXNlckNoYW5nZUV2ZW50KSA9PiB2b2lkKTogdm9pZDtcblx0c2V0TGFuZ3VhZ2UobGFuZ3VhZ2U6IHN0cmluZyk6IHZvaWQ7XG5cdGdldExhbmd1YWdlKCk6IHN0cmluZztcblx0dHJhY2tFdmVudChuYW1lOiBzdHJpbmcsIHByb3BlcnRpZXM/OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPik6IHZvaWQ7XG59XG5leHBvcnQgaW50ZXJmYWNlIElPbmVTaWduYWxQdXNoU3Vic2NyaXB0aW9uIHtcblx0aWQ6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQ7XG5cdHRva2VuOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkO1xuXHRvcHRlZEluOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXHRvcHRJbigpOiBQcm9taXNlPHZvaWQ+O1xuXHRvcHRPdXQoKTogUHJvbWlzZTx2b2lkPjtcblx0YWRkRXZlbnRMaXN0ZW5lcihldmVudDogJ2NoYW5nZScsIGxpc3RlbmVyOiAoY2hhbmdlOiBTdWJzY3JpcHRpb25DaGFuZ2VFdmVudCkgPT4gdm9pZCk6IHZvaWQ7XG5cdHJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQ6ICdjaGFuZ2UnLCBsaXN0ZW5lcjogKGNoYW5nZTogU3Vic2NyaXB0aW9uQ2hhbmdlRXZlbnQpID0+IHZvaWQpOiB2b2lkO1xufVxuLyoqXG4gKiBSZXR1cm5zIHRydWUgYW5kIGxvZ3Mgd2hlbiBbdmFsdWVdIGlzIGEgc3RyaW5nIHRoYXQgaXMgXCJcIiAodW5sZXNzIFthbGxvd0VtcHR5XSkgb3IgaGFzIGEgTlVMLlxuICogTm9uLXN0cmluZ3MgcmV0dXJuIGZhbHNlIHNvIHRoZSBTREsgc3RpbGwgdmFsaWRhdGVzIHRoZWlyIHR5cGUuXG4gKi9cbmZ1bmN0aW9uIGlzTWlzc2luZyh2YWx1ZTogdW5rbm93biwgYXBpOiBzdHJpbmcsIGFsbG93RW1wdHkgPSBmYWxzZSk6IGJvb2xlYW4ge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykgcmV0dXJuIGZhbHNlO1xuICAvLyBBIE5VTCBjYW5ub3QgYmUgc3RvcmVkIGluIGEgdGV4dCBjb2x1bW4sIHNvIGl0IGlzIG5ldmVyIGEgdXNhYmxlIHZhbHVlLlxuICBpZiAodmFsdWUuaW5jbHVkZXMoJ1xcdTAwMDAnKSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1tPbmVTaWduYWxdICcgKyBhcGkgKyAnIGNvbnRhaW5zIGEgbnVsbCBieXRlJyk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKHZhbHVlID09PSAnJyAmJiAhYWxsb3dFbXB0eSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1tPbmVTaWduYWxdICcgKyBhcGkgKyAnIGlzIHJlcXVpcmVkJyk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBoYXNNaXNzaW5nSXRlbXModmFsdWVzOiB1bmtub3duLCBhcGk6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZXMpICYmIHZhbHVlcy5zb21lKCh2YWx1ZSkgPT4gaXNNaXNzaW5nKHZhbHVlLCBhcGkpKTtcbn1cblxuZnVuY3Rpb24gaGFzTWlzc2luZ0VudHJpZXModmFsdWVzOiB1bmtub3duLCBhcGk6IHN0cmluZywgY2hlY2tWYWx1ZXM6IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZXMgIT09ICdvYmplY3QnIHx8IHZhbHVlcyA9PT0gbnVsbCB8fCBBcnJheS5pc0FycmF5KHZhbHVlcykpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKHZhbHVlcykuc29tZShcbiAgICAoW2tleSwgdmFsdWVdKSA9PlxuICAgICAgaXNNaXNzaW5nKGtleSwgYXBpICsgJzoga2V5JykgfHwgKGNoZWNrVmFsdWVzICYmIGlzTWlzc2luZyh2YWx1ZSwgYXBpICsgJzogdmFsdWUnKSksXG4gICk7XG59XG5cbmZ1bmN0aW9uIG9uZVNpZ25hbExvZ2luKGV4dGVybmFsSWQ6IHN0cmluZywgand0VG9rZW4/OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgaWYgKGlzTWlzc2luZyhleHRlcm5hbElkLCAnbG9naW46IGV4dGVybmFsSWQnKSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCkge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcignT25lU2lnbmFsIHNjcmlwdCBmYWlsZWQgdG8gbG9hZC4nKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC5sb2dpbihleHRlcm5hbElkLCBqd3RUb2tlbilcbiAgICAgICAgLnRoZW4oKCkgPT4gcmVzb2x2ZSgpKVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgfSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gb25lU2lnbmFsTG9nb3V0KCk6IFByb21pc2U8dm9pZD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCkge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcignT25lU2lnbmFsIHNjcmlwdCBmYWlsZWQgdG8gbG9hZC4nKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC5sb2dvdXQoKVxuICAgICAgICAudGhlbigoKSA9PiByZXNvbHZlKCkpXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiByZWplY3QoZXJyb3IpKTtcbiAgICB9KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBvbmVTaWduYWxTZXRDb25zZW50R2l2ZW4oY29uc2VudDogYm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCkge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcignT25lU2lnbmFsIHNjcmlwdCBmYWlsZWQgdG8gbG9hZC4nKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC5zZXRDb25zZW50R2l2ZW4oY29uc2VudClcbiAgICAgICAgLnRoZW4oKCkgPT4gcmVzb2x2ZSgpKVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgfSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gb25lU2lnbmFsU2V0Q29uc2VudFJlcXVpcmVkKHJlcXVpcmVzQ29uc2VudDogYm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCkge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcignT25lU2lnbmFsIHNjcmlwdCBmYWlsZWQgdG8gbG9hZC4nKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC5zZXRDb25zZW50UmVxdWlyZWQocmVxdWlyZXNDb25zZW50KVxuICAgICAgICAudGhlbigoKSA9PiByZXNvbHZlKCkpXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiByZWplY3QoZXJyb3IpKTtcbiAgICB9KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBzbGlkZWRvd25Qcm9tcHRQdXNoKG9wdGlvbnM/OiBBdXRvUHJvbXB0T3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCkge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcignT25lU2lnbmFsIHNjcmlwdCBmYWlsZWQgdG8gbG9hZC4nKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC5TbGlkZWRvd24ucHJvbXB0UHVzaChvcHRpb25zKVxuICAgICAgICAudGhlbigoKSA9PiByZXNvbHZlKCkpXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiByZWplY3QoZXJyb3IpKTtcbiAgICB9KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBzbGlkZWRvd25Qcm9tcHRQdXNoQ2F0ZWdvcmllcyhvcHRpb25zPzogQXV0b1Byb21wdE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQpIHtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoJ09uZVNpZ25hbCBzY3JpcHQgZmFpbGVkIHRvIGxvYWQuJykpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgICBvbmVTaWduYWwuU2xpZGVkb3duLnByb21wdFB1c2hDYXRlZ29yaWVzKG9wdGlvbnMpXG4gICAgICAgIC50aGVuKCgpID0+IHJlc29sdmUoKSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHJlamVjdChlcnJvcikpO1xuICAgIH0pO1xuICB9KTtcbn1cbmZ1bmN0aW9uIHNsaWRlZG93blByb21wdFNtcyhvcHRpb25zPzogQXV0b1Byb21wdE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQpIHtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoJ09uZVNpZ25hbCBzY3JpcHQgZmFpbGVkIHRvIGxvYWQuJykpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgICBvbmVTaWduYWwuU2xpZGVkb3duLnByb21wdFNtcyhvcHRpb25zKVxuICAgICAgICAudGhlbigoKSA9PiByZXNvbHZlKCkpXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiByZWplY3QoZXJyb3IpKTtcbiAgICB9KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBzbGlkZWRvd25Qcm9tcHRFbWFpbChvcHRpb25zPzogQXV0b1Byb21wdE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQpIHtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoJ09uZVNpZ25hbCBzY3JpcHQgZmFpbGVkIHRvIGxvYWQuJykpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgICBvbmVTaWduYWwuU2xpZGVkb3duLnByb21wdEVtYWlsKG9wdGlvbnMpXG4gICAgICAgIC50aGVuKCgpID0+IHJlc29sdmUoKSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHJlamVjdChlcnJvcikpO1xuICAgIH0pO1xuICB9KTtcbn1cbmZ1bmN0aW9uIHNsaWRlZG93blByb21wdFNtc0FuZEVtYWlsKG9wdGlvbnM/OiBBdXRvUHJvbXB0T3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCkge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcignT25lU2lnbmFsIHNjcmlwdCBmYWlsZWQgdG8gbG9hZC4nKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC5TbGlkZWRvd24ucHJvbXB0U21zQW5kRW1haWwob3B0aW9ucylcbiAgICAgICAgLnRoZW4oKCkgPT4gcmVzb2x2ZSgpKVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgfSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gc2xpZGVkb3duQWRkRXZlbnRMaXN0ZW5lcihldmVudDogU2xpZGVkb3duRXZlbnROYW1lLCBsaXN0ZW5lcjogKHdhc1Nob3duOiBib29sZWFuKSA9PiB2b2lkKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlNsaWRlZG93bi5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzbGlkZWRvd25SZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50OiBTbGlkZWRvd25FdmVudE5hbWUsIGxpc3RlbmVyOiAod2FzU2hvd246IGJvb2xlYW4pID0+IHZvaWQpOiB2b2lkIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuU2xpZGVkb3duLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG5vdGlmaWNhdGlvbnNTZXREZWZhdWx0VXJsKHVybDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgaWYgKGlzT25lU2lnbmFsU2NyaXB0RmFpbGVkKSB7XG4gICAgICByZWplY3QobmV3IEVycm9yKCdPbmVTaWduYWwgc2NyaXB0IGZhaWxlZCB0byBsb2FkLicpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgICAgb25lU2lnbmFsLk5vdGlmaWNhdGlvbnMuc2V0RGVmYXVsdFVybCh1cmwpXG4gICAgICAgIC50aGVuKCgpID0+IHJlc29sdmUoKSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHJlamVjdChlcnJvcikpO1xuICAgIH0pO1xuICB9KTtcbn1cbmZ1bmN0aW9uIG5vdGlmaWNhdGlvbnNTZXREZWZhdWx0VGl0bGUodGl0bGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCkge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcignT25lU2lnbmFsIHNjcmlwdCBmYWlsZWQgdG8gbG9hZC4nKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC5Ob3RpZmljYXRpb25zLnNldERlZmF1bHRUaXRsZSh0aXRsZSlcbiAgICAgICAgLnRoZW4oKCkgPT4gcmVzb2x2ZSgpKVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgfSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gbm90aWZpY2F0aW9uc1JlcXVlc3RQZXJtaXNzaW9uKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCkge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcignT25lU2lnbmFsIHNjcmlwdCBmYWlsZWQgdG8gbG9hZC4nKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC5Ob3RpZmljYXRpb25zLnJlcXVlc3RQZXJtaXNzaW9uKClcbiAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHJlc29sdmUocmVzdWx0KSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHJlamVjdChlcnJvcikpO1xuICAgIH0pO1xuICB9KTtcbn1cbmZ1bmN0aW9uIG5vdGlmaWNhdGlvbnNBZGRFdmVudExpc3RlbmVyPEsgZXh0ZW5kcyBOb3RpZmljYXRpb25FdmVudE5hbWU+KGV2ZW50OiBLLCBsaXN0ZW5lcjogKG9iajogTm90aWZpY2F0aW9uRXZlbnRUeXBlTWFwW0tdKSA9PiB2b2lkKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLk5vdGlmaWNhdGlvbnMuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbm90aWZpY2F0aW9uc1JlbW92ZUV2ZW50TGlzdGVuZXI8SyBleHRlbmRzIE5vdGlmaWNhdGlvbkV2ZW50TmFtZT4oZXZlbnQ6IEssIGxpc3RlbmVyOiAob2JqOiBOb3RpZmljYXRpb25FdmVudFR5cGVNYXBbS10pID0+IHZvaWQpOiB2b2lkIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuTm90aWZpY2F0aW9ucy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzZXNzaW9uU2VuZE91dGNvbWUob3V0Y29tZU5hbWU6IHN0cmluZywgb3V0Y29tZVdlaWdodD86IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCkge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcignT25lU2lnbmFsIHNjcmlwdCBmYWlsZWQgdG8gbG9hZC4nKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC5TZXNzaW9uLnNlbmRPdXRjb21lKG91dGNvbWVOYW1lLCBvdXRjb21lV2VpZ2h0KVxuICAgICAgICAudGhlbigoKSA9PiByZXNvbHZlKCkpXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiByZWplY3QoZXJyb3IpKTtcbiAgICB9KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBzZXNzaW9uU2VuZFVuaXF1ZU91dGNvbWUob3V0Y29tZU5hbWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCkge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcignT25lU2lnbmFsIHNjcmlwdCBmYWlsZWQgdG8gbG9hZC4nKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC5TZXNzaW9uLnNlbmRVbmlxdWVPdXRjb21lKG91dGNvbWVOYW1lKVxuICAgICAgICAudGhlbigoKSA9PiByZXNvbHZlKCkpXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiByZWplY3QoZXJyb3IpKTtcbiAgICB9KTtcbiAgfSk7XG59XG5mdW5jdGlvbiB1c2VyQWRkQWxpYXMobGFiZWw6IHN0cmluZywgaWQ6IHN0cmluZyk6IHZvaWQge1xuICBpZiAoaXNNaXNzaW5nKGxhYmVsLCAnYWRkQWxpYXM6IGxhYmVsJykgfHwgaXNNaXNzaW5nKGlkLCAnYWRkQWxpYXM6IGlkJykpIHJldHVybjtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuVXNlci5hZGRBbGlhcyhsYWJlbCwgaWQpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdXNlckFkZEFsaWFzZXMoYWxpYXNlczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSk6IHZvaWQge1xuICBpZiAoaGFzTWlzc2luZ0VudHJpZXMoYWxpYXNlcywgJ2FkZEFsaWFzZXMnLCB0cnVlKSkgcmV0dXJuO1xuICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgIG9uZVNpZ25hbC5Vc2VyLmFkZEFsaWFzZXMoYWxpYXNlcyk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1c2VyUmVtb3ZlQWxpYXMobGFiZWw6IHN0cmluZyk6IHZvaWQge1xuICBpZiAoaXNNaXNzaW5nKGxhYmVsLCAncmVtb3ZlQWxpYXM6IGxhYmVsJykpIHJldHVybjtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuVXNlci5yZW1vdmVBbGlhcyhsYWJlbCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1c2VyUmVtb3ZlQWxpYXNlcyhsYWJlbHM6IHN0cmluZ1tdKTogdm9pZCB7XG4gIGlmIChoYXNNaXNzaW5nSXRlbXMobGFiZWxzLCAncmVtb3ZlQWxpYXNlczogbGFiZWxzJykpIHJldHVybjtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuVXNlci5yZW1vdmVBbGlhc2VzKGxhYmVscyk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1c2VyQWRkRW1haWwoZW1haWw6IHN0cmluZyk6IHZvaWQge1xuICBpZiAoaXNNaXNzaW5nKGVtYWlsLCAnYWRkRW1haWw6IGVtYWlsJykpIHJldHVybjtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuVXNlci5hZGRFbWFpbChlbWFpbCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1c2VyUmVtb3ZlRW1haWwoZW1haWw6IHN0cmluZyk6IHZvaWQge1xuICBpZiAoaXNNaXNzaW5nKGVtYWlsLCAncmVtb3ZlRW1haWw6IGVtYWlsJykpIHJldHVybjtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuVXNlci5yZW1vdmVFbWFpbChlbWFpbCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1c2VyQWRkU21zKHNtc051bWJlcjogc3RyaW5nKTogdm9pZCB7XG4gIGlmIChpc01pc3Npbmcoc21zTnVtYmVyLCAnYWRkU21zOiBzbXNOdW1iZXInKSkgcmV0dXJuO1xuICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgIG9uZVNpZ25hbC5Vc2VyLmFkZFNtcyhzbXNOdW1iZXIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdXNlclJlbW92ZVNtcyhzbXNOdW1iZXI6IHN0cmluZyk6IHZvaWQge1xuICBpZiAoaXNNaXNzaW5nKHNtc051bWJlciwgJ3JlbW92ZVNtczogc21zTnVtYmVyJykpIHJldHVybjtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuVXNlci5yZW1vdmVTbXMoc21zTnVtYmVyKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVzZXJBZGRUYWcoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgaWYgKGlzTWlzc2luZyhrZXksICdhZGRUYWc6IGtleScpKSByZXR1cm47XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlVzZXIuYWRkVGFnKGtleSwgdmFsdWUpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdXNlckFkZFRhZ3ModGFnczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSk6IHZvaWQge1xuICBpZiAoaGFzTWlzc2luZ0VudHJpZXModGFncywgJ2FkZFRhZ3MnLCBmYWxzZSkpIHJldHVybjtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuVXNlci5hZGRUYWdzKHRhZ3MpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdXNlclJlbW92ZVRhZyhrZXk6IHN0cmluZyk6IHZvaWQge1xuICBpZiAoaXNNaXNzaW5nKGtleSwgJ3JlbW92ZVRhZzoga2V5JykpIHJldHVybjtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuVXNlci5yZW1vdmVUYWcoa2V5KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVzZXJSZW1vdmVUYWdzKGtleXM6IHN0cmluZ1tdKTogdm9pZCB7XG4gIGlmIChoYXNNaXNzaW5nSXRlbXMoa2V5cywgJ3JlbW92ZVRhZ3M6IGtleXMnKSkgcmV0dXJuO1xuICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgIG9uZVNpZ25hbC5Vc2VyLnJlbW92ZVRhZ3Moa2V5cyk7XG4gIH0pO1xufVxuXG4vLyBAdHMtZXhwZWN0LWVycm9yIC0gcmV0dXJuIG5vbi1Qcm9taXNlIHR5cGUgZGVzcGl0ZSBuZWVkaW5nIHRvIGF3YWl0IE9uZVNpZ25hbERlZmVycmVkXG5hc3luYyBmdW5jdGlvbiB1c2VyR2V0VGFncygpOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHtcbiAgbGV0IHJldFZhbDogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgYXdhaXQgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICByZXRWYWwgPSBvbmVTaWduYWwuVXNlci5nZXRUYWdzKCk7XG4gIH0pO1xuICAvLyBAdHMtaWdub3JlXG4gIHJldHVybiByZXRWYWw7XG59XG5cbmZ1bmN0aW9uIHVzZXJBZGRFdmVudExpc3RlbmVyKGV2ZW50OiAnY2hhbmdlJywgbGlzdGVuZXI6IChjaGFuZ2U6IFVzZXJDaGFuZ2VFdmVudCkgPT4gdm9pZCk6IHZvaWQge1xuICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgIG9uZVNpZ25hbC5Vc2VyLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVzZXJSZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50OiAnY2hhbmdlJywgbGlzdGVuZXI6IChjaGFuZ2U6IFVzZXJDaGFuZ2VFdmVudCkgPT4gdm9pZCk6IHZvaWQge1xuICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgIG9uZVNpZ25hbC5Vc2VyLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVzZXJTZXRMYW5ndWFnZShsYW5ndWFnZTogc3RyaW5nKTogdm9pZCB7XG4gIGlmIChpc01pc3NpbmcobGFuZ3VhZ2UsICdzZXRMYW5ndWFnZTogbGFuZ3VhZ2UnLCB0cnVlKSkgcmV0dXJuO1xuICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgIG9uZVNpZ25hbC5Vc2VyLnNldExhbmd1YWdlKGxhbmd1YWdlKTtcbiAgfSk7XG59XG5cbi8vIEB0cy1leHBlY3QtZXJyb3IgLSByZXR1cm4gbm9uLVByb21pc2UgdHlwZSBkZXNwaXRlIG5lZWRpbmcgdG8gYXdhaXQgT25lU2lnbmFsRGVmZXJyZWRcbmFzeW5jIGZ1bmN0aW9uIHVzZXJHZXRMYW5ndWFnZSgpOiBzdHJpbmcge1xuICBsZXQgcmV0VmFsOiBzdHJpbmc7XG4gIGF3YWl0IHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgcmV0VmFsID0gb25lU2lnbmFsLlVzZXIuZ2V0TGFuZ3VhZ2UoKTtcbiAgfSk7XG4gIC8vIEB0cy1pZ25vcmVcbiAgcmV0dXJuIHJldFZhbDtcbn1cblxuZnVuY3Rpb24gdXNlclRyYWNrRXZlbnQobmFtZTogc3RyaW5nLCBwcm9wZXJ0aWVzPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj4pOiB2b2lkIHtcbiAgaWYgKGlzTWlzc2luZyhuYW1lLCAndHJhY2tFdmVudDogbmFtZScpKSByZXR1cm47XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlVzZXIudHJhY2tFdmVudChuYW1lLCBwcm9wZXJ0aWVzKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHB1c2hTdWJzY3JpcHRpb25PcHRJbigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQpIHtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoJ09uZVNpZ25hbCBzY3JpcHQgZmFpbGVkIHRvIGxvYWQuJykpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgICBvbmVTaWduYWwuVXNlci5QdXNoU3Vic2NyaXB0aW9uLm9wdEluKClcbiAgICAgICAgLnRoZW4oKCkgPT4gcmVzb2x2ZSgpKVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgfSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gcHVzaFN1YnNjcmlwdGlvbk9wdE91dCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQpIHtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoJ09uZVNpZ25hbCBzY3JpcHQgZmFpbGVkIHRvIGxvYWQuJykpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgICBvbmVTaWduYWwuVXNlci5QdXNoU3Vic2NyaXB0aW9uLm9wdE91dCgpXG4gICAgICAgIC50aGVuKCgpID0+IHJlc29sdmUoKSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHJlamVjdChlcnJvcikpO1xuICAgIH0pO1xuICB9KTtcbn1cbmZ1bmN0aW9uIHB1c2hTdWJzY3JpcHRpb25BZGRFdmVudExpc3RlbmVyKGV2ZW50OiAnY2hhbmdlJywgbGlzdGVuZXI6IChjaGFuZ2U6IFN1YnNjcmlwdGlvbkNoYW5nZUV2ZW50KSA9PiB2b2lkKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlVzZXIuUHVzaFN1YnNjcmlwdGlvbi5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBwdXNoU3Vic2NyaXB0aW9uUmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudDogJ2NoYW5nZScsIGxpc3RlbmVyOiAoY2hhbmdlOiBTdWJzY3JpcHRpb25DaGFuZ2VFdmVudCkgPT4gdm9pZCk6IHZvaWQge1xuICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgIG9uZVNpZ25hbC5Vc2VyLlB1c2hTdWJzY3JpcHRpb24ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZGVidWdTZXRMb2dMZXZlbChsb2dMZXZlbDogJ3RyYWNlJyB8ICdkZWJ1ZycgfCAnaW5mbycgfCAnd2FybicgfCAnZXJyb3InKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLkRlYnVnLnNldExvZ0xldmVsKGxvZ0xldmVsKTtcbiAgfSk7XG59XG5cblxuY29uc3QgUHVzaFN1YnNjcmlwdGlvbk5hbWVzcGFjZTogSU9uZVNpZ25hbFB1c2hTdWJzY3JpcHRpb24gPSB7XG5cdGdldCBpZCgpOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHdpbmRvdy5PbmVTaWduYWw/LlVzZXI/LlB1c2hTdWJzY3JpcHRpb24/LmlkOyB9LFxuXHRnZXQgdG9rZW4oKTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCB7IHJldHVybiB3aW5kb3cuT25lU2lnbmFsPy5Vc2VyPy5QdXNoU3Vic2NyaXB0aW9uPy50b2tlbjsgfSxcblx0Z2V0IG9wdGVkSW4oKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7IHJldHVybiB3aW5kb3cuT25lU2lnbmFsPy5Vc2VyPy5QdXNoU3Vic2NyaXB0aW9uPy5vcHRlZEluOyB9LFxuXHRvcHRJbjogcHVzaFN1YnNjcmlwdGlvbk9wdEluLFxuXHRvcHRPdXQ6IHB1c2hTdWJzY3JpcHRpb25PcHRPdXQsXG5cdGFkZEV2ZW50TGlzdGVuZXI6IHB1c2hTdWJzY3JpcHRpb25BZGRFdmVudExpc3RlbmVyLFxuXHRyZW1vdmVFdmVudExpc3RlbmVyOiBwdXNoU3Vic2NyaXB0aW9uUmVtb3ZlRXZlbnRMaXN0ZW5lcixcbn07XG5cbmNvbnN0IFVzZXJOYW1lc3BhY2U6IElPbmVTaWduYWxVc2VyID0ge1xuXHRnZXQgb25lc2lnbmFsSWQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHdpbmRvdy5PbmVTaWduYWw/LlVzZXI/Lm9uZXNpZ25hbElkOyB9LFxuXHRnZXQgZXh0ZXJuYWxJZCgpOiBzdHJpbmcgfCB1bmRlZmluZWQgeyByZXR1cm4gd2luZG93Lk9uZVNpZ25hbD8uVXNlcj8uZXh0ZXJuYWxJZDsgfSxcblx0YWRkQWxpYXM6IHVzZXJBZGRBbGlhcyxcblx0YWRkQWxpYXNlczogdXNlckFkZEFsaWFzZXMsXG5cdHJlbW92ZUFsaWFzOiB1c2VyUmVtb3ZlQWxpYXMsXG5cdHJlbW92ZUFsaWFzZXM6IHVzZXJSZW1vdmVBbGlhc2VzLFxuXHRhZGRFbWFpbDogdXNlckFkZEVtYWlsLFxuXHRyZW1vdmVFbWFpbDogdXNlclJlbW92ZUVtYWlsLFxuXHRhZGRTbXM6IHVzZXJBZGRTbXMsXG5cdHJlbW92ZVNtczogdXNlclJlbW92ZVNtcyxcblx0YWRkVGFnOiB1c2VyQWRkVGFnLFxuXHRhZGRUYWdzOiB1c2VyQWRkVGFncyxcblx0cmVtb3ZlVGFnOiB1c2VyUmVtb3ZlVGFnLFxuXHRyZW1vdmVUYWdzOiB1c2VyUmVtb3ZlVGFncyxcblx0Z2V0VGFnczogdXNlckdldFRhZ3MsXG5cdGFkZEV2ZW50TGlzdGVuZXI6IHVzZXJBZGRFdmVudExpc3RlbmVyLFxuXHRyZW1vdmVFdmVudExpc3RlbmVyOiB1c2VyUmVtb3ZlRXZlbnRMaXN0ZW5lcixcblx0c2V0TGFuZ3VhZ2U6IHVzZXJTZXRMYW5ndWFnZSxcblx0Z2V0TGFuZ3VhZ2U6IHVzZXJHZXRMYW5ndWFnZSxcblx0dHJhY2tFdmVudDogdXNlclRyYWNrRXZlbnQsXG5cdFB1c2hTdWJzY3JpcHRpb246IFB1c2hTdWJzY3JpcHRpb25OYW1lc3BhY2UsXG59O1xuXG5jb25zdCBTZXNzaW9uTmFtZXNwYWNlOiBJT25lU2lnbmFsU2Vzc2lvbiA9IHtcblx0c2VuZE91dGNvbWU6IHNlc3Npb25TZW5kT3V0Y29tZSxcblx0c2VuZFVuaXF1ZU91dGNvbWU6IHNlc3Npb25TZW5kVW5pcXVlT3V0Y29tZSxcbn07XG5cbmNvbnN0IERlYnVnTmFtZXNwYWNlOiBJT25lU2lnbmFsRGVidWcgPSB7XG5cdHNldExvZ0xldmVsOiBkZWJ1Z1NldExvZ0xldmVsLFxufTtcblxuY29uc3QgU2xpZGVkb3duTmFtZXNwYWNlOiBJT25lU2lnbmFsU2xpZGVkb3duID0ge1xuXHRwcm9tcHRQdXNoOiBzbGlkZWRvd25Qcm9tcHRQdXNoLFxuXHRwcm9tcHRQdXNoQ2F0ZWdvcmllczogc2xpZGVkb3duUHJvbXB0UHVzaENhdGVnb3JpZXMsXG5cdHByb21wdFNtczogc2xpZGVkb3duUHJvbXB0U21zLFxuXHRwcm9tcHRFbWFpbDogc2xpZGVkb3duUHJvbXB0RW1haWwsXG5cdHByb21wdFNtc0FuZEVtYWlsOiBzbGlkZWRvd25Qcm9tcHRTbXNBbmRFbWFpbCxcblx0YWRkRXZlbnRMaXN0ZW5lcjogc2xpZGVkb3duQWRkRXZlbnRMaXN0ZW5lcixcblx0cmVtb3ZlRXZlbnRMaXN0ZW5lcjogc2xpZGVkb3duUmVtb3ZlRXZlbnRMaXN0ZW5lcixcbn07XG5cbmNvbnN0IE5vdGlmaWNhdGlvbnNOYW1lc3BhY2U6IElPbmVTaWduYWxOb3RpZmljYXRpb25zID0ge1xuXHRnZXQgcGVybWlzc2lvbk5hdGl2ZSgpOiBOb3RpZmljYXRpb25QZXJtaXNzaW9uIHsgcmV0dXJuIHdpbmRvdy5PbmVTaWduYWw/Lk5vdGlmaWNhdGlvbnM/LnBlcm1pc3Npb25OYXRpdmUgPz8gJ2RlZmF1bHQnOyB9LFxuXHRnZXQgcGVybWlzc2lvbigpOiBib29sZWFuIHsgcmV0dXJuIHdpbmRvdy5PbmVTaWduYWw/Lk5vdGlmaWNhdGlvbnM/LnBlcm1pc3Npb24gPz8gZmFsc2U7IH0sXG5cdHNldERlZmF1bHRVcmw6IG5vdGlmaWNhdGlvbnNTZXREZWZhdWx0VXJsLFxuXHRzZXREZWZhdWx0VGl0bGU6IG5vdGlmaWNhdGlvbnNTZXREZWZhdWx0VGl0bGUsXG5cdGlzUHVzaFN1cHBvcnRlZCxcblx0cmVxdWVzdFBlcm1pc3Npb246IG5vdGlmaWNhdGlvbnNSZXF1ZXN0UGVybWlzc2lvbixcblx0YWRkRXZlbnRMaXN0ZW5lcjogbm90aWZpY2F0aW9uc0FkZEV2ZW50TGlzdGVuZXIsXG5cdHJlbW92ZUV2ZW50TGlzdGVuZXI6IG5vdGlmaWNhdGlvbnNSZW1vdmVFdmVudExpc3RlbmVyLFxufTtcblxuLyoqXG4gKiBAUHVibGljQXBpXG4gKi9cbmZ1bmN0aW9uIGlzUHVzaFN1cHBvcnRlZCgpOiBib29sZWFuIHtcbiAgcmV0dXJuIGlzUHVzaE5vdGlmaWNhdGlvbnNTdXBwb3J0ZWQoKTtcbn1cblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuY29uc3QgT05FU0lHTkFMX1NES19JRCA9ICdvbmVzaWduYWwtc2RrJztcbmNvbnN0IERFRkFVTFRfU0NSSVBUX1NSQyA9XG4gICdodHRwczovL2Nkbi5vbmVzaWduYWwuY29tL3Nka3Mvd2ViL3YxNi9PbmVTaWduYWxTREsucGFnZS5qcyc7XG5cbmxldCBpc09uZVNpZ25hbEluaXRpYWxpemVkID0gZmFsc2U7XG5sZXQgaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQgPSBmYWxzZTtcbmxldCBwZW5kaW5nSW5pdFJlamVjdDogKChyZWFzb24/OiB1bmtub3duKSA9PiB2b2lkKSB8IHVuZGVmaW5lZDtcblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZCA9IHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZCB8fCBbXTtcbn1cblxuLyoqXG4gKiBUaGUgZm9sbG93aW5nIGNvZGUgaXMgY29waWVkIGRpcmVjdGx5IGZyb20gdGhlIG5hdGl2ZSBTREsgc291cmNlIGZpbGUgQnJvd3NlclN1cHBvcnRzUHVzaC50c1xuICogUyBUIEEgUiBUXG4gKi9cblxuLy8gQ2hlY2tzIGlmIHRoZSBicm93c2VyIHN1cHBvcnRzIHB1c2ggbm90aWZpY2F0aW9ucyBieSBjaGVja2luZyBpZiBzcGVjaWZpY1xuLy8gICBjbGFzc2VzIGFuZCBwcm9wZXJ0aWVzIG9uIHRoZW0gZXhpc3RcbmZ1bmN0aW9uIGlzUHVzaE5vdGlmaWNhdGlvbnNTdXBwb3J0ZWQoKTogYm9vbGVhbiB7XG4gIHJldHVybiBzdXBwb3J0c1ZhcGlkUHVzaCgpIHx8IHN1cHBvcnRzU2FmYXJpUHVzaCgpO1xufVxuXG5mdW5jdGlvbiBpc01hY09TU2FmYXJpSW5JZnJhbWUoKTogYm9vbGVhbiB7XG4gIC8vIEZhbGxiYWNrIGRldGVjdGlvbiBmb3IgU2FmYXJpIG9uIG1hY09TIGluIGFuIGlmcmFtZSBjb250ZXh0XG4gIHJldHVybiAoXG4gICAgd2luZG93LnRvcCAhPT0gd2luZG93ICYmIC8vIGlzQ29udGV4dElmcmFtZVxuICAgIG5hdmlnYXRvci52ZW5kb3IgPT09ICdBcHBsZSBDb21wdXRlciwgSW5jLicgJiYgLy8gaXNTYWZhcmlcbiAgICBuYXZpZ2F0b3IucGxhdGZvcm0gPT09ICdNYWNJbnRlbCdcbiAgKTsgLy8gaXNNYWNPU1xufVxuXG5mdW5jdGlvbiBzdXBwb3J0c1NhZmFyaVB1c2goKTogYm9vbGVhbiB7XG4gIHJldHVybiAoXG4gICAgKHdpbmRvdy5zYWZhcmkgJiYgdHlwZW9mIHdpbmRvdy5zYWZhcmkucHVzaE5vdGlmaWNhdGlvbiAhPT0gJ3VuZGVmaW5lZCcpIHx8XG4gICAgaXNNYWNPU1NhZmFyaUluSWZyYW1lKClcbiAgKTtcbn1cblxuLy8gRG9lcyB0aGUgYnJvd3NlciBzdXBwb3J0IHRoZSBzdGFuZGFyZCBQdXNoIEFQSVxuZnVuY3Rpb24gc3VwcG9ydHNWYXBpZFB1c2goKTogYm9vbGVhbiB7XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIFB1c2hTdWJzY3JpcHRpb25PcHRpb25zICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIFB1c2hTdWJzY3JpcHRpb25PcHRpb25zLnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSgnYXBwbGljYXRpb25TZXJ2ZXJLZXknKVxuICApO1xufVxuLyogRSBOIEQgKi9cblxuZnVuY3Rpb24gaGFuZGxlT25FcnJvcigpOiB2b2lkIHtcbiAgaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQgPSB0cnVlO1xuICBwZW5kaW5nSW5pdFJlamVjdD8uKG5ldyBFcnJvcignT25lU2lnbmFsIHNjcmlwdCBmYWlsZWQgdG8gbG9hZC4nKSk7XG4gIHBlbmRpbmdJbml0UmVqZWN0ID0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBhZGRTREtTY3JpcHQoc2NyaXB0U3JjPzogc3RyaW5nKTogdm9pZCB7XG4gIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChPTkVTSUdOQUxfU0RLX0lEKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICBzY3JpcHQuaWQgPSBPTkVTSUdOQUxfU0RLX0lEO1xuICBzY3JpcHQuZGVmZXIgPSB0cnVlO1xuICBzY3JpcHQuc3JjID0gc2NyaXB0U3JjIHx8IERFRkFVTFRfU0NSSVBUX1NSQztcblxuICAvLyBBbHdheXMgcmVzb2x2ZSB3aGV0aGVyIG9yIG5vdCB0aGUgc2NyaXB0IGlzIHN1Y2Nlc3NmdWxseSBpbml0aWFsaXplZC5cbiAgLy8gVGhpcyBpcyBpbXBvcnRhbnQgZm9yIHVzZXJzIHdobyBtYXkgYmxvY2sgY2RuLm9uZXNpZ25hbC5jb20gdy8gYWRibG9jay5cbiAgc2NyaXB0Lm9uZXJyb3IgPSAoKSA9PiB7XG4gICAgaGFuZGxlT25FcnJvcigpO1xuICB9O1xuXG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBPbmVTaWduYWxEZWZlcnJlZD86IE9uZVNpZ25hbERlZmVycmVkTG9hZGVkQ2FsbGJhY2tbXTtcbiAgICBPbmVTaWduYWw/OiBJT25lU2lnbmFsT25lU2lnbmFsO1xuICAgIHNhZmFyaT86IHtcbiAgICAgIHB1c2hOb3RpZmljYXRpb246IGFueTtcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU9uZVNpZ25hbE9uZVNpZ25hbCB7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE9uZVNpZ25hbCBpbXBsZW1lbnRzIElPbmVTaWduYWxPbmVTaWduYWwge1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIC8qIFAgVSBCIEwgSSBDICovXG5cbiAgLyoqXG4gICAqIEBQdWJsaWNBcGlcbiAgICovXG4gIGluaXQob3B0aW9uczogSUluaXRPYmplY3QpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAoaXNPbmVTaWduYWxJbml0aWFsaXplZCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGBPbmVTaWduYWwgaXMgYWxyZWFkeSBpbml0aWFsaXplZC5gKTtcbiAgICB9XG5cbiAgICBpZiAoIW9wdGlvbnMgfHwgIW9wdGlvbnMuYXBwSWQgfHwgaXNNaXNzaW5nKG9wdGlvbnMuYXBwSWQsICdpbml0OiBhcHBJZCcpKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoJ1lvdSBuZWVkIHRvIHByb3ZpZGUgeW91ciBPbmVTaWduYWwgYXBwSWQuJyk7XG4gICAgfVxuXG4gICAgaWYgKCFkb2N1bWVudCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGBEb2N1bWVudCBpcyBub3QgZGVmaW5lZC5gKTtcbiAgICB9XG5cbiAgICAvLyBSZXF1aXJlZDogdGhlIENETiBzY3JpcHQgc2lsZW50bHkgZXhpdHMgb24gdW5zdXBwb3J0ZWQgYnJvd3NlcnMgd2l0aG91dFxuICAgIC8vIGRyYWluaW5nIE9uZVNpZ25hbERlZmVycmVkLCBzbyBpbml0KCkgd291bGQgaGFuZyBmb3JldmVyIG90aGVyd2lzZS5cbiAgICBpZiAoIWlzUHVzaE5vdGlmaWNhdGlvbnNTdXBwb3J0ZWQoKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFxuICAgICAgICBuZXcgRXJyb3IoJ1RoaXMgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IFdlYiBQdXNoIG5vdGlmaWNhdGlvbnMuJyksXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBib3RoIGRpc2FibGVkIGFuZCBkaXNhYmxlIGtleXMgZm9yIHdlbGNvbWUgbm90aWZpY2F0aW9uXG4gICAgaWYgKG9wdGlvbnMud2VsY29tZU5vdGlmaWNhdGlvbj8uZGlzYWJsZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgb3B0aW9ucy53ZWxjb21lTm90aWZpY2F0aW9uLmRpc2FibGUgPSBvcHRpb25zLndlbGNvbWVOb3RpZmljYXRpb24uZGlzYWJsZWQ7XG4gICAgfVxuXG4gICAgYWRkU0RLU2NyaXB0KG9wdGlvbnMuc2NyaXB0U3JjKTtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBwZW5kaW5nSW5pdFJlamVjdCA9IHJlamVjdDtcbiAgICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgICAgIG9uZVNpZ25hbFxuICAgICAgICAgIC5pbml0KG9wdGlvbnMpXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgaXNPbmVTaWduYWxJbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgICAgICBwZW5kaW5nSW5pdFJlamVjdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICBwZW5kaW5nSW5pdFJlamVjdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuXHRVc2VyID0gVXNlck5hbWVzcGFjZTtcblx0U2Vzc2lvbiA9IFNlc3Npb25OYW1lc3BhY2U7XG5cdERlYnVnID0gRGVidWdOYW1lc3BhY2U7XG5cdFNsaWRlZG93biA9IFNsaWRlZG93bk5hbWVzcGFjZTtcblx0Tm90aWZpY2F0aW9ucyA9IE5vdGlmaWNhdGlvbnNOYW1lc3BhY2U7XG5cdGxvZ2luID0gb25lU2lnbmFsTG9naW47XG5cdGxvZ291dCA9IG9uZVNpZ25hbExvZ291dDtcblx0c2V0Q29uc2VudEdpdmVuID0gb25lU2lnbmFsU2V0Q29uc2VudEdpdmVuO1xuXHRzZXRDb25zZW50UmVxdWlyZWQgPSBvbmVTaWduYWxTZXRDb25zZW50UmVxdWlyZWQ7XG59XG4iXX0=