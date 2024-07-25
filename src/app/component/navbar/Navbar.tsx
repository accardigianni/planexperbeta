
import React from 'react';

import { Box } from '@mui/material';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import VisibilityIcon from '@mui/icons-material/Visibility';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import PersonIcon from '@mui/icons-material/Person';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Navbar() {
  return (
    <>
      <AppBar sx={{ width: '100%',  position: 'relative' }} >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Button sx={{ color: 'white' }}>PLANEXPER</Button>
          <Box sx={{ display: 'flex', gap: '15px' }}>
            <HomeIcon  />
            <PermMediaIcon  />
            <VisibilityIcon  />
            <NotificationsIcon  />
            <ContactSupportIcon  />
            <PersonIcon  />
            <ArrowDropDownIcon />
            </Box>
        </Toolbar>
      </AppBar>
      </>
  );
}

export default Navbar;
