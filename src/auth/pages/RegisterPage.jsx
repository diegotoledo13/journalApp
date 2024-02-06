import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayaout } from "../layout/AuthLayaout";

export const RegisterPage = () => {
  return (
    <AuthLayaout title="Crear Cuenta">
      <form>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre"
              type="text"
              placeholder="Jonh Doe"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth>
                Crear Cuenta
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <Typography variant="body2" align="center">
              <Link component={RouterLink} color="inherit" to="/auth/login">
                ¿Ya tienes cuenta? Ingresar
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </form>
    </AuthLayaout>
  );
};
