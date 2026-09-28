import React, { useState } from 'react';

interface HeroProps {
  onOpenCellar: () => void;
  onOpenPrivateDining: () => void;
  onFindTable: (bookingPref: {
    guests: string;
    date: string;
    time: string;
    experience: string;
  }) => void;
  onSelectExperience: (exp: 'odyssee' | 'ephemere' | 'pairings') => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenCellar,
  onOpenPrivateDining,
  onFindTable,
  onSelectExperience
}) => {
  const [guests, setGuests] = useState('2');
  const [date, setDate] = useState('2025-11-15');
  const [time, setTime] = useState('19:30');
  const [experience, setExperience] = useState('odyssee');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFindTable({
      guests,
      date,
      time,
      experience
    });
  };

  return (
    <section className="relative pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-[#ffffff] border-b border-[#d0c4be]/30">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        {/* Upper Header Content & Accolades */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#f0ede9] rounded-full text-[#9a4522] text-[11px] font-mono uppercase tracking-widest mb-4 border border-[#d0c4be]/40">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9a4522]"></span>
              Deux Étoiles Michelin · Relais & Châteaux 2025
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[56px] text-[#1c1c19] tracking-tight leading-[1.08] mb-5">
              Culinary Artistry <br />
              <span className="italic font-normal">Rooted in Provenance.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#4d4540] max-w-2xl leading-relaxed">
              Contemporary French gastronomy guided by the tides of Brittany and biodynamic highland soils. A sensory choreography crafted daily by Chef Patron Antoine Moreau.
            </p>
          </div>

          {/* Awards Emblem Display */}
          <div className="flex items-center gap-6 pt-4 border-t md:border-t-0 md:border-l border-[#d0c4be]/40 md:pl-8 shrink-0">
            <div className="text-center">
              <div className="flex justify-center text-[#9a4522] mb-1">
                <span className="material-symbols-filled text-2xl">star</span>
                <span className="material-symbols-filled text-2xl">star</span>
              </div>
              <p className="text-[10px] text-[#7e7570] uppercase tracking-widest font-semibold">Guide Michelin</p>
            </div>
            <div className="h-8 w-px bg-[#d0c4be]/50"></div>
            <div className="text-center">
              <span className="material-symbols-outlined text-2xl text-[#1c1c19] mb-1">workspace_premium</span>
              <p className="text-[10px] text-[#7e7570] uppercase tracking-widest font-semibold">Relais & Châteaux</p>
            </div>
          </div>
        </div>

        {/* Hero Visual Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mb-10">
          {/* Main Langoustine Dish Card */}
          <div
            onClick={() => {
              onSelectExperience('odyssee');
              const el = document.getElementById('menu');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="md:col-span-8 relative h-[360px] md:h-[480px] overflow-hidden rounded-xl border border-[#d0c4be]/30 shadow-xs cursor-pointer group"
          >
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              alt="A masterfully plated culinary centerpiece by a French Michelin chef featuring pan-seared Brittany langoustine resting in an emulsion of burnished hazelnut butter"
              referrerPolicy="no-referrer"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_Sx_TwHPYc80mne9kDdzIin_nBA605hrTIEhZiOuqRSovJr2j6SjSknFQChcC9cC5FQt7Kw7gxq60K0sCYZWi0X1dqefzckWgcEhvD1ziF_g6RfafLK_6mpq7QzFPXRyfyqlkNZojET7C3YQFhDtESKl5yftuxUUHLiDShbeQqUdzr_7gTCQ47dwyACgIZjpznHcilixDhlmZsosk13hhtt1joU0RJ76UlmsjmuxzNHTP6xGrG6tzDA"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1e1b19]/80 via-[#1e1b19]/20 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#ffdbce] mb-1 block">
                Course IV · Autumn Equinox
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-light italic">
                Langoustine de Guilvinec au Beurre Noisette & Émulsion Salicorne
              </h3>
            </div>
          </div>

          {/* Side Cards */}
          <div className="md:col-span-4 flex flex-col gap-5">
            {/* Dining Hall */}
            <div
              onClick={onOpenPrivateDining}
              className="relative h-[225px] overflow-hidden rounded-xl border border-[#d0c4be]/30 shadow-xs cursor-pointer group"
            >
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                alt="Intimate candlelit dining room of L'Étoile Atelier restaurant in Paris with dark aged oak paneling and modern brass stemware"
                referrerPolicy="no-referrer"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYKQgWJLo0BrmUAD3FJlgZWDvEr1HIVovac07znQM2d4ZuVZVti-XODjoFqpMl7Fi5ObKYxe7LhIHWJ7KoMkfD1vH3R5tlb6_X8vwoi1x40PKuce-w7676L8dhvL7najVS3Wz0yqXXh9FlUZqt771EOmNxmtkGIZshjuGawJddWnls3iPM8n7aQ_7W9YoX5MJSSvJ6Ojvc1Nm5B8Ns-0mYxbYe_SIVrYVOg_ZcezavcvJW1NHPxOU3UA"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e1b19]/85 via-transparent to-transparent flex items-end p-5">
                <span className="font-serif text-lg text-white font-medium flex items-center justify-between w-full">
                  <span>The Grand Dining Hall</span>
                  <span className="material-symbols-outlined text-sm opacity-80 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </span>
              </div>
            </div>

            {/* Cellar Reserve 2025 */}
            <div className="relative h-[225px] overflow-hidden rounded-xl border border-[#d0c4be]/30 shadow-xs bg-[#f0ede9] p-6 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono text-[#9a4522] uppercase tracking-widest block font-medium">
                  Cellar Reserve 2025
                </span>
                <p className="font-serif text-2xl text-[#1c1c19] mt-1.5 font-medium">1,840 Curated Vintages</p>
                <p className="text-xs text-[#4d4540] mt-1.5 leading-relaxed">
                  Direct relationships with sustainable biodynamic vignerons across Burgundy, Jura, and the Rhône Valley.
                </p>
              </div>
              <button
                onClick={onOpenCellar}
                className="inline-flex items-center gap-1.5 text-xs text-[#9a4522] hover:underline underline-offset-4 tracking-wider uppercase font-semibold text-left cursor-pointer"
              >
                <span>Inspect Sommeliers' Ledger</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>

        {/* Instant Reservation Strip */}
        <div className="bg-[#ffffff] border border-[#d0c4be]/50 p-4 md:p-6 rounded-xl shadow-md" id="quick-book">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
            <div>
              <label className="block text-[11px] font-mono text-[#7e7570] uppercase tracking-wider mb-1.5">
                Guests
              </label>
              <div className="relative">
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full bg-[#fcf9f4] border border-[#d0c4be]/60 rounded px-3 py-2.5 text-sm text-[#1c1c19] focus:border-[#9a4522] focus:ring-1 focus:ring-[#9a4522] outline-hidden appearance-none cursor-pointer"
                >
                  <option value="2">2 Epicures (Intimate Table)</option>
                  <option value="1">1 Guest (Chef's Counter)</option>
                  <option value="3">3 Epicures</option>
                  <option value="4">4 Epicures (Salon Table)</option>
                  <option value="5-6">5 to 8 Guests (Private Dining)</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-3 text-[#7e7570] pointer-events-none text-lg">
                  expand_more
                </span>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono text-[#7e7570] uppercase tracking-wider mb-1.5">
                Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={date}
                  min="2025-11-01"
                  max="2025-12-31"
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-[#fcf9f4] border border-[#d0c4be]/60 rounded px-3 py-2 text-sm text-[#1c1c19] focus:border-[#9a4522] focus:ring-1 focus:ring-[#9a4522] outline-hidden cursor-pointer"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono text-[#7e7570] uppercase tracking-wider mb-1.5">
                Service & Time
              </label>
              <div className="relative">
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full bg-[#fcf9f4] border border-[#d0c4be]/60 rounded px-3 py-2.5 text-sm text-[#1c1c19] focus:border-[#9a4522] focus:ring-1 focus:ring-[#9a4522] outline-hidden appearance-none cursor-pointer"
                >
                  <option value="19:30">Dinner — 19:30</option>
                  <option value="19:00">Dinner — 19:00</option>
                  <option value="20:15">Dinner — 20:15</option>
                  <option value="21:00">Dinner — 21:00 (Waitlist)</option>
                  <option value="12:30">Lunch — 12:30 (Thurs-Sun)</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-3 text-[#7e7570] pointer-events-none text-lg">
                  schedule
                </span>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono text-[#7e7570] uppercase tracking-wider mb-1.5">
                Experience
              </label>
              <div className="relative">
                <select
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className="w-full bg-[#fcf9f4] border border-[#d0c4be]/60 rounded px-3 py-2.5 text-sm text-[#1c1c19] focus:border-[#9a4522] focus:ring-1 focus:ring-[#9a4522] outline-hidden appearance-none cursor-pointer"
                >
                  <option value="odyssee">L'Odyssée (8 Courses)</option>
                  <option value="ephemere">Saison Éphémère (6 Courses)</option>
                  <option value="pairings">The Sommelier's Vault Flight</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-3 text-[#7e7570] pointer-events-none text-lg">
                  restaurant
                </span>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-[#1e1b19] text-white hover:bg-[#9a4522] text-xs font-semibold uppercase tracking-wider py-3 px-4 rounded transition-colors duration-200 flex items-center justify-center gap-2 shadow-xs cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                <span>Find Table</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
