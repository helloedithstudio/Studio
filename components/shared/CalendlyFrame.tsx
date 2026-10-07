'use client';

import { useEffect, useRef } from 'react';

const BOOKING_URL = 'https://calendly.com/hello-edithstudio/30min';

// The booking iframe stays empty until the popup is opened, so nothing is requested from Calendly before then.
export default function CalendlyFrame() {
  const ref = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const frame = ref.current;
    const popup = frame?.closest<HTMLElement>('#popup-form');
    if (!frame || !popup) return;
    const load = () => {
      if (!frame.src && getComputedStyle(popup).display !== 'none') {
        frame.src = BOOKING_URL;
        observer.disconnect();
      }
    };
    const observer = new MutationObserver(load);
    observer.observe(popup, { attributes: true, attributeFilter: ['style', 'class'] });
    load();
    return () => observer.disconnect();
  }, []);

  return <iframe ref={ref} width="100%" height="100%" frameBorder="0" title="Book a call with Edith" />;
}
