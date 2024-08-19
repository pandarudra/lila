import User from "../Models/user.model.js";
import { hash, hashcmp } from "../Utils/hash.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const secret = process.env.SECRET_KEY;
const signup = async (req, res) => {
  const { email, username, password } = req.body;
  try {
    const hashedPassword = await hash(password);
    const user = new User({ email, username, password: hashedPassword });
    await user.save();
    res.status(201).json({ user });
  } catch (error) {
    res.status(400).json({ error });
  }
};
const Login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (!userExists) {
      return res.status(400).json({ error: "User not found" });
    } else {
      if (await hashcmp(password, userExists.password)) {
        const token = jwt.sign(
          { id: userExists._id, email: userExists.email },
          secret,
          {
            expiresIn: "1h",
          }
        );
        res.status(200).json({ message: "Login successful", token });
      } else {
        res.status(400).json({ error: "Invalid credentials" });
      }
    }
  } catch (error) {
    console.log(error);
  }
};
const pic = async (req, res) => {
  const { pic } = req.body;
  try {
    const user = await User.findOne({ email: req.user.email });
    user.pic = pic;
    await user.save();
    res.status(200).json({ message: "Profile picture updated" });
  } catch (error) {
    res.status(400).json({ error });
  }
};
export { signup, Login };
