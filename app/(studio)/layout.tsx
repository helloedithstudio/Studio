import type { Metadata, Viewport } from 'next';
import '../globals.css';

export const metadata: Metadata = {
  title: 'Studio - Edith Studio',
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
  themeColor: '#ffffff',
};

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return (
    <html id="html" lang="en-US" suppressHydrationWarning>
      <body
        id="top"
        className="wp-singular page-template page-template-template-flexible page-template-template-flexible-php page page-id-248 wp-theme-edith studio light-mode"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
