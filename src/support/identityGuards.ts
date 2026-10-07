import { IFunctionSignature } from '../models/FunctionSignature';
import IOneSignalApi from '../models/OneSignalApi';
import { TemplateVariant } from '../models/TemplateFunctionMap';
import { FUNCTION_IGNORE } from './constants';
import { hasNonVoidReturnType, templateVariant } from './utils';

/**
 * required: non-empty, NUL-free string. allowEmpty: may be "". items: each element required.
 * entries: each key and value required. keys: only keys checked (tag values may be "" or NUL).
 */
type IdentityRule = 'required' | 'allowEmpty' | 'items' | 'entries' | 'keys';

const IDENTITY_RULES: Record<string, Record<string, IdentityRule>> = {
  'OneSignal.login': { externalId: 'required' },
  'User.addAlias': { label: 'required', id: 'required' },
  'User.addAliases': { aliases: 'entries' },
  'User.removeAlias': { label: 'required' },
  'User.removeAliases': { labels: 'items' },
  'User.addEmail': { email: 'required' },
  'User.removeEmail': { email: 'required' },
  'User.addSms': { smsNumber: 'required' },
  'User.removeSms': { smsNumber: 'required' },
  'User.addTag': { key: 'required' },
  'User.addTags': { tags: 'keys' },
  'User.removeTag': { key: 'required' },
  'User.removeTags': { keys: 'items' },
  'User.setLanguage': { language: 'allowEmpty' },
  'User.trackEvent': { name: 'required' },
};

function ruleCondition(rule: IdentityRule, argName: string, api: string): string {
  switch (rule) {
    case 'required':
      return `isMissing(${argName}, '${api}: ${argName}')`;
    case 'allowEmpty':
      return `isMissing(${argName}, '${api}: ${argName}', true)`;
    case 'items':
      return `hasMissingItems(${argName}, '${api}: ${argName}')`;
    case 'entries':
      return `hasMissingEntries(${argName}, '${api}', true)`;
    case 'keys':
      return `hasMissingEntries(${argName}, '${api}', false)`;
  }
}

function earlyReturn(sig: IFunctionSignature, variant: TemplateVariant, key: string): string {
  if (hasNonVoidReturnType(sig)) {
    throw new Error(`identityGuard: ${key} returns ${sig.returnType}; only void is supported.`);
  }
  return variant === 'async' ? 'return Promise.resolve();' : 'return;';
}

/**
 * Returns the guard line for [sig], or '' when it has no rule.
 * Throws if a rule names an argument the signature does not have.
 */
export function identityGuard(
  sig: IFunctionSignature,
  namespaceChain: string[],
  variant: TemplateVariant,
): string {
  const key = `${namespaceChain[namespaceChain.length - 1]}.${sig.name}`;
  const rules = IDENTITY_RULES[key];
  if (!rules) return '';

  const argNames = new Set(sig.args?.map((arg) => arg.name));
  const conditions = Object.entries(rules).map(([argName, rule]) => {
    if (!argNames.has(argName)) {
      throw new Error(`identityGuard: ${key} has no argument '${argName}'.`);
    }
    return ruleCondition(rule, argName, sig.name);
  });

  return `if (${conditions.join(' || ')}) ${earlyReturn(sig, variant, key)}`;
}

/**
 * Throws unless every rule targets a generated function in [api] and builds cleanly.
 */
export function assertIdentityRulesMatchApi(api: IOneSignalApi): void {
  Object.keys(IDENTITY_RULES).forEach((key) => {
    const [namespace, name] = key.split('.');
    const sig = api[namespace]?.functions?.find((fn) => fn.name === name);
    if (!sig || FUNCTION_IGNORE.includes(name)) {
      throw new Error(`identityGuard: ${key} is not a generated function in the api spec.`);
    }
    identityGuard(sig, [namespace], templateVariant(sig));
  });
}
