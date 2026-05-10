/**
 * ════════════════════════════════════════════════════════════════
 * data/photos.js  —  ASSEMBLER ONLY
 * ════════════════════════════════════════════════════════════════
 *
 * DO NOT add photos here. Add them in the category files:
 *   data/photos-events.js   ← festival & event photos
 *   data/photos-portrait.js ← portrait & people photos
 *   data/photos-nature.js   ← nature, flowers, landscape
 *   data/photos-street.js   ← street & urban photography
 *   data/photos-science.js  ← molecular viz & science images
 * ════════════════════════════════════════════════════════════════
 */

const PHOTOS = [
  ...(typeof PHOTOS_EVENTS   !== 'undefined' ? PHOTOS_EVENTS   : []),
  ...(typeof PHOTOS_PORTRAIT !== 'undefined' ? PHOTOS_PORTRAIT : []),
  ...(typeof PHOTOS_NATURE   !== 'undefined' ? PHOTOS_NATURE   : []),
  ...(typeof PHOTOS_STREET   !== 'undefined' ? PHOTOS_STREET   : []),
  ...(typeof PHOTOS_SCIENCE  !== 'undefined' ? PHOTOS_SCIENCE  : []),
];
