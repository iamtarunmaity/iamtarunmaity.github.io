/**
 * ════════════════════════════════════════════════════════════════
 * data/services.js  —  PHOTOGRAPHY SERVICES & BOOKING
 * ════════════════════════════════════════════════════════════════
 *
 * Each service appears as a card in the Services section.
 * Clients can see what's included and contact you to book.
 *
 * ── HOW TO ADD A NEW SERVICE ────────────────────────────────────
 * Copy any service block below, give it a unique id, fill in
 * the fields, and save. The card appears automatically.
 * ════════════════════════════════════════════════════════════════
 */

const SERVICES = [

  /* ── WEEKEND PORTRAIT — TOKYO ──────────────────────────────── */
  {
    id: 'weekend-portrait',
    icon: '🏙️',
    titleEn: 'Weekend Portrait — Tokyo & Surroundings',
    titleBn: 'সাপ্তাহিক প্রতিকৃতি — টোকিও ও পার্শ্ববর্তী এলাকা',
    descEn:  'Looking for a relaxed weekend portrait session in and around Tokyo? I explore festivals, parks, hidden neighbourhoods, and iconic spots — helping you get natural, candid shots at amazing locations. Available every weekend from Wako, Saitama.',
    descBn:  'টোকিও ও আশেপাশে একটি নৈমিত্তিক সাপ্তাহিক পোর্ট্রেট সেশন খুঁজছেন? প্রতি সপ্তাহান্তে ওয়াকো, সাইতামা থেকে উপলব্ধ।',
    includesEn: [
      '2–3 hour outdoor session',
      'Natural candid & posed portraits',
      'Locations: parks, festivals, streets, shrines',
      '30+ edited photos delivered digitally',
      'Available every weekend',
    ],
    includesBn: [
      '২–৩ ঘণ্টার বাহ্যিক সেশন',
      'প্রাকৃতিক ক্যান্ডিড ও পোজড পোর্ট্রেট',
      '৩০+ সম্পাদিত ছবি ডিজিটালি ডেলিভারি',
      'প্রতি সপ্তাহান্তে উপলব্ধ',
    ],
    coverPhoto: 'assets/images/portrait/photo1.jpg',
    searchText: 'weekend portrait tokyo session park festival booking saitama',
    available:  true,
  },

  /* ── EVENT & FESTIVAL PHOTOGRAPHY ──────────────────────────── */
  {
    id: 'event-festival',
    icon: '🕯️',
    titleEn: 'Event & Festival Photography — Japan',
    titleBn: 'ইভেন্ট ও উৎসব ফটোগ্রাফি — জাপান',
    descEn:  'Japan has extraordinary festivals and seasonal events year-round — Candle Nights, sakura season, wisteria, summer matsuri. I document these beautifully and can plan a photo trip around the best seasonal events for you.',
    descBn:  'জাপানে সারা বছর অসাধারণ উৎসব ও মৌসুমী অনুষ্ঠান থাকে — ক্যান্ডেল নাইট, সাকুরা মৌসুম, উইস্টেরিয়া, মাৎসুরি।',
    includesEn: [
      'Festival & night event coverage',
      'Seasonal event planning advice',
      'Enoshima, Kawagoe, Tokyo, Kyoto & more',
      'Gallery delivered within 2 weeks',
      'JPG + RAW files available',
    ],
    includesBn: [
      'উৎসব ও রাতের ইভেন্ট কভারেজ',
      'মৌসুমী ইভেন্ট পরিকল্পনা পরামর্শ',
      '২ সপ্তাহের মধ্যে গ্যালারি ডেলিভারি',
    ],
    coverPhoto: 'assets/images/travel/japan/Enoshima-japan6.jpg',
    searchText: 'event festival photography candle sakura matsuri japan booking',
    available:  true,
  },

  /* ── PRE-WEDDING PHOTOGRAPHY ────────────────────────────────── */
  {
    id: 'prewedding',
    icon: '💍',
    titleEn: 'Pre-Wedding Photography — Japan',
    titleBn: 'প্রি-ওয়েডিং ফটোগ্রাফি — জাপান',
    descEn:  'Japan is one of the most magical destinations for pre-wedding photos — sakura, bamboo groves, temple gardens, and scenic coastlines. I plan your entire session around the best locations and optimal light.',
    descBn:  'জাপান প্রি-ওয়েডিং ফটোর জন্য সবচেয়ে জাদুকরী গন্তব্যগুলির একটি — সাকুরা, বাঁশের বন, মন্দির বাগান।',
    includesEn: [
      'Full-day location scouting & shoot',
      'Enoshima, Kamakura, Kyoto, Tokyo options',
      '100+ edited photos',
      'Print-ready high resolution',
      'Styling & location advice included',
    ],
    includesBn: [
      'সারাদিনের লোকেশন স্কাউটিং ও শুট',
      'এনোশিমা, কামাকুরা, কিয়োতো, টোকিও বিকল্প',
      '১০০+ সম্পাদিত ছবি প্রিন্ট-রেডি রেজোলিউশনে',
    ],
    coverPhoto: 'assets/images/travel/japan/Enoshima-japan6.jpg',
    searchText: 'prewedding wedding photography japan sakura kyoto tokyo couples booking',
    available:  true,
  },

  /* ── ADD A NEW SERVICE HERE ─────────────────────────────────────
   *
   * {
   *   id: 'unique-service-id',
   *   icon: '📸',
   *   titleEn: 'Service Name',
   *   titleBn: 'বাংলা নাম',
   *   descEn:  'What you offer.',
   *   descBn:  'বাংলায় বিবরণ।',
   *   includesEn: ['Item 1', 'Item 2', 'Item 3'],
   *   includesBn: ['আইটেম ১', 'আইটেম ২'],
   *   coverPhoto: 'assets/images/portfolio/cover.jpg',
   *   searchText: 'keywords for search',
   *   available: true,
   * },
   *
   * ─────────────────────────────────────────────────────────── */

];
