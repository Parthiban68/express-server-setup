import { Router } from "express";
import userControllers from "./user.controllers";
import { validate } from "@/common/common.modules";
import { CreateDtoSchema } from "../domain/create.dto";

const userRouter = Router();

userRouter.post(
  "/register",
  validate(CreateDtoSchema),
  userControllers.userLogin
);

export default userRouter;
