'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import './globals.css'; // Make sure your global.css is imported 
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster'; 
import { useEffect } from 'react';
import { SmoothCursor } from "@/components/ui/smooth-cursor";

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const theme = localStorage.getItem("theme") || "light";
    document.body.classList.add(theme);
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Nitin Sharma | Freelance Web Developer" />
        <meta name="keywords" content="Nitin Sharma, Freelance Web Developer, React, Next.js, JavaScript" />
        <meta name="author" content="Nitin Sharma" />
        <link rel="icon" href="/Portfolio_logo.webp" />
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
          <SmoothCursor />
        </ThemeProvider>
      </body>
    </html>
  );
}
