import * as LogTransports from "./transports";
export declare type logLevel = "INFO" | "WARN" | "ERROR" | "SUCCESS";
export interface LogOption {
    namespace: string;
    timestamp?: boolean;
    outputFormat: "text" | "json";
    transports: Array<LogTransports.Console>;
}
export interface LogObject {
    namespace?: string;
    outputFormat: "text" | "json";
    level: logLevel;
    context: string[];
    hidden?: boolean;
    timestamp?: boolean;
}
export interface Transports {
    writeLog(options: LogObject): void;
}
export interface ConsoleTransports extends Transports {
}
