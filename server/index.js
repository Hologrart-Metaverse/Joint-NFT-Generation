import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import dotenv from "dotenv";
const env = dotenv.config();

import userRoutes from "./routes/User.js";
import canvasesRoutes from "./routes/Canvas.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
// app.use(cors({ origin: "http://localhost:3000" })); 
app.use(cors({ origin: "https://joint-nft-generation.vercel.app" })); 

const CONNECTION_URL = process.env.CONNECTION;
const PORT = process.env.PORT || 8080;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((err) => console.log(err));


app.use("/user", userRoutes);
app.use("/canvas", canvasesRoutes);