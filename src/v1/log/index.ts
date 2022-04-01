import * as LogTransports from "./transports";

export class Log {
  constructor(
    namespace?: string,
    options?: {
      timestamp?: boolean;
      outputFormat: "text" | "json";
      transports: Array<LogTransports.Console>;
    }
  ) {}

  configure() {}

  info() {}

  warn() {}

  error() {}
}

export const Transports = LogTransports;

export const create = (
  namespace?: string,
  options?: {
    timestamp?: boolean;
    outputFormat: "text" | "json";
    transports: Array<LogTransports.Console>;
  }
) => {
  return new Log(namespace, options);
};
