import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker as MuiDatePicker } from '@mui/x-date-pickers/DatePicker';
import { DatePickerProps } from '../interfaces/DatePicker';

const DatePicker: React.FC<DatePickerProps> = ({ label, value, onChange, ...props}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MuiDatePicker
        {...props}
        label={label}
        value={value}
        onChange={onChange}
      />
    </LocalizationProvider>
  );
};

export default DatePicker;