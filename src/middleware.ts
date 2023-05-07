import { User, createMiddlewareSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const LOGIN_PATH = '/';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SIGN_UP_PATH = '/signup';

const PUBLIC_PATHS = ['/', '/signup'];

const isPublicPage = (pathname: string) => PUBLIC_PATHS.includes(pathname);

const isEmployee = (user: User) => user?.user_metadata?.type === 'employee';
const isAdmin = (user: User) => user?.user_metadata?.type === 'admin';

export async function middleware(req: NextRequest) {
    const res = NextResponse.next();
    const supabase = createMiddlewareSupabaseClient({ req, res });

    const {
        data: { session },
    } = await supabase.auth.getSession();

    if (isPublicPage(req.nextUrl.pathname) && !session?.user) {
        return NextResponse.next();
    }

    if (session?.user) {
        const rootPath = req.nextUrl.pathname.split('/')[1];

        if (isEmployee(session.user)) {
            if (rootPath === 'employee') return res;
            return NextResponse.redirect(new URL('/employee', req.url));
        }
        if (isAdmin(session.user)) {
            if (rootPath === 'admin') return res;
            return NextResponse.redirect(new URL('/admin', req.url));
        }

        return NextResponse.redirect(new URL('/', req.url));
    }

    return NextResponse.redirect(new URL(LOGIN_PATH, req.url));
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};
