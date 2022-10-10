import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./posts";
import formReducer from "./forms";

export default configureStore({
  reducer: {
    posts: postReducer,
    form: formReducer,
  },
});
