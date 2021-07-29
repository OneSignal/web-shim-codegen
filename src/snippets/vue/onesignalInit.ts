/* O N E S I G N A L   A P I  */

function init(options: Object = {}) {
  return new Promise<void>(resolve => {
    if (isOneSignalInitialized) {
      return;
    }

    injectScript();
    setupOneSignalIfMissing();
    window.OneSignal.push(() => {
      window.OneSignal.init(options);
    })

    const timeout = setTimeout(() => {
      console.error(ONESIGNAL_NOT_SETUP_ERROR);
    }, MAX_TIMEOUT * 1_000);

    window.OneSignal.push(() => {
      clearTimeout(timeout);
      isOneSignalInitialized = true;
      processQueuedOneSignalFunctions();
      resolve();
    });
  });
}