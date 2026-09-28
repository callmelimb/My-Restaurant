import React from 'react';
import { ReservationPayload } from '../types';

interface BookingConfirmModalProps {
  reservation: ReservationPayload | null;
  onClose: () => void;
}

export const BookingConfirmModal: React.FC<BookingConfirmModalProps> = ({
  reservation,
  onClose
}) => {
  if (!reservation) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs">
      <div className="bg-white max-w-lg w-full rounded-2xl border border-[#d0c4be]/60 shadow-2xl p-6 sm:p-8 relative text-center">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#4d4540] hover:text-[#1c1c19] p-1 rounded-full hover:bg-[#f0ede9] cursor-pointer transition-colors"
          aria-label="Close dialog"
        >
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>

        <div className="w-16 h-16 bg-[#ffdbce] text-[#370e00] rounded-full flex items-center justify-center mx-auto mb-4 shadow-xs">
          <span className="material-symbols-outlined text-3xl text-[#9a4522]">check</span>
        </div>

        <span className="text-[11px] font-mono text-[#9a4522] uppercase tracking-widest block mb-1 font-semibold">
          Reservation Confirmed · ACID Persisted
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl text-[#1c1c19] font-normal mb-2">
          We Await Your Presence
        </h3>
        <p className="text-xs sm:text-sm text-[#4d4540] mb-6 leading-relaxed">
          A formal confirmation dossier with service details and dietary profile has been dispatched to {reservation.email}.
        </p>

        <div className="bg-[#f6f3ee] p-4 rounded-xl text-left space-y-2.5 mb-6 text-xs sm:text-sm border border-[#d0c4be]/40">
          <div className="flex justify-between">
            <span className="text-[#7e7570] font-mono text-xs">Patron:</span>
            <span className="font-medium text-[#1c1c19]">{reservation.fullName}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#7e7570] font-mono text-xs">Date & Time:</span>
            <span className="font-medium text-[#1c1c19]">{reservation.date} at {reservation.time} CET</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#7e7570] font-mono text-xs">Guests:</span>
            <span className="font-medium text-[#1c1c19]">{reservation.guests} Epicures</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#7e7570] font-mono text-xs">Experience:</span>
            <span className="font-medium text-[#9a4522]">{reservation.experience}</span>
          </div>
          <div className="flex justify-between pt-2 border-t border-[#d0c4be]/40">
            <span className="text-[#7e7570] font-mono text-xs">Deposit Guarantee:</span>
            <span className="font-medium text-emerald-800 font-mono">
              Card Authorized (€{reservation.depositAmount})
            </span>
          </div>
          <div className="flex justify-between pt-1">
            <span className="text-[#7e7570] font-mono text-[10px]">PostgreSQL Commit:</span>
            <span className="text-[10px] font-mono text-[#7e7570]">
              {reservation.transactionHash}
            </span>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full bg-[#1e1b19] text-white hover:bg-[#9a4522] text-xs uppercase tracking-wider font-semibold py-3 rounded transition-colors cursor-pointer shadow-xs"
        >
          Return to Atelier
        </button>
      </div>
    </div>
  );
};
