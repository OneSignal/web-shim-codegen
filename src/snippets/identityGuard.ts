/**
 * Returns true and logs when [value] is null, empty, or contains a null byte.
 * Whitespace is still a value.
 */
function isMissing(value: unknown, api: string): boolean {
  // A NUL cannot be stored in a text column, so it is never a usable value.
  if (typeof value === 'string' && value.includes('\u0000')) {
    console.error('[OneSignal] ' + api + ' contains a null byte');
    return true;
  }
  if (typeof value === 'string' && value.length > 0) return false;
  console.error('[OneSignal] ' + api + ' is required');
  return true;
}

function hasMissingItems(values: unknown, api: string): boolean {
  if (!Array.isArray(values)) return isMissing(values, api);
  return values.some((value) => isMissing(value, api));
}

/**
 * With [allowEmptyValue], "" and a value containing a null byte are kept.
 * A null value is still rejected.
 */
function hasMissingEntries(
  values: unknown,
  api: string,
  allowEmptyValue = false,
): boolean {
  if (values == null || typeof values !== 'object' || Array.isArray(values)) {
    return isMissing(values, api);
  }
  return Object.entries(values as Record<string, unknown>).some(([key, item]) => {
    if (isMissing(key, api + ': key')) return true;
    if (allowEmptyValue) return item == null && isMissing(item, api + ': value');
    return isMissing(item, api + ': value');
  });
}

function keepsLanguage(language: unknown): boolean {
  if (typeof language !== 'string') {
    console.error('[OneSignal] setLanguage: language is required');
    return false;
  }
  if (language.includes('\u0000')) {
    console.error('[OneSignal] setLanguage: language contains a null byte');
    return false;
  }
  return true;
}
