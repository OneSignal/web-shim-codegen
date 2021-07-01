import * as fs from 'fs';
import { FILE_WRITTEN_IN_PURE_JS } from '../constants';

export class ReaderManager {
  static async readFile(path: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data.replace(FILE_WRITTEN_IN_PURE_JS+'\n', ''));
      });
    });
  }
}
