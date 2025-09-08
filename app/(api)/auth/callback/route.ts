import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";
import { cookies as nextCookies } from "next/headers";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const redirectUrl = `${url.origin}/`; // absolute redirect URL

  const res = NextResponse.redirect(redirectUrl);

  // Wrap Next.js cookies to match Supabase recommended getAll/setAll interface
  const cookieStore = nextCookies();
  const supabaseCookies = {
    getAll: async () => (await cookieStore).getAll().map(c => ({ name: c.name, value: c.value })),
    setAll: (cookies: { name: string; value: string; path?: string; maxAge?: number; httpOnly?: boolean; secure?: boolean; sameSite?: "lax" | "strict" | "none"; domain?: string }[]) => {
      cookies.forEach(cookie => res.cookies.set(cookie));
    },
  };

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: supabaseCookies,
    }
  );

  const code = url.searchParams.get("code");

  if (code) {
    // Exchange the OAuth/magic-link code for a session
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (error) {
      console.error("Supabase exchange error:", error.message);
      return NextResponse.redirect(`${url.origin}/login?error=auth_failed`);
    }
  }

  // Get the logged-in user directly
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // You can now use `user` instead of session
  console.log("Authenticated user:", user?.email);

  return res;
}
