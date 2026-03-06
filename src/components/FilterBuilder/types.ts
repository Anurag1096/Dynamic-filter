import {fieldRegistry, operatorTypeMap} from './constants'


export type FieldName = keyof typeof fieldRegistry

export type FieldType= typeof fieldRegistry[FieldName]["type"]
type Range={
  min:number;
  max:number;
}

type CurrencyRange = {
  min: number;
  max: number;
  currency: string;
};

type MultiSelect={
   selected: string[]
}

export type FilterValue= string | number | Date | boolean | CurrencyRange| Range  | MultiSelect | null
export  type OperatorKey =
  (typeof operatorTypeMap)[keyof typeof operatorTypeMap][number];

export  interface FilterRule{
    id:string,
    field:FieldName | null,
    operator:OperatorKey | null,
    value:FilterValue
}