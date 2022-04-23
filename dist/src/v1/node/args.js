"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const process_1 = __importDefault(require("process"));
function argv(key) {
    // Return true if the key exists and a value is defined
    if (process_1.default.argv.includes(`--${key}`))
        return true;
    const value = process_1.default.argv.find((element) => element.startsWith(`--${key}=`));
    // Return null if the key does not exist and a value is not defined
    if (!value)
        return null;
    return value.replace(`--${key}=`, "");
}
exports.default = argv;
