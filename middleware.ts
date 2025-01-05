import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    try {
        const url = request.nextUrl.clone();

        // Check if the path is `/services` or `/blog`
        if (url.pathname.includes('service-pages')) {
            // Rewrite to the shared route
            url.pathname = url.pathname.replace('service-pages', 'services');
            return NextResponse.rewrite(url);
        }

        // Allow other paths to proceed without rewriting
        return NextResponse.next();
    } catch (error) {
        console.error('Error in middleware:', error);
        return new NextResponse('Page Not Found', { status: 404 });
    }
}
