import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

import useStyles from "../Home/styles";
import memories from "../../images/memories.png";

import Posts from "../Posts/Posts";
import Form from "../Form/Form";

const Home = () => {
  const classes = useStyles();

  return (
    <Grow in>
      <Container>
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h2" align="center">
            Memories
            <img
              className={classes.image}
              src={memories}
              alt="memories"
              height="60"
            />
          </Typography>
        </AppBar>
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
