import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "form",
  initialState: {
    posts: [],
    form: {},
    status: "idle",
    error: null,
  },
  reducers: {
    fillForm: (state, action) => {
      state.form.formData = action.payload;
    },
  },
});

export const { fillForm } = formSlice.actions;
export default formSlice.reducer;
