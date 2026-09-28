/**
 * schoolConfig.js
 * ---------------------------------------------------------------------------
 * Kept for backward compatibility. All real configuration now lives in
 * `siteConfig.js` — edit that file when re-branding for a new client.
 * This just re-shapes it into the flatter fields older components expect.
 * ---------------------------------------------------------------------------
 */
import siteConfig from './siteConfig';

const schoolConfig = {
  title: siteConfig.brand.title,
  tagline: siteConfig.brand.tagline,
  logo: siteConfig.brand.logo,
  location: siteConfig.contact.address,
  locationShort: siteConfig.contact.locationShort,
  welcomeMessage: siteConfig.copy.welcomeMessage,
  email: siteConfig.contact.email,
  phone: siteConfig.contact.phone,
  navLinks: siteConfig.navLinks,
};

export default schoolConfig;
