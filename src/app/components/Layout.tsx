import { Outlet } from 'react-router';
import { Navbar } from './Navbar';
import { PortfolioPopupBanner } from './PortfolioPopupBanner';

export function Layout() {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <Outlet />
      <PortfolioPopupBanner />
    </div>
  );
}
