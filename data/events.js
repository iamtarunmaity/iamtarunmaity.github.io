/**
 * ════════════════════════════════════════════════════════════════
 * data/events.js  —  EVENT GALLERIES
 * ════════════════════════════════════════════════════════════════
 *
 * Each event here becomes a gallery card in the Events section.
 * Photos are pulled automatically from photos.js where
 * event: 'matching-key'
 *
 * ── HOW TO ADD A NEW EVENT ──────────────────────────────────────
 * 1. Copy any event block below
 * 2. Give it a unique key (e.g. 'shibuya-halloween-2025')
 * 3. Fill in titleEn, descEn, coverPhoto, icon, etc.
 * 4. In photos.js, set event: 'shibuya-halloween-2025' on the photos
 * 5. Save both files. Done.
 * ════════════════════════════════════════════════════════════════
 */

const EVENTS = {

  /* ── ENOSHIMA CANDLE NIGHT ───────────────────────────────────── */
  'enoshima-candle-night': {
    titleEn:    'Enoshima Sea Candle — Candle Night',
    titleBn:    'এনোশিমা সি ক্যান্ডেল — মোমবাতির রাত',
    dateEn:     'Winter 2024',
    dateBn:     'শীতকাল ২০২৪',
    locationEn: 'Enoshima, Kanagawa, Japan',
    locationBn: 'এনোশিমা, কানাগাওয়া, জাপান',
    descEn:     'Thousands of candles illuminate the grounds of Enoshima island for the annual Candle Night event. The iconic Sea Candle lighthouse glows warm against the winter sky — a magical atmosphere where every corner offers a frame worth keeping.',
    descBn:     'ক্যান্ডেল নাইট অনুষ্ঠানের জন্য এনোশিমা দ্বীপের মাঠ হাজার হাজার মোমবাতিতে আলোকিত হয়। আইকনিক সি ক্যান্ডেল বাতিঘর শীতের আকাশের বিপরীতে উষ্ণভাবে জ্বলে।',
    coverPhoto: 'assets/images/travel/japan/Enoshima-japan6.jpg',
    icon:       '🕯️',
    searchText: 'enoshima candle night sea candle tower kanagawa japan winter festival light',
  },

  /* ── KAWAGOE TULIP FESTIVAL ─────────────────────────────────── */
  'kawagoe-tulip': {
    titleEn:    'Kawagoe Tulip Festival',
    titleBn:    'কাওয়াগোই টিউলিপ উৎসব',
    dateEn:     'Spring 2025',
    dateBn:     'বসন্ত ২০২৫',
    locationEn: 'Kawagoe, Saitama, Japan',
    locationBn: 'কাওয়াগোই, সাইতামা, জাপান',
    descEn:     'Fields of vivid tulips in bloom at Kawagoe — captured after rain, the droplets on each petal adding texture and life. A short trip from Wako that rewards patience and a macro lens.',
    descBn:     'কাওয়াগোইতে রঙিন টিউলিপের মাঠ — বৃষ্টির পরে ধরা, প্রতিটি পাপড়িতে ফোঁটা জীবন্ততা যোগ করে।',
    coverPhoto: 'assets/images/nature/naturetulip.jpg',
    icon:       '🌷',
    searchText: 'kawagoe tulip flower festival spring saitama japan macro rain',
  },

  /* ── KAWAGOE SAKURA NIGHT ───────────────────────────────────── */
  'kawagoe-sakura': {
    titleEn:    'Kawagoe Sakura — Night Canal',
    titleBn:    'কাওয়াগোই সাকুরা — রাতের খাল',
    dateEn:     'Spring 2025',
    dateBn:     'বসন্ত ২০২৫',
    locationEn: 'Kawagoe, Saitama, Japan',
    locationBn: 'কাওয়াগোই, সাইতামা, জাপান',
    descEn:     'Cherry blossoms arch over the old canal at Kawagoe — shot at dusk as lanterns light the water. The sakura frames the reflection below, creating a soft pink tunnel of light.',
    descBn:     'কাওয়াগোইতে পুরনো খালের উপর চেরি ফুলের খিলান — সন্ধ্যায় যখন লণ্ঠন জলকে আলোকিত করে।',
    coverPhoto: 'assets/images/nature/natureKawagoe.jpg',
    icon:       '🌸',
    searchText: 'kawagoe sakura cherry blossom night canal lantern spring saitama',
  },

  /* ── KAWAGOE WISTERIA ───────────────────────────────────────── */
  'kawagoe-wisteria': {
    titleEn:    'Kawagoe Wisteria — Portrait Session',
    titleBn:    'কাওয়াগোই উইস্টেরিয়া — পোর্ট্রেট সেশন',
    dateEn:     'Spring 2025',
    dateBn:     'বসন্ত ২০২৫',
    locationEn: 'Kawagoe, Saitama, Japan',
    locationBn: 'কাওয়াগোই, সাইতামা, জাপান',
    descEn:     'The wisteria tunnels at Kawagoe in full bloom — cascades of purple flowers against clear spring light. A natural backdrop that turns any portrait into something memorable.',
    descBn:     'কাওয়াগোইতে পূর্ণ ফুলে ওঠা উইস্টেরিয়া টানেল — স্বচ্ছ বসন্তের আলোয় বেগুনি ফুলের ক্যাসকেড।',
    coverPhoto: 'assets/images/portrait/photo1.jpg',
    icon:       '💜',
    searchText: 'kawagoe wisteria purple flower portrait spring japan couple',
  },

  /* ── ADD A NEW EVENT HERE ───────────────────────────────────────
   *
   * Copy this template, give it a unique key, fill in the fields.
   * Then in photos.js set event: 'your-new-key' on the photos.
   *
   * 'your-event-key': {
   *   titleEn:    'Event Title in English',
   *   titleBn:    'বাংলায় ইভেন্টের শিরোনাম',
   *   dateEn:     'Month Year',
   *   dateBn:     'মাস বছর',
   *   locationEn: 'City, Country',
   *   locationBn: 'শহর, দেশ',
   *   descEn:     'A sentence or two about the event.',
   *   descBn:     'ইভেন্ট সম্পর্কে এক বা দুটি বাক্য।',
   *   coverPhoto: 'assets/images/travel/japan/cover-photo.jpg',
   *   icon:       '📸',
   *   searchText: 'keywords separated by spaces for the search feature',
   * },
   *
   * ──────────────────────────────────────────────────────────── */

};
