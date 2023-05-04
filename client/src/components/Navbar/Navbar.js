import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  AppBar,
  Typography,
  Toolbar,
  Avatar,
  Button,
  Box,
  CircularProgress,
} from "@material-ui/core";

import useStyles from "./styles";
import memoriesLogo from "../../images/memoriesLogo.png";
import memoriesText from "../../images/memoriesText.png";
import { logout } from "../../redux/actionCreators/users";

const Navbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, user, isLoading } = useSelector(
    (state) => state.users
  );

  const handleOnLogout = () => {
    dispatch(logout());
  };

  const profilePicture = localStorage.profilePicture;

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Box
        className={classes.brandContainer}
        onClick={() => navigate("/posts")}
      >
        <img src={memoriesText} alt="icon" height="45" />
        <img
          className={classes.image}
          src={memoriesLogo}
          alt="memories"
          height="40"
        />
      </Box>
      {isLoading === false ? (
        <Toolbar className={classes.toolbar}>
          {user !== null && user !== undefined && isAuthenticated ? (
            <div className={classes.profile}>
              {profilePicture ? (
                <Avatar
                  className={classes.purple}
                  alt={user.username}
                  src={profilePicture}
                  referrerPolicy="no-referrer"
                />
              ) : (
                <Avatar className={classes.purple} alt={user.username}>
                  {user.username.charAt(0)}
                </Avatar>
              )}
              <Typography className={classes.username} variant="h6">
                {user.username}
              </Typography>
              <Button
                onClick={handleOnLogout}
                variant="contained"
                className={classes.logout}
                color="primary"
              >
                Logout
              </Button>
            </div>
          ) : (
            <>
              <Button
                className={classes.authButton}
                component={Link}
                to="/login"
                variant="contained"
                color="primary"
                size="large"
              >
                Sign Up
              </Button>
              <Box mr={3} />
              <Button
                className={classes.authButton}
                component={Link}
                to="/register"
                variant="contained"
                color="primary"
                size="large"
              >
                Sign In
              </Button>
            </>
          )}
        </Toolbar>
      ) : (
        <CircularProgress color="primary" />
      )}
    </AppBar>
  );
};

export default Navbar;
