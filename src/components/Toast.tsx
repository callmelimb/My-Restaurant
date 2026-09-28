import React from 'react';

export interface ToastItem {
  id: string;
  message: string;
  type: 'info' | 'success' | 'error';
}

interface ToastContainerProps {
  toasts: ToastItem[];
  onDismiss: (id: string) => void;
}

export const ToastContainer: React.FC<ToastContainerProps> = ({ toasts, onDismiss }) => {
  return (
    <div className="fixed top-20 right-5 z-[130] flex flex-col gap-2.5 pointer-events-none max-w-sm w-full">
      {toasts.map((toast) => {
        let icon = 'info';
        let bgClass = 'bg-[#1e1b19] border-[#4a4643] text-white';

        if (toast.type === 'success') {
          icon = 'check_circle';
          bgClass = 'bg-[#1e1b19] border-emerald-700/60 text-white';
        } else if (toast.type === 'error') {
          icon = 'error';
          bgClass = 'bg-[#2f1500] border-[#ba1a1a]/60 text-white';
        }

        return (
          <div
            key={toast.id}
            className={`p-3.5 rounded-xl shadow-xl border flex items-center gap-3 text-xs font-sans pointer-events-auto transition-all animate-fade-in ${bgClass}`}
          >
            <span className="material-symbols-outlined text-[#ffb59a] text-lg shrink-0">
              {icon}
            </span>
            <span className="flex-1 leading-snug">{toast.message}</span>
            <button
              onClick={() => onDismiss(toast.id)}
              className="text-[#7e7570] hover:text-white text-base leading-none p-1 cursor-pointer"
            >
              &times;
            </button>
          </div>
        );
      })}
    </div>
  );
};
