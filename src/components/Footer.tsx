import React from 'react';

interface FooterProps {
  onOpenCellar: () => void;
  onOpenPrivateDining: () => void;
  onShowToast: (msg: string, type?: 'info' | 'success') => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenCellar,
  onOpenPrivateDining,
  onShowToast
}) => {
  return (
    <footer className="w-full bg-[#f6f3ee] border-t border-[#d0c4be]/30 transition-colors">
      <div className="w-full px-5 md:px-8 lg:px-12 py-16 max-w-7xl mx-auto">
        {/* Upper Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand & Identity */}
          <div>
            <a href="#" className="font-serif text-2xl text-[#1c1c19] tracking-tight block mb-3 font-semibold">
              L'Étoile Atelier
            </a>
            <p className="text-xs sm:text-sm text-[#4d4540] leading-relaxed mb-4">
              Contemporary French Gastronomy rooted in the sacred provenance of land and ocean. Relais & Châteaux property.
            </p>
            <div className="text-xs sm:text-sm text-[#4d4540] space-y-0.5">
              <p>18 Rue des Francs-Bourgeois</p>
              <p>75004 Paris, France</p>
              <p className="mt-2 text-[#9a4522] font-medium">+33 (0)1 42 77 88 99</p>
            </div>
          </div>

          {/* Hours of Service */}
          <div>
            <h4 className="font-serif text-lg text-[#1c1c19] mb-3 font-medium">Hours of Service</h4>
            <ul className="text-xs sm:text-sm text-[#4d4540] space-y-2">
              <li className="flex justify-between">
                <span>Wednesday – Sunday</span>
                <span className="font-medium text-[#1c1c19]">19:00 – 23:30</span>
              </li>
              <li className="flex justify-between">
                <span>Friday – Sunday Lunch</span>
                <span className="font-medium text-[#1c1c19]">12:00 – 15:00</span>
              </li>
              <li className="flex justify-between text-[#7e7570]">
                <span>Monday & Tuesday</span>
                <span>Cellar & Farm Rest</span>
              </li>
            </ul>
            <p className="text-[11px] font-mono uppercase tracking-wider text-[#7e7570] mt-4">
              Valet parking available at Rue Pavée.
            </p>
          </div>

          {/* Atmosphere & Code */}
          <div>
            <h4 className="font-serif text-lg text-[#1c1c19] mb-3 font-medium">Atmosphere & Code</h4>
            <p className="text-xs sm:text-sm text-[#4d4540] leading-relaxed mb-2">
              We celebrate an unhurried, multisensory experience. Smart elegant dress requested (jackets encouraged for gentlemen; athletic footwear politely declined).
            </p>
            <p className="text-xs sm:text-sm text-[#4d4540]">
              Cellar Sommelier Consultations: <br />
              <button
                onClick={onOpenCellar}
                className="text-[#9a4522] hover:underline cursor-pointer text-left"
              >
                sommelier@letoile-atelier.fr
              </button>
            </p>
          </div>

          {/* Navigation Ledger */}
          <div>
            <h4 className="font-serif text-lg text-[#1c1c19] mb-3 font-medium">Navigation Ledger</h4>
            <ul className="grid grid-cols-1 gap-2 text-[11px] font-mono uppercase tracking-widest text-[#4d4540]">
              <li>
                <a href="#story" className="hover:text-[#9a4522] transition-colors">
                  Philosophy & Provenance
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#9a4522] transition-colors">
                  Tasting Menus
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenCellar}
                  className="hover:text-[#9a4522] uppercase tracking-widest text-left transition-colors cursor-pointer font-mono text-[11px]"
                >
                  Wine Reserve (1,840 Vintages)
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenPrivateDining}
                  className="hover:text-[#9a4522] uppercase tracking-widest text-left transition-colors cursor-pointer font-mono text-[11px]"
                >
                  Private Events & Salon
                </button>
              </li>
              <li>
                <button
                  onClick={() => onShowToast('Press Kit 2025: L\'Étoile Atelier awarded 2 Michelin Stars & Relais Châteaux.')}
                  className="hover:text-[#9a4522] uppercase tracking-widest text-left transition-colors cursor-pointer font-mono text-[11px]"
                >
                  Press & Accolades
                </button>
              </li>
              <li>
                <button
                  onClick={() => onShowToast('GDPR Compliant: All reservation data stored in ISO 27001 Parisian centers.')}
                  className="hover:text-[#9a4522] uppercase tracking-widest text-left transition-colors cursor-pointer font-mono text-[11px]"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onShowToast('Step-free access & hearing loop available in all dining salons.')}
                  className="hover:text-[#9a4522] uppercase tracking-widest text-left transition-colors cursor-pointer font-mono text-[11px]"
                >
                  Accessibility
                </button>
              </li>
              <li>
                <button
                  onClick={() => onShowToast('Stage & Sommelier positions opening Autumn 2025. Contact careers@letoile-atelier.fr')}
                  className="hover:text-[#9a4522] uppercase tracking-widest text-left transition-colors cursor-pointer font-mono text-[11px]"
                >
                  Careers
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Hairline Delimiter */}
        <div className="w-full h-px bg-[#d0c4be]/40 my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="text-xs text-[#7e7570]">
            © 2025 L'Étoile Atelier. All Rights Reserved. Crafted for Discerning Epicures.
          </p>
          <div className="flex items-center space-x-6 text-[#4d4540] text-xs font-mono uppercase tracking-wider">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              <span>Kitchen Active</span>
            </span>
            <button
              onClick={() => onShowToast('Dispatched Press Kit download link to your clipboard.', 'success')}
              className="hover:text-[#9a4522] transition-colors cursor-pointer"
            >
              Press Kit
            </button>
            <button
              onClick={() => onShowToast('Guide Michelin 2025: Two Stars awarded for exceptional cuisine.')}
              className="hover:text-[#9a4522] transition-colors cursor-pointer"
            >
              Michelin Guide Hub
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
