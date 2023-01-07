import React, { useEffect } from "react";
import useStyles from "./styles";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Button, Typography, Grow } from "@material-ui/core";

import { turnOnLoading } from "../../redux/slices/users";
import { getUser } from "../../redux/actionCreators/users";

const UserDetail = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { id } = useParams();

  const { userDetail } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(turnOnLoading());
    dispatch(getUser(id));
  }, [id]);

  if (!userDetail) return null;

  return (
    <Grow in>
      <div className={classes.userDetail}>
        <div className={classes.centerContainer}>
          <Avatar className={classes.userProfile} />
          <Typography variant="h5" className={classes.name}>
            {userDetail.username}
          </Typography>
        </div>
        <Button variant="contained" color="primary" className={classes.button}>
          Message
        </Button>
      </div>
    </Grow>
  );
};

export default UserDetail;
