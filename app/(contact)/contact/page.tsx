import PageShell from '@/components/PageShell';
import ContactCarousel from '@/components/contact/ContactCarousel';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactInfo2 from '@/components/contact/ContactInfo2';

export default function Contact() {
  return (
    <PageShell slug="contact">
      <ContactInfo />
      <ContactInfo2 />
      <ContactCarousel />
    </PageShell>
  );
}
