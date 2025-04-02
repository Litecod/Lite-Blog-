import express from "express"
const app = express();
import mongoose from "mongoose";
import dotenv from "dotenv"
import userRouter from "./routes/userRoute.js"

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Database Connected!"))
  .catch((err) => console.log(err));

const PORT = 4000;

app.get("/", (req, res) => {
  res.send("app is working");
});

app.use("/api/user", userRouter)

app.listen(PORT, () => {
  console.log("server is runing");
});
