import { Router } from "express";
import userControllers from "./user.controllers";
import common from "@/common";
import { CreateDtoSchema } from "../domain/create.dto";
import { LoginDtoSchema } from "../domain/login.dto";

const userRouter = Router();

userRouter.post(
  "/register",
  common.validate(CreateDtoSchema),
  userControllers.userRegister
);

userRouter.post("/login", common.validate(LoginDtoSchema), userControllers.userLogin);

export default userRouter;
