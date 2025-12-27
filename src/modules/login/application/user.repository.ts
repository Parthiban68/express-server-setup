import { IUserRepository } from "../infra/user.repository.interface";

export class userRepository implements IUserRepository {
  async Register(dto: any) {
    return { id: 1, username: "Parthiban", email: "parthibanm1268@gmail.com" };
  }
}
