import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { Route, Routes, Navigate } from "react-router-dom";

import Home from "./components/Home/Home";

function App() {
  return (
    <Container maxWidth="xl">
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
    </Container>
  );
}

export default App;
