import { TextField, MenuItem } from "@mui/material";
import type { SelectChangeEvent } from "@mui/material/Select";

interface Props {
  value: string[];
  onChange: (val: string[]) => void;
  options: string[];
}

export const MultiSelectInput = ({ value = [], onChange, options }: Props) => {
const safeValue = Array.isArray(value) ? value : []
  const handleChange = (event: SelectChangeEvent<string[]>) => {
    const val = event.target.value;

    onChange(
      typeof val === "string"
        ? val.split(",")
        : val
    );
  };

  return (
    <TextField
      select
      size="small"
      value={safeValue}
      SelectProps={{
        multiple: true,
        onChange:handleChange 
      }}
    >
      {options.map((opt) => (
        <MenuItem key={opt} value={opt}>
          {opt}
        </MenuItem>
      ))}
    </TextField>
  );
};