import React, { useState } from 'react';
import { X, Calendar, User, Check, AlertCircle, CreditCard, Download, MessageCircle, Clock, Sparkles } from 'lucide-react';
import { HOTEL_INFO, ROOMS_DATA, Room } from '../data/hotelData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedRoomId?: string | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  selectedRoomId,
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);

  // Form states
  const todayStr = new Date().toISOString().split('T')[0];
  const tomorrowStr = new Date(Date.now() + 86400000).toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(todayStr);
  const [checkOut, setCheckOut] = useState(tomorrowStr);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const initialRoomId = selectedRoomId || ROOMS_DATA[1].id;
  const [roomId, setRoomId] = useState(initialRoomId);

  // Addons
  const [addBreakfast, setAddBreakfast] = useState(true);
  const [addTransfer, setAddTransfer] = useState(false);
  const [addLateCheckOut, setAddLateCheckOut] = useState(false);

  // Guest details
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'hotel' | 'card' | 'fpx'>('hotel');

  // Confirmation state
  const [bookingRef, setBookingRef] = useState<string | null>(null);

  if (!isOpen) return null;

  const currentRoom = ROOMS_DATA.find((r) => r.id === roomId) || ROOMS_DATA[0];

  // Calculate nights
  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);
  const diffTime = checkOutDate.getTime() - checkInDate.getTime();
  const calculatedNights = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));

  // Costs
  const roomTotal = currentRoom.priceRM * calculatedNights;
  const breakfastTotal = addBreakfast ? 25 * (adults + children) * calculatedNights : 0;
  const transferTotal = addTransfer ? 90 : 0;
  const lateCheckoutTotal = addLateCheckOut ? 40 : 0;
  const grandTotalRM = roomTotal + breakfastTotal + transferTotal + lateCheckoutTotal;

  const handleCompleteBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName || !guestEmail || !guestPhone) {
      alert("Please fill in your name, email, and phone number.");
      return;
    }
    const randomCode = `DMR-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(randomCode);
    setStep(3);
  };

  const resetAndClose = () => {
    setStep(1);
    setBookingRef(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#130922] border border-amber-500/30 rounded-2xl shadow-[0_0_50px_rgba(212,175,55,0.25)] overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0b0612] border-b border-amber-500/20">
          <div>
            <h3 className="text-xl font-serif-luxury font-bold text-gold-gradient">
              D'Metro Hotel Reservation
            </h3>
            <p className="text-xs text-zinc-400">
              {step === 1 && "Step 1: Select Room, Stay Dates & Preferences"}
              {step === 2 && "Step 2: Guest Details & Payment Method"}
              {step === 3 && "Booking Confirmation Voucher"}
            </p>
          </div>
          <button
            onClick={resetAndClose}
            className="p-1.5 text-zinc-400 hover:text-amber-300 transition-colors rounded-lg hover:bg-white/5"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-sm text-zinc-200">
          
          {/* STEP 1: DATES & ROOM */}
          {step === 1 && (
            <div className="space-y-6">
              
              {/* Room Selector */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-amber-300 mb-2">
                  Select Accommodation
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {ROOMS_DATA.map((room) => {
                    const isSelected = room.id === roomId;
                    return (
                      <button
                        key={room.id}
                        type="button"
                        onClick={() => setRoomId(room.id)}
                        className={`text-left p-3 rounded-xl border transition-all ${
                          isSelected
                            ? 'bg-amber-500/15 border-amber-400 ring-1 ring-amber-400/50'
                            : 'bg-purple-surface/50 border-amber-500/10 hover:border-amber-500/30'
                        }`}
                      >
                        <div className="flex items-center justify-between font-semibold text-zinc-100">
                          <span>{room.name}</span>
                          <span className="text-amber-300 font-bold tabular-nums">
                            RM {room.priceRM}
                          </span>
                        </div>
                        <p className="text-xs text-zinc-400 mt-1 line-clamp-1">
                          {room.bedType} · {room.capacity}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Check-In / Check-Out */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-amber-200 mb-1">
                    Check-In Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      min={todayStr}
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full bg-[#0b0612] border border-amber-500/20 rounded-lg px-3 py-2 text-zinc-100 text-sm focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-amber-200 mb-1">
                    Check-Out Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      min={checkIn}
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full bg-[#0b0612] border border-amber-500/20 rounded-lg px-3 py-2 text-zinc-100 text-sm focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>
              </div>

              {/* Guests */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-amber-200 mb-1">
                    Adults
                  </label>
                  <select
                    value={adults}
                    onChange={(e) => setAdults(Number(e.target.value))}
                    className="w-full bg-[#0b0612] border border-amber-500/20 rounded-lg px-3 py-2 text-zinc-100 text-sm focus:outline-none focus:border-amber-400"
                  >
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Adult' : 'Adults'}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-amber-200 mb-1">
                    Children
                  </label>
                  <select
                    value={children}
                    onChange={(e) => setChildren(Number(e.target.value))}
                    className="w-full bg-[#0b0612] border border-amber-500/20 rounded-lg px-3 py-2 text-zinc-100 text-sm focus:outline-none focus:border-amber-400"
                  >
                    {[0, 1, 2, 3, 4].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Child' : 'Children'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Optional Extras */}
              <div className="space-y-3 pt-2 border-t border-amber-500/20">
                <label className="block text-xs font-semibold uppercase tracking-wider text-amber-300">
                  Enhance Your Stay
                </label>
                
                <label className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-amber-500/10 cursor-pointer hover:border-amber-500/30">
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={addBreakfast}
                      onChange={(e) => setAddBreakfast(e.target.checked)}
                      className="accent-amber-400 w-4 h-4 rounded"
                    />
                    <div>
                      <span className="font-medium text-zinc-100 block">D'Metro Breakfast Buffet</span>
                      <span className="text-xs text-zinc-400">Fresh Malaysian & Western breakfast spread</span>
                    </div>
                  </div>
                  <span className="text-amber-300 font-semibold tabular-nums text-xs">
                    +RM 25 / pax / night
                  </span>
                </label>

                <label className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-amber-500/10 cursor-pointer hover:border-amber-500/30">
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={addTransfer}
                      onChange={(e) => setAddTransfer(e.target.checked)}
                      className="accent-amber-400 w-4 h-4 rounded"
                    />
                    <div>
                      <span className="font-medium text-zinc-100 block">Subang Airport Shuttle Transfer</span>
                      <span className="text-xs text-zinc-400">Direct private transfer to/from SZB Airport</span>
                    </div>
                  </div>
                  <span className="text-amber-300 font-semibold tabular-nums text-xs">
                    +RM 90
                  </span>
                </label>

                <label className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-amber-500/10 cursor-pointer hover:border-amber-500/30">
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={addLateCheckOut}
                      onChange={(e) => setAddLateCheckOut(e.target.checked)}
                      className="accent-amber-400 w-4 h-4 rounded"
                    />
                    <div>
                      <span className="font-medium text-zinc-100 block">Guaranteed Late Check-Out (3:00 PM)</span>
                      <span className="text-xs text-zinc-400">Extra leisure time on your departure day</span>
                    </div>
                  </div>
                  <span className="text-amber-300 font-semibold tabular-nums text-xs">
                    +RM 40
                  </span>
                </label>
              </div>

              {/* Price Calculation Card */}
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 space-y-2">
                <div className="flex items-center justify-between text-xs text-zinc-300">
                  <span>{currentRoom.name} ({calculatedNights} {calculatedNights === 1 ? 'night' : 'nights'})</span>
                  <span className="tabular-nums">RM {roomTotal}</span>
                </div>
                {addBreakfast && (
                  <div className="flex items-center justify-between text-xs text-zinc-300">
                    <span>Breakfast Buffet</span>
                    <span className="tabular-nums">RM {breakfastTotal}</span>
                  </div>
                )}
                {addTransfer && (
                  <div className="flex items-center justify-between text-xs text-zinc-300">
                    <span>Airport Transfer</span>
                    <span className="tabular-nums">RM {transferTotal}</span>
                  </div>
                )}
                {addLateCheckOut && (
                  <div className="flex items-center justify-between text-xs text-zinc-300">
                    <span>Late Check-Out</span>
                    <span className="tabular-nums">RM {lateCheckoutTotal}</span>
                  </div>
                )}
                <div className="pt-2 border-t border-amber-500/30 flex items-center justify-between text-base font-bold text-amber-300">
                  <span>Estimated Total (MYR)</span>
                  <span className="text-xl text-gold-gradient tabular-nums">RM {grandTotalRM}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setStep(2)}
                className="w-full py-3 px-6 text-sm font-bold tracking-wider text-slate-950 bg-gold-gradient rounded-xl hover:opacity-95 transition-opacity shadow-[0_0_20px_rgba(212,175,55,0.3)]"
              >
                PROCEED TO GUEST DETAILS
              </button>

            </div>
          )}

          {/* STEP 2: GUEST DETAILS & PAYMENT */}
          {step === 2 && (
            <form onSubmit={handleCompleteBooking} className="space-y-5">
              
              {/* Summary Reminder */}
              <div className="p-3.5 bg-amber-500/5 rounded-xl border border-amber-500/20 text-xs flex justify-between items-center">
                <div>
                  <span className="font-semibold text-amber-300">{currentRoom.name}</span>
                  <span className="text-zinc-400 block">{checkIn} to {checkOut} ({calculatedNights} nights)</span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-zinc-400 block">Total Due</span>
                  <span className="font-bold text-amber-300 text-sm tabular-nums">RM {grandTotalRM}</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-amber-200 mb-1">
                  Full Name (As on IC / Passport) *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ahmad Farhan Bin Ismail"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  className="w-full bg-[#0b0612] border border-amber-500/20 rounded-lg px-3.5 py-2.5 text-zinc-100 text-sm focus:outline-none focus:border-amber-400"
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
                    placeholder="farhan@example.com"
                    value={guestEmail}
                    onChange={(e) => setGuestEmail(e.target.value)}
                    className="w-full bg-[#0b0612] border border-amber-500/20 rounded-lg px-3.5 py-2.5 text-zinc-100 text-sm focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-amber-200 mb-1">
                    Phone Number (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+60123456789"
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                    className="w-full bg-[#0b0612] border border-amber-500/20 rounded-lg px-3.5 py-2.5 text-zinc-100 text-sm focus:outline-none focus:border-amber-400 tabular-nums"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-amber-200 mb-1">
                  Special Requests (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="High floor room, quiet side, late arrival note, etc."
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="w-full bg-[#0b0612] border border-amber-500/20 rounded-lg px-3.5 py-2 text-zinc-100 text-sm focus:outline-none focus:border-amber-400"
                />
              </div>

              {/* Payment Option */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-amber-300 mb-2">
                  Payment Preference
                </label>
                <div className="space-y-2">
                  <label className={`flex items-center p-3 rounded-lg border cursor-pointer transition-colors ${
                    paymentMethod === 'hotel'
                      ? 'bg-amber-500/15 border-amber-400'
                      : 'bg-white/5 border-amber-500/10'
                  }`}>
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'hotel'}
                      onChange={() => setPaymentMethod('hotel')}
                      className="accent-amber-400 mr-3"
                    />
                    <div>
                      <span className="font-semibold text-zinc-100 block">Pay Upon Check-In at Hotel Counter</span>
                      <span className="text-xs text-zinc-400">Cash / Card accepted at reception in Seksyen 19, Shah Alam</span>
                    </div>
                  </label>

                  <label className={`flex items-center p-3 rounded-lg border cursor-pointer transition-colors ${
                    paymentMethod === 'fpx'
                      ? 'bg-amber-500/15 border-amber-400'
                      : 'bg-white/5 border-amber-500/10'
                  }`}>
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'fpx'}
                      onChange={() => setPaymentMethod('fpx')}
                      className="accent-amber-400 mr-3"
                    />
                    <div>
                      <span className="font-semibold text-zinc-100 block">FPX Online Banking (Malaysian Banks)</span>
                      <span className="text-xs text-zinc-400">Maybank2u, CIMB Clicks, RHB, Bank Islam, Public Bank</span>
                    </div>
                  </label>

                  <label className={`flex items-center p-3 rounded-lg border cursor-pointer transition-colors ${
                    paymentMethod === 'card'
                      ? 'bg-amber-500/15 border-amber-400'
                      : 'bg-white/5 border-amber-500/10'
                  }`}>
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'card'}
                      onChange={() => setPaymentMethod('card')}
                      className="accent-amber-400 mr-3"
                    />
                    <div>
                      <span className="font-semibold text-zinc-100 block">Credit / Debit Card (Visa / Mastercard)</span>
                      <span className="text-xs text-zinc-400">Instant reservation lock</span>
                    </div>
                  </label>
                </div>
              </div>

              <div className="flex items-center space-x-3 pt-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-1/3 py-3 px-4 text-xs font-semibold text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-xl transition-colors"
                >
                  BACK TO DATES
                </button>
                <button
                  type="submit"
                  className="w-2/3 py-3 px-6 text-xs sm:text-sm font-bold tracking-wider text-slate-950 bg-gold-gradient rounded-xl hover:opacity-95 transition-opacity shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                >
                  CONFIRM RESERVATION
                </button>
              </div>

            </form>
          )}

          {/* STEP 3: VOUCHER & CONFIRMATION */}
          {step === 3 && bookingRef && (
            <div className="space-y-6 text-center animate-in zoom-in-95 duration-200">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/50 mb-2 shadow-[0_0_25px_rgba(212,175,55,0.4)]">
                <Check className="w-8 h-8" />
              </div>

              <div>
                <h4 className="text-2xl font-serif-luxury font-bold text-gold-gradient">
                  Reservation Confirmed!
                </h4>
                <p className="text-xs text-zinc-400 mt-1">
                  Thank you for choosing D'Metro Hotel, Shah Alam. We look forward to welcoming you!
                </p>
              </div>

              {/* Printable Voucher Box */}
              <div className="p-6 bg-[#07030d] border border-amber-500/40 rounded-2xl text-left space-y-4 shadow-[0_0_20px_rgba(212,175,55,0.15)] relative">
                
                <div className="flex items-center justify-between border-b border-amber-500/20 pb-3">
                  <div>
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-widest font-serif-luxury block">
                      BOOKING VOUCHER
                    </span>
                    <span className="text-xs text-zinc-400">D'Metro Hotel · Shah Alam</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-zinc-500 uppercase block">Ref Code</span>
                    <span className="text-sm font-mono font-bold text-amber-300 tracking-wider">
                      {bookingRef}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-zinc-500 block">Guest Name</span>
                    <span className="font-semibold text-zinc-100">{guestName}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 block">Contact</span>
                    <span className="font-semibold text-zinc-100">{guestPhone}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 block">Check-In</span>
                    <span className="font-semibold text-amber-300">{checkIn} ({HOTEL_INFO.checkIn})</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 block">Check-Out</span>
                    <span className="font-semibold text-amber-300">{checkOut} ({HOTEL_INFO.checkOut})</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 block">Room Type</span>
                    <span className="font-semibold text-zinc-100">{currentRoom.name}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 block">Guests</span>
                    <span className="font-semibold text-zinc-100">{adults} Adults {children > 0 ? `, ${children} Children` : ''}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-amber-500/20 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-zinc-400 block">Payment Method</span>
                    <span className="text-xs font-semibold text-zinc-200">
                      {paymentMethod === 'hotel' ? 'Pay at Hotel Counter' : paymentMethod === 'fpx' ? 'FPX Online Banking' : 'Credit Card'}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-zinc-400 block">Total Amount</span>
                    <span className="text-lg font-bold text-gold-gradient tabular-nums">RM {grandTotalRM}</span>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-zinc-500 border-t border-dashed border-zinc-800">
                  📍 Address: {HOTEL_INFO.address}
                  <br />
                  📞 Front Desk: {HOTEL_INFO.phone}
                </div>

              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/${HOTEL_INFO.whatsappPhone}?text=Hi%20D'Metro%20Hotel,%20I%20have%20confirmed%20booking%20${bookingRef}%20for%20${encodeURIComponent(guestName)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 py-2.5 px-4 bg-emerald-900/50 hover:bg-emerald-800/60 text-emerald-300 border border-emerald-500/40 rounded-xl text-xs font-semibold transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Send Voucher via WhatsApp</span>
                </a>

                <button
                  onClick={() => window.print()}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 py-2.5 px-4 bg-white/10 hover:bg-white/15 text-zinc-200 border border-amber-500/30 rounded-xl text-xs font-semibold transition-colors"
                >
                  <Download className="w-4 h-4 text-amber-400" />
                  <span>Print Voucher</span>
                </button>

                <button
                  onClick={resetAndClose}
                  className="w-full sm:w-auto py-2.5 px-6 bg-gold-gradient text-slate-950 rounded-xl text-xs font-bold hover:opacity-95 transition-opacity"
                >
                  DONE
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
};
