import React from 'react';

interface StoryProvenanceProps {
  onPartnerClick: (partnerName: string, detail: string) => void;
}

export const StoryProvenance: React.FC<StoryProvenanceProps> = ({ onPartnerClick }) => {
  return (
    <section className="py-20 md:py-28 bg-[#f6f3ee] border-y border-[#d0c4be]/30" id="story">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Imagery Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 rounded-xl overflow-hidden border border-[#d0c4be]/40 shadow-xl aspect-4/5">
              <img
                className="w-full h-full object-cover"
                alt="Black and white editorial portrait of Chef Antoine Moreau in a minimalist French chef tunic inspecting freshly harvested heritage heirloom vegetables"
                referrerPolicy="no-referrer"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEDDNOWRdEH-SPl_o4AtDcJKlLBq4R1tq3LuvIPKsqRIBXdj8nl1CDCiF-GluRI5gNeE8G_2HR7vKIuOUWE3-FSQ4g8DraPMlEa1yNqwZP2d0iEOtAaR57h7HehZuIHDNJi2cuJoZl3st2bH2EoBgbzJhQRV43vTbpiYd9T7m-dV_Ysp3EFIVFxKjQfQTEIVcfvbkvMKd0O-oOpDZEZU_3X74rN-05dbP-dFn-PQzfILRdzCGG-Mgl7A"
              />
            </div>
            {/* Overlay Quote Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl border border-[#d0c4be]/40 shadow-lg hidden sm:block max-w-xs z-20">
              <p className="font-serif italic text-sm text-[#1c1c19] leading-snug">
                "We do not invent flavors. We listen to the soil and give voice to what has ripened."
              </p>
              <p className="text-[10px] font-mono uppercase tracking-widest text-[#9a4522] mt-2 font-medium">
                — Antoine Moreau, Chef Patron
              </p>
            </div>
          </div>

          {/* Narrative Column */}
          <div className="lg:col-span-7 lg:pl-6">
            <span className="text-[11px] font-mono text-[#9a4522] uppercase tracking-widest block mb-3 font-medium">
              Philosophie & Provenance
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] text-[#1c1c19] font-normal tracking-tight mb-6 leading-tight">
              A Living Dialogue with the Soil & Ocean
            </h2>
            <p className="text-base sm:text-lg text-[#4d4540] leading-relaxed mb-6 font-normal">
              Founded in 2018 in the historic Marais district, L'Étoile Atelier operates as both a sanctuary of high French technique and an experimental laboratory for regenerative agriculture.
            </p>
            <p className="text-sm sm:text-base text-[#4d4540] leading-relaxed mb-8">
              Every day begins at 04:30 at Rungis and coastal auctions in Concarneau. By cultivating exclusive partnerships with 24 heirloom growers, biodynamic beekeepers, and artisanal affineurs, our cellar and kitchen eliminate industrial intermediaries entirely.
            </p>

            {/* Supplier Provenance Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#d0c4be]/30">
              <div
                onClick={() =>
                  onPartnerClick(
                    'Ferme du Perche',
                    'Ferme du Perche delivers 62 organic heirloom vegetables harvested before dawn in Normandy soil.'
                  )
                }
                className="p-4 bg-white rounded-lg border border-[#d0c4be]/30 hover:border-[#9a4522] transition-colors cursor-pointer group shadow-xs"
              >
                <span className="material-symbols-outlined text-[#9a4522] text-2xl mb-1 group-hover:scale-110 transition-transform">
                  spa
                </span>
                <h4 className="font-serif text-base text-[#1c1c19] font-medium">Ferme du Perche</h4>
                <p className="text-xs text-[#4d4540] mt-1">Heritage brassicas, rare micro-herbs, and heirloom squash.</p>
              </div>

              <div
                onClick={() =>
                  onPartnerClick(
                    'Bateaux de Roscoff',
                    'Bateaux de Roscoff provides line-caught sea bass, live Breton scallops, and wild hand-cut kelp.'
                  )
                }
                className="p-4 bg-white rounded-lg border border-[#d0c4be]/30 hover:border-[#9a4522] transition-colors cursor-pointer group shadow-xs"
              >
                <span className="material-symbols-outlined text-[#9a4522] text-2xl mb-1 group-hover:scale-110 transition-transform">
                  sailing
                </span>
                <h4 className="font-serif text-base text-[#1c1c19] font-medium">Bateaux de Roscoff</h4>
                <p className="text-xs text-[#4d4540] mt-1">Line-caught sea bass, scallops, and wild kelp harvested by hand.</p>
              </div>

              <div
                onClick={() =>
                  onPartnerClick(
                    'Maison Bordier',
                    'Maison Bordier butter is traditionally kneaded in Saint-Malo with Brittany fleur de sel.'
                  )
                }
                className="p-4 bg-white rounded-lg border border-[#d0c4be]/30 hover:border-[#9a4522] transition-colors cursor-pointer group shadow-xs"
              >
                <span className="material-symbols-outlined text-[#9a4522] text-2xl mb-1 group-hover:scale-110 transition-transform">
                  wine_bar
                </span>
                <h4 className="font-serif text-base text-[#1c1c19] font-medium">Maison Bordier</h4>
                <p className="text-xs text-[#4d4540] mt-1">Silky wooden-paddle butter and raw milk mountain cheeses.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
