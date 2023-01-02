import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  Typography,
  CircularProgress,
} from "@material-ui/core";

import useStyles from "./styles";
import { getAllUsers } from "../../redux/actionCreators/users";
import { turnOnLoading } from "../../redux/slices/users";

const Users = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { users, isLoading } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(turnOnLoading());
    dispatch(getAllUsers());
  }, []);

  console.log(isLoading);

  return isLoading ? (
    <CircularProgress color="primary" />
  ) : (
    <List className={classes.root}>
      {users.map((user) => (
        <ListItem className={classes.listItem} key={user._id}>
          <ListItemAvatar>
            <Avatar src={user.avatarUrl} />
          </ListItemAvatar>
          <Typography>{user.username}</Typography>
        </ListItem>
      ))}
    </List>
  );
};

export default Users;
