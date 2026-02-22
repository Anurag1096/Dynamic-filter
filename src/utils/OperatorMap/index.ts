// this is a genrated code file to speed up the workflow
import { textOperators } from "./textOperators";
import { numberOperators } from "./numberOperators";
import  dateOperators  from "./dateOperators";
import { booleanOperators } from "./booleanOperators";
import { singleSelectOperators } from "./singleSelctOperators";
import { multiSelectOperators } from "./multiSelectOperators";
// Map type → operator map
export const operatorHandlerMap: Record<
  string,
  Record<string, (f: any, v: any) => boolean>
> = {
  text: textOperators,
  number: numberOperators,
  currency: numberOperators,
  date: dateOperators,
  boolean: booleanOperators,
  singleSelect: singleSelectOperators,
  multiSelect: multiSelectOperators,
};
