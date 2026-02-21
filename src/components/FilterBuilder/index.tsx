import { Button } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { clearAllRule,addRule } from "../../store/slices/filterSlice";
import { FilterRowRenderer } from "./filterrowRenderer";
//This component will orchestrate the data required for filterbilder
export const FilterBuilderComponent = () => {
  const dispatch = useAppDispatch();
  const RuleStateArray = useAppSelector((state) => state.filter);
  return (
    <>
      <div>
        <h1>Filters</h1>
        <Button onClick={() => dispatch(addRule())}>AddRule</Button>
        <Button onClick={() => dispatch(clearAllRule())}>ClearAll</Button>
        <div>
          {RuleStateArray.rules.map((rule) => {
            return <FilterRowRenderer rule={rule} />;
          })}
        </div>
      </div>
    </>
  );
};
