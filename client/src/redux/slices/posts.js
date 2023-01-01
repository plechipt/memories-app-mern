import { createSlice } from "@reduxjs/toolkit";
import {
  fetchPosts,
  fetchPost,
  fetchPostsBySearch,
  addPost,
  updatePost,
  deletePost,
  likePost,
  commentPost,
} from "../actionCreators/posts";

const initialState = {
  posts: [],
  post: undefined,
  currentPage: 1,
  numberOfPages: 1,
  status: "idle",
  isLoading: false,
  error: null,
};

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    resetPosts: () => initialState,
    turnOnLoading: (state) => {
      state.isLoading = true;
    },
  },
  extraReducers: {
    [fetchPosts.fulfilled]: (state, action) => {
      const { posts, currentPage, numberOfPages } = action.payload;

      state.posts = posts;
      state.currentPage = currentPage;
      state.numberOfPages = numberOfPages;
      state.isLoading = false;
    },
    [fetchPost.fulfilled]: (state, action) => {
      const post = action.payload;

      state.post = post;
      state.isLoading = false;
    },
    [fetchPostsBySearch.fulfilled]: (state, action) => {
      const newPosts = action.payload;

      state.posts = newPosts;
      state.isLoading = false;
    },
    [addPost.fulfilled]: (state, action) => {
      const newPosts = [action.payload, ...state.posts];
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

export const { resetPosts, turnOnLoading } = postSlice.actions;
export default postSlice.reducer;
