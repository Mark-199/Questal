import { NextRequest, NextResponse } from "next/server";
import disposableDomains from "disposable-email-domains";

// Simple regex for email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json({ ok: false, message: "Email is required" }, { status: 400 });
  }

  if (!emailRegex.test(email)) {
    return NextResponse.json({ ok: false, message: "Invalid email format" }, { status: 400 });
  }

  // Extract domain from email
  const domain = email.split("@")[1].toLowerCase();

  // Check if the domain is disposable
  if (disposableDomains.includes(domain)) {
    return NextResponse.json({ ok: false, message: "Disposable emails are not allowed" }, { status: 400 });
  }

  // Email is valid and not disposable
  return NextResponse.json({ ok: true, message: "Email is valid" });
}
