import { Request, Response } from "express";
import { userRepository } from "../application/user.repository";
import { userService } from "../application/user.services";

class userController {
  private readonly service: userService;
  constructor() {
    const useRepo = new userRepository();
    this.service = new userService(useRepo);
    this.userLogin = this.userLogin.bind(this);
  }
  async userLogin(req: Request, res: Response) {
    try {
      return res.status(200).json({
        message: "user Created successfully",
        result: await this.service.resgisterUser(req.body),
      });
    } catch (error) {
      //   console.log(error);
      res.status(500).json({ message: "Internal Server Break", error });
    }
  }
}

export default new userController();
