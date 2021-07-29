const OneSignalVuePlugin = {
  install(app: typeof VueApp) {
    app.prototype.$OneSignal = OneSignalVue as IOneSignal;
  }
}

export default OneSignalVuePlugin;
