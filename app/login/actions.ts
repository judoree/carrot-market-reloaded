"use server";

export async function handleForm(prevState: any, formData: FormData) {
  return {
    errors: ["worng password", "password too short"],
  };
}
