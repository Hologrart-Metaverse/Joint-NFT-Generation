import axios from "axios";

const createCanvasUrl = "http://localhost:8080/canvas/create";

export const createCanvas = (newCanvas) => axios.post(createCanvasUrl, newCanvas);