import React, { useState } from 'react';
import {
  Phone,
  MapPin,
  Mail,
  MessageCircle,
  Send,
  Clock,
  CheckCircle2,
  Calendar,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';
import { LocationMap } from '../components/LocationMap';

interface ContactPageProps {
  onOpenBooking: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenBooking }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Room Inquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert('Please complete required contact details.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      
      {/* Title Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span className="text-xs font-semibold tracking-widest text-amber-300 uppercase font-serif-luxury">
            24/7 FRONT DESK & RESERVATIONS
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-serif-luxury font-bold text-zinc-100">
          Contact D'Metro Hotel
        </h1>

        <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
          We welcome your inquiries, reservation requests, and special stay requirements. Reach out to our Shah Alam team anytime.
        </p>
      </div>

      {/* Main Contact Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Direct Info Cards */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="p-6 rounded-2xl bg-purple-card border border-amber-500/20 space-y-6">
            <h2 className="text-xl font-serif-luxury font-bold text-gold-gradient border-b border-amber-500/15 pb-3">
              Direct Contact Details
            </h2>

            <div className="space-y-5 text-sm text-zinc-300">
              
              {/* Address */}
              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 bg-amber-500/15 text-amber-300 rounded-xl border border-amber-500/30 shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-zinc-400 font-semibold uppercase block">Hotel Address</span>
                  <p className="text-zinc-100 font-medium leading-relaxed mt-0.5">
                    {HOTEL_INFO.address}
                  </p>
                  <span className="text-xs text-amber-300/80 mt-1 block">Seksyen 19, Shah Alam, Selangor</span>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 bg-amber-500/15 text-amber-300 rounded-xl border border-amber-500/30 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-zinc-400 font-semibold uppercase block">Telephone / Reservation</span>
                  <a
                    href={`tel:${HOTEL_INFO.phone}`}
                    className="text-amber-300 font-bold text-lg hover:underline tabular-nums block"
                  >
                    {HOTEL_INFO.phone}
                  </a>
                  <span className="text-xs text-zinc-400">Available 24 hours daily</span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 bg-amber-500/15 text-amber-300 rounded-xl border border-amber-500/30 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-zinc-400 font-semibold uppercase block">Email Address</span>
                  <a
                    href={`mailto:${HOTEL_INFO.email}`}
                    className="text-zinc-100 font-medium hover:text-amber-300 block"
                  >
                    {HOTEL_INFO.email}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 bg-amber-500/15 text-amber-300 rounded-xl border border-amber-500/30 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-zinc-400 font-semibold uppercase block">Operating Hours</span>
                  <p className="text-zinc-100 font-medium">
                    24-Hour Reception & Check-In Desk
                  </p>
                  <span className="text-xs text-zinc-400">Check-In: {HOTEL_INFO.checkIn} · Check-Out: {HOTEL_INFO.checkOut}</span>
                </div>
              </div>

            </div>

            {/* Quick WhatsApp Action Button */}
            <div className="pt-2">
              <a
                href={`https://wa.me/${HOTEL_INFO.whatsappPhone}?text=Hello%20D'Metro%20Hotel,%20I%20am%20contacting%20you%20from%20your%20website.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2 py-3 px-4 bg-emerald-900/40 hover:bg-emerald-900/60 text-emerald-300 border border-emerald-500/40 rounded-xl font-semibold text-xs transition-colors shadow-lg"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>CHAT INSTANTLY ON WHATSAPP</span>
              </a>
            </div>

          </div>

          {/* Direct CTA */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-500/15 via-amber-500/5 to-transparent border border-amber-500/30 text-center space-y-3">
            <h3 className="text-lg font-serif-luxury font-bold text-gold-gradient">
              Ready to Secure Your Room?
            </h3>
            <p className="text-xs text-zinc-300">
              Skip wait times and lock in your room reservation online with instant confirmation.
            </p>
            <button
              onClick={onOpenBooking}
              className="w-full py-3 px-4 text-xs font-bold text-slate-950 bg-gold-gradient rounded-xl hover:opacity-95 transition-opacity"
            >
              BOOK YOUR STAY NOW
            </button>
          </div>

        </div>

        {/* Right Column: Contact & Inquiry Form */}
        <div className="lg:col-span-7 bg-purple-card border border-amber-500/20 rounded-2xl p-6 sm:p-8 space-y-6">
          <div>
            <h2 className="text-2xl font-serif-luxury font-bold text-zinc-100">
              Send Us a Message
            </h2>
            <p className="text-xs text-zinc-400 mt-1">
              Have questions regarding room availability, group rates, or special arrangements? Fill in the form below.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 bg-amber-500/10 border border-amber-500/30 rounded-2xl text-center space-y-4 animate-in zoom-in-95 duration-200">
              <div className="inline-flex p-3 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif-luxury font-bold text-gold-gradient">
                Message Sent Successfully!
              </h3>
              <p className="text-xs text-zinc-300 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-amber-300">{name}</span>. Our reception team at D'Metro Hotel will review your request and get back to you shortly at <span className="text-zinc-100">{email}</span> or via WhatsApp.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setName('');
                  setEmail('');
                  setMessage('');
                }}
                className="px-6 py-2.5 text-xs font-bold text-slate-950 bg-gold-gradient rounded-xl hover:opacity-95 transition-opacity"
              >
                SEND ANOTHER INQUIRY
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 text-sm">
              
              <div>
                <label className="block text-xs font-medium text-amber-200 mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Nurul Huda"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#0b0612] border border-amber-500/20 rounded-lg px-3.5 py-2.5 text-zinc-100 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-amber-200 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="huda@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#0b0612] border border-amber-500/20 rounded-lg px-3.5 py-2.5 text-zinc-100 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-amber-200 mb-1">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+60123456789"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#0b0612] border border-amber-500/20 rounded-lg px-3.5 py-2.5 text-zinc-100 focus:outline-none focus:border-amber-400 tabular-nums"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-amber-200 mb-1">
                  Subject / Inquiry Type
                </label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full bg-[#0b0612] border border-amber-500/20 rounded-lg px-3.5 py-2.5 text-zinc-100 focus:outline-none focus:border-amber-400"
                >
                  <option value="Room Inquiry">Room Reservation Inquiry</option>
                  <option value="Group Booking">Group & Corporate Booking</option>
                  <option value="Facilities">Facilities & Dining Inquiry</option>
                  <option value="General">General Feedback / Questions</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-amber-200 mb-1">
                  Your Message *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us about your upcoming visit or any special requests..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-[#0b0612] border border-amber-500/20 rounded-lg px-3.5 py-2.5 text-zinc-100 focus:outline-none focus:border-amber-400"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center space-x-2 py-3 px-6 text-sm font-bold tracking-wider text-slate-950 bg-gold-gradient rounded-xl hover:opacity-95 transition-opacity shadow-[0_0_20px_rgba(212,175,55,0.3)]"
              >
                <Send className="w-4 h-4 text-slate-950" />
                <span>SUBMIT INQUIRY</span>
              </button>

            </form>
          )}

        </div>

      </div>

      {/* Google Maps Area Section */}
      <div className="space-y-6">
        <div className="text-center max-w-xl mx-auto">
          <span className="text-xs font-semibold tracking-widest uppercase text-amber-400 font-serif-luxury">
            DIRECTIONS & MAP
          </span>
          <h2 className="text-3xl font-serif-luxury font-bold text-zinc-100 mt-1">
            Find D'Metro Hotel on Map
          </h2>
        </div>

        <LocationMap />
      </div>

    </div>
  );
};
