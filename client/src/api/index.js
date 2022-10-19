import axios from "axios";

const URL = "http://localhost:5000/posts";

// Posts
export const fetchPosts = () => axios.get(URL);
export const createPost = (newPost) => axios.post(URL, newPost);
export const deletePost = (_id) => axios.delete(`${URL}/${_id}`);
export const updatePost = (updatedPost) =>
  axios.patch(`${URL}/${updatedPost._id}`, updatedPost);
export const likePost = (likedPost) =>
  axios.patch(`${URL}/${likedPost._id}/likePost`, likedPost);

const URL2 = "http://localhost:5000/users";
// Users
// Users
export const register = (data) => axios.post(`${URL2}`, data);
export const login = () => axios.post(`${URL2}/info`);
