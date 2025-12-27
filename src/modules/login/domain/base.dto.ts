import z from "zod";

export const BaseDtoSchema = z.object({
  mail: z.string().email(),
  password: z.string().min(8),
});

export type BaseDto = z.infer<typeof BaseDtoSchema>;
