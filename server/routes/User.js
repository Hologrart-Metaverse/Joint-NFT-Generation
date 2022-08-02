import express from "express";

import { createUser, login, } from "../controllers/User";

const router = express.Router();

router.post("/register", createUser);
router.post("/login", login);