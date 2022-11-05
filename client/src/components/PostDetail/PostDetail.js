import React, { useEffect } from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  Paper,
  Typography,
  CircularProgress,
  Divider,
} from "@material-ui/core";

import useStyles from "./styles";
import { fetchPost } from "../../redux/actionCreators/posts";
import { turnOnLoading } from "../../redux/slices/posts";

const DEFAULT_IMAGE = process.env.REACT_APP_DEFAULT_IMAGE;

const PostDetail = () => {
  const classes = useStyles();

  const navigate = useNavigate();
  const { id } = useParams();

  const { post, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(turnOnLoading());
    dispatch(fetchPost(id));
  }, [id]);

  if (!post) return null;

  if (isLoading) {
    return (
      <Paper elevation={6} className={classes.loadingPaper}>
        <CircularProgress size="7em" />
      </Paper>
    );
  }

  return (
    <Paper className={classes.card}>
      <div className={classes.section}>
        <Typography variant="h3" component="h2">
          {post.title}
        </Typography>
        <Typography
          gutterBottom
          variant="h6"
          color="textSecondary"
          component="h2"
        >
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
        <Typography gutterBottom variant="body1" component="p">
          {post.text}
        </Typography>
        <Typography variant="h6">Created by: {post.creator}</Typography>
        <Typography variant="body1">
          {moment(post.createdAt).fromNow()}
        </Typography>
        <Divider style={{ margin: "20px 0" }} />
        <Typography variant="body1">
          <strong>Realtime Chat - coming soon!</strong>
        </Typography>
        <Divider style={{ margin: "20px 0" }} />
        <Typography variant="body1">
          <strong>Comments - coming soon!</strong>
        </Typography>
      </div>
      {post.selectedFile !== "" ? (
        <div className={classes.imageSection}>
          <img
            className={classes.media}
            src={post.selectedFile}
            alt={post.title}
          />
        </div>
      ) : null}
    </Paper>
  );
};

export default PostDetail;
