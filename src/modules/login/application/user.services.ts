import type { IUserRepository } from "../infra/user.repository.interface";
import { CreateDto } from "../domain/create.dto";

export class userService {
  constructor(private readonly repo: IUserRepository) {}
  async resgisterUser(dto: CreateDto) {
    const userExist = await this.repo.findEmail(dto.email);

    if (userExist.length > 0) {
      const err = new Error("user already exist");
      throw err;
    }

    return await this.repo.Register(dto);
  }
}
