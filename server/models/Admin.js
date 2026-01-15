import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const adminSchema = new mongoose.Schema(
  {
    email: {type: String, required: true, unique: true, lowercase: true, trim: true,},
    password: {type: String, required: true, select: false,},
    role: {type: String, default: "admin",},
    isActive: {type: Boolean, default: true,},
  },
  { timestamps: true }
);

//  Compare password
adminSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const Admin = mongoose.model("Admin", adminSchema);
export default Admin;
