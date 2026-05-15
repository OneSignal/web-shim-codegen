import { IArgument } from "../models/Argument";
import { IFunctionSignature } from "../models/FunctionSignature";
import { GITHUB_URL } from "./constants";

export async function remoteFetchFile(path: string): Promise<string> {
  const res = await fetch(GITHUB_URL + path);
  return await res.text();
}

/**
 * Creates regex used for finding function in OneSignal.js WebSDK file
 */
export function createRegex(functionName: string): RegExp {
  return new RegExp("(async)?\\s*" + functionName + "\\s*\\((.*)\\)\\s*:?\\s*(.*)\\s*{");
}

/**
 * Parses function signature returning an object with function meta data like args, return type, etc...
 */
export function parseFunctionSig(signature: string): IFunctionSignature {
  const functionSig: IFunctionSignature = { name: "", isAsync: false };
  const matches = signature.match(/(\S*)\s*\((.*)\)\s*:?\s*(.*)\s*{/);

  if (matches) {
    functionSig.name = matches[1];

    if (signature.includes("async")) {
      functionSig.isAsync = true;
    }

    const parsedArgs = parseArguments(matches[2]);
    if (parsedArgs) {
      functionSig.args = parsedArgs;
    }

    const defaultReturnType = functionSig.isAsync ? "Promise<void>" : "void";
    functionSig.returnType = matches[3]
      ? matches[3].trim() || defaultReturnType
      : defaultReturnType;
  }

  return functionSig;
}

/**
 * Formats argument list for invocation e.g: [arg1, arg2] = "arg1, arg2"
 */
export function spreadArgs(args: string[] | undefined): string {
  let acc = "";
  if (args) {
    args.forEach((elem) => {
      acc = acc + elem + ", ";
    });
    acc = acc.slice(0, -2);
  }
  return acc;
}

export function spreadArgsWithTypes(signature: IFunctionSignature): string {
  let acc = "";
  if (signature.args) {
    signature.args.forEach((arg) => {
      const optionalChar = arg.optional ? "?" : "";
      acc = acc + arg.name + optionalChar + ": " + arg.type + ", ";
    });
    acc = acc.slice(0, -2);
  }
  return acc;
}

export function getChainedNamespaceString(chainedNamespaces: string[]): string {
  // remove 'OneSignal' from front
  const copy = [...chainedNamespaces];
  copy.shift();
  return copy.join(".");
}

/**
 * Returns an IArgument list from raw arguments (stuff between parentheses, including types)
 */
export function parseArguments(rawArgs: string): IArgument[] | undefined {
  if (!rawArgs) {
    return;
  }

  const parsedArgs: IArgument[] = [];
  rawArgs.split(",").forEach((arg) => {
    const name = arg.split(":")[0];
    const type = arg.split(":")[1];

    parsedArgs.push({
      name: name.split("?")[0].trim(),
      type: type.trim(),
      optional: name.includes("?"),
    });
  });
  return parsedArgs;
}

function toCamelCase(input: string): string {
  return input
    .replace(/-([a-z])/g, function (g) {
      return g[1].toUpperCase();
    })
    .replace(/^\w/, (c) => c.toLowerCase());
}

function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function generateUniqueFunctionName(namespaceName: string, functionName: string): string {
  return `${toCamelCase(namespaceName)}${capitalizeFirstLetter(functionName)}`;
}

export function hasNonVoidReturnType(sig: IFunctionSignature): boolean {
  if (sig.isAsync) {
    return sig.returnType !== "Promise<void>";
  }
  return sig.returnType !== "void" && sig.returnType !== "Promise<void>";
}
