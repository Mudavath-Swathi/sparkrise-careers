import express from  "express";
import 'dotenv/config';
import cors from "cors";
import connectDB from "./configs/db.js";
import userRouter from "./routes/userRoutes.js";
import resumeRouter from "./routes/resumeRoutes.js";
import aiRouter from "./routes/aiRoutes.js";
import adminRouter from "./routes/adminRoutes.js";
import jobRouter from "./routes/jobRoutes.js";
import contactRoutes from "./routes/contactRoutes.js"

const app = express();
const PORT = process.env.PORT || 3000;

// connect database
await connectDB()

app.use(express.json())
app.use(cors())

app.get('/', (req,res)=> res.send('API is running...hello'));
app.use('/api/users', userRouter);
app.use('/api/resumes', resumeRouter)
app.use('/api/ai', aiRouter)
app.use("/api/admin", adminRouter);
app.use("/api/jobs", jobRouter);
app.use("/api/contact", contactRoutes)

app.listen(PORT, () =>{
     console.log(`Server is running on port ${PORT}`)
     
});
