import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api";

export const register = createAsyncThunk("users/register", async (user) => {
  try {
    const { data } = await api.register(user);

    console.log(data);

    return data;
  } catch (error) {
    console.log(error.message);
  }
});
