import { Injectable } from '@angular/core';
const ONESIGNAL_SDK_ID = 'onesignal-sdk';
const ONE_SIGNAL_SCRIPT_SRC = 'https://cdn.onesignal.com/sdks/OneSignalSDK.js';
const ONESIGNAL_NOT_SETUP_ERROR = 'OneSignal is not setup correctly.';
const MAX_TIMEOUT = 30;

declare global {
  interface Window {
    OneSignal: any;
  }
}

interface IOneSignalFunctionCall {
  name: string;
  args: IArguments;
  promiseResolver?: Function;
}

interface IOneSignal {
  [key: string]: any
}
