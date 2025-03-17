import express, { Router } from"express";
import { getProfile, register,logout,fetchLeaderboard } from "../controllers/userController.js";
import { login } from "../controllers/userController.js";
import { isAuthenticated } from "../middlewares/auth.js";
import { updateProfile } from "../controllers/userController.js";

const router = express.Router();

router.post("/register",register);
router.post("/login",login);
router.get("/me",isAuthenticated,getProfile);
router.put("/update-profile", isAuthenticated, updateProfile);
router.get("/logout", isAuthenticated, logout);
router.get("/leaderboard", fetchLeaderboard);

export default router;