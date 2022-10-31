import React from "react";
import { useSelector } from "react-redux";
import { Container, Grow, Grid, Paper } from "@material-ui/core";

import useStyles from "../Home/styles";

import Form from "../Form/Form";
import Posts from "../Posts/Posts";
import Paginator from "../Paginator/Paginator";

const Home = () => {
  const { isAuthenticated } = useSelector((state) => state.users);
  const classes = useStyles();

  return (
    <Grow in>
      <Container>
        <Grow in>
          <Container>
            <Grid
              className={classes.mainContainer}
              container
              justifyContent="space-between"
              alignItems="stretch"
              spacing={3}
            >
              <Grid className={classes.postsContainer} item md={12} lg={7}>
                <Posts />
              </Grid>
              <Grid className={classes.gridContainer} item md={12} lg={4}>
                {isAuthenticated && <Form />}
                <Paper elevation={6}>
                  <Paginator />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </Grow>
  );
};

export default Home;
