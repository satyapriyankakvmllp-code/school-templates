import { MessageCircle } from 'lucide-react';
import siteConfig from '@/config/siteConfig';

export default function WhatsAppFloat() {
  const text = `Hello ${siteConfig.brand.title}, I would like to know more about admissions.`;
  const url = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-4 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-transform duration-300 hover:scale-110 sm:bottom-6 sm:right-6"
      style={{ marginBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <span className="absolute inset-0 animate-pulse-ring rounded-full bg-[#25D366]/60" />
      <MessageCircle size={26} className="relative" />
    </a>
  );
}
