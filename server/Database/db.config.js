import mongoose from "mongoose";
import { configDotenv } from "dotenv";
configDotenv();

const dbConnect = async () => {
  await mongoose.connect(process.env.MONGO_URI);
};
export default dbConnect;
