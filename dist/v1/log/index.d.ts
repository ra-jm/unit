import { LogOption } from "./interface";
import * as LogTransports from "./transports";
export declare class Log {
    constructor(namespace?: string, options?: LogOption);
    configure(): void;
    private writeLogs;
    info(...ctx: string[]): void;
    warn(...ctx: string[]): void;
    error(...ctx: string[]): void;
}
export declare const Transports: typeof LogTransports;
export declare const create: (namespace?: string | undefined, options?: LogOption | undefined) => Log;
