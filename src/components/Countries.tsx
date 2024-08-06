import { Typography } from "@mui/material"
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { CountriesProps } from "../interfaces/countries";

const Countries: React.FC<CountriesProps> = ({country, isSelected, ...props}) => {
  return (
    <Typography
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingX: "10px",
        gap: "3px",
        cursor: "pointer",
        border: isSelected ? "1px solid #48CFB2" : "transparent",
        borderRadius: "4px"
      }}
      variant="body1"
      {...props}
    >
      {country}
      {isSelected && <CheckCircleOutlineIcon style={{color: "#48CFB2"}} />}
    </Typography>
  )
}

export default Countries