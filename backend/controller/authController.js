import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

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
    return next(errorHandler(404, "All fields are required"));
  }

  //checking if userName exist
  const exists = await User.findOne({ username });
  const exist = await User.findOne({ email });
  if (exists || exist) {
    return next(errorHandler(404, "User already exists"));
  }

  const hashedPassword = bcrypt.hashSync(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    res.json("Singup sucessful");
  } catch (error) {
    next(error);
  }
};

const signin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password || email === "" || password === "") {
    return next(errorHandler(404, "All fields are required"));
  }

  try {
    //checking if userName exist
    const vailidUser = await User.findOne({ email });
    if (!vailidUser) {
      return next(errorHandler(404, "User not found"));
    }

    const validPassword = bcrypt.compareSync(password, vailidUser.password);
    if (!validPassword) {
      return next(errorHandler(404, "Invalid Password"));
    }

    const token = jwt.sign({ id: vailidUser._id }, process.env.JWT_SECRET);
  
    const {password: pass, ...rest} = vailidUser._doc;

    res
      .status(200)
      .cookie("access_token", token, { httpOnly: true })
      .json(rest);
  } catch (error) {
    next(error);
  }
};

export { signup, signin };
