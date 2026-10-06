export interface Room {
  id: string;
  name: string;
  category: 'Standard' | 'Deluxe' | 'Executive' | 'Family';
  priceRM: number;
  originalPriceRM?: number;
  image: string;
  capacity: string;
  bedType: string;
  sizeM2: number;
  description: string;
  amenities: string[];
  featured?: boolean;
}

export interface Facility {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  image?: string;
  hours?: string;
  highlights: string[];
}

export const HOTEL_INFO = {
  name: "D'Metro Hotel",
  tagline: "Unparalleled Comfort & Luxury in Shah Alam",
  phone: "+60123009415",
  whatsappPhone: "60123009415",
  email: "reservations@dmetrohotel.com",
  address: "10, Jalan Nelayan 19/D, Seksyen 19, 40300 Shah Alam, Selangor, Malaysia",
  city: "Shah Alam",
  state: "Selangor",
  country: "Malaysia",
  postalCode: "40300",
  currency: "RM",
  currencyCode: "MYR",
  checkIn: "2:00 PM",
  checkOut: "12:00 PM",
  mapCoordinates: { lat: 3.0489, lng: 101.5302 }
};

export const ROOMS_DATA: Room[] = [
  {
    id: "standard-queen",
    name: "Standard Queen Room",
    category: "Standard",
    priceRM: 148,
    originalPriceRM: 180,
    image: "/assets/images/room_standard_malaysian_1791284301420.jpg",
    capacity: "2 Adults",
    bedType: "1 Queen Bed",
    sizeM2: 24,
    description: "Designed for business travelers and couples seeking refined comfort. Offers high-speed Wi-Fi, work desk, and plush bedding.",
    amenities: [
      "Free High-Speed Wi-Fi",
      "Air Conditioning",
      "43-inch Smart Flat TV",
      "Private Ensuite Bathroom",
      "Hot & Cold Shower",
      "Work Desk & Ergonomic Chair",
      "Coffee & Tea Maker",
      "Hairdryer & Toiletries"
    ],
    featured: false
  },
  {
    id: "deluxe-king",
    name: "Deluxe King Room",
    category: "Deluxe",
    priceRM: 198,
    originalPriceRM: 240,
    image: "/assets/images/room_deluxe_malaysian_1791284144660.jpg",
    capacity: "2 Adults",
    bedType: "1 King Bed",
    sizeM2: 32,
    description: "Spacious and elegant Deluxe King room featuring ambient golden lighting, premium mattress, and city lounge views.",
    amenities: [
      "Free High-Speed Wi-Fi",
      "Individually Controlled AC",
      "50-inch 4K Smart TV",
      "Luxury Ensuite Bathroom",
      "Rainfall Shower & Bath Amenities",
      "Mini Refrigerator",
      "Electronic In-Room Safe",
      "Complimentary Bottled Water"
    ],
    featured: true
  },
  {
    id: "executive-suite",
    name: "Executive Grand Suite",
    category: "Executive",
    priceRM: 288,
    originalPriceRM: 350,
    image: "/assets/images/room_executive_malaysian_1791284163283.jpg",
    capacity: "2 Adults, 1 Child",
    bedType: "1 Super King Bed",
    sizeM2: 48,
    description: "Our signature luxury suite featuring a separate living room, plush velvet sofa, work zone, and marble bathroom.",
    amenities: [
      "Free Ultra-Fast Wi-Fi",
      "Separate Living Lounge Area",
      "55-inch Smart TV with Streaming",
      "Opulent Marble Bathroom",
      "Rainfall Shower & Deep Soaking Tub",
      "Nespresso Coffee Machine",
      "Complimentary Minibar Refreshments",
      "Bathrobes & Plush Slippers"
    ],
    featured: true
  },
  {
    id: "family-suite",
    name: "Royal Family Suite",
    category: "Family",
    priceRM: 320,
    originalPriceRM: 390,
    image: "/assets/images/room_family_malaysian_1791284314630.jpg",
    capacity: "4 Adults / Family",
    bedType: "2 Queen Beds",
    sizeM2: 56,
    description: "Ideal for families or group stayovers. Generous space with double queen beds, cozy dining nook, and full luxury amenities.",
    amenities: [
      "Free High-Speed Wi-Fi",
      "Dual Queen Beds with Premium Linen",
      "55-inch Smart TV",
      "Spacious Family Wardrobe",
      "Large Ensuite Bathroom with Double Vanities",
      "Refrigerator & Tea/Coffee Bar",
      "24-Hour Room Dining Access",
      "In-Room Safe & Electronic Lock"
    ],
    featured: true
  }
];

