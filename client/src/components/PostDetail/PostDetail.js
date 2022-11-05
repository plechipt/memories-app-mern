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

const PostDetail = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { id } = useParams();

  const { post } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPost(id));
  }, [id]);

  if (!post) return null;

  console.log(post);

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
          {post.message}
        </Typography>
        <Typography variant="h6">Created by: {post.name}</Typography>
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
    </Paper>
  );
};

export default PostDetail;
