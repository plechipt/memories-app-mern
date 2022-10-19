import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "counter",
  initialState: {
    user: {},
    status: "idle",
    error: null,
  },
});

// Action creators are generated for each case reducer function
export default userSlice.reducer;
