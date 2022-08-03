import mongoose from "mongoose";

const canvasesSchema = mongoose.Schema({
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

const Canvases = mongoose.model("Canvases", canvasesSchema);

export default Canvases;