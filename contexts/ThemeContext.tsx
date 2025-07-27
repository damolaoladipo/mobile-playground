import React, { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { useColorScheme } from 'nativewind';
import Storage from '@/utils/storage';

type ThemeContextType = {
  isDark: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const { colorScheme, setColorScheme } = useColorScheme(); // nativewind's version
  const [theme, setTheme] = useState<'light' | 'dark'>(colorScheme ?? 'light');

  useEffect(() => {
    const loadTheme = async () => {
      const saved = await Storage.fetchData('theme');
      if (saved === 'dark' || saved === 'light') {
        setTheme(saved);
        setColorScheme(saved);
      }
    };
    loadTheme();
  }, []);

  const toggleTheme = async () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    await Storage.keepData('theme', newTheme);
    setColorScheme(newTheme);
  };

  const isDark = theme === 'dark';

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};
