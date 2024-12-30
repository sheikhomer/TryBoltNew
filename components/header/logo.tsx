"use client";

import Link from 'next/link';
import Image from 'next/image';

export function Logo() {
    return (
        <Link href="/" className="flex items-center justify-center pt-32">
            <Image
                src="/assets/logos/logo-dark.svg"
                alt="Adaptimize Logo"
                width={500}
                height={500}
                priority
                className="w-auto h-[320px]"
            />
        </Link>
    );
}