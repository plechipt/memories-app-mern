import React from "react";
import { useSelector } from "react-redux";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbUpAltOutlined from "@material-ui/icons/ThumbUpAltOutlined";

//<Box mr={1}>Like</Box>

const Likes = ({ post }) => {
  const { user } = useSelector((state) => state.users);

  if (post.likes.length > 0) {
    return (
      <>
        {user && post.likes.find((like) => like === user.id) ? (
          <ThumbUpAltIcon fontSize="small" />
        ) : (
          <ThumbUpAltOutlined fontSize="small" />
        )}
        &nbsp;{post.likes.length} {post.likes.length === 1 ? "Like" : "Likes"}
      </>
    );
  }

  return (
    <>
      <ThumbUpAltOutlined fontSize="small" />
      &nbsp;Like
    </>
  );
};

export default Likes;
