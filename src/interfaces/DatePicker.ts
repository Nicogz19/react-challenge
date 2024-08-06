import { DatePickerSlotProps } from '@mui/x-date-pickers/DatePicker';
import { Dayjs } from 'dayjs';
import { DateView } from '@mui/x-date-pickers';

export interface DatePickerProps {
  label: string;
  value: Dayjs;
  onChange?: (newValue: any) => void;
  disabled?: boolean;
  inputFormat?: string;
  error?: boolean;
  helperText?: string;
  views?: DateView[];
  open?: boolean;
  minDate?: Dayjs;
  maxDate?: Dayjs;
  orientation?: "landscape" | "portrait" | undefined;
  slotProps?: DatePickerSlotProps<Dayjs, false> | undefined
}