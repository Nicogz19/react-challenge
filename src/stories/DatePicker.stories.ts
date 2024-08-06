import type { Meta, StoryObj } from '@storybook/react';
import DatePicker from '../components/DatePicker';
import dayjs from 'dayjs';

const meta = {
  title: 'DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DatePicker>;
  
export default meta;
type Story = StoryObj<typeof meta>;

const args = {
  label: 'Select Date',
  value: dayjs(),
}

export const Default: Story = {
  args: args
};

export const Open: Story = {
  args: {...args, open: true}
};

export const Disabled: Story = {
  args: {...args, disabled: true}
};

export const MinDate: Story = {
  args: {...args, open: true, minDate: dayjs().subtract(1, 'day')}
};

export const MaxDate: Story = {
  args: {...args, open: true, maxDate: dayjs().add(1, 'day')}
};

export const Error: Story = {
  args: {...args, slotProps: {
    textField: {
      helperText: 'Invalid date',
      error: true
    },
  }}
};

export const DayView: Story = {
  args: {...args, open: true, views: ["day"]}
};

export const MonthView: Story = {
  args: {...args, open: true, views: ["month"]}
};

export const YearsView: Story = {
  args: {...args, open: true, views: ["year"]}
};