/**
 * ════════════════════════════════════════════════════════════════
 * data/photos-portrait.js  —  PORTRAIT PHOTOS
 * ════════════════════════════════════════════════════════════════
 *
 * All portrait / people photography lives here.
 * Folder: assets/images/portrait/
 *
 * HOW TO ADD A PORTRAIT PHOTO:
 * 1. Drop the file in assets/images/portrait/
 * 2. Copy any entry below and paste at the bottom of PHOTOS_PORTRAIT
 * 3. Update src, captionEn, captionBn, locationEn, locationBn,
 *    location, event ('' if none), height, featured
 * 4. Save. Done.
 *
 * HEIGHT GUIDE:
 *   Tall portrait shots → 340px–420px
 *   Landscape shots     → 240px–300px
 * ════════════════════════════════════════════════════════════════
 */

const PHOTOS_PORTRAIT = [

  /* ── ENOSHIMA — COAST & BEACH ─────────────────────────────── */
  {
    src: 'assets/images/portrait/IMG_2969.jpg',
    cat: 'portrait', location: 'enoshima', event: '',
    section: ['photography', 'travel-japan'],
    captionEn: 'Stroll along the black sand beach — Enoshima coast',
    captionBn: 'কালো বালির সৈকতে প্রতিবিম্বের সাথে হাঁটা',
    locationEn: 'Enoshima Coast, Kanagawa, Japan',
    locationBn: 'এনোশিমা উপকূল, কানাগাওয়া, জাপান',
    height: '380px', featured: true,
  },
  {
    src: 'assets/images/portrait/IMG_3101.jpg',
    cat: 'portrait', location: 'enoshima', event: '',
    section: ['photography', 'travel-japan'],
    captionEn: 'Golden hour reflection on Enoshima coastal rocks',
    captionBn: 'এনোশিমার পাথুরে উপকূলে গোধূলির প্রতিবিম্ব',
    locationEn: 'Enoshima, Kanagawa, Japan',
    locationBn: 'এনোশিমা, কানাগাওয়া, জাপান',
    height: '400px', featured: true,
  },
  {
    src: 'assets/images/portrait/IMG_3137.jpg',
    cat: 'portrait', location: 'enoshima', event: '',
    section: ['photography', 'travel-japan'],
    captionEn: 'Sunset celebration lift against Mount Fuji',
    captionBn: 'মাউন্ট ফুজির সামনে সূর্যাস্তে আনন্দময় মুহূর্ত',
    locationEn: 'Enoshima Coast, Kanagawa, Japan',
    locationBn: 'এনোশিমা উপকূল, কানাগাওয়া, জাপান',
    height: '340px', featured: true,
  },
  {
    src: 'assets/images/portrait/IMG_3030.jpg',
    cat: 'portrait', location: 'enoshima', event: '',
    section: ['photography', 'travel-japan'],
    captionEn: 'Intimate portrait framed by heart hands',
    captionBn: 'হাতের তৈরি ভালোবাসার ফ্রেমে অন্তরঙ্গ প্রতিকৃতি',
    locationEn: 'Enoshima, Kanagawa, Japan',
    locationBn: 'এনোশিমা, কানাগাওয়া, জাপান',
    height: '360px', featured: false,
  },
  {
    src: 'assets/images/portrait/enoshima-couple.jpg',
    cat: 'portrait', location: 'enoshima', event: '',
    section: ['photography', 'travel-japan'],
    captionEn: 'Couple at Enoshima',
    captionBn: 'এনোশিমায় দম্পতি',
    locationEn: 'Enoshima, Kanagawa, Japan',
    locationBn: 'এনোশিমা, কানাগাওয়া, জাপান',
    height: '320px', featured: false,
  },

  /* ── ENOSHIMA — ILLUMINATION EVENT ────────────────────────── */
  {
    src: 'assets/images/portrait/IMG_3352.jpg',
    cat: 'portrait', location: 'enoshima', event: 'enoshima-illumination',
    section: ['photography', 'travel-japan', 'event'],
    captionEn: 'Winter night illumination — Enoshima',
    captionBn: 'শীতের রাতে আলোকসজ্জা — এনোশিমা',
    locationEn: 'Enoshima, Kanagawa, Japan',
    locationBn: 'এনোশিমা, কানাগাওয়া, জাপান',
    height: '340px', featured: true,
  },
  {
    src: 'assets/images/portrait/IMG_3290.jpg',
    cat: 'portrait', location: 'enoshima', event: 'enoshima-illumination',
    section: ['photography', 'travel-japan', 'event'],
    captionEn: 'Romantic proposal beneath the Sea Candle illumination',
    captionBn: 'আলোকিত সি ক্যান্ডেল টাওয়ারের নিচে বিয়ের প্রস্তাব',
    locationEn: 'Enoshima, Kanagawa, Japan',
    locationBn: 'এনোশিমা, কানাগাওয়া, জাপান',
    height: '380px', featured: false,
  },
  {
    src: 'assets/images/portrait/IMG_3296.jpg',
    cat: 'portrait', location: 'enoshima', event: 'enoshima-illumination',
    section: ['photography', 'travel-japan', 'event'],
    captionEn: 'Cosy moments inside an illuminated festival tent',
    captionBn: 'আলোকিত উৎসবের তাঁবুর ভেতরে উষ্ণ মুহূর্ত',
    locationEn: 'Enoshima, Kanagawa, Japan',
    locationBn: 'এনোশিমা, কানাগাওয়া, জাপান',
    height: '320px', featured: false,
  },
  {
    src: 'assets/images/portrait/IMG_2583.jpg',
    cat: 'portrait', location: 'enoshima', event: 'enoshima-illumination',
    section: ['photography', 'travel-japan', 'event'],
    captionEn: 'Night portrait embrace beneath an archway of lights',
    captionBn: 'আলোকিত খিলানের নিচে রাতের প্রতিকৃতি',
    locationEn: 'Enoshima, Kanagawa, Japan',
    locationBn: 'এনোশিমা, কানাগাওয়া, জাপান',
    height: '360px', featured: false,
  },
  {
    src: 'assets/images/portrait/IMG_2525.jpg',
    cat: 'portrait', location: 'enoshima', event: 'enoshima-illumination',
    section: ['photography', 'travel-japan', 'event'],
    captionEn: 'Strolling under the umbrella amidst illuminations',
    captionBn: 'চলমান আলোকসজ্জার মাঝে ছাতার নিচে হাঁটা',
    locationEn: 'Enoshima, Kanagawa, Japan',
    locationBn: 'এনোশিমা, কানাগাওয়া, জাপান',
    height: '380px', featured: false,
  },

  /* ── KAWAGOE — WISTERIA ────────────────────────────────────── */
  {
    src: 'assets/images/portrait/wisteria-smell.jpg',
    cat: 'portrait', location: 'Enoshima', event: 'Enoshima',
    section: ['photography', 'travel-japan', 'event'],
    captionEn: 'Enoshima',
    captionBn: 'এনোশিনো',
    locationEn: 'Enoshima, Japan',
    locationBn: 'জাপান',
    height: '360px', featured: true,
  },

  /* ── AUTUMN / SEASONAL ─────────────────────────────────────── */
  {
    src: 'assets/images/portrait/autumn-leaves.jpg',
    cat: 'portrait', location: 'tokyo', event: '',
    section: ['photography'],
    captionEn: 'Playing with autumn ginkgo leaves',
    captionBn: 'শরতের জিঙ্কগো পাতা',
    locationEn: 'Japan',
    locationBn: 'জাপান',
    height: '340px', featured: false,
  },
  {
    src: 'assets/images/portrait/autumn-bicycle.jpg',
    cat: 'portrait', location: 'tokyo', event: '',
    section: ['photography'],
    captionEn: 'Autumn portrait with a bicycle',
    captionBn: 'সাইকেলের সাথে শরতের প্রতিকৃতি',
    locationEn: 'Japan',
    locationBn: 'জাপান',
    height: '360px', featured: false,
  },
  {
    src: 'assets/images/portrait/autumn-park.jpg',
    cat: 'portrait', location: 'tokyo', event: '',
    section: ['photography'],
    captionEn: 'Standing amidst the autumn leaves',
    captionBn: 'শরতের পাতার মাঝে',
    locationEn: 'Japan',
    locationBn: 'জাপান',
    height: '320px', featured: false,
  },

  /* ── WINTER / SNOW ─────────────────────────────────────────── */
  {
    src: 'assets/images/portrait/IMG_2501.jpg',
    cat: 'portrait', location: 'tokyo', event: 'winter-snow',
    section: ['photography'],
    captionEn: 'Joyful emotion inside a snow heart',
    captionBn: 'তুষারে আঁকা হৃদয়ের ভেতরে আনন্দময় মুহূর্ত',
    locationEn: 'Japan',
    locationBn: 'জাপান',
    height: '340px', featured: true,
  },

  /*
   * ── ADD MORE PORTRAIT PHOTOS HERE ────────────────────────────
   * {
   *   src: 'assets/images/portrait/YOUR-PHOTO.jpg',
   *   cat: 'portrait', location: 'tokyo', event: '',
   *   section: ['photography'],
   *   captionEn: 'Your caption',
   *   captionBn: 'বাংলা ক্যাপশন',
   *   locationEn: 'Tokyo, Japan',
   *   locationBn: 'টোকিও, জাপান',
   *   height: '340px', featured: false,
   * },
   */
];
