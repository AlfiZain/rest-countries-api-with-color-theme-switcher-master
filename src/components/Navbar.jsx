import { Link } from 'react-router';
import ThemeToggler from './ThemeToggler';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-White px-[5%] py-6 shadow-lg lg:px-16 xl:px-20 dark:bg-Blue-900">
      <h1 className="cursor-pointer font-bold transition duration-300 hover:scale-105">
        <Link to="/">Where in the world?</Link>
      </h1>
      <ThemeToggler />
    </nav>
  );
}
