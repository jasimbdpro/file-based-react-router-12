// app/models/User.js
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    lowercase: true,
  },
  age: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Avoid re-compiling the model if it already exists in development
export const User = mongoose.models.User || mongoose.model("User", UserSchema);
