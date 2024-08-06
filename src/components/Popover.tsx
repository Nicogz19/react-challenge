import { Box, Button, Stack } from '@mui/material';
import MuiPopover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import multimedia from '../assets/multimedia.png';
import { PopoverProps } from '../interfaces/Popover';

const Popover: React.FC<PopoverProps> = ({open, anchorEl, handleClose, ...props}) => {
  return (
    <div>
      <MuiPopover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        {...props}
      >
        <Box sx={{ p: 2 }}>
          <Typography variant='caption' color="primary">Paso 1 de 5</Typography>
          <Typography variant='body1' sx={{ fontWeight: "bold" }} >Conoce OneExperience</Typography>
          <Typography variant='body2'>Comienza con el recorrido de nuestra nueva plataforma dinámica</Typography>
          <Typography variant='body2' color="primary">Conoce más</Typography>
          <img src={multimedia} alt="multimediaImg" style={{margin: "10px auto", display: "flex"}} />
          <Stack direction="row" spacing={2} justifyContent="center">
            <Button variant="outlined" onClick={handleClose}>Cancelar</Button>
            <Button variant="contained" onClick={handleClose}>Aceptar</Button>
          </Stack>
        </Box>
      </MuiPopover>
    </div>
  );
}
export default Popover;