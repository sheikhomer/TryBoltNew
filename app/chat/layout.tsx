import '../globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ChatPanel } from '@/components/chat/chat-panel';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Adaptimize - Digital Marketing Agency',
  description: 'Leading digital marketing agency specializing in PPC, SEO, and digital transformation.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="relative w-full overflow-x-hidden">
            <div className="w-full">
              <Header />
              <main>{children}</main>
              <Footer />
            </div>
            <ChatPanel />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}