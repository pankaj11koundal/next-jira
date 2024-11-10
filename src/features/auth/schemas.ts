import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, "Required"),
});

export const registerSchema = z.object({
  name: z
    .string()
    .min(6, "Minimum 8 characters requried")
    .max(256, "Maximum characters limit reached"),
  email: z.string().email(),
  password: z.string().min(8, "Minimum 8 characters required"),
});
