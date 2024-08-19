import express from "express";
import { Login, signup } from "../Controllers/user.controller.js";
const router = express.Router();

//GET
<<<<<<< HEAD
router.post("/signup", signup);

//POST
=======
>>>>>>> 2b160ade4dce858ea1d6e1cbe1168799feaa1090

//POST
router.post("/signup", signup); //signup
router.post("/login", Login); //login
//PUT
router.put("/pic", pic); //profile picture

//DELETE
export default router;
