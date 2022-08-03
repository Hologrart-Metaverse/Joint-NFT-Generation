import express from "express";
import { createCanvas, getCanvases } from "../controllers/Canvas.js";


const router = express.Router();

router.get("/get", getCanvases);
router.post("/create", createCanvas);

export default router;