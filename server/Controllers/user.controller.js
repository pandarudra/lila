import User from "../Models/user.model.js";

const signup = async (req, res) => {
  const { email, username, password } = req.body;
  try {
    const user = new User({ email, username, password });
    await user.save();
    res.status(201).json({ user });
  } catch (error) {
    res.status(400).json({ error });
  }
};

export { signup };
