import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Pagination, PaginationItem } from "@material-ui/lab";

import { fetchPosts } from "../../redux/actionCreators/posts";
import { turnOnLoading } from "../../redux/slices/posts";

const Paginator = ({ page }) => {
  const dispatch = useDispatch();
  const { numberOfPages } = useSelector((state) => state.posts);

  useEffect(() => {
    if (page) {
      dispatch(turnOnLoading());
      dispatch(fetchPosts(page));
    }
  }, [page]);

  return (
    <Pagination
      page={Number(page) || 1}
      count={numberOfPages}
      variant="outlined"
      color="primary"
      renderItem={(item) => (
        <PaginationItem
          {...item}
          component={Link}
          to={`/posts?page=${item.page}`}
        />
      )}
    />
  );
};

export default Paginator;
