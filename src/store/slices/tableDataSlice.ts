import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Employee } from "../../utils/types/employType";

interface TableState{
    employeeData:Employee[]
   
}

const initialState:TableState={
    employeeData:[],
    
}


const employeeSlice=createSlice({
    name:'employeeData',
    initialState,
    reducers:{
        addEmployeeData:(state,action:PayloadAction<Employee[]>)=>{
            state.employeeData=action.payload
            
        },
    }
})


export const {addEmployeeData}=employeeSlice.actions
export default employeeSlice.reducer