import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Pagination, PaginationItem } from "@material-ui/lab";

import { fetchPosts } from "../../redux/actionCreators/posts";

const Paginator = ({ page }) => {
  const dispatch = useDispatch();
  const { numberOfPages } = useSelector((state) => state.posts);

  useEffect(() => {
    if (page) {
      dispatch(fetchPosts(page));
    }
  }, []);

  return (
    <Pagination
      page={page}
      count={numberOfPages}
      variant="outlined"
      color="primary"
      renderItem={(item) => (
        <PaginationItem
          to={`/posts?page=${item.page}`}
          {...item}
          component={Link}
        />
      )}
    />
  );
};

export default Paginator;
