/**
 * ════════════════════════════════════════════════════════════════
 * data/photos-events.js  —  EVENT PHOTOS
 * ════════════════════════════════════════════════════════════════
 *
 * Festival, candle night, illumination, and seasonal event photos.
 * Folders: assets/images/travel/japan/
 *
 * HOW TO ADD EVENT PHOTOS:
 * 1. Drop files in assets/images/travel/japan/
 * 2. Copy a block below, paste at bottom, set event: to match a key in events.js
 * 3. Save. Done.
 * ════════════════════════════════════════════════════════════════
 */

const PHOTOS_EVENTS = [

  /* ── ENOSHIMA — CANDLE NIGHT ──────────────────────────────── */
  {
    src: 'assets/images/travel/japan/Enoshima-japan1.jpg',
    cat: 'event', location: 'enoshima', event: 'enoshima-candle-night',
    section: ['photography', 'travel-japan', 'event'],
    captionEn: 'Candle jars glowing — Enoshima Sea Candle festival',
    captionBn: 'এনোশিমা সি ক্যান্ডেল উৎসবে মোমের বয়াম জ্বলছে',
    locationEn: 'Enoshima, Kanagawa, Japan', locationBn: 'এনোশিমা, কানাগাওয়া, জাপান',
    height: '300px', featured: true,
  },
  {
    src: 'assets/images/travel/japan/Enoshima-japan7.jpg',
    cat: 'event', location: 'enoshima', event: 'enoshima-candle-night',
    section: ['photography', 'travel-japan', 'event'],
    captionEn: 'Coloured candles and glowing arch — Enoshima festival',
    captionBn: 'রঙিন মোমবাতি ও জ্বলন্ত খিলান — এনোশিমা উৎসব',
    locationEn: 'Enoshima, Kanagawa, Japan', locationBn: 'এনোশিমা, কানাগাওয়া, জাপান',
    height: '380px', featured: true,
  },
  {
    src: 'assets/images/travel/japan/Enoshima-japan6.jpg',
    cat: 'event', location: 'enoshima', event: 'enoshima-candle-night',
    section: ['photography', 'travel-japan', 'event'],
    captionEn: 'Enoshima Sea Candle tower — warm candlelight night',
    captionBn: 'এনোশিমা সি ক্যান্ডেল টাওয়ার — উষ্ণ মোমবাতির রাত',
    locationEn: 'Enoshima, Kanagawa, Japan', locationBn: 'এনোশিমা, কানাগাওয়া, জাপান',
    height: '420px', featured: true,
  },
  {
    src: 'assets/images/travel/japan/Enoshima-japan5.jpg',
    cat: 'event', location: 'enoshima', event: 'enoshima-candle-night',
    section: ['photography', 'travel-japan', 'event'],
    captionEn: 'Sea Candle tower through illuminated trees',
    captionBn: 'আলোকিত গাছের মধ্য দিয়ে সি ক্যান্ডেল টাওয়ার',
    locationEn: 'Enoshima, Kanagawa, Japan', locationBn: 'এনোশিমা, কানাগাওয়া, জাপান',
    height: '340px', featured: false,
  },
  {
    src: 'assets/images/travel/japan/Enoshima-japan4.jpg',
    cat: 'event', location: 'enoshima', event: 'enoshima-candle-night',
    section: ['photography', 'travel-japan', 'event'],
    captionEn: 'Colourful candle pathway — Enoshima night festival',
    captionBn: 'রঙিন মোমবাতির পথ — এনোশিমা রাতের উৎসব',
    locationEn: 'Enoshima, Kanagawa, Japan', locationBn: 'এনোশিমা, কানাগাওয়া, জাপান',
    height: '360px', featured: true,
  },

  /*
   * ADD MORE EVENT PHOTOS HERE:
   * {
   *   src: 'assets/images/travel/japan/MY-EVENT-PHOTO.jpg',
   *   cat: 'event', location: 'tokyo', event: 'your-event-key',
   *   section: ['photography', 'travel-japan', 'event'],
   *   captionEn: 'Caption', captionBn: 'বাংলা',
   *   locationEn: 'Tokyo, Japan', locationBn: 'টোকিও, জাপান',
   *   height: '340px', featured: false,
   * },
   */
];
