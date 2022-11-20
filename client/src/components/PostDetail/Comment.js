import React from "react";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@material-ui/core";

const Comment = () => {
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src="" />
      </ListItemAvatar>
      <ListItemText
        primary="CrazyCat"
        secondary={" — I'll be in your neighborhood doing errands this…"}
      />
    </ListItem>
  );
};

export default Comment;
