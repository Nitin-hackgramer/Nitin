'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import ArcadeCursor from '@/components/ArcadeCursor';
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const theme = localStorage.getItem("theme") || "light";
    document.body.classList.add(theme);
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style>
          {`
          .light {
            cursor: url('/Icon.png') 2 2, auto;
          }
          .dark {
            cursor: url('/Icon2.png') 2 2, auto;
          }
          `}
        </style>
      </head>
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
