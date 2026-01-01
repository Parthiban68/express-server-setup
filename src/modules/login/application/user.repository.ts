import { LoginModel } from "../domain/login.model";
import { IUserRepository } from "../infra/user.repository.interface";
import { CreateDto } from "../domain/create.dto";

export class userRepository implements IUserRepository {
  constructor(private readonly loginModel = LoginModel) {}

  private async registerUserRepo(dto: CreateDto) {
    const userData = new this.loginModel({
      username: dto.username,
      email: dto.email,
      mobile_number: dto.mobile_number,
      password: dto.password,
      country: dto.country,
      state: dto.state,
      city: dto.city,
      pincode: dto.pincode,
    });
    await userData.save();
  }

  public Register(dto: CreateDto) {
    return this.registerUserRepo(dto);
  }

  private async findUserDetailsByMail(email: string) {
    return await this.loginModel.find({ email });
  }

  public findEmail(email: string) {
    return this.findUserDetailsByMail(email);
  }
}
