import express from "express";
import {
  adminLogin,
  getAllUsers,
  getAllJobs,
  createJob,
  updateJob,
  deleteJob,
} from "../controllers/adminController.js";

import protect from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/adminMiddleware.js";

const router = express.Router();

//  ADMIN LOGIN 
router.post("/login", adminLogin);

//  USERS 
router.get("/users", protect, adminMiddleware, getAllUsers);

//  JOBS 
router.get("/jobs", protect, adminMiddleware, getAllJobs);
router.post("/jobs", protect, adminMiddleware, createJob);
router.put("/jobs/:id", protect, adminMiddleware, updateJob);
router.delete("/jobs/:id", protect, adminMiddleware, deleteJob);

export default router;
