import { __awaiter } from "tslib";
function oneSignalLogin(externalId, jwtToken) {
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
    var _a;
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
        oneSignal.setConsentRequired(requiresConsent);
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
        addSDKScript(options.scriptSrc);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25lc2lnbmFsLW5neC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvb25lc2lnbmFsLW5neC9zcmMvbGliL29uZXNpZ25hbC1uZ3guc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBaWFBLFNBQVMsY0FBYyxDQUFDLFVBQWtCLEVBQUUsUUFBaUI7SUFDM0QsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTs7UUFDckMsSUFBSSx1QkFBdUIsRUFBRTtZQUMzQixNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsa0NBQWtDLENBQUMsQ0FBQyxDQUFDO1lBQ3RELE9BQU87U0FDUjtRQUVELE1BQUEsTUFBTSxDQUFDLGlCQUFpQiwwQ0FBRSxJQUFJLENBQUMsQ0FBQyxTQUE4QixFQUFFLEVBQUU7WUFDaEUsU0FBUyxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDO2lCQUNsQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7aUJBQ3JCLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ25DLENBQUMsRUFBRTtJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUNELFNBQVMsZUFBZTtJQUN0QixPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFOztRQUNyQyxJQUFJLHVCQUF1QixFQUFFO1lBQzNCLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDLENBQUM7WUFDdEQsT0FBTztTQUNSO1FBRUQsTUFBQSxNQUFNLENBQUMsaUJBQWlCLDBDQUFFLElBQUksQ0FBQyxDQUFDLFNBQThCLEVBQUUsRUFBRTtZQUNoRSxTQUFTLENBQUMsTUFBTSxFQUFFO2lCQUNmLElBQUksQ0FBQyxHQUFH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LENBQUMsTUFBTSxDQUFDLDBCQUEwQixDQUFDLENBQUM7U0FDbkQ7UUFFRCxpRUFBaUU7UUFDakUsSUFBSSxPQUFBLE9BQU8sQ0FBQyxtQkFBbUIsMENBQUUsUUFBUSxNQUFLLFNBQVMsRUFBRTtZQUN2RCxPQUFPLENBQUMsbUJBQW1CLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUM7U0FDNUU7UUFFRCxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRWhDLE9BQU8sSUFBSSxPQUFPLENBQU8sQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7O1lBQzNDLE1BQUEsTUFBTSxDQUFDLGlCQUFpQiwwQ0FBRSxJQUFJLENBQUMsQ0FBQyxTQUE4QixFQUFFLEVBQUU7Z0JBQ2hFLFNBQVM7cUJBQ04sSUFBSSxDQUFDLE9BQU8sQ0FBQztxQkFDYixJQUFJLENBQUMsR0FBRyxFQUFFO29CQUNULHNCQUFzQixHQUFHLElBQUksQ0FBQztvQkFDOUIsT0FBTyxFQUFFLENBQUM7Z0JBQ1osQ0FBQyxDQUFDO3FCQUNELEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuQixDQUFDLEVBQUU7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7WUE1Q0YsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBBdXRvUHJvbXB0T3B0aW9ucyB7IGZvcmNlPzogYm9vbGVhbjsgZm9yY2VTbGlkZWRvd25PdmVyTmF0aXZlPzogYm9vbGVhbjsgc2xpZGVkb3duUHJvbXB0T3B0aW9ucz86IElPbmVTaWduYWxBdXRvUHJvbXB0T3B0aW9uczsgfVxuZXhwb3J0IGludGVyZmFjZSBJT25lU2lnbmFsQXV0b1Byb21wdE9wdGlvbnMgeyBmb3JjZT86IGJvb2xlYW47IGZvcmNlU2xpZGVkb3duT3Zlck5hdGl2ZT86IGJvb2xlYW47IGlzSW5VcGRhdGVNb2RlPzogYm9vbGVhbjsgY2F0ZWdvcnlPcHRpb25zPzogSU9uZVNpZ25hbENhdGVnb3JpZXM7IH1cbmV4cG9ydCBpbnRlcmZhY2UgSU9uZVNpZ25hbENhdGVnb3JpZXMgeyBwb3NpdGl2ZVVwZGF0ZUJ1dHRvbjogc3RyaW5nOyBuZWdhdGl2ZVVwZGF0ZUJ1dHRvbjogc3RyaW5nOyBzYXZpbmdCdXR0b25UZXh0OiBzdHJpbmc7IGVycm9yQnV0dG9uVGV4dDogc3RyaW5nOyB1cGRhdGVNZXNzYWdlOiBzdHJpbmc7IHRhZ3M6IElPbmVTaWduYWxUYWdDYXRlZ29yeVtdOyB9XG5leHBvcnQgaW50ZXJmYWNlIElPbmVTaWduYWxUYWdDYXRlZ29yeSB7IHRhZzogc3RyaW5nOyBsYWJlbDogc3RyaW5nOyBjaGVja2VkPzogYm9vbGVhbjsgfVxuZXhwb3J0IHR5cGUgUHVzaFN1YnNjcmlwdGlvbk5hbWVzcGFjZVByb3BlcnRpZXMgPSB7IGlkOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkOyB0b2tlbjogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZDsgb3B0ZWRJbjogYm9vbGVhbjsgfTtcbmV4cG9ydCB0eXBlIFN1YnNjcmlwdGlvbkNoYW5nZUV2ZW50ID0geyBwcmV2aW91czogUHVzaFN1YnNjcmlwdGlvbk5hbWVzcGFjZVByb3BlcnRpZXM7IGN1cnJlbnQ6IFB1c2hTdWJzY3JpcHRpb25OYW1lc3BhY2VQcm9wZXJ0aWVzOyB9O1xuZXhwb3J0IHR5cGUgTm90aWZpY2F0aW9uRXZlbnROYW1lID0gJ2NsaWNrJyB8ICdmb3JlZ3JvdW5kV2lsbERpc3BsYXknIHwgJ2Rpc21pc3MnIHwgJ3Blcm1pc3Npb25DaGFuZ2UnIHwgJ3Blcm1pc3Npb25Qcm9tcHREaXNwbGF5JztcbmV4cG9ydCB0eXBlIFNsaWRlZG93bkV2ZW50TmFtZSA9ICdzbGlkZWRvd25BbGxvd0NsaWNrJyB8ICdzbGlkZWRvd25DYW5jZWxDbGljaycgfCAnc2xpZGVkb3duQ2xvc2VkJyB8ICdzbGlkZWRvd25RdWV1ZWQnIHwgJ3NsaWRlZG93blNob3duJztcbmV4cG9ydCB0eXBlIE9uZVNpZ25hbERlZmVycmVkTG9hZGVkQ2FsbGJhY2sgPSAob25lc2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB2b2lkO1xuZXhwb3J0IGludGVyZmFjZSBJT1NOb3RpZmljYXRpb24ge1xuICAvKipcbiAgICogVGhlIE9uZVNpZ25hbCBub3RpZmljYXRpb24gaWQ7XG4gICAqICAtIFByaW1hcnkgaWQgb24gT25lU2lnbmFsJ3MgUkVTVCBBUEkgYW5kIGRhc2hib2FyZFxuICAgKi9cbiAgcmVhZG9ubHkgbm90aWZpY2F0aW9uSWQ6IHN0cmluZztcblxuICAvKipcbiAgICogVmlzaWJsZSB0aXRsZSB0ZXh0IG9uIHRoZSBub3RpZmljYXRpb25cbiAgICovXG4gIHJlYWRvbmx5IHRpdGxlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBWaXNpYmxlIGJvZHkgdGV4dCBvbiB0aGUgbm90aWZpY2F0aW9uXG4gICAqL1xuICByZWFkb25seSBib2R5OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFZpc2libGUgaWNvbiB0aGUgbm90aWZpY2F0aW9uOyBVUkwgZm9ybWF0XG4gICAqL1xuICByZWFkb25seSBpY29uPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBWaXNpYmxlIHNtYWxsIGJhZGdlSWNvbiB0aGF0IGRpc3BsYXlzIG9uIHNvbWUgZGV2aWNlczsgVVJMIGZvcm1hdFxuICAgKiBFeGFtcGxlOiBPbiBBbmRyb2lkJ3Mgc3RhdHVzIGJhclxuICAgKi9cbiAgcmVhZG9ubHkgYmFkZ2VJY29uPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBWaXNpYmxlIGltYWdlIG9uIHRoZSBub3RpZmljYXRpb247IFVSTCBmb3JtYXRcbiAgICovXG4gIHJlYWRvbmx5IGltYWdlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBWaXNpYmxlIGJ1dHRvbnMgb24gdGhlIG5vdGlmaWNhdGlvblxuICAgKi9cbiAgcmVhZG9ubHkgYWN0aW9uQnV0dG9ucz86IElPU05vdGlmaWNhdGlvbkFjdGlvbkJ1dHRvbltdO1xuXG4gIC8qKlxuICAgKiBJZiB0aGlzIHZhbHVlIGlzIHRoZSBzYW1lIGFzIGV4aXN0aW5nIG5vdGlmaWNhdGlvbiwgaXQgd2lsbCByZXBsYWNlIGl0XG4gICAqIENhbiBiZSBzZXQgd2hlbiBjcmVhdGluZyB0aGUgbm90aWZpY2F0aW9uIHdpdGggXCJXZWIgUHVzaCBUb3BpY1wiIG9uIHRoZSBkYXNoYm9hcmRcbiAgICogb3Igd2ViX3B1c2hfdG9waWMgZnJvbSB0aGUgUkVTVCBBUEkuXG4gICAqL1xuICByZWFkb25seSB0b3BpYz86IHN0cmluZztcblxuICAvKipcbiAgICogQ3VzdG9tIG9iamVjdCB0aGF0IHdhcyBzZW50IHdpdGggdGhlIG5vdGlmaWNhdGlvbjtcbiAgICogZGVmaW5hYmxlIHdoZW4gY3JlYXRpbmcgdGhlIG5vdGlmaWNhdGlvbiBmcm9tIHRoZSBPbmVTaWduYWwgUkVTVCBBUEkgb3IgZGFzaGJvYXJkXG4gICAqL1xuICByZWFkb25seSBhZGRpdGlvbmFsRGF0YT86IG9iamVjdDtcblxuICAvKipcbiAgICogVVJMIHRvIG9wZW4gd2hlbiBjbGlja2luZyBvciB0YXBwaW5nIG9uIHRoZSBub3RpZmljYXRpb25cbiAgICovXG4gIHJlYWRvbmx5IGxhdW5jaFVSTD86IHN0cmluZztcblxuICAvKipcbiAgICogQ29uZmlybSB0aGUgcHVzaCB3YXMgcmVjZWl2ZWQgYnkgcmVwb3J0aW5nIGJhY2sgdG8gT25lU2lnbmFsXG4gICAqL1xuICByZWFkb25seSBjb25maXJtRGVsaXZlcnk6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU9TTm90aWZpY2F0aW9uQWN0aW9uQnV0dG9uIHtcbiAgLyoqXG4gICAqIEFueSB1bmlxdWUgaWRlbnRpZmllciB0byByZXByZXNlbnQgd2hpY2ggYnV0dG9uIHdhcyBjbGlja2VkLiBUaGlzIGlzIHR5cGljYWxseSBwYXNzZWQgYmFjayB0byB0aGUgc2VydmljZSB3b3JrZXJcbiAgICogYW5kIGhvc3QgcGFnZSB0aHJvdWdoIGV2ZW50cyB0byBpZGVudGlmeSB3aGljaCBidXR0b24gd2FzIGNsaWNrZWQuXG4gICAqIGUuZy4gJ2xpa2UtYnV0dG9uJ1xuICAgKi9cbiAgcmVhZG9ubHkgYWN0aW9uSWQ6IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBub3RpZmljYXRpb24gYWN0aW9uIGJ1dHRvbidzIHRleHQuXG4gICAqL1xuICByZWFkb25seSB0ZXh0OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBBIHZhbGlkIHB1YmxpY2x5IHJlYWNoYWJsZSBIVFRQUyBVUkwgdG8gYW4gaW1hZ2UuXG4gICAqL1xuICByZWFkb25seSBpY29uPzogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIFVSTCB0byBvcGVuIHRoZSB3ZWIgYnJvd3NlciB0byB3aGVuIHRoaXMgYWN0aW9uIGJ1dHRvbiBpcyBjbGlja2VkLlxuICAgKi9cbiAgcmVhZG9ubHkgbGF1bmNoVVJMPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElEaXNwbGF5YWJsZU9TTm90aWZpY2F0aW9uIGV4dGVuZHMgSU9TTm90aWZpY2F0aW9uIHtcbiAgZGlzcGxheSgpOiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5vdGlmaWNhdGlvbkNsaWNrUmVzdWx0IHtcbiAgcmVhZG9ubHkgYWN0aW9uSWQ/OiBzdHJpbmc7XG4gIHJlYWRvbmx5IHVybD86IHN0cmluZztcbn1cblxuZXhwb3J0IHR5cGUgTm90aWZpY2F0aW9uRXZlbnRUeXBlTWFwID0ge1xuICAnY2xpY2snOiBOb3RpZmljYXRpb25DbGlja0V2ZW50O1xuICAnZm9yZWdyb3VuZFdpbGxEaXNwbGF5JzogTm90aWZpY2F0aW9uRm9yZWdyb3VuZFdpbGxEaXNwbGF5RXZlbnQ7XG4gICdkaXNtaXNzJzogTm90aWZpY2F0aW9uRGlzbWlzc0V2ZW50O1xuICAncGVybWlzc2lvbkNoYW5nZSc6IGJvb2xlYW47XG4gICdwZXJtaXNzaW9uUHJvbXB0RGlzcGxheSc6IHZvaWQ7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIE5vdGlmaWNhdGlvbkZvcmVncm91bmRXaWxsRGlzcGxheUV2ZW50IHtcbiAgcmVhZG9ubHkgbm90aWZpY2F0aW9uOiBJRGlzcGxheWFibGVPU05vdGlmaWNhdGlvbjtcbiAgcHJldmVudERlZmF1bHQoKTogdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOb3RpZmljYXRpb25EaXNtaXNzRXZlbnQge1xuICBub3RpZmljYXRpb246IElPU05vdGlmaWNhdGlvbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOb3RpZmljYXRpb25DbGlja0V2ZW50IHtcbiAgcmVhZG9ubHkgbm90aWZpY2F0aW9uOiBJT1NOb3RpZmljYXRpb247XG4gIHJlYWRvbmx5IHJlc3VsdDogTm90aWZpY2F0aW9uQ2xpY2tSZXN1bHQ7XG59XG5cbmV4cG9ydCB0eXBlIFVzZXJDaGFuZ2VFdmVudCA9IHtcbiAgY3VycmVudDogVXNlck5hbWVzcGFjZVByb3BlcnRpZXM7XG59O1xuZXhwb3J0IHR5cGUgVXNlck5hbWVzcGFjZVByb3BlcnRpZXMgPSB7XG4gIG9uZXNpZ25hbElkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGV4dGVybmFsSWQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUluaXRPYmplY3Qge1xuICBhcHBJZDogc3RyaW5nO1xuICByZXF1aXJlc1VzZXJQcml2YWN5Q29uc2VudD86IGJvb2xlYW47XG4gIHNhZmFyaV93ZWJfaWQ/OiBzdHJpbmc7XG4gIHN1YmRvbWFpbk5hbWU/OiBzdHJpbmc7XG4gIHByb21wdE9wdGlvbnM/OiB7XG4gICAgc2xpZGVkb3duOiB7XG4gICAgICBwcm9tcHRzOiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXaGV0aGVyIHRvIGF1dG9tYXRpY2FsbHkgZGlzcGxheSB0aGUgcHJvbXB0LlxuICAgICAgICAgKiBgdHJ1ZWAgd2lsbCBkaXNwbGF5IHRoZSBwcm9tcHQgYmFzZWQgb24gdGhlIGRlbGF5IG9wdGlvbnMuXG4gICAgICAgICAqIGBmYWxzZWAgd2lsbCBwcmV2ZW50IHRoZSBwcm9tcHQgZnJvbSBkaXNwbGF5aW5nIHVudGlsIHRoZSBTbGlkZWRvd25zIG1ldGhvZHMgYXJlIHVzZWQuXG4gICAgICAgICAqL1xuICAgICAgICBhdXRvUHJvbXB0OiBib29sZWFuO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBPbmx5IGF2YWlsYWJsZSBmb3IgdHlwZTogY2F0ZWdvcnkuIFVwIHRvIDEwIGNhdGVnb3JpZXMuXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqICBjYXRlZ29yaWVzOiBbeyB0YWc6ICdsb2NhbF9uZXdzJywgbGFiZWw6ICdMb2NhbCBOZXdzJyB9XSAvLyBUaGUgdXNlciB3aWxsIGJlIHRhZ2dlZCB3aXRoIGxvY2FsX25ld3MgYnV0IHdpbGwgc2VlIFwiTG9jYWwgTmV3c1wiIGluIHRoZSBwcm9tcHQuXG4gICAgICAgICAqL1xuICAgICAgICBjYXRlZ29yaWVzPzoge1xuICAgICAgICAgIC8qKiBTaG91bGQgaWRlbnRpZnkgdGhlIGFjdGlvbi4gKi9cbiAgICAgICAgICB0YWc6IHN0cmluZztcblxuICAgICAgICAgIC8qKiBXaGF0IHRoZSB1c2VyIHdpbGwgc2VlLiAqL1xuICAgICAgICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgICAgIH1bXTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGRlbGF5IG9wdGlvbnMgZm9yIHRoZSBwcm9tcHQuXG4gICAgICAgICAqIEBleGFtcGxlIGRlbGF5OiB7IHBhZ2VWaWV3czogMywgdGltZURlbGF5OiAyMCB9IC8vIFRoZSB1c2VyIHdpbGwgbm90IGJlIHNob3duIHRoZSBwcm9tcHQgdW50aWwgMjAgc2Vjb25kcyBhZnRlciB0aGUgM3JkIHBhZ2Ugdmlldy5cbiAgICAgICAgICovXG4gICAgICAgIGRlbGF5OiB7XG4gICAgICAgICAgLyoqIFRoZSBudW1iZXIgb2YgcGFnZXMgYSB1c2VyIG5lZWRzIHRvIHZpc2l0IGJlZm9yZSB0aGUgcHJvbXB0IGlzIGRpc3BsYXllZC4gKi9cbiAgICAgICAgICBwYWdlVmlld3M/OiBudW1iZXI7XG5cbiAgICAgICAgICAvKiogVGhlIG51bWJlciBvZiBzZWNvbmRzIGEgdXNlciBuZWVkcyB0byB3YWl0IGJlZm9yZSB0aGUgcHJvbXB0IGlzIGRpc3BsYXllZC5Cb3RoIG9wdGlvbnMgbXVzdCBiZSBzYXRpc2ZpZWQgZm9yIHRoZSBwcm9tcHQgdG8gZGlzcGxheSAqL1xuICAgICAgICAgIHRpbWVEZWxheT86IG51bWJlcjtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHRleHQgdG8gZGlzcGxheSBpbiB0aGUgcHJvbXB0LlxuICAgICAgICAgKi9cbiAgICAgICAgdGV4dD86IHtcbiAgICAgICAgICAvKiogVGhlIGNhbGxvdXQgYXNraW5nIHRoZSB1c2VyIHRvIG9wdC1pbi4gVXAgdG8gOTAgY2hhcmFjdGVycy4gKi9cbiAgICAgICAgICBhY3Rpb25NZXNzYWdlPzogc3RyaW5nO1xuXG4gICAgICAgICAgLyoqIFRyaWdnZXJzIHRoZSBvcHQtaW4uIFVwIHRvIDE1IGNoYXJhY3RlcnMuICovXG4gICAgICAgICAgYWNjZXB0QnV0dG9uPzogc3RyaW5nO1xuXG4gICAgICAgICAgLyoqIENhbmNlbHMgb3B0LWluLiBVcCB0byAxNSBjaGFyYWN0ZXJzLiAqL1xuICAgICAgICAgIGNhbmNlbEJ1dHRvbj86IHN0cmluZztcblxuICAgICAgICAgIC8qKiBUaGUgbWVzc2FnZSBvZiB0aGUgY29uZmlybWF0aW9uIHByb21wdCBkaXNwbGF5ZWQgYWZ0ZXIgdGhlIGVtYWlsIGFuZC9vciBwaG9uZSBudW1iZXIgaXMgcHJvdmlkZWQuIFVwIHRvIDkwIGNoYXJhY3RlcnMuICovXG4gICAgICAgICAgY29uZmlybU1lc3NhZ2U/OiBzdHJpbmc7XG5cbiAgICAgICAgICAvKiogSWRlbnRpZmllcyB0aGUgZW1haWwgdGV4dCBmaWVsZC4gVXAgdG8gMTUgY2hhcmFjdGVycy4gKi9cbiAgICAgICAgICBlbWFpbExhYmVsPzogc3RyaW5nO1xuXG4gICAgICAgICAgLyoqIENhbmNlbHMgdGhlIGNhdGVnb3J5IHVwZGF0ZS4gVXAgdG8gMTUgY2hhcmFjdGVycy4gKi9cbiAgICAgICAgICBuZWdhdGl2ZVVwZGF0ZUJ1dHRvbj86IHN0cmluZztcblxuICAgICAgICAgIC8qKiBTYXZlcyB0aGUgdXBkYXRlZCBjYXRlZ29yeSB0YWdzLiBVcCB0byAxNSBjaGFyYWN0ZXJzLiAqL1xuICAgICAgICAgIHBvc2l0aXZlVXBkYXRlQnV0dG9uPzogc3RyaW5nO1xuXG4gICAgICAgICAgLyoqIElkZW50aWZpZXMgdGhlIHBob25lIG51bWJlciB0ZXh0IGZpZWxkLiBVcCB0byAxNSBjaGFyYWN0ZXJzLiAqL1xuICAgICAgICAgIHNtc0xhYmVsPzogc3RyaW5nO1xuXG4gICAgICAgICAgLyoqIEEgZGlmZmVyZW50IG1lc3NhZ2Ugc2hvd24gdG8gc3Vic2NyaWJlcnMgcHJlc2VudGVkIHRoZSBwcm9tcHQgYWdhaW4gdG8gdXBkYXRlIGNhdGVnb3JpZXMuIFVwIHRvIDkwIGNoYXJhY3RlcnMuICovXG4gICAgICAgICAgdXBkYXRlTWVzc2FnZT86IHN0cmluZztcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHR5cGUgb2YgcHJvbXB0IHRvIGRpc3BsYXkuXG4gICAgICAgICAqIGBwdXNoYCB3aGljaCBpcyB0aGUgU2xpZGUgUHJvbXB0IHdpdGhvdXQgY2F0ZWdvcmllcy5cbiAgICAgICAgICogYGNhdGVnb3J5YCB3aGljaCBpcyB0aGUgU2xpZGUgUHJvbXB0IHdpdGggY2F0ZWdvcmllcy5cbiAgICAgICAgICogYHNtc2Agb25seSBhc2tzIGZvciBwaG9uZSBudW1iZXIuXG4gICAgICAgICAqIGBlbWFpbGAgb25seSBhc2tzIGZvciBlbWFpbCBhZGRyZXNzLlxuICAgICAgICAgKiBgc21zQW5kRW1haWxgIGFza3MgZm9yIGJvdGggcGhvbmUgbnVtYmVyIGFuZCBlbWFpbCBhZGRyZXNzLlxuICAgICAgICAgKi9cbiAgICAgICAgdHlwZTogJ3B1c2gnIHwgJ2NhdGVnb3J5JyB8ICdzbXMnIHwgJ2VtYWlsJyB8ICdzbXNBbmRFbWFpbCc7XG4gICAgICB9W107XG4gICAgfTtcbiAgfTtcbiAgd2VsY29tZU5vdGlmaWNhdGlvbj86IHtcbiAgICAvKipcbiAgICAgKiBEaXNhYmxlcyBzZW5kaW5nIGEgd2VsY29tZSBub3RpZmljYXRpb24gdG8gbmV3IHNpdGUgdmlzaXRvcnMuIElmIHlvdSB3YW50IHRvIGRpc2FibGUgd2VsY29tZSBub3RpZmljYXRpb25zLCB0aGlzIGlzIHRoZSBvbmx5IG9wdGlvbiB5b3UgbmVlZC5cbiAgICAgKiBAZGVwcmVjYXRlZCBVc2UgJ2Rpc2FibGUnIGluc3RlYWQuIFRoaXMgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIHZlcnNpb24uXG4gICAgICovXG4gICAgZGlzYWJsZWQ/OiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogRGlzYWJsZXMgc2VuZGluZyBhIHdlbGNvbWUgbm90aWZpY2F0aW9uIHRvIG5ldyBzaXRlIHZpc2l0b3JzLiBJZiB5b3Ugd2FudCB0byBkaXNhYmxlIHdlbGNvbWUgbm90aWZpY2F0aW9ucywgdGhpcyBpcyB0aGUgb25seSBvcHRpb24geW91IG5lZWQuXG4gICAgICovXG4gICAgZGlzYWJsZT86IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBUaGUgd2VsY29tZSBub3RpZmljYXRpb24ncyBtZXNzYWdlLiBZb3UgY2FuIGxvY2FsaXplIHRoaXMgdG8geW91ciBvd24gbGFuZ3VhZ2UuXG4gICAgICogSWYgbGVmdCBibGFuayBvciBzZXQgdG8gYmxhbmssIHRoZSBkZWZhdWx0IG9mICdUaGFua3MgZm9yIHN1YnNjcmliaW5nIScgd2lsbCBiZSB1c2VkLlxuICAgICAqL1xuICAgIG1lc3NhZ2U6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIFRoZSB3ZWxjb21lIG5vdGlmaWNhdGlvbidzIHRpdGxlLiBZb3UgY2FuIGxvY2FsaXplIHRoaXMgdG8geW91ciBvd24gbGFuZ3VhZ2UuIElmIG5vdCBzZXQsIG9yIGxlZnQgYmxhbmssIHRoZSBzaXRlJ3MgdGl0bGUgd2lsbCBiZSB1c2VkLlxuICAgICAqIFNldCB0byBvbmUgc3BhY2UgJyAnIHRvIGNsZWFyIHRoZSB0aXRsZSwgYWx0aG91Z2ggdGhpcyBpcyBub3QgcmVjb21tZW5kZWQuXG4gICAgICovXG4gICAgdGl0bGU/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBCeSBkZWZhdWx0LCBjbGlja2luZyB0aGUgd2VsY29tZSBub3RpZmljYXRpb24gZG9lcyBub3Qgb3BlbiBhbnkgbGluay5cbiAgICAgKiBUaGlzIGlzIHJlY29tbWVuZGVkIGJlY2F1c2UgdGhlIHVzZXIgaGFzIGp1c3QgdmlzaXRlZCB5b3VyIHNpdGUgYW5kIHN1YnNjcmliZWQuXG4gICAgICovXG4gICAgdXJsPzogc3RyaW5nO1xuICB9O1xuXG4gIC8qKlxuICAgKiBXaWxsIGVuYWJsZSBjdXN0b21pemF0aW9uIG9mIHRoZSBub3RpZnkvc3Vic2NyaXB0aW9uIGJlbGwgYnV0dG9uLlxuICAgKi9cbiAgbm90aWZ5QnV0dG9uPzoge1xuICAgIC8qKlxuICAgICAqIEEgZnVuY3Rpb24geW91IGRlZmluZSB0aGF0IHJldHVybnMgdHJ1ZSB0byBzaG93IHRoZSBTdWJzY3JpcHRpb24gQmVsbCwgb3IgZmFsc2UgdG8gaGlkZSBpdC5cbiAgICAgKiBUeXBpY2FsbHkgdXNlZCB0aGUgaGlkZSB0aGUgU3Vic2NyaXB0aW9uIEJlbGwgYWZ0ZXIgdGhlIHVzZXIgaXMgc3Vic2NyaWJlZC5cbiAgICAgKiBUaGlzIGZ1bmN0aW9uIGlzIG5vdCByZS1ldmFsdWF0ZWQgb24gZXZlcnkgc3RhdGUgY2hhbmdlOyB0aGlzIGZ1bmN0aW9uIGlzIG9ubHkgZXZhbHVhdGVkIG9uY2Ugd2hlbiB0aGUgU3Vic2NyaXB0aW9uIEJlbGwgYmVnaW5zIHRvIHNob3cuXG4gICAgICovXG4gICAgZGlzcGxheVByZWRpY2F0ZT86ICgpID0+IGJvb2xlYW4gfCBQcm9taXNlPGJvb2xlYW4+O1xuXG4gICAgLyoqXG4gICAgICogRW5hYmxlIHRoZSBTdWJzY3JpcHRpb24gQmVsbC4gVGhlIFN1YnNjcmlwdGlvbiBCZWxsIGlzIG90aGVyd2lzZSBkaXNhYmxlZCBieSBkZWZhdWx0LlxuICAgICAqL1xuICAgIGVuYWJsZT86IGJvb2xlYW47XG5cbiAgICAvKiogU3BlY2lmeSBDU1MtdmFsaWQgcGl4ZWwgb2Zmc2V0cyB1c2luZyBib3R0b20sIGxlZnQsIGFuZCByaWdodC4gKi9cbiAgICBvZmZzZXQ/OiB7IGJvdHRvbTogc3RyaW5nOyBsZWZ0OiBzdHJpbmc7IHJpZ2h0OiBzdHJpbmcgfTtcblxuICAgIC8qKlxuICAgICAqIElmIGB0cnVlYCwgdGhlIFN1YnNjcmlwdGlvbiBCZWxsIHdpbGwgZGlzcGxheSBhbiBpY29uIHRoYXQgdGhlcmUgaXMgMSB1bnJlYWQgbWVzc2FnZS5cbiAgICAgKiBXaGVuIGhvdmVyaW5nIG92ZXIgdGhlIFN1YnNjcmlwdGlvbiBCZWxsLCB0aGUgdXNlciB3aWxsIHNlZSBjdXN0b20gdGV4dCBzZXQgYnkgbWVzc2FnZS5wcmVub3RpZnkuXG4gICAgICovXG4gICAgcHJlbm90aWZ5OiBib29sZWFuO1xuXG4gICAgLyoqIEVpdGhlciBgYm90dG9tLWxlZnRgIG9yIGBib3R0b20tcmlnaHRgLiBUaGUgU3Vic2NyaXB0aW9uIEJlbGwgd2lsbCBiZSBmaXhlZCBhdCB0aGlzIGxvY2F0aW9uIG9uIHlvdXIgcGFnZS4gKi9cbiAgICBwb3NpdGlvbj86ICdib3R0b20tbGVmdCcgfCAnYm90dG9tLXJpZ2h0JztcblxuICAgIC8qKiAgU2V0IGBmYWxzZWAgdG8gaGlkZSB0aGUgJ1Bvd2VyZWQgYnkgT25lU2lnbmFsJyB0ZXh0IGluIHRoZSBTdWJzY3JpcHRpb24gQmVsbCBkaWFsb2cgcG9wdXAuICovXG4gICAgc2hvd0NyZWRpdDogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIFRoZSBTdWJzY3JpcHRpb24gQmVsbCB3aWxsIGluaXRpYWxseSBhcHBlYXIgYXQgb25lIG9mIHRoZXNlIHNpemVzLCBhbmQgdGhlbiBzaHJpbmsgZG93biB0byBzaXplIGBzbWFsbGAgYWZ0ZXIgdGhlIHVzZXIgc3Vic2NyaWJlcy5cbiAgICAgKi9cbiAgICBzaXplPzogJ3NtYWxsJyB8ICdtZWRpdW0nIHwgJ2xhcmdlJztcblxuICAgIC8qKiBDdXN0b21pemUgdGhlIFN1YnNjcmlwdGlvbiBCZWxsIHRleHQuICovXG4gICAgdGV4dDoge1xuICAgICAgJ2RpYWxvZy5ibG9ja2VkLm1lc3NhZ2UnOiBzdHJpbmc7XG4gICAgICAnZGlhbG9nLmJsb2NrZWQudGl0bGUnOiBzdHJpbmc7XG4gICAgICAnZGlhbG9nLm1haW4uYnV0dG9uLnN1YnNjcmliZSc6IHN0cmluZztcbiAgICAgICdkaWFsb2cubWFpbi5idXR0b24udW5zdWJzY3JpYmUnOiBzdHJpbmc7XG4gICAgICAnZGlhbG9nLm1haW4udGl0bGUnOiBzdHJpbmc7XG4gICAgICAnbWVzc2FnZS5hY3Rpb24ucmVzdWJzY3JpYmVkJzogc3RyaW5nO1xuICAgICAgJ21lc3NhZ2UuYWN0aW9uLnN1YnNjcmliZWQnOiBzdHJpbmc7XG4gICAgICAnbWVzc2FnZS5hY3Rpb24uc3Vic2NyaWJpbmcnOiBzdHJpbmc7XG4gICAgICAnbWVzc2FnZS5hY3Rpb24udW5zdWJzY3JpYmVkJzogc3RyaW5nO1xuICAgICAgJ21lc3NhZ2UucHJlbm90aWZ5Jzogc3RyaW5nO1xuICAgICAgJ3RpcC5zdGF0ZS5ibG9ja2VkJzogc3RyaW5nO1xuICAgICAgJ3RpcC5zdGF0ZS5zdWJzY3JpYmVkJzogc3RyaW5nO1xuICAgICAgJ3RpcC5zdGF0ZS51bnN1YnNjcmliZWQnOiBzdHJpbmc7XG4gICAgfTtcbiAgfTtcblxuICBwZXJzaXN0Tm90aWZpY2F0aW9uPzogYm9vbGVhbjtcbiAgd2ViaG9va3M/OiB7XG4gICAgLyoqXG4gICAgICogRW5hYmxlIHRoaXMgc2V0dGluZyBvbmx5IGlmIHlvdXIgc2VydmVyIGhhcyBDT1JTIGVuYWJsZWQgYW5kIHN1cHBvcnRzIG5vbi1zaW1wbGUgQ09SUyByZXF1ZXN0cy5cbiAgICAgKiBJZiB0aGlzIHNldHRpbmcgaXMgZGlzYWJsZWQsIHlvdXIgd2ViaG9vayB3aWxsIG5vdCBuZWVkIENPUlMgdG8gcmVjZWl2ZSBkYXRhLCBidXQgaXQgd2lsbCBub3QgcmVjZWl2ZSB0aGUgY3VzdG9tIGhlYWRlcnMuXG4gICAgICogVGhlIHNpbXBsZXN0IG9wdGlvbiBpcyB0byBsZWF2ZSBpdCBkaXNhYmxlZC5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuICAgIGNvcnM6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGV2ZW50IG9jY3VycyBhZnRlciBhIG5vdGlmaWNhdGlvbiBpcyBjbGlja2VkLlxuICAgICAqIEBleGFtcGxlIGh0dHBzOi8vc2l0ZS5jb20vaG9va1xuICAgICAqL1xuICAgICdub3RpZmljYXRpb24uY2xpY2tlZCc/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGV2ZW50IG9jY3VycyBhZnRlciBhIG5vdGlmaWNhdGlvbiBpcyBpbnRlbnRpb25hbGx5IGRpc21pc3NlZCBieSB0aGUgdXNlciAoY2xpY2tpbmcgdGhlIG5vdGlmaWNhdGlvbiBib2R5IG9yIG9uZSBvZiB0aGUgbm90aWZpY2F0aW9uIGFjdGlvbiBidXR0b25zIGRvZXMgbm90IHRyaWdnZXIgdGhlIGRpc21pc3NlZCB3ZWJob29rKSxcbiAgICAgKiBhZnRlciBhIGdyb3VwIG9mIG5vdGlmaWNhdGlvbnMgYXJlIGFsbCBkaXNtaXNzZWQgKHdpdGggdGhpcyBub3RpZmljYXRpb24gYXMgcGFydCBvZiB0aGF0IGdyb3VwKSwgb3IgYWZ0ZXIgYSBub3RpZmljYXRpb24gZXhwaXJlcyBvbiBpdHMgb3duIHRpbWUgYW5kIGRpc2FwcGVhcnMuIFRoaXMgZXZlbnQgaXMgc3VwcG9ydGVkIG9uIENocm9tZSBvbmx5LlxuICAgICAqIEBleGFtcGxlIGh0dHBzOi8vc2l0ZS5jb20vaG9va1xuICAgICAqL1xuICAgICdub3RpZmljYXRpb24uZGlzbWlzc2VkJz86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIFRoaXMgZXZlbnQgb2NjdXJzIGFmdGVyIGEgbm90aWZpY2F0aW9uIGlzIGRpc3BsYXllZC5cbiAgICAgKiBAZXhhbXBsZSBodHRwczovL3NpdGUuY29tL2hvb2tcbiAgICAgKi9cbiAgICAnbm90aWZpY2F0aW9uLndpbGxEaXNwbGF5Jz86IHN0cmluZztcbiAgfTtcbiAgYXV0b1Jlc3Vic2NyaWJlPzogYm9vbGVhbjtcbiAgYXV0b1JlZ2lzdGVyPzogYm9vbGVhbjtcbiAgbm90aWZpY2F0aW9uQ2xpY2tIYW5kbGVyTWF0Y2g/OiAnZXhhY3QnIHwgJ29yaWdpbic7XG4gIG5vdGlmaWNhdGlvbkNsaWNrSGFuZGxlckFjdGlvbj86ICduYXZpZ2F0ZScgfCAnZm9jdXMnO1xuICBwYXRoPzogc3RyaW5nO1xuICBzZXJ2aWNlV29ya2VyUGFyYW0/OiB7IHNjb3BlOiBzdHJpbmcgfTtcbiAgc2VydmljZVdvcmtlclBhdGg/OiBzdHJpbmc7XG4gIHNlcnZpY2VXb3JrZXJPdmVycmlkZUZvclR5cGljYWw/OiBib29sZWFuO1xuICAvKipcbiAgICogT3ZlcnJpZGVzIHRoZSBkZWZhdWx0IE9uZVNpZ25hbCBTREsgc2NyaXB0IFVSTC5cbiAgICogVXNlIHRoaXMgdG8gc2VsZi1ob3N0IHRoZSBTREsgc2NyaXB0IG9uIHlvdXIgb3duIGRvbWFpbiwgZS5nLiB0byBjb21wbHlcbiAgICogd2l0aCBzdHJpY3QgQ3Jvc3MtT3JpZ2luLUVtYmVkZGVyLVBvbGljeSAoQ09FUCkgb3IgQ29udGVudC1TZWN1cml0eS1Qb2xpY3kgKENTUCkgaGVhZGVycy5cbiAgICogQGRlZmF1bHQgJ2h0dHBzOi8vY2RuLm9uZXNpZ25hbC5jb20vc2Rrcy93ZWIvdjE2L09uZVNpZ25hbFNESy5wYWdlLmpzJ1xuICAgKi9cbiAgc2NyaXB0U3JjPzogc3RyaW5nO1xuICBba2V5OiBzdHJpbmddOiB1bmtub3duO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElPbmVTaWduYWxPbmVTaWduYWwge1xuXHRTbGlkZWRvd246IElPbmVTaWduYWxTbGlkZWRvd247XG5cdE5vdGlmaWNhdGlvbnM6IElPbmVTaWduYWxOb3RpZmljYXRpb25zO1xuXHRTZXNzaW9uOiBJT25lU2lnbmFsU2Vzc2lvbjtcblx0VXNlcjogSU9uZVNpZ25hbFVzZXI7XG5cdERlYnVnOiBJT25lU2lnbmFsRGVidWc7XG5cdGxvZ2luKGV4dGVybmFsSWQ6IHN0cmluZywgand0VG9rZW4/OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+O1xuXHRsb2dvdXQoKTogUHJvbWlzZTx2b2lkPjtcblx0aW5pdChvcHRpb25zOiBJSW5pdE9iamVjdCk6IFByb21pc2U8dm9pZD47XG5cdHNldENvbnNlbnRHaXZlbihjb25zZW50OiBib29sZWFuKTogUHJvbWlzZTx2b2lkPjtcblx0c2V0Q29uc2VudFJlcXVpcmVkKHJlcXVpcmVzQ29uc2VudDogYm9vbGVhbik6IHZvaWQ7XG59XG5leHBvcnQgaW50ZXJmYWNlIElPbmVTaWduYWxOb3RpZmljYXRpb25zIHtcblx0cGVybWlzc2lvbk5hdGl2ZTogTm90aWZpY2F0aW9uUGVybWlzc2lvbjtcblx0cGVybWlzc2lvbjogYm9vbGVhbjtcblx0c2V0RGVmYXVsdFVybCh1cmw6IHN0cmluZyk6IFByb21pc2U8dm9pZD47XG5cdHNldERlZmF1bHRUaXRsZSh0aXRsZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPjtcblx0aXNQdXNoU3VwcG9ydGVkKCk6IGJvb2xlYW47XG5cdHJlcXVlc3RQZXJtaXNzaW9uKCk6IFByb21pc2U8Ym9vbGVhbj47XG5cdGFkZEV2ZW50TGlzdGVuZXI8SyBleHRlbmRzIE5vdGlmaWNhdGlvbkV2ZW50TmFtZT4oZXZlbnQ6IEssIGxpc3RlbmVyOiAob2JqOiBOb3RpZmljYXRpb25FdmVudFR5cGVNYXBbS10pID0+IHZvaWQpOiB2b2lkO1xuXHRyZW1vdmVFdmVudExpc3RlbmVyPEsgZXh0ZW5kcyBOb3RpZmljYXRpb25FdmVudE5hbWU+KGV2ZW50OiBLLCBsaXN0ZW5lcjogKG9iajogTm90aWZpY2F0aW9uRXZlbnRUeXBlTWFwW0tdKSA9PiB2b2lkKTogdm9pZDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSU9uZVNpZ25hbFNsaWRlZG93biB7XG5cdHByb21wdFB1c2gob3B0aW9ucz86IEF1dG9Qcm9tcHRPcHRpb25zKTogUHJvbWlzZTx2b2lkPjtcblx0cHJvbXB0UHVzaENhdGVnb3JpZXMob3B0aW9ucz86IEF1dG9Qcm9tcHRPcHRpb25zKTogUHJvbWlzZTx2b2lkPjtcblx0cHJvbXB0U21zKG9wdGlvbnM/OiBBdXRvUHJvbXB0T3B0aW9ucyk6IFByb21pc2U8dm9pZD47XG5cdHByb21wdEVtYWlsKG9wdGlvbnM/OiBBdXRvUHJvbXB0T3B0aW9ucyk6IFByb21pc2U8dm9pZD47XG5cdHByb21wdFNtc0FuZEVtYWlsKG9wdGlvbnM/OiBBdXRvUHJvbXB0T3B0aW9ucyk6IFByb21pc2U8dm9pZD47XG5cdGFkZEV2ZW50TGlzdGVuZXIoZXZlbnQ6IFNsaWRlZG93bkV2ZW50TmFtZSwgbGlzdGVuZXI6ICh3YXNTaG93bjogYm9vbGVhbikgPT4gdm9pZCk6IHZvaWQ7XG5cdHJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQ6IFNsaWRlZG93bkV2ZW50TmFtZSwgbGlzdGVuZXI6ICh3YXNTaG93bjogYm9vbGVhbikgPT4gdm9pZCk6IHZvaWQ7XG59XG5leHBvcnQgaW50ZXJmYWNlIElPbmVTaWduYWxEZWJ1ZyB7XG5cdHNldExvZ0xldmVsKGxvZ0xldmVsOiAndHJhY2UnIHwgJ2RlYnVnJyB8ICdpbmZvJyB8ICd3YXJuJyB8ICdlcnJvcicpOiB2b2lkO1xufVxuZXhwb3J0IGludGVyZmFjZSBJT25lU2lnbmFsU2Vzc2lvbiB7XG5cdHNlbmRPdXRjb21lKG91dGNvbWVOYW1lOiBzdHJpbmcsIG91dGNvbWVXZWlnaHQ/OiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+O1xuXHRzZW5kVW5pcXVlT3V0Y29tZShvdXRjb21lTmFtZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSU9uZVNpZ25hbFVzZXIge1xuXHRvbmVzaWduYWxJZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHRleHRlcm5hbElkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdFB1c2hTdWJzY3JpcHRpb246IElPbmVTaWduYWxQdXNoU3Vic2NyaXB0aW9uO1xuXHRhZGRBbGlhcyhsYWJlbDogc3RyaW5nLCBpZDogc3RyaW5nKTogdm9pZDtcblx0YWRkQWxpYXNlcyhhbGlhc2VzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KTogdm9pZDtcblx0cmVtb3ZlQWxpYXMobGFiZWw6IHN0cmluZyk6IHZvaWQ7XG5cdHJlbW92ZUFsaWFzZXMobGFiZWxzOiBzdHJpbmdbXSk6IHZvaWQ7XG5cdGFkZEVtYWlsKGVtYWlsOiBzdHJpbmcpOiB2b2lkO1xuXHRyZW1vdmVFbWFpbChlbWFpbDogc3RyaW5nKTogdm9pZDtcblx0YWRkU21zKHNtc051bWJlcjogc3RyaW5nKTogdm9pZDtcblx0cmVtb3ZlU21zKHNtc051bWJlcjogc3RyaW5nKTogdm9pZDtcblx0YWRkVGFnKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZDtcblx0YWRkVGFncyh0YWdzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KTogdm9pZDtcblx0cmVtb3ZlVGFnKGtleTogc3RyaW5nKTogdm9pZDtcblx0cmVtb3ZlVGFncyhrZXlzOiBzdHJpbmdbXSk6IHZvaWQ7XG5cdGdldFRhZ3MoKTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcblx0YWRkRXZlbnRMaXN0ZW5lcihldmVudDogJ2NoYW5nZScsIGxpc3RlbmVyOiAoY2hhbmdlOiBVc2VyQ2hhbmdlRXZlbnQpID0+IHZvaWQpOiB2b2lkO1xuXHRyZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50OiAnY2hhbmdlJywgbGlzdGVuZXI6IChjaGFuZ2U6IFVzZXJDaGFuZ2VFdmVudCkgPT4gdm9pZCk6IHZvaWQ7XG5cdHNldExhbmd1YWdlKGxhbmd1YWdlOiBzdHJpbmcpOiB2b2lkO1xuXHRnZXRMYW5ndWFnZSgpOiBzdHJpbmc7XG5cdHRyYWNrRXZlbnQobmFtZTogc3RyaW5nLCBwcm9wZXJ0aWVzPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj4pOiB2b2lkO1xufVxuZXhwb3J0IGludGVyZmFjZSBJT25lU2lnbmFsUHVzaFN1YnNjcmlwdGlvbiB7XG5cdGlkOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkO1xuXHR0b2tlbjogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZDtcblx0b3B0ZWRJbjogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblx0b3B0SW4oKTogUHJvbWlzZTx2b2lkPjtcblx0b3B0T3V0KCk6IFByb21pc2U8dm9pZD47XG5cdGFkZEV2ZW50TGlzdGVuZXIoZXZlbnQ6ICdjaGFuZ2UnLCBsaXN0ZW5lcjogKGNoYW5nZTogU3Vic2NyaXB0aW9uQ2hhbmdlRXZlbnQpID0+IHZvaWQpOiB2b2lkO1xuXHRyZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50OiAnY2hhbmdlJywgbGlzdGVuZXI6IChjaGFuZ2U6IFN1YnNjcmlwdGlvbkNoYW5nZUV2ZW50KSA9PiB2b2lkKTogdm9pZDtcbn1cbmZ1bmN0aW9uIG9uZVNpZ25hbExvZ2luKGV4dGVybmFsSWQ6IHN0cmluZywgand0VG9rZW4/OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQpIHtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoJ09uZVNpZ25hbCBzY3JpcHQgZmFpbGVkIHRvIGxvYWQuJykpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgICBvbmVTaWduYWwubG9naW4oZXh0ZXJuYWxJZCwgand0VG9rZW4pXG4gICAgICAgIC50aGVuKCgpID0+IHJlc29sdmUoKSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHJlamVjdChlcnJvcikpO1xuICAgIH0pO1xuICB9KTtcbn1cbmZ1bmN0aW9uIG9uZVNpZ25hbExvZ291dCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQpIHtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoJ09uZVNpZ25hbCBzY3JpcHQgZmFpbGVkIHRvIGxvYWQuJykpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgICBvbmVTaWduYWwubG9nb3V0KClcbiAgICAgICAgLnRoZW4oKCkgPT4gcmVzb2x2ZSgpKVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgfSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gb25lU2lnbmFsU2V0Q29uc2VudEdpdmVuKGNvbnNlbnQ6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQpIHtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoJ09uZVNpZ25hbCBzY3JpcHQgZmFpbGVkIHRvIGxvYWQuJykpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgICBvbmVTaWduYWwuc2V0Q29uc2VudEdpdmVuKGNvbnNlbnQpXG4gICAgICAgIC50aGVuKCgpID0+IHJlc29sdmUoKSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHJlamVjdChlcnJvcikpO1xuICAgIH0pO1xuICB9KTtcbn1cbmZ1bmN0aW9uIG9uZVNpZ25hbFNldENvbnNlbnRSZXF1aXJlZChyZXF1aXJlc0NvbnNlbnQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuc2V0Q29uc2VudFJlcXVpcmVkKHJlcXVpcmVzQ29uc2VudCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzbGlkZWRvd25Qcm9tcHRQdXNoKG9wdGlvbnM/OiBBdXRvUHJvbXB0T3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCkge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcignT25lU2lnbmFsIHNjcmlwdCBmYWlsZWQgdG8gbG9hZC4nKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC5TbGlkZWRvd24ucHJvbXB0UHVzaChvcHRpb25zKVxuICAgICAgICAudGhlbigoKSA9PiByZXNvbHZlKCkpXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiByZWplY3QoZXJyb3IpKTtcbiAgICB9KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBzbGlkZWRvd25Qcm9tcHRQdXNoQ2F0ZWdvcmllcyhvcHRpb25zPzogQXV0b1Byb21wdE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQpIHtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoJ09uZVNpZ25hbCBzY3JpcHQgZmFpbGVkIHRvIGxvYWQuJykpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgICBvbmVTaWduYWwuU2xpZGVkb3duLnByb21wdFB1c2hDYXRlZ29yaWVzKG9wdGlvbnMpXG4gICAgICAgIC50aGVuKCgpID0+IHJlc29sdmUoKSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHJlamVjdChlcnJvcikpO1xuICAgIH0pO1xuICB9KTtcbn1cbmZ1bmN0aW9uIHNsaWRlZG93blByb21wdFNtcyhvcHRpb25zPzogQXV0b1Byb21wdE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQpIHtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoJ09uZVNpZ25hbCBzY3JpcHQgZmFpbGVkIHRvIGxvYWQuJykpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgICBvbmVTaWduYWwuU2xpZGVkb3duLnByb21wdFNtcyhvcHRpb25zKVxuICAgICAgICAudGhlbigoKSA9PiByZXNvbHZlKCkpXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiByZWplY3QoZXJyb3IpKTtcbiAgICB9KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBzbGlkZWRvd25Qcm9tcHRFbWFpbChvcHRpb25zPzogQXV0b1Byb21wdE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQpIHtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoJ09uZVNpZ25hbCBzY3JpcHQgZmFpbGVkIHRvIGxvYWQuJykpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgICBvbmVTaWduYWwuU2xpZGVkb3duLnByb21wdEVtYWlsKG9wdGlvbnMpXG4gICAgICAgIC50aGVuKCgpID0+IHJlc29sdmUoKSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHJlamVjdChlcnJvcikpO1xuICAgIH0pO1xuICB9KTtcbn1cbmZ1bmN0aW9uIHNsaWRlZG93blByb21wdFNtc0FuZEVtYWlsKG9wdGlvbnM/OiBBdXRvUHJvbXB0T3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCkge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcignT25lU2lnbmFsIHNjcmlwdCBmYWlsZWQgdG8gbG9hZC4nKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC5TbGlkZWRvd24ucHJvbXB0U21zQW5kRW1haWwob3B0aW9ucylcbiAgICAgICAgLnRoZW4oKCkgPT4gcmVzb2x2ZSgpKVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgfSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gc2xpZGVkb3duQWRkRXZlbnRMaXN0ZW5lcihldmVudDogU2xpZGVkb3duRXZlbnROYW1lLCBsaXN0ZW5lcjogKHdhc1Nob3duOiBib29sZWFuKSA9PiB2b2lkKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlNsaWRlZG93bi5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzbGlkZWRvd25SZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50OiBTbGlkZWRvd25FdmVudE5hbWUsIGxpc3RlbmVyOiAod2FzU2hvd246IGJvb2xlYW4pID0+IHZvaWQpOiB2b2lkIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuU2xpZGVkb3duLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG5vdGlmaWNhdGlvbnNTZXREZWZhdWx0VXJsKHVybDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgaWYgKGlzT25lU2lnbmFsU2NyaXB0RmFpbGVkKSB7XG4gICAgICByZWplY3QobmV3IEVycm9yKCdPbmVTaWduYWwgc2NyaXB0IGZhaWxlZCB0byBsb2FkLicpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgICAgb25lU2lnbmFsLk5vdGlmaWNhdGlvbnMuc2V0RGVmYXVsdFVybCh1cmwpXG4gICAgICAgIC50aGVuKCgpID0+IHJlc29sdmUoKSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHJlamVjdChlcnJvcikpO1xuICAgIH0pO1xuICB9KTtcbn1cbmZ1bmN0aW9uIG5vdGlmaWNhdGlvbnNTZXREZWZhdWx0VGl0bGUodGl0bGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCkge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcignT25lU2lnbmFsIHNjcmlwdCBmYWlsZWQgdG8gbG9hZC4nKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC5Ob3RpZmljYXRpb25zLnNldERlZmF1bHRUaXRsZSh0aXRsZSlcbiAgICAgICAgLnRoZW4oKCkgPT4gcmVzb2x2ZSgpKVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgfSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gbm90aWZpY2F0aW9uc1JlcXVlc3RQZXJtaXNzaW9uKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCkge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcignT25lU2lnbmFsIHNjcmlwdCBmYWlsZWQgdG8gbG9hZC4nKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC5Ob3RpZmljYXRpb25zLnJlcXVlc3RQZXJtaXNzaW9uKClcbiAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHJlc29sdmUocmVzdWx0KSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHJlamVjdChlcnJvcikpO1xuICAgIH0pO1xuICB9KTtcbn1cbmZ1bmN0aW9uIG5vdGlmaWNhdGlvbnNBZGRFdmVudExpc3RlbmVyPEsgZXh0ZW5kcyBOb3RpZmljYXRpb25FdmVudE5hbWU+KGV2ZW50OiBLLCBsaXN0ZW5lcjogKG9iajogTm90aWZpY2F0aW9uRXZlbnRUeXBlTWFwW0tdKSA9PiB2b2lkKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLk5vdGlmaWNhdGlvbnMuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbm90aWZpY2F0aW9uc1JlbW92ZUV2ZW50TGlzdGVuZXI8SyBleHRlbmRzIE5vdGlmaWNhdGlvbkV2ZW50TmFtZT4oZXZlbnQ6IEssIGxpc3RlbmVyOiAob2JqOiBOb3RpZmljYXRpb25FdmVudFR5cGVNYXBbS10pID0+IHZvaWQpOiB2b2lkIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuTm90aWZpY2F0aW9ucy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzZXNzaW9uU2VuZE91dGNvbWUob3V0Y29tZU5hbWU6IHN0cmluZywgb3V0Y29tZVdlaWdodD86IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCkge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcignT25lU2lnbmFsIHNjcmlwdCBmYWlsZWQgdG8gbG9hZC4nKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC5TZXNzaW9uLnNlbmRPdXRjb21lKG91dGNvbWVOYW1lLCBvdXRjb21lV2VpZ2h0KVxuICAgICAgICAudGhlbigoKSA9PiByZXNvbHZlKCkpXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiByZWplY3QoZXJyb3IpKTtcbiAgICB9KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBzZXNzaW9uU2VuZFVuaXF1ZU91dGNvbWUob3V0Y29tZU5hbWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCkge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcignT25lU2lnbmFsIHNjcmlwdCBmYWlsZWQgdG8gbG9hZC4nKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC5TZXNzaW9uLnNlbmRVbmlxdWVPdXRjb21lKG91dGNvbWVOYW1lKVxuICAgICAgICAudGhlbigoKSA9PiByZXNvbHZlKCkpXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiByZWplY3QoZXJyb3IpKTtcbiAgICB9KTtcbiAgfSk7XG59XG5mdW5jdGlvbiB1c2VyQWRkQWxpYXMobGFiZWw6IHN0cmluZywgaWQ6IHN0cmluZyk6IHZvaWQge1xuICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgIG9uZVNpZ25hbC5Vc2VyLmFkZEFsaWFzKGxhYmVsLCBpZCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1c2VyQWRkQWxpYXNlcyhhbGlhc2VzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlVzZXIuYWRkQWxpYXNlcyhhbGlhc2VzKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVzZXJSZW1vdmVBbGlhcyhsYWJlbDogc3RyaW5nKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlVzZXIucmVtb3ZlQWxpYXMobGFiZWwpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdXNlclJlbW92ZUFsaWFzZXMobGFiZWxzOiBzdHJpbmdbXSk6IHZvaWQge1xuICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgIG9uZVNpZ25hbC5Vc2VyLnJlbW92ZUFsaWFzZXMobGFiZWxzKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVzZXJBZGRFbWFpbChlbWFpbDogc3RyaW5nKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlVzZXIuYWRkRW1haWwoZW1haWwpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdXNlclJlbW92ZUVtYWlsKGVtYWlsOiBzdHJpbmcpOiB2b2lkIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuVXNlci5yZW1vdmVFbWFpbChlbWFpbCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1c2VyQWRkU21zKHNtc051bWJlcjogc3RyaW5nKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlVzZXIuYWRkU21zKHNtc051bWJlcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1c2VyUmVtb3ZlU21zKHNtc051bWJlcjogc3RyaW5nKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlVzZXIucmVtb3ZlU21zKHNtc051bWJlcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1c2VyQWRkVGFnKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlVzZXIuYWRkVGFnKGtleSwgdmFsdWUpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdXNlckFkZFRhZ3ModGFnczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSk6IHZvaWQge1xuICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgIG9uZVNpZ25hbC5Vc2VyLmFkZFRhZ3ModGFncyk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1c2VyUmVtb3ZlVGFnKGtleTogc3RyaW5nKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlVzZXIucmVtb3ZlVGFnKGtleSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1c2VyUmVtb3ZlVGFncyhrZXlzOiBzdHJpbmdbXSk6IHZvaWQge1xuICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgIG9uZVNpZ25hbC5Vc2VyLnJlbW92ZVRhZ3Moa2V5cyk7XG4gIH0pO1xufVxuXG4vLyBAdHMtZXhwZWN0LWVycm9yIC0gcmV0dXJuIG5vbi1Qcm9taXNlIHR5cGUgZGVzcGl0ZSBuZWVkaW5nIHRvIGF3YWl0IE9uZVNpZ25hbERlZmVycmVkXG5hc3luYyBmdW5jdGlvbiB1c2VyR2V0VGFncygpOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHtcbiAgbGV0IHJldFZhbDogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgYXdhaXQgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICByZXRWYWwgPSBvbmVTaWduYWwuVXNlci5nZXRUYWdzKCk7XG4gIH0pO1xuICAvLyBAdHMtaWdub3JlXG4gIHJldHVybiByZXRWYWw7XG59XG5cbmZ1bmN0aW9uIHVzZXJBZGRFdmVudExpc3RlbmVyKGV2ZW50OiAnY2hhbmdlJywgbGlzdGVuZXI6IChjaGFuZ2U6IFVzZXJDaGFuZ2VFdmVudCkgPT4gdm9pZCk6IHZvaWQge1xuICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgIG9uZVNpZ25hbC5Vc2VyLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVzZXJSZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50OiAnY2hhbmdlJywgbGlzdGVuZXI6IChjaGFuZ2U6IFVzZXJDaGFuZ2VFdmVudCkgPT4gdm9pZCk6IHZvaWQge1xuICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgIG9uZVNpZ25hbC5Vc2VyLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVzZXJTZXRMYW5ndWFnZShsYW5ndWFnZTogc3RyaW5nKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlVzZXIuc2V0TGFuZ3VhZ2UobGFuZ3VhZ2UpO1xuICB9KTtcbn1cblxuLy8gQHRzLWV4cGVjdC1lcnJvciAtIHJldHVybiBub24tUHJvbWlzZSB0eXBlIGRlc3BpdGUgbmVlZGluZyB0byBhd2FpdCBPbmVTaWduYWxEZWZlcnJlZFxuYXN5bmMgZnVuY3Rpb24gdXNlckdldExhbmd1YWdlKCk6IHN0cmluZyB7XG4gIGxldCByZXRWYWw6IHN0cmluZztcbiAgYXdhaXQgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICByZXRWYWwgPSBvbmVTaWduYWwuVXNlci5nZXRMYW5ndWFnZSgpO1xuICB9KTtcbiAgLy8gQHRzLWlnbm9yZVxuICByZXR1cm4gcmV0VmFsO1xufVxuXG5mdW5jdGlvbiB1c2VyVHJhY2tFdmVudChuYW1lOiBzdHJpbmcsIHByb3BlcnRpZXM/OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPik6IHZvaWQge1xuICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgIG9uZVNpZ25hbC5Vc2VyLnRyYWNrRXZlbnQobmFtZSwgcHJvcGVydGllcyk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBwdXNoU3Vic2NyaXB0aW9uT3B0SW4oKTogUHJvbWlzZTx2b2lkPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgaWYgKGlzT25lU2lnbmFsU2NyaXB0RmFpbGVkKSB7XG4gICAgICByZWplY3QobmV3IEVycm9yKCdPbmVTaWduYWwgc2NyaXB0IGZhaWxlZCB0byBsb2FkLicpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgICAgb25lU2lnbmFsLlVzZXIuUHVzaFN1YnNjcmlwdGlvbi5vcHRJbigpXG4gICAgICAgIC50aGVuKCgpID0+IHJlc29sdmUoKSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHJlamVjdChlcnJvcikpO1xuICAgIH0pO1xuICB9KTtcbn1cbmZ1bmN0aW9uIHB1c2hTdWJzY3JpcHRpb25PcHRPdXQoKTogUHJvbWlzZTx2b2lkPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgaWYgKGlzT25lU2lnbmFsU2NyaXB0RmFpbGVkKSB7XG4gICAgICByZWplY3QobmV3IEVycm9yKCdPbmVTaWduYWwgc2NyaXB0IGZhaWxlZCB0byBsb2FkLicpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgICAgb25lU2lnbmFsLlVzZXIuUHVzaFN1YnNjcmlwdGlvbi5vcHRPdXQoKVxuICAgICAgICAudGhlbigoKSA9PiByZXNvbHZlKCkpXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiByZWplY3QoZXJyb3IpKTtcbiAgICB9KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBwdXNoU3Vic2NyaXB0aW9uQWRkRXZlbnRMaXN0ZW5lcihldmVudDogJ2NoYW5nZScsIGxpc3RlbmVyOiAoY2hhbmdlOiBTdWJzY3JpcHRpb25DaGFuZ2VFdmVudCkgPT4gdm9pZCk6IHZvaWQge1xuICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgIG9uZVNpZ25hbC5Vc2VyLlB1c2hTdWJzY3JpcHRpb24uYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcHVzaFN1YnNjcmlwdGlvblJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQ6ICdjaGFuZ2UnLCBsaXN0ZW5lcjogKGNoYW5nZTogU3Vic2NyaXB0aW9uQ2hhbmdlRXZlbnQpID0+IHZvaWQpOiB2b2lkIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuVXNlci5QdXNoU3Vic2NyaXB0aW9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRlYnVnU2V0TG9nTGV2ZWwobG9nTGV2ZWw6ICd0cmFjZScgfCAnZGVidWcnIHwgJ2luZm8nIHwgJ3dhcm4nIHwgJ2Vycm9yJyk6IHZvaWQge1xuICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgIG9uZVNpZ25hbC5EZWJ1Zy5zZXRMb2dMZXZlbChsb2dMZXZlbCk7XG4gIH0pO1xufVxuXG5cbmNvbnN0IFB1c2hTdWJzY3JpcHRpb25OYW1lc3BhY2U6IElPbmVTaWduYWxQdXNoU3Vic2NyaXB0aW9uID0ge1xuXHRnZXQgaWQoKTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCB7IHJldHVybiB3aW5kb3cuT25lU2lnbmFsPy5Vc2VyPy5QdXNoU3Vic2NyaXB0aW9uPy5pZDsgfSxcblx0Z2V0IHRva2VuKCk6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQgeyByZXR1cm4gd2luZG93Lk9uZVNpZ25hbD8uVXNlcj8uUHVzaFN1YnNjcmlwdGlvbj8udG9rZW47IH0sXG5cdGdldCBvcHRlZEluKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQgeyByZXR1cm4gd2luZG93Lk9uZVNpZ25hbD8uVXNlcj8uUHVzaFN1YnNjcmlwdGlvbj8ub3B0ZWRJbjsgfSxcblx0b3B0SW46IHB1c2hTdWJzY3JpcHRpb25PcHRJbixcblx0b3B0T3V0OiBwdXNoU3Vic2NyaXB0aW9uT3B0T3V0LFxuXHRhZGRFdmVudExpc3RlbmVyOiBwdXNoU3Vic2NyaXB0aW9uQWRkRXZlbnRMaXN0ZW5lcixcblx0cmVtb3ZlRXZlbnRMaXN0ZW5lcjogcHVzaFN1YnNjcmlwdGlvblJlbW92ZUV2ZW50TGlzdGVuZXIsXG59O1xuXG5jb25zdCBVc2VyTmFtZXNwYWNlOiBJT25lU2lnbmFsVXNlciA9IHtcblx0Z2V0IG9uZXNpZ25hbElkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7IHJldHVybiB3aW5kb3cuT25lU2lnbmFsPy5Vc2VyPy5vbmVzaWduYWxJZDsgfSxcblx0Z2V0IGV4dGVybmFsSWQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHdpbmRvdy5PbmVTaWduYWw/LlVzZXI/LmV4dGVybmFsSWQ7IH0sXG5cdGFkZEFsaWFzOiB1c2VyQWRkQWxpYXMsXG5cdGFkZEFsaWFzZXM6IHVzZXJBZGRBbGlhc2VzLFxuXHRyZW1vdmVBbGlhczogdXNlclJlbW92ZUFsaWFzLFxuXHRyZW1vdmVBbGlhc2VzOiB1c2VyUmVtb3ZlQWxpYXNlcyxcblx0YWRkRW1haWw6IHVzZXJBZGRFbWFpbCxcblx0cmVtb3ZlRW1haWw6IHVzZXJSZW1vdmVFbWFpbCxcblx0YWRkU21zOiB1c2VyQWRkU21zLFxuXHRyZW1vdmVTbXM6IHVzZXJSZW1vdmVTbXMsXG5cdGFkZFRhZzogdXNlckFkZFRhZyxcblx0YWRkVGFnczogdXNlckFkZFRhZ3MsXG5cdHJlbW92ZVRhZzogdXNlclJlbW92ZVRhZyxcblx0cmVtb3ZlVGFnczogdXNlclJlbW92ZVRhZ3MsXG5cdGdldFRhZ3M6IHVzZXJHZXRUYWdzLFxuXHRhZGRFdmVudExpc3RlbmVyOiB1c2VyQWRkRXZlbnRMaXN0ZW5lcixcblx0cmVtb3ZlRXZlbnRMaXN0ZW5lcjogdXNlclJlbW92ZUV2ZW50TGlzdGVuZXIsXG5cdHNldExhbmd1YWdlOiB1c2VyU2V0TGFuZ3VhZ2UsXG5cdGdldExhbmd1YWdlOiB1c2VyR2V0TGFuZ3VhZ2UsXG5cdHRyYWNrRXZlbnQ6IHVzZXJUcmFja0V2ZW50LFxuXHRQdXNoU3Vic2NyaXB0aW9uOiBQdXNoU3Vic2NyaXB0aW9uTmFtZXNwYWNlLFxufTtcblxuY29uc3QgU2Vzc2lvbk5hbWVzcGFjZTogSU9uZVNpZ25hbFNlc3Npb24gPSB7XG5cdHNlbmRPdXRjb21lOiBzZXNzaW9uU2VuZE91dGNvbWUsXG5cdHNlbmRVbmlxdWVPdXRjb21lOiBzZXNzaW9uU2VuZFVuaXF1ZU91dGNvbWUsXG59O1xuXG5jb25zdCBEZWJ1Z05hbWVzcGFjZTogSU9uZVNpZ25hbERlYnVnID0ge1xuXHRzZXRMb2dMZXZlbDogZGVidWdTZXRMb2dMZXZlbCxcbn07XG5cbmNvbnN0IFNsaWRlZG93bk5hbWVzcGFjZTogSU9uZVNpZ25hbFNsaWRlZG93biA9IHtcblx0cHJvbXB0UHVzaDogc2xpZGVkb3duUHJvbXB0UHVzaCxcblx0cHJvbXB0UHVzaENhdGVnb3JpZXM6IHNsaWRlZG93blByb21wdFB1c2hDYXRlZ29yaWVzLFxuXHRwcm9tcHRTbXM6IHNsaWRlZG93blByb21wdFNtcyxcblx0cHJvbXB0RW1haWw6IHNsaWRlZG93blByb21wdEVtYWlsLFxuXHRwcm9tcHRTbXNBbmRFbWFpbDogc2xpZGVkb3duUHJvbXB0U21zQW5kRW1haWwsXG5cdGFkZEV2ZW50TGlzdGVuZXI6IHNsaWRlZG93bkFkZEV2ZW50TGlzdGVuZXIsXG5cdHJlbW92ZUV2ZW50TGlzdGVuZXI6IHNsaWRlZG93blJlbW92ZUV2ZW50TGlzdGVuZXIsXG59O1xuXG5jb25zdCBOb3RpZmljYXRpb25zTmFtZXNwYWNlOiBJT25lU2lnbmFsTm90aWZpY2F0aW9ucyA9IHtcblx0Z2V0IHBlcm1pc3Npb25OYXRpdmUoKTogTm90aWZpY2F0aW9uUGVybWlzc2lvbiB7IHJldHVybiB3aW5kb3cuT25lU2lnbmFsPy5Ob3RpZmljYXRpb25zPy5wZXJtaXNzaW9uTmF0aXZlID8/ICdkZWZhdWx0JzsgfSxcblx0Z2V0IHBlcm1pc3Npb24oKTogYm9vbGVhbiB7IHJldHVybiB3aW5kb3cuT25lU2lnbmFsPy5Ob3RpZmljYXRpb25zPy5wZXJtaXNzaW9uID8/IGZhbHNlOyB9LFxuXHRzZXREZWZhdWx0VXJsOiBub3RpZmljYXRpb25zU2V0RGVmYXVsdFVybCxcblx0c2V0RGVmYXVsdFRpdGxlOiBub3RpZmljYXRpb25zU2V0RGVmYXVsdFRpdGxlLFxuXHRpc1B1c2hTdXBwb3J0ZWQsXG5cdHJlcXVlc3RQZXJtaXNzaW9uOiBub3RpZmljYXRpb25zUmVxdWVzdFBlcm1pc3Npb24sXG5cdGFkZEV2ZW50TGlzdGVuZXI6IG5vdGlmaWNhdGlvbnNBZGRFdmVudExpc3RlbmVyLFxuXHRyZW1vdmVFdmVudExpc3RlbmVyOiBub3RpZmljYXRpb25zUmVtb3ZlRXZlbnRMaXN0ZW5lcixcbn07XG5cbi8qKlxuICogQFB1YmxpY0FwaVxuICovXG5mdW5jdGlvbiBpc1B1c2hTdXBwb3J0ZWQoKTogYm9vbGVhbiB7XG4gIHJldHVybiBpc1B1c2hOb3RpZmljYXRpb25zU3VwcG9ydGVkKCk7XG59XG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmNvbnN0IE9ORVNJR05BTF9TREtfSUQgPSAnb25lc2lnbmFsLXNkayc7XG5jb25zdCBERUZBVUxUX1NDUklQVF9TUkMgPVxuICAnaHR0cHM6Ly9jZG4ub25lc2lnbmFsLmNvbS9zZGtzL3dlYi92MTYvT25lU2lnbmFsU0RLLnBhZ2UuanMnO1xuXG5sZXQgaXNPbmVTaWduYWxJbml0aWFsaXplZCA9IGZhbHNlO1xubGV0IGlzT25lU2lnbmFsU2NyaXB0RmFpbGVkID0gZmFsc2U7XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQgPSB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQgfHwgW107XG59XG5cbi8qKlxuICogVGhlIGZvbGxvd2luZyBjb2RlIGlzIGNvcGllZCBkaXJlY3RseSBmcm9tIHRoZSBuYXRpdmUgU0RLIHNvdXJjZSBmaWxlIEJyb3dzZXJTdXBwb3J0c1B1c2gudHNcbiAqIFMgVCBBIFIgVFxuICovXG5cbi8vIENoZWNrcyBpZiB0aGUgYnJvd3NlciBzdXBwb3J0cyBwdXNoIG5vdGlmaWNhdGlvbnMgYnkgY2hlY2tpbmcgaWYgc3BlY2lmaWNcbi8vICAgY2xhc3NlcyBhbmQgcHJvcGVydGllcyBvbiB0aGVtIGV4aXN0XG5mdW5jdGlvbiBpc1B1c2hOb3RpZmljYXRpb25zU3VwcG9ydGVkKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gc3VwcG9ydHNWYXBpZFB1c2goKSB8fCBzdXBwb3J0c1NhZmFyaVB1c2goKTtcbn1cblxuZnVuY3Rpb24gaXNNYWNPU1NhZmFyaUluSWZyYW1lKCk6IGJvb2xlYW4ge1xuICAvLyBGYWxsYmFjayBkZXRlY3Rpb24gZm9yIFNhZmFyaSBvbiBtYWNPUyBpbiBhbiBpZnJhbWUgY29udGV4dFxuICByZXR1cm4gKFxuICAgIHdpbmRvdy50b3AgIT09IHdpbmRvdyAmJiAvLyBpc0NvbnRleHRJZnJhbWVcbiAgICBuYXZpZ2F0b3IudmVuZG9yID09PSAnQXBwbGUgQ29tcHV0ZXIsIEluYy4nICYmIC8vIGlzU2FmYXJpXG4gICAgbmF2aWdhdG9yLnBsYXRmb3JtID09PSAnTWFjSW50ZWwnXG4gICk7IC8vIGlzTWFjT1Ncbn1cblxuZnVuY3Rpb24gc3VwcG9ydHNTYWZhcmlQdXNoKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gKFxuICAgICh3aW5kb3cuc2FmYXJpICYmIHR5cGVvZiB3aW5kb3cuc2FmYXJpLnB1c2hOb3RpZmljYXRpb24gIT09ICd1bmRlZmluZWQnKSB8fFxuICAgIGlzTWFjT1NTYWZhcmlJbklmcmFtZSgpXG4gICk7XG59XG5cbi8vIERvZXMgdGhlIGJyb3dzZXIgc3VwcG9ydCB0aGUgc3RhbmRhcmQgUHVzaCBBUElcbmZ1bmN0aW9uIHN1cHBvcnRzVmFwaWRQdXNoKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gKFxuICAgIHR5cGVvZiBQdXNoU3Vic2NyaXB0aW9uT3B0aW9ucyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICBQdXNoU3Vic2NyaXB0aW9uT3B0aW9ucy5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkoJ2FwcGxpY2F0aW9uU2VydmVyS2V5JylcbiAgKTtcbn1cbi8qIEUgTiBEICovXG5cbmZ1bmN0aW9uIGhhbmRsZU9uRXJyb3IoKTogdm9pZCB7XG4gIGlzT25lU2lnbmFsU2NyaXB0RmFpbGVkID0gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gYWRkU0RLU2NyaXB0KHNjcmlwdFNyYz86IHN0cmluZyk6IHZvaWQge1xuICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoT05FU0lHTkFMX1NES19JRCkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgc2NyaXB0LmlkID0gT05FU0lHTkFMX1NES19JRDtcbiAgc2NyaXB0LmRlZmVyID0gdHJ1ZTtcbiAgc2NyaXB0LnNyYyA9IHNjcmlwdFNyYyB8fCBERUZBVUxUX1NDUklQVF9TUkM7XG5cbiAgLy8gQWx3YXlzIHJlc29sdmUgd2hldGhlciBvciBub3QgdGhlIHNjcmlwdCBpcyBzdWNjZXNzZnVsbHkgaW5pdGlhbGl6ZWQuXG4gIC8vIFRoaXMgaXMgaW1wb3J0YW50IGZvciB1c2VycyB3aG8gbWF5IGJsb2NrIGNkbi5vbmVzaWduYWwuY29tIHcvIGFkYmxvY2suXG4gIHNjcmlwdC5vbmVycm9yID0gKCkgPT4ge1xuICAgIGhhbmRsZU9uRXJyb3IoKTtcbiAgfTtcblxuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgT25lU2lnbmFsRGVmZXJyZWQ/OiBPbmVTaWduYWxEZWZlcnJlZExvYWRlZENhbGxiYWNrW107XG4gICAgT25lU2lnbmFsPzogSU9uZVNpZ25hbE9uZVNpZ25hbDtcbiAgICBzYWZhcmk/OiB7XG4gICAgICBwdXNoTm90aWZpY2F0aW9uOiBhbnk7XG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElPbmVTaWduYWxPbmVTaWduYWwge1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBPbmVTaWduYWwgaW1wbGVtZW50cyBJT25lU2lnbmFsT25lU2lnbmFsIHtcbiAgW2tleTogc3RyaW5nXTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICAvKiBQIFUgQiBMIEkgQyAqL1xuXG4gIC8qKlxuICAgKiBAUHVibGljQXBpXG4gICAqL1xuICBpbml0KG9wdGlvbnM6IElJbml0T2JqZWN0KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKGlzT25lU2lnbmFsSW5pdGlhbGl6ZWQpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChgT25lU2lnbmFsIGlzIGFscmVhZHkgaW5pdGlhbGl6ZWQuYCk7XG4gICAgfVxuXG4gICAgaWYgKCFvcHRpb25zIHx8ICFvcHRpb25zLmFwcElkKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoJ1lvdSBuZWVkIHRvIHByb3ZpZGUgeW91ciBPbmVTaWduYWwgYXBwSWQuJyk7XG4gICAgfVxuXG4gICAgaWYgKCFkb2N1bWVudCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGBEb2N1bWVudCBpcyBub3QgZGVmaW5lZC5gKTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgYm90aCBkaXNhYmxlZCBhbmQgZGlzYWJsZSBrZXlzIGZvciB3ZWxjb21lIG5vdGlmaWNhdGlvblxuICAgIGlmIChvcHRpb25zLndlbGNvbWVOb3RpZmljYXRpb24/LmRpc2FibGVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIG9wdGlvbnMud2VsY29tZU5vdGlmaWNhdGlvbi5kaXNhYmxlID0gb3B0aW9ucy53ZWxjb21lTm90aWZpY2F0aW9uLmRpc2FibGVkO1xuICAgIH1cblxuICAgIGFkZFNES1NjcmlwdChvcHRpb25zLnNjcmlwdFNyYyk7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICAgICAgb25lU2lnbmFsXG4gICAgICAgICAgLmluaXQob3B0aW9ucylcbiAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBpc09uZVNpZ25hbEluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaChyZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuXHRVc2VyID0gVXNlck5hbWVzcGFjZTtcblx0U2Vzc2lvbiA9IFNlc3Npb25OYW1lc3BhY2U7XG5cdERlYnVnID0gRGVidWdOYW1lc3BhY2U7XG5cdFNsaWRlZG93biA9IFNsaWRlZG93bk5hbWVzcGFjZTtcblx0Tm90aWZpY2F0aW9ucyA9IE5vdGlmaWNhdGlvbnNOYW1lc3BhY2U7XG5cdGxvZ2luID0gb25lU2lnbmFsTG9naW47XG5cdGxvZ291dCA9IG9uZVNpZ25hbExvZ291dDtcblx0c2V0Q29uc2VudEdpdmVuID0gb25lU2lnbmFsU2V0Q29uc2VudEdpdmVuO1xuXHRzZXRDb25zZW50UmVxdWlyZWQgPSBvbmVTaWduYWxTZXRDb25zZW50UmVxdWlyZWQ7XG59XG4iXX0=