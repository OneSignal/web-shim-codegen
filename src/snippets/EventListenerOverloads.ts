export const NOTIFICATIONS_ADD_EVENT_LISTENER_OVERLOADS = `notificationsAddEventListener(event: 'click' | 'willDisplay' | 'dismiss', listener: (obj: StructuredNotification) => void): void;
notificationsAddEventListener(event: 'permissionChange', listener: (obj: { to: NotificationPermission }) => void): void;
notificationsAddEventListener(event: 'permissionPromptDisplay', listener: () => void): void;`

export const NOTIFICATIONS_REMOVE_EVENT_LISTENER_OVERLOADS = `notificationsRemoveEventListener(event: 'click' | 'willDisplay' | 'dismiss', listener: (obj: StructuredNotification) => void): void;
notificationsRemoveEventListener(event: 'permissionChange', listener: (obj: { to: NotificationPermission }) => void): void;
notificationsRemoveEventListener(event: 'permissionPromptDisplay', listener: () => void): void;`

export const NOTIFICATIONS_ADD_EVENT_LISTENER_OVERLOADS_WITH_FUNCTION_PREFIX = `function notificationsAddEventListener(event: 'click' | 'willDisplay' | 'dismiss', listener: (obj: StructuredNotification) => void): void;
function notificationsAddEventListener(event: 'permissionChange', listener: (obj: { to: NotificationPermission }) => void): void;
function notificationsAddEventListener(event: 'permissionPromptDisplay', listener: () => void): void;`

export const NOTIFICATIONS_REMOVE_EVENT_LISTENER_OVERLOADS_WITH_FUNCTION_PREFIX = `function notificationsRemoveEventListener(event: 'click' | 'willDisplay' | 'dismiss', listener: (obj: StructuredNotification) => void): void;
function notificationsRemoveEventListener(event: 'permissionChange', listener: (obj: { to: NotificationPermission }) => void): void;
function notificationsRemoveEventListener(event: 'permissionPromptDisplay', listener: () => void): void;`
