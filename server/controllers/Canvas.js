import Canvases from "../models/Canvases.js";

export const createCanvas = async (req, res) => {
    const canvas = req.body;

    const newCanvas = new Canvases(canvas);
    
    try {
        await newCanvas.save();
        res.status(201).json(newCanvas);
    } catch (error) {
        res.status(409).json({ message: error.message});
    }
}


export const getCanvases = async (req, res) => {
    try {
        const canvases = await Canvases.find();
        res.status(200).json(canvases.reverse());
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
}
