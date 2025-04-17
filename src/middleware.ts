import { NextResponse, type NextRequest } from 'next/server';

import { checkTokenValidity } from './middleware/helpers';
import { guestOnlyRoutes } from './middleware/routes';

export async function middleware(req: NextRequest) {
  const token = req.cookies.get('authToken')?.value;

  const isTokenValid = !!token && (await checkTokenValidity(token));
  const isGuestOnlyPath = guestOnlyRoutes.some(path => req.nextUrl.pathname.startsWith(path));

  if (isGuestOnlyPath && isTokenValid) return NextResponse.redirect(new URL('/', req.url));

  const isGuestAccessingProtectedRoute = !isGuestOnlyPath && !isTokenValid;
  if (isGuestAccessingProtectedRoute) {
    const fromPath = encodeURI(req.nextUrl.pathname);
    if (!!fromPath) {
      req.nextUrl.searchParams.set('from', fromPath);
      req.nextUrl.pathname = '/login';
    }

    return NextResponse.redirect(req.nextUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
