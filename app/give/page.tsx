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
      <section className="simpleGiving" id="top">
        <Navigation ticketUrl={ticketUrl} />
        <div className="simpleGivingInner">
          <header className="simpleGivingHero">
            <p className="simpleGivingKicker">Partner with WYPP</p>
            <h1>TAKE THE<br />FIRE <em>FURTHER.</em></h1>
            <p>Your generosity helps take WYPP to more cities and creates room for more young people to encounter God.</p>
          </header>

          <section className="compactGivingSection" aria-labelledby="partner-levels-title">
            <div className="compactSectionHeading">
              <h2 id="partner-levels-title">Choose your level</h2>
              <p>Give the yearly amount at once, or spread it across the year. Amounts are rounded to the cent.</p>
            </div>
            <div className="partnerTable">
              {levels.map((level) => (
                <article className="partnerRow" key={level.name}>
                  <div className="partnerLevel"><strong>{level.name} partner</strong><p>{level.annual}<small>A year</small></p></div>
                  <div><strong>{level.weekly}</strong><span>Every week</span></div>
                  <div><strong>{level.biweekly}</strong><span>Every 2 weeks</span></div>
                  <div><strong>{level.monthly}</strong><span>Every month</span></div>
                  <div><strong>{level.twiceMonthly}</strong><span>1st &amp; 15th monthly</span></div>
                </article>
              ))}
              <div className="otherAmountRow"><strong>Other amount</strong><p>Every gift matters. Enter any amount on the giving page.</p></div>
            </div>
          </section>

          <section className="compactGivingSection howToGive">
            <div className="compactSectionHeading">
              <h2>How to give</h2>
              <p>Open our secure giving page and follow these steps.</p>
            </div>
            <ol className="compactSteps">
              <li><span>01</span><p>Choose <strong>Set up recurring</strong> or <strong>Give one time</strong>.</p></li>
              <li><span>02</span><p>Enter the amount for your level and pick how often you want to give.</p></li>
              <li><span>03</span><p>Under <strong>Campus</strong>, choose <strong>WHEN YOUNG PEOPLE PRAY</strong>. The fund is already set to WYPP Global Partners.</p></li>
              <li><span>04</span><p>Confirm your start date and payment method, then select <strong>Next</strong>.</p></li>
            </ol>
            <a className="givingPrimaryButton" href={givingUrl}>Give to WYPP <Arrow /></a>
            <div className="givingNotes">
              <p>Prefer a single gift? Choose <strong>Give one time</strong> on the same page.</p>
              <p>Partnering with WYPP? Complete the <a href={partnershipUrl}>partnership form <Arrow /></a>.</p>
            </div>
          </section>

          <section className="compactAssurance" aria-label="Giving details">
            <div><h3>Change or stop anytime</h3><p>Update your amount or payment method from your giving account.</p></div>
            <div><h3>Secure giving</h3><p>Processed securely through Pushpay.</p></div>
            <div><h3>Giving statements</h3><p>Track your giving in your Pushpay account.</p></div>
          </section>

          <section className="compactFaq">
            <h2>Good to know</h2>
            <details open><summary>How do the levels work?</summary><p>Each level is a yearly commitment. Choose a level, pick how often you want to give, and enter the matching amount. Because amounts are rounded to the cent, your yearly total may differ by a few cents.</p></details>
            <details><summary>Can I change or stop my gift?</summary><p>Yes. Sign in to your giving account to change the amount, update your payment method, or stop your recurring gift.</p></details>
            <details><summary>Can I give just once?</summary><p>Yes. Choose Give one time instead of Set up recurring.</p></details>
            <details><summary>How often can I give?</summary><p>Every week, every two weeks, every month, or on the 1st and 15th. You can also give one time.</p></details>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  );
}
