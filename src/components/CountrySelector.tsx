import { Box, Tab, Tabs } from "@mui/material"
import React from 'react'
import Countries from "./Countries";
import { CountrySelectorProps } from "../interfaces/CountrySelector";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const CountrySelector: React.FC<CountrySelectorProps> = ({countryData, value, countrySelected, setCountrySelected, handleChange}) => {

  const tabPanelData = (tabNumber: number) => {
    return <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2}}>
      {countryData.filter((country) => country.tab === tabNumber).map((country) => (
        <Countries key={country.id} onClick={() => setCountrySelected(country.id)} country={country.name} isSelected={country.id === countrySelected} />
      ))}
    </Box>
  }

  return (
    <Box>
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        <Tab label="América" {...a11yProps(0)} />
        <Tab label="M. Frances" {...a11yProps(1)} />
        <Tab label="Iberia" {...a11yProps(2)} />
        <Tab label="M. Italiano" {...a11yProps(2)} />
        <Tab label="Resto Europa" {...a11yProps(2)} />
      </Tabs>
      <CustomTabPanel value={value} index={0}>
        {tabPanelData(1)}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        {tabPanelData(2)}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        {tabPanelData(3)}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        {tabPanelData(4)}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        {tabPanelData(5)}
      </CustomTabPanel>
    </Box>
  )
}

export default CountrySelector