const OneSignalVuePlugin = {
  install(app: typeof VueApp) {
    app.prototype.$OneSignal = OneSignalNamespace as IOneSignalOneSignal;
  }
}

export default OneSignalVuePlugin;
