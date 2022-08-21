import express from "express";

import { createUser, login, loginLocally, } from "../controllers/User.js";

const router = express.Router();

router.post("/register", createUser);
router.post("/login", login);
router.post("/login-with-localstorage", loginLocally);

export default router;