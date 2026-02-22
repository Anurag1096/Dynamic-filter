import { fieldRegistry, operatorTypeMap } from "../components/FilterBuilder/constants";

export function getOperator(field?: keyof typeof fieldRegistry) {
  // gets the right option list from the operator mpa object using field type
  if (!field || !fieldRegistry[field]) return [];

  const type = fieldRegistry[field].type;
  return operatorTypeMap[type] || [];
}