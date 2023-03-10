import { PATHS } from "../support/constants";
import { remoteFetchFile } from "../support/utils";

export class FileFetchManager {
  static async getApiSpec(): Promise<string> {
    return remoteFetchFile(PATHS.UPSTREAM_API_SPEC);
  }
}
