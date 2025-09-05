"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export async function signup(formData: FormData) {
  const supabase = await createClient();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const username = formData.get("username") as string;

  // 1. Sign up user
  const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
    email,
    password,
  });

  if (signUpError) {
    console.error("Signup error:", signUpError);
    redirect("/error"); // or return { error: signUpError.message }
  }

  // 2. Create profile row (if user was created)
  if (signUpData.user) {
    const { error: profileError } = await supabase.from("profiles").insert({
      id: signUpData.user.id,
      display_name: username,
      email,
    });

    if (profileError) {
      console.error("Profile creation error:", profileError);
      redirect("/error");
    }
  }

  revalidatePath("/", "layout");
  redirect("/");
}
