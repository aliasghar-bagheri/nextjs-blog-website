import { NextRequest, NextResponse } from 'next/server';
import { Models } from 'node-appwrite';
import { getCurrentUser } from './services/user.service';
import { AUTH_PAGE_ROUTES, MAIN_PAGE_ROUTES } from './constants/routes';
import { UserRole } from './types';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const url = request.url;

  const auth: { user: Models.Document | null } = { user: null };

  try {
    const currentUser = await getCurrentUser();
    auth.user = currentUser;
  } catch (error) {
    // console.log(error);
    auth.user = null;
  }

  if (pathname.startsWith(MAIN_PAGE_ROUTES.DASHBOARD) && auth.user?.role === UserRole.USER) {
    return NextResponse.redirect(new URL(MAIN_PAGE_ROUTES.ACCOUNT, url));
  }

  if (pathname.startsWith(MAIN_PAGE_ROUTES.ACCOUNT) && auth.user?.role === UserRole.ADMIN) {
    return NextResponse.redirect(new URL(MAIN_PAGE_ROUTES.DASHBOARD, url));
  }

  if (
    (pathname.startsWith(MAIN_PAGE_ROUTES.DASHBOARD) ||
      pathname.startsWith(MAIN_PAGE_ROUTES.ACCOUNT)) &&
    !auth.user
  ) {
    return NextResponse.redirect(new URL(AUTH_PAGE_ROUTES.SIGN_IN, url));
  }

  if (
    (pathname.startsWith(AUTH_PAGE_ROUTES.SIGN_IN) ||
      pathname.startsWith(AUTH_PAGE_ROUTES.SIGN_UP) ||
      pathname.startsWith(AUTH_PAGE_ROUTES.FORGOT_PASSWORD)) &&
    auth.user
  ) {
    if (auth.user?.role === UserRole.USER) {
      return NextResponse.redirect(new URL(MAIN_PAGE_ROUTES.ACCOUNT, url));
    }
    if (auth.user?.role === UserRole.ADMIN) {
      return NextResponse.redirect(new URL(MAIN_PAGE_ROUTES.DASHBOARD, url));
    }
  }
}

export const config = {
  matcher: ['/auth/:path*', '/dashboard/:path*', '/account/:path*'],
};
