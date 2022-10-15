import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { Route, Routes, Navigate } from "react-router-dom";

import Home from "./components/Home/Home";
import Register from "./components/Authentication/Register";

function App() {
  return (
    <Container maxWidth="xl">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/register" exact element={<Register />} />
      </Routes>
    </Container>
  );
}

export default App;
