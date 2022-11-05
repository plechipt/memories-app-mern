import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    const token = localStorage.getItem("token");
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

// Posts
export const fetchPosts = (page) => API.get(`/posts?page=${page}`);
export const createPost = (newPost) => API.post("/posts", newPost);
export const deletePost = (_id) => API.delete(`posts/${_id}`);
export const updatePost = (updatedPost) =>
  API.patch(`posts/${updatedPost._id}`, updatedPost);

export const likePost = (likedPost) =>
  API.patch(`posts/${likedPost._id}/likePost`, likedPost);

export const fetchPostsBySearch = (searchQuery) =>
  API.get(
    `/posts/search?searchQuery=${searchQuery.search || "none"}&tags=${
      searchQuery.tags
    }`
  );

// Users
export const register = (user) => API.post("/users", user);
export const login = (user) => API.post("/users/login", user);
export const checkUser = () => API.get("/users/checkUser");
