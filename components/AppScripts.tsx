'use client';

import { useEffect } from 'react';

// The theme's behaviour (GSAP, ScrollTrigger, Lenis, Taxi, cursor, colour toggle) lives in two bundles that
// were loaded with `defer` on the original site: vendor first, then app. app.min.js boots itself on load.
function load(src: string) {
  return new Promise<void>((resolve, reject) => {
    const s = document.createElement('script');
    s.src = src;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error(`failed to load ${src}`));
    document.body.appendChild(s);
  });
}

export default function AppScripts() {
  useEffect(() => {
    // note: window.app is also the <div id="app"> element, so it can't be used as a "booted" flag
    const w = window as unknown as { __edithBooting?: boolean };
    if (w.__edithBooting) return;
    w.__edithBooting = true;
    history.scrollRestoration = 'manual';
    load('/js/vendor.min.js').then(() => load('/js/app.min.js')).catch(console.error);
  }, []);

  return null;
}
