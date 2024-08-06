import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import { useState } from 'react';
import Popover from './Popover';

const drawerWidth = 240;

const MiniDrawer = styled(MuiDrawer)(
  () => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
  }),
);

const Drawer: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <MiniDrawer variant="permanent" open={false}>
          <IconButton>
            <MenuIcon />
          </IconButton>
          <Divider />
          <List>
            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton onClick={handleClick}>
                <ListItemIcon sx={{ minWidth: 10 }}>
                  <HomeIcon />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </List>
        </MiniDrawer>
      </Box>
      <Popover
        anchorOrigin={{vertical: "top", horizontal: 'right'}}
        open={open}
        anchorEl={anchorEl}
        handleClose={handleClose}
      />
    </>
  );
}
export default Drawer;