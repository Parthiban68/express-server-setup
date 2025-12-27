import type { IUserRepository } from "../infra/user.repository.interface";

export class userService {
  constructor(private readonly repo: IUserRepository) {}
  async resgisterUser(dto: any) {
    return await this.repo.Register(dto);
  }
}
