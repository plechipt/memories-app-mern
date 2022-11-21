import React from "react";
import moment from "moment";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
} from "@material-ui/core";

import useStyles from "./styles";

const Comment = ({ text, userId, createdAt }) => {
  const classes = useStyles();
  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="" />
        </ListItemAvatar>
        <ListItemText
          primary={
            <React.Fragment className={classes.upperComment}>
              <strong>{userId.username}</strong>
              <Typography
                className={classes.postedDate}
                component="span"
                variant="body2"
                color="text.secondary"
              >
                {moment(createdAt).fromNow()}
              </Typography>
            </React.Fragment>
          }
          secondary={text}
        />
      </ListItem>
    </>
  );
};

export default Comment;
