import React from "react";
import { useDispatch } from "react-redux";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import moment from "moment";

import useStyles from "./styles";
import { fillForm } from "../../../redux/forms";
import { deletePost, likePost } from "../../../redux/actionCreators";

const Post = ({ post }) => {
  const dispatch = useDispatch();
  const defaultImage = process.env.REACT_APP_DEFAULT_IMAGE;

  const handleOnUpdate = () => {
    dispatch(fillForm(post));
  };

  const handleOnDelete = () => {
    dispatch(deletePost(post._id));
  };

  const handleOnLike = () => {
    dispatch(likePost(post));
  };

  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={post.selectedFile ? post.selectedFile : defaultImage}
        title={post.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => {
            handleOnUpdate();
          }}
        >
          <MoreHorizIcon fontSize="medium" />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <Typography className={classes.title} variant="h5" gutterBottom>
        {post.title}
      </Typography>
      <CardContent>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          gutterBottom
        >
          {post.text}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={handleOnLike}>
          <ThumbUpAltIcon fontSize="small" />
          <Box mr={1}>Like</Box>
          {post.likeCount}
        </Button>
        <Button size="small" color="primary" onClick={handleOnDelete}>
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
