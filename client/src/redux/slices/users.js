import { createSlice } from "@reduxjs/toolkit";
import { register } from "../actionCreators/users";

export const userSlice = createSlice({
  name: "counter",
  initialState: {
    user: {},
    status: "idle",
    error: null,
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

// Action creators are generated for each case reducer function
export default userSlice.reducer;
