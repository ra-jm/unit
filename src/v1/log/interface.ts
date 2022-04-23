import * as LogTransports from "./transports";

export type logLevel = "INFO" | "WARN" | "ERROR";
export interface LogOption {
  timestamp?: boolean;
  outputFormat: "text" | "json";
  transports: Array<LogTransports.Console>;
}

export interface Transports {
  writeLog(level: logLevel): Promise<boolean>;
}

export interface ConsoleTransports extends Transports {}
