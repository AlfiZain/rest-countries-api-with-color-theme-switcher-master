import { Route, Routes } from 'react-router';
import AppLayout from './layouts/AppLayout';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import ThemeContext from './contexts/ThemeContext';
import { useEffect, useState } from 'react';

export default function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'light',
  );

  const handleToggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  const themeContextValue = {
    theme,
    handleToggleTheme,
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  return (
    <ThemeContext value={themeContextValue}>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="countries/:alpha" element={<DetailPage />} />
        </Route>
      </Routes>
    </ThemeContext>
  );
}
