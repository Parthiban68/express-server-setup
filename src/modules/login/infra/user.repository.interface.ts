import { CreateDto } from "../domain/create.dto";
import { UpdateDto } from "../domain/update.dto";

export interface IUserRepository {
  Register(dto: CreateDto): any;
  findEmail(email: string): any;
  updateUser(dto: UpdateDto): Promise<void>;
}
