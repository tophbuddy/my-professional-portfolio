'use client';

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

interface ThemeContextType {
  theme: string;
  setTheme: (theme: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState('dark');
  const [mounted, setMounted] = useState(false);

  // Optimize theme change handler with useCallback
  const handleThemeChange = useCallback((newTheme: string) => {
    setTheme(newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    try {
      localStorage.setItem('theme', newTheme);
    } catch (err) {
      console.error('Failed to save theme preference:', err);
    }
  }, []);

  // Defer theme initialization to after component mount
  useEffect(() => {
    if (!mounted) {
      setMounted(true);
      // Use requestIdleCallback for non-critical initialization
      const initTheme = () => {
        try {
          const savedTheme = localStorage.getItem('theme');
          if (savedTheme) {
            handleThemeChange(savedTheme);
          } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            handleThemeChange('dark');
          } else {
            handleThemeChange('light');
          }
        } catch (err) {
          console.error('Failed to initialize theme:', err);
        }
      };

      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(initTheme);
      } else {
        // Fallback for browsers that don't support requestIdleCallback
        setTimeout(initTheme, 0);
      }
    }
  }, [mounted, handleThemeChange]);

  // Prevent flash of wrong theme
  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme: handleThemeChange }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
