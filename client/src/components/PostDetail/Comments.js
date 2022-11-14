import React, { useState } from "react";
import { Typography, TextField, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";

import useStyles from "./styles";

const Comments = ({ post }) => {
  const classes = useStyles();
  const [comments, setComments] = useState([1, 2, 3, 4, 5]);
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    console.log("test");
  };

  return (
    <div>
      <div className={classes.commentsOuterContainer}>
        <div className={classes.commentsInnerContainer}>
          <div style={{ width: "30%" }}>
            <Typography gutterBottom variant="h6">
              Write a Comment
            </Typography>
            <TextField
              className={classes.commentInput}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              fullWidth
              multiline
              minRows={4}
              variant="outlined"
              label="Comment..."
            />
            <Button
              onClick={handleSubmit}
              style={{ marginTop: "20px", width: "25%" }}
              fullWidth
              disabled={!comment}
              color="primary"
              variant="contained"
            >
              Comment
            </Button>
          </div>
          <div className={classes.commentsContainer}>
            {comments.map((comment, index) => (
              <Typography key={index} gutterBottom variant="subtitle1">
                Comment {index}
              </Typography>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
