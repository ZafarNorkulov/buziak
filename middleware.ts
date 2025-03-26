import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("access_token")?.value;
  const { pathname } = req.nextUrl;

  console.log("Token:", token);
  console.log("Pathname:", pathname);

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api/auth") ||
    pathname === "/favicon.ico"
  ) {
    return NextResponse.next();
  }

  if (!token && !pathname.startsWith("/auth")) {
    return NextResponse.redirect(new URL("/auth", req.url));
  }

  if (token && pathname.startsWith("/auth")) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|api/auth).*)"],
};
