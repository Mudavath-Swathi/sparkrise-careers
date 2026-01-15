import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    username: {type: String,required: true,trim: true,},
    email: {type: String,required: true,unique: true,lowercase: true,trim: true},
    password: {type: String,required: true,select: false,}, // 🔐 important
    role: {type: String,enum: ["admin", "user"],default: "user",},
    recentlyAppliedJobs: [{type: mongoose.Schema.Types.ObjectId,ref: "Job",},],
  },{ timestamps: true });

// Compare entered password with hashed password
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
}; 

const User = mongoose.model("User", userSchema);

export default User;
