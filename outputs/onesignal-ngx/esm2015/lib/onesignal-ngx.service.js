import { __awaiter } from "tslib";
/**
 * Returns true and logs when [value] is null, empty, or contains a null byte.
 * Whitespace is still a value.
 */
function isMissing(value, api) {
    // A NUL cannot be stored in a text column, so it is never a usable value.
    if (typeof value === 'string' && value.includes('\u0000')) {
        console.error('[OneSignal] ' + api + ' contains a null byte');
        return true;
    }
    if (typeof value === 'string' && value.length > 0)
        return false;
    console.error('[OneSignal] ' + api + ' is required');
    return true;
}
function hasMissingItems(values, api) {
    if (!Array.isArray(values))
        return isMissing(values, api);
    return values.some((value) => isMissing(value, api));
}
/**
 * With [allowEmptyValue], "" and a value containing a null byte are kept.
 * A null value is still rejected.
 */
function hasMissingEntries(values, api, allowEmptyValue = false) {
    if (values == null || typeof values !== 'object' || Array.isArray(values)) {
        return isMissing(values, api);
    }
    return Object.entries(values).some(([key, item]) => {
        if (isMissing(key, api + ': key'))
            return true;
        if (allowEmptyValue)
            return item == null && isMissing(item, api + ': value');
        return isMissing(item, api + ': value');
    });
}
function keepsLanguage(language) {
    if (typeof language !== 'string') {
        console.error('[OneSignal] setLanguage: language is required');
        return false;
    }
    if (language.includes('\u0000')) {
        console.error('[OneSignal] setLanguage: language contains a null byte');
        return false;
    }
    return true;
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
    if (hasMissingEntries(aliases, 'addAliases'))
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
    if (hasMissingItems(labels, 'removeAliases: label'))
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
    if (isMissing(key, 'addTag: key') || (value == null && isMissing(value, 'addTag: value')))
        return;
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
        oneSignal.User.addTag(key, value);
    });
}
function userAddTags(tags) {
    var _a;
    if (hasMissingEntries(tags, 'addTags', true))
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
    if (hasMissingItems(keys, 'removeTags: key'))
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
    if (!keepsLanguage(language))
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25lc2lnbmFsLW5neC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvb25lc2lnbmFsLW5neC9zcmMvbGliL29uZXNpZ25hbC1uZ3guc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBaWFBOzs7R0FHRztBQUNILFNBQVMsU0FBUyxDQUFDLEtBQWMsRUFBRSxHQUFXO0lBQzVDLDBFQUEwRTtJQUMxRSxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQ3pELE9BQU8sQ0FBQyxLQUFLLENBQUMsY0FBYyxHQUFHLEdBQUcsR0FBRyx1QkFBdUIsQ0FBQyxDQUFDO1FBQzlELE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFDRCxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUM7UUFBRSxPQUFPLEtBQUssQ0FBQztJQUNoRSxPQUFPLENBQUMsS0FBSyxDQUFDLGNBQWMsR0FBRyxHQUFHLEdBQUcsY0FBYyxDQUFDLENBQUM7SUFDckQsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDO0FBRUQsU0FBUyxlQUFlLENBQUMsTUFBZSxFQUFFLEdBQVc7SUFDbkQsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1FBQUUsT0FBTyxTQUFTLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzFELE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3ZELENBQUM7QUFFRDs7O0dBR0c7QUFDSCxTQUFTLGlCQUFpQixDQUN4QixNQUFlLEVBQ2YsR0FBVyxFQUNYLGVBQWUsR0FBRyxLQUFLO0lBRXZCLElBQUksTUFBTSxJQUFJLElBQUksSUFBSSxPQUFP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QUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxFQUFFO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7O1lBekRGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgQXV0b1Byb21wdE9wdGlvbnMgeyBmb3JjZT86IGJvb2xlYW47IGZvcmNlU2xpZGVkb3duT3Zlck5hdGl2ZT86IGJvb2xlYW47IHNsaWRlZG93blByb21wdE9wdGlvbnM/OiBJT25lU2lnbmFsQXV0b1Byb21wdE9wdGlvbnM7IH1cbmV4cG9ydCBpbnRlcmZhY2UgSU9uZVNpZ25hbEF1dG9Qcm9tcHRPcHRpb25zIHsgZm9yY2U/OiBib29sZWFuOyBmb3JjZVNsaWRlZG93bk92ZXJOYXRpdmU/OiBib29sZWFuOyBpc0luVXBkYXRlTW9kZT86IGJvb2xlYW47IGNhdGVnb3J5T3B0aW9ucz86IElPbmVTaWduYWxDYXRlZ29yaWVzOyB9XG5leHBvcnQgaW50ZXJmYWNlIElPbmVTaWduYWxDYXRlZ29yaWVzIHsgcG9zaXRpdmVVcGRhdGVCdXR0b246IHN0cmluZzsgbmVnYXRpdmVVcGRhdGVCdXR0b246IHN0cmluZzsgc2F2aW5nQnV0dG9uVGV4dDogc3RyaW5nOyBlcnJvckJ1dHRvblRleHQ6IHN0cmluZzsgdXBkYXRlTWVzc2FnZTogc3RyaW5nOyB0YWdzOiBJT25lU2lnbmFsVGFnQ2F0ZWdvcnlbXTsgfVxuZXhwb3J0IGludGVyZmFjZSBJT25lU2lnbmFsVGFnQ2F0ZWdvcnkgeyB0YWc6IHN0cmluZzsgbGFiZWw6IHN0cmluZzsgY2hlY2tlZD86IGJvb2xlYW47IH1cbmV4cG9ydCB0eXBlIFB1c2hTdWJzY3JpcHRpb25OYW1lc3BhY2VQcm9wZXJ0aWVzID0geyBpZDogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZDsgdG9rZW46IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQ7IG9wdGVkSW46IGJvb2xlYW47IH07XG5leHBvcnQgdHlwZSBTdWJzY3JpcHRpb25DaGFuZ2VFdmVudCA9IHsgcHJldmlvdXM6IFB1c2hTdWJzY3JpcHRpb25OYW1lc3BhY2VQcm9wZXJ0aWVzOyBjdXJyZW50OiBQdXNoU3Vic2NyaXB0aW9uTmFtZXNwYWNlUHJvcGVydGllczsgfTtcbmV4cG9ydCB0eXBlIE5vdGlmaWNhdGlvbkV2ZW50TmFtZSA9ICdjbGljaycgfCAnZm9yZWdyb3VuZFdpbGxEaXNwbGF5JyB8ICdkaXNtaXNzJyB8ICdwZXJtaXNzaW9uQ2hhbmdlJyB8ICdwZXJtaXNzaW9uUHJvbXB0RGlzcGxheSc7XG5leHBvcnQgdHlwZSBTbGlkZWRvd25FdmVudE5hbWUgPSAnc2xpZGVkb3duQWxsb3dDbGljaycgfCAnc2xpZGVkb3duQ2FuY2VsQ2xpY2snIHwgJ3NsaWRlZG93bkNsb3NlZCcgfCAnc2xpZGVkb3duUXVldWVkJyB8ICdzbGlkZWRvd25TaG93bic7XG5leHBvcnQgdHlwZSBPbmVTaWduYWxEZWZlcnJlZExvYWRlZENhbGxiYWNrID0gKG9uZXNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4gdm9pZDtcbmV4cG9ydCBpbnRlcmZhY2UgSU9TTm90aWZpY2F0aW9uIHtcbiAgLyoqXG4gICAqIFRoZSBPbmVTaWduYWwgbm90aWZpY2F0aW9uIGlkO1xuICAgKiAgLSBQcmltYXJ5IGlkIG9uIE9uZVNpZ25hbCdzIFJFU1QgQVBJIGFuZCBkYXNoYm9hcmRcbiAgICovXG4gIHJlYWRvbmx5IG5vdGlmaWNhdGlvbklkOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFZpc2libGUgdGl0bGUgdGV4dCBvbiB0aGUgbm90aWZpY2F0aW9uXG4gICAqL1xuICByZWFkb25seSB0aXRsZT86IHN0cmluZztcblxuICAvKipcbiAgICogVmlzaWJsZSBib2R5IHRleHQgb24gdGhlIG5vdGlmaWNhdGlvblxuICAgKi9cbiAgcmVhZG9ubHkgYm9keTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBWaXNpYmxlIGljb24gdGhlIG5vdGlmaWNhdGlvbjsgVVJMIGZvcm1hdFxuICAgKi9cbiAgcmVhZG9ubHkgaWNvbj86IHN0cmluZztcblxuICAvKipcbiAgICogVmlzaWJsZSBzbWFsbCBiYWRnZUljb24gdGhhdCBkaXNwbGF5cyBvbiBzb21lIGRldmljZXM7IFVSTCBmb3JtYXRcbiAgICogRXhhbXBsZTogT24gQW5kcm9pZCdzIHN0YXR1cyBiYXJcbiAgICovXG4gIHJlYWRvbmx5IGJhZGdlSWNvbj86IHN0cmluZztcblxuICAvKipcbiAgICogVmlzaWJsZSBpbWFnZSBvbiB0aGUgbm90aWZpY2F0aW9uOyBVUkwgZm9ybWF0XG4gICAqL1xuICByZWFkb25seSBpbWFnZT86IHN0cmluZztcblxuICAvKipcbiAgICogVmlzaWJsZSBidXR0b25zIG9uIHRoZSBub3RpZmljYXRpb25cbiAgICovXG4gIHJlYWRvbmx5IGFjdGlvbkJ1dHRvbnM/OiBJT1NOb3RpZmljYXRpb25BY3Rpb25CdXR0b25bXTtcblxuICAvKipcbiAgICogSWYgdGhpcyB2YWx1ZSBpcyB0aGUgc2FtZSBhcyBleGlzdGluZyBub3RpZmljYXRpb24sIGl0IHdpbGwgcmVwbGFjZSBpdFxuICAgKiBDYW4gYmUgc2V0IHdoZW4gY3JlYXRpbmcgdGhlIG5vdGlmaWNhdGlvbiB3aXRoIFwiV2ViIFB1c2ggVG9waWNcIiBvbiB0aGUgZGFzaGJvYXJkXG4gICAqIG9yIHdlYl9wdXNoX3RvcGljIGZyb20gdGhlIFJFU1QgQVBJLlxuICAgKi9cbiAgcmVhZG9ubHkgdG9waWM/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEN1c3RvbSBvYmplY3QgdGhhdCB3YXMgc2VudCB3aXRoIHRoZSBub3RpZmljYXRpb247XG4gICAqIGRlZmluYWJsZSB3aGVuIGNyZWF0aW5nIHRoZSBub3RpZmljYXRpb24gZnJvbSB0aGUgT25lU2lnbmFsIFJFU1QgQVBJIG9yIGRhc2hib2FyZFxuICAgKi9cbiAgcmVhZG9ubHkgYWRkaXRpb25hbERhdGE/OiBvYmplY3Q7XG5cbiAgLyoqXG4gICAqIFVSTCB0byBvcGVuIHdoZW4gY2xpY2tpbmcgb3IgdGFwcGluZyBvbiB0aGUgbm90aWZpY2F0aW9uXG4gICAqL1xuICByZWFkb25seSBsYXVuY2hVUkw/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENvbmZpcm0gdGhlIHB1c2ggd2FzIHJlY2VpdmVkIGJ5IHJlcG9ydGluZyBiYWNrIHRvIE9uZVNpZ25hbFxuICAgKi9cbiAgcmVhZG9ubHkgY29uZmlybURlbGl2ZXJ5OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElPU05vdGlmaWNhdGlvbkFjdGlvbkJ1dHRvbiB7XG4gIC8qKlxuICAgKiBBbnkgdW5pcXVlIGlkZW50aWZpZXIgdG8gcmVwcmVzZW50IHdoaWNoIGJ1dHRvbiB3YXMgY2xpY2tlZC4gVGhpcyBpcyB0eXBpY2FsbHkgcGFzc2VkIGJhY2sgdG8gdGhlIHNlcnZpY2Ugd29ya2VyXG4gICAqIGFuZCBob3N0IHBhZ2UgdGhyb3VnaCBldmVudHMgdG8gaWRlbnRpZnkgd2hpY2ggYnV0dG9uIHdhcyBjbGlja2VkLlxuICAgKiBlLmcuICdsaWtlLWJ1dHRvbidcbiAgICovXG4gIHJlYWRvbmx5IGFjdGlvbklkOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgbm90aWZpY2F0aW9uIGFjdGlvbiBidXR0b24ncyB0ZXh0LlxuICAgKi9cbiAgcmVhZG9ubHkgdGV4dDogc3RyaW5nO1xuICAvKipcbiAgICogQSB2YWxpZCBwdWJsaWNseSByZWFjaGFibGUgSFRUUFMgVVJMIHRvIGFuIGltYWdlLlxuICAgKi9cbiAgcmVhZG9ubHkgaWNvbj86IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBVUkwgdG8gb3BlbiB0aGUgd2ViIGJyb3dzZXIgdG8gd2hlbiB0aGlzIGFjdGlvbiBidXR0b24gaXMgY2xpY2tlZC5cbiAgICovXG4gIHJlYWRvbmx5IGxhdW5jaFVSTD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRGlzcGxheWFibGVPU05vdGlmaWNhdGlvbiBleHRlbmRzIElPU05vdGlmaWNhdGlvbiB7XG4gIGRpc3BsYXkoKTogdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOb3RpZmljYXRpb25DbGlja1Jlc3VsdCB7XG4gIHJlYWRvbmx5IGFjdGlvbklkPzogc3RyaW5nO1xuICByZWFkb25seSB1cmw/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCB0eXBlIE5vdGlmaWNhdGlvbkV2ZW50VHlwZU1hcCA9IHtcbiAgJ2NsaWNrJzogTm90aWZpY2F0aW9uQ2xpY2tFdmVudDtcbiAgJ2ZvcmVncm91bmRXaWxsRGlzcGxheSc6IE5vdGlmaWNhdGlvbkZvcmVncm91bmRXaWxsRGlzcGxheUV2ZW50O1xuICAnZGlzbWlzcyc6IE5vdGlmaWNhdGlvbkRpc21pc3NFdmVudDtcbiAgJ3Blcm1pc3Npb25DaGFuZ2UnOiBib29sZWFuO1xuICAncGVybWlzc2lvblByb21wdERpc3BsYXknOiB2b2lkO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBOb3RpZmljYXRpb25Gb3JlZ3JvdW5kV2lsbERpc3BsYXlFdmVudCB7XG4gIHJlYWRvbmx5IG5vdGlmaWNhdGlvbjogSURpc3BsYXlhYmxlT1NOb3RpZmljYXRpb247XG4gIHByZXZlbnREZWZhdWx0KCk6IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm90aWZpY2F0aW9uRGlzbWlzc0V2ZW50IHtcbiAgbm90aWZpY2F0aW9uOiBJT1NOb3RpZmljYXRpb247XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm90aWZpY2F0aW9uQ2xpY2tFdmVudCB7XG4gIHJlYWRvbmx5IG5vdGlmaWNhdGlvbjogSU9TTm90aWZpY2F0aW9uO1xuICByZWFkb25seSByZXN1bHQ6IE5vdGlmaWNhdGlvbkNsaWNrUmVzdWx0O1xufVxuXG5leHBvcnQgdHlwZSBVc2VyQ2hhbmdlRXZlbnQgPSB7XG4gIGN1cnJlbnQ6IFVzZXJOYW1lc3BhY2VQcm9wZXJ0aWVzO1xufTtcbmV4cG9ydCB0eXBlIFVzZXJOYW1lc3BhY2VQcm9wZXJ0aWVzID0ge1xuICBvbmVzaWduYWxJZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBleHRlcm5hbElkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIElJbml0T2JqZWN0IHtcbiAgYXBwSWQ6IHN0cmluZztcbiAgcmVxdWlyZXNVc2VyUHJpdmFjeUNvbnNlbnQ/OiBib29sZWFuO1xuICBzYWZhcmlfd2ViX2lkPzogc3RyaW5nO1xuICBzdWJkb21haW5OYW1lPzogc3RyaW5nO1xuICBwcm9tcHRPcHRpb25zPzoge1xuICAgIHNsaWRlZG93bjoge1xuICAgICAgcHJvbXB0czoge1xuICAgICAgICAvKipcbiAgICAgICAgICogV2hldGhlciB0byBhdXRvbWF0aWNhbGx5IGRpc3BsYXkgdGhlIHByb21wdC5cbiAgICAgICAgICogYHRydWVgIHdpbGwgZGlzcGxheSB0aGUgcHJvbXB0IGJhc2VkIG9uIHRoZSBkZWxheSBvcHRpb25zLlxuICAgICAgICAgKiBgZmFsc2VgIHdpbGwgcHJldmVudCB0aGUgcHJvbXB0IGZyb20gZGlzcGxheWluZyB1bnRpbCB0aGUgU2xpZGVkb3ducyBtZXRob2RzIGFyZSB1c2VkLlxuICAgICAgICAgKi9cbiAgICAgICAgYXV0b1Byb21wdDogYm9vbGVhbjtcblxuICAgICAgICAvKipcbiAgICAgICAgICogT25seSBhdmFpbGFibGUgZm9yIHR5cGU6IGNhdGVnb3J5LiBVcCB0byAxMCBjYXRlZ29yaWVzLlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiAgY2F0ZWdvcmllczogW3sgdGFnOiAnbG9jYWxfbmV3cycsIGxhYmVsOiAnTG9jYWwgTmV3cycgfV0gLy8gVGhlIHVzZXIgd2lsbCBiZSB0YWdnZWQgd2l0aCBsb2NhbF9uZXdzIGJ1dCB3aWxsIHNlZSBcIkxvY2FsIE5ld3NcIiBpbiB0aGUgcHJvbXB0LlxuICAgICAgICAgKi9cbiAgICAgICAgY2F0ZWdvcmllcz86IHtcbiAgICAgICAgICAvKiogU2hvdWxkIGlkZW50aWZ5IHRoZSBhY3Rpb24uICovXG4gICAgICAgICAgdGFnOiBzdHJpbmc7XG5cbiAgICAgICAgICAvKiogV2hhdCB0aGUgdXNlciB3aWxsIHNlZS4gKi9cbiAgICAgICAgICBsYWJlbDogc3RyaW5nO1xuICAgICAgICB9W107XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBkZWxheSBvcHRpb25zIGZvciB0aGUgcHJvbXB0LlxuICAgICAgICAgKiBAZXhhbXBsZSBkZWxheTogeyBwYWdlVmlld3M6IDMsIHRpbWVEZWxheTogMjAgfSAvLyBUaGUgdXNlciB3aWxsIG5vdCBiZSBzaG93biB0aGUgcHJvbXB0IHVudGlsIDIwIHNlY29uZHMgYWZ0ZXIgdGhlIDNyZCBwYWdlIHZpZXcuXG4gICAgICAgICAqL1xuICAgICAgICBkZWxheToge1xuICAgICAgICAgIC8qKiBUaGUgbnVtYmVyIG9mIHBhZ2VzIGEgdXNlciBuZWVkcyB0byB2aXNpdCBiZWZvcmUgdGhlIHByb21wdCBpcyBkaXNwbGF5ZWQuICovXG4gICAgICAgICAgcGFnZVZpZXdzPzogbnVtYmVyO1xuXG4gICAgICAgICAgLyoqIFRoZSBudW1iZXIgb2Ygc2Vjb25kcyBhIHVzZXIgbmVlZHMgdG8gd2FpdCBiZWZvcmUgdGhlIHByb21wdCBpcyBkaXNwbGF5ZWQuQm90aCBvcHRpb25zIG11c3QgYmUgc2F0aXNmaWVkIGZvciB0aGUgcHJvbXB0IHRvIGRpc3BsYXkgKi9cbiAgICAgICAgICB0aW1lRGVsYXk/OiBudW1iZXI7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB0ZXh0IHRvIGRpc3BsYXkgaW4gdGhlIHByb21wdC5cbiAgICAgICAgICovXG4gICAgICAgIHRleHQ/OiB7XG4gICAgICAgICAgLyoqIFRoZSBjYWxsb3V0IGFza2luZyB0aGUgdXNlciB0byBvcHQtaW4uIFVwIHRvIDkwIGNoYXJhY3RlcnMuICovXG4gICAgICAgICAgYWN0aW9uTWVzc2FnZT86IHN0cmluZztcblxuICAgICAgICAgIC8qKiBUcmlnZ2VycyB0aGUgb3B0LWluLiBVcCB0byAxNSBjaGFyYWN0ZXJzLiAqL1xuICAgICAgICAgIGFjY2VwdEJ1dHRvbj86IHN0cmluZztcblxuICAgICAgICAgIC8qKiBDYW5jZWxzIG9wdC1pbi4gVXAgdG8gMTUgY2hhcmFjdGVycy4gKi9cbiAgICAgICAgICBjYW5jZWxCdXR0b24/OiBzdHJpbmc7XG5cbiAgICAgICAgICAvKiogVGhlIG1lc3NhZ2Ugb2YgdGhlIGNvbmZpcm1hdGlvbiBwcm9tcHQgZGlzcGxheWVkIGFmdGVyIHRoZSBlbWFpbCBhbmQvb3IgcGhvbmUgbnVtYmVyIGlzIHByb3ZpZGVkLiBVcCB0byA5MCBjaGFyYWN0ZXJzLiAqL1xuICAgICAgICAgIGNvbmZpcm1NZXNzYWdlPzogc3RyaW5nO1xuXG4gICAgICAgICAgLyoqIElkZW50aWZpZXMgdGhlIGVtYWlsIHRleHQgZmllbGQuIFVwIHRvIDE1IGNoYXJhY3RlcnMuICovXG4gICAgICAgICAgZW1haWxMYWJlbD86IHN0cmluZztcblxuICAgICAgICAgIC8qKiBDYW5jZWxzIHRoZSBjYXRlZ29yeSB1cGRhdGUuIFVwIHRvIDE1IGNoYXJhY3RlcnMuICovXG4gICAgICAgICAgbmVnYXRpdmVVcGRhdGVCdXR0b24/OiBzdHJpbmc7XG5cbiAgICAgICAgICAvKiogU2F2ZXMgdGhlIHVwZGF0ZWQgY2F0ZWdvcnkgdGFncy4gVXAgdG8gMTUgY2hhcmFjdGVycy4gKi9cbiAgICAgICAgICBwb3NpdGl2ZVVwZGF0ZUJ1dHRvbj86IHN0cmluZztcblxuICAgICAgICAgIC8qKiBJZGVudGlmaWVzIHRoZSBwaG9uZSBudW1iZXIgdGV4dCBmaWVsZC4gVXAgdG8gMTUgY2hhcmFjdGVycy4gKi9cbiAgICAgICAgICBzbXNMYWJlbD86IHN0cmluZztcblxuICAgICAgICAgIC8qKiBBIGRpZmZlcmVudCBtZXNzYWdlIHNob3duIHRvIHN1YnNjcmliZXJzIHByZXNlbnRlZCB0aGUgcHJvbXB0IGFnYWluIHRvIHVwZGF0ZSBjYXRlZ29yaWVzLiBVcCB0byA5MCBjaGFyYWN0ZXJzLiAqL1xuICAgICAgICAgIHVwZGF0ZU1lc3NhZ2U/OiBzdHJpbmc7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB0eXBlIG9mIHByb21wdCB0byBkaXNwbGF5LlxuICAgICAgICAgKiBgcHVzaGAgd2hpY2ggaXMgdGhlIFNsaWRlIFByb21wdCB3aXRob3V0IGNhdGVnb3JpZXMuXG4gICAgICAgICAqIGBjYXRlZ29yeWAgd2hpY2ggaXMgdGhlIFNsaWRlIFByb21wdCB3aXRoIGNhdGVnb3JpZXMuXG4gICAgICAgICAqIGBzbXNgIG9ubHkgYXNrcyBmb3IgcGhvbmUgbnVtYmVyLlxuICAgICAgICAgKiBgZW1haWxgIG9ubHkgYXNrcyBmb3IgZW1haWwgYWRkcmVzcy5cbiAgICAgICAgICogYHNtc0FuZEVtYWlsYCBhc2tzIGZvciBib3RoIHBob25lIG51bWJlciBhbmQgZW1haWwgYWRkcmVzcy5cbiAgICAgICAgICovXG4gICAgICAgIHR5cGU6ICdwdXNoJyB8ICdjYXRlZ29yeScgfCAnc21zJyB8ICdlbWFpbCcgfCAnc21zQW5kRW1haWwnO1xuICAgICAgfVtdO1xuICAgIH07XG4gIH07XG4gIHdlbGNvbWVOb3RpZmljYXRpb24/OiB7XG4gICAgLyoqXG4gICAgICogRGlzYWJsZXMgc2VuZGluZyBhIHdlbGNvbWUgbm90aWZpY2F0aW9uIHRvIG5ldyBzaXRlIHZpc2l0b3JzLiBJZiB5b3Ugd2FudCB0byBkaXNhYmxlIHdlbGNvbWUgbm90aWZpY2F0aW9ucywgdGhpcyBpcyB0aGUgb25seSBvcHRpb24geW91IG5lZWQuXG4gICAgICogQGRlcHJlY2F0ZWQgVXNlICdkaXNhYmxlJyBpbnN0ZWFkLiBUaGlzIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSB2ZXJzaW9uLlxuICAgICAqL1xuICAgIGRpc2FibGVkPzogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIERpc2FibGVzIHNlbmRpbmcgYSB3ZWxjb21lIG5vdGlmaWNhdGlvbiB0byBuZXcgc2l0ZSB2aXNpdG9ycy4gSWYgeW91IHdhbnQgdG8gZGlzYWJsZSB3ZWxjb21lIG5vdGlmaWNhdGlvbnMsIHRoaXMgaXMgdGhlIG9ubHkgb3B0aW9uIHlvdSBuZWVkLlxuICAgICAqL1xuICAgIGRpc2FibGU/OiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHdlbGNvbWUgbm90aWZpY2F0aW9uJ3MgbWVzc2FnZS4gWW91IGNhbiBsb2NhbGl6ZSB0aGlzIHRvIHlvdXIgb3duIGxhbmd1YWdlLlxuICAgICAqIElmIGxlZnQgYmxhbmsgb3Igc2V0IHRvIGJsYW5rLCB0aGUgZGVmYXVsdCBvZiAnVGhhbmtzIGZvciBzdWJzY3JpYmluZyEnIHdpbGwgYmUgdXNlZC5cbiAgICAgKi9cbiAgICBtZXNzYWdlOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgd2VsY29tZSBub3RpZmljYXRpb24ncyB0aXRsZS4gWW91IGNhbiBsb2NhbGl6ZSB0aGlzIHRvIHlvdXIgb3duIGxhbmd1YWdlLiBJZiBub3Qgc2V0LCBvciBsZWZ0IGJsYW5rLCB0aGUgc2l0ZSdzIHRpdGxlIHdpbGwgYmUgdXNlZC5cbiAgICAgKiBTZXQgdG8gb25lIHNwYWNlICcgJyB0byBjbGVhciB0aGUgdGl0bGUsIGFsdGhvdWdoIHRoaXMgaXMgbm90IHJlY29tbWVuZGVkLlxuICAgICAqL1xuICAgIHRpdGxlPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQnkgZGVmYXVsdCwgY2xpY2tpbmcgdGhlIHdlbGNvbWUgbm90aWZpY2F0aW9uIGRvZXMgbm90IG9wZW4gYW55IGxpbmsuXG4gICAgICogVGhpcyBpcyByZWNvbW1lbmRlZCBiZWNhdXNlIHRoZSB1c2VyIGhhcyBqdXN0IHZpc2l0ZWQgeW91ciBzaXRlIGFuZCBzdWJzY3JpYmVkLlxuICAgICAqL1xuICAgIHVybD86IHN0cmluZztcbiAgfTtcblxuICAvKipcbiAgICogV2lsbCBlbmFibGUgY3VzdG9taXphdGlvbiBvZiB0aGUgbm90aWZ5L3N1YnNjcmlwdGlvbiBiZWxsIGJ1dHRvbi5cbiAgICovXG4gIG5vdGlmeUJ1dHRvbj86IHtcbiAgICAvKipcbiAgICAgKiBBIGZ1bmN0aW9uIHlvdSBkZWZpbmUgdGhhdCByZXR1cm5zIHRydWUgdG8gc2hvdyB0aGUgU3Vic2NyaXB0aW9uIEJlbGwsIG9yIGZhbHNlIHRvIGhpZGUgaXQuXG4gICAgICogVHlwaWNhbGx5IHVzZWQgdGhlIGhpZGUgdGhlIFN1YnNjcmlwdGlvbiBCZWxsIGFmdGVyIHRoZSB1c2VyIGlzIHN1YnNjcmliZWQuXG4gICAgICogVGhpcyBmdW5jdGlvbiBpcyBub3QgcmUtZXZhbHVhdGVkIG9uIGV2ZXJ5IHN0YXRlIGNoYW5nZTsgdGhpcyBmdW5jdGlvbiBpcyBvbmx5IGV2YWx1YXRlZCBvbmNlIHdoZW4gdGhlIFN1YnNjcmlwdGlvbiBCZWxsIGJlZ2lucyB0byBzaG93LlxuICAgICAqL1xuICAgIGRpc3BsYXlQcmVkaWNhdGU/OiAoKSA9PiBib29sZWFuIHwgUHJvbWlzZTxib29sZWFuPjtcblxuICAgIC8qKlxuICAgICAqIEVuYWJsZSB0aGUgU3Vic2NyaXB0aW9uIEJlbGwuIFRoZSBTdWJzY3JpcHRpb24gQmVsbCBpcyBvdGhlcndpc2UgZGlzYWJsZWQgYnkgZGVmYXVsdC5cbiAgICAgKi9cbiAgICBlbmFibGU/OiBib29sZWFuO1xuXG4gICAgLyoqIFNwZWNpZnkgQ1NTLXZhbGlkIHBpeGVsIG9mZnNldHMgdXNpbmcgYm90dG9tLCBsZWZ0LCBhbmQgcmlnaHQuICovXG4gICAgb2Zmc2V0PzogeyBib3R0b206IHN0cmluZzsgbGVmdDogc3RyaW5nOyByaWdodDogc3RyaW5nIH07XG5cbiAgICAvKipcbiAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBTdWJzY3JpcHRpb24gQmVsbCB3aWxsIGRpc3BsYXkgYW4gaWNvbiB0aGF0IHRoZXJlIGlzIDEgdW5yZWFkIG1lc3NhZ2UuXG4gICAgICogV2hlbiBob3ZlcmluZyBvdmVyIHRoZSBTdWJzY3JpcHRpb24gQmVsbCwgdGhlIHVzZXIgd2lsbCBzZWUgY3VzdG9tIHRleHQgc2V0IGJ5IG1lc3NhZ2UucHJlbm90aWZ5LlxuICAgICAqL1xuICAgIHByZW5vdGlmeTogYm9vbGVhbjtcblxuICAgIC8qKiBFaXRoZXIgYGJvdHRvbS1sZWZ0YCBvciBgYm90dG9tLXJpZ2h0YC4gVGhlIFN1YnNjcmlwdGlvbiBCZWxsIHdpbGwgYmUgZml4ZWQgYXQgdGhpcyBsb2NhdGlvbiBvbiB5b3VyIHBhZ2UuICovXG4gICAgcG9zaXRpb24/OiAnYm90dG9tLWxlZnQnIHwgJ2JvdHRvbS1yaWdodCc7XG5cbiAgICAvKiogIFNldCBgZmFsc2VgIHRvIGhpZGUgdGhlICdQb3dlcmVkIGJ5IE9uZVNpZ25hbCcgdGV4dCBpbiB0aGUgU3Vic2NyaXB0aW9uIEJlbGwgZGlhbG9nIHBvcHVwLiAqL1xuICAgIHNob3dDcmVkaXQ6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBUaGUgU3Vic2NyaXB0aW9uIEJlbGwgd2lsbCBpbml0aWFsbHkgYXBwZWFyIGF0IG9uZSBvZiB0aGVzZSBzaXplcywgYW5kIHRoZW4gc2hyaW5rIGRvd24gdG8gc2l6ZSBgc21hbGxgIGFmdGVyIHRoZSB1c2VyIHN1YnNjcmliZXMuXG4gICAgICovXG4gICAgc2l6ZT86ICdzbWFsbCcgfCAnbWVkaXVtJyB8ICdsYXJnZSc7XG5cbiAgICAvKiogQ3VzdG9taXplIHRoZSBTdWJzY3JpcHRpb24gQmVsbCB0ZXh0LiAqL1xuICAgIHRleHQ6IHtcbiAgICAgICdkaWFsb2cuYmxvY2tlZC5tZXNzYWdlJzogc3RyaW5nO1xuICAgICAgJ2RpYWxvZy5ibG9ja2VkLnRpdGxlJzogc3RyaW5nO1xuICAgICAgJ2RpYWxvZy5tYWluLmJ1dHRvbi5zdWJzY3JpYmUnOiBzdHJpbmc7XG4gICAgICAnZGlhbG9nLm1haW4uYnV0dG9uLnVuc3Vic2NyaWJlJzogc3RyaW5nO1xuICAgICAgJ2RpYWxvZy5tYWluLnRpdGxlJzogc3RyaW5nO1xuICAgICAgJ21lc3NhZ2UuYWN0aW9uLnJlc3Vic2NyaWJlZCc6IHN0cmluZztcbiAgICAgICdtZXNzYWdlLmFjdGlvbi5zdWJzY3JpYmVkJzogc3RyaW5nO1xuICAgICAgJ21lc3NhZ2UuYWN0aW9uLnN1YnNjcmliaW5nJzogc3RyaW5nO1xuICAgICAgJ21lc3NhZ2UuYWN0aW9uLnVuc3Vic2NyaWJlZCc6IHN0cmluZztcbiAgICAgICdtZXNzYWdlLnByZW5vdGlmeSc6IHN0cmluZztcbiAgICAgICd0aXAuc3RhdGUuYmxvY2tlZCc6IHN0cmluZztcbiAgICAgICd0aXAuc3RhdGUuc3Vic2NyaWJlZCc6IHN0cmluZztcbiAgICAgICd0aXAuc3RhdGUudW5zdWJzY3JpYmVkJzogc3RyaW5nO1xuICAgIH07XG4gIH07XG5cbiAgcGVyc2lzdE5vdGlmaWNhdGlvbj86IGJvb2xlYW47XG4gIHdlYmhvb2tzPzoge1xuICAgIC8qKlxuICAgICAqIEVuYWJsZSB0aGlzIHNldHRpbmcgb25seSBpZiB5b3VyIHNlcnZlciBoYXMgQ09SUyBlbmFibGVkIGFuZCBzdXBwb3J0cyBub24tc2ltcGxlIENPUlMgcmVxdWVzdHMuXG4gICAgICogSWYgdGhpcyBzZXR0aW5nIGlzIGRpc2FibGVkLCB5b3VyIHdlYmhvb2sgd2lsbCBub3QgbmVlZCBDT1JTIHRvIHJlY2VpdmUgZGF0YSwgYnV0IGl0IHdpbGwgbm90IHJlY2VpdmUgdGhlIGN1c3RvbSBoZWFkZXJzLlxuICAgICAqIFRoZSBzaW1wbGVzdCBvcHRpb24gaXMgdG8gbGVhdmUgaXQgZGlzYWJsZWQuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cbiAgICBjb3JzOiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogVGhpcyBldmVudCBvY2N1cnMgYWZ0ZXIgYSBub3RpZmljYXRpb24gaXMgY2xpY2tlZC5cbiAgICAgKiBAZXhhbXBsZSBodHRwczovL3NpdGUuY29tL2hvb2tcbiAgICAgKi9cbiAgICAnbm90aWZpY2F0aW9uLmNsaWNrZWQnPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogVGhpcyBldmVudCBvY2N1cnMgYWZ0ZXIgYSBub3RpZmljYXRpb24gaXMgaW50ZW50aW9uYWxseSBkaXNtaXNzZWQgYnkgdGhlIHVzZXIgKGNsaWNraW5nIHRoZSBub3RpZmljYXRpb24gYm9keSBvciBvbmUgb2YgdGhlIG5vdGlmaWNhdGlvbiBhY3Rpb24gYnV0dG9ucyBkb2VzIG5vdCB0cmlnZ2VyIHRoZSBkaXNtaXNzZWQgd2ViaG9vayksXG4gICAgICogYWZ0ZXIgYSBncm91cCBvZiBub3RpZmljYXRpb25zIGFyZSBhbGwgZGlzbWlzc2VkICh3aXRoIHRoaXMgbm90aWZpY2F0aW9uIGFzIHBhcnQgb2YgdGhhdCBncm91cCksIG9yIGFmdGVyIGEgbm90aWZpY2F0aW9uIGV4cGlyZXMgb24gaXRzIG93biB0aW1lIGFuZCBkaXNhcHBlYXJzLiBUaGlzIGV2ZW50IGlzIHN1cHBvcnRlZCBvbiBDaHJvbWUgb25seS5cbiAgICAgKiBAZXhhbXBsZSBodHRwczovL3NpdGUuY29tL2hvb2tcbiAgICAgKi9cbiAgICAnbm90aWZpY2F0aW9uLmRpc21pc3NlZCc/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGV2ZW50IG9jY3VycyBhZnRlciBhIG5vdGlmaWNhdGlvbiBpcyBkaXNwbGF5ZWQuXG4gICAgICogQGV4YW1wbGUgaHR0cHM6Ly9zaXRlLmNvbS9ob29rXG4gICAgICovXG4gICAgJ25vdGlmaWNhdGlvbi53aWxsRGlzcGxheSc/OiBzdHJpbmc7XG4gIH07XG4gIGF1dG9SZXN1YnNjcmliZT86IGJvb2xlYW47XG4gIGF1dG9SZWdpc3Rlcj86IGJvb2xlYW47XG4gIG5vdGlmaWNhdGlvbkNsaWNrSGFuZGxlck1hdGNoPzogJ2V4YWN0JyB8ICdvcmlnaW4nO1xuICBub3RpZmljYXRpb25DbGlja0hhbmRsZXJBY3Rpb24/OiAnbmF2aWdhdGUnIHwgJ2ZvY3VzJztcbiAgcGF0aD86IHN0cmluZztcbiAgc2VydmljZVdvcmtlclBhcmFtPzogeyBzY29wZTogc3RyaW5nIH07XG4gIHNlcnZpY2VXb3JrZXJQYXRoPzogc3RyaW5nO1xuICBzZXJ2aWNlV29ya2VyT3ZlcnJpZGVGb3JUeXBpY2FsPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIE92ZXJyaWRlcyB0aGUgZGVmYXVsdCBPbmVTaWduYWwgU0RLIHNjcmlwdCBVUkwuXG4gICAqIFVzZSB0aGlzIHRvIHNlbGYtaG9zdCB0aGUgU0RLIHNjcmlwdCBvbiB5b3VyIG93biBkb21haW4sIGUuZy4gdG8gY29tcGx5XG4gICAqIHdpdGggc3RyaWN0IENyb3NzLU9yaWdpbi1FbWJlZGRlci1Qb2xpY3kgKENPRVApIG9yIENvbnRlbnQtU2VjdXJpdHktUG9saWN5IChDU1ApIGhlYWRlcnMuXG4gICAqIEBkZWZhdWx0ICdodHRwczovL2Nkbi5vbmVzaWduYWwuY29tL3Nka3Mvd2ViL3YxNi9PbmVTaWduYWxTREsucGFnZS5qcydcbiAgICovXG4gIHNjcmlwdFNyYz86IHN0cmluZztcbiAgW2tleTogc3RyaW5nXTogdW5rbm93bjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJT25lU2lnbmFsT25lU2lnbmFsIHtcblx0U2xpZGVkb3duOiBJT25lU2lnbmFsU2xpZGVkb3duO1xuXHROb3RpZmljYXRpb25zOiBJT25lU2lnbmFsTm90aWZpY2F0aW9ucztcblx0U2Vzc2lvbjogSU9uZVNpZ25hbFNlc3Npb247XG5cdFVzZXI6IElPbmVTaWduYWxVc2VyO1xuXHREZWJ1ZzogSU9uZVNpZ25hbERlYnVnO1xuXHRsb2dpbihleHRlcm5hbElkOiBzdHJpbmcsIGp3dFRva2VuPzogc3RyaW5nKTogUHJvbWlzZTx2b2lkPjtcblx0bG9nb3V0KCk6IFByb21pc2U8dm9pZD47XG5cdGluaXQob3B0aW9uczogSUluaXRPYmplY3QpOiBQcm9taXNlPHZvaWQ+O1xuXHRzZXRDb25zZW50R2l2ZW4oY29uc2VudDogYm9vbGVhbik6IFByb21pc2U8dm9pZD47XG5cdHNldENvbnNlbnRSZXF1aXJlZChyZXF1aXJlc0NvbnNlbnQ6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+O1xufVxuZXhwb3J0IGludGVyZmFjZSBJT25lU2lnbmFsTm90aWZpY2F0aW9ucyB7XG5cdHBlcm1pc3Npb25OYXRpdmU6IE5vdGlmaWNhdGlvblBlcm1pc3Npb247XG5cdHBlcm1pc3Npb246IGJvb2xlYW47XG5cdHNldERlZmF1bHRVcmwodXJsOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+O1xuXHRzZXREZWZhdWx0VGl0bGUodGl0bGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD47XG5cdGlzUHVzaFN1cHBvcnRlZCgpOiBib29sZWFuO1xuXHRyZXF1ZXN0UGVybWlzc2lvbigpOiBQcm9taXNlPGJvb2xlYW4+O1xuXHRhZGRFdmVudExpc3RlbmVyPEsgZXh0ZW5kcyBOb3RpZmljYXRpb25FdmVudE5hbWU+KGV2ZW50OiBLLCBsaXN0ZW5lcjogKG9iajogTm90aWZpY2F0aW9uRXZlbnRUeXBlTWFwW0tdKSA9PiB2b2lkKTogdm9pZDtcblx0cmVtb3ZlRXZlbnRMaXN0ZW5lcjxLIGV4dGVuZHMgTm90aWZpY2F0aW9uRXZlbnROYW1lPihldmVudDogSywgbGlzdGVuZXI6IChvYmo6IE5vdGlmaWNhdGlvbkV2ZW50VHlwZU1hcFtLXSkgPT4gdm9pZCk6IHZvaWQ7XG59XG5leHBvcnQgaW50ZXJmYWNlIElPbmVTaWduYWxTbGlkZWRvd24ge1xuXHRwcm9tcHRQdXNoKG9wdGlvbnM/OiBBdXRvUHJvbXB0T3B0aW9ucyk6IFByb21pc2U8dm9pZD47XG5cdHByb21wdFB1c2hDYXRlZ29yaWVzKG9wdGlvbnM/OiBBdXRvUHJvbXB0T3B0aW9ucyk6IFByb21pc2U8dm9pZD47XG5cdHByb21wdFNtcyhvcHRpb25zPzogQXV0b1Byb21wdE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+O1xuXHRwcm9tcHRFbWFpbChvcHRpb25zPzogQXV0b1Byb21wdE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+O1xuXHRwcm9tcHRTbXNBbmRFbWFpbChvcHRpb25zPzogQXV0b1Byb21wdE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+O1xuXHRhZGRFdmVudExpc3RlbmVyKGV2ZW50OiBTbGlkZWRvd25FdmVudE5hbWUsIGxpc3RlbmVyOiAod2FzU2hvd246IGJvb2xlYW4pID0+IHZvaWQpOiB2b2lkO1xuXHRyZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50OiBTbGlkZWRvd25FdmVudE5hbWUsIGxpc3RlbmVyOiAod2FzU2hvd246IGJvb2xlYW4pID0+IHZvaWQpOiB2b2lkO1xufVxuZXhwb3J0IGludGVyZmFjZSBJT25lU2lnbmFsRGVidWcge1xuXHRzZXRMb2dMZXZlbChsb2dMZXZlbDogJ3RyYWNlJyB8ICdkZWJ1ZycgfCAnaW5mbycgfCAnd2FybicgfCAnZXJyb3InKTogdm9pZDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSU9uZVNpZ25hbFNlc3Npb24ge1xuXHRzZW5kT3V0Y29tZShvdXRjb21lTmFtZTogc3RyaW5nLCBvdXRjb21lV2VpZ2h0PzogbnVtYmVyKTogUHJvbWlzZTx2b2lkPjtcblx0c2VuZFVuaXF1ZU91dGNvbWUob3V0Y29tZU5hbWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD47XG59XG5leHBvcnQgaW50ZXJmYWNlIElPbmVTaWduYWxVc2VyIHtcblx0b25lc2lnbmFsSWQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0ZXh0ZXJuYWxJZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHRQdXNoU3Vic2NyaXB0aW9uOiBJT25lU2lnbmFsUHVzaFN1YnNjcmlwdGlvbjtcblx0YWRkQWxpYXMobGFiZWw6IHN0cmluZywgaWQ6IHN0cmluZyk6IHZvaWQ7XG5cdGFkZEFsaWFzZXMoYWxpYXNlczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSk6IHZvaWQ7XG5cdHJlbW92ZUFsaWFzKGxhYmVsOiBzdHJpbmcpOiB2b2lkO1xuXHRyZW1vdmVBbGlhc2VzKGxhYmVsczogc3RyaW5nW10pOiB2b2lkO1xuXHRhZGRFbWFpbChlbWFpbDogc3RyaW5nKTogdm9pZDtcblx0cmVtb3ZlRW1haWwoZW1haWw6IHN0cmluZyk6IHZvaWQ7XG5cdGFkZFNtcyhzbXNOdW1iZXI6IHN0cmluZyk6IHZvaWQ7XG5cdHJlbW92ZVNtcyhzbXNOdW1iZXI6IHN0cmluZyk6IHZvaWQ7XG5cdGFkZFRhZyhrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQ7XG5cdGFkZFRhZ3ModGFnczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSk6IHZvaWQ7XG5cdHJlbW92ZVRhZyhrZXk6IHN0cmluZyk6IHZvaWQ7XG5cdHJlbW92ZVRhZ3Moa2V5czogc3RyaW5nW10pOiB2b2lkO1xuXHRnZXRUYWdzKCk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG5cdGFkZEV2ZW50TGlzdGVuZXIoZXZlbnQ6ICdjaGFuZ2UnLCBsaXN0ZW5lcjogKGNoYW5nZTogVXNlckNoYW5nZUV2ZW50KSA9PiB2b2lkKTogdm9pZDtcblx0cmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudDogJ2NoYW5nZScsIGxpc3RlbmVyOiAoY2hhbmdlOiBVc2VyQ2hhbmdlRXZlbnQpID0+IHZvaWQpOiB2b2lkO1xuXHRzZXRMYW5ndWFnZShsYW5ndWFnZTogc3RyaW5nKTogdm9pZDtcblx0Z2V0TGFuZ3VhZ2UoKTogc3RyaW5nO1xuXHR0cmFja0V2ZW50KG5hbWU6IHN0cmluZywgcHJvcGVydGllcz86IFJlY29yZDxzdHJpbmcsIHVua25vd24+KTogdm9pZDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSU9uZVNpZ25hbFB1c2hTdWJzY3JpcHRpb24ge1xuXHRpZDogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZDtcblx0dG9rZW46IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQ7XG5cdG9wdGVkSW46IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cdG9wdEluKCk6IFByb21pc2U8dm9pZD47XG5cdG9wdE91dCgpOiBQcm9taXNlPHZvaWQ+O1xuXHRhZGRFdmVudExpc3RlbmVyKGV2ZW50OiAnY2hhbmdlJywgbGlzdGVuZXI6IChjaGFuZ2U6IFN1YnNjcmlwdGlvbkNoYW5nZUV2ZW50KSA9PiB2b2lkKTogdm9pZDtcblx0cmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudDogJ2NoYW5nZScsIGxpc3RlbmVyOiAoY2hhbmdlOiBTdWJzY3JpcHRpb25DaGFuZ2VFdmVudCkgPT4gdm9pZCk6IHZvaWQ7XG59XG4vKipcbiAqIFJldHVybnMgdHJ1ZSBhbmQgbG9ncyB3aGVuIFt2YWx1ZV0gaXMgbnVsbCwgZW1wdHksIG9yIGNvbnRhaW5zIGEgbnVsbCBieXRlLlxuICogV2hpdGVzcGFjZSBpcyBzdGlsbCBhIHZhbHVlLlxuICovXG5mdW5jdGlvbiBpc01pc3NpbmcodmFsdWU6IHVua25vd24sIGFwaTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIC8vIEEgTlVMIGNhbm5vdCBiZSBzdG9yZWQgaW4gYSB0ZXh0IGNvbHVtbiwgc28gaXQgaXMgbmV2ZXIgYSB1c2FibGUgdmFsdWUuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLmluY2x1ZGVzKCdcXHUwMDAwJykpIHtcbiAgICBjb25zb2xlLmVycm9yKCdbT25lU2lnbmFsXSAnICsgYXBpICsgJyBjb250YWlucyBhIG51bGwgYnl0ZScpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLmxlbmd0aCA+IDApIHJldHVybiBmYWxzZTtcbiAgY29uc29sZS5lcnJvcignW09uZVNpZ25hbF0gJyArIGFwaSArICcgaXMgcmVxdWlyZWQnKTtcbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGhhc01pc3NpbmdJdGVtcyh2YWx1ZXM6IHVua25vd24sIGFwaTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZXMpKSByZXR1cm4gaXNNaXNzaW5nKHZhbHVlcywgYXBpKTtcbiAgcmV0dXJuIHZhbHVlcy5zb21lKCh2YWx1ZSkgPT4gaXNNaXNzaW5nKHZhbHVlLCBhcGkpKTtcbn1cblxuLyoqXG4gKiBXaXRoIFthbGxvd0VtcHR5VmFsdWVdLCBcIlwiIGFuZCBhIHZhbHVlIGNvbnRhaW5pbmcgYSBudWxsIGJ5dGUgYXJlIGtlcHQuXG4gKiBBIG51bGwgdmFsdWUgaXMgc3RpbGwgcmVqZWN0ZWQuXG4gKi9cbmZ1bmN0aW9uIGhhc01pc3NpbmdFbnRyaWVzKFxuICB2YWx1ZXM6IHVua25vd24sXG4gIGFwaTogc3RyaW5nLFxuICBhbGxvd0VtcHR5VmFsdWUgPSBmYWxzZSxcbik6IGJvb2xlYW4ge1xuICBpZiAodmFsdWVzID09IG51bGwgfHwgdHlwZW9mIHZhbHVlcyAhPT0gJ29iamVjdCcgfHwgQXJyYXkuaXNBcnJheSh2YWx1ZXMpKSB7XG4gICAgcmV0dXJuIGlzTWlzc2luZyh2YWx1ZXMsIGFwaSk7XG4gIH1cbiAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKHZhbHVlcyBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPikuc29tZSgoW2tleSwgaXRlbV0pID0+IHtcbiAgICBpZiAoaXNNaXNzaW5nKGtleSwgYXBpICsgJzoga2V5JykpIHJldHVybiB0cnVlO1xuICAgIGlmIChhbGxvd0VtcHR5VmFsdWUpIHJldHVybiBpdGVtID09IG51bGwgJiYgaXNNaXNzaW5nKGl0ZW0sIGFwaSArICc6IHZhbHVlJyk7XG4gICAgcmV0dXJuIGlzTWlzc2luZyhpdGVtLCBhcGkgKyAnOiB2YWx1ZScpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24ga2VlcHNMYW5ndWFnZShsYW5ndWFnZTogdW5rbm93bik6IGJvb2xlYW4ge1xuICBpZiAodHlwZW9mIGxhbmd1YWdlICE9PSAnc3RyaW5nJykge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1tPbmVTaWduYWxdIHNldExhbmd1YWdlOiBsYW5ndWFnZSBpcyByZXF1aXJlZCcpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAobGFuZ3VhZ2UuaW5jbHVkZXMoJ1xcdTAwMDAnKSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1tPbmVTaWduYWxdIHNldExhbmd1YWdlOiBsYW5ndWFnZSBjb250YWlucyBhIG51bGwgYnl0ZScpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gb25lU2lnbmFsTG9naW4oZXh0ZXJuYWxJZDogc3RyaW5nLCBqd3RUb2tlbj86IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICBpZiAoaXNNaXNzaW5nKGV4dGVybmFsSWQsICdsb2dpbjogZXh0ZXJuYWxJZCcpKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgaWYgKGlzT25lU2lnbmFsU2NyaXB0RmFpbGVkKSB7XG4gICAgICByZWplY3QobmV3IEVycm9yKCdPbmVTaWduYWwgc2NyaXB0IGZhaWxlZCB0byBsb2FkLicpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgICAgb25lU2lnbmFsLmxvZ2luKGV4dGVybmFsSWQsIGp3dFRva2VuKVxuICAgICAgICAudGhlbigoKSA9PiByZXNvbHZlKCkpXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiByZWplY3QoZXJyb3IpKTtcbiAgICB9KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBvbmVTaWduYWxMb2dvdXQoKTogUHJvbWlzZTx2b2lkPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgaWYgKGlzT25lU2lnbmFsU2NyaXB0RmFpbGVkKSB7XG4gICAgICByZWplY3QobmV3IEVycm9yKCdPbmVTaWduYWwgc2NyaXB0IGZhaWxlZCB0byBsb2FkLicpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgICAgb25lU2lnbmFsLmxvZ291dCgpXG4gICAgICAgIC50aGVuKCgpID0+IHJlc29sdmUoKSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHJlamVjdChlcnJvcikpO1xuICAgIH0pO1xuICB9KTtcbn1cbmZ1bmN0aW9uIG9uZVNpZ25hbFNldENvbnNlbnRHaXZlbihjb25zZW50OiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgaWYgKGlzT25lU2lnbmFsU2NyaXB0RmFpbGVkKSB7XG4gICAgICByZWplY3QobmV3IEVycm9yKCdPbmVTaWduYWwgc2NyaXB0IGZhaWxlZCB0byBsb2FkLicpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgICAgb25lU2lnbmFsLnNldENvbnNlbnRHaXZlbihjb25zZW50KVxuICAgICAgICAudGhlbigoKSA9PiByZXNvbHZlKCkpXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiByZWplY3QoZXJyb3IpKTtcbiAgICB9KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBvbmVTaWduYWxTZXRDb25zZW50UmVxdWlyZWQocmVxdWlyZXNDb25zZW50OiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgaWYgKGlzT25lU2lnbmFsU2NyaXB0RmFpbGVkKSB7XG4gICAgICByZWplY3QobmV3IEVycm9yKCdPbmVTaWduYWwgc2NyaXB0IGZhaWxlZCB0byBsb2FkLicpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgICAgb25lU2lnbmFsLnNldENvbnNlbnRSZXF1aXJlZChyZXF1aXJlc0NvbnNlbnQpXG4gICAgICAgIC50aGVuKCgpID0+IHJlc29sdmUoKSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHJlamVjdChlcnJvcikpO1xuICAgIH0pO1xuICB9KTtcbn1cbmZ1bmN0aW9uIHNsaWRlZG93blByb21wdFB1c2gob3B0aW9ucz86IEF1dG9Qcm9tcHRPcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgaWYgKGlzT25lU2lnbmFsU2NyaXB0RmFpbGVkKSB7XG4gICAgICByZWplY3QobmV3IEVycm9yKCdPbmVTaWduYWwgc2NyaXB0IGZhaWxlZCB0byBsb2FkLicpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgICAgb25lU2lnbmFsLlNsaWRlZG93bi5wcm9tcHRQdXNoKG9wdGlvbnMpXG4gICAgICAgIC50aGVuKCgpID0+IHJlc29sdmUoKSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHJlamVjdChlcnJvcikpO1xuICAgIH0pO1xuICB9KTtcbn1cbmZ1bmN0aW9uIHNsaWRlZG93blByb21wdFB1c2hDYXRlZ29yaWVzKG9wdGlvbnM/OiBBdXRvUHJvbXB0T3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCkge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcignT25lU2lnbmFsIHNjcmlwdCBmYWlsZWQgdG8gbG9hZC4nKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC5TbGlkZWRvd24ucHJvbXB0UHVzaENhdGVnb3JpZXMob3B0aW9ucylcbiAgICAgICAgLnRoZW4oKCkgPT4gcmVzb2x2ZSgpKVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgfSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gc2xpZGVkb3duUHJvbXB0U21zKG9wdGlvbnM/OiBBdXRvUHJvbXB0T3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCkge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcignT25lU2lnbmFsIHNjcmlwdCBmYWlsZWQgdG8gbG9hZC4nKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC5TbGlkZWRvd24ucHJvbXB0U21zKG9wdGlvbnMpXG4gICAgICAgIC50aGVuKCgpID0+IHJlc29sdmUoKSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHJlamVjdChlcnJvcikpO1xuICAgIH0pO1xuICB9KTtcbn1cbmZ1bmN0aW9uIHNsaWRlZG93blByb21wdEVtYWlsKG9wdGlvbnM/OiBBdXRvUHJvbXB0T3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCkge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcignT25lU2lnbmFsIHNjcmlwdCBmYWlsZWQgdG8gbG9hZC4nKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC5TbGlkZWRvd24ucHJvbXB0RW1haWwob3B0aW9ucylcbiAgICAgICAgLnRoZW4oKCkgPT4gcmVzb2x2ZSgpKVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgfSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gc2xpZGVkb3duUHJvbXB0U21zQW5kRW1haWwob3B0aW9ucz86IEF1dG9Qcm9tcHRPcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgaWYgKGlzT25lU2lnbmFsU2NyaXB0RmFpbGVkKSB7XG4gICAgICByZWplY3QobmV3IEVycm9yKCdPbmVTaWduYWwgc2NyaXB0IGZhaWxlZCB0byBsb2FkLicpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgICAgb25lU2lnbmFsLlNsaWRlZG93bi5wcm9tcHRTbXNBbmRFbWFpbChvcHRpb25zKVxuICAgICAgICAudGhlbigoKSA9PiByZXNvbHZlKCkpXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiByZWplY3QoZXJyb3IpKTtcbiAgICB9KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBzbGlkZWRvd25BZGRFdmVudExpc3RlbmVyKGV2ZW50OiBTbGlkZWRvd25FdmVudE5hbWUsIGxpc3RlbmVyOiAod2FzU2hvd246IGJvb2xlYW4pID0+IHZvaWQpOiB2b2lkIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuU2xpZGVkb3duLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNsaWRlZG93blJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQ6IFNsaWRlZG93bkV2ZW50TmFtZSwgbGlzdGVuZXI6ICh3YXNTaG93bjogYm9vbGVhbikgPT4gdm9pZCk6IHZvaWQge1xuICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgIG9uZVNpZ25hbC5TbGlkZWRvd24ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbm90aWZpY2F0aW9uc1NldERlZmF1bHRVcmwodXJsOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQpIHtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoJ09uZVNpZ25hbCBzY3JpcHQgZmFpbGVkIHRvIGxvYWQuJykpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgICBvbmVTaWduYWwuTm90aWZpY2F0aW9ucy5zZXREZWZhdWx0VXJsKHVybClcbiAgICAgICAgLnRoZW4oKCkgPT4gcmVzb2x2ZSgpKVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgfSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gbm90aWZpY2F0aW9uc1NldERlZmF1bHRUaXRsZSh0aXRsZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgaWYgKGlzT25lU2lnbmFsU2NyaXB0RmFpbGVkKSB7XG4gICAgICByZWplY3QobmV3IEVycm9yKCdPbmVTaWduYWwgc2NyaXB0IGZhaWxlZCB0byBsb2FkLicpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgICAgb25lU2lnbmFsLk5vdGlmaWNhdGlvbnMuc2V0RGVmYXVsdFRpdGxlKHRpdGxlKVxuICAgICAgICAudGhlbigoKSA9PiByZXNvbHZlKCkpXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiByZWplY3QoZXJyb3IpKTtcbiAgICB9KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBub3RpZmljYXRpb25zUmVxdWVzdFBlcm1pc3Npb24oKTogUHJvbWlzZTxib29sZWFuPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgaWYgKGlzT25lU2lnbmFsU2NyaXB0RmFpbGVkKSB7XG4gICAgICByZWplY3QobmV3IEVycm9yKCdPbmVTaWduYWwgc2NyaXB0IGZhaWxlZCB0byBsb2FkLicpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgICAgb25lU2lnbmFsLk5vdGlmaWNhdGlvbnMucmVxdWVzdFBlcm1pc3Npb24oKVxuICAgICAgICAudGhlbihyZXN1bHQgPT4gcmVzb2x2ZShyZXN1bHQpKVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgfSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gbm90aWZpY2F0aW9uc0FkZEV2ZW50TGlzdGVuZXI8SyBleHRlbmRzIE5vdGlmaWNhdGlvbkV2ZW50TmFtZT4oZXZlbnQ6IEssIGxpc3RlbmVyOiAob2JqOiBOb3RpZmljYXRpb25FdmVudFR5cGVNYXBbS10pID0+IHZvaWQpOiB2b2lkIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuTm90aWZpY2F0aW9ucy5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBub3RpZmljYXRpb25zUmVtb3ZlRXZlbnRMaXN0ZW5lcjxLIGV4dGVuZHMgTm90aWZpY2F0aW9uRXZlbnROYW1lPihldmVudDogSywgbGlzdGVuZXI6IChvYmo6IE5vdGlmaWNhdGlvbkV2ZW50VHlwZU1hcFtLXSkgPT4gdm9pZCk6IHZvaWQge1xuICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgIG9uZVNpZ25hbC5Ob3RpZmljYXRpb25zLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNlc3Npb25TZW5kT3V0Y29tZShvdXRjb21lTmFtZTogc3RyaW5nLCBvdXRjb21lV2VpZ2h0PzogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgaWYgKGlzT25lU2lnbmFsU2NyaXB0RmFpbGVkKSB7XG4gICAgICByZWplY3QobmV3IEVycm9yKCdPbmVTaWduYWwgc2NyaXB0IGZhaWxlZCB0byBsb2FkLicpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgICAgb25lU2lnbmFsLlNlc3Npb24uc2VuZE91dGNvbWUob3V0Y29tZU5hbWUsIG91dGNvbWVXZWlnaHQpXG4gICAgICAgIC50aGVuKCgpID0+IHJlc29sdmUoKSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHJlamVjdChlcnJvcikpO1xuICAgIH0pO1xuICB9KTtcbn1cbmZ1bmN0aW9uIHNlc3Npb25TZW5kVW5pcXVlT3V0Y29tZShvdXRjb21lTmFtZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgaWYgKGlzT25lU2lnbmFsU2NyaXB0RmFpbGVkKSB7XG4gICAgICByZWplY3QobmV3IEVycm9yKCdPbmVTaWduYWwgc2NyaXB0IGZhaWxlZCB0byBsb2FkLicpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgICAgb25lU2lnbmFsLlNlc3Npb24uc2VuZFVuaXF1ZU91dGNvbWUob3V0Y29tZU5hbWUpXG4gICAgICAgIC50aGVuKCgpID0+IHJlc29sdmUoKSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHJlamVjdChlcnJvcikpO1xuICAgIH0pO1xuICB9KTtcbn1cbmZ1bmN0aW9uIHVzZXJBZGRBbGlhcyhsYWJlbDogc3RyaW5nLCBpZDogc3RyaW5nKTogdm9pZCB7XG4gIGlmIChpc01pc3NpbmcobGFiZWwsICdhZGRBbGlhczogbGFiZWwnKSB8fCBpc01pc3NpbmcoaWQsICdhZGRBbGlhczogaWQnKSkgcmV0dXJuO1xuICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgIG9uZVNpZ25hbC5Vc2VyLmFkZEFsaWFzKGxhYmVsLCBpZCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1c2VyQWRkQWxpYXNlcyhhbGlhc2VzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KTogdm9pZCB7XG4gIGlmIChoYXNNaXNzaW5nRW50cmllcyhhbGlhc2VzLCAnYWRkQWxpYXNlcycpKSByZXR1cm47XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlVzZXIuYWRkQWxpYXNlcyhhbGlhc2VzKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVzZXJSZW1vdmVBbGlhcyhsYWJlbDogc3RyaW5nKTogdm9pZCB7XG4gIGlmIChpc01pc3NpbmcobGFiZWwsICdyZW1vdmVBbGlhczogbGFiZWwnKSkgcmV0dXJuO1xuICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgIG9uZVNpZ25hbC5Vc2VyLnJlbW92ZUFsaWFzKGxhYmVsKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVzZXJSZW1vdmVBbGlhc2VzKGxhYmVsczogc3RyaW5nW10pOiB2b2lkIHtcbiAgaWYgKGhhc01pc3NpbmdJdGVtcyhsYWJlbHMsICdyZW1vdmVBbGlhc2VzOiBsYWJlbCcpKSByZXR1cm47XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlVzZXIucmVtb3ZlQWxpYXNlcyhsYWJlbHMpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdXNlckFkZEVtYWlsKGVtYWlsOiBzdHJpbmcpOiB2b2lkIHtcbiAgaWYgKGlzTWlzc2luZyhlbWFpbCwgJ2FkZEVtYWlsOiBlbWFpbCcpKSByZXR1cm47XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlVzZXIuYWRkRW1haWwoZW1haWwpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdXNlclJlbW92ZUVtYWlsKGVtYWlsOiBzdHJpbmcpOiB2b2lkIHtcbiAgaWYgKGlzTWlzc2luZyhlbWFpbCwgJ3JlbW92ZUVtYWlsOiBlbWFpbCcpKSByZXR1cm47XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlVzZXIucmVtb3ZlRW1haWwoZW1haWwpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdXNlckFkZFNtcyhzbXNOdW1iZXI6IHN0cmluZyk6IHZvaWQge1xuICBpZiAoaXNNaXNzaW5nKHNtc051bWJlciwgJ2FkZFNtczogc21zTnVtYmVyJykpIHJldHVybjtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuVXNlci5hZGRTbXMoc21zTnVtYmVyKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVzZXJSZW1vdmVTbXMoc21zTnVtYmVyOiBzdHJpbmcpOiB2b2lkIHtcbiAgaWYgKGlzTWlzc2luZyhzbXNOdW1iZXIsICdyZW1vdmVTbXM6IHNtc051bWJlcicpKSByZXR1cm47XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlVzZXIucmVtb3ZlU21zKHNtc051bWJlcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1c2VyQWRkVGFnKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gIGlmIChpc01pc3Npbmcoa2V5LCAnYWRkVGFnOiBrZXknKSB8fCAodmFsdWUgPT0gbnVsbCAmJiBpc01pc3NpbmcodmFsdWUsICdhZGRUYWc6IHZhbHVlJykpKSByZXR1cm47XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlVzZXIuYWRkVGFnKGtleSwgdmFsdWUpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdXNlckFkZFRhZ3ModGFnczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSk6IHZvaWQge1xuICBpZiAoaGFzTWlzc2luZ0VudHJpZXModGFncywgJ2FkZFRhZ3MnLCB0cnVlKSkgcmV0dXJuO1xuICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgIG9uZVNpZ25hbC5Vc2VyLmFkZFRhZ3ModGFncyk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1c2VyUmVtb3ZlVGFnKGtleTogc3RyaW5nKTogdm9pZCB7XG4gIGlmIChpc01pc3Npbmcoa2V5LCAncmVtb3ZlVGFnOiBrZXknKSkgcmV0dXJuO1xuICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgIG9uZVNpZ25hbC5Vc2VyLnJlbW92ZVRhZyhrZXkpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdXNlclJlbW92ZVRhZ3Moa2V5czogc3RyaW5nW10pOiB2b2lkIHtcbiAgaWYgKGhhc01pc3NpbmdJdGVtcyhrZXlzLCAncmVtb3ZlVGFnczoga2V5JykpIHJldHVybjtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuVXNlci5yZW1vdmVUYWdzKGtleXMpO1xuICB9KTtcbn1cblxuLy8gQHRzLWV4cGVjdC1lcnJvciAtIHJldHVybiBub24tUHJvbWlzZSB0eXBlIGRlc3BpdGUgbmVlZGluZyB0byBhd2FpdCBPbmVTaWduYWxEZWZlcnJlZFxuYXN5bmMgZnVuY3Rpb24gdXNlckdldFRhZ3MoKTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB7XG4gIGxldCByZXRWYWw6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gIGF3YWl0IHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgcmV0VmFsID0gb25lU2lnbmFsLlVzZXIuZ2V0VGFncygpO1xuICB9KTtcbiAgLy8gQHRzLWlnbm9yZVxuICByZXR1cm4gcmV0VmFsO1xufVxuXG5mdW5jdGlvbiB1c2VyQWRkRXZlbnRMaXN0ZW5lcihldmVudDogJ2NoYW5nZScsIGxpc3RlbmVyOiAoY2hhbmdlOiBVc2VyQ2hhbmdlRXZlbnQpID0+IHZvaWQpOiB2b2lkIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuVXNlci5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1c2VyUmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudDogJ2NoYW5nZScsIGxpc3RlbmVyOiAoY2hhbmdlOiBVc2VyQ2hhbmdlRXZlbnQpID0+IHZvaWQpOiB2b2lkIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuVXNlci5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1c2VyU2V0TGFuZ3VhZ2UobGFuZ3VhZ2U6IHN0cmluZyk6IHZvaWQge1xuICBpZiAoIWtlZXBzTGFuZ3VhZ2UobGFuZ3VhZ2UpKSByZXR1cm47XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlVzZXIuc2V0TGFuZ3VhZ2UobGFuZ3VhZ2UpO1xuICB9KTtcbn1cblxuLy8gQHRzLWV4cGVjdC1lcnJvciAtIHJldHVybiBub24tUHJvbWlzZSB0eXBlIGRlc3BpdGUgbmVlZGluZyB0byBhd2FpdCBPbmVTaWduYWxEZWZlcnJlZFxuYXN5bmMgZnVuY3Rpb24gdXNlckdldExhbmd1YWdlKCk6IHN0cmluZyB7XG4gIGxldCByZXRWYWw6IHN0cmluZztcbiAgYXdhaXQgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICByZXRWYWwgPSBvbmVTaWduYWwuVXNlci5nZXRMYW5ndWFnZSgpO1xuICB9KTtcbiAgLy8gQHRzLWlnbm9yZVxuICByZXR1cm4gcmV0VmFsO1xufVxuXG5mdW5jdGlvbiB1c2VyVHJhY2tFdmVudChuYW1lOiBzdHJpbmcsIHByb3BlcnRpZXM/OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPik6IHZvaWQge1xuICBpZiAoaXNNaXNzaW5nKG5hbWUsICd0cmFja0V2ZW50OiBuYW1lJykpIHJldHVybjtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuVXNlci50cmFja0V2ZW50KG5hbWUsIHByb3BlcnRpZXMpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcHVzaFN1YnNjcmlwdGlvbk9wdEluKCk6IFByb21pc2U8dm9pZD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCkge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcignT25lU2lnbmFsIHNjcmlwdCBmYWlsZWQgdG8gbG9hZC4nKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC5Vc2VyLlB1c2hTdWJzY3JpcHRpb24ub3B0SW4oKVxuICAgICAgICAudGhlbigoKSA9PiByZXNvbHZlKCkpXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiByZWplY3QoZXJyb3IpKTtcbiAgICB9KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBwdXNoU3Vic2NyaXB0aW9uT3B0T3V0KCk6IFByb21pc2U8dm9pZD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCkge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcignT25lU2lnbmFsIHNjcmlwdCBmYWlsZWQgdG8gbG9hZC4nKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC5Vc2VyLlB1c2hTdWJzY3JpcHRpb24ub3B0T3V0KClcbiAgICAgICAgLnRoZW4oKCkgPT4gcmVzb2x2ZSgpKVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgfSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gcHVzaFN1YnNjcmlwdGlvbkFkZEV2ZW50TGlzdGVuZXIoZXZlbnQ6ICdjaGFuZ2UnLCBsaXN0ZW5lcjogKGNoYW5nZTogU3Vic2NyaXB0aW9uQ2hhbmdlRXZlbnQpID0+IHZvaWQpOiB2b2lkIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuVXNlci5QdXNoU3Vic2NyaXB0aW9uLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHB1c2hTdWJzY3JpcHRpb25SZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50OiAnY2hhbmdlJywgbGlzdGVuZXI6IChjaGFuZ2U6IFN1YnNjcmlwdGlvbkNoYW5nZUV2ZW50KSA9PiB2b2lkKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlVzZXIuUHVzaFN1YnNjcmlwdGlvbi5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkZWJ1Z1NldExvZ0xldmVsKGxvZ0xldmVsOiAndHJhY2UnIHwgJ2RlYnVnJyB8ICdpbmZvJyB8ICd3YXJuJyB8ICdlcnJvcicpOiB2b2lkIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuRGVidWcuc2V0TG9nTGV2ZWwobG9nTGV2ZWwpO1xuICB9KTtcbn1cblxuXG5jb25zdCBQdXNoU3Vic2NyaXB0aW9uTmFtZXNwYWNlOiBJT25lU2lnbmFsUHVzaFN1YnNjcmlwdGlvbiA9IHtcblx0Z2V0IGlkKCk6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQgeyByZXR1cm4gd2luZG93Lk9uZVNpZ25hbD8uVXNlcj8uUHVzaFN1YnNjcmlwdGlvbj8uaWQ7IH0sXG5cdGdldCB0b2tlbigpOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHdpbmRvdy5PbmVTaWduYWw/LlVzZXI/LlB1c2hTdWJzY3JpcHRpb24/LnRva2VuOyB9LFxuXHRnZXQgb3B0ZWRJbigpOiBib29sZWFuIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHdpbmRvdy5PbmVTaWduYWw/LlVzZXI/LlB1c2hTdWJzY3JpcHRpb24/Lm9wdGVkSW47IH0sXG5cdG9wdEluOiBwdXNoU3Vic2NyaXB0aW9uT3B0SW4sXG5cdG9wdE91dDogcHVzaFN1YnNjcmlwdGlvbk9wdE91dCxcblx0YWRkRXZlbnRMaXN0ZW5lcjogcHVzaFN1YnNjcmlwdGlvbkFkZEV2ZW50TGlzdGVuZXIsXG5cdHJlbW92ZUV2ZW50TGlzdGVuZXI6IHB1c2hTdWJzY3JpcHRpb25SZW1vdmVFdmVudExpc3RlbmVyLFxufTtcblxuY29uc3QgVXNlck5hbWVzcGFjZTogSU9uZVNpZ25hbFVzZXIgPSB7XG5cdGdldCBvbmVzaWduYWxJZCgpOiBzdHJpbmcgfCB1bmRlZmluZWQgeyByZXR1cm4gd2luZG93Lk9uZVNpZ25hbD8uVXNlcj8ub25lc2lnbmFsSWQ7IH0sXG5cdGdldCBleHRlcm5hbElkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7IHJldHVybiB3aW5kb3cuT25lU2lnbmFsPy5Vc2VyPy5leHRlcm5hbElkOyB9LFxuXHRhZGRBbGlhczogdXNlckFkZEFsaWFzLFxuXHRhZGRBbGlhc2VzOiB1c2VyQWRkQWxpYXNlcyxcblx0cmVtb3ZlQWxpYXM6IHVzZXJSZW1vdmVBbGlhcyxcblx0cmVtb3ZlQWxpYXNlczogdXNlclJlbW92ZUFsaWFzZXMsXG5cdGFkZEVtYWlsOiB1c2VyQWRkRW1haWwsXG5cdHJlbW92ZUVtYWlsOiB1c2VyUmVtb3ZlRW1haWwsXG5cdGFkZFNtczogdXNlckFkZFNtcyxcblx0cmVtb3ZlU21zOiB1c2VyUmVtb3ZlU21zLFxuXHRhZGRUYWc6IHVzZXJBZGRUYWcsXG5cdGFkZFRhZ3M6IHVzZXJBZGRUYWdzLFxuXHRyZW1vdmVUYWc6IHVzZXJSZW1vdmVUYWcsXG5cdHJlbW92ZVRhZ3M6IHVzZXJSZW1vdmVUYWdzLFxuXHRnZXRUYWdzOiB1c2VyR2V0VGFncyxcblx0YWRkRXZlbnRMaXN0ZW5lcjogdXNlckFkZEV2ZW50TGlzdGVuZXIsXG5cdHJlbW92ZUV2ZW50TGlzdGVuZXI6IHVzZXJSZW1vdmVFdmVudExpc3RlbmVyLFxuXHRzZXRMYW5ndWFnZTogdXNlclNldExhbmd1YWdlLFxuXHRnZXRMYW5ndWFnZTogdXNlckdldExhbmd1YWdlLFxuXHR0cmFja0V2ZW50OiB1c2VyVHJhY2tFdmVudCxcblx0UHVzaFN1YnNjcmlwdGlvbjogUHVzaFN1YnNjcmlwdGlvbk5hbWVzcGFjZSxcbn07XG5cbmNvbnN0IFNlc3Npb25OYW1lc3BhY2U6IElPbmVTaWduYWxTZXNzaW9uID0ge1xuXHRzZW5kT3V0Y29tZTogc2Vzc2lvblNlbmRPdXRjb21lLFxuXHRzZW5kVW5pcXVlT3V0Y29tZTogc2Vzc2lvblNlbmRVbmlxdWVPdXRjb21lLFxufTtcblxuY29uc3QgRGVidWdOYW1lc3BhY2U6IElPbmVTaWduYWxEZWJ1ZyA9IHtcblx0c2V0TG9nTGV2ZWw6IGRlYnVnU2V0TG9nTGV2ZWwsXG59O1xuXG5jb25zdCBTbGlkZWRvd25OYW1lc3BhY2U6IElPbmVTaWduYWxTbGlkZWRvd24gPSB7XG5cdHByb21wdFB1c2g6IHNsaWRlZG93blByb21wdFB1c2gsXG5cdHByb21wdFB1c2hDYXRlZ29yaWVzOiBzbGlkZWRvd25Qcm9tcHRQdXNoQ2F0ZWdvcmllcyxcblx0cHJvbXB0U21zOiBzbGlkZWRvd25Qcm9tcHRTbXMsXG5cdHByb21wdEVtYWlsOiBzbGlkZWRvd25Qcm9tcHRFbWFpbCxcblx0cHJvbXB0U21zQW5kRW1haWw6IHNsaWRlZG93blByb21wdFNtc0FuZEVtYWlsLFxuXHRhZGRFdmVudExpc3RlbmVyOiBzbGlkZWRvd25BZGRFdmVudExpc3RlbmVyLFxuXHRyZW1vdmVFdmVudExpc3RlbmVyOiBzbGlkZWRvd25SZW1vdmVFdmVudExpc3RlbmVyLFxufTtcblxuY29uc3QgTm90aWZpY2F0aW9uc05hbWVzcGFjZTogSU9uZVNpZ25hbE5vdGlmaWNhdGlvbnMgPSB7XG5cdGdldCBwZXJtaXNzaW9uTmF0aXZlKCk6IE5vdGlmaWNhdGlvblBlcm1pc3Npb24geyByZXR1cm4gd2luZG93Lk9uZVNpZ25hbD8uTm90aWZpY2F0aW9ucz8ucGVybWlzc2lvbk5hdGl2ZSA/PyAnZGVmYXVsdCc7IH0sXG5cdGdldCBwZXJtaXNzaW9uKCk6IGJvb2xlYW4geyByZXR1cm4gd2luZG93Lk9uZVNpZ25hbD8uTm90aWZpY2F0aW9ucz8ucGVybWlzc2lvbiA/PyBmYWxzZTsgfSxcblx0c2V0RGVmYXVsdFVybDogbm90aWZpY2F0aW9uc1NldERlZmF1bHRVcmwsXG5cdHNldERlZmF1bHRUaXRsZTogbm90aWZpY2F0aW9uc1NldERlZmF1bHRUaXRsZSxcblx0aXNQdXNoU3VwcG9ydGVkLFxuXHRyZXF1ZXN0UGVybWlzc2lvbjogbm90aWZpY2F0aW9uc1JlcXVlc3RQZXJtaXNzaW9uLFxuXHRhZGRFdmVudExpc3RlbmVyOiBub3RpZmljYXRpb25zQWRkRXZlbnRMaXN0ZW5lcixcblx0cmVtb3ZlRXZlbnRMaXN0ZW5lcjogbm90aWZpY2F0aW9uc1JlbW92ZUV2ZW50TGlzdGVuZXIsXG59O1xuXG4vKipcbiAqIEBQdWJsaWNBcGlcbiAqL1xuZnVuY3Rpb24gaXNQdXNoU3VwcG9ydGVkKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gaXNQdXNoTm90aWZpY2F0aW9uc1N1cHBvcnRlZCgpO1xufVxuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5jb25zdCBPTkVTSUdOQUxfU0RLX0lEID0gJ29uZXNpZ25hbC1zZGsnO1xuY29uc3QgREVGQVVMVF9TQ1JJUFRfU1JDID1cbiAgJ2h0dHBzOi8vY2RuLm9uZXNpZ25hbC5jb20vc2Rrcy93ZWIvdjE2L09uZVNpZ25hbFNESy5wYWdlLmpzJztcblxubGV0IGlzT25lU2lnbmFsSW5pdGlhbGl6ZWQgPSBmYWxzZTtcbmxldCBpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCA9IGZhbHNlO1xubGV0IHBlbmRpbmdJbml0UmVqZWN0OiAoKHJlYXNvbj86IHVua25vd24pID0+IHZvaWQpIHwgdW5kZWZpbmVkO1xuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkID0gd2luZG93Lk9uZVNpZ25hbERlZmVycmVkIHx8IFtdO1xufVxuXG4vKipcbiAqIFRoZSBmb2xsb3dpbmcgY29kZSBpcyBjb3BpZWQgZGlyZWN0bHkgZnJvbSB0aGUgbmF0aXZlIFNESyBzb3VyY2UgZmlsZSBCcm93c2VyU3VwcG9ydHNQdXNoLnRzXG4gKiBTIFQgQSBSIFRcbiAqL1xuXG4vLyBDaGVja3MgaWYgdGhlIGJyb3dzZXIgc3VwcG9ydHMgcHVzaCBub3RpZmljYXRpb25zIGJ5IGNoZWNraW5nIGlmIHNwZWNpZmljXG4vLyAgIGNsYXNzZXMgYW5kIHByb3BlcnRpZXMgb24gdGhlbSBleGlzdFxuZnVuY3Rpb24gaXNQdXNoTm90aWZpY2F0aW9uc1N1cHBvcnRlZCgpOiBib29sZWFuIHtcbiAgcmV0dXJuIHN1cHBvcnRzVmFwaWRQdXNoKCkgfHwgc3VwcG9ydHNTYWZhcmlQdXNoKCk7XG59XG5cbmZ1bmN0aW9uIGlzTWFjT1NTYWZhcmlJbklmcmFtZSgpOiBib29sZWFuIHtcbiAgLy8gRmFsbGJhY2sgZGV0ZWN0aW9uIGZvciBTYWZhcmkgb24gbWFjT1MgaW4gYW4gaWZyYW1lIGNvbnRleHRcbiAgcmV0dXJuIChcbiAgICB3aW5kb3cudG9wICE9PSB3aW5kb3cgJiYgLy8gaXNDb250ZXh0SWZyYW1lXG4gICAgbmF2aWdhdG9yLnZlbmRvciA9PT0gJ0FwcGxlIENvbXB1dGVyLCBJbmMuJyAmJiAvLyBpc1NhZmFyaVxuICAgIG5hdmlnYXRvci5wbGF0Zm9ybSA9PT0gJ01hY0ludGVsJ1xuICApOyAvLyBpc01hY09TXG59XG5cbmZ1bmN0aW9uIHN1cHBvcnRzU2FmYXJpUHVzaCgpOiBib29sZWFuIHtcbiAgcmV0dXJuIChcbiAgICAod2luZG93LnNhZmFyaSAmJiB0eXBlb2Ygd2luZG93LnNhZmFyaS5wdXNoTm90aWZpY2F0aW9uICE9PSAndW5kZWZpbmVkJykgfHxcbiAgICBpc01hY09TU2FmYXJpSW5JZnJhbWUoKVxuICApO1xufVxuXG4vLyBEb2VzIHRoZSBicm93c2VyIHN1cHBvcnQgdGhlIHN0YW5kYXJkIFB1c2ggQVBJXG5mdW5jdGlvbiBzdXBwb3J0c1ZhcGlkUHVzaCgpOiBib29sZWFuIHtcbiAgcmV0dXJuIChcbiAgICB0eXBlb2YgUHVzaFN1YnNjcmlwdGlvbk9wdGlvbnMgIT09ICd1bmRlZmluZWQnICYmXG4gICAgUHVzaFN1YnNjcmlwdGlvbk9wdGlvbnMucHJvdG90eXBlLmhhc093blByb3BlcnR5KCdhcHBsaWNhdGlvblNlcnZlcktleScpXG4gICk7XG59XG4vKiBFIE4gRCAqL1xuXG5mdW5jdGlvbiBoYW5kbGVPbkVycm9yKCk6IHZvaWQge1xuICBpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCA9IHRydWU7XG4gIHBlbmRpbmdJbml0UmVqZWN0Py4obmV3IEVycm9yKCdPbmVTaWduYWwgc2NyaXB0IGZhaWxlZCB0byBsb2FkLicpKTtcbiAgcGVuZGluZ0luaXRSZWplY3QgPSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGFkZFNES1NjcmlwdChzY3JpcHRTcmM/OiBzdHJpbmcpOiB2b2lkIHtcbiAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKE9ORVNJR05BTF9TREtfSUQpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gIHNjcmlwdC5pZCA9IE9ORVNJR05BTF9TREtfSUQ7XG4gIHNjcmlwdC5kZWZlciA9IHRydWU7XG4gIHNjcmlwdC5zcmMgPSBzY3JpcHRTcmMgfHwgREVGQVVMVF9TQ1JJUFRfU1JDO1xuXG4gIC8vIEFsd2F5cyByZXNvbHZlIHdoZXRoZXIgb3Igbm90IHRoZSBzY3JpcHQgaXMgc3VjY2Vzc2Z1bGx5IGluaXRpYWxpemVkLlxuICAvLyBUaGlzIGlzIGltcG9ydGFudCBmb3IgdXNlcnMgd2hvIG1heSBibG9jayBjZG4ub25lc2lnbmFsLmNvbSB3LyBhZGJsb2NrLlxuICBzY3JpcHQub25lcnJvciA9ICgpID0+IHtcbiAgICBoYW5kbGVPbkVycm9yKCk7XG4gIH07XG5cbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIE9uZVNpZ25hbERlZmVycmVkPzogT25lU2lnbmFsRGVmZXJyZWRMb2FkZWRDYWxsYmFja1tdO1xuICAgIE9uZVNpZ25hbD86IElPbmVTaWduYWxPbmVTaWduYWw7XG4gICAgc2FmYXJpPzoge1xuICAgICAgcHVzaE5vdGlmaWNhdGlvbjogYW55O1xuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJT25lU2lnbmFsT25lU2lnbmFsIHtcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgT25lU2lnbmFsIGltcGxlbWVudHMgSU9uZVNpZ25hbE9uZVNpZ25hbCB7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgLyogUCBVIEIgTCBJIEMgKi9cblxuICAvKipcbiAgICogQFB1YmxpY0FwaVxuICAgKi9cbiAgaW5pdChvcHRpb25zOiBJSW5pdE9iamVjdCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmIChpc09uZVNpZ25hbEluaXRpYWxpemVkKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoYE9uZVNpZ25hbCBpcyBhbHJlYWR5IGluaXRpYWxpemVkLmApO1xuICAgIH1cblxuICAgIGlmICghb3B0aW9ucyB8fCAhb3B0aW9ucy5hcHBJZCB8fCBpc01pc3Npbmcob3B0aW9ucy5hcHBJZCwgJ2luaXQ6IGFwcElkJykpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgnWW91IG5lZWQgdG8gcHJvdmlkZSB5b3VyIE9uZVNpZ25hbCBhcHBJZC4nKTtcbiAgICB9XG5cbiAgICBpZiAoIWRvY3VtZW50KSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoYERvY3VtZW50IGlzIG5vdCBkZWZpbmVkLmApO1xuICAgIH1cblxuICAgIC8vIFJlcXVpcmVkOiB0aGUgQ0ROIHNjcmlwdCBzaWxlbnRseSBleGl0cyBvbiB1bnN1cHBvcnRlZCBicm93c2VycyB3aXRob3V0XG4gICAgLy8gZHJhaW5pbmcgT25lU2lnbmFsRGVmZXJyZWQsIHNvIGluaXQoKSB3b3VsZCBoYW5nIGZvcmV2ZXIgb3RoZXJ3aXNlLlxuICAgIGlmICghaXNQdXNoTm90aWZpY2F0aW9uc1N1cHBvcnRlZCgpKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXG4gICAgICAgIG5ldyBFcnJvcignVGhpcyBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgV2ViIFB1c2ggbm90aWZpY2F0aW9ucy4nKSxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIGJvdGggZGlzYWJsZWQgYW5kIGRpc2FibGUga2V5cyBmb3Igd2VsY29tZSBub3RpZmljYXRpb25cbiAgICBpZiAob3B0aW9ucy53ZWxjb21lTm90aWZpY2F0aW9uPy5kaXNhYmxlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBvcHRpb25zLndlbGNvbWVOb3RpZmljYXRpb24uZGlzYWJsZSA9IG9wdGlvbnMud2VsY29tZU5vdGlmaWNhdGlvbi5kaXNhYmxlZDtcbiAgICB9XG5cbiAgICBhZGRTREtTY3JpcHQob3B0aW9ucy5zY3JpcHRTcmMpO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHBlbmRpbmdJbml0UmVqZWN0ID0gcmVqZWN0O1xuICAgICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICAgICAgb25lU2lnbmFsXG4gICAgICAgICAgLmluaXQob3B0aW9ucylcbiAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBpc09uZVNpZ25hbEluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHBlbmRpbmdJbml0UmVqZWN0ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIHBlbmRpbmdJbml0UmVqZWN0ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG5cdFVzZXIgPSBVc2VyTmFtZXNwYWNlO1xuXHRTZXNzaW9uID0gU2Vzc2lvbk5hbWVzcGFjZTtcblx0RGVidWcgPSBEZWJ1Z05hbWVzcGFjZTtcblx0U2xpZGVkb3duID0gU2xpZGVkb3duTmFtZXNwYWNlO1xuXHROb3RpZmljYXRpb25zID0gTm90aWZpY2F0aW9uc05hbWVzcGFjZTtcblx0bG9naW4gPSBvbmVTaWduYWxMb2dpbjtcblx0bG9nb3V0ID0gb25lU2lnbmFsTG9nb3V0O1xuXHRzZXRDb25zZW50R2l2ZW4gPSBvbmVTaWduYWxTZXRDb25zZW50R2l2ZW47XG5cdHNldENvbnNlbnRSZXF1aXJlZCA9IG9uZVNpZ25hbFNldENvbnNlbnRSZXF1aXJlZDtcbn1cbiJdfQ==