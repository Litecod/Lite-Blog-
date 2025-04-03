import User from "../models/userModel.js";
import bcrypt from "bcryptjs"
import { errorHandler } from "../utils/error.js";

const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    return next(errorHandler(400, "All fields are required"))
  }

  //checking if userName exist
  const exists = await User.findOne({ username });
  const exist = await User.findOne({ email });
    if (exists || exist) {
      return next(errorHandler(400, "User already exists")) 
    }

  const hashedPassword = bcrypt.hashSync(password, 10)

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  })

  try {
    await newUser.save();
    res.json("Singup sucessful")
  } catch (error) {
    next(error)
  }
};

export { signup };
