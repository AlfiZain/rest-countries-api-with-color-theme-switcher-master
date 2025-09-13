import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';

export default function AppLayout() {
  return (
    <div className="flex flex-col font-nunito-sans font-semibold text-Grey-950 dark:text-White">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
