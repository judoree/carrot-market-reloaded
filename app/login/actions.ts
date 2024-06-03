"use server";

export async function handlForm(prevState: any, formData: FormData) {
  console.log(prevState);
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return {
    errors: ["worng password", "password too short"],
  };
}
