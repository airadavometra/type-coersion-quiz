import { useEffect, useState } from 'react';

export type Theme = 'dark' | 'light';

const getRootClass = (theme: Theme) => `${theme}-theme`;

const addRootClass = (theme: Theme) => document.documentElement.classList.add(getRootClass(theme));
const removeRootClass = (theme: Theme) => document.documentElement.classList.remove(getRootClass(theme));

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  });

  useEffect(() => {
    addRootClass(theme);
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      removeRootClass(prevTheme);
      const newTheme = prevTheme === 'dark' ? 'light' : 'dark';
      addRootClass(newTheme);
      return newTheme;
    });
  };

  return { theme, toggleTheme };
};
