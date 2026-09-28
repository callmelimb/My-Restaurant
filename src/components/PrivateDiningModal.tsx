import React, { useState } from 'react';

interface PrivateDiningModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string, type?: 'info' | 'success' | 'error') => void;
}

export const PrivateDiningModal: React.FC<PrivateDiningModalProps> = ({
  isOpen,
  onClose,
  onShowToast
}) => {
  const [repName, setRepName] = useState('');
  const [repEmail, setRepEmail] = useState('');
  const [guests, setGuests] = useState('12');
  const [date, setDate] = useState('2025-12-05');
  const [salonType, setSalonType] = useState('Salon Céleste (Up to 16)');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (repName && repEmail) {
      onShowToast(`Private salon dossier & inquiry dispatched to ${repEmail}.`, 'success');
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
      <div className="bg-white max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-2xl border border-[#d0c4be]/50 shadow-2xl p-6 sm:p-8 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#4d4540] hover:text-[#1c1c19] p-1 rounded-full hover:bg-[#f0ede9] cursor-pointer transition-colors"
          aria-label="Close dialog"
        >
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>

        <div className="border-b border-[#d0c4be]/30 pb-4 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#f0ede9] rounded-full text-[#9a4522] text-[10px] font-mono uppercase tracking-widest mb-2 font-medium">
            Exclusive Hire & Salons
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#1c1c19] font-normal">
            Salon Privé Céleste & Buyouts
          </h3>
          <p className="text-xs sm:text-sm text-[#4d4540] mt-1 leading-relaxed">
            An architectural sanctuary for curated gastronomy up to 16 guests.
          </p>
        </div>

        {/* Salon Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 text-center">
          <div className="p-3 bg-[#f6f3ee] rounded-xl">
            <span className="material-symbols-outlined text-[#9a4522] text-xl mb-1">groups</span>
            <span className="text-[10px] font-mono text-[#7e7570] uppercase block">Capacity</span>
            <span className="font-serif text-base text-[#1c1c19] font-semibold">8 – 16 Patrons</span>
          </div>
          <div className="p-3 bg-[#f6f3ee] rounded-xl">
            <span className="material-symbols-outlined text-[#9a4522] text-xl mb-1">dinner_dining</span>
            <span className="text-[10px] font-mono text-[#7e7570] uppercase block">Curation</span>
            <span className="font-serif text-base text-[#1c1c19] font-semibold">9 Bespoke Courses</span>
          </div>
          <div className="p-3 bg-[#f6f3ee] rounded-xl">
            <span className="material-symbols-outlined text-[#9a4522] text-xl mb-1">wine_bar</span>
            <span className="text-[10px] font-mono text-[#7e7570] uppercase block">Sommelier</span>
            <span className="font-serif text-base text-[#1c1c19] font-semibold">Dedicated Head Sommelier</span>
          </div>
        </div>

        {/* Salon Visual & Specifications */}
        <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
          <div className="rounded-xl overflow-hidden h-44 border border-[#d0c4be]/40">
            <img
              className="w-full h-full object-cover"
              alt="Salon Privé Céleste private dining room"
              referrerPolicy="no-referrer"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYKQgWJLo0BrmUAD3FJlgZWDvEr1HIVovac07znQM2d4ZuVZVti-XODjoFqpMl7Fi5ObKYxe7LhIHWJ7KoMkfD1vH3R5tlb6_X8vwoi1x40PKuce-w7676L8dhvL7najVS3Wz0yqXXh9FlUZqt771EOmNxmtkGIZshjuGawJddWnls3iPM8n7aQ_7W9YoX5MJSSvJ6Ojvc1Nm5B8Ns-0mYxbYe_SIVrYVOg_ZcezavcvJW1NHPxOU3UA"
            />
          </div>
          <div className="space-y-2 text-xs text-[#4d4540] leading-relaxed">
            <p>
              • <strong>Acoustic Tuning:</strong> Soft velvet drapery and solid oak baffling guarantee intimate discretion.
            </p>
            <p>
              • <strong>Private Entrance:</strong> Discreet VIP access directly via Rue des Francs-Bourgeois courtyard.
            </p>
            <p>
              • <strong>Cellar Direct:</strong> Direct access to the Sommelier Vault for tableside decanting of rare magnum vintages.
            </p>
          </div>
        </div>

        {/* Inquire & Download Form */}
        <form onSubmit={handleSubmit} className="p-5 bg-[#f0ede9] rounded-xl border border-[#d0c4be]/40 space-y-3">
          <h4 className="font-serif text-base text-[#1c1c19] font-semibold">
            Request Salon Availability & Dossier
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              type="text"
              required
              value={repName}
              onChange={(e) => setRepName(e.target.value)}
              placeholder="Representative Name"
              className="bg-white border border-[#d0c4be]/70 rounded px-3 py-2 text-xs focus:border-[#9a4522] focus:ring-1 focus:ring-[#9a4522] outline-hidden"
            />
            <input
              type="email"
              required
              value={repEmail}
              onChange={(e) => setRepEmail(e.target.value)}
              placeholder="Corporate / Concierge Email"
              className="bg-white border border-[#d0c4be]/70 rounded px-3 py-2 text-xs focus:border-[#9a4522] focus:ring-1 focus:ring-[#9a4522] outline-hidden"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <input
              type="number"
              min={8}
              max={24}
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              placeholder="Estimated Guests"
              className="bg-white border border-[#d0c4be]/70 rounded px-3 py-2 text-xs focus:border-[#9a4522] focus:ring-1 focus:ring-[#9a4522] outline-hidden"
            />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="bg-white border border-[#d0c4be]/70 rounded px-3 py-2 text-xs focus:border-[#9a4522] focus:ring-1 focus:ring-[#9a4522] outline-hidden"
            />
            <select
              value={salonType}
              onChange={(e) => setSalonType(e.target.value)}
              className="bg-white border border-[#d0c4be]/70 rounded px-3 py-2 text-xs focus:border-[#9a4522] focus:ring-1 focus:ring-[#9a4522] outline-hidden"
            >
              <option>Salon Céleste (Up to 16)</option>
              <option>Full Restaurant Buyout (50)</option>
              <option>Cellar Vault Exclusive (6)</option>
            </select>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              type="submit"
              className="flex-1 bg-[#1e1b19] text-white hover:bg-[#9a4522] text-xs uppercase tracking-wider py-2.5 rounded transition-colors cursor-pointer text-center font-semibold"
            >
              Submit Private Inquiry & Download PDF
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 border border-[#d0c4be]/70 text-[#1c1c19] rounded text-xs uppercase tracking-wider hover:bg-white cursor-pointer"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
