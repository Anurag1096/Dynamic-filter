import type { OperatorHandlerMapType } from "./OperatorMap/types";
import type { OperatorKey } from "../components/FilterBuilder/types";
import { operatorHandlerMap } from "./OperatorMap";
export function getOperatorFunc<T extends keyof OperatorHandlerMapType>(
    fieldType:T,
    operator:OperatorKey
){
 return operatorHandlerMap[fieldType]?.[operator]
}