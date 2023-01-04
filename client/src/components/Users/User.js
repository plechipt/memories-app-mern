import React from "react";

import useStyles from "./styles";

import {
  ListItem,
  ListItemAvatar,
  Avatar,
  Typography,
} from "@material-ui/core";

const User = ({ avatarUrl, username }) => {
  const classes = useStyles();
  return (
    <ListItem className={classes.listItem}>
      <ListItemAvatar>
        <Avatar src={avatarUrl} />
      </ListItemAvatar>
      <Typography>{username}</Typography>
    </ListItem>
  );
};

export default User;
