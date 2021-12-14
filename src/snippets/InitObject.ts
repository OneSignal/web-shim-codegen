interface IInitObject {
  appId: string;
  subdomainName?: string;
  requiresUserPrivacyConsent?: boolean;
  promptOptions?: Object;
  welcomeNotification?: Object;
  notifyButton?: Object;
  persistNotification?: boolean;
  webhooks?: Object;
  autoResubscribe?: boolean;
  autoRegister?: boolean;
  notificationClickHandlerMatch?: string;
  notificationClickHandlerAction?: string;
  serviceWorkerParam?: { scope: string };
  serviceWorkerPath?: string;
  serviceWorkerUpdaterPath?: string;
  path?: string;
  allowLocalhostAsSecureOrigin?: boolean;
  [key: string]: any;
}
