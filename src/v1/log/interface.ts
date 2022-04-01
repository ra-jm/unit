export type logLevel = "INFO" | "WARN" | "ERROR";

export interface Transports {
  writeLog(level: logLevel): Promise<boolean>;
}

export interface ConsoleTransports extends Transports {}
