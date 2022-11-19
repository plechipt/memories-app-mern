import React from "react";
import { useSelector } from "react-redux";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbUpAltOutlined from "@material-ui/icons/ThumbUpAltOutlined";

const Likes = ({ likes }) => {
  const { user } = useSelector((state) => state.users);

  if (likes.length > 0) {
    return (
      <>
        {user && likes.find((like) => like === user.id) ? (
          <ThumbUpAltIcon fontSize="small" />
        ) : (
          <ThumbUpAltOutlined fontSize="small" />
        )}
        &nbsp;{likes.length} {likes.length === 1 ? "Like" : "Likes"}
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
