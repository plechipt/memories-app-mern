import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";
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
    const { data } = await api.createPost(post);

    return data;
  } catch (error) {
    console.log(error.message);
  }
});

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
      state.posts.push(...action.payload);
    },
    [addPost.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.posts.push(action.payload);
    },
  },
});

export default postSlice.reducer;
