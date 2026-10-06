import React from 'react';
import { MapPin, Navigation, Car, Clock, Phone, ExternalLink } from 'lucide-react';
import { HOTEL_INFO, NEARBY_ATTRACTION_DATA } from '../data/hotelData';

export const LocationMap: React.FC = () => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    HOTEL_INFO.address
  )}`;

  return (
    <div className="bg-purple-surface rounded-2xl border border-amber-500/20 overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)]">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        
        {/* Left Side: Map Graphic / Simulation */}
        <div className="lg:col-span-7 relative min-h-[320px] bg-[#0c0814] flex flex-col justify-between p-6 overflow-hidden">
          
          {/* Decorative Map Pattern Background */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0814] via-transparent to-transparent" />

          {/* Top Address Card */}
          <div className="relative z-10 bg-[#130922]/90 backdrop-blur-md p-4 rounded-xl border border-amber-500/30 max-w-md">
            <div className="flex items-start space-x-3">
              <div className="p-2 bg-amber-500/20 text-amber-300 rounded-lg border border-amber-500/40 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif-luxury font-bold text-gold-gradient text-base">
                  D'Metro Hotel Location
                </h4>
                <p className="text-xs text-zinc-300 mt-1 leading-relaxed">
                  {HOTEL_INFO.address}
                </p>
                <div className="mt-2 flex items-center space-x-2 text-[11px] text-amber-300/80">
                  <span>Seksyen 19, Shah Alam</span>
                  <span>·</span>
                  <span>Selangor, Malaysia</span>
                </div>
              </div>
            </div>
          </div>

          {/* Center Hotel Pin Simulation Graphic */}
          <div className="relative z-10 my-8 flex flex-col items-center justify-center">
            <div className="relative">
              <div className="animate-ping absolute inset-0 rounded-full bg-amber-500/30" />
              <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gold-gradient shadow-[0_0_25px_rgba(212,175,55,0.6)] text-slate-950 font-bold font-serif-luxury text-xl">
                D'M
              </div>
            </div>
            <span className="mt-2 text-xs font-semibold tracking-wider text-amber-300 bg-black/60 px-3 py-1 rounded-full border border-amber-500/30 backdrop-blur-sm">
              10, Jalan Nelayan 19/D, Shah Alam
            </span>
          </div>

          {/* Bottom Direct Directions Action */}
          <div className="relative z-10 flex items-center justify-between pt-4 border-t border-amber-500/20">
            <a
              href={`tel:${HOTEL_INFO.phone}`}
              className="inline-flex items-center space-x-2 text-xs text-zinc-300 hover:text-amber-300"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span className="tabular-nums">{HOTEL_INFO.phone}</span>
            </a>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 text-xs font-bold text-slate-950 bg-gold-gradient rounded-lg hover:opacity-95 transition-opacity shadow-[0_0_15px_rgba(212,175,55,0.3)]"
            >
              <Navigation className="w-3.5 h-3.5 text-slate-950" />
              <span>GET DIRECTIONS</span>
              <ExternalLink className="w-3 h-3 text-slate-950" />
            </a>
          </div>

        </div>

        {/* Right Side: Nearby Attractions List */}
        <div className="lg:col-span-5 p-6 bg-[#130922] border-t lg:border-t-0 lg:border-l border-amber-500/20 flex flex-col justify-between space-y-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 font-serif-luxury">
              Strategic Proximity
            </span>
            <h3 className="text-xl font-serif-luxury font-bold text-zinc-100 mt-1">
              Nearby Shah Alam Attractions
            </h3>
            <p className="text-xs text-zinc-400 mt-1">
              Convenient access to major landmarks in Selangor.
            </p>

            <div className="mt-4 space-y-3">
              {NEARBY_ATTRACTION_DATA.map((item, index) => (
                <div
                  key={index}
                  className="p-3 rounded-xl bg-purple-surface/70 border border-amber-500/10 hover:border-amber-500/30 transition-colors"
                >
                  {item.image && (
                    <div className="mb-2 h-24 w-full rounded-lg overflow-hidden relative">
                      <img
                        src={item.image}
                        alt={item.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <span className="absolute bottom-1.5 left-2 text-[10px] font-semibold text-amber-200">
                        Shah Alam Landmark
                      </span>
                    </div>
                  )}
                  <div className="flex items-center justify-between text-xs font-semibold text-zinc-200">
                    <span>{item.name}</span>
                    <span className="text-amber-300 tabular-nums bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 shrink-0 ml-2">
                      {item.distance}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 text-[11px] text-zinc-400 mt-1">
                    <span className="flex items-center gap-1 text-zinc-400 shrink-0">
                      <Car className="w-3 h-3 text-amber-400" />
                      {item.time}
                    </span>
                    <span>·</span>
                    <span className="line-clamp-1">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-amber-500/5 border border-amber-500/20 text-xs text-zinc-400">
            <span className="font-semibold text-amber-300 block mb-0.5">Highway Accessibility:</span>
            Direct connectivity via KESAS Highway, Federal Highway, and ELITE Expressway.
          </div>

        </div>

      </div>
    </div>
  );
};
