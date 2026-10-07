import type { Viewport } from 'next';
import '../globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
  themeColor: '#ffffff',
};

// The theme's own JS adds classes to <html>/<body> at runtime (lenis, desktop, light-mode toggle), so React must not fight it.
export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <html id="html" lang="en" suppressHydrationWarning>
      <body
        id="top"
        className="home wp-singular page-template page-template-template-flexible page-template-template-flexible-php page page-id-10 wp-theme-edith inicio light-mode"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
