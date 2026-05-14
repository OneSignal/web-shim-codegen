declare module "curlrequest" {
  export interface CurlOptions {
    url: string;
    [key: string]: unknown;
  }

  export type CurlCallback = (err: Error | null, stdout: string, meta?: unknown) => void;

  export function request(options: CurlOptions, callback: CurlCallback): void;
}
