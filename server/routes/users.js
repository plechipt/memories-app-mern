import express from "express";
import { authMiddleware } from "../middleware/auth.js";
import {
  getAllUsers,
  registerUser,
  loginUser,
  getInfo,
} from "../controllers/users.js";

const router = express.Router();

router.get("/", getAllUsers);
router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/info", authMiddleware, getInfo);

export default router;
