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




export const fetchCanvasPixels = async (req, res) => {
    try {
        const canvasPixels = await Canvases.findOne({_id: req.body.id});
        res.status(200).json(canvasPixels.pixels);
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
}


export const changePixel = async (req, res) => {
    const { canvas_id, rowNumber, columnNumber, newColor, whose } = req.body;
    try {

        var deleteMe = await Canvases.findOne({_id: canvas_id});
        deleteMe.pixels[rowNumber][columnNumber].color = newColor;
        deleteMe.pixels[rowNumber][columnNumber].who = whose;

        await Canvases.updateOne({_id: canvas_id}, {$set: { pixels: deleteMe.pixels }});

        res.status(200).json({color: newColor});
      
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
}


export const refreshCanvas = async (req, res) => {
    try {
        const canvasPixels = await Canvases.findOne({_id: req.body.id});
        res.status(200).json(canvasPixels.pixels);
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
}