import type { Meta, StoryObj } from '@storybook/react';
import Popover from '../components/Popover';

const meta = {
  title: 'Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

const args = {
  open: true,
  anchorEl: null,
  handleClose: () => {}
}

export const Open: Story = {
  args: args
};

export const Close: Story = {
  args: {...args, open: false}
};

export const OpenTopRight: Story = {
  args: {...args, anchorOrigin: {
    vertical: "top",
    horizontal: 'right',
  }}
};

export const OpenTopLeft: Story = {
  args: {...args, anchorOrigin: {
    vertical: "top",
    horizontal: 'left',
  }}
};

export const OpenBottomRight: Story = {
  args: {...args, anchorOrigin: {
    vertical: "bottom",
    horizontal: 'right',
  }}
};

export const OpenBottomLeft: Story = {
  args: {...args, anchorOrigin: {
    vertical: "bottom",
    horizontal: 'left',
  }}
};