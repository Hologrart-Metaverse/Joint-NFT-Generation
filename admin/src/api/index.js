import axios from "axios";

const createCanvasUrl = "https://joint-nft-api.herokuapp.com/canvas/create";

export const createCanvas = (newCanvas) => axios.post(createCanvasUrl, newCanvas);