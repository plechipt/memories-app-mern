import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Typography,
  Toolbar,
  Avatar,
  Button,
  Box,
} from "@material-ui/core";

import useStyles from "./styles";
import memories from "../../images/memories.png";

const Navbar = () => {
  const classes = useStyles();
  const user = null;

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography
          component={Link}
          to="/"
          className={classes.heading}
          variant="h2"
          align="center"
        >
          Memories
          <img
            className={classes.image}
            src={memories}
            alt="memories"
            height="60"
          />
        </Typography>
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user.result.name}
              src={user.result.imageUrl}
            >
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography classes={classes.username} variant="h6">
              {user.result.name}
            </Typography>
            <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
            >
              Logout
            </Button>
          </div>
        ) : (
          <>
            <Button
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
    </AppBar>
  );
};

export default Navbar;
