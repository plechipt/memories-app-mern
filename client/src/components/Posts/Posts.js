import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import Post from "./Post/Post";
import useStyles from "./styles";

const Posts = () => {
  const classes = useStyles();
  const { posts } = useSelector((state) => state.posts);

  return !posts.length && posts.length !== 0 ? (
    <CircularProgress color="primary" />
  ) : (
    <Grid
      className={classes.mainContainer}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={12} md={6} lg={3}>
          <Post post={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
