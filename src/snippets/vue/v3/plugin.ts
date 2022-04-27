const INJECT_KEY = "onesignal";

export const useOneSignal = () => {
  return inject(INJECT_KEY);
}

const OneSignalVuePlugin = {
  install(app: App, options: IInitObject) {
    app.config.globalProperties.$OneSignal = OneSignalVue as IOneSignal;
    app.config.globalProperties.$OneSignal.init(options);
    app.provide(INJECT_KEY, OneSignalVue);
  }
}

export default OneSignalVuePlugin;
