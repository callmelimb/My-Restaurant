import React from 'react';

interface ArchitectureBlueprintProps {
  onOpenDashboard: () => void;
}

export const ArchitectureBlueprint: React.FC<ArchitectureBlueprintProps> = ({ onOpenDashboard }) => {
  return (
    <section className="py-20 md:py-28 bg-[#1e1b19] text-[#f3f0eb] border-t border-[#7e7570]/30" id="architecture">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 pb-8 border-b border-[#4a4643]">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#2f1500] rounded-full text-[#ffb59a] text-[11px] font-mono uppercase tracking-widest mb-3 border border-[#6e3900]">
              <span className="material-symbols-outlined text-xs">terminal</span>
              Architectural Blueprint & Spec
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-normal tracking-tight text-white">
              The Digital Gastronomy Engine
            </h2>
            <p className="text-base text-[#ccc5c2] mt-3 leading-relaxed">
              Engineered for zero-latency reservation throughput, sub-second TTFB, automated seat optimization algorithms, and bank-grade deposit orchestration.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <span className="px-3 py-1.5 bg-[#31302d] rounded text-xs font-mono text-[#ffb59a] border border-[#7e7570]">
              v4.2.0-STABLE
            </span>
            <span className="px-3 py-1.5 bg-[#31302d] rounded text-xs font-mono text-[#ccc5c2] border border-[#7e7570]">
              ACID-Compliant
            </span>
            <button
              onClick={onOpenDashboard}
              className="px-4 py-2 bg-[#9a4522] hover:bg-[#c76c00] text-white rounded text-xs font-mono uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm"
            >
              <span className="material-symbols-outlined text-base">monitoring</span>
              <span>Open Live Telemetry</span>
            </button>
          </div>
        </div>

        {/* Architecture Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14">
          {/* Frontend Ecosystem Column */}
          <div className="lg:col-span-6 bg-[#31302d]/70 backdrop-blur rounded-xl p-6 sm:p-8 border border-[#7e7570]/40 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#ffb59a]">
                  Frontend Ecosystem
                </span>
                <span className="material-symbols-outlined text-[#ffb59a]">devices</span>
              </div>
              <h3 className="font-serif text-2xl text-white mb-3">
                Next.js 15 (React 19) + Tailwind CSS + Framer Motion
              </h3>
              <p className="text-sm text-[#ccc5c2] leading-relaxed mb-6">
                Leveraging React Server Components (RSC) to stream high-resolution food assets without JavaScript bloat. Core Web Vitals tuned for 99+ Lighthouse metrics, instant internationalization, dynamic Open Graph menu generation, and accessible booking widgets.
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-[#1e1b19] rounded-lg border border-[#4a4643] text-sm">
                  <span className="text-[#ffb59a] font-mono font-medium block">
                    Turbopack & Incremental Static Regeneration (ISR)
                  </span>
                  <span className="text-[#888380] text-xs">
                    Allows instant menu revisions by the sommelier team without full site rebuilds.
                  </span>
                </div>
                <div className="p-3 bg-[#1e1b19] rounded-lg border border-[#4a4643] text-sm">
                  <span className="text-[#ffb59a] font-mono font-medium block">
                    Alternative Profile: Astro 4.0 or SvelteKit
                  </span>
                  <span className="text-[#888380] text-xs">
                    Zero-JS footprint by default for high-speed storytelling and archive pages.
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#4a4643] flex flex-wrap gap-2">
              <span className="px-2.5 py-1 bg-[#1e1b19] rounded text-[11px] font-mono text-[#ccc5c2]">
                React 19 Server Actions
              </span>
              <span className="px-2.5 py-1 bg-[#1e1b19] rounded text-[11px] font-mono text-[#ccc5c2]">
                Tailwind CSS JIT
              </span>
              <span className="px-2.5 py-1 bg-[#1e1b19] rounded text-[11px] font-mono text-[#ccc5c2]">
                Framer Transitions
              </span>
              <span className="px-2.5 py-1 bg-[#1e1b19] rounded text-[11px] font-mono text-[#ccc5c2]">
                Edge Middleware
              </span>
            </div>
          </div>

          {/* Backend & High Concurrency Column */}
          <div className="lg:col-span-6 bg-[#31302d]/70 backdrop-blur rounded-xl p-6 sm:p-8 border border-[#7e7570]/40 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#ffb59a]">
                  Backend & High Concurrency
                </span>
                <span className="material-symbols-outlined text-[#ffb59a]">dns</span>
              </div>
              <h3 className="font-serif text-2xl text-white mb-3">
                NestJS / Fastify + Go Lock Engine
              </h3>
              <p className="text-sm text-[#ccc5c2] leading-relaxed mb-6">
                When monthly reservations drop, thousands of concurrent requests attempt to reserve limited covers simultaneously. A dedicated Go microservice handles distributed atomic table locks in microseconds before routing to transactional payment layers.
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-[#1e1b19] rounded-lg border border-[#4a4643] text-sm">
                  <span className="text-[#ffb59a] font-mono font-medium block">
                    PostgreSQL + Prisma / Supabase
                  </span>
                  <span className="text-[#888380] text-xs">
                    Strict ACID compliance ensuring duplicate seat reservations are mathematically impossible.
                  </span>
                </div>
                <div className="p-3 bg-[#1e1b19] rounded-lg border border-[#4a4643] text-sm">
                  <span className="text-[#ffb59a] font-mono font-medium block">
                    Python FastAPI / Celery Service
                  </span>
                  <span className="text-[#888380] text-xs">
                    Predictive table-turn optimization, guest dietary profiling, and sommelier stock alerts.
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#4a4643] flex flex-wrap gap-2">
              <span className="px-2.5 py-1 bg-[#1e1b19] rounded text-[11px] font-mono text-[#ccc5c2]">
                Redis Distributed Locks
              </span>
              <span className="px-2.5 py-1 bg-[#1e1b19] rounded text-[11px] font-mono text-[#ccc5c2]">
                Stripe SetupIntents
              </span>
              <span className="px-2.5 py-1 bg-[#1e1b19] rounded text-[11px] font-mono text-[#ccc5c2]">
                Resy & OpenTable Webhooks
              </span>
            </div>
          </div>
        </div>

        {/* Distributed Reservation Lifecycle Flow */}
        <div className="bg-[#1e1b19] rounded-xl p-6 md:p-8 border border-[#4a4643]">
          <h4 className="font-serif text-lg sm:text-xl text-white mb-5 flex items-center gap-2">
            <span className="material-symbols-outlined text-[#ffb59a]">sync_alt</span>
            <span>Distributed Reservation Lifecycle Flow</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-[#31302d] rounded-lg border border-[#4a4643]">
              <span className="text-xs font-mono text-[#ffb59a] block mb-1">01. INGESTION</span>
              <p className="text-sm text-white font-medium">Edge Request Validate</p>
              <p className="text-xs text-[#888380] mt-1 leading-relaxed">
                Next.js Edge middleware validates session signature and checks bot rate-limiting.
              </p>
            </div>
            <div className="p-4 bg-[#31302d] rounded-lg border border-[#4a4643]">
              <span className="text-xs font-mono text-[#ffb59a] block mb-1">02. SEAT MUTEX</span>
              <p className="text-sm text-white font-medium">Redis TTL Lock (300s)</p>
              <p className="text-xs text-[#888380] mt-1 leading-relaxed">
                Table mutex acquired in Redis cluster with a 5-minute hold for patron card authorization.
              </p>
            </div>
            <div className="p-4 bg-[#31302d] rounded-lg border border-[#4a4643]">
              <span className="text-xs font-mono text-[#ffb59a] block mb-1">03. GUARANTEE</span>
              <p className="text-sm text-white font-medium">Stripe PaymentIntent</p>
              <p className="text-xs text-[#888380] mt-1 leading-relaxed">
                Pre-authorization token captured; idempotency key ensures zero duplicate billing events.
              </p>
            </div>
            <div className="p-4 bg-[#31302d] rounded-lg border border-[#4a4643]">
              <span className="text-xs font-mono text-[#ffb59a] block mb-1">04. PERSISTENCE</span>
              <p className="text-sm text-white font-medium">Postgres ACID Commit</p>
              <p className="text-xs text-[#888380] mt-1 leading-relaxed">
                Transaction committed in PostgreSQL; Webhook fires confirmation SMS via Twilio & POS ledger.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
