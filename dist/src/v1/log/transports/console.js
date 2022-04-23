"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LCERROR = "\x1b[31m%s\x1b[0m"; //red
const LCWARN = "\x1b[33m%s\x1b[0m"; //yellow
const LCINFO = "\x1b[36m%s\x1b[0m"; //cyan
const LCSUCCESS = "\x1b[32m%s\x1b[0m"; //green
const logger = class {
    static error(message, ...optionalParams) {
        console.error(LCERROR, message, ...optionalParams);
    }
    static warn(message, ...optionalParams) {
        console.warn(LCWARN, message, ...optionalParams);
    }
    static info(message, ...optionalParams) {
        console.info(LCINFO, message, ...optionalParams);
    }
    static success(message, ...optionalParams) {
        console.info(LCSUCCESS, message, ...optionalParams);
    }
};
class LogConsoleTransport {
    writeLog(obj) {
        if (!obj.hidden && obj.outputFormat == "text") {
            switch (obj.level) {
                case "ERROR":
                    logger.error(obj.namespace ? obj.namespace : "", obj.timestamp ? new Date() : "", obj.context.join(" "));
                    break;
                case "WARN":
                    logger.warn(obj.namespace ? obj.namespace : "", obj.timestamp ? new Date() : "", obj.context.join(" "));
                    break;
                case "INFO":
                    logger.info(obj.namespace ? obj.namespace : "", obj.timestamp ? new Date() : "", obj.context.join(" "));
                    break;
                case "SUCCESS":
                    logger.success(obj.namespace ? obj.namespace : "", obj.timestamp ? new Date() : "", obj.context.join(" "));
                    break;
                default:
                    break;
            }
        }
        if (!obj.hidden && obj.outputFormat == "json") {
            console.log(JSON.stringify({
                namespace: obj.namespace,
                level: obj.level,
                context: obj.context,
                timestamp: obj.timestamp ? new Date() : null,
            }));
        }
    }
}
exports.default = LogConsoleTransport;
