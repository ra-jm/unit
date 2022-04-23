import { logLevel, LogOption } from "./interface";
import * as LogTransports from "./transports";
export declare class Log {
    private options;
    constructor(options: LogOption);
    configure(): void;
    out(level: logLevel, options?: {
        hidden?: boolean;
    } | null, ...ctx: string[]): void;
    child(name: string): Log;
}
export declare const Transports: typeof LogTransports;
export declare const create: (options: LogOption) => Log;
