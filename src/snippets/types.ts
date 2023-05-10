export const ACTION = `type Action<T> = (item: T) => void;`;
export const AUTO_PROMPT_OPTIONS = `interface AutoPromptOptions { force?: boolean; forceSlidedownOverNative?: boolean; slidedownPromptOptions?: IOneSignalAutoPromptOptions; }`;
export const SLIDEDOWN_OPTIONS = `interface IOneSignalAutoPromptOptions { force?: boolean; forceSlidedownOverNative?: boolean; isInUpdateMode?: boolean; categoryOptions?: IOneSignalCategories; }`;
export const CATEGORY_OPTIONS = `interface IOneSignalCategories { positiveUpdateButton: string; negativeUpdateButton: string; savingButtonText: string; errorButtonText: string; updateMessage: string; tags: IOneSignalTagCategory[]; }`;
export const TAG_CATEGORY = `interface IOneSignalTagCategory { tag: string; label: string; checked?: boolean; }`;
export const PUSH_SUBSCRIPTION_NAMESPACE_PROPERTIES = `type PushSubscriptionNamespaceProperties = { id: string | null | undefined; token: string | null | undefined; optedIn: boolean; };`;
export const SUBSCRIPTION_CHANGE_EVENT = `type SubscriptionChangeEvent = { previous: PushSubscriptionNamespaceProperties; current: PushSubscriptionNamespaceProperties; };`;
export const NOTIFICATION_EVENT_NAME = `type NotificationEventName = 'click' | 'foregroundWillDisplay' | 'dismiss' | 'permissionChange' | 'permissionPromptDisplay';`
export const NOTIFICATION_BUTTON_DATA = 'interface NotificationButtonData extends NotificationAction { url: string; };';
export const SLIDEDOWN_EVENT_NAME = `type SlidedownEventName = 'slidedownShown';`;
export const ONESIGNAL_DEFERRED_CALLBACK = `type OneSignalDeferredLoadedCallback = (onesignal: IOneSignalOneSignal) => void;`;
export const OS_NOTIFICATION = 'type OSNotification = { id?: string; title?: string; body?: string; data?: any; url?: string; icon?: string; image?: string; tag?: string; requireInteraction?: boolean; renotify?: true; actions?: Array<NotificationActionButton>; };'
export const NOTIFICATION_ACTION_BUTTON = 'type NotificationActionButton = { action: string; title: string; icon?: string; url?: string; }';
export const NOTIFICATION_CLICK_RESULT = 'export type NotificationClickResult = { actionId?: string; url?: string; }';
export const NOTIFICATION_FOREGROUND_WILL_DISPLAY_EVENT = 'export type NotificationForegroundWillDisplayEvent = { notification: OSNotification; preventDefault(): void; }';
export const NOTIFICATION_EVENT_TYPE_MAP = "type NotificationEventTypeMap = { 'click': NotificationClickResult; 'foregroundWillDisplay': NotificationForegroundWillDisplayEvent; 'dismiss': OSNotificationDataPayload; 'permissionChange': boolean; 'permissionPromptDisplay': void; };";
export const OS_NOTIFICATION_DATA_PAYLOAD = 'type OSNotificationDataPayload = { id: string; content: string; heading?: string; url?: string; data?: object; rr?: string; icon?: string; image?: string; tag?: string; badge?: string; vibrate?: VibratePattern; buttons?: NotificationButtonData[]; };';
