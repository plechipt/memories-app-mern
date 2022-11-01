import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Container,
  Grow,
  Grid,
  Paper,
  AppBar,
  TextField,
} from "@material-ui/core";
import ChipInput from "material-ui-chip-input";

import useStyles from "../Home/styles";

import Form from "../Form/Form";
import Posts from "../Posts/Posts";
import Paginator from "../Paginator/Paginator";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Home = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  const query = useQuery();
  const { isAuthenticated } = useSelector((state) => state.users);

  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);

  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");

  const handleOnKeyPress = (e) => {
    if (e.keyCode === 13) {
      // search post
    }
  };

  const handleAdd = (tag) => setTags([...tags, tag]);
  const handleDelete = (tagToDelete) =>
    setTags(tags.filter((tag) => tag !== tagToDelete));

  return (
    <Grow in>
      <Container maxWidth="xl">
        <Grid
          className={classes.gridContainer}
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid className={classes.postsContainer} item xs={12} sm={6} md={9}>
            <Posts />
          </Grid>
          <Grid className={classes.gridContainer} item xs={12} sm={6} md={3}>
            <AppBar
              className={classes.appBarSearch}
              position="static"
              color="inherit"
            >
              <TextField
                name="search"
                variant="outlined"
                label="Search Memories"
                fullWidth
                value={search}
                onKeyPress={handleOnKeyPress}
                onChange={(e) => setSearch(e.target.value)}
              />
              <ChipInput
                style={{ margin: "10px 0" }}
                value={tags}
                onAdd={handleAdd}
                onDelete={handleDelete}
                label="Search Tags"
                variant="outlined"
              />
            </AppBar>
            {isAuthenticated && <Form />}
            <Paper elevation={6}>
              <Paginator />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
