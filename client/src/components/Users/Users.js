import React from "react";
import useStyles from "./styles";

import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  Typography,
} from "@material-ui/core";

const users = [
  {
    name: "Jane Doe",
    avatarUrl: "https://example.com/jane-doe.jpg",
  },
  {
    name: "John Doe",
    avatarUrl: "https://example.com/john-doe.jpg",
  },
];

const Users = () => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {users.map((user) => (
        <ListItem key={user.name}>
          <ListItemAvatar>
            <Avatar src={user.avatarUrl} />
          </ListItemAvatar>
          <Typography>{user.name}</Typography>
        </ListItem>
      ))}
    </List>
  );
};

export default Users;
