import React from "react";
import { Container } from "@material-ui/core";
import { Route, Routes } from "react-router-dom";

import Home from "./components/Home/Home";
import Login from "./components/Authentication/Login";
import Register from "./components/Authorization/Register";

function App() {
  return (
    <Container maxWidth="xl">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />
      </Routes>
    </Container>
  );
}

export default App;
