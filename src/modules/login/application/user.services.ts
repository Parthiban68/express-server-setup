import type { IUserRepository } from "../infra/user.repository.interface";
import { CreateDto } from "../domain/create.dto";
import { NotFoundError, UnauthorizedError } from "@/core/errors/http.error";
import { LoginDto } from "../domain/login.dto";
import lib from "@/lib";

export class userService {
  constructor(
    private readonly repo: IUserRepository,
    private readonly jwt: typeof lib.jwtServiceInstance,
    private readonly mailService: typeof lib.mailServiceInstance
  ) {}
  async resgisterUser(dto: CreateDto) {
    const userExist = await this.repo.findEmail(dto.email);

    if (userExist.length > 0) {
      throw new NotFoundError("Email already exist");
    }

    await this.repo.Register(dto);

    this.mailService
      .sendMail({
        to: dto.email,
        subject: "Account create successfully",
        html: `<h1>Account create successfully</h1>`,
      })
      .catch(console.error);

    return;
  }

  async userLogin(dto: LoginDto) {
    const userDetails = await this.repo.findEmail(dto.email);

    if (!userDetails) throw new NotFoundError("provided email not found");

    if (userDetails[0].email !== dto.email)
      throw new UnauthorizedError("Invalid email or password");

    if (userDetails[0].password !== dto.password)
      throw new UnauthorizedError("Invalid email or password");

    const token = this.jwt.generateJwtToken({
      username: userDetails[0].username,
      email: userDetails[0].email,
    });

    return token;
  }
}
