import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.AUTH_SECRET });
  const { pathname } = req.nextUrl;

  // Static files, API auth va favicon uchun middleware ishlamasin
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api/auth") ||
    pathname === "/favicon.ico"
  ) {
    return NextResponse.next();
  }

  // Token yo'q bo'lsa va /auth dan tashqaridagi sahifaga kirmoqchi bo'lsa -> /auth ga otkaz
  if (!token && !pathname.startsWith("/auth")) {
    return NextResponse.redirect(new URL("/auth", req.url));
  }

  // Token bor bo'lsa va /auth ichida yurmoqchi bo'lsa -> bosh sahifaga otkaz
  if (token && pathname.startsWith("/auth")) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Boshqa holatlarda user o'z joyida qolsin
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|api/auth).*)"],
};
