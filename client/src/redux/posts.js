import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import * as api from "../api";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  try {
    const { data } = await api.fetchPosts();

    return data;
  } catch (error) {
    console.log(error.message);
  }
});

export const addPost = createAsyncThunk("posts/addPost", async (post) => {
  try {
    const { formData } = post;
    const { data } = await api.createPost(formData);

    return data;
  } catch (error) {
    console.log(error.message);
  }
});

export const updatePost = createAsyncThunk(
  "posts/updatePost",
  async ({ formData }) => {
    try {
      const { data } = await api.updatePost(formData);

      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const deletePost = createAsyncThunk("posts/deletePost", async (_id) => {
  try {
    await api.deletePost(_id);

    return _id;
  } catch (error) {
    console.log(error.message);
  }
});

export const likePost = createAsyncThunk(
  "posts/likePost",
  async (likedPost) => {
    try {
      const { data } = await api.likePost(likedPost);

      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
);

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
