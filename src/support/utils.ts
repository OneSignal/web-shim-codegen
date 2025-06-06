import * as curl from 'curlrequest';
import { IArgument } from "../models/Argument";
import { IFunctionSignature } from '../models/FunctionSignature';
import { GITHUB_URL } from './constants';

export async function remoteFetchFile(path: string): Promise<string> {
  return await new Promise(resolve => {
    curl.request({ url: GITHUB_URL+path }, (err, stdout) => {
      resolve(stdout);
    });
  })
}

/**
 * Creates regex used for finding function in OneSignal.js WebSDK file
 * @param  {string} functionName
 * @returns RegExp
 */
export function createRegex(functionName: string): RegExp {
  return new RegExp('(async)?\\s*'+functionName+'\s*\\((.*)\\)\s*:?\s*(.*)\s*{');
}

/**
 * Parses function signature returning an object with function meta data like args, return type, etc...
 * @param  {string} signature
 * @returns IFunctionSignature
 */
export function parseFunctionSig(signature: string): IFunctionSignature {
  const functionSig= {};
  const matches = signature.match(/(\S*)\s*\((.*)\)\s*:?\s*(.*)\s*{/);

  if (matches) {
    functionSig['name'] = matches[1];

    if (signature.includes("async")) {
      functionSig['isAsync'] = true;
    }

    functionSig['arguments'] = parseArguments(matches[2]);

    if (matches[3]) {
      functionSig['returnType'] = matches[3].trim();
    } else {
      const defaultReturnType = functionSig['isAsync'] ? 'Promise<void>' : 'void';
      functionSig['returnType'] = matches[3].trim() || defaultReturnType;
    }
  }

  return functionSig as IFunctionSignature;
}

/**
 * Formats argument list for invocation e.g: [arg1, arg2] = "arg1, arg2"
 * @param  {string[]} args
 * @returns string
 */
export function spreadArgs(args: string[]): string {
  let acc = "";
  if (args) {
    args.forEach(elem => {
      acc = acc + elem + ', ';
    })
    acc = acc.slice(0, -2);
  }
  return acc;
}

export function spreadArgsWithTypes(signature: IFunctionSignature): string {
  let acc = "";
  if (signature.args) {
    signature.args.forEach(arg => {
      const optionalChar = arg.optional ? '?' : '';
      acc = acc + arg.name + optionalChar + ': ' + arg.type + ', ';
    })
    acc = acc.slice(0, -2);
  }
  return acc;
}

export function getChainedNamespaceString(chainedNamespaces: string[]): string {
  // remove 'OneSignal' from front
  const copy = [...chainedNamespaces];
  copy.shift();
  return copy.join('.');
}



/**
 * Returns an IArgument list from raw arguments (stuff between parentheses, including types)
 * @param  {string} rawArgs
 * @returns IArgument
 */
export function parseArguments(rawArgs: string): IArgument[] | void {
  if (!rawArgs) {
    return;
  }

  const parsedArgs = [];
  rawArgs.split(",").forEach(arg => {
    const newArg = {};
    const name = arg.split(":")[0];
    const type = arg.split(":")[1];

    newArg["name"] = name.split("?")[0].trim();
    newArg["type"] = type.trim();
    newArg["optional"] = name.includes("?") ? true : false;
    parsedArgs.push(newArg as IArgument);
  });
  return parsedArgs as IArgument[];
}

function toCamelCase(input: string): string {
  return input.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); }).replace(/^\w/, c => c.toLowerCase());
}

function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function generateUniqueFunctionName(namespaceName: string, functionName: string): string {
  return `${toCamelCase(namespaceName)}${capitalizeFirstLetter(functionName)}`;
}

export function hasNonVoidReturnType(sig: IFunctionSignature): boolean {
  if (sig.isAsync) {
    return sig.returnType !== 'Promise<void>';
  }
  return sig.returnType !== 'void' && sig.returnType !== 'Promise<void>';
}
