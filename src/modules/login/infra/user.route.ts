import { Router } from "express";
import userControllers from "./user.controllers";
import { validate } from "@/common";
import { CreateDtoSchema } from "../domain/create.dto";
import { LoginDtoSchema } from "../domain/login.dto";

const userRouter = Router();

userRouter.post(
  "/register",
  validate(CreateDtoSchema),
  userControllers.userRegister
);

userRouter.post("/login", validate(LoginDtoSchema), userControllers.userLogin);

export default userRouter;
