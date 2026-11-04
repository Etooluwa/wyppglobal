import type { Metadata } from 'next';
import Footer from '../footer';
import Navigation from '../navigation';
import { givingUrl, ticketUrl } from '../site-links';

export const metadata: Metadata = {
  title: 'Partner With WYPP | When Young People Pray',
  description: 'Take the fire further by becoming a WYPP Global Partner.',
  openGraph: {
    title: 'Partner With WYPP',
    description: 'Take the fire further by becoming a WYPP Global Partner.',
    images: [],
  },
  twitter: {
    title: 'Partner With WYPP',
    description: 'Take the fire further by becoming a WYPP Global Partner.',
    images: [],
  },
};

const partnershipUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfyxGEBiCXPRHarOzlfoOY-z8mYLWDiVe1tYnOokhLBqy4oIQ/viewform';

const levels = [
  { name: 'Platinum', annual: '$1,000', weekly: '$19.23', biweekly: '$38.46', monthly: '$83.33', twiceMonthly: '$41.67' },
  { name: 'Gold', annual: '$500', weekly: '$9.62', biweekly: '$19.23', monthly: '$41.67', twiceMonthly: '$20.83' },
  { name: 'Silver', annual: '$250', weekly: '$4.81', biweekly: '$9.62', monthly: '$20.83', twiceMonthly: '$10.42' },
  { name: 'Bronze', annual: '$100', weekly: '$1.92', biweekly: '$3.85', monthly: '$8.33', twiceMonthly: '$4.17' },
];

function Arrow() {
  return <span className="arrowIcon" aria-hidden="true" />;
}

export default function GivePage() {
  return (
    <main className="givingPage">
      <section className="givingHero" id="top">
        <Navigation ticketUrl={ticketUrl} />
        <div className="givingHeroInner">
          <p className="givingEyebrow">Partner with WYPP · Global Partners</p>
          <h1>TAKE THE<br /><em>FIRE FURTHER.</em></h1>
          <div className="givingHeroBottom">
            <p>Your generosity helps take WYPP to more cities and creates room for more young people to encounter God.</p>
            <a className="givingOutlineButton" href={givingUrl}>Give to WYPP <Arrow /></a>
          </div>
        </div>
      </section>

      <section className="partnerLevels" aria-labelledby="partner-levels-title">
        <div className="givingSectionIntro">
          <p className="givingIndex">01 / Choose your level</p>
          <div>
            <h2 id="partner-levels-title">ONE FIRE.<br /><em>YOUR PART.</em></h2>
            <p>Give the yearly amount at once, or spread it across the year. Amounts are rounded to the cent.</p>
          </div>
        </div>

        <div className="levelGrid">
          {levels.map((level, index) => (
            <article className="levelCard" key={level.name}>
              <div className="levelCardTop"><span>0{index + 1}</span><p>{level.name} partner</p></div>
              <h3>{level.annual}<small>A year</small></h3>
              <dl>
                <div><dt>Every week</dt><dd>{level.weekly}</dd></div>
                <div><dt>Every 2 weeks</dt><dd>{level.biweekly}</dd></div>
                <div><dt>Every month</dt><dd>{level.monthly}</dd></div>
                <div><dt>1st &amp; 15th monthly</dt><dd>{level.twiceMonthly}</dd></div>
              </dl>
            </article>
          ))}
          <article className="levelCard otherAmount">
            <div className="levelCardTop"><span>+</span><p>Other amount</p></div>
            <h3>EVERY GIFT<br /><em>MATTERS.</em></h3>
            <p>Enter any amount on the secure giving page, as a recurring partnership or a one-time gift.</p>
          </article>
        </div>
      </section>

      <section className="givingSteps">
        <div className="givingSectionIntro light">
          <p className="givingIndex">02 / How to give</p>
          <div>
            <h2>MAKE ROOM<br /><em>FOR MORE.</em></h2>
            <p>Open our secure giving page and follow these steps to direct your gift to WYPP Global Partners.</p>
          </div>
        </div>
        <ol className="givingStepsList">
          <li><span>01</span><p>Choose <strong>Set up recurring</strong> or <strong>Give one time</strong>.</p></li>
          <li><span>02</span><p>Enter your amount and select how often you want to give.</p></li>
          <li><span>03</span><p>Under <strong>Campus</strong>, choose <strong>WHEN YOUNG PEOPLE PRAY</strong>. The fund is already set to WYPP Global Partners.</p></li>
          <li><span>04</span><p>Confirm your start date and payment method, then select <strong>Next</strong>.</p></li>
        </ol>
        <div className="givingActionRow">
          <a className="buttonLime" href={givingUrl}>Open secure giving <Arrow /></a>
          <p>Already partnering? <a href={partnershipUrl}>Complete the partnership form <Arrow /></a></p>
        </div>
      </section>

      <section className="givingAssurance" aria-label="Giving details">
        <div><span>01</span><h3>Change or stop anytime</h3><p>Update your amount or payment method from your giving account.</p></div>
        <div><span>02</span><h3>Secure giving</h3><p>Your gift is processed securely through Pushpay.</p></div>
        <div><span>03</span><h3>Giving statements</h3><p>Track your giving from your Pushpay account.</p></div>
      </section>

      <section className="givingFaq">
        <div className="givingFaqTitle">
          <p className="givingIndex">03 / Questions</p>
          <h2>GOOD TO<br /><em>KNOW.</em></h2>
        </div>
        <div className="givingFaqList">
          <details open><summary>How do the levels work?</summary><p>Each level is a yearly commitment. Choose a level, pick how often you want to give, and enter the matching amount on the giving page. Because amounts are rounded to the cent, your yearly total may differ by a few cents.</p></details>
          <details><summary>Can I change or stop my gift?</summary><p>Yes. Sign in to your giving account to change the amount, update your payment method, or stop your recurring gift.</p></details>
          <details><summary>Can I give just once?</summary><p>Yes. On the giving page, choose Give one time instead of Set up recurring.</p></details>
          <details><summary>How often can I give?</summary><p>Every week, every two weeks, every month, or on the 1st and 15th. You can also give one time.</p></details>
        </div>
      </section>

      <section className="givingFinalCta">
        <p>Prayer · Revival · Global</p>
        <h2>TAKE THE<br /><em>FIRE FURTHER.</em></h2>
        <a className="givingOutlineButton" href={givingUrl}>Give to WYPP <Arrow /></a>
      </section>

      <Footer />
    </main>
  );
}
