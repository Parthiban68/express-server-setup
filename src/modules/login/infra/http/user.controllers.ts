import { Request, Response, NextFunction } from "express";
import { userRepository } from "../../application/repositories/user.repository";
import { userService } from "../../application/service/user.services";
import lib from "@/lib";

class userController {
  private readonly service: userService;
  constructor() {
    const useRepo = new userRepository();
    this.service = new userService(
      useRepo,
      lib.jwtServiceInstance,
      lib.mailServiceInstance
    );
    this.userRegister = this.userRegister.bind(this);
    this.userLogin = this.userLogin.bind(this);
  }
  async userRegister(req: Request, res: Response, next: NextFunction) {
    try {
      return res.status(200).json({
        message: "user Created successfully",
        result: await this.service.registerUser(req.body),
      });
    } catch (error) {
      next(error);
    }
  }

  async userLogin(req: Request, res: Response, next: NextFunction) {
    try {
      return res.status(200).json({
        message: "Login successfull",
        result: await this.service.userLogin(req.body),
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new userController();
