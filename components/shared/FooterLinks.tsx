'use client';

import { useState } from 'react';

// Apple-style link columns for the middle of the footer (spec: D:\page_content\web\docs\footer-design.md).
// Column grid from 650px up, one accordion row per group below that.
type LinkItem = { label: string; href: string; external?: boolean };
type Group = { id: string; title: string; links: LinkItem[] };

const groups: Group[] = [
  {
    id: 'explore',
    title: 'Explore',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Studio', href: '/studio' },
      { label: 'Unfolded', href: '/unfolded' },
      { label: 'Let’s talk', href: '/contact/' },
    ],
  },
  {
    id: 'elsewhere',
    title: 'Elsewhere',
    links: [
      { label: 'Edith Dev Community', href: 'https://edith-plum.vercel.app/', external: true },
      { label: 'Instagram', href: 'https://www.instagram.com/edith_.studio/', external: true },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kevinandrewa', external: true },
      { label: 'GitHub', href: 'https://github.com/Andrew-Kevin-007', external: true },
    ],
  },
  { id: 'legal', title: 'Legal', links: [{ label: 'Legal Notice', href: '/legal-notice/' }] },
];

function Links({ links }: { links: LinkItem[] }) {
  return (
    <ul>
      {links.map((l) => (
        <li key={l.label}>
          {l.external ? (
            <a className="apf-link" href={l.href} target="_blank" rel="noopener noreferrer">
              {l.label}
            </a>
          ) : (
            <a className="apf-link" href={l.href} data-taxi-ignore="">
              {l.label}
            </a>
          )}
        </li>
      ))}
    </ul>
  );
}

export default function FooterLinks() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <nav className="apf" aria-label="Footer">
      <div className="apf-cols">
        {groups.map((g) => (
          <section className="apf-group" aria-labelledby={`apf-${g.id}`} key={g.id}>
            <h2 id={`apf-${g.id}`} className="apf-title">
              {g.title}
            </h2>
            <Links links={g.links} />
          </section>
        ))}
      </div>

      <ul className="apf-acc">
        {groups.map((g) => {
          const isOpen = open === g.id;
          return (
            <li className="apf-acc-item" key={g.id}>
              <button
                type="button"
                className="apf-acc-btn"
                aria-expanded={isOpen}
                aria-controls={`apf-panel-${g.id}`}
                onClick={() => setOpen(isOpen ? null : g.id)}
              >
                <span className="apf-title">{g.title}</span>
                <span className="apf-chev" aria-hidden="true">
                  <svg viewBox="0 0 12 25" fill="none">
                    <path
                      fill="currentColor"
                      d="M4.99262 24.2803C5.28551 24.5732 5.76039 24.5732 6.05328 24.2803L10.8262 19.5074C11.1191 19.2145 11.1191 18.7396 10.8262 18.4467C10.5334 18.1538 10.0585 18.1538 9.76559 18.4467L5.52295 22.6893L1.28031 18.4467C0.987415 18.1538 0.512541 18.1538 0.219648 18.4467C-0.0732459 18.7396 -0.0732459 19.2145 0.219648 19.5074L4.99262 24.2803ZM5.52295 0L4.77295 -3.27835e-08L4.77295 23.75L5.52295 23.75L6.27295 23.75L6.27295 3.27835e-08L5.52295 0Z"
                    />
                  </svg>
                </span>
              </button>
              <div id={`apf-panel-${g.id}`} className="apf-panel">
                <div>
                  <div className="apf-acc-links">
                    <Links links={g.links} />
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
