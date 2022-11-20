import React, { useState } from "react";
import { Typography, TextField, Button, List } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import useStyles from "./styles";
import { commentPost } from "../../redux/actionCreators/posts";
import Comment from "./Comment";

const Comments = ({ post }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState(post.comments);

  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector((state) => state.users);

  const handleSubmit = async () => {
    const postId = post._id;
    const userId = user.id;
    const text = comment;

    dispatch(commentPost({ postId, userId, text }));
  };

  return (
    <div>
      <div className={classes.commentsOuterContainer}>
        <div className={classes.commentsInnerContainer}>
          {isAuthenticated && (
            <div style={{ minWidth: "30%" }}>
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
          )}
          <div className={classes.commentsContainer}>
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            >
              <Comment />
              <Comment />
            </List>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
