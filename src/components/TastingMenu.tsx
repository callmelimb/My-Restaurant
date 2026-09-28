import React from 'react';
import { ODYSSEE_DISHES, EPHEMERE_DISHES, SOMMELIER_FLIGHTS } from '../data/restaurantData';

interface TastingMenuProps {
  activeTab: 'odyssee' | 'ephemere' | 'pairings';
  onTabChange: (tab: 'odyssee' | 'ephemere' | 'pairings') => void;
  onOpenCellar: () => void;
  onSelectMenuForBooking: (menuId: string) => void;
}

export const TastingMenu: React.FC<TastingMenuProps> = ({
  activeTab,
  onTabChange,
  onOpenCellar,
  onSelectMenuForBooking
}) => {
  return (
    <section className="py-20 md:py-28 bg-[#fcf9f4]" id="menu">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[11px] font-mono text-[#9a4522] uppercase tracking-widest block mb-2 font-medium">
            Automne Contemporain · Acte IX
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] text-[#1c1c19] font-normal">
            The Tasting Experience
          </h2>
          <p className="text-sm sm:text-base text-[#4d4540] mt-3 leading-relaxed">
            Each movement reflects the morning harvest from our organic partner farm in Le Perche and sustainable coastal fleets. Served with artisanal pain au levain and hand-churned butter.
          </p>
        </div>

        {/* Menu Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-[#f0ede9] rounded-lg border border-[#d0c4be]/40">
            <button
              onClick={() => onTabChange('odyssee')}
              className={`px-4 sm:px-5 py-2 rounded text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                activeTab === 'odyssee'
                  ? 'bg-white text-[#1c1c19] shadow-xs'
                  : 'text-[#4d4540] hover:text-[#1c1c19]'
              }`}
            >
              L'Odyssée Complète (8 Courses)
            </button>
            <button
              onClick={() => onTabChange('ephemere')}
              className={`px-4 sm:px-5 py-2 rounded text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                activeTab === 'ephemere'
                  ? 'bg-white text-[#1c1c19] shadow-xs'
                  : 'text-[#4d4540] hover:text-[#1c1c19]'
              }`}
            >
              Saison Éphémère (6 Courses)
            </button>
            <button
              onClick={() => onTabChange('pairings')}
              className={`px-4 sm:px-5 py-2 rounded text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                activeTab === 'pairings'
                  ? 'bg-white text-[#1c1c19] shadow-xs'
                  : 'text-[#4d4540] hover:text-[#1c1c19]'
              }`}
            >
              Sommelier Pairings
            </button>
          </div>
        </div>

        {/* View 1: L'Odyssée Complète (8 Courses) */}
        {activeTab === 'odyssee' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ODYSSEE_DISHES.map((dish, idx) => (
              <article
                key={dish.id}
                className={`bg-white p-6 md:p-8 rounded-xl border border-[#E7DFD3] shadow-[0_4px_20px_-2px_rgba(28,25,23,0.04)] hover:shadow-md transition-shadow ${
                  idx === ODYSSEE_DISHES.length - 1 ? 'md:col-span-2' : ''
                }`}
              >
                {idx === ODYSSEE_DISHES.length - 1 ? (
                  /* Dessert / Grand Final banner card */
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1.5">
                        <span className="text-[11px] font-mono text-[#9a4522] uppercase tracking-widest font-medium">
                          {dish.courseTag}
                        </span>
                        {dish.badge && (
                          <span className="px-2 py-0.5 bg-[#f0ede9] text-[#44403C] rounded text-[10px] font-mono uppercase tracking-wider">
                            {dish.badge}
                          </span>
                        )}
                      </div>
                      <h3 className="font-serif text-xl sm:text-2xl text-[#1c1c19] font-normal">
                        {dish.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#4d4540] mt-1.5 max-w-3xl leading-relaxed">
                        {dish.description}
                      </p>
                    </div>
                    <div className="md:text-right shrink-0">
                      <span className="font-serif text-2xl text-[#1c1c19] font-medium block">
                        €280 / Patron
                      </span>
                      <span className="text-xs text-[#7e7570] block mt-0.5">
                        Optional Sommelier Flight: €160
                      </span>
                      <button
                        onClick={() => onSelectMenuForBooking('L\'Odyssée (8 Courses)')}
                        className="mt-2 text-xs uppercase tracking-wider text-[#9a4522] font-semibold hover:underline cursor-pointer"
                      >
                        Reserve This Experience →
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Standard Course Card */
                  <div>
                    <div className="flex justify-between items-baseline mb-2">
                      <span className="text-[11px] font-mono text-[#9a4522] uppercase tracking-widest font-medium">
                        {dish.courseTag}
                      </span>
                      <span className="text-sm text-[#1c1c19] font-semibold font-sans">
                        {dish.badge}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl sm:text-[22px] text-[#1c1c19] font-normal mb-2 leading-snug">
                      {dish.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4d4540] mb-4 leading-relaxed">
                      {dish.description}
                    </p>
                    <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[#d0c4be]/30 text-xs">
                      <div className="flex gap-2">
                        {dish.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 bg-[#f0ede9] text-[#44403C] rounded text-[10px] font-mono uppercase tracking-wider"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="text-[#4d4540] italic text-xs">
                        Pairing: {dish.pairing}
                      </span>
                    </div>
                  </div>
                )}
              </article>
            ))}
          </div>
        )}

        {/* View 2: Saison Éphémère (6 Courses) */}
        {activeTab === 'ephemere' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {EPHEMERE_DISHES.map((dish) => (
              <article
                key={dish.id}
                className="bg-white p-6 md:p-8 rounded-xl border border-[#E7DFD3] shadow-[0_4px_20px_-2px_rgba(28,25,23,0.04)] hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-[11px] font-mono text-[#9a4522] uppercase tracking-widest font-medium">
                    {dish.courseTag}
                  </span>
                  <span className="text-sm text-[#1c1c19] font-semibold font-sans">
                    {dish.badge}
                  </span>
                </div>
                <h3 className="font-serif text-xl sm:text-[22px] text-[#1c1c19] font-normal mb-2 leading-snug">
                  {dish.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#4d4540] mb-4 leading-relaxed">
                  {dish.description}
                </p>
                <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[#d0c4be]/30 text-xs">
                  <div className="flex gap-2">
                    {dish.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-[#f0ede9] text-[#44403C] rounded text-[10px] font-mono uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-[#4d4540] italic text-xs">
                    Pairing: {dish.pairing}
                  </span>
                </div>
              </article>
            ))}

            <article className="md:col-span-2 bg-white p-6 md:p-8 rounded-xl border border-[#E7DFD3]">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] font-mono text-[#9a4522] uppercase tracking-widest block mb-1">
                    Seasonal Luncheon & Early Seating
                  </span>
                  <h3 className="font-serif text-2xl text-[#1c1c19] font-normal">
                    Saison Éphémère (6 Movements)
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4d4540] mt-1.5 max-w-2xl leading-relaxed">
                    Designed for lunch services and early evenings, honoring micro-seasonal ingredients available for fewer than 20 days per harvest cycle.
                  </p>
                </div>
                <div className="md:text-right shrink-0">
                  <span className="font-serif text-2xl text-[#1c1c19] font-medium block">
                    €210 / Patron
                  </span>
                  <span className="text-xs text-[#7e7570] block mt-0.5">
                    Optional Sommelier Selection: €115
                  </span>
                  <button
                    onClick={() => onSelectMenuForBooking('Saison Éphémère (6 Courses)')}
                    className="mt-2 text-xs uppercase tracking-wider text-[#9a4522] font-semibold hover:underline cursor-pointer"
                  >
                    Select for Reservation →
                  </button>
                </div>
              </div>
            </article>
          </div>
        )}

        {/* View 3: Sommelier Pairings */}
        {activeTab === 'pairings' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {SOMMELIER_FLIGHTS.map((flight) => (
                <div
                  key={flight.id}
                  className={`bg-white p-6 rounded-xl border flex flex-col justify-between relative overflow-hidden ${
                    flight.isSommelierPick
                      ? 'border-[#9a4522]/50 shadow-md ring-1 ring-[#9a4522]/20'
                      : 'border-[#E7DFD3] shadow-xs'
                  }`}
                >
                  {flight.isSommelierPick && (
                    <div className="absolute top-0 right-0 bg-[#9a4522] text-white px-3 py-1 text-[10px] font-mono uppercase tracking-wider rounded-bl-lg font-medium">
                      Sommelier Pick
                    </div>
                  )}
                  <div>
                    <span className="text-[11px] font-mono text-[#9a4522] uppercase tracking-widest block font-medium">
                      {flight.flightTag}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#1c1c19] font-normal mt-2">
                      {flight.title}
                    </h3>
                    <p className="text-xs text-[#4d4540] mt-2 leading-relaxed">
                      {flight.description}
                    </p>
                    <ul className="mt-4 space-y-1.5 text-xs text-[#4d4540] border-t border-[#d0c4be]/30 pt-3">
                      {flight.selections.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-[#9a4522] text-xs">·</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#d0c4be]/30 flex justify-between items-baseline">
                    <span className="font-serif text-2xl text-[#1c1c19] font-medium">
                      €{flight.price}
                    </span>
                    <span className="text-[11px] font-mono text-[#7e7570] uppercase">
                      {flight.poursCount}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Sommelier Vault Callout */}
            <div className="p-6 bg-[#f0ede9] rounded-xl border border-[#d0c4be]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#9a4522] text-3xl">wine_bar</span>
                <div>
                  <h4 className="font-serif text-lg text-[#1c1c19] font-medium">
                    Looking for rare bottle allocations or private cellar tastings?
                  </h4>
                  <p className="text-xs text-[#4d4540]">
                    Chef Sommelier Éléonore Vasseur curates 1,840 biodynamic vintages across Burgundy, Jura, and Rhône.
                  </p>
                </div>
              </div>
              <button
                onClick={onOpenCellar}
                className="px-5 py-2.5 bg-[#1e1b19] text-white hover:bg-[#9a4522] rounded text-xs uppercase tracking-wider transition-colors shrink-0 cursor-pointer font-medium"
              >
                Open 1,840 Vintages Ledger
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
