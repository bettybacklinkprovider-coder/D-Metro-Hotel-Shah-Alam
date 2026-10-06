import React from 'react';
import { Phone, MapPin, Mail, MessageCircle, ChevronRight, Shield, Award } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';
import { NavigationPage } from './Header';

interface FooterProps {
  onNavigate: (page: NavigationPage) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <footer className="bg-[#07030d] border-t border-amber-500/20 text-zinc-300 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-amber-500/15">
          
          {/* Column 1: Brand & Overview */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif-luxury font-bold text-gold-gradient">
              D'METRO HOTEL
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Shah Alam's premier luxury boutique accommodation. Combining modern dark elegance with royal Malaysian hospitality at Seksyen 19.
            </p>
            <div className="pt-2 flex items-center space-x-3 text-xs text-amber-300/80">
              <span className="flex items-center gap-1 bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/20">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                Shah Alam Premier Stay
              </span>
              <span className="flex items-center gap-1 bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/20">
                <Shield className="w-3.5 h-3.5 text-amber-400" />
                Verified Comfort
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wider text-amber-200 uppercase font-serif-luxury">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { id: 'home' as NavigationPage, label: 'Home Page' },
                { id: 'rooms' as NavigationPage, label: 'Rooms & Suites' },
                { id: 'facilities' as NavigationPage, label: 'Hotel Facilities' },
                { id: 'contact' as NavigationPage, label: 'Contact & Location' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      onNavigate(item.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="group inline-flex items-center text-zinc-400 hover:text-amber-300 transition-colors"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity mr-1" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wider text-amber-200 uppercase font-serif-luxury">
              Contact Information
            </h4>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                <span>{HOTEL_INFO.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${HOTEL_INFO.phone}`} className="hover:text-amber-300 tabular-nums">
                  {HOTEL_INFO.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${HOTEL_INFO.email}`} className="hover:text-amber-300">
                  {HOTEL_INFO.email}
                </a>
              </li>
              <li className="pt-1">
                <a
                  href={`https://wa.me/${HOTEL_INFO.whatsappPhone}?text=Hello%20D'Metro%20Hotel,%20I%20would%20like%20to%20inquire%20about%20a%20room%20reservation.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-xs font-semibold px-3 py-2 bg-emerald-900/40 text-emerald-300 border border-emerald-500/30 rounded-lg hover:bg-emerald-900/60 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp Reservation Line</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Reservation */}
          <div className="space-y-4 bg-amber-500/5 p-5 rounded-xl border border-amber-500/20">
            <h4 className="text-sm font-semibold tracking-wider text-amber-200 uppercase font-serif-luxury">
              Direct Reservation
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Book directly with D'Metro Hotel for guaranteed best room rates, flexible check-in, and complimentary Wi-Fi.
            </p>
            <button
              onClick={onOpenBooking}
              className="w-full py-2.5 px-4 text-xs font-bold tracking-wider text-slate-950 bg-gold-gradient rounded-lg hover:opacity-95 transition-opacity shadow-[0_0_15px_rgba(212,175,55,0.2)]"
            >
              RESERVE A ROOM NOW
            </button>
            <p className="text-[11px] text-zinc-500 text-center">
              Check-in: {HOTEL_INFO.checkIn} · Check-out: {HOTEL_INFO.checkOut}
            </p>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>© {new Date().getFullYear()} D'Metro Hotel Shah Alam. All rights reserved.</p>
          <div className="flex items-center space-x-6 text-zinc-400">
            <span>Shah Alam, Selangor</span>
            <span>·</span>
            <span>Malaysia</span>
            <span>·</span>
            <span className="text-amber-400 font-medium">Currency: MYR / RM</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
