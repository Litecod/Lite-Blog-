import express from "express";

const router = express.Router();


router.get("/text", (req, res) => {
    res.send("Hello")
})


export default router;