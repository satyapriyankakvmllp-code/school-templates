/**
 * Opens the visitor's email app via mailto:. If nothing takes over the click
 * (common on desktops with no mail client set up), falls back to Gmail's web
 * compose window so the click always ends up in an email screen.
 */
export function openEmail(e, address) {
  e.preventDefault();
  const mailto = `mailto:${address}`;
  let handled = false;
  const mark = () => { handled = true; };
  window.addEventListener('blur', mark, { once: true });
  document.addEventListener('visibilitychange', mark, { once: true });
  window.location.href = mailto;
  setTimeout(() => {
    window.removeEventListener('blur', mark);
    document.removeEventListener('visibilitychange', mark);
    if (!handled && document.visibilityState === 'visible') {
      window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(address)}`,
        '_blank',
        'noopener,noreferrer'
      );
    }
  }, 900);
}