export const FACILITIES_DATA: Facility[] = [
  {
    id: "wifi",
    title: "High-Speed Wi-Fi Access",
    shortDesc: "Complimentary ultra-fast optical fiber connectivity throughout the hotel.",
    fullDesc: "Stay seamlessly connected whether you are streaming, working remotely, or video calling loved ones. Optical fiber network covers all guest rooms and public lounges.",
    iconName: "Wifi",
    image: "/assets/images/dmetro_lobby_malaysian_1791284119512.jpg",
    hours: "24 / 7 Available",
    highlights: ["100Mbps High Speed", "Seamless Coverage in All Rooms", "Secure Private Guests Network"]
  },
  {
    id: "parking",
    title: "Secure On-Site Parking",
    shortDesc: "Well-lit private parking bays with 24-hour security CCTV surveillance.",
    fullDesc: "Hassle-free parking right at D'Metro Hotel premises. Dedicated guest parking bays with 24/7 CCTV recording and security personnel guard on duty.",
    iconName: "Car",
    image: "/assets/images/parking_malaysian_1791284334795.jpg",
    hours: "24 / 7 Access",
    highlights: ["Monitored CCTV Security", "Convenient Hotel Access", "Complimentary for Hotel Guests"]
  },
  {
    id: "reception",
    title: "24-Hour Front Desk & Concierge",
    shortDesc: "Warm Malaysian hospitality and round-the-clock check-in support.",
    fullDesc: "Our dedicated multilingual reception team is ready at any time of day or night to assist with check-in, local guidance, taxi bookings, and guest requests.",
    iconName: "Clock",
    image: "/assets/images/reception_malaysian_1791284325642.jpg",
    hours: "24 Hours Daily",
    highlights: ["Express Check-In / Check-Out", "Luggage Storage Service", "Taxi & E-Hailing Support"]
  },
  {
    id: "housekeeping",
    title: "Daily Housekeeping & Laundry",
    shortDesc: "Pristine hygiene standards with daily room refresh and dry cleaning.",
    fullDesc: "Enjoy crisp fresh linens, sanitized surfaces, and meticulous room care every single day. Express laundry and ironing services available upon request.",
    iconName: "Sparkles",
    image: "/assets/images/room_deluxe_malaysian_1791284144660.jpg",
    hours: "8:00 AM – 6:00 PM",
    highlights: ["Sanitized Linen & Towels", "Daily Turn-down Service", "Express Laundry & Pressing"]
  },
  {
    id: "dining",
    title: "D'Metro Cafe & Lounge",
    shortDesc: "Delectable local Malaysian favorites, gourmet coffee, and light meals.",
    fullDesc: "Indulge in authentic Malaysian breakfast spread including Nasi Lemak and Teh Tarik, fresh artisan coffee, and evening snacks served in our ambient dining lounge.",
    iconName: "Utensils",
    image: "/assets/images/malaysian_dining_cafe_1791284133710.jpg",
    hours: "7:00 AM – 10:30 PM",
    highlights: ["Gourmet Nasi Lemak & Local Favorites", "Artisan Coffee & Teh Tarik Bar", "In-Room Dining Delivery"]
  },
  {
    id: "business",
    title: "Executive Business Corner",
    shortDesc: "Private meeting corner equipped with high-speed printing & wireless facilities.",
    fullDesc: "Equipped with computer terminals, laser printing, scanning, and quiet workspace for corporate travelers visiting Shah Alam business districts.",
    iconName: "Briefcase",
    image: "/assets/images/business_malaysian_1791284344921.jpg",
    hours: "7:00 AM – 11:00 PM",
    highlights: ["Laser Printing & Scanning", "Quiet Workspace Desk", "High-speed Ethernet Access"]
  }
];

