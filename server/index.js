import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";
import dbConnect from "./Database/db.config.js";
import router from "./Routers/routes.js";
const app = express();
configDotenv();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);
dbConnect().then(() => {
  app.listen(process.env.PORT, () => {
    console.log("Database connected");
    console.log("Server running on port", process.env.PORT);
  });
});
