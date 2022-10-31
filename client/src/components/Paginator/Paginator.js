import React from "react";
import { Link } from "react-router-dom";
import { Pagination, PaginationItem } from "@material-ui/lab";

const Paginator = () => {
  return (
    <Pagination
      count={5}
      page={1}
      variant="outlined"
      color="primary"
      renderItem={(item) => (
        <PaginationItem {...item} component={Link} to={`/posts?page=${1}`} />
      )}
    />
  );
};

export default Paginator;
