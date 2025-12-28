import type { IUserRepository } from "../infra/user.repository.interface";
import { CreateDto } from "../domain/create.dto";
import { NotFoundError } from "@/core/errors/http.error";

export class userService {
  constructor(private readonly repo: IUserRepository) {}
  async resgisterUser(dto: CreateDto) {
    const userExist = await this.repo.findEmail(dto.email);

    if (userExist.length > 0) {
      throw new NotFoundError("Email already exist");
    }

    return await this.repo.Register(dto);
  }
}
