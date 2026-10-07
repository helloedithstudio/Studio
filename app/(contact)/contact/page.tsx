import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import { pageMetadata } from '@/lib/seo';
import ContactCarousel from '@/components/contact/ContactCarousel';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactInfo2 from '@/components/contact/ContactInfo2';

export const metadata: Metadata = pageMetadata({
  title: 'Contact - Edith Studio',
  description: 'Book a call or email Edith. Tell us your idea and we will tell you honestly whether, and how, we can make it real.',
  path: '/contact',
});

export default function Contact() {
  return (
    <PageShell slug="contact">
      <ContactInfo />
      <ContactInfo2 />
      <ContactCarousel />
    </PageShell>
  );
}
