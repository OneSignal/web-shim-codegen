const OneSignalVuePlugin = {
  install(app: typeof VueApp) {
    app.prototype.$OneSignal = OneSignalNamespace as IOneSignal;
  }
}

export default OneSignalVuePlugin;
