import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "@material-ui/core";
import { Route, Routes, Navigate } from "react-router-dom";

import Home from "./components/Home/Home";
import Login from "./components/Authentication/Login";
import Register from "./components/Authorization/Register";
import Navbar from "./components//Navbar/Navbar";
import PostDetail from "./components/PostDetail/PostDetail";
import Users from "./components/Users/Users";
import UserDetail from "./components/UserDetail/UserDetail";
import Chat from "./components/Chat/Chat";

import { turnOnUserLoading, checkUser } from "./redux/slices/users";

const App = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(turnOnUserLoading());
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
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetail />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />
      </Routes>
    </Container>
  );
};

export default App;
