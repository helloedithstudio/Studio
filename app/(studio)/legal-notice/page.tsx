import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';

export const metadata: Metadata = {
  title: 'Legal Notice - Edith Studio',
  description: 'Who runs edith., how we handle your data, and what you can expect from this site.',
};

const sections: { title: string; body: React.ReactNode[] }[] = [
  {
    title: 'Who runs this site',
    body: [
      'This site is run by Edith Studio, an independent creative studio founded by Kevin Andrew.',
      <>You can reach us at <a href="mailto:hello.edithstudio@gmail.com">hello.edithstudio@gmail.com</a>.</>,
    ],
  },
  {
    title: 'What this site is',
    body: [
      'This site tells you about Edith and how we work. It is not an offer. Nothing here becomes a contract until the scope and the price are agreed with you in writing.',
    ],
  },
  {
    title: 'How we work, and who is responsible',
    body: [
      'Parts of our work are produced with AI agents, under human direction. People review what we publish and are responsible for it. If you see something that looks wrong, tell us and we will fix it.',
    ],
  },
  {
    title: 'Ownership of what you see here',
    body: [
      'The edith. name, wordmark, text and original artwork belong to Edith Studio. Please do not reuse them without asking.',
      'Names, logos, images and videos of other people, companies and projects belong to their owners and are shown here to illustrate our work and interests. If you own something shown here and want it credited or removed, email us and we will act promptly.',
    ],
  },
  {
    title: 'Bookings and enquiries',
    body: [
      <>
        Booking a call opens a calendar run by Calendly, a third party. Calendly handles what you enter under its own{' '}
        <a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer">privacy policy</a>.
      </>,
      'If you email us, we use your message and address only to reply to you and to deliver the work you ask for. We do not sell your details or share them for advertising.',
    ],
  },
  {
    title: 'Cookies and tracking',
    body: [
      'We do not add advertising or analytics trackers to this site. Our hosting provider may keep standard server logs, such as IP addresses and page requests, to run and secure the service.',
    ],
  },
  {
    title: 'Links to other sites',
    body: ['We link to other sites, including our community, social profiles and Calendly. We are not responsible for what they publish or how they handle data.'],
  },
  {
    title: 'Liability',
    body: [
      'We take care to keep this site accurate and available, but it is provided as it is. Nothing on it is legal, financial or professional advice, and we are not liable for loss that comes from relying on it.',
    ],
  },
  {
    title: 'Changes',
    body: ['We may update this notice as the site and the studio change. The date below shows the latest version.'],
  },
];

export default function LegalNotice() {
  return (
    <PageShell slug="legal-notice">
      <section className="legal" data-component="legal">
        <div className="legal__inner">
          <p className="legal__label">legal</p>
          <h1 className="legal__title">Legal Notice</h1>
          <div className="legal__list">
            {sections.map((s, i) => (
              <div className="legal__item" key={s.title}>
                <h2 className="legal__heading">
                  <span>{String(i + 1).padStart(2, '0')}</span> {s.title}
                </h2>
                <div className="legal__body">
                  {s.body.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="legal__date">Last updated 7 October 2026</p>
        </div>
      </section>
    </PageShell>
  );
}
