import Job from "../models/Jobs.js";

// ADMIN: create job
export const createJob = async (req, res) => {
  try {
    const {
      title,
      company,
      location,
      category,
      type,
      description,
      requirements,
      featured,
      active,
      salary,
    } = req.body;

    //  Validate required fields
    if (!title || !company || !location || !description || !requirements) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const job = await Job.create({
      title,
      company,
      location,
      category,
      type,
      description,
      requirements,
      featured,
      active,

      //  FIXED salary structure
      salary: 
            salary || "Not specified",

      createdBy: req.admin?._id,
    });

    res.status(201).json(job);
  } catch (error) {
    console.error("CREATE JOB ERROR:", error);
    res.status(400).json({ message: "Failed to create job" });
  }
};


// PUBLIC: get jobs
export const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find({ active: true }).sort({ createdAt: -1 });
    res.json(jobs);
  } catch (error) {
    res.status(400).json({ message: "Failed to fetch jobs" });
  }
};


// PUBLIC: get single job by id
export const getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.json(job);
  } catch (error) {
    res.status(400).json({ message: "Invalid job id" });
  }
};


// ADMIN: delete job
export const deleteJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndDelete(req.params.id);

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.json({ message: "Job deleted successfully" });
  } catch (error) {
    console.error("DELETE JOB ERROR:", error);
    res.status(500).json({ message: "Failed to delete job" });
  }
};

// ADMIN: update job
export const updateJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.json(job);
  } catch (error) {
    console.error("UPDATE JOB ERROR:", error);
    res.status(500).json({ message: "Failed to update job" });
  }
};
