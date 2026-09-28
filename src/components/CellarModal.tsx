import React, { useState } from 'react';
import { CELLAR_VINTAGES } from '../data/restaurantData';

interface CellarModalProps {
  isOpen: boolean;
  onClose: () => void;
  onScrollToReservations: () => void;
  onShowToast: (msg: string, type?: 'info' | 'success') => void;
}

export const CellarModal: React.FC<CellarModalProps> = ({
  isOpen,
  onClose,
  onScrollToReservations,
  onShowToast
}) => {
  const [filter, setFilter] = useState<'all' | 'burgundy' | 'jura' | 'rhone' | 'champagne'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  if (!isOpen) return null;

  const filteredVintages = CELLAR_VINTAGES.filter((v) => {
    const matchesRegion = filter === 'all' || v.region === filter;
    const matchesSearch =
      searchQuery === '' ||
      v.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.domain.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.binNumber.includes(searchQuery);
    return matchesRegion && matchesSearch;
  });

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs">
      <div className="bg-white max-w-4xl w-full max-h-[92vh] overflow-y-auto rounded-2xl border border-[#d0c4be]/50 shadow-2xl p-6 sm:p-8 relative">
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
            1,840 Curated Vintages · Historic Marais Cellar
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#1c1c19] font-normal">
            The Sommelier's Ledger
          </h3>
          <p className="text-xs sm:text-sm text-[#4d4540] mt-1 leading-relaxed">
            Direct relationships with sustainable biodynamic vignerons across Burgundy, Jura, and Rhône.
          </p>
        </div>

        {/* Search Bar & Region Filters */}
        <div className="flex flex-col sm:flex-row gap-3 justify-between items-center mb-6">
          <div className="flex flex-wrap gap-2 w-full sm:w-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer ${
                filter === 'all'
                  ? 'bg-[#1e1b19] text-white font-semibold'
                  : 'bg-[#f0ede9] text-[#1c1c19] hover:bg-[#ebe8e3]'
              }`}
            >
              All (1,840)
            </button>
            <button
              onClick={() => setFilter('burgundy')}
              className={`px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer ${
                filter === 'burgundy'
                  ? 'bg-[#1e1b19] text-white font-semibold'
                  : 'bg-[#f0ede9] text-[#1c1c19] hover:bg-[#ebe8e3]'
              }`}
            >
              Bourgogne Grand Cru
            </button>
            <button
              onClick={() => setFilter('jura')}
              className={`px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer ${
                filter === 'jura'
                  ? 'bg-[#1e1b19] text-white font-semibold'
                  : 'bg-[#f0ede9] text-[#1c1c19] hover:bg-[#ebe8e3]'
              }`}
            >
              Jura & Vin Jaune
            </button>
            <button
              onClick={() => setFilter('rhone')}
              className={`px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer ${
                filter === 'rhone'
                  ? 'bg-[#1e1b19] text-white font-semibold'
                  : 'bg-[#f0ede9] text-[#1c1c19] hover:bg-[#ebe8e3]'
              }`}
            >
              Vallée du Rhône
            </button>
            <button
              onClick={() => setFilter('champagne')}
              className={`px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer ${
                filter === 'champagne'
                  ? 'bg-[#1e1b19] text-white font-semibold'
                  : 'bg-[#f0ede9] text-[#1c1c19] hover:bg-[#ebe8e3]'
              }`}
            >
              Champagne
            </button>
          </div>

          <div className="relative w-full sm:w-60">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search bin, domaine, year..."
              className="w-full bg-[#fcf9f4] border border-[#d0c4be]/70 rounded px-3 py-1.5 text-xs text-[#1c1c19] outline-hidden focus:border-[#9a4522]"
            />
            <span className="material-symbols-outlined absolute right-2.5 top-1.5 text-[#7e7570] text-sm pointer-events-none">
              search
            </span>
          </div>
        </div>

        {/* Vintage Rows */}
        <div className="space-y-3 mb-6">
          {filteredVintages.map((wine) => (
            <div
              key={wine.id}
              className="p-4 rounded-xl border border-[#d0c4be]/40 hover:border-[#9a4522] transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#ffffff] shadow-xs"
            >
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 bg-[#f0ede9] text-[#9a4522] rounded text-[10px] font-mono uppercase tracking-wider font-semibold">
                    {wine.regionLabel}
                  </span>
                  <span className="text-xs text-[#7e7570] font-mono">Bin #{wine.binNumber}</span>
                  {wine.organicOrBiodynamic && (
                    <span className="text-[10px] text-emerald-700 font-mono">● Biodynamic</span>
                  )}
                </div>
                <h4 className="font-serif text-base sm:text-lg text-[#1c1c19] font-semibold">
                  {wine.vintageYear} {wine.name}
                </h4>
                <p className="text-xs text-[#7e7570] font-medium">{wine.domain}</p>
                <p className="text-xs text-[#4d4540] mt-1 leading-relaxed max-w-xl">
                  {wine.tastingNotes}
                </p>
              </div>

              <div className="sm:text-right shrink-0">
                <span className="font-serif text-2xl text-[#1c1c19] font-semibold block">
                  €{wine.priceEur}
                </span>
                <span className="text-xs text-emerald-800 font-mono uppercase block">
                  {wine.bottlesInCellar} Bottles In Vault
                </span>
                <button
                  onClick={() => {
                    onShowToast(`Sommelier flagged Bin #${wine.binNumber} (${wine.name}) for your dinner booking.`, 'success');
                  }}
                  className="mt-2 text-[11px] font-mono text-[#9a4522] hover:underline cursor-pointer uppercase tracking-wider block"
                >
                  + Reserve Bottle
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Booking Vault Tasting Callout */}
        <div className="bg-[#f0ede9] p-4 rounded-xl border border-[#d0c4be]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-serif text-base font-semibold text-[#1c1c19]">
              Book Private 18:00 Vault Cellar Tasting
            </p>
            <p className="text-xs text-[#4d4540]">
              Includes blind pours of 3 library allocations with Chef Sommelier Éléonore Vasseur.
            </p>
          </div>
          <button
            onClick={() => {
              onClose();
              onScrollToReservations();
            }}
            className="px-5 py-2.5 bg-[#1e1b19] text-white hover:bg-[#9a4522] rounded text-xs font-semibold uppercase tracking-wider transition-colors shrink-0 cursor-pointer"
          >
            Reserve With Dinner
          </button>
        </div>
      </div>
    </div>
  );
};
