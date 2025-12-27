import { Router } from "express";
import userControllers from "./user.controllers";
import { validate } from "@/common/common.modules";
import { CreateDtoSchema } from "../domain/create.dto";

const userRouter = Router();

userRouter.get(
  "/testurl",
  validate(CreateDtoSchema),
  userControllers.userLogin
);

export default userRouter;
