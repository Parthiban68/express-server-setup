import { LoginModel } from "../domain/login.model";
import { IUserRepository } from "../infra/user.repository.interface";
import { CreateDto } from "../domain/create.dto";

export class userRepository implements IUserRepository {
  constructor(private readonly loginModel = LoginModel) {}
  async Register(dto: CreateDto) {
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

  async findEmail(email: string) {
    return await this.loginModel.find({ email });
  }
}
