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
import { register } from "../../redux/actionCreators/users";
import { resetUser } from "../../redux/slices/users";

export default function Register() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.users);

  // Data has been send back from server
  useEffect(() => {
    if (user) {
      const { statusCode, errorType } = user;

      if (statusCode === 400) {
        if (errorType === 1) {
          setUsernameAlreadyExists(true);
        }
      } else if (statusCode === 200) {
        dispatch(resetUser());

        clearForm();
        resetErrors();
        navigate("/login");
      }
    }
  }, [user]);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [passwordsDontMatch, setPasswordsDontMatch] = useState(false);
  const [usernameAlreadyExists, setUsernameAlreadyExists] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setPassword("");
      setConfirmPassword("");
      setPasswordsDontMatch(true);

      return;
    }

    setPasswordsDontMatch(false);
    dispatch(register({ username, password }));
  };

  const clearForm = () => {
    setUsername("");
    setPassword("");
    setConfirmPassword("");
  };

  const resetErrors = () => {
    setPasswordsDontMatch(false);
    setUsernameAlreadyExists(false);
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
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box onSubmit={handleSubmit} component="form" sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  error={usernameAlreadyExists}
                  helperText={usernameAlreadyExists ? user.message : null}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  fullWidth
                  label="Username"
                  name="username"
                  InputLabelProps={{ required: false }}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  fullWidth
                  label="Password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  InputLabelProps={{ required: false }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={passwordsDontMatch}
                  helperText={
                    passwordsDontMatch ? "Passwords don't match" : null
                  }
                  label="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  fullWidth
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  InputLabelProps={{ required: false }}
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

            <Button
              className={classes.submitButton}
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
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
