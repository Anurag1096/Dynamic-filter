import { TextField, MenuItem } from "@mui/material";

interface Props{
  value:string[],
  onChange:(val:string)=>void,
  options:string[]
}


export const MultiSelectInput = ({ value = [], onChange, options }: Props) => (
  <TextField
    select
    size="small"
    SelectProps={{ multiple: true }}
    value={value}
    onChange={(e) => onChange(e.target.value)}
  >
    {options.map((opt: string) => (
      <MenuItem key={opt} value={opt}>
        {opt}
      </MenuItem>
    ))}
  </TextField>
);