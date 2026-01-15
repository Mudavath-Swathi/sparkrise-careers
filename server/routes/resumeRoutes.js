import express from 'express'
import protect from '../middleware/authMiddleware.js';
import { createResume, deleteResume, getMyResumes, getPublicResumeById, getResumeById, updateResume } from '../controllers/resumeController.js';//
import upload from '../configs/multer.js';

const resumeRouter = express.Router();

resumeRouter.post('/create', protect, createResume);
resumeRouter.put('/update', upload.single('image'), protect, updateResume);
resumeRouter.delete('/delete/:resumeId', protect, deleteResume);
resumeRouter.get('/get/:resumeId', protect, getResumeById);
resumeRouter.get('/public/:resumeId', getPublicResumeById);
resumeRouter.get('/my', protect, getMyResumes)


export default resumeRouter


