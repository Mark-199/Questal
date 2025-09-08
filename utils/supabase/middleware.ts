import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";

export async function updateSession(req: NextRequest) {
  // Prepare response
  const res = NextResponse.next();

  // Wrap cookies using getAll/setAll
  const cookieStore = req.cookies;
  const supabaseCookies = {
    getAll: () => cookieStore.getAll().map(c => ({ name: c.name, value: c.value })),
    setAll: (cookies: { name: string; value: string; path?: string; maxAge?: number; httpOnly?: boolean; secure?: boolean; sameSite?: "lax" | "strict" | "none"; domain?: string }[]) => {
      cookies.forEach(cookie => res.cookies.set(cookie));
    },
  };

  // Create SSR Supabase client
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { cookies: supabaseCookies }
  );

  // Use getUser() directly
  const { data: { user } } = await supabase.auth.getUser();

  // Optionally, refresh cookies if needed
  if (user) {
    supabase.auth.setSession({
      access_token: req.cookies.get("sb-access-token")?.value ?? "",
      refresh_token: ""
    });
  }

  return res;
}
