import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/mongoose.config";
import apiRouter from "./modules/api.modules";
dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

connectDB();

app.use("/api/v1", apiRouter);

// app.use("/", (req, res) => {
//   try {
//     res.status(200).json({ message: "Test api in app file" });
//   } catch (error) {
//     console.error();
//   }
// });

export default app;
