import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  TextField,
  Button,
  Typography,
  Paper,
  InputLabel,
} from "@material-ui/core";
import FileBase from "react-file-base64";

import { addPost, updatePost } from "../../redux/actionCreators/posts";
import useStyles from "./styles";

const MAX_WIDTH = 600;
const MAX_HEIGHT = 600;

const Form = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [showWarning, setShowWarning] = useState(false);

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

  const checkImage = (file) => {
    setShowWarning(false);

    const image = new Image();
    image.src = file.base64;

    image.onload = () => {
      const { height, width } = image;
      const imageIsTooLarge = height > MAX_HEIGHT || width > MAX_WIDTH;

      if (imageIsTooLarge) {
        setShowWarning(true);
      } else {
        setFormData({ ...formData, selectedFile: file.base64 });
      }
    };
  };

  return (
    <Paper className={classes.paper} elevation={6}>
      <form
        autoComplete="off"
        className={`${classes.root} ${classes.form}`}
        onSubmit={formIsInUpdateMode ? patchPost : createPost}
      >
        <Typography variant="h6">
          {formIsInUpdateMode ? "Updating" : "Creating"} a memory
        </Typography>
        <TextField
          required
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          InputLabelProps={{ required: false }}
        ></TextField>
        <TextField
          required
          name="text"
          variant="outlined"
          label="Text"
          fullWidth
          value={formData.text}
          multiline
          minRows={3}
          onChange={(e) => setFormData({ ...formData, text: e.target.value })}
          InputLabelProps={{ required: false }}
        ></TextField>
        <TextField
          required={true}
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={formData.tags}
          onChange={(e) =>
            setFormData({ ...formData, tags: e.target.value.split(",") })
          }
          InputLabelProps={{ required: false }}
        ></TextField>
        <div className={classes.fileInput}>
          <FileBase
            name="fileInput"
            className={classes.imageButton}
            multiple={false}
            onDone={checkImage}
            accept="image/*"
          />
        </div>
        {showWarning ? (
          <p style={{ color: "red" }}>
            Selected image is too large. Image should be below 600x600 pixels
          </p>
        ) : null}
        <Button
          className={classes.buttonSubmit}
          type="submit"
          variant="contained"
          color="primary"
          size="large"
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
