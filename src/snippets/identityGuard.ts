/**
 * Returns true and logs when [value] is a string that is "" (unless [allowEmpty]) or has a NUL.
 * Non-strings return false so the SDK still validates their type.
 */
function isMissing(value: unknown, api: string, allowEmpty = false): boolean {
  if (typeof value !== 'string') return false;
  // A NUL cannot be stored in a text column, so it is never a usable value.
  if (value.includes('\u0000')) {
    console.error('[OneSignal] ' + api + ' contains a null byte');
    return true;
  }
  if (value === '' && !allowEmpty) {
    console.error('[OneSignal] ' + api + ' is required');
    return true;
  }
  return false;
}

function hasMissingItems(values: unknown, api: string): boolean {
  return Array.isArray(values) && values.some((value) => isMissing(value, api));
}

function hasMissingEntries(values: unknown, api: string, checkValues: boolean): boolean {
  if (typeof values !== 'object' || values === null || Array.isArray(values)) return false;
  return Object.entries(values).some(
    ([key, value]) =>
      isMissing(key, api + ': key') || (checkValues && isMissing(value, api + ': value')),
  );
}
