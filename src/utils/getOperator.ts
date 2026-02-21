import { fieldRegistry, operatorTypeMap } from "../components/FilterBuilder/constants";

export function getOperator(field?: keyof typeof fieldRegistry) {
  if (!field || !fieldRegistry[field]) return [];

  const type = fieldRegistry[field].type;
  return operatorTypeMap[type] || [];
}