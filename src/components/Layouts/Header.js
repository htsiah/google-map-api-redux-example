import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = (props) => {
  return (
    <AppBar position='static'>
      <Toolbar variant='dense'>
        <Typography variant='h6' color='inherit' component='div'>
          Google Map API Redux Example
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
