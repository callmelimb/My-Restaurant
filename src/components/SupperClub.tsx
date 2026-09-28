import React, { useState } from 'react';

interface SupperClubProps {
  onSubscribe: (email: string) => void;
}

export const SupperClub: React.FC<SupperClubProps> = ({ onSubscribe }) => {
  const [email, setEmail] = useState('');
  const [isJoined, setIsJoined] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsJoined(true);
      onSubscribe(email);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#fcf9f4] border-t border-[#d0c4be]/30" id="inquiry">
      <div className="max-w-4xl mx-auto px-5 text-center">
        <span className="material-symbols-outlined text-4xl text-[#9a4522] mb-3">mark_email_read</span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] text-[#1c1c19] font-normal">
          The Private Supper Club
        </h2>
        <p className="text-sm sm:text-base text-[#4d4540] max-w-xl mx-auto mt-2 mb-8 leading-relaxed">
          Subscribers receive 48-hour priority access to seasonal reservation drops, private winemaker collaborations, and harvest dinners in the Perche countryside.
        </p>

        {isJoined ? (
          <div className="p-4 bg-[#f0ede9] rounded-lg border border-[#9a4522]/40 text-[#1c1c19] max-w-md mx-auto shadow-xs">
            <div className="flex items-center justify-center gap-2 text-[#9a4522] font-medium text-sm">
              <span className="material-symbols-outlined">verified</span>
              <span>Welcome to the inner circle. Your invitation dossier has been dispatched to {email}.</span>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your personal email"
              className="flex-1 bg-white border border-[#d0c4be]/70 rounded px-4 py-3 text-sm text-[#1c1c19] focus:border-[#9a4522] focus:ring-1 focus:ring-[#9a4522] outline-hidden shadow-xs"
            />
            <button
              type="submit"
              className="bg-[#1e1b19] text-white hover:bg-[#9a4522] text-xs uppercase tracking-wider font-semibold px-6 py-3 rounded transition-colors shadow-xs cursor-pointer"
            >
              Join Circle
            </button>
          </form>
        )}

        <p className="text-xs text-[#7e7570] mt-3">Discreet frequency. No advertising. Unsubscribe at your pleasure.</p>
      </div>
    </section>
  );
};
