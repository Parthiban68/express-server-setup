import { z } from "zod";
import { BaseDtoSchema } from "./base.dto";

export const CreateDtoSchema = BaseDtoSchema.extend({
  username: z.string().min(3).max(50).optional(),
  mobile_number: z.number().int().positive().optional(),
  country: z.string().optional(),
  state: z.string().optional(),
  city: z.string().optional(),
  pincode: z.number().int().optional(),
});

export type CreateDto = z.infer<typeof CreateDtoSchema>;
