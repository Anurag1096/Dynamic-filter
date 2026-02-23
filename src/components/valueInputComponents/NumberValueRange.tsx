import { Stack, TextField } from "@mui/material";

interface NumberRange {
  min: number | "";
  max: number | "";
}

interface Props {
  value: NumberRange;
  onChange: (val: NumberRange) => void;
}

export default function NumberRangeValue({
  value = { min: "", max: "" },
  onChange,
}: Props) {
  const isError =
    value.min !== undefined && value.max !== undefined && value.min > value.max;

  return (
    <Stack direction="row" spacing={1}>
      <TextField
        type="number"
        helperText={isError ? "Min cannot be greater than Max" : ""}
        size="small"
        placeholder="Min"
        value={value.min}
        InputProps={{
          inputProps: {
            min: 0,
          },
        }}
        onChange={(e) =>
          onChange({
            ...value,
            min: e.target.value === "" ? "" : Number(e.target.value),
          })
        }
      />
      <TextField
        type="number"
        size="small"
        placeholder="Max"
        value={value.max}
        InputProps={{
          inputProps: {
            min: 1,
          },
        }}
        onChange={(e) =>
          onChange({
            ...value,
            max: e.target.value === "" ? "" : Number(e.target.value),
          })
        }
      />
    </Stack>
  );
}
