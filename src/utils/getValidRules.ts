import type { FilterRule } from "../components/FilterBuilder/types";
export function getValidRules(rulesArray: FilterRule[]): FilterRule[] {
//   checks every rule and determines if it fields are valid or not
    return (rulesArray || []).filter(
    (rule) => [rule.field, rule.operator, rule.value].every(
      (val) => val !== null && val !== undefined && val !== ""
    )
  );
}