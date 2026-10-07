import type { Metadata, Viewport } from 'next';
import '../globals.css';

export const metadata: Metadata = {
  title: 'Unfolded - Edith Studio',
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
  themeColor: '#ffffff',
};

export default function UnfoldedLayout({ children }: { children: React.ReactNode }) {
  return (
    <html id="html" lang="en-US" suppressHydrationWarning>
      <body
        id="top"
        className="wp-singular page-template page-template-template-flexible page-template-template-flexible-php page page-id-252 wp-theme-edith unfolded light-mode"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
