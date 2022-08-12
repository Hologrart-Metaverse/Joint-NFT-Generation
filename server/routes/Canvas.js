import express from "express";
import { changePixel, createCanvas, fetchCanvasPixels, getCanvases } from "../controllers/Canvas.js";


const router = express.Router();

router.get("/get", getCanvases);
router.post("/create", createCanvas);

router.post("/fetchCanvasPixels", fetchCanvasPixels);
router.post("/changeCanvas", changePixel);

export default router;