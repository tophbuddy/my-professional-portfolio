'use client';

import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from '@/components/theme/ThemeProvider';
import { NavigationProvider } from '@/components/navigation/NavigationContext';

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <NavigationProvider>
      <ThemeProvider>
        {children}
        <Analytics />
      </ThemeProvider>
    </NavigationProvider>
  );
}
