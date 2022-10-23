import { createSlice } from "@reduxjs/toolkit";
import { register, login, checkUser } from "../actionCreators/users";

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
    turnOnLoading: (state) => {
      state.isLoading = true;
    },
    resetUser: () => initialState,
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
    [checkUser.pending]: (state) => {
      state.isLoading = true;
    },
    [checkUser.fulfilled]: (state, action) => {
      const { isAuthenticated, user } = action.payload;

      state.user = user;
      state.isAuthenticated = isAuthenticated;
      state.isLoading = false;
    },
  },
});

export const { resetUser, turnOnLoading } = userSlice.actions;
export default userSlice.reducer;
