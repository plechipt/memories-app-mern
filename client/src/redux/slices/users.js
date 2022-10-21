import { createSlice } from "@reduxjs/toolkit";
import { register } from "../actionCreators/users";

const initialState = {
  user: {},
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
  },
});

export const { resetUser } = userSlice.actions;
export default userSlice.reducer;
