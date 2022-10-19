import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./slices/posts";
import formReducer from "./slices/forms";
import userReducer from "./slices/users";

export default configureStore({
  reducer: {
    posts: postReducer,
    form: formReducer,
    users: userReducer,
  },
});
