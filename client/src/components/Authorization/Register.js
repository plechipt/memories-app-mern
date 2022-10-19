import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import {
  CssBaseline,
  Container,
  Avatar,
  Button,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
} from "@material-ui/core";

import useStyles from "./styles";
import { register } from "../../redux/actionCreators/users";

export default function Register() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(register({ username, password }));
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
          Sign up
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
            <Grid item xs={12}>
              <TextField
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                fullWidth
                label="Confirm Password"
                name="password"
                type="password"
                autoComplete="new-password"
              />
            </Grid>
          </Grid>

          <Button
            className={classes.submitButton}
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid
            className={classes.bottomText}
            container
            justifyContent="flex-end"
          >
            <Grid item>
              <Link component="button" onClick={() => navigate("/login")}>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
