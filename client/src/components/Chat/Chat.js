import React, { useState } from "react";
import useStyles from "./styles";

import {
  List,
  ListItem,
  ListItemText,
  Paper,
  IconButton,
  InputBase,
  TextField,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

const Chat = () => {
  const classes = useStyles();
  const [message, setMessage] = React.useState("");

  return (
    <Paper className={classes.root}>
      <List>
        <ListItem className={classes.secondary}>
          <ListItemText primary={"text"} secondary={"Name"} />
        </ListItem>
        <ListItem className={classes.secondary}>
          <ListItemText primary={"text"} secondary={"Name"} />
        </ListItem>
        <ListItem className={classes.primary}>
          <ListItemText primary={"text"} secondary={"Me"} />
        </ListItem>
        <ListItem className={classes.primary}>
          <ListItemText primary={"text"} secondary={"Me"} />
        </ListItem>
      </List>
      <form className={classes.formContainer}>
        <TextField
          className={classes.input}
          variant="standard"
          placeholder="Message..."
        />
        <div className={classes.iconButton}>
          <IconButton aria-label="menu">
            <SendIcon />
          </IconButton>
        </div>
      </form>
    </Paper>
  );
};

export default Chat;
