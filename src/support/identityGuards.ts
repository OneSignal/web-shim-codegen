const IDENTITY_GUARDS: Record<string, string> = {
  oneSignalLogin: "if (isMissing(externalId, 'login: externalId')) return Promise.resolve();",
  userAddAlias: "if (isMissing(label, 'addAlias: label') || isMissing(id, 'addAlias: id')) return;",
  userAddAliases: "if (hasMissingEntries(aliases, 'addAliases')) return;",
  userRemoveAlias: "if (isMissing(label, 'removeAlias: label')) return;",
  userRemoveAliases: "if (hasMissingItems(labels, 'removeAliases: label')) return;",
  userAddEmail: "if (isMissing(email, 'addEmail: email')) return;",
  userRemoveEmail: "if (isMissing(email, 'removeEmail: email')) return;",
  userAddSms: "if (isMissing(smsNumber, 'addSms: smsNumber')) return;",
  userRemoveSms: "if (isMissing(smsNumber, 'removeSms: smsNumber')) return;",
  userAddTag:
    "if (isMissing(key, 'addTag: key') || (value == null && isMissing(value, 'addTag: value'))) return;",
  userAddTags: "if (hasMissingEntries(tags, 'addTags', true)) return;",
  userRemoveTag: "if (isMissing(key, 'removeTag: key')) return;",
  userRemoveTags: "if (hasMissingItems(keys, 'removeTags: key')) return;",
  userSetLanguage: 'if (!keepsLanguage(language)) return;',
  userTrackEvent: "if (isMissing(name, 'trackEvent: name')) return;",
};

export function identityGuardLine(uniqueFunctionName: string): string {
  return IDENTITY_GUARDS[uniqueFunctionName] ?? '';
}
