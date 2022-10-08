import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";

import useStyles from "./styles";
import { createPost } from "../../actions/posts";

const Form = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [creator, setCreator] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [tags, setTags] = useState("");
  const [selectedFile, setSelectedFile] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createPost({ creator, title, text, tags, selectedFile }));
  };
  const clear = () => {
    setCreator("");
    setTitle("");
    setText("");
    setTags("");
    setSelectedFile("");
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Creating a memory</Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={creator}
          onChange={(e) => setCreator(e.target.value)}
        ></TextField>
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></TextField>
        <TextField
          name="text"
          variant="outlined"
          label="Text"
          fullWidth
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></TextField>
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        ></TextField>

        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => setSelectedFile(base64)}
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          onClick={handleSubmit}
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;