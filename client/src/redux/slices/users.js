import jwt_decode from "jwt-decode";
import { createSlice } from "@reduxjs/toolkit";

import { register, login } from "../actionCreators/users";

const initialState = {
  user: {},
  isLoading: false,
  isAuthenticated: false,
  status: "idle",
  error: null,
};

export const userSlice = createSlice({
  name: "counter",
  initialState: {
    ...initialState,
  },
  reducers: {
    resetUser: () => initialState,
    checkUser: (state) => {
      const token = localStorage.token;

      if (token) {
        try {
          const decoded = jwt_decode(token);

          // JWT succesfully decoded
          state.isAuthenticated = true;
          state.user = decoded.user;
        } catch (err) {
          state.isAuthenticated = false;
        }
      }

      state.isAuthenticated = false;
    },
  },
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.user = action.payload;
    },
    [register.rejected]: (state, action) => {
      state.status = "error";
      state.user = action.payload;
    },
    [login.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.isAuthenticated = true;

      state.isAuthenticated = true;
      state.user = action.payload;
    },
    [login.rejected]: (state, action) => {
      state.status = "error";
      state.user = action.payload;
    },
  },
});

export const { resetUser, turnOnLoading, checkUser } = userSlice.actions;
export default userSlice.reducer;
