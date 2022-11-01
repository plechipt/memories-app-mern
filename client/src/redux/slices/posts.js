import { createSlice } from "@reduxjs/toolkit";
import {
  fetchPosts,
  fetchPostsBySearch,
  addPost,
  updatePost,
  deletePost,
  likePost,
} from "../actionCreators/posts";

const initialState = {
  posts: [],
  status: "idle",
  error: null,
};

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    resetPosts: () => initialState,
  },
  extraReducers: {
    [fetchPosts.fulfilled]: (state, action) => {
      const newPosts = action.payload;
      state.posts = newPosts;
    },
    [fetchPostsBySearch.fulfilled]: (state, action) => {
      const newPosts = action.payload;
      state.posts = newPosts;
    },
    [addPost.fulfilled]: (state, action) => {
      const newPosts = [...state.posts, action.payload];
      state.posts = newPosts;
    },
    [updatePost.fulfilled]: (state, action) => {
      const newPosts = state.posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
      state.posts = newPosts;
    },
    [deletePost.fulfilled]: (state, action) => {
      const newPosts = state.posts.filter(
        (post) => post._id !== action.payload
      );
      state.posts = newPosts;
    },
    [likePost.fulfilled]: (state, action) => {
      const newPosts = state.posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
      state.posts = newPosts;
    },
  },
});

export const { resetPosts } = postSlice.actions;
export default postSlice.reducer;
