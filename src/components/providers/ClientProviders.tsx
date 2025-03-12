'use client';

import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from '@/components/theme/ThemeProvider';
import { NavigationProvider } from '@/components/navigation/NavigationContext';

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <NavigationProvider>
      <ThemeProvider>
        {children}
        <Analytics
          beforeSend={(event) => {
            // Ensure user privacy by not collecting PII
            if (event.url) {
              const url = new URL(event.url);
              url.search = ''; // Remove query parameters
              event.url = url.toString();
            }
            return event;
          }}
          debug={process.env.NODE_ENV === 'development'}
        />
      </ThemeProvider>
    </NavigationProvider>
  );
}
