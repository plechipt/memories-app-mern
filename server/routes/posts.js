import express from "express";
import { getPosts, createPost } from "../controllers/posts.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/posts", getPosts);

export default router;
