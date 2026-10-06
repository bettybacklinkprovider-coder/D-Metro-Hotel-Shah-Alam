import React, { useState } from 'react';
import {
  Wifi,
  Car,
  Clock,
  Sparkles,
  Utensils,
  Briefcase,
  ShieldCheck,
  CheckCircle2,
  Phone,
  MessageCircle,
  HelpCircle,
  ChevronDown
} from 'lucide-react';
import { FACILITIES_DATA, HOTEL_INFO } from '../data/hotelData';

interface FacilitiesPageProps {
  onOpenBooking: () => void;
}

export const FacilitiesPage: React.FC<FacilitiesPageProps> = ({ onOpenBooking }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "What are the check-in and check-out times at D'Metro Hotel?",
      a: `Standard check-in time is from ${HOTEL_INFO.checkIn} onwards, and check-out is by ${HOTEL_INFO.checkOut}. Early check-in or late check-out can be arranged upon request subject to availability.`
    },
    {
      q: "Is parking complimentary for hotel guests?",
      a: "Yes! We provide dedicated, well-lit, 24-hour CCTV monitored parking bays on hotel premises for all staying guests free of charge."
    },
    {
      q: "Does D'Metro Hotel offer breakfast service?",
      a: "Yes, D'Metro Cafe & Lounge serves a delectable daily Malaysian and Western breakfast spread from 7:00 AM to 10:30 AM."
    },
    {
      q: "Is high-speed Wi-Fi available in all guest rooms?",
      a: "Absolutely. Ultra-fast optical fiber Wi-Fi network is complimentary and accessible throughout all guest rooms, lobby lounge, and business area."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      
      {/* Page Title */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-semibold tracking-widest uppercase text-amber-400 font-serif-luxury">
          HOSPITALITY SERVICES & AMENITIES
        </span>
        <h1 className="text-4xl sm:text-5xl font-serif-luxury font-bold text-zinc-100">
          Facilities & Guest Services
        </h1>
        <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
          D'Metro Hotel offers modern lifestyle conveniences to ensure every minute of your stay in Shah Alam is pleasant, seamless, and restful.
        </p>
      </div>

      {/* Featured Dining Spotlight */}
      <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#170d2b] via-[#1c0d38] to-[#130826] border border-amber-500/30 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-[0_0_30px_rgba(212,175,55,0.15)]">
        <div className="lg:col-span-7 space-y-4">
          <span className="inline-flex items-center space-x-2 text-xs font-semibold tracking-widest uppercase text-amber-300 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 font-serif-luxury">
            <Utensils className="w-3.5 h-3.5 text-amber-400" />
            <span>FEATURED DINING EXPERIENCE</span>
          </span>

          <h2 className="text-3xl font-serif-luxury font-bold text-zinc-100">
            D'Metro Cafe & Gourmet Lounge
          </h2>

          <p className="text-sm text-zinc-300 leading-relaxed">
            Start your morning in Shah Alam with fragrant Nasi Lemak, local teh tarik, artisan espresso coffee, and fresh pastries served in our ambient gold-lit lounge. In-room dining service is also available for ultimate guest comfort.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs text-amber-200">
            <div className="p-2.5 rounded-lg bg-white/5 border border-amber-500/10">
              <span className="text-zinc-400 block text-[10px]">Breakfast Hours</span>
              <span className="font-semibold text-amber-300">7:00 AM – 10:30 AM</span>
            </div>
            <div className="p-2.5 rounded-lg bg-white/5 border border-amber-500/10">
              <span className="text-zinc-400 block text-[10px]">All Day Dining</span>
              <span className="font-semibold text-amber-300">Until 10:30 PM</span>
            </div>
            <div className="p-2.5 rounded-lg bg-white/5 border border-amber-500/10 col-span-2 sm:col-span-1">
              <span className="text-zinc-400 block text-[10px]">In-Room Delivery</span>
              <span className="font-semibold text-amber-300">Available</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-amber-500/30">
          <img
            src="/assets/images/malaysian_dining_cafe_1791284133710.jpg"
            alt="D'Metro Cafe Malaysian Dining & Nasi Lemak Spread"
            referrerPolicy="no-referrer"
            className="w-full h-64 sm:h-72 object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Facilities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {FACILITIES_DATA.map((fac) => {
          const IconComponent =
            fac.iconName === 'Wifi'
              ? Wifi
              : fac.iconName === 'Car'
              ? Car
              : fac.iconName === 'Clock'
              ? Clock
              : fac.iconName === 'Sparkles'
              ? Sparkles
              : fac.iconName === 'Utensils'
              ? Utensils
              : Briefcase;

          return (
            <div
              key={fac.id}
              className="p-6 rounded-2xl bg-purple-card border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 space-y-4 flex flex-col justify-between overflow-hidden group"
            >
              <div className="space-y-4">
                {/* Facility Image Header with Overlay Badges */}
                {fac.image && (
                  <div className="relative h-48 w-full rounded-xl overflow-hidden border border-amber-500/20 bg-purple-surface -mt-1">
                    <img
                      src={fac.image}
                      alt={fac.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#130922] via-[#130922]/30 to-transparent opacity-90" />
                    
                    <div className="absolute top-3 left-3 w-9 h-9 rounded-lg bg-black/60 backdrop-blur-md border border-amber-500/30 flex items-center justify-center text-amber-300">
                      <IconComponent className="w-4.5 h-4.5" />
                    </div>

                    {fac.hours && (
                      <span className="absolute bottom-3 right-3 text-[10px] font-bold text-amber-300 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-amber-500/30 font-serif-luxury">
                        {fac.hours}
                      </span>
                    )}
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-serif-luxury font-bold text-zinc-100">
                    {fac.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 mt-2 leading-relaxed">
                    {fac.fullDesc}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-amber-500/15 text-xs text-zinc-300">
                  {fac.highlights.map((h, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-amber-500/10">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-2.5 px-4 text-xs font-bold text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-xl transition-colors"
                >
                  RESERVE YOUR STAY WITH US
                </button>
              </div>

            </div>
          );
        })}
      </div>

      {/* Frequently Asked Questions */}
      <div className="max-w-3xl mx-auto space-y-6 pt-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-semibold tracking-widest uppercase text-amber-400 font-serif-luxury">
            GUEST FAQS
          </span>
          <h2 className="text-3xl font-serif-luxury font-bold text-zinc-100">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-xl bg-purple-card border border-amber-500/20 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-4 text-left font-serif-luxury font-semibold text-zinc-100 text-sm flex items-center justify-between hover:text-amber-300 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-amber-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 pt-1 text-xs text-zinc-300 leading-relaxed border-t border-amber-500/10">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Direct Contact Floating Banner */}
      <div className="p-8 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-serif-luxury font-bold text-gold-gradient">
            Have Special Facility Requirements?
          </h3>
          <p className="text-xs text-zinc-300 mt-1">
            Our front desk is happy to arrange airport transportation, early check-in, or corporate meeting spaces.
          </p>
        </div>

        <div className="flex items-center space-x-3 shrink-0">
          <a
            href={`tel:${HOTEL_INFO.phone}`}
            className="inline-flex items-center space-x-2 px-5 py-2.5 text-xs font-bold text-slate-950 bg-gold-gradient rounded-xl hover:opacity-95 transition-opacity"
          >
            <Phone className="w-4 h-4 text-slate-950" />
            <span>Call: {HOTEL_INFO.phone}</span>
          </a>
        </div>
      </div>

    </div>
  );
};
