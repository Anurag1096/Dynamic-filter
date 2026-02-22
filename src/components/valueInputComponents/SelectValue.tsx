import { MenuItem, TextField } from "@mui/material";

interface Props {
  value: string;
  onChange: (val: string) => void;
  options: string[];
}

export default function SelectValue({ value, onChange, options }: Props) {
  return (
    <TextField
      select
      size="small"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map((opt) => (
        <MenuItem key={opt} value={opt}>
          {opt}
        </MenuItem>
      ))}
    </TextField>
  );
}