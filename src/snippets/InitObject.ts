export interface IInitObject {
  appId: string;
  requiresUserPrivacyConsent?: boolean;
  safari_web_id?: string;
  subdomainName?: string;
  promptOptions?: {
    slidedown: {
      prompts: {
        /**
         * Whether to automatically display the prompt.
         * `true` will display the prompt based on the delay options.
         * `false` will prevent the prompt from displaying until the Slidedowns methods are used.
         */
        autoPrompt: boolean;

        /**
         * Only available for type: category. Up to 10 categories.
         * @example
         *  categories: [{ tag: 'local_news', label: 'Local News' }] // The user will be tagged with local_news but will see "Local News" in the prompt.
         */
        categories?: {
          /** Should identify the action. */
          tag: string;

          /** What the user will see. */
          label: string;
        }[];

        /**
         * The delay options for the prompt.
         * @example delay: { pageViews: 3, timeDelay: 20 } // The user will not be shown the prompt until 20 seconds after the 3rd page view.
         */
        delay: {
          /** The number of pages a user needs to visit before the prompt is displayed. */
          pageViews?: number;

          /** The number of seconds a user needs to wait before the prompt is displayed.Both options must be satisfied for the prompt to display */
          timeDelay?: number;
        };

        /**
         * The text to display in the prompt.
         */
        text?: {
          /** The callout asking the user to opt-in. Up to 90 characters. */
          actionMessage?: string;

          /** Triggers the opt-in. Up to 15 characters. */
          acceptButton?: string;

          /** Cancels opt-in. Up to 15 characters. */
          cancelButton?: string;

          /** The message of the confirmation prompt displayed after the email and/or phone number is provided. Up to 90 characters. */
          confirmMessage?: string;

          /** Identifies the email text field. Up to 15 characters. */
          emailLabel?: string;

          /** Cancels the category update. Up to 15 characters. */
          negativeUpdateButton?: string;

          /** Saves the updated category tags. Up to 15 characters. */
          positiveUpdateButton?: string;

          /** Identifies the phone number text field. Up to 15 characters. */
          smsLabel?: string;

          /** A different message shown to subscribers presented the prompt again to update categories. Up to 90 characters. */
          updateMessage?: string;
        };

        /**
         * The type of prompt to display.
         * `push` which is the Slide Prompt without categories.
         * `category` which is the Slide Prompt with categories.
         * `sms` only asks for phone number.
         * `email` only asks for email address.
         * `smsAndEmail` asks for both phone number and email address.
         */
        type: 'push' | 'category' | 'sms' | 'email' | 'smsAndEmail';
      }[];
    };
  };
  welcomeNotification?: {
    /**
     * Disables sending a welcome notification to new site visitors. If you want to disable welcome notifications, this is the only option you need.
     * @deprecated Use 'disable' instead. This will be removed in a future version.
     */
    disabled?: boolean;

    /**
     * Disables sending a welcome notification to new site visitors. If you want to disable welcome notifications, this is the only option you need.
     */
    disable?: boolean;

    /**
     * The welcome notification's message. You can localize this to your own language.
     * If left blank or set to blank, the default of 'Thanks for subscribing!' will be used.
     */
    message: string;

    /**
     * The welcome notification's title. You can localize this to your own language. If not set, or left blank, the site's title will be used.
     * Set to one space ' ' to clear the title, although this is not recommended.
     */
    title?: string;

    /**
     * By default, clicking the welcome notification does not open any link.
     * This is recommended because the user has just visited your site and subscribed.
     */
    url?: string;
  };

  /**
   * Will enable customization of the notify/subscription bell button.
   */
  notifyButton?: {
    /**
     * A function you define that returns true to show the Subscription Bell, or false to hide it.
     * Typically used the hide the Subscription Bell after the user is subscribed.
     * This function is not re-evaluated on every state change; this function is only evaluated once when the Subscription Bell begins to show.
     */
    displayPredicate?: () => boolean | Promise<boolean>;

    /**
     * Enable the Subscription Bell. The Subscription Bell is otherwise disabled by default.
     */
    enable?: boolean;

    /** Specify CSS-valid pixel offsets using bottom, left, and right. */
    offset?: { bottom: string; left: string; right: string };

    /**
     * If `true`, the Subscription Bell will display an icon that there is 1 unread message.
     * When hovering over the Subscription Bell, the user will see custom text set by message.prenotify.
     */
    prenotify: boolean;

    /** Either `bottom-left` or `bottom-right`. The Subscription Bell will be fixed at this location on your page. */
    position?: 'bottom-left' | 'bottom-right';

    /**  Set `false` to hide the 'Powered by OneSignal' text in the Subscription Bell dialog popup. */
    showCredit: boolean;

    /**
     * The Subscription Bell will initially appear at one of these sizes, and then shrink down to size `small` after the user subscribes.
     */
    size?: 'small' | 'medium' | 'large';

    /** Customize the Subscription Bell text. */
    text: {
      'dialog.blocked.message': string;
      'dialog.blocked.title': string;
      'dialog.main.button.subscribe': string;
      'dialog.main.button.unsubscribe': string;
      'dialog.main.title': string;
      'message.action.resubscribed': string;
      'message.action.subscribed': string;
      'message.action.subscribing': string;
      'message.action.unsubscribed': string;
      'message.prenotify': string;
      'tip.state.blocked': string;
      'tip.state.subscribed': string;
      'tip.state.unsubscribed': string;
    };
  };

  persistNotification?: boolean;
  webhooks?: {
    /**
     * Enable this setting only if your server has CORS enabled and supports non-simple CORS requests.
     * If this setting is disabled, your webhook will not need CORS to receive data, but it will not receive the custom headers.
     * The simplest option is to leave it disabled.
     * @default false
     */
    cors: boolean;

    /**
     * This event occurs after a notification is clicked.
     * @example https://site.com/hook
     */
    'notification.clicked'?: string;

    /**
     * This event occurs after a notification is intentionally dismissed by the user (clicking the notification body or one of the notification action buttons does not trigger the dismissed webhook),
     * after a group of notifications are all dismissed (with this notification as part of that group), or after a notification expires on its own time and disappears. This event is supported on Chrome only.
     * @example https://site.com/hook
     */
    'notification.dismissed'?: string;

    /**
     * This event occurs after a notification is displayed.
     * @example https://site.com/hook
     */
    'notification.willDisplay'?: string;
  };
  autoResubscribe?: boolean;
  autoRegister?: boolean;
  notificationClickHandlerMatch?: 'exact' | 'origin';
  notificationClickHandlerAction?: 'navigate' | 'focus';
  path?: string;
  serviceWorkerParam?: { scope: string };
  serviceWorkerPath?: string;
  serviceWorkerOverrideForTypical?: boolean;
  [key: string]: unknown;
}
