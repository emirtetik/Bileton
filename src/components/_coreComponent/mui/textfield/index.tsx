import { Stack, TextField } from "@mui/material";

interface MuiTextFieldProps {
  value: string;
  type?:string
  variant:'outlined' | 'standard' | 'filled'
  label?:string
  onChange: (value: string) => void;
}

const MuiTextField: React.FC<MuiTextFieldProps> = ({ value, onChange, label,variant,type }) => {
  return (
    <Stack spacing={4}>
      <Stack direction={"row"} spacing={2}>
        <TextField
        className="flex items-center justify-center font-raleway "
        type={type}
          label={label}
          variant={variant}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          InputLabelProps={{style: {fontSize: 14}}}
        
        />
      </Stack>
    </Stack>
  );
};

export default MuiTextField;
