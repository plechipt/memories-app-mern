import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "@material-ui/core";
import { Route, Routes, Navigate } from "react-router-dom";

import Home from "./components/Home/Home";
import Login from "./components/Authentication/Login";
import Register from "./components/Authorization/Register";
import Navbar from "./components//Navbar/Navbar";
import PostDetail from "./components/PostDetail/PostDetail";

import { turnOnLoading, checkUser } from "./redux/slices/users";

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(turnOnLoading());
    dispatch(checkUser());
  }, [isAuthenticated]);

  return (
    <Container maxWidth="xl">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Navigate to="/posts" />} />
        <Route exact path="/posts" element={<Home />} />
        <Route exact path="/posts/search" element={<Home />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route
          path="/login"
          exact
          element={() => (!user ? <Login /> : <Navigate to="/posts" />)}
        />
        <Route path="/register" exact element={<Register />} />
      </Routes>
    </Container>
  );
}

export default App;
