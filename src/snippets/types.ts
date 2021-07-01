export const ACTION = `interface Action<T>{ (item: T): void; }`;
export const AUTO_PROMPT_OPTIONS = `interface AutoPromptOptions { force?: boolean; forceSlidedownOverNative?: boolean; slidedownPromptOptions?: IOneSignalAutoPromptOptions; }`;
export const REGISTER_OPTIONS = `interface RegisterOptions { modalPrompt?: boolean; httpPermissionRequest?: boolean; slidedown?: boolean; autoAccept?: boolean }`;
export const SET_SMS_OPTIONS = `interface SetSMSOptions { identifierAuthHash?: string; }`
export const SET_EMAIL_OPTIONS = `interface SetEmailOptions { identifierAuthHash?: string; emailAuthHash?: string; }`;
export const TAGS_OBJECT = `interface TagsObject<T> { [key: string]: T; }`;
export const ONESIGNAL_EVENT = `interface IOneSignalEvent { listener?: string; event: string; callback: (result: any) => any }`;
export const SLIDEDOWN_OPTIONS = `interface IOneSignalAutoPromptOptions { force?: boolean; forceSlidedownOverNative?: boolean; isInUpdateMode?: boolean; categoryOptions?: IOneSignalCategories; }`;
export const CATEGORY_OPTIONS = `interface IOneSignalCategories { positiveUpdateButton: string; negativeUpdateButton: string; savingButtonText: string; errorButtonText: string; updateMessage: string; tags: IOneSignalTagCategory[]; }`;
export const TAG_CATEGORY = `export interface IOneSignalTagCategory { tag: string; label: string; checked?: boolean; }`;
