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
app.use(cors()); 

const CONNECTION_URL = process.env.CONNECTION2;
const PORT = process.env.PORT || 8080;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((err) => console.log(err));


app.use("/user", userRoutes);
app.use("/canvas", canvasesRoutes);
