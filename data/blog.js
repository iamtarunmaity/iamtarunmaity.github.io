/**
 * ════════════════════════════════════════════════════════════════
 * data/blog.js  —  BLOG POSTS
 * ════════════════════════════════════════════════════════════════
 *
 * HOW TO ADD A BLOG POST:
 * 1. Copy pages/posts/_template.html → pages/posts/my-slug.html
 * 2. Write your content in that file
 * 3. Copy any post block below to the TOP of the array
 *    (most recent first)
 * 4. Set href: 'pages/posts/my-slug.html'
 * 5. Save. Done.
 * ════════════════════════════════════════════════════════════════
 */

const BLOG = [

  /* ── PHOTOGRAPHY POSTS ─────────────────────────────────────── */
  {
    date:       '2025 · Jan',
    categoryEn: 'Photography', categoryBn: 'ফটোগ্রাফি',
    titleEn:    'Shooting the Enoshima Candle Night — Settings, Gear & Tips',
    titleBn:    'এনোশিমা ক্যান্ডেল নাইট শুট — সেটিংস, গিয়ার ও টিপস',
    excerptEn:  'Thousands of candles, a glowing lighthouse, and a cold winter night. Here is everything I learned about shooting the Enoshima Sea Candle Night festival.',
    excerptBn:  'হাজার হাজার মোমবাতি, একটি জ্বলন্ত বাতিঘর এবং একটি ঠান্ডা শীতের রাত।',
    href:       '#', // ← UPDATE: 'pages/posts/enoshima-candle-night.html'
    searchText: 'enoshima candle night photography tips settings gear winter japan festival',
  },

  /* ── TRAVEL POSTS ──────────────────────────────────────────── */
  {
    date:       '2025 · Apr',
    categoryEn: 'Travel', categoryBn: 'ভ্রমণ',
    titleEn:    'Kawagoe in Spring — Tulips, Sakura & Wisteria in One Weekend',
    titleBn:    'বসন্তে কাওয়াগোই — এক সপ্তাহান্তে টিউলিপ, সাকুরা ও উইস্টেরিয়া',
    excerptEn:  'Kawagoe is less than an hour from Wako — and in spring it explodes with colour. Three different flowers, three different moods, all in one weekend.',
    excerptBn:  'কাওয়াগোই ওয়াকো থেকে এক ঘণ্টারও কম দূরে — এবং বসন্তে এটি রঙে বিস্ফোরিত হয়।',
    href:       '#', // ← UPDATE: 'pages/posts/kawagoe-spring.html'
    searchText: 'kawagoe spring tulip sakura wisteria saitama weekend trip japan',
  },

  /* ── SCIENCE POSTS ─────────────────────────────────────────── */
  {
    date:       '2024 · Dec',
    categoryEn: 'Simulation', categoryBn: 'সিমুলেশন',
    titleEn:    'What is Molecular Dynamics? A Visual Introduction',
    titleBn:    'আণবিক গতিবিদ্যা কী? একটি দৃশ্যমান ভূমিকা',
    excerptEn:  'Every simulation starts with a question: how do atoms move? Here is how we translate Newton\'s laws into a computational movie of molecular life.',
    excerptBn:  'প্রতিটি সিমুলেশন একটি প্রশ্ন দিয়ে শুরু হয়: পরমাণু কীভাবে চলে?',
    href:       '#',
    searchText: 'molecular dynamics simulation introduction polymer newton atoms',
  },
  {
    date:       '2024 · Sep',
    categoryEn: 'Nanomedicine', categoryBn: 'ন্যানোমেডিসিন',
    titleEn:    'Dendrimers: The Nano-Vehicles of Drug Delivery',
    titleBn:    'ডেনড্রিমার: ড্রাগ ডেলিভারির ন্যানো-যানবাহন',
    excerptEn:  'Why do researchers spend years studying tree-shaped molecules smaller than a virus? The answer lies in their extraordinary ability to carry drugs.',
    excerptBn:  'গবেষকরা কেন ভাইরাসের চেয়ে ছোট গাছের আকারের অণু নিয়ে বছরের পর বছর গবেষণা করেন?',
    href:       '#',
    searchText: 'dendrimer drug delivery cancer nanomedicine polymer',
  },

  /* ── LIFE AT RIKEN ──────────────────────────────────────────── */
  {
    date:       '2024 · Mar',
    categoryEn: 'Life at RIKEN', categoryBn: 'রাইকেনে জীবন',
    titleEn:    'Six Months at RIKEN: Science, Japan, and Adjustment',
    titleBn:    'রাইকেনে ছয় মাস: বিজ্ঞান, জাপান এবং মানিয়ে নেওয়া',
    excerptEn:  'Moving from Bengaluru to Wako is more than a change of address — it is a recalibration of how you think, work, and see the world.',
    excerptBn:  'পোস্টডকের জন্য বেঙ্গালুরু থেকে ওয়াকো যাওয়া শুধু ঠিকানা পরিবর্তনের বেশি।',
    href:       '#',
    searchText: 'RIKEN Japan postdoc life research experience bengaluru wako',
  },

  /* ── ACADEMICS ──────────────────────────────────────────────── */
  {
    date:       '2023 · Aug',
    categoryEn: 'Academics', categoryBn: 'শিক্ষা',
    titleEn:    'How I Cracked JEST, GATE, and CSIR-NET: An Honest Account',
    titleBn:    'কীভাবে আমি জেস্ট, গেট এবং সিএসআইআর-নেট উত্তীর্ণ হলাম',
    excerptEn:  'AIR 8 in JEST, AIR 19 in JAM, AIR 25 in CSIR-UGC NET — not luck, but a system. Here is what actually worked.',
    excerptBn:  'জেস্টে AIR 8, JAM-এ AIR 19, CSIR-UGC NET-এ AIR 25 — ভাগ্য নয়, একটি পদ্ধতি।',
    href:       '#',
    searchText: 'physics GATE JEST JAM CSIR preparation tips rank air',
  },

  /* ── ADD NEW POSTS HERE ─────────────────────────────────────────
   *
   * {
   *   date:       '2026 · Jan',
   *   categoryEn: 'Photography',   categoryBn: 'ফটোগ্রাফি',
   *   titleEn:    'Your Post Title',
   *   titleBn:    'বাংলা শিরোনাম',
   *   excerptEn:  'One or two sentence summary of the post.',
   *   excerptBn:  'পোস্টের এক বা দুটি বাক্যের সারসংক্ষেপ।',
   *   href:       'pages/posts/your-post-slug.html',
   *   searchText: 'keywords for search',
   * },
   *
   * ─────────────────────────────────────────────────────────── */

];
