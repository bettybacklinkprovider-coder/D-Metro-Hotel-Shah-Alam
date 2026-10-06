import React from 'react';
import { X, Check, Users, Bed, Maximize2, Shield, Calendar } from 'lucide-react';
import { Room } from '../data/hotelData';

interface RoomDetailModalProps {
  room: Room | null;
  onClose: () => void;
  onBookNow: (roomId: string) => void;
}

export const RoomDetailModal: React.FC<RoomDetailModalProps> = ({
  room,
  onClose,
  onBookNow,
}) => {
  if (!room) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#130922] border border-amber-500/30 rounded-2xl shadow-[0_0_50px_rgba(212,175,55,0.25)] overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/60 hover:bg-black/80 text-amber-300 rounded-full border border-amber-500/30 transition-colors"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Scroll Content */}
        <div className="overflow-y-auto">
          
          {/* Room Banner Image */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-purple-surface">
            <img
              src={room.image}
              alt={room.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#130922] via-[#130922]/40 to-transparent" />
            
            <div className="absolute bottom-4 left-6 right-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 bg-amber-500/20 px-2.5 py-1 rounded border border-amber-500/30 font-serif-luxury">
                {room.category} Accommodation
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-zinc-100 mt-2">
                {room.name}
              </h2>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 space-y-6 text-sm text-zinc-300">
            
            {/* Quick Specs Bar */}
            <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-purple-surface border border-amber-500/20 text-center">
              <div className="flex flex-col items-center">
                <Users className="w-4 h-4 text-amber-400 mb-1" />
                <span className="text-xs text-zinc-400">Capacity</span>
                <span className="font-semibold text-zinc-200">{room.capacity}</span>
              </div>
              <div className="flex flex-col items-center border-x border-amber-500/20">
                <Bed className="w-4 h-4 text-amber-400 mb-1" />
                <span className="text-xs text-zinc-400">Bedding</span>
                <span className="font-semibold text-zinc-200">{room.bedType}</span>
              </div>
              <div className="flex flex-col items-center">
                <Maximize2 className="w-4 h-4 text-amber-400 mb-1" />
                <span className="text-xs text-zinc-400">Room Size</span>
                <span className="font-semibold text-zinc-200">{room.sizeM2} m²</span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-base font-serif-luxury font-semibold text-amber-200 mb-2">
                Room Overview
              </h3>
              <p className="text-zinc-300 leading-relaxed text-sm">
                {room.description}
              </p>
            </div>

            {/* Room Amenities Checklist */}
            <div>
              <h3 className="text-base font-serif-luxury font-semibold text-amber-200 mb-3">
                In-Room Luxury Amenities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {room.amenities.map((amenity, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-2.5 p-2.5 rounded-lg bg-white/5 border border-amber-500/10 text-xs text-zinc-200"
                  >
                    <Check className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hotel Guarantees */}
            <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 text-xs text-amber-300/90 flex items-center space-x-3">
              <Shield className="w-5 h-5 text-amber-400 shrink-0" />
              <span>
                Guaranteed best rate when booking directly with D'Metro Hotel. Standard check-in at {room.name} starts from 2:00 PM.
              </span>
            </div>

            {/* Bottom Booking Action */}
            <div className="pt-4 border-t border-amber-500/20 flex items-center justify-between">
              <div>
                <span className="text-xs text-zinc-400 block">Nightly Rate</span>
                <div className="flex items-baseline space-x-2">
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

              <button
                onClick={() => {
                  onClose();
                  onBookNow(room.id);
                }}
                className="inline-flex items-center space-x-2 px-6 py-3 text-sm font-bold tracking-wider text-slate-950 bg-gold-gradient hover:opacity-95 rounded-xl transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)]"
              >
                <Calendar className="w-4 h-4 text-slate-950" />
                <span>BOOK THIS ROOM</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
