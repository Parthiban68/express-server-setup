import { CreateDto } from "../domain/create.dto";

export interface IUserRepository {
  Register(dto: CreateDto): any;
  findEmail(email: string): any;
}
