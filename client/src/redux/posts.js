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
    [updatePost.fulfilled]: (state, action) => {
      state.status = "succeeded";
      let index = state.posts.findIndex(
        (post) => post._id === action.payload._id
      );
      state.posts[index] = {
        ...state.posts[index],
        ...action.payload,
      };
    },
    [deletePost.fulfilled]: (state, action) => {
      state.status = "succeeded";

      let index = state.posts.findIndex(({ _id }) => _id === action.payload);
      console.log(index);
      state.posts.splice(index, 1);
    },
  },
});

//export const { fillForm } = postSlice.actions;
export default postSlice.reducer;
