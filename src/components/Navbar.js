import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Mi Portafolio
        </Typography>
        <Box>
          <Button color="inherit">Inicio</Button>
          <Button color="inherit">Habilidades</Button>
          <Button color="inherit">Proyectos</Button>
          <Button color="inherit">Contacto</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;