import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Response, Request } from "express";
import apiRouter from "./modules/api.modules";
dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/v1", apiRouter)

app.use("/", (req: Request, res: Response) => {
  try {
    res.status(200).json({ message: "Test api in app file" });
  } catch (error) {
    console.error();
  }
});

export default app;
