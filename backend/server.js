import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
import userRouter from "./routes/userRoute.js"
import authRoutes from "./routes/authRoutes.js"

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Database Connected!"))
  .catch((err) => console.log(err));

const PORT = 4000;
const app = express();


app.get("/", (req, res) => {
  res.send("Api is working");
});

app.use(express.json());

app.use("/api/user", userRouter)
app.use("/api/auth", authRoutes)

app.listen(PORT, () => {
  console.log("server is runing");
});

// middleware

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500
  const message = err.message || "Internal Server Error"
  res.status(statusCode).json({
    success: false,
    statusCode,
    message
  })
})
