'use client';

import { useEffect, useState } from 'react';

type NavigationProps = {
  ticketUrl: string;
};

const links = [
  { label: 'About', href: '#movement' },
  { label: 'Merch', href: '#merch' },
  { label: 'Give', href: '#give' },
  { label: 'Follow Us', href: 'https://www.instagram.com/wyppglobal/' },
];

export default function Navigation({ ticketUrl }: NavigationProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    const closeOnDesktop = () => {
      if (window.innerWidth > 900) setOpen(false);
    };

    window.addEventListener('keydown', closeOnEscape);
    window.addEventListener('resize', closeOnDesktop);
    return () => {
      window.removeEventListener('keydown', closeOnEscape);
      window.removeEventListener('resize', closeOnDesktop);
    };
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <nav className={`nav${open ? ' menuOpen' : ''}`} aria-label="Primary navigation">
      <a className="brand" href="#top" aria-label="WYPP home" onClick={closeMenu}>WYPP<span>®</span></a>

      <div className="navLinks">
        {links.map((link) => <a href={link.href} key={link.label}>{link.label}</a>)}
      </div>

      <a className="navCta" href={ticketUrl}>Attend a Gathering <span className="arrowIcon" aria-hidden="true" /></a>

      <button
        className={`mobileMenuButton${open ? ' open' : ''}`}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen((current) => !current)}
      >
        <span aria-hidden="true" />
      </button>

      <div className={`mobileMenuPanel${open ? ' open' : ''}`} id="mobile-navigation">
        {links.map((link, index) => (
          <a href={link.href} key={link.label} onClick={closeMenu}>
            <span><small>0{index + 1}</small>{link.label}</span>
            <span className="arrowIcon" aria-hidden="true" />
          </a>
        ))}
        <a className="mobileGatheringLink" href={ticketUrl} onClick={closeMenu}>
          <span><small>05</small>Attend a Gathering</span>
          <span className="arrowIcon" aria-hidden="true" />
        </a>
      </div>
    </nav>
  );
}
