import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    company: { type: String, required: true, trim: true },
    location: { type: String, required: true, trim: true },

    category: {
      type: String,
      enum: ["Technology", "Marketing", "Finance", "Healthcare", "Other"],
      default: "Other",
    },

    type: {
      type: String,
      enum: ["Full Time", "Part Time", "Internship", "Contract", "Remote"],
      default: "Full Time",
    },

    //  salary MUST be STRING (matches frontend)
    salary: {
      type: String,
      default: "Not specified",
    },

    description: { type: String, required: true },
    requirements: { type: String, required: true },

    featured: { type: Boolean, default: false },
    active: { type: Boolean, default: true },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Job", jobSchema);