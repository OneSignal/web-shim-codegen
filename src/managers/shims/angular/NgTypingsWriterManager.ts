import { TextWriter } from "@yellicode/core";
import { TypingsWriterManagerBase } from "../../bases/TypingsWriterManagerBase";

export class NgTypingsWriterManager extends TypingsWriterManagerBase {
  constructor(writer: TextWriter) {
    super(writer);
  }
}