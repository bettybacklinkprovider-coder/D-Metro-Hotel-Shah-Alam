import React from 'react';
import {
  Calendar,
  Sparkles,
  Wifi,
  Car,
  Clock,
  Utensils,
  ShieldCheck,
  MapPin,
  Phone,
  Bed,
  CheckCircle2,
  HeartHandshake,
  Star,
  ChevronRight,
  Briefcase
} from 'lucide-react';
import { HOTEL_INFO, ROOMS_DATA, FACILITIES_DATA, WHY_CHOOSE_US, TESTIMONIALS, GALLERY_IMAGES } from '../data/hotelData';
import { NavigationPage } from '../components/Header';
import { LocationMap } from '../components/LocationMap';

interface HomePageProps {
  onNavigate: (page: NavigationPage) => void;
  onOpenBooking: (roomId?: string) => void;
  onOpenRoomDetail: (roomId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenBooking,
  onOpenRoomDetail,
}) => {
  return (
    <div className="space-y-20 pb-16">
      
      {/* SECTION 1: LUXURY HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-8 pb-16">
        
        {/* Hero Background Image with Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/hero_dmetro_malaysian_1791284105390.jpg"
            alt="D'Metro Hotel Luxury Malaysian Exterior"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover scale-105 animate-pulse duration-[10000ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0612] via-[#0b0612]/70 to-[#0b0612]/40" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(11,6,18,0.8)_100%)]" />
        </div>

        {/* Hero Content Box */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span className="text-xs font-semibold tracking-widest text-amber-200 uppercase font-serif-luxury">
              Shah Alam, Selangor, Malaysia
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif-luxury font-extrabold tracking-tight text-zinc-100 text-wrap-balance leading-[1.15]">
            Experience Royal Hospitality at <br />
            <span className="text-gold-gradient">D'Metro Hotel</span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
            Located in Seksyen 19, Shah Alam. Discover pristine dark-purple & golden luxury, plush accommodations, fast Wi-Fi, and personalized Malaysian hospitality.
          </p>

          {/* Hero CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 text-sm font-bold tracking-wider text-slate-950 bg-gold-gradient hover:opacity-95 rounded-xl transition-all shadow-[0_0_25px_rgba(212,175,55,0.4)] active:scale-[0.98]"
            >
              <Calendar className="w-4 h-4 text-slate-950" />
              <span>BOOK YOUR STAY NOW</span>
            </button>

            <button
              onClick={() => {
                onNavigate('rooms');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 text-sm font-semibold tracking-wider text-amber-200 bg-purple-card hover:bg-purple-surface border border-amber-500/30 rounded-xl transition-colors backdrop-blur-md"
            >
              <span>EXPLORE ROOMS & SUITES</span>
              <ChevronRight className="w-4 h-4 text-amber-400" />
            </button>
          </div>

          {/* Floating Availability Search Bar */}
          <div className="mt-10 p-4 sm:p-6 bg-[#130922]/90 border border-amber-500/30 rounded-2xl shadow-[0_0_30px_rgba(212,175,55,0.2)] backdrop-blur-md max-w-4xl mx-auto text-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-amber-300 mb-1">
                  Check-In
                </label>
                <input
                  type="date"
                  defaultValue={new Date().toISOString().split('T')[0]}
                  className="w-full bg-[#0b0612] border border-amber-500/20 rounded-lg px-3 py-2 text-zinc-100 text-xs focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-amber-300 mb-1">
                  Check-Out
                </label>
                <input
                  type="date"
                  defaultValue={new Date(Date.now() + 86400000).toISOString().split('T')[0]}
                  className="w-full bg-[#0b0612] border border-amber-500/20 rounded-lg px-3 py-2 text-zinc-100 text-xs focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-amber-300 mb-1">
                  Guests & Room
                </label>
                <select className="w-full bg-[#0b0612] border border-amber-500/20 rounded-lg px-3 py-2 text-zinc-100 text-xs focus:outline-none focus:border-amber-400">
                  <option>2 Guests · Deluxe King</option>
                  <option>2 Guests · Standard Queen</option>
                  <option>3 Guests · Executive Suite</option>
                  <option>4 Guests · Royal Family Suite</option>
                </select>
              </div>

              <div>
                <button
                  onClick={() => onOpenBooking()}
                  className="w-full py-2.5 px-4 text-xs font-bold tracking-wider text-slate-950 bg-gold-gradient rounded-lg hover:opacity-95 transition-opacity"
                >
                  CHECK RATES (RM)
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: WELCOME / ABOUT D'METRO HOTEL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Image Presentation */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-amber-500/30 shadow-[0_0_30px_rgba(212,175,55,0.2)]">
              <img
                src="/assets/images/dmetro_lobby_malaysian_1791284119512.jpg"
                alt="D'Metro Hotel Reception Lounge & Malaysian Hospitality"
                referrerPolicy="no-referrer"
                className="w-full h-[420px] object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0612] via-transparent to-transparent" />
            </div>

            {/* Floating Highlight Card */}
            <div className="absolute -bottom-6 -right-2 sm:right-6 bg-[#130922] p-4 sm:p-5 rounded-xl border border-amber-500/30 shadow-2xl backdrop-blur-md max-w-xs">
              <span className="text-2xl font-serif-luxury font-bold text-gold-gradient block">
                Seksyen 19
              </span>
              <p className="text-xs text-zinc-300 mt-1">
                Shah Alam, Selangor · Premier hospitality location close to KTM & City Centre.
              </p>
            </div>
          </div>

          {/* Right: Editorial Story */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-widest uppercase text-amber-400 font-serif-luxury">
              <span>WELCOME TO D'METRO HOTEL</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-zinc-100 leading-tight text-wrap-balance">
              Refined Elegance & Warm Hospitality in Shah Alam
            </h2>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              D'Metro Hotel is designed to provide guest travelers with a tranquil sanctuary in the heart of Shah Alam, Selangor. Whether visiting for business, family vacation, or leisure stopovers, our boutique hotel offers modern dark-purple & gold plush interiors, immaculate sanitation, and attentive 24/7 guest care.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-purple-card border border-amber-500/20">
                <span className="text-2xl font-bold font-serif-luxury text-gold-gradient block">24/7</span>
                <span className="text-xs text-zinc-400 mt-0.5 block">Concierge & Reception Desk</span>
              </div>
              <div className="p-4 rounded-xl bg-purple-card border border-amber-500/20">
                <span className="text-2xl font-bold font-serif-luxury text-gold-gradient block">100%</span>
                <span className="text-xs text-zinc-400 mt-0.5 block">Sanitized & Modern Rooms</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  onNavigate('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center space-x-2 text-xs font-bold tracking-wider text-amber-300 hover:text-amber-100 uppercase font-serif-luxury"
              >
                <span>GET IN TOUCH WITH FRONT DESK</span>
                <ChevronRight className="w-4 h-4 text-amber-400" />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 3: ROOMS & ACCOMMODATION SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-amber-400 font-serif-luxury block mb-1">
              ACCOMMODATIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-zinc-100">
              Luxury Rooms & Suites
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-xl">
              Curated rooms crafted for peaceful sleep, ambient relaxation, and high-speed productivity in Malaysian Ringgit (RM).
            </p>
          </div>

          <button
            onClick={() => {
              onNavigate('rooms');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center space-x-2 px-5 py-2.5 text-xs font-semibold text-amber-300 border border-amber-500/30 rounded-lg hover:bg-amber-500/10 transition-colors shrink-0"
          >
            <span>VIEW ALL ROOMS</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ROOMS_DATA.map((room) => (
            <div
              key={room.id}
              className="group bg-purple-card border border-amber-500/20 hover:border-amber-500/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(212,175,55,0.2)] flex flex-col justify-between"
            >
              <div>
                {/* Room Image */}
                <div className="relative h-48 w-full overflow-hidden bg-purple-surface">
                  <img
                    src={room.image}
                    alt={room.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#130922] via-transparent to-transparent opacity-80" />
                  
                  <span className="absolute top-3 right-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-semibold text-amber-300 border border-amber-500/30">
                    {room.category}
                  </span>
                </div>

                {/* Room Details */}
                <div className="p-5 space-y-3">
                  <h3 className="text-lg font-serif-luxury font-bold text-zinc-100 group-hover:text-amber-300 transition-colors">
                    {room.name}
                  </h3>

                  <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                    {room.description}
                  </p>

                  <div className="flex items-center justify-between text-xs text-zinc-400 pt-1 border-t border-amber-500/10">
                    <span>{room.bedType}</span>
                    <span>·</span>
                    <span>{room.capacity}</span>
                  </div>
                </div>
              </div>

              {/* Price & Action Footer */}
              <div className="p-5 pt-0 border-t border-amber-500/10 flex items-center justify-between mt-3">
                <div>
                  <span className="text-[11px] text-zinc-500 block">From</span>
                  <div className="flex items-baseline space-x-1">
                    <span className="text-lg font-bold text-gold-gradient tabular-nums">
                      RM {room.priceRM}
                    </span>
                    <span className="text-[11px] text-zinc-400">/night</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => onOpenRoomDetail(room.id)}
                    className="px-3 py-2 text-xs font-semibold text-amber-200 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    Details
                  </button>
                  <button
                    onClick={() => onOpenBooking(room.id)}
                    className="px-3.5 py-2 text-xs font-bold text-slate-950 bg-gold-gradient hover:opacity-95 rounded-lg transition-opacity"
                  >
                    Book
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </section>

      {/* SECTION 4: HOTEL FACILITIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-semibold tracking-widest uppercase text-amber-400 font-serif-luxury">
            GUEST SERVICES & AMENITIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-zinc-100">
            Hotel Facilities
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            Enjoy premium conveniences designed to make your stay in Shah Alam completely effortless.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                className="group p-5 rounded-2xl bg-purple-card border border-amber-500/20 hover:border-amber-500/50 transition-all duration-300 space-y-4 flex flex-col justify-between overflow-hidden hover:shadow-[0_0_25px_rgba(212,175,55,0.2)]"
              >
                <div className="space-y-4">
                  {/* Facility Card Header Image */}
                  {fac.image && (
                    <div className="relative h-48 w-full rounded-xl overflow-hidden border border-amber-500/20 bg-purple-surface">
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
                    <h3 className="text-lg font-serif-luxury font-bold text-zinc-100 group-hover:text-amber-300 transition-colors">
                      {fac.title}
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                      {fac.shortDesc}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-amber-500/10 space-y-1.5">
                    {fac.highlights.map((h, i) => (
                      <div key={i} className="flex items-center space-x-2 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </section>

      {/* SECTION 5: WHY CHOOSE D'METRO HOTEL */}
      <section className="bg-purple-surface/60 border-y border-amber-500/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-semibold tracking-widest uppercase text-amber-400 font-serif-luxury">
              THE D'METRO ADVANTAGE
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-zinc-100">
              Why Choose D'Metro Hotel
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400">
              We prioritize comfort, location convenience, pristine hygiene, and guest satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {WHY_CHOOSE_US.map((item, idx) => {
              const IconComp =
                item.icon === 'Bed'
                  ? Bed
                  : item.icon === 'MapPin'
                  ? MapPin
                  : item.icon === 'ShieldCheck'
                  ? ShieldCheck
                  : item.icon === 'Sparkles'
                  ? Sparkles
                  : HeartHandshake;

              return (
                <div
                  key={idx}
                  className="group rounded-2xl bg-[#0d0714] border border-amber-500/15 overflow-hidden flex flex-col justify-between hover:border-amber-500/40 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] transition-all duration-300"
                >
                  <div className="space-y-3">
                    {/* Image Header with Icon Badge */}
                    {item.image && (
                      <div className="relative h-36 w-full overflow-hidden bg-purple-surface">
                        <img
                          src={item.image}
                          alt={item.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0714] via-[#0d0714]/40 to-transparent" />
                        <div className="absolute top-2.5 left-2.5 w-8 h-8 rounded-lg bg-black/60 backdrop-blur-md border border-amber-500/30 flex items-center justify-center text-amber-300">
                          <IconComp className="w-4 h-4" />
                        </div>
                      </div>
                    )}

                    <div className="p-4 pt-1 text-center space-y-2">
                      <h3 className="text-sm font-serif-luxury font-bold text-zinc-100 group-hover:text-amber-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Testimonials Proof Banner */}
          <div className="mt-16 pt-12 border-t border-amber-500/20">
            <h3 className="text-center text-xs font-semibold uppercase tracking-widest text-amber-400 font-serif-luxury mb-8">
              Verified Guest Experiences
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TESTIMONIALS.map((t, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-[#0b0612] border border-amber-500/20 space-y-3"
                >
                  <div className="flex text-amber-400 space-x-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-zinc-300 italic leading-relaxed">
                    "{t.quote}"
                  </p>
                  <div className="pt-2 border-t border-amber-500/10 text-xs">
                    <span className="font-semibold text-zinc-100 block">{t.author}</span>
                    <span className="text-zinc-500">{t.location} · {t.room}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 5.5: MALAYSIAN HOTEL PHOTO GALLERY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-semibold tracking-widest uppercase text-amber-400 font-serif-luxury">
            PHOTO SHOWCASE
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-zinc-100">
            Malaysian Luxury & Hospitality Gallery
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            Take a visual tour of our hotel exterior, reception lounge, Malaysian cafe delicacies, and luxury guest suites in Shah Alam.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {GALLERY_IMAGES.map((img) => (
            <div
              key={img.id}
              className="group relative rounded-2xl overflow-hidden border border-amber-500/20 bg-purple-card shadow-lg hover:border-amber-500/50 transition-all duration-300 h-60"
            >
              <img
                src={img.image}
                alt={img.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0612] via-[#0b0612]/30 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
              <div className="absolute bottom-0 inset-x-0 p-4 space-y-1">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-400 bg-amber-500/20 border border-amber-500/30 px-2 py-0.5 rounded">
                  {img.category}
                </span>
                <h4 className="text-sm font-serif-luxury font-bold text-zinc-100 line-clamp-1">
                  {img.title}
                </h4>
                <p className="text-[11px] text-zinc-400 line-clamp-1">
                  {img.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6: LOCATION & CONTACT / FINAL CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-semibold tracking-widest uppercase text-amber-400 font-serif-luxury">
            SEKSYEN 19, SHAH ALAM
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-zinc-100">
            Location & Direct Contact
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            Located conveniently near highways, train station, and shopping centers in Selangor.
          </p>
        </div>

        {/* Interactive Map Component */}
        <LocationMap />

        {/* Final CTA Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#170d2b] via-[#1a0c33] to-[#120724] border border-amber-500/30 text-center space-y-6 shadow-[0_0_40px_rgba(212,175,55,0.2)]">
          <h3 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-gold-gradient">
            Book Your Luxury Stay at D'Metro Hotel
          </h3>
          <p className="max-w-xl mx-auto text-sm text-zinc-300 leading-relaxed">
            Reserve your room online today for guaranteed best prices in Malaysian Ringgit (RM), instant room confirmation, and flexible guest care.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto px-8 py-3.5 text-sm font-bold tracking-wider text-slate-950 bg-gold-gradient hover:opacity-95 rounded-xl transition-all shadow-[0_0_20px_rgba(212,175,55,0.4)]"
            >
              BOOK YOUR STAY NOW
            </button>
            <a
              href={`tel:${HOTEL_INFO.phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 text-sm font-semibold text-amber-200 border border-amber-500/30 rounded-xl hover:bg-amber-500/10 transition-colors"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span className="tabular-nums">Call Front Desk: {HOTEL_INFO.phone}</span>
            </a>
          </div>
        </div>

      </section>

    </div>
  );
};
