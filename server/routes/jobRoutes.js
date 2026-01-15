import express from "express";
import { createJob, getJobs, getJobById, deleteJob, updateJob} from "../controllers/jobController.js";
import adminMiddleware from "../middleware/adminMiddleware.js";

const router = express.Router();

// PUBLIC 
router.get("/", getJobs);
router.get("/:id", getJobById);

// ADMIN 
router.post("/",adminMiddleware, createJob);
router.delete("/:id", deleteJob);
router.put("/:id", updateJob)

export default router;
