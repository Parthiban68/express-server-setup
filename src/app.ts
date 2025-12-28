import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "@/config/mongoose.config";
import apiRouter from "./modules/api.modules";
import { productionConsoleConfig } from "./core";
import { globalErrorHandler } from "./common";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

db.connect();

productionConsoleConfig();

app.use("/api/v1", apiRouter);

// app.use("/", (req, res) => {
//   try {
//     res.status(200).json({ message: "Test api in app file" });
//   } catch (error) {
//     console.error();
//   }
// });

app.use(globalErrorHandler.handler);

export default app;
