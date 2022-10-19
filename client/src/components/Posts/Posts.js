import React, { useEffect } from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../redux/actionCreators/posts";

import Post from "./Post/Post";
import useStyles from "./styles";

const Posts = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return !posts.length ? (
    <CircularProgress color="primary" />
  ) : (
    <Grid
      className={classes.mainContainer}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={7} lg={6} xl={5}>
          <Post post={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
