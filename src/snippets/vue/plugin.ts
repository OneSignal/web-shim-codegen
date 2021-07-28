const OneSignalVuePlugin = {
  install(app: Vue) {
    app.prototype.$OneSignal = OneSignalVue as IOneSignal;
  }
}

export default OneSignalVuePlugin;
