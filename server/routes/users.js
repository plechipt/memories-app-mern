import express from "express";
import {
  authMiddleware,
  registerUser,
  loginUser,
  getInfo,
} from "../controllers/users.js";

const router = express.Router();

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/info", authMiddleware, getInfo);

export default router;
