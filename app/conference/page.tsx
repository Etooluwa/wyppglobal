import type { Metadata } from 'next';
import Footer from '../footer';
import Navigation from '../navigation';
import { ticketUrl } from '../site-links';

export const metadata: Metadata = {
  title: 'Zion Conference 27 | WYPP',
  description: 'Zion Conference 27 by When Young People Pray. Coming soon.',
  openGraph: {
    title: 'Zion Conference 27 | WYPP',
    description: 'Zion Conference 27 by When Young People Pray. Coming soon.',
    images: [],
  },
  twitter: {
    title: 'Zion Conference 27 | WYPP',
    description: 'Zion Conference 27 by When Young People Pray. Coming soon.',
    images: [],
  },
};

export default function ConferencePage() {
  return (
    <main className="conferencePage">
      <section className="conferenceHero" id="top">
        <Navigation ticketUrl={ticketUrl} />
        <div className="conferenceInner">
          <p className="conferenceKicker">WYPP Global presents</p>
          <h1 className="conferenceTitle">ZION<br /><em>CONFERENCE 27.</em></h1>
          <div className="conferenceSoon">
            <strong>Coming soon</strong>
            <p>Dates, location, and registration details will be announced soon.</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
