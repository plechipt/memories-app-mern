import jwt_decode from "jwt-decode";
import { createSlice } from "@reduxjs/toolkit";

import { register, login, googleLogin, logout } from "../actionCreators/users";

const initialState = {
  user: undefined,
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
    turnOnLoading: (state) => {
      state.isLoading = true;
    },
    checkUser: (state) => {
      const token = localStorage.token;

      if (token) {
        try {
          const decoded = jwt_decode(token);

          // JWT succesfully decoded
          // Logged in using google auth
          state.isAuthenticated = true;

          if (decoded.iss) {
            state.user = { id: decoded.sub, username: decoded.name };
          } else {
            state.user = decoded.user;
          }
        } catch (err) {
          // Delete token
          localStorage.removeItem("token");

          state.isAuthenticated = false;
          state.user = null;
        }
      } else {
        state.isAuthenticated = false;
        state.user = null;
      }
      state.isLoading = false;
    },
  },
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.user = action.payload;
    },
    [register.rejected]: (state, action) => {
      state.user = action.payload;
    },
    [login.fulfilled]: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    [login.rejected]: (state, action) => {
      state.user = action.payload;
    },
    [googleLogin.fulfilled]: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    [logout.fulfilled]: (state) => {
      state.isAuthenticated = false;
      state.user = undefined;
    },
  },
});

export const { resetUser, turnOnLoading, checkUser } = userSlice.actions;
export default userSlice.reducer;
