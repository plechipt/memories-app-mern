import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Container, Grow, Grid } from "@material-ui/core";

import useStyles from "../Home/styles";

import Form from "../Form/Form";
import Posts from "../Posts/Posts";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  const classes = useStyles();

  return (
    <Grow in>
      <Container>
        <Navbar />
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
                <Form />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </Grow>
  );
};

export default Home;
