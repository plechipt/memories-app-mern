import React from "react";
import useStyles from "./styles";
import { Avatar, Button, Typography } from "@material-ui/core";

const UserDetail = () => {
  const classes = useStyles();
  return (
    <div className={classes.userDetail}>
      <div className={classes.centerContainer}>
        <Avatar className={classes.userProfile} />
        <Typography variant="h5" className={classes.name}>
          sss
        </Typography>
      </div>
      <Button variant="contained" color="primary" className={classes.button}>
        Message
      </Button>
    </div>
  );
};

export default UserDetail;
