import { Router } from "express";
import userRouter from "./login/infra/http/user.route";
const apiRouter = Router();

apiRouter.use("/user", userRouter);

export default apiRouter;

