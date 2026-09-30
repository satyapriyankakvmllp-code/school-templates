/**
 * siteConfig.js
 * ---------------------------------------------------------------------------
 * SINGLE SOURCE OF TRUTH for everything that changes between clients/demos:
 * logo, brand name, tagline, colors, images, videos, contact info and the
 * small bits of copy that vary site to site.
 *
 * To re-skin this template for a new client, edit ONLY this file (plus the
 * `colors` palette in tailwind.config.js — see the note in `colors` below).
 * You should not need to touch any component file.
 * ---------------------------------------------------------------------------
 */

const siteConfig = {
  brand: {
    name: 'Little Krishna',
    title: 'Little Krishna Play School',
    shortTitle: 'Play School',
    tagline: 'Where Little Minds Learn, Play and Grow',
    logo: '/assets/logo-mark.png',
    logoFull: '/assets/logo.png', // full lockup (icon + wordmark), e.g. for a splash/footer if ever needed
    favicon: '/assets/logo-mark.png',
  },

  colors: {
    // The live color values live in tailwind.config.js -> theme.extend.colors
    // (primary / secondary / accent / success). Tailwind needs full 50-900
    // shade ramps to generate utility classes, so hex values aren't wired up
    // here — but that file is the ONLY other place a rebrand touches colors.
    primary: '#ff7a1a',
    secondary: '#2aa4ff',
    accent: '#facc15',
  },

  media: {
    // Hero
    admissionsBanner: 'Admissions Open 2027–2028',
    heroImage: '/assets/images/montessori-classroom.png',
    heroVideo: '', // e.g. '/assets/videos/school-tour.mp4' — leave blank to hide

    // About section collage (4 images)
    aboutImages: [
      { src: '/assets/images/gallery-art-class.png', alt: 'Children focused on an art and craft activity' },
      { src: '/assets/images/gallery-reading.png', alt: 'Children reading together in the classroom' },
      { src: '/assets/images/gallery-activity.png', alt: 'Teacher guiding children through a hands-on activity' },
      {
        src: '/assets/images/kids-drawing-circle.png',
        alt: 'A large group of children sitting together drawing and coloring',
      },
    ],

    // Day care section
    dayCareImage: '/assets/images/day-care-teacher-children.jpg',

    // Activities cards
    // storytelling / nature keep their existing images. Music has NO image yet
    // (old one removed) - drop the new file path into musicImage when supplied.
    activityImages: [
      '/assets/images/classroom-phonics-lesson.jpg', // Storytelling
      '/assets/images/creative-play-handprint.jpg', // Creative Play (Art & Craft)
      '/assets/images/music-dance.png', // Music & Dance
      '/assets/images/gallery-celebration.png', // Nature & Outdoor Play
    ],
    socialDevelopmentImage: '/assets/images/social-development-cultural-day.jpg',
    communicationImage: '/assets/images/communication-craft-table.jpg',

    // Gallery grid (6) - order matches Gallery.jsx tiles
    galleryImages: [
      '/assets/images/classroom-phonics-lesson.jpg', // Story Time (large tile)
      '/assets/images/gallery-art-class.png', // Art & Craft
      '/assets/images/gallery-activity.png', // Play Time
      '/assets/images/day-care-teacher-children.jpg', // Learning Together (wide tile)
      '/assets/images/social-development-cultural-day.jpg', // Cultural Day
      '/assets/images/creative-play-handprint.jpg', // Creative Play
    ],

    // Testimonials (parent/child imagery)
    testimonialImages: [
      'https://images.pexels.com/photos/8613174/pexels-photo-8613174.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],

    blogImages: [],
  },

  contact: {
    phone: '+91 83284 11176',
    phoneTel: '+918328411176', // used for tel: links
    whatsappNumber: '918328411176', // country code + number, no + or spaces (wa.me format)
    email: 'durgabizi07@gmail.com',
    // Opens Google Maps (app on mobile, web on desktop). Replace with the exact
    // "Share > Copy link" URL from Google Maps for a precise pin.
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Little+Krishna+Play+School+Muralinagar+Visakhapatnam+Andhra+Pradesh',
    address: 'Muralinagar, Visakhapatnam, Andhra Pradesh, India',
    locationShort: 'Muralinagar, Visakhapatnam',
  },

  social: {
    facebook: '',
    instagram: '',
    youtube: '',
  },

  navLinks: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Programs', href: '#programs' },
    { label: 'Activities', href: '#activities' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Admissions', href: '#admissions' },
    { label: 'Contact', href: '#contact' },
  ],

  copy: {
    welcomeMessage:
      'A joyful and caring environment where little children explore, learn, play and grow through meaningful everyday experiences.',
  },
};

export default siteConfig;
