/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TastingMenu } from './components/TastingMenu';
import { StoryProvenance } from './components/StoryProvenance';
import { ReservationSection } from './components/ReservationSection';
import { ArchitectureBlueprint } from './components/ArchitectureBlueprint';
import { SupperClub } from './components/SupperClub';
import { Footer } from './components/Footer';
import { PrivateDiningModal } from './components/PrivateDiningModal';
import { CellarModal } from './components/CellarModal';
import { BookingConfirmModal } from './components/BookingConfirmModal';
import { EngineDashboard } from './components/EngineDashboard';
import { ToastContainer, ToastItem } from './components/Toast';
import { ReservationPayload } from './types';

export default function App() {
  const [activeMenuTab, setActiveMenuTab] = useState<'odyssee' | 'ephemere' | 'pairings'>('odyssee');
  const [isPrivateDiningOpen, setIsPrivateDiningOpen] = useState(false);
  const [isCellarOpen, setIsCellarOpen] = useState(false);
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [confirmedReservation, setConfirmedReservation] = useState<ReservationPayload | null>(null);

  // Reservation prefill states
  const [prefGuests, setPrefGuests] = useState('2');
  const [prefDate, setPrefDate] = useState('2025-11-15');
  const [prefTime, setPrefTime] = useState('19:30');
  const [prefExperience, setPrefExperience] = useState('L\'Odyssée (8 Courses)');

  // Toasts
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const showToast = (message: string, type: 'info' | 'success' | 'error' = 'info') => {
    const id = `toast-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`;
    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4500);
  };

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleScrollToReservations = () => {
    const el = document.getElementById('reservations');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFindTable = (pref: {
    guests: string;
    date: string;
    time: string;
    experience: string;
  }) => {
    setPrefGuests(pref.guests);
    setPrefDate(pref.date);
    setPrefTime(pref.time);

    if (pref.experience === 'odyssee') {
      setPrefExperience('L\'Odyssée (8 Courses)');
      setActiveMenuTab('odyssee');
    } else if (pref.experience === 'ephemere') {
      setPrefExperience('Saison Éphémère (6 Courses)');
      setActiveMenuTab('ephemere');
    } else if (pref.experience === 'pairings') {
      setPrefExperience('The Sommelier\'s Vault Flight');
      setActiveMenuTab('pairings');
    }

    handleScrollToReservations();
    showToast(
      `Synchronized parameters: ${pref.guests} Guests on ${pref.date} at ${pref.time}.`,
      'info'
    );
  };

  const handleSelectMenuForBooking = (menuTitle: string) => {
    setPrefExperience(menuTitle);
    handleScrollToReservations();
    showToast(`Experience set to: ${menuTitle}.`, 'info');
  };

  const handleReservationSubmit = (payload: ReservationPayload) => {
    setConfirmedReservation(payload);
    showToast(
      `Distributed seat lock acquired for ${payload.fullName}. PostgreSQL ACID commit verified!`,
      'success'
    );
  };

  return (
    <div className="min-h-screen bg-[#fcf9f4] text-[#1c1c19] flex flex-col font-sans selection:bg-[#ffdbce] selection:text-[#370e00]">
      {/* Toast Notification Container */}
      <ToastContainer toasts={toasts} onDismiss={dismissToast} />

      {/* Primary Sticky Header */}
      <Navbar
        onOpenPrivateDining={() => setIsPrivateDiningOpen(true)}
        onOpenCellar={() => setIsCellarOpen(true)}
        onOpenEngineDashboard={() => setIsDashboardOpen(true)}
        onScrollToReservations={handleScrollToReservations}
        isDashboardOpen={isDashboardOpen}
      />

      {/* Main Sections */}
      <main className="flex-1">
        {/* Hero with bento visual and quick-book bar */}
        <Hero
          onOpenCellar={() => setIsCellarOpen(true)}
          onOpenPrivateDining={() => setIsPrivateDiningOpen(true)}
          onFindTable={handleFindTable}
          onSelectExperience={(exp) => setActiveMenuTab(exp)}
        />

        {/* Interactive Degustation Tasting Menu */}
        <TastingMenu
          activeTab={activeMenuTab}
          onTabChange={setActiveMenuTab}
          onOpenCellar={() => setIsCellarOpen(true)}
          onSelectMenuForBooking={handleSelectMenuForBooking}
        />

        {/* Chef's Story & Farm-to-Table Provenance */}
        <StoryProvenance
          onPartnerClick={(name, detail) => showToast(`${name}: ${detail}`, 'info')}
        />

        {/* Interactive Reservation Module */}
        <ReservationSection
          initialGuests={prefGuests}
          initialDate={prefDate}
          initialTime={prefTime}
          initialExperience={prefExperience}
          onOpenPrivateDining={() => setIsPrivateDiningOpen(true)}
          onOpenCellar={() => setIsCellarOpen(true)}
          onSubmitReservation={handleReservationSubmit}
          onShowToast={showToast}
        />

        {/* Digital Gastronomy Engine Architectural Blueprint */}
        <ArchitectureBlueprint onOpenDashboard={() => setIsDashboardOpen(true)} />

        {/* The Private Supper Club Newsletter */}
        <SupperClub
          onSubscribe={(email) =>
            showToast(`Invitation dossier dispatched to ${email}.`, 'success')
          }
        />
      </main>

      {/* Editorial Footer */}
      <Footer
        onOpenCellar={() => setIsCellarOpen(true)}
        onOpenPrivateDining={() => setIsPrivateDiningOpen(true)}
        onShowToast={showToast}
      />

      {/* MODALS */}
      {/* 1. Salon Privé Céleste Modal */}
      <PrivateDiningModal
        isOpen={isPrivateDiningOpen}
        onClose={() => setIsPrivateDiningOpen(false)}
        onShowToast={showToast}
      />

      {/* 2. Sommelier's Ledger Wine Reserve Modal */}
      <CellarModal
        isOpen={isCellarOpen}
        onClose={() => setIsCellarOpen(false)}
        onScrollToReservations={handleScrollToReservations}
        onShowToast={showToast}
      />

      {/* 3. Booking Confirmation Receipt Modal */}
      <BookingConfirmModal
        reservation={confirmedReservation}
        onClose={() => setConfirmedReservation(null)}
      />

      {/* 4. Real-Time Data Visualization & Engine Dashboard (Recharts + Live Mutex Grid) */}
      <EngineDashboard
        isOpen={isDashboardOpen}
        onClose={() => setIsDashboardOpen(false)}
        onShowToast={showToast}
      />
    </div>
  );
}
