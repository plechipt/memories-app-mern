import React, { useEffect } from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  Grow,
  Paper,
  Typography,
  CircularProgress,
  Divider,
} from "@material-ui/core";

import useStyles from "./styles";
import Comments from "./Comments";
import { turnOnLoading } from "../../redux/slices/posts";
import {
  fetchPost,
  fetchPostsBySearch,
} from "../../redux/actionCreators/posts";

const DEFAULT_IMAGE = process.env.REACT_APP_DEFAULT_IMAGE;

const PostDetail = () => {
  const classes = useStyles();

  const navigate = useNavigate();
  const { id } = useParams();

  const { post, posts, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(turnOnLoading());
    dispatch(fetchPost(id));
  }, [id]);

  useEffect(() => {
    dispatch(turnOnLoading());

    if (post) {
      dispatch(
        fetchPostsBySearch({ search: "none", tags: post.tags.join(",") })
      );
    }
  }, [post]);

  if (!post) return null;

  /*
  if (isLoading) {
    return <CircularProgress size="5em" />;
  }
  */

  const recommendedPosts = posts.filter(({ _id }) => _id !== post._id);

  const openPost = (_id) => {
    navigate(`/posts/${_id}`);
  };

  console.log(isLoading);

  return (
    <Grow in>
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
          <Typography variant="h6">
            by <b>{post.creator}</b>
          </Typography>
          <Typography variant="body1">
            {moment(post.createdAt).fromNow()}
          </Typography>
          <Divider style={{ margin: "20px 0" }} />
          {recommendedPosts.length && (
            <div className={classes.section}>
              <div className={classes.recommendedPosts}>
                {recommendedPosts.map(
                  ({ _id, title, text, creator, likes, selectedFile }) => (
                    <div
                      className={classes.cardContainer}
                      onClick={() => openPost(_id)}
                      key={_id}
                    >
                      <Typography variant="h6" gutterBottom>
                        {title}
                      </Typography>
                      <Typography variant="subtitle2" gutterBottom>
                        {creator}
                      </Typography>
                      <Typography variant="subtitle2" gutterBottom>
                        {text}
                      </Typography>
                      <Typography variant="h6" gutterBottom>
                        Likes: {likes.length}
                      </Typography>
                      <img
                        src={selectedFile || DEFAULT_IMAGE}
                        width="200"
                        alt="Recommended post"
                      />
                    </div>
                  )
                )}
              </div>
            </div>
          )}
          <Comments post={post} />
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
    </Grow>
  );
};

export default PostDetail;
