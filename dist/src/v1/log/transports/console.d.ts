import { ConsoleTransports, LogObject } from "../interface";
export default class LogConsoleTransport implements ConsoleTransports {
    writeLog(obj: LogObject): void;
}
