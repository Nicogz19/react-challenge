import type { Meta, StoryObj } from '@storybook/react';
import Drawer from '../components/Drawer';

const meta = {
  title: 'DrawerPopover',
  component: Drawer,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};