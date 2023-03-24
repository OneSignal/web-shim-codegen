export const PATHS = {
  UPSTREAM_API_SPEC: "/OneSignal/OneSignal-Website-SDK/user-model/api/api.json"
};

export const GITHUB_URL = "https://raw.githubusercontent.com";

// OneSignal WebSDK functions we should not pass to `writeOneSignalFunction`
export const FUNCTION_IGNORE = ["init", "isPushSupported"];
export const INTERFACE_PREFIX = "IOneSignal";

// skip the 'OneSignal' namespace since it is the root, and skip the 'PushSubscription' namespace since it is nested
export const NAMESPACE_IGNORE = ["OneSignal", "PushSubscription"];
