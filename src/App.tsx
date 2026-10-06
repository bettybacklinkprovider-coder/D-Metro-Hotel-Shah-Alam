import React, { useState, useEffect } from 'react';
import { Header, NavigationPage } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { RoomsPage } from './pages/RoomsPage';
import { FacilitiesPage } from './pages/FacilitiesPage';
import { ContactPage } from './pages/ContactPage';
import { BookingModal } from './components/BookingModal';
import { RoomDetailModal } from './components/RoomDetailModal';
import { ROOMS_DATA, Room } from './data/hotelData';

export default function App() {
  // Navigation state synced with URL hash for true multi-page experience
  const [currentPage, setCurrentPage] = useState<NavigationPage>(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash === 'rooms' || hash === 'facilities' || hash === 'contact') {
      return hash as NavigationPage;
    }
    return 'home';
  });

  // Modal states
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingRoomId, setBookingRoomId] = useState<string | null>(null);
  const [detailRoom, setDetailRoom] = useState<Room | null>(null);

  // Sync route changes with URL hash
  const navigateTo = (page: NavigationPage) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'rooms' || hash === 'facilities' || hash === 'contact') {
        setCurrentPage(hash as NavigationPage);
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleOpenBooking = (roomId?: string) => {
    if (roomId) {
      setBookingRoomId(roomId);
    } else {
      setBookingRoomId(null);
    }
    setIsBookingModalOpen(true);
  };

  const handleOpenRoomDetail = (roomId: string) => {
    const found = ROOMS_DATA.find((r) => r.id === roomId);
    if (found) {
      setDetailRoom(found);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0612] text-[#f3ebd7] flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200">
      
      {/* Header Navigation */}
      <Header
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main Page Body */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onOpenBooking={handleOpenBooking}
            onOpenRoomDetail={handleOpenRoomDetail}
          />
        )}

        {currentPage === 'rooms' && (
          <RoomsPage
            onOpenBooking={handleOpenBooking}
            onOpenRoomDetail={handleOpenRoomDetail}
          />
        )}

        {currentPage === 'facilities' && (
          <FacilitiesPage
            onOpenBooking={() => handleOpenBooking()}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onOpenBooking={() => handleOpenBooking()}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Booking Engine Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        selectedRoomId={bookingRoomId}
      />

      {/* Room Detail Modal */}
      <RoomDetailModal
        room={detailRoom}
        onClose={() => setDetailRoom(null)}
        onBookNow={(roomId) => handleOpenBooking(roomId)}
      />

    </div>
  );
}
