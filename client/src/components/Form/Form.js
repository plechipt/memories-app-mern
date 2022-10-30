import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";

import { addPost, updatePost } from "../../redux/actionCreators/posts";
import useStyles from "./styles";

const Form = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { receivedFormData } = useSelector((state) => state.form.form);
  const [formIsInUpdateMode, setFormIsInUpdateMode] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    text: "",
    tags: "",
    selectedFile: "",
  });

  useEffect(() => {
    if (receivedFormData !== undefined) {
      fillForm();
      setFormIsInUpdateMode(true);
    }
  }, [receivedFormData]);

  const fillForm = () => {
    setFormData(receivedFormData);
  };

  const createPost = (e) => {
    e.preventDefault();

    dispatch(addPost({ formData }));
    clear();
  };

  const patchPost = (e) => {
    e.preventDefault();

    dispatch(updatePost({ formData }));
    clear();
  };

  const clear = () => {
    setFormIsInUpdateMode(false);
    setFormData({
      title: "",
      text: "",
      tags: "",
      selectedFile: "",
    });
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
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        ></TextField>
        <TextField
          name="text"
          variant="outlined"
          label="Text"
          fullWidth
          value={formData.text}
          onChange={(e) => setFormData({ ...formData, text: e.target.value })}
          multiline
          minRows={5}
        ></TextField>
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={formData.tags}
          onChange={(e) =>
            setFormData({ ...formData, tags: e.target.value.split(",") })
          }
        ></TextField>
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setFormData({ ...formData, selectedFile: base64 })
            }
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
