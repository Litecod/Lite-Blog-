import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, require: true, unique: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    profilePicture: {type: String, default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC-gxW7tUW_zWRnuZbcfV35ypZZvBoRbKZrA&s"}
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
