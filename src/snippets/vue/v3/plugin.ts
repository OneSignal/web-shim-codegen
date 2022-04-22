const OneSignalVuePlugin = {
  install(app: App, options: IInitObject) {
    app.config.globalProperties.$OneSignal = OneSignalVue as IOneSignal;
    app.config.globalProperties.$OneSignal.init(options);
  }
}

export default OneSignalVuePlugin;
