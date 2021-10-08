@Injectable({
  providedIn: 'root'
})
export class OneSignal implements IOneSignal {
  private isOneSignalInitialized = false;
  private ngOneSignalFunctionQueue: IOneSignalFunctionCall[] = [];

  constructor() { }

  /* H E L P E R S */

  private injectScript = () => {
    const script = document.createElement('script');
    script.id = ONESIGNAL_SDK_ID;
    script.src = ONE_SIGNAL_SCRIPT_SRC;
    script.async = true;
    document.head.appendChild(script);
  }

  private doesOneSignalExist = () => {
    if (window.OneSignal) {
      return true;
    }
    return false;
  }

  private processQueuedOneSignalFunctions = () => {
    this.ngOneSignalFunctionQueue.forEach(element => {
      const { name, args, promiseResolver } = element;

      if (!!promiseResolver) {
        (this as IOneSignal)[name](...args).then((result: any) => {
          promiseResolver(result);
        });
      } else {
        window.OneSignal[name](...args);
      }
    });
  }

  private setupOneSignalIfMissing = () => {
    if (!this.doesOneSignalExist()) {
      window.OneSignal = window.OneSignal || [];
    }
  }

  /* P U B L I C */

  init(options: IInitObject) {
    return new Promise<void>(resolve => {
      if (this.isOneSignalInitialized) {
        return;
      }

      this.injectScript();
      this.setupOneSignalIfMissing();
      window.OneSignal.push(() => {
        window.OneSignal.init(options);
      })

      const timeout = setTimeout(() => {
        console.error(ONESIGNAL_NOT_SETUP_ERROR);
      }, MAX_TIMEOUT * 1_000);

      window.OneSignal.push(() => {
        clearTimeout(timeout);
        this.isOneSignalInitialized = true;
        this.processQueuedOneSignalFunctions();
        resolve();
      });
    })
  }
