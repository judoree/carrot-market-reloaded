"use server";
import { z } from "zod";

function checkUsername(username: string) {
  return !username.includes("potato");
}

const checkPasswords = ({ password, confirm_password }: { password: string; confirm_password: string }) =>
  password === confirm_password;

const formSchema = z
  .object({
    username: z
      .string({
        invalid_type_error: "Username Must be a string",
        required_error: "Where is my username???",
      })
      .min(3, "짧아")
      .max(10, "길어")
      .refine(checkUsername, "No potato allowed"),
    email: z.string().email(),
    password: z
      .string()
      .min(10, "비밀번호 가 너무 짧습니다 다시 설정 해주세요")
      .max(15, "비밀번호 가 너무 길어요 다시 설정 해주세요"),
    confirm_password: z.string().min(10),
  })
  .refine(checkPasswords, { message: "Both passwords should be the same!", path: ["confirm_password"] });

export async function createAccount(prevState: any, formData: FormData) {
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirm_password: formData.get("confirm_password"),
  };
  const result = formSchema.safeParse(data);
  if (!result.success) {
    return result.error.flatten();
  }
}
