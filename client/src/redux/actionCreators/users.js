import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api";

export const getAllUsers = createAsyncThunk("users/getAllUsers", async () => {
  try {
    const { data } = await api.getAllUsers();

    return data;
  } catch (error) {
    console.log(error.message);
  }
});

export const getUser = createAsyncThunk("posts/getUser", async (id) => {
  try {
    const { data } = await api.getUser(id);

    console.log("test");

    return data;
  } catch (error) {
    console.log(error.message);
  }
});

export const register = createAsyncThunk(
  "users/register",
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await api.register(user);

      return data;
    } catch ({ response: { data } }) {
      return rejectWithValue(data);
    }
  }
);

export const login = createAsyncThunk(
  "users/login",
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await api.login(user);

      return data;
    } catch ({ response: { data } }) {
      return rejectWithValue(data);
    }
  }
);

export const googleLogin = createAsyncThunk(
  "users/googleLogin",
  async (data) => {
    const { token, picture } = data;

    localStorage.setItem("token", token);
    localStorage.setItem("profilePicture", picture);

    return data;
  }
);

export const logout = createAsyncThunk("users/logout", async () => {
  localStorage.removeItem("token");
  localStorage.removeItem("profilePicture");
});
