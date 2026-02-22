import { configureStore } from "@reduxjs/toolkit";
import filterReducer from './slices/filterSlice'
import employeeReducer from './slices/tableDataSlice'
export const store=configureStore({
    reducer:{
        filter:filterReducer,
        employee:employeeReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;