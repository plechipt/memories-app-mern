import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import {
  CssBaseline,
  Container,
  Avatar,
  Button,
  Link,
  TextField,
  Grid,
  Box,
  Typography,
} from "@material-ui/core";

import useStyles from "./styles";
import { login } from "../../redux/actionCreators/users";

export default function Login() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.users);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [failedToLogin, setFailedToLogin] = useState(false);

  useEffect(() => {
    const { statusCode, token } = user;

    if (statusCode === 400) {
      setFailedToLogin(true);
      setPassword("");
    } else if (statusCode === 200) {
      localStorage.setItem("token", token);

      clearForm();
      setFailedToLogin(false);
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ username, password }));
  };

  const clearForm = () => {
    setUsername("");
    setPassword("");
  };

  return (
    <Container className={classes.mainContainer} component="main" maxWidth="sm">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box onSubmit={handleSubmit} component="form" sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                fullWidth
                label="Username"
                name="username"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={failedToLogin}
                helperText={failedToLogin ? user.message : null}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                fullWidth
                label="Password"
                name="password"
                type="password"
                autoComplete="new-password"
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            className={classes.submitButton}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid
            className={classes.bottomText}
            container
            justifyContent="flex-end"
          >
            <Grid item>
              <Link component="button" onClick={() => navigate("/register")}>
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
