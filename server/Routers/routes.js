import express from "express";
import { signup } from "../Controllers/user.controller.js";
const router = express.Router();

//GET
router.post("/signup", signup);
//POST

//PUT

//DELETE
export default router;
