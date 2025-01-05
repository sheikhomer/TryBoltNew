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
              <h3 className="font-semibold text-base md:text-lg">Marketing Services</h3>
              <ul className="space-y-2 text-sm md:text-base">
                <li><Link href="/services/facebook-ads" className="hover:text-primary-foreground/80">Facebook Ads</Link></li>
                <li><Link href="/services/youtube-ads" className="hover:text-primary-foreground/80">YouTube Ads</Link></li>
                <li><Link href="/services/linkedin-ads" className="hover:text-primary-foreground/80">LinkedIn Ads</Link></li>
                <li><Link href="/services/google-search-ads" className="hover:text-primary-foreground/80">Google Search Ads</Link></li>
                <li><Link href="/services/tiktok-ads" className="hover:text-primary-foreground/80">TikTok Ads</Link></li>
                <li><Link href="/services/instagram-ads" className="hover:text-primary-foreground/80">Instagram Ads</Link></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-base md:text-lg">AI Solutions</h3>
              <ul className="space-y-2 text-sm md:text-base">
                <li><Link href="/services/data-insights" className="hover:text-primary-foreground/80">Data Insights</Link></li>
                <li><Link href="/services/ai-chatbot-integration" className="hover:text-primary-foreground/80">AI Chatbot Integration</Link></li>
                <li><Link href="/services/tailored-dynamic-content-model" className="hover:text-primary-foreground/80">Tailored Dynamic Content Model</Link></li>

              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-base md:text-lg">Tech Solutions</h3>
              <ul className="space-y-2 text-sm md:text-base">
                <li><Link href="/services/saas-integration" className="hover:text-primary-foreground/80">SaaS Integration</Link></li>
                <li><Link href="/services/content-management-system" className="hover:text-primary-foreground/80">Content Management System</Link></li>
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