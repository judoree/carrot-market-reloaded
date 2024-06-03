"use server";
import { z } from "zod";

const passwordRegex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*?[#?!@$%^&*-]).+$/);

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
      .max(40, "길어")
      .toLowerCase()
      .trim()
      .transform((username) => `🍬${username}`)
      .refine(checkUsername, "No"),
    email: z.string().email(),
    password: z
      .string()
      .min(4)
      .regex(passwordRegex, "A password must have lowercase , UPPERCASE , a number and special characters"),
    confirm_password: z.string().min(4),
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
  } else {
    console.log(result.data);
  }
}
