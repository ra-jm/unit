import { v1 as Unit } from "../../../src/index";

const log = Unit.Logger.create("", {
  outputFormat: "json",
  transports: [new Unit.Logger.Transports.Console()],
});
