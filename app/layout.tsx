import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import ArcadeCursor from '@/components/ArcadeCursor';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nitin Sharma | Professional Web Developer & Software Engineer',
  description: 'Hire Nitin Sharma - Expert freelance web developer specializing in React, Next.js, TypeScript and modern web technologies. Building high-performance websites and web applications.',
  keywords: ['Nitin Sharma', 'web developer', 'freelance developer', 'React developer', 'Next.js developer', 'full stack developer'],
  authors: [{ name: 'Nitin Sharma' }],
  creator: 'Nitin Sharma',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    title: 'Nitin Sharma | Professional Web Developer',
    description: 'Experienced Freelance Web Developer with expertise in React, Next.js, and modern JavaScript frameworks.',
    images: [{ url: '/portfolio_logo.webp' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nitin Sharma | Web Developer',
    description: 'Professional web development services by Nitin Sharma',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
          <ArcadeCursor />
        </ThemeProvider>
      </body>
    </html>
  );
}
