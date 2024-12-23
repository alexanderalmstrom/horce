import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { decrypt } from "./lib/session";

export async function middleware(request: NextRequest) {
  const loginRoute = ["/", "/login"];
  const protectedRoute = ["/dashboard"];
  const currentPath = request.nextUrl.pathname;
  const isProtectedRoute = protectedRoute.includes(currentPath);

  // Redirect to dashboard if user is logged in and tries to access home page or login page
  if (loginRoute.includes(currentPath)) {
    const cookie = (await cookies()).get("session")?.value;
    const session = await decrypt(cookie);

    if (session?.userId) {
      return NextResponse.redirect(new URL("/dashboard", request.nextUrl));
    }
  }

  // Redirect to login if user is not logged in and tries to access dashboard
  if (isProtectedRoute) {
    const cookie = (await cookies()).get("session")?.value;
    const session = await decrypt(cookie);

    if (!session?.userId) {
      return NextResponse.redirect(new URL("/login", request.nextUrl));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
