import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import useThemeContext from '../hooks/useThemeContext';

export default function ThemeToggler() {
  const { theme, handleToggleTheme } = useThemeContext();

  return (
    <button
      onClick={handleToggleTheme}
      className="flex cursor-pointer items-center gap-x-2 transition duration-300 outline-none hover:scale-105 focus:scale-105"
    >
      {theme === 'light' ? <IoMoonOutline /> : <IoMoon />}
      <span>Dark Mode</span>
    </button>
  );
}
