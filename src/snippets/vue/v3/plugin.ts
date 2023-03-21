export const useOneSignal = () => {
  return OneSignalNamespace;
}

const OneSignalVuePlugin = {
  install(app: App, options: IInitObject) {
    app.config.globalProperties.$OneSignal = OneSignalNamespace as IOneSignalOneSignal;
    app.config.globalProperties.$OneSignal.init(options);
  }
}

export default OneSignalVuePlugin;
