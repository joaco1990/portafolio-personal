import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material';
import React from 'react';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Azul principal
    },
    secondary: {
      main: '#0288d1', // Azul secundario
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        {/* Tu aplicación aquí */}
        <h1 style={{ color: theme.palette.primary.main }}>Hola Mundo</h1>
      </div>
    </ThemeProvider>
  );
};

export default App;