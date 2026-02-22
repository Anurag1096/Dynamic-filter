import { fieldRegistry } from "../components/FilterBuilder/constants";
import type { FilterRule } from "../components/FilterBuilder/types";
import type { Employee } from "./types/employType";
import { operatorHandlerMap } from "./OperatorMap";
import { getFieldValue } from "./getFieldValue";
export function applyFilters(
  data: Employee[],
  rules: FilterRule[],
): Employee[] | [] {
  return data.filter((employe) => {
    //for every employ record we check if it passes all the rules
    // if it does its just added to filtered data list
    rules.every((rule) => {
      if (!rule.field || !rule.operator) return true;
      const fieldConfig = fieldRegistry[rule.field];
      if (!fieldConfig) return true;

      const fieldValue = getFieldValue(employe, rule.field);
      const operatorFunc =
        operatorHandlerMap[fieldConfig.type]?.[rule.operator];

      if (!operatorFunc) return true;

      return operatorFunc(fieldValue, rule.value);
    });
  });
}
