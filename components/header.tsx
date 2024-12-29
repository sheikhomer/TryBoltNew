"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Cpu } from 'lucide-react';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 z-50 border-b">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative">
            <Cpu className="h-8 w-8 text-primary animate-pulse" />
            <div className="absolute -inset-0.5 bg-primary/20 blur-sm rounded-full animate-pulse" />
          </div>
          <span className="font-bold text-xl">Optimizer</span>
        </Link>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 w-[400px]">
                  <Link href="/services/ppc" className="block p-3 hover:bg-muted rounded-lg">
                    <h3 className="font-medium">PPC</h3>
                    <p className="text-sm text-muted-foreground">Paid search and social advertising</p>
                  </Link>
                  <Link href="/services/seo" className="block p-3 hover:bg-muted rounded-lg">
                    <h3 className="font-medium">SEO</h3>
                    <p className="text-sm text-muted-foreground">Search engine optimization</p>
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className="px-4 py-2">About</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/case-studies" legacyBehavior passHref>
                <NavigationMenuLink className="px-4 py-2">Case Studies</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden md:flex">
          <Button>Contact Us</Button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              <Link href="/services" className="text-lg font-medium">Services</Link>
              <Link href="/about" className="text-lg font-medium">About</Link>
              <Link href="/case-studies" className="text-lg font-medium">Case Studies</Link>
              <Button className="w-full">Contact Us</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}