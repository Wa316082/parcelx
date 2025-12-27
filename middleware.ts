// typescript
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

export function middleware(req: NextRequest) {
    const token = req.cookies.get('token')?.value;
    if (!token) return NextResponse.redirect(new URL('/login', req.url));

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET!) as Record<string, unknown>;
        const role = typeof payload['role'] === 'string' ? payload['role'] : undefined;
        const pathname = req.nextUrl.pathname;

        if (pathname.startsWith('/admin') && role !== 'admin') {
            return NextResponse.redirect(new URL('/unauthorized', req.url));
        }

        if (pathname.startsWith('/agent') && role !== 'agent') {
            return NextResponse.redirect(new URL('/unauthorized', req.url));
        }

        return NextResponse.next();
    } catch {
        return NextResponse.redirect(new URL('/login', req.url));
    }
}

export default middleware;

export const config = {
    matcher: ['/admin/:path*', '/agent/:path*', '/dashboard/:path*'],
};
