import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.AUTH_SECRET });
  const { pathname } = req.nextUrl;

  console.log("TOKEN:", token);
  console.log("PATHNAME:", pathname);

  if (pathname === "/" && !token) {
    return NextResponse.redirect(new URL("/auth", req.url));
  }

  if (pathname.includes("/auth") && token) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/auth/:path*"],
};
