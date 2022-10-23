import { createSlice } from "@reduxjs/toolkit";
import { register, login, checkUser } from "../actionCreators/users";

const initialState = {
  user: {},
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
    [checkUser.fulfilled]: (state, action) => {
      console.log("test");
    },
  },
});

export const { resetUser } = userSlice.actions;
export default userSlice.reducer;
