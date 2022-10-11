import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";

import { addPost, updatePost } from "../../redux/posts";
import useStyles from "./styles";

const Form = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { formData } = useSelector((state) => state.form.form);
  const [formIsInUpdateMode, setFormIsInUpdateMode] = useState(false);

  const [currentId, setCurrentId] = useState(0);
  const [creator, setCreator] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [tags, setTags] = useState("");
  const [selectedFile, setSelectedFile] = useState("");

  useEffect(() => {
    if (formData !== undefined) {
      fillForm();
      setFormIsInUpdateMode(true);
    }
  }, [formData]);

  const fillForm = () => {
    const { _id, creator, title, text, tags, selectedFile } = formData;

    setCurrentId(_id);
    setCreator(creator);
    setTitle(title);
    setText(text);
    setTags(tags);
    setSelectedFile(selectedFile);
  };

  const createPost = (e) => {
    e.preventDefault();

    dispatch(addPost({ creator, title, text, tags, selectedFile }));
    clear();
  };

  const patchPost = (e) => {
    e.preventDefault();

    dispatch(
      updatePost({ currentId, creator, title, text, tags, selectedFile })
    );
    clear();
  };

  const clear = () => {
    setCreator("");
    setTitle("");
    setText("");
    setTags("");
    setSelectedFile("");

    setFormIsInUpdateMode(false);
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={formIsInUpdateMode ? patchPost : createPost}
      >
        <Typography variant="h6">
          {formIsInUpdateMode ? "Updating" : "Creating"} a memory
        </Typography>
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
          fullWidth
          type="submit"
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
