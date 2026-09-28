import React from 'react';

interface NavbarProps {
  onOpenPrivateDining: () => void;
  onOpenCellar: () => void;
  onOpenEngineDashboard: () => void;
  onScrollToReservations: () => void;
  isDashboardOpen: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenPrivateDining,
  onOpenCellar,
  onOpenEngineDashboard,
  onScrollToReservations,
  isDashboardOpen
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 w-full z-50 bg-[#fcf9f4]/95 backdrop-blur-md border-b border-[#d0c4be]/30 shadow-xs transition-all duration-200">
      <div className="flex justify-between items-center w-full px-5 md:px-8 lg:px-12 py-3.5 max-w-7xl mx-auto">
        {/* Brand Logo */}
        <a
          href="#"
          className="font-serif text-2xl md:text-[26px] tracking-tight text-[#1c1c19] flex items-center gap-2 group"
        >
          <span className="material-symbols-outlined text-[#9a4522] text-[24px]">star_rate</span>
          <span className="tracking-tighter font-semibold">L'Étoile Atelier</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-7">
          <a
            href="#menu"
            className="text-xs uppercase tracking-wider text-[#9a4522] border-b-2 border-[#9a4522] pb-0.5 font-semibold transition-colors"
          >
            Menu
          </a>
          <a
            href="#story"
            className="text-xs uppercase tracking-wider text-[#4d4540] hover:text-[#1c1c19] transition-colors"
          >
            Story
          </a>
          <button
            onClick={onOpenPrivateDining}
            className="text-xs uppercase tracking-wider text-[#4d4540] hover:text-[#1c1c19] transition-colors cursor-pointer text-left"
          >
            Private Dining
          </button>
          <button
            onClick={onOpenCellar}
            className="text-xs uppercase tracking-wider text-[#4d4540] hover:text-[#1c1c19] transition-colors cursor-pointer text-left"
          >
            Cellar
          </button>
          <a
            href="#reservations"
            className="text-xs uppercase tracking-wider text-[#4d4540] hover:text-[#1c1c19] transition-colors"
          >
            Reservations
          </a>
        </nav>

        {/* Action CTAs */}
        <div className="flex items-center space-x-2.5">
          {/* Real-Time Engine Dashboard Toggle */}
          <button
            onClick={onOpenEngineDashboard}
            title="Inspect Real-time Digital Gastronomy Engine Dashboard"
            className={`hidden lg:flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-md border transition-all cursor-pointer ${
              isDashboardOpen
                ? 'bg-[#1e1b19] text-[#ffb59a] border-[#7e7570]'
                : 'bg-[#f0ede9] text-[#1e1b19] border-[#d0c4be]/60 hover:bg-[#ebe8e3]'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
            <span>Live Engine</span>
          </button>

          <button
            onClick={onOpenPrivateDining}
            className="hidden sm:inline-block text-xs uppercase tracking-wider px-3.5 py-2 border border-[#d0c4be]/70 text-[#1c1c19] hover:bg-[#ebe8e3] transition-colors rounded cursor-pointer"
          >
            Inquire
          </button>

          <button
            onClick={onScrollToReservations}
            className="text-xs uppercase tracking-wider px-4 py-2 bg-[#1e1b19] text-white hover:bg-[#9a4522] transition-colors rounded flex items-center gap-1.5 shadow-xs cursor-pointer font-medium"
          >
            <span>Reserve a Table</span>
            <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-[#1c1c19] hover:bg-[#f0ede9] rounded"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#d0c4be]/40 bg-[#fcf9f4] px-6 py-4 space-y-3">
          <a
            href="#menu"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-xs uppercase tracking-wider text-[#9a4522] font-semibold"
          >
            Menu
          </a>
          <a
            href="#story"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-xs uppercase tracking-wider text-[#4d4540]"
          >
            Story
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenPrivateDining();
            }}
            className="block text-xs uppercase tracking-wider text-[#4d4540] text-left w-full"
          >
            Private Dining
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenCellar();
            }}
            className="block text-xs uppercase tracking-wider text-[#4d4540] text-left w-full"
          >
            Cellar (1,840 Vintages)
          </button>
          <a
            href="#reservations"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-xs uppercase tracking-wider text-[#4d4540]"
          >
            Reservations
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenEngineDashboard();
            }}
            className="flex items-center gap-2 text-xs font-mono text-[#9a4522] pt-2 border-t border-[#d0c4be]/40"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
            <span>Real-Time Engine Telemetry & Dashboard</span>
          </button>
        </div>
      )}
    </header>
  );
};
