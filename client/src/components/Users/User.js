import React from "react";
import { useNavigate } from "react-router-dom";

import useStyles from "./styles";

import {
  ListItem,
  ListItemAvatar,
  Avatar,
  Typography,
} from "@material-ui/core";

const User = ({ id, avatarUrl, username }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <ListItem
      onClick={() => navigate(`/users/${id}`)}
      className={classes.listItem}
    >
      <ListItemAvatar>
        <Avatar src={avatarUrl} />
      </ListItemAvatar>
      <Typography>{username}</Typography>
    </ListItem>
  );
};

export default User;
