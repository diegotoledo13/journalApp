import { useDispatch } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import {
  checkAuthenticaction,
  startGoogleSignIn,
} from "../../store/auth/thunks";
import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayaout } from "../layout/AuthLayaout";
import { useForm } from "../../hooks/useForm";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const { email, password, onInputChange } = useForm({
    email: "",
    password: "",
  });
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(checkAuthenticaction(email, password));
  };
  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  };
  return (
    <AuthLayaout title="Login">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button type="submit" variant="contained" fullWidth>
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button onClick={onGoogleSignIn} variant="contained" fullWidth>
                <Google />
                <Typography sx={{ ml: 1 }}>Goggle</Typography>
              </Button>
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <Typography variant="body2" align="center">
                <Link
                  component={RouterLink}
                  color="inherit"
                  to="/auth/register"
                >
                  ¿No tienes cuenta? Registrate
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </AuthLayaout>
  );
};
