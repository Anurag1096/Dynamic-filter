import { FilterBuilderComponent } from "../FilterBuilder"
import TableRendering from "../Table"
import { useAppSelector,useAppDispatch } from "../../store/hooks"
import { useEffect } from "react"
import { FilteredData } from "../../store/seclector/filteredDataSelector"
import { addEmployeeData } from "../../store/slices/tableDataSlice"
import { generateEmployees } from "../../data/genrateTableData"
export const DynamicFilter=()=>{
    const dispatch=useAppDispatch()
    useEffect(()=>{
      const genratedData=generateEmployees(60)
      dispatch(addEmployeeData(genratedData))

    },[])
    const filteredData=useAppSelector(FilteredData)

    
    return (<>
    <FilterBuilderComponent/>
    <TableRendering data={filteredData}/>
    
    </>)
}