import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import logo from '../../imports/C2C_Logo.png';

const navLinks = [
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/products', label: 'Products' },
  { to: '/training', label: 'Explore Courses' },
  { to: '/digital-marketing', label: 'Digital Marketing' },
  { to: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 bg-white ${
        scrolled ? 'shadow-[0_4px_20px_rgb(0,0,0,0.03)] border-b border-gray-100 py-2' : 'py-4'
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 lg:px-12">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <img src={logo} alt="C2C Tech Solutions" className="h-10 w-10 shrink-0 sm:h-12 sm:w-12 object-contain" />
          <span
            style={{ fontFamily: 'var(--font-heading)' }}
            className="truncate text-lg sm:text-xl font-bold tracking-tight text-[var(--navy)]"
          >
            C2C Tech Solutions
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              style={{ fontFamily: 'var(--font-body)' }}
              className={`relative whitespace-nowrap text-[15px] font-medium transition-colors group ${
                isActive(link.to)
                  ? 'text-[var(--navy)]'
                  : 'text-gray-500 hover:text-[var(--navy)]'
              }`}
            >
              {link.label}
              <span className={`absolute -bottom-1 left-0 h-[2px] bg-[var(--yellow)] transition-all duration-300 ${isActive(link.to) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
          ))}
          <div className="ml-4 pl-4 border-l border-gray-200">
            <Link
              to="/explore-courses"
              className="inline-flex items-center justify-center rounded-full bg-[var(--navy)] px-6 py-2.5 text-[15px] font-bold text-white transition-transform hover:scale-105 shadow-md shadow-navy/10"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Enroll Now
            </Link>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-[var(--navy)] hover:bg-gray-50 lg:hidden transition-colors"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl overflow-hidden transition-all duration-300 lg:hidden ${
          menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col p-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              style={{ fontFamily: 'var(--font-body)' }}
              className={`rounded-xl px-4 py-3 text-[15px] font-medium transition-colors ${
                isActive(link.to)
                  ? 'bg-[var(--yellow)]/10 text-[var(--navy)]'
                  : 'text-gray-500 hover:bg-gray-50 hover:text-[var(--navy)]'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 mt-2 border-t border-gray-100">
            <Link
              to="/explore-courses"
              className="flex w-full items-center justify-center rounded-xl bg-[var(--navy)] px-4 py-3.5 text-[15px] font-bold text-white shadow-md shadow-navy/10"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
