import { ConsoleTransports, logLevel } from "../interface";

export default class LogConsoleTransport implements ConsoleTransports {
  writeLog(level: logLevel): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
