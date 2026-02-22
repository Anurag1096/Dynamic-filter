import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "..";
import type { FilterRule } from "../../components/FilterBuilder/types";

export const FilteredData=createSelector([
     (state: RootState) => state.employee.employeeData,
    (state: RootState) => state.filter.rules,
],(employeeData,rules:FilterRule[])=>{
  console.log(rules)
  // check if rules array is not empty 
if(!rules) return employeeData
//check if rules is valid
// if valid then procede with filtering 
return employeeData
})