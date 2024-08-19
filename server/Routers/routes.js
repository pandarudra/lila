import express from "express";
import { Login, signup } from "../Controllers/user.controller.js";
const router = express.Router();

//GET

//POST
router.post("/signup", signup); //signup
router.post("/login", Login); //login
//PUT
router.put("/pic", pic); //profile picture

//DELETE
export default router;
