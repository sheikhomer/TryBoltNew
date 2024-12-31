"use client";

import Link from 'next/link';
import Image from 'next/image';

export function Logo() {
    return (
        <Link href="/" className="flex items-center md:-ml-10 -mt-4">
            <Image
                src="/assets/logos/logo-dark.svg"
                alt="Adaptimize Logo"
                width={200}
                height={200}
                priority
                className="w-auto h-[90px]"
            />
        </Link>
    );
}