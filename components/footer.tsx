import Link from 'next/link';
import { Cpu } from 'lucide-react';
import { Logo } from './logo';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Logo and description */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="relative">
            <div className="flex items-center -ml-16 md:-ml-5 justify-start">
              <Logo light={true} />
            </div>

            <p className="text-sm md:text-base text-primary-foreground/80 max-w-xs absolute -mt-6">
              Transforming Marketing Strategies with AI-Powered Precision
            </p>
          </div>

          {/* Quick links sections */}
          <div className="grid grid-cols-2 gap-8 md:col-span-2 md:grid-cols-3">
            <div className="space-y-3">
              <h3 className="font-semibold text-base md:text-lg">Services</h3>
              <ul className="space-y-2 text-sm md:text-base">
                <li><Link href="/services/ppc" className="hover:text-primary-foreground/80">PPC</Link></li>
                <li><Link href="/services/seo" className="hover:text-primary-foreground/80">SEO</Link></li>
                <li><Link href="/services/analytics" className="hover:text-primary-foreground/80">Analytics</Link></li>
                <li><Link href="/services/social" className="hover:text-primary-foreground/80">Social Media</Link></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-base md:text-lg">Company</h3>
              <ul className="space-y-2 text-sm md:text-base">
                <li><Link href="/about" className="hover:text-primary-foreground/80">About Us</Link></li>
                <li><Link href="/careers" className="hover:text-primary-foreground/80">Careers</Link></li>
                <li><Link href="/blog" className="hover:text-primary-foreground/80">Blog</Link></li>
                <li><Link href="/contact" className="hover:text-primary-foreground/80">Contact</Link></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-base md:text-lg">Connect</h3>
              <ul className="space-y-2 text-sm md:text-base">
                <li><Link href="https://twitter.com" className="hover:text-primary-foreground/80">Twitter</Link></li>
                <li><Link href="https://linkedin.com" className="hover:text-primary-foreground/80">LinkedIn</Link></li>
                <li><Link href="https://facebook.com" className="hover:text-primary-foreground/80">Facebook</Link></li>
                <li><Link href="https://instagram.com" className="hover:text-primary-foreground/80">Instagram</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-sm text-primary-foreground/60">
            &copy; {new Date().getFullYear()} Adaptimize Digital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}