import React from "react";
import { Container } from "@material-ui/core";
import { Route, Routes } from "react-router-dom";

import Home from "./components/Home/Home";
import Login from "./components/Authentication/Login";
import Register from "./components/Authorization/Register";
import ProtectedRoute from "./components/Auth/ProtectedRoute";

function App() {
  return (
    <Container maxWidth="xl">
      <Routes>
        <Route exact path="/" element={<ProtectedRoute />}>
          <Route exact path="/" element={<Home />} />
        </Route>
        <Route path="/login" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />
      </Routes>
    </Container>
  );
}

export default App;
