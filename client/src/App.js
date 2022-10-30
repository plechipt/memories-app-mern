import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "@material-ui/core";
import { Route, Routes, Navigate } from "react-router-dom";

import Home from "./components/Home/Home";
import Login from "./components/Authentication/Login";
import Register from "./components/Authorization/Register";
import Navbar from "./components//Navbar/Navbar";
import AuthRoute from "./components/Auth/AuthRoute";

import { turnOnLoading, checkUser } from "./redux/slices/users";

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(turnOnLoading());
    dispatch(checkUser());
  }, [isAuthenticated]);

  return (
    <Container maxWidth="lg">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />
      </Routes>
    </Container>
  );
}

export default App;
