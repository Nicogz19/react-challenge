import type { Meta, StoryObj } from '@storybook/react';
import CountrySelector from '../components/CountrySelector';
import countryData from '../countryData.json';
import { useState } from 'react';

const meta = {
  title: 'CountrySelector',
  component: CountrySelector,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CountrySelector>;

export default meta;
type Story = StoryObj<typeof meta>;

const CountrySelectorRender = (args: any) => {
  const [value, setValue] = useState(args.value);
  const [countrySelected, setCountrySelected] = useState(args.countrySelected);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleSetCountrySelected = (countryId: number) => {
    setCountrySelected(countryId);
  };

  return (
    <CountrySelector
      {...args}
      value={value}
      countrySelected={countrySelected}
      handleChange={handleChange}
      setCountrySelected={handleSetCountrySelected}
    />
  );
};

const args = {
  countryData: countryData,
  countrySelected: undefined,
  value: 0,
  handleChange: () => {},
  setCountrySelected: () => {}
}

export const Default: Story = {
  render: (args) => <CountrySelectorRender {...args} />,
  args: args,
};

export const Tab2Selected: Story = {
  render: (args) => <CountrySelectorRender {...args} />,
  args: {...args, value: 1},
};

export const Tab3Selected: Story = {
  render: (args) => <CountrySelectorRender {...args} />,
  args: {...args, value: 2},
};

export const ArgentinaSelected: Story = {
  render: (args) => <CountrySelectorRender {...args} />,
  args: {...args, countrySelected: 1},
};

export const PortugalSelected: Story = {
  render: (args) => <CountrySelectorRender {...args} />,
  args: {...args, countrySelected: 16, value: 2},
};

export const noCountryData: Story = {
  render: (args) => <CountrySelectorRender {...args} />,
  args: {...args, countryData: []},
};