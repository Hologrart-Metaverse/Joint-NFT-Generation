import express from "express";
import { changePixel, createCanvas, fetchCanvasPixels, getCanvases, refreshCanvas } from "../controllers/Canvas.js";


const router = express.Router();

router.get("/get", getCanvases);
router.post("/create", createCanvas);

router.post("/fetchCanvasPixels", fetchCanvasPixels);
router.patch("/changeCanvas", changePixel);
router.post("/refresh", refreshCanvas);

export default router;