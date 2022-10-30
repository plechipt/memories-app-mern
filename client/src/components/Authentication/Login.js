import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import {
  InputAdornment,
  Grow,
  CssBaseline,
  Container,
  Avatar,
  Button,
  TextField,
  Grid,
  Box,
  Typography,
} from "@material-ui/core";

import useStyles from "./styles";
import { login } from "../../redux/actionCreators/users";

import GoogleLogin from "./GoogleLogin";

export default function Login() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.users);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [failedToLogin, setFailedToLogin] = useState(false);

  useEffect(() => {
    if (user) {
      const { statusCode, token } = user;

      if (statusCode === 400) {
        setFailedToLogin(true);
        setPassword("");
      } else if (statusCode === 200) {
        localStorage.setItem("token", token);

        clearForm();
        setFailedToLogin(false);
        navigate("/");
      }
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
    <Grow in>
      <Container
        className={classes.mainContainer}
        component="main"
        maxWidth="sm"
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary" }}>
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
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircleOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
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
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
            <div className={classes.buttonsContainer}>
              <Button
                className={classes.submitButton}
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <GoogleLogin />
            </div>
            <Grid
              className={classes.bottomText}
              container
              justifyContent="flex-end"
            ></Grid>
          </Box>
        </Box>
      </Container>
    </Grow>
  );
}
