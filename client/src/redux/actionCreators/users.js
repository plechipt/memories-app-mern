import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api";

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

export const checkUser = createAsyncThunk("users/checkUser", async () => {
  try {
    console.log("now");
    const { data } = await api.checkUser();

    return data;
  } catch ({ response: { data } }) {}
});
