import { createSlice } from "@reduxjs/toolkit";
import {
  fetchPosts,
  addPost,
  updatePost,
  deletePost,
  likePost,
} from "../actionCreators/posts";

export const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    status: "idle",
    error: null,
  },
  extraReducers: {
    [fetchPosts.fulfilled]: (state, action) => {
      state.status = "succeeded";

      const newPosts = action.payload;
      state.posts = newPosts;
    },
    [addPost.fulfilled]: (state, action) => {
      state.status = "succeeded";

      const newPosts = [...state.posts, action.payload];
      state.posts = newPosts;
    },
    [updatePost.fulfilled]: (state, action) => {
      state.status = "succeeded";

      const newPosts = state.posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
      state.posts = newPosts;
    },
    [deletePost.fulfilled]: (state, action) => {
      state.status = "succeeded";

      const newPosts = state.posts.filter(
        (post) => post._id !== action.payload
      );
      state.posts = newPosts;
    },
    [likePost.fulfilled]: (state, action) => {
      state.status = "succeeded";

      const newPosts = state.posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
      state.posts = newPosts;
    },
  },
});

//export const { fillForm } = postSlice.actions;
export default postSlice.reducer;
