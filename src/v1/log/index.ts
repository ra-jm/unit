import {
  logLevel,
  LogOption,
  Transports as TransportsInterface,
} from "./interface";
import * as LogTransports from "./transports";

export class Log {
  private options: LogOption;

  constructor(options: LogOption) {
    this.options = options;
  }

  configure() {}

  out(
    level: logLevel,
    options?: { hidden?: boolean } | null,
    ...ctx: string[]
  ): void {
    this.options.transports.forEach((t) => {
      t.writeLog({
        level: level,
        context: ctx,
        hidden: options?.hidden,
        timestamp: this.options.timestamp,
        namespace: this.options.namespace,
        outputFormat: this.options.outputFormat,
      });
    });
  }

  child(name: string): Log {
    const l: Log = Object.create(this);
    l.options = {
      ...l.options,
      namespace: l.options.namespace
        ? l.options.namespace + " > " + name
        : name,
    };

    return l;
  }
}

export const Transports = LogTransports;

export const create = (options: LogOption) => {
  return new Log(options);
};
