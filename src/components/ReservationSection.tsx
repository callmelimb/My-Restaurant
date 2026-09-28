import React, { useState } from 'react';
import { ReservationPayload } from '../types';

interface ReservationSectionProps {
  initialGuests?: string;
  initialDate?: string;
  initialTime?: string;
  initialExperience?: string;
  onOpenPrivateDining: () => void;
  onOpenCellar: () => void;
  onSubmitReservation: (payload: ReservationPayload) => void;
  onShowToast: (msg: string, type?: 'info' | 'success' | 'error') => void;
}

export const ReservationSection: React.FC<ReservationSectionProps> = ({
  initialGuests = '2',
  initialDate = '2025-11-15',
  initialTime = '19:30',
  initialExperience = 'L\'Odyssée (8 Courses)',
  onOpenPrivateDining,
  onOpenCellar,
  onSubmitReservation,
  onShowToast
}) => {
  const [guests, setGuests] = useState(initialGuests);
  const [selectedDay, setSelectedDay] = useState(15);
  const [time, setTime] = useState(initialTime);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [dietaryNotes, setDietaryNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync props if changed
  React.useEffect(() => {
    if (initialGuests) setGuests(initialGuests);
    if (initialTime) setTime(initialTime);
  }, [initialGuests, initialTime]);

  const guestCount = parseInt(guests.split('-')[0]) || 2;
  const depositTotal = guestCount * 100;

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) {
      onShowToast('Please provide your name and email to secure table mutex hold.', 'error');
      return;
    }

    setIsSubmitting(true);
    // Simulate real distributed lock acquisition
    setTimeout(() => {
      setIsSubmitting(false);
      const payload: ReservationPayload = {
        guests,
        date: `2025-11-${selectedDay.toString().padStart(2, '0')}`,
        time,
        experience: initialExperience,
        fullName,
        email,
        dietaryNotes,
        cardGuaranteeAuthorized: true,
        depositAmount: depositTotal,
        transactionHash: `tx_${Math.random().toString(36).substring(2, 9).toUpperCase()}`
      };
      onSubmitReservation(payload);
    }, 600);
  };

  return (
    <section className="py-20 md:py-28 bg-[#fcf9f4]" id="reservations">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] font-mono text-[#9a4522] uppercase tracking-widest block mb-2 font-medium">
            Bookings & Salons Privés
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] text-[#1c1c19] font-normal">
            Reserve Your Experience
          </h2>
          <p className="text-sm sm:text-base text-[#4d4540] mt-3 leading-relaxed">
            Bookings are released on the first day of each calendar month at 10:00 CET for the following two months. For parties exceeding 6, our private salons offer personalized tasting curation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Live Reservation Module */}
          <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-xl border border-[#d0c4be]/40 shadow-sm">
            <div className="flex items-center justify-between pb-5 mb-6 border-b border-[#d0c4be]/30">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl text-[#1c1c19] font-medium">
                  Main Dining Room & Counter
                </h3>
                <p className="text-xs text-[#4d4540] mt-0.5">
                  Select party size and preferred dining time slot.
                </p>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 bg-[#f0ede9] rounded-full text-[#9a4522] text-[10px] font-mono uppercase tracking-wider font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                <span>Live Inventory</span>
              </div>
            </div>

            {/* Step 1: Party Selection */}
            <div className="mb-6">
              <label className="block text-[11px] font-mono text-[#7e7570] uppercase tracking-wider mb-2 font-medium">
                1. Number of Guests
              </label>
              <div className="grid grid-cols-5 gap-2">
                {['1', '2', '3', '4', '5-6'].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => {
                      setGuests(num);
                      onShowToast(`Updated party size: ${num} guests.`);
                    }}
                    className={`py-2.5 rounded text-sm font-medium transition-colors cursor-pointer ${
                      guests === num
                        ? 'bg-[#1e1b19] text-white font-semibold shadow-xs'
                        : 'border border-[#d0c4be]/70 text-[#1c1c19] hover:border-[#9a4522]'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Date Grid Preview */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label className="text-[11px] font-mono text-[#7e7570] uppercase tracking-wider font-medium">
                  2. Available Dates (November 2025)
                </label>
                <span className="text-[11px] font-mono text-[#9a4522] font-medium">
                  Paris Time (CET)
                </span>
              </div>
              <div className="grid grid-cols-7 gap-2 text-center text-xs">
                <span className="text-[10px] font-mono text-[#7e7570] py-1">Mo</span>
                <span className="text-[10px] font-mono text-[#7e7570] py-1">Tu</span>
                <span className="text-[10px] font-mono text-[#7e7570] py-1">We</span>
                <span className="text-[10px] font-mono text-[#7e7570] py-1">Th</span>
                <span className="text-[10px] font-mono text-[#7e7570] py-1">Fr</span>
                <span className="text-[10px] font-mono text-[#7e7570] py-1">Sa</span>
                <span className="text-[10px] font-mono text-[#7e7570] py-1">Su</span>

                <button type="button" disabled className="py-2 text-[#d0c4be]/50 cursor-not-allowed">
                  10
                </button>
                <button type="button" disabled className="py-2 text-[#d0c4be]/50 cursor-not-allowed">
                  11
                </button>
                {[12, 13, 14, 15, 16].map((day) => (
                  <button
                    key={day}
                    type="button"
                    onClick={() => {
                      setSelectedDay(day);
                      onShowToast(`Seating inventory loaded for Sat, Nov ${day}.`);
                    }}
                    className={`py-2 rounded font-medium transition-all cursor-pointer ${
                      selectedDay === day
                        ? 'bg-[#9a4522] text-white font-semibold shadow-xs'
                        : 'bg-[#f0ede9] text-[#1c1c19] hover:bg-[#ebe8e3]'
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Service Slot Selection */}
            <div className="mb-6">
              <label className="block text-[11px] font-mono text-[#7e7570] uppercase tracking-wider mb-2 font-medium">
                3. Available Seating Times · Nov {selectedDay}, 2025
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <button
                  type="button"
                  onClick={() => setTime('19:00')}
                  className={`py-2 px-3 rounded text-center transition-all cursor-pointer ${
                    time === '19:00'
                      ? 'bg-[#1e1b19] text-white'
                      : 'bg-white border border-[#d0c4be]/60 hover:border-[#9a4522]'
                  }`}
                >
                  <span className="block text-sm font-medium">19:00</span>
                  <span className="text-[10px] text-[#7e7570] font-mono uppercase">2 Left</span>
                </button>

                <button
                  type="button"
                  onClick={() => setTime('19:30')}
                  className={`py-2 px-3 rounded text-center transition-all cursor-pointer ${
                    time === '19:30'
                      ? 'bg-[#1e1b19] text-white'
                      : 'bg-white border border-[#d0c4be]/60 hover:border-[#9a4522]'
                  }`}
                >
                  <span className="block text-sm font-medium">19:30</span>
                  <span className="text-[10px] text-[#ffb59a] font-mono uppercase">Selected</span>
                </button>

                <button
                  type="button"
                  onClick={() => setTime('20:15')}
                  className={`py-2 px-3 rounded text-center transition-all cursor-pointer ${
                    time === '20:15'
                      ? 'bg-[#1e1b19] text-white'
                      : 'bg-white border border-[#d0c4be]/60 hover:border-[#9a4522]'
                  }`}
                >
                  <span className="block text-sm font-medium">20:15</span>
                  <span className="text-[10px] text-[#9a4522] font-mono uppercase font-semibold">1 Left</span>
                </button>

                <button
                  type="button"
                  onClick={() => onShowToast('Seating 21:00 is fully committed. Added to priority waitlist.', 'info')}
                  className="py-2 px-3 rounded text-center bg-white border border-[#d0c4be]/30 opacity-45 cursor-not-allowed"
                >
                  <span className="block text-sm font-medium text-[#7e7570]">21:00</span>
                  <span className="text-[10px] text-[#ba1a1a] font-mono uppercase">Full</span>
                </button>
              </div>
            </div>

            {/* Guest Contact Input Form */}
            <form onSubmit={handleFormSubmit} className="space-y-4 pt-4 border-t border-[#d0c4be]/30">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono text-[#7e7570] uppercase tracking-wider mb-1 font-medium">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Lord / Lady / Dr. Name"
                    className="w-full bg-[#fcf9f4] border border-[#d0c4be]/70 rounded px-3 py-2 text-sm text-[#1c1c19] focus:border-[#9a4522] focus:ring-1 focus:ring-[#9a4522] outline-hidden"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-[#7e7570] uppercase tracking-wider mb-1 font-medium">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="concierge@domain.com"
                    className="w-full bg-[#fcf9f4] border border-[#d0c4be]/70 rounded px-3 py-2 text-sm text-[#1c1c19] focus:border-[#9a4522] focus:ring-1 focus:ring-[#9a4522] outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-[#7e7570] uppercase tracking-wider mb-1 font-medium">
                  Dietary Requirements & Occasion
                </label>
                <input
                  type="text"
                  value={dietaryNotes}
                  onChange={(e) => setDietaryNotes(e.target.value)}
                  placeholder="E.g., Shellfish allergy, wedding anniversary celebration"
                  className="w-full bg-[#fcf9f4] border border-[#d0c4be]/70 rounded px-3 py-2 text-sm text-[#1c1c19] focus:border-[#9a4522] focus:ring-1 focus:ring-[#9a4522] outline-hidden"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-[#1e1b19] text-white hover:bg-[#9a4522] text-xs font-semibold uppercase tracking-wider rounded transition-colors duration-200 shadow-xs flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    <span>Acquiring Distributed Table Mutex...</span>
                  </>
                ) : (
                  <>
                    <span>Confirm Reservation with Card Guarantee (€{depositTotal}/seat)</span>
                    <span className="material-symbols-outlined text-[16px]">lock</span>
                  </>
                )}
              </button>

              <p className="text-center text-xs text-[#7e7570]">
                No charge will occur today. Cancellations honored up to 48 hours prior to service.
              </p>
            </form>
          </div>

          {/* Private Salons & Cellar Tasting Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#f0ede9] p-6 md:p-8 rounded-xl border border-[#d0c4be]/40">
              <span className="text-[11px] font-mono text-[#9a4522] uppercase tracking-widest block mb-2 font-medium">
                Salon Privé Céleste
              </span>
              <h3 className="font-serif text-2xl text-[#1c1c19] mb-3 font-medium">
                Intimate Dining for 8 to 16 Guests
              </h3>
              <p className="text-xs sm:text-sm text-[#4d4540] mb-5 leading-relaxed">
                Nestled behind the historic wine library, Salon Céleste features a private fireplace, bespoke acoustic tuning, and dedicated sommelier service for corporate celebrations and family milestones.
              </p>
              <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-[#4d4540]">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#9a4522] text-base">check_circle</span>
                  <span>Custom bespoke 9-course menu crafted with Chef Antoine</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#9a4522] text-base">check_circle</span>
                  <span>Access to rare cellar magnums not featured on the general ledger</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#9a4522] text-base">check_circle</span>
                  <span>Dedicated private kitchen entrance and concierge reception</span>
                </li>
              </ul>
              <button
                type="button"
                onClick={onOpenPrivateDining}
                className="w-full text-center text-xs uppercase tracking-wider py-2.5 px-4 border border-[#1c1c19] hover:bg-white transition-colors rounded cursor-pointer font-semibold"
              >
                Download Private Salon Dossier (PDF) & Inquire
              </button>
            </div>

            {/* Sommelier's Vault Tasting */}
            <div
              onClick={onOpenCellar}
              className="bg-white p-6 rounded-xl border border-[#d0c4be]/40 shadow-xs flex items-start gap-4 cursor-pointer hover:border-[#9a4522] transition-colors group"
            >
              <span className="material-symbols-outlined text-3xl text-[#9a4522] group-hover:scale-110 transition-transform">
                wine_bar
              </span>
              <div>
                <h4 className="font-serif text-lg text-[#1c1c19] font-medium flex items-center gap-1.5">
                  <span>The Sommelier's Vault Tasting</span>
                  <span className="material-symbols-outlined text-sm text-[#9a4522]">open_in_new</span>
                </h4>
                <p className="text-xs text-[#4d4540] mt-1 leading-relaxed">
                  Join Chef Sommelier Éléonore Vasseur in the vaulted 17th-century cellar at 18:00 before your dinner service for a blind tasting of three pre-phylloxera vintages.
                </p>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#9a4522] mt-2 inline-block font-semibold">
                  Limited to 6 guests nightly · Click to view ledger
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
