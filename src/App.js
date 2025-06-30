import React from 'react';
import {
  Container,
  Typography,
  Avatar,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Divider,
  createTheme,
  ThemeProvider,
} from '@mui/material';

// Crear un tema con azul como color principal
const theme = createTheme({
  palette: {
    primary: {
      main: '#1565c0', // azul oscuro
    },
    secondary: {
      main: '#0288d1', // azul claro
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md" style={{ marginTop: '2rem' }}>
        {/* Datos personales */}
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Avatar
              alt="Joaquín Guzmán"
              src="/foto.jpg"
              sx={{
                width: 110,
                height: 110,
                border: '3px solid #1565c0',
                boxShadow: '0 0 10px rgba(21, 101, 192, 0.7)',
              }}
            />
          </Grid>
          <Grid item>
            <Typography variant="h4" component="h1" color="primary">
              Joaquín Nicolás Guzmán Buitrón
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              joacoguz@gmail.com
            </Typography>
            <Typography variant="body1" sx={{ marginTop: '0.5rem' }}>
              Profesional multifacético con formación en gastronomía y más de 10 años de experiencia como jefe de cocina y administrador. Desde hace 5 años me dedico al mantenimiento de equipos médicos. Actualmente curso el 5.º semestre de Ingeniería de Software.
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: '#0288d1' }} />

        {/* Habilidades */}
        <Typography variant="h5" gutterBottom color="primary">
          Habilidades
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card
              elevation={6}
              sx={{
                borderLeft: '6px solid #1565c0',
                backgroundColor: '#f0f7ff',
              }}
            >
              <CardContent>
                <Typography variant="h6" gutterBottom color="primary">
                  Habilidades Blandas
                </Typography>
                <List>
                  <ListItem>
                    <ListItemText primary="Comunicación" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Liderazgo" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Trabajo en equipo" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Adaptabilidad" />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card
              elevation={6}
              sx={{
                borderLeft: '6px solid #1565c0',
                backgroundColor: '#f0f7ff',
              }}
            >
              <CardContent>
                <Typography variant="h6" gutterBottom color="primary">
                  Habilidades Técnicas
                </Typography>
                <List>
                  <ListItem>
                    <ListItemText primary="Mantenimiento de equipos médicos" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Desarrollo web básico" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Bases de datos" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Electrónica básica" />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: '#0288d1' }} />

        {/* Proyectos Académicos y Personales */}
        <Typography variant="h5" gutterBottom color="primary">
          Proyectos Académicos y Personales
        </Typography>
        <Card
          elevation={6}
          sx={{ borderLeft: '6px solid #1565c0', backgroundColor: '#f0f7ff' }}
        >
          <CardContent>
            <Typography variant="body1" paragraph>
              He desarrollado proyectos en clases de desarrollo web y aplicaciones móviles, incluyendo la creación de un juego sencillo y proyectos enfocados en bases de datos. Estos proyectos implicaron diseño, programación y pruebas, fortaleciendo mis habilidades técnicas y prácticas.
            </Typography>
          </CardContent>
        </Card>

        <Divider sx={{ my: 4, borderColor: '#0288d1' }} />

        {/* Lenguajes de programación */}
        <Typography variant="h5" gutterBottom color="primary">
          Lenguajes de Programación Preferidos
        </Typography>
        <List sx={{ bgcolor: '#f0f7ff', borderRadius: '4px' }}>
          <ListItem>
            <ListItemText primary="HTML" />
          </ListItem>
          <ListItem>
            <ListItemText primary="CSS" />
          </ListItem>
          <ListItem>
            <ListItemText primary="JavaScript" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Python" />
          </ListItem>
        </List>

        <Divider sx={{ my: 4, borderColor: '#0288d1' }} />

        {/* Experiencia Profesional */}
        <Typography variant="h5" gutterBottom color="primary">
          Experiencia Profesional
        </Typography>
        <Card
          elevation={6}
          sx={{ borderLeft: '6px solid #1565c0', backgroundColor: '#f0f7ff' }}
        >
          <CardContent>
            <Typography variant="body1" paragraph>
              Más de 10 años trabajando en la industria gastronómica, desempeñándome como jefe de cocina y administrador. Los últimos 5 años dedicados al mantenimiento de equipos médicos, aplicando conocimientos técnicos y habilidades de resolución de problemas en entornos clínicos.
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </ThemeProvider>
  );
}

export default App;
