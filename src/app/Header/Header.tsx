import React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import { HeaderAppBarSX } from '../../common/styles/sx/sx_styles';

export const Header = () => {
  return (
    <AppBar position="fixed" sx={HeaderAppBarSX}>
      <Toolbar variant="dense" sx={{ justifyContent: 'center' }}>
        <Typography variant="h6" color="inherit" component="div">
          Green Api App
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
