import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { List, CircularProgress, Grow } from "@material-ui/core";

import User from "./User";
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

  return isLoading ? (
    <CircularProgress color="primary" />
  ) : (
    <Grow in>
      <List className={classes.root}>
        {users.map(({ _id, avatarUrl, username }) => (
          <User key={_id} id={_id} avatarUrl={avatarUrl} username={username} />
        ))}
      </List>
    </Grow>
  );
};

export default Users;
