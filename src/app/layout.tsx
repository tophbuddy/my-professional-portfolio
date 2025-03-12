import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme/ThemeProvider';
import { NavigationProvider } from '@/components/navigation/NavigationContext';
import Header from "@/components/layout/Header";
import ClientProviders from '@/components/providers/ClientProviders';
import "./globals.css";

// Configure Google fonts with Core Web Vitals optimizations
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  adjustFontFallback: true,
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: "Christopher Holzheu - Software Engineer",
  description: "Portfolio and personal website of Christopher Holzheu, showcasing software engineering projects and skills.",
  openGraph: {
    title: "Christopher Holzheu - Software Engineer",
    description: "Portfolio and personal website of Christopher Holzheu, showcasing software engineering projects and skills.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={`${GeistSans.className} ${GeistMono.className} ${playfair.variable} ${jakarta.variable} antialiased bg-background text-text-primary`}>
        <ClientProviders>
          <div className="min-h-screen">
            <Header />
            {children}
          </div>
        </ClientProviders>
      </body>
    </html>
  );
}
