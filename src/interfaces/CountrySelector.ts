import { CountryData } from "./CountryData";

export interface CountrySelectorProps {
  countryData: CountryData[];
  countrySelected: number | undefined;
  value: number;
  setCountrySelected: (countryId: number) => void;
  handleChange: (_event: React.SyntheticEvent, newValue: number) => void;
}