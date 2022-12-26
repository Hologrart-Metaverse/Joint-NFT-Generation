import mongoose from "mongoose";

const specialCanvasSchema = mongoose.Schema({
    canvasName: String,
    width: Number,
    height: Number,
    image: String,

    instantUserCount: {
        type: Number,
        default: 0
    },
    totalUserCount: {
        type: Number,
        default: 0
    },


    pixels: Array,

    createdAt: {
        type: Date,
        default: new Date()
    },
    deadline: {
        type: Date,
        default: new Date(+new Date() + 30 * 24 * 60 * 60 * 1000)
    }
});

const SpecialCanvas = mongoose.model("Special Canvases", specialCanvasSchema);

export default SpecialCanvas;