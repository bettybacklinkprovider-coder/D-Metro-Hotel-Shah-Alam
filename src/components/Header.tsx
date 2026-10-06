import React, { useState } from 'react';
import { Phone, Calendar, Menu, X } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

export type NavigationPage = 'home' | 'rooms' | 'facilities' | 'contact';

interface HeaderProps {
  currentPage: NavigationPage;
  onNavigate: (page: NavigationPage) => void;
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenBooking,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: NavigationPage; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'rooms', label: 'Rooms & Suites' },
    { id: 'facilities', label: 'Facilities / Services' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: NavigationPage) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0b0612]/90 backdrop-blur-md border-b border-amber-500/20 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Zone 1: Brand Wordmark (Single Text Element) */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-sm"
          aria-label="D'Metro Hotel Home"
        >
          <span className="text-xl sm:text-2xl font-serif-luxury font-bold tracking-wider text-gold-gradient group-hover:opacity-90 transition-opacity">
            D'METRO HOTEL
          </span>
        </button>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative py-2 text-sm font-medium tracking-wide transition-colors whitespace-nowrap ${
                  isActive
                    ? 'text-amber-300 font-semibold'
                    : 'text-zinc-300 hover:text-amber-200'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500 via-amber-300 to-amber-500 rounded-full shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Actions */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          <a
            href={`tel:${HOTEL_INFO.phone}`}
            className="hidden lg:flex items-center space-x-2 text-xs font-medium text-amber-200/80 hover:text-amber-300 px-3 py-2 rounded-lg border border-amber-500/20 hover:border-amber-500/40 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span className="tabular-nums">{HOTEL_INFO.phone}</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="inline-flex items-center space-x-2 px-4 py-2.5 text-xs sm:text-sm font-semibold tracking-wider text-slate-950 bg-gold-gradient hover:opacity-95 transition-all shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] rounded-lg active:scale-[0.98] whitespace-nowrap"
          >
            <Calendar className="w-4 h-4 text-slate-950" />
            <span>BOOK YOUR STAY</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-amber-300 hover:text-amber-100 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#130922] border-b border-amber-500/30 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-amber-500/10 text-amber-300 border border-amber-500/30'
                      : 'text-zinc-300 hover:bg-white/5 hover:text-amber-200'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-amber-500/20 flex flex-col space-y-3">
            <a
              href={`tel:${HOTEL_INFO.phone}`}
              className="flex items-center justify-center space-x-2 text-sm text-amber-300 py-2.5 rounded-lg border border-amber-500/30 bg-amber-500/5"
            >
              <Phone className="w-4 h-4" />
              <span className="tabular-nums">Call Us: {HOTEL_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
