'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light' | 'system';

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: 'dark' | 'light';
};

const initialState: ThemeProviderState = {
  theme: 'system',
  setTheme: () => null,
  resolvedTheme: 'light',
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'it-semantic-theme',
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const [resolvedTheme, setResolvedTheme] = useState<'dark' | 'light'>('light');
  const [mounted, setMounted] = useState(false);

  // Handle initial theme loading and prevent hydration mismatch
  useEffect(() => {
    const stored = localStorage?.getItem(storageKey) as Theme;
    if (stored && ['dark', 'light', 'system'].includes(stored)) {
      setTheme(stored);
    } else {
      // Set initial theme based on system preference if no stored theme
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      setResolvedTheme(systemTheme);
    }
    setMounted(true);
  }, [storageKey]);

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove('light', 'dark');

    let appliedTheme: 'dark' | 'light';

    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const systemTheme = mediaQuery.matches ? 'dark' : 'light';

      // Listen for system theme changes
      const handleSystemThemeChange = (e: MediaQueryListEvent) => {
        const newSystemTheme = e.matches ? 'dark' : 'light';
        root.classList.remove('light', 'dark');
        root.classList.add(newSystemTheme);
        setResolvedTheme(newSystemTheme);
      };

      mediaQuery.addEventListener('change', handleSystemThemeChange);
      root.classList.add(systemTheme);
      appliedTheme = systemTheme;

      // Cleanup listener
      return () => {
        mediaQuery.removeEventListener('change', handleSystemThemeChange);
      };
    } else {
      root.classList.add(theme);
      appliedTheme = theme as 'dark' | 'light';
    }

    setResolvedTheme(appliedTheme);
  }, [theme]);

  const value = {
    theme,
    resolvedTheme,
    setTheme: (theme: Theme) => {
      try {
        localStorage?.setItem(storageKey, theme);
        setTheme(theme);
      } catch (error) {
        // Handle localStorage errors gracefully
        console.warn('Failed to save theme to localStorage:', error);
        setTheme(theme);
      }
    },
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <ThemeProviderContext.Provider {...props} value={initialState}>
        {children}
      </ThemeProviderContext.Provider>
    );
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider');

  return context;
};