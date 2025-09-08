import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();

  // Skip static and public paths
  const publicPaths = ["/login", "/signup", "/auth", "/favicon.ico", "/public"];
  const protectedPaths = ["/dashboard", "/profile", "/settings"];

  const res = NextResponse.next();

  // Wrap cookies for SSR client
  const cookies = {
    getAll: () => req.cookies.getAll().map(c => ({ name: c.name, value: c.value })),
    setAll: (cookiesArray: { name: string; value: string; path?: string; maxAge?: number; httpOnly?: boolean; secure?: boolean; sameSite?: "lax" | "strict" | "none"; domain?: string }[]) =>
      cookiesArray.forEach(c => res.cookies.set(c)),
  };

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { cookies }
  );

  // Use getUser() directly
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const pathname = req.nextUrl.pathname;

  // Redirect logged-in users away from auth pages
  if (user && publicPaths.some(path => pathname.startsWith(path))) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  // Redirect logged-out users away from protected pages
  if (!user && protectedPaths.some(path => pathname.startsWith(path))) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return res;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.png|.*\\.jpg|public).*)",
  ],
};
