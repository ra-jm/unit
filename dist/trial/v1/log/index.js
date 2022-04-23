"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../../src/index");
const log = index_1.v1.Logger.create({
    namespace: "APP",
    outputFormat: "text",
    transports: [new index_1.v1.Logger.Transports.Console()],
    timestamp: true,
});
log.out("INFO", null, "one");
log.out("INFO", null, "two");
log.out("SUCCESS", null, "three");
log.out("SUCCESS", null, "four");
log.out("WARN", null, "five");
log.out("WARN", null, "six");
const childLog = log.child("CHILD");
childLog.out("ERROR", null, "seven");
childLog.out("ERROR", null, "eight");
childLog.out("ERROR", null, "nine");
const secondChildLog = childLog.child("SEC-CHILD");
secondChildLog.out("INFO", null, "10");
secondChildLog.out("INFO", null, "11");
secondChildLog.out("INFO", {
    hidden: true,
}, "12");
secondChildLog.out("INFO", null, "13");
childLog.out("ERROR", null, "9");
log.out("WARN", null, "6");
