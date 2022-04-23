import { logLevel, LogOption } from "./interface";
import * as LogTransports from "./transports";

export class Log {
  constructor(namespace?: string, options?: LogOption) {}

  configure() {}

  private writeLogs(level: logLevel, ...ctx: string[]) {}

  info(...ctx: string[]) {
    this.writeLogs("INFO", ...ctx);
  }

  warn(...ctx: string[]) {
    this.writeLogs("WARN", ...ctx);
  }

  error(...ctx: string[]) {
    this.writeLogs("ERROR", ...ctx);
  }
}

export const Transports = LogTransports;

export const create = (namespace?: string, options?: LogOption) => {
  return new Log(namespace, options);
};