export const GALLERY_IMAGES = [
  {
    id: "hero-ext",
    title: "D'Metro Hotel Exterior at Dusk",
    subtitle: "Seksyen 19, Shah Alam, Selangor",
    image: "/assets/images/hero_dmetro_malaysian_1791284105390.jpg",
    category: "Exterior & Architecture"
  },
  {
    id: "lobby-rec",
    title: "Reception Lounge & Warm Hospitality",
    subtitle: "24-Hour Concierge Desk with Fresh Orchids",
    image: "/assets/images/reception_malaysian_1791284325642.jpg",
    category: "Lobby & Lounge"
  },
  {
    id: "dining-nasi-lemak",
    title: "D'Metro Cafe Gourmet Nasi Lemak Spread",
    subtitle: "Authentic Malaysian Breakfast & Teh Tarik",
    image: "/assets/images/malaysian_dining_cafe_1791284133710.jpg",
    category: "Dining & Cafe"
  },
  {
    id: "tea-lounge",
    title: "Malaysian Afternoon Tea & Kuih Lounge",
    subtitle: "Artisan Tea & Traditional Delicacies",
    image: "/assets/images/malaysian_tea_lounge_1791284354755.jpg",
    category: "Dining & Cafe"
  },
  {
    id: "deluxe-room",
    title: "Deluxe King Room Interior",
    subtitle: "Plush King Bed with Ambient Golden Lighting",
    image: "/assets/images/room_deluxe_malaysian_1791284144660.jpg",
    category: "Rooms & Suites"
  },
  {
    id: "exec-suite",
    title: "Executive Grand Suite Living Zone",
    subtitle: "Spacious Living Area with Velvet Sofa",
    image: "/assets/images/room_executive_malaysian_1791284163283.jpg",
    category: "Rooms & Suites"
  },
  {
    id: "family-suite",
    title: "Royal Family Suite Double Queen Beds",
    subtitle: "Luxurious Space for Family Stays",
    image: "/assets/images/room_family_malaysian_1791284314630.jpg",
    category: "Rooms & Suites"
  },
  {
    id: "blue-mosque",
    title: "Sultan Salahuddin Abdul Aziz Shah Mosque",
    subtitle: "Famous Blue Mosque, 9 mins from D'Metro Hotel",
    image: "/assets/images/shah_alam_landmark_1791284177008.jpg",
    category: "Shah Alam Attractions"
  }
];

export const NEARBY_ATTRACTION_DATA = [
  { name: "Sultan Salahuddin Abdul Aziz Shah Mosque (Blue Mosque)", distance: "4.8 km", time: "9 mins drive", desc: "Malaysia's magnificent iconic Islamic landmark.", image: "/assets/images/shah_alam_landmark_1791284177008.jpg" },
  { name: "KTM Shah Alam Train Station", distance: "1.2 km", time: "3 mins drive", desc: "Direct rail link to KL Sentral and Klang." },
  { name: "AEON Mall Shah Alam (Seksyen 13)", distance: "3.5 km", time: "7 mins drive", desc: "Premier shopping, dining & cinema complex." },
  { name: "SACC Mall & Convention Centre", distance: "4.2 km", time: "8 mins drive", desc: "Major exhibition hub and shopping venue." },
  { name: "UiTM Shah Alam Main Campus", distance: "5.1 km", time: "10 mins drive", desc: "Leading national university campus." },
  { name: "Sultan Abdul Aziz Shah Airport (Subang SZB)", distance: "14.0 km", time: "18 mins drive", desc: "Convenient regional domestic airport hub." }
];

export const WHY_CHOOSE_US = [
  {
    title: "Comfortable Accommodation",
    desc: "Ergonomically designed luxury beds, soundproof windows, and ambient lighting guarantee restful nights.",
    icon: "Bed",
    image: "/assets/images/room_executive_malaysian_1791284163283.jpg"
  },
  {
    title: "Convenient Shah Alam Location",
    desc: "Situated right in Seksyen 19, within minutes of major highways (ELITE, KESAS, Federal Highway) & public transport.",
    icon: "MapPin",
    image: "/assets/images/shah_alam_landmark_1791284177008.jpg"
  },
  {
    title: "Professional Service",
    desc: "Attentive, friendly Malaysian hospitality team dedicated to making your stay effortless and memorable.",
    icon: "ShieldCheck",
    image: "/assets/images/reception_malaysian_1791284325642.jpg"
  },
  {
    title: "Clean & Modern Rooms",
    desc: "Strict daily sanitation standards, immaculate bathrooms, and contemporary high-end room furnishings.",
    icon: "Sparkles",
    image: "/assets/images/room_deluxe_malaysian_1791284144660.jpg"
  },
  {
    title: "Guest-Focused Experience",
    desc: "Flexible check-in options, direct WhatsApp line, and transparent pricing without hidden surprise fees.",
    icon: "HeartHandshake",
    image: "/assets/images/malaysian_tea_lounge_1791284354755.jpg"
  }
];

export const TESTIMONIALS = [
  {
    quote: "D'Metro Hotel exceeded my expectations during my business trip to Shah Alam. The room was spotless, Wi-Fi super fast, and the staff exceptionally polite!",
    author: "Ahmad Farhan",
    location: "Kuala Lumpur, Malaysia",
    rating: 5,
    room: "Executive Grand Suite"
  },
  {
    quote: "Lovely dark purple and gold aesthetic! Very serene atmosphere right in Seksyen 19. Great value for money and extremely comfortable beds.",
    author: "Siti Sarah & Family",
    location: "Penang, Malaysia",
    rating: 5,
    room: "Royal Family Suite"
  },
  {
    quote: "Top notch service and very convenient location near KTM Shah Alam. Will definitely book again whenever I visit Selangor.",
    author: "Tan Wei Lun",
    location: "Johor Bahru, Malaysia",
    rating: 5,
    room: "Deluxe King Room"
  }
];
