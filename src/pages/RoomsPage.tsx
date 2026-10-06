import React, { useState } from 'react';
import { Calendar, Users, Bed, Maximize2, Check, Sparkles, Shield, ChevronRight } from 'lucide-react';
import { ROOMS_DATA, Room, HOTEL_INFO } from '../data/hotelData';

interface RoomsPageProps {
  onOpenBooking: (roomId?: string) => void;
  onOpenRoomDetail: (roomId: string) => void;
}

export const RoomsPage: React.FC<RoomsPageProps> = ({
  onOpenBooking,
  onOpenRoomDetail,
}) => {
  const [filter, setFilter] = useState<'All' | 'Standard' | 'Deluxe' | 'Executive' | 'Family'>('All');

  const filteredRooms = filter === 'All'
    ? ROOMS_DATA
    : ROOMS_DATA.filter((r) => r.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header Title Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span className="text-xs font-semibold tracking-widest text-amber-300 uppercase font-serif-luxury">
            ROYAL ACCOMMODATIONS IN SHAH ALAM
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-serif-luxury font-bold text-zinc-100">
          Rooms & Suites Collection
        </h1>

        <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
          Every room at D'Metro Hotel is designed with dark purple velvet accenting, warm champagne gold lighting, ultra-comfortable mattresses, and high-speed fiber internet.
        </p>

        {/* Interactive Filter Tabs (Functional Buttons) */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
          {(['All', 'Standard', 'Deluxe', 'Executive', 'Family'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                filter === cat
                  ? 'bg-gold-gradient text-slate-950 font-bold shadow-[0_0_15px_rgba(212,175,55,0.3)]'
                  : 'bg-purple-surface/70 text-zinc-300 hover:text-amber-200 border border-amber-500/15'
              }`}
            >
              {cat === 'All' ? 'All Rooms & Suites' : `${cat} Category`}
            </button>
          ))}
        </div>
      </div>

      {/* Room Listing Grid */}
      <div className="space-y-10">
        {filteredRooms.map((room) => (
          <div
            key={room.id}
            className="group bg-purple-card border border-amber-500/25 hover:border-amber-500/50 rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(0,0,0,0.4)] transition-all duration-300 grid grid-cols-1 lg:grid-cols-12"
          >
            {/* Room Image Section */}
            <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-[380px] overflow-hidden bg-purple-surface">
              <img
                src={room.image}
                alt={room.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#130922] via-transparent to-transparent opacity-80" />
              
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="bg-amber-500/20 backdrop-blur-md text-amber-300 border border-amber-500/30 text-xs font-semibold px-3 py-1 rounded-full font-serif-luxury">
                  {room.category}
                </span>
                {room.featured && (
                  <span className="bg-gold-gradient text-slate-950 text-xs font-bold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
              </div>
            </div>

            {/* Room Information Section */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-amber-500/15 pb-4">
                  <h2 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-zinc-100">
                    {room.name}
                  </h2>
                  <div className="text-left sm:text-right">
                    <span className="text-xs text-zinc-400 block">Rate starting at</span>
                    <div className="flex items-baseline space-x-1">
                      <span className="text-2xl font-bold text-gold-gradient tabular-nums">
                        RM {room.priceRM}
                      </span>
                      {room.originalPriceRM && (
                        <span className="text-xs text-zinc-500 line-through tabular-nums">
                          RM {room.originalPriceRM}
                        </span>
                      )}
                      <span className="text-xs text-zinc-400">/ night</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed">
                  {room.description}
                </p>

                {/* Specs Pill List */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-amber-200/90 py-2">
                  <div className="flex items-center space-x-1.5 bg-amber-500/10 px-3 py-1.5 rounded-lg border border-amber-500/20">
                    <Users className="w-4 h-4 text-amber-400" />
                    <span>{room.capacity}</span>
                  </div>
                  <div className="flex items-center space-x-1.5 bg-amber-500/10 px-3 py-1.5 rounded-lg border border-amber-500/20">
                    <Bed className="w-4 h-4 text-amber-400" />
                    <span>{room.bedType}</span>
                  </div>
                  <div className="flex items-center space-x-1.5 bg-amber-500/10 px-3 py-1.5 rounded-lg border border-amber-500/20">
                    <Maximize2 className="w-4 h-4 text-amber-400" />
                    <span>{room.sizeM2} m² Space</span>
                  </div>
                </div>

                {/* Key Amenities */}
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-300 mb-2">
                    Included Room Amenities:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300">
                    {room.amenities.slice(0, 6).map((amenity, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-amber-500/15 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-zinc-400 flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Complimentary breakfast option & free cancellation available</span>
                </div>

                <div className="flex items-center space-x-3 w-full sm:w-auto">
                  <button
                    onClick={() => onOpenRoomDetail(room.id)}
                    className="w-1/2 sm:w-auto px-4 py-2.5 text-xs font-semibold text-amber-200 hover:text-white bg-white/5 hover:bg-white/10 border border-amber-500/20 rounded-xl transition-colors"
                  >
                    View Full Specs
                  </button>
                  <button
                    onClick={() => onOpenBooking(room.id)}
                    className="w-1/2 sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-2.5 text-xs font-bold tracking-wider text-slate-950 bg-gold-gradient rounded-xl hover:opacity-95 transition-opacity shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                  >
                    <Calendar className="w-4 h-4 text-slate-950" />
                    <span>BOOK ROOM</span>
                  </button>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Direct Booking Guarantee Banner */}
      <div className="p-8 rounded-2xl bg-amber-500/5 border border-amber-500/20 text-center space-y-3">
        <h3 className="text-xl font-serif-luxury font-bold text-gold-gradient">
          Need Custom Group or Extended Stay Reservations?
        </h3>
        <p className="text-xs sm:text-sm text-zinc-300 max-w-xl mx-auto">
          Contact our D'Metro Hotel reservation counter directly at <span className="text-amber-300 font-semibold">{HOTEL_INFO.phone}</span> for corporate rates and group bookings.
        </p>
      </div>

    </div>
  );
};
