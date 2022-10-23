import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "@material-ui/core";
import { Route, Routes } from "react-router-dom";

import Home from "./components/Home/Home";
import Login from "./components/Authentication/Login";
import Register from "./components/Authorization/Register";
import { checkUser } from "./redux/actionCreators/users";

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.users);

  return (
    <Container maxWidth="xl">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />
      </Routes>
    </Container>
  );
}

export default App;
