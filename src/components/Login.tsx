import { Box, Button, Card, Typography } from "@mui/material"
import CountrySelector from "./CountrySelector";
import world from "../assets/world.png";
import { useState } from "react";
import countryData from '../countryData.json';

const Login: React.FC = () => {
  const [value, setValue] = useState(0);
  const [countrySelected, setCountrySelected] = useState<number | undefined>();

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Card sx={{textAlign: "center"}}>
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>Selecciona tu región/país</Typography>
      <Box sx={{ margin: "30px 0px" }}>
        <img src={world} alt="worl-img" />
      </Box>
      <CountrySelector countryData={countryData} value={value} handleChange={handleChange} countrySelected={countrySelected} setCountrySelected={setCountrySelected} />
      <Button variant="contained" sx={{borderRadius: "20px", marginBottom: "20px"}}>Continuar</Button>
      <Typography variant="body2">Al continuar, aceptas los Términos y condiciones</Typography>
    </Card>
  )
}

export default Login