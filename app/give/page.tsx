import type { Metadata } from 'next';
import Footer from '../footer';
import Navigation from '../navigation';
import { givingUrl, ticketUrl } from '../site-links';

export const metadata: Metadata = {
  title: 'A Dollar a Day for Revival | WYPP',
  description: 'Join the recurring giving campaign helping WYPP carry revival into more cities.',
  openGraph: {
    title: 'A Dollar a Day for Revival | WYPP',
    description: 'Join the recurring giving campaign helping WYPP carry revival into more cities.',
    images: [],
  },
  twitter: {
    title: 'A Dollar a Day for Revival | WYPP',
    description: 'Join the recurring giving campaign helping WYPP carry revival into more cities.',
    images: [],
  },
};

const partnershipUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfyxGEBiCXPRHarOzlfoOY-z8mYLWDiVe1tYnOokhLBqy4oIQ/viewform';

const levels = [
  { name: 'A dollar a day', daily: '$1', monthly: '$30', copy: 'A simple daily commitment that becomes a steady monthly investment in revival.' },
  { name: 'Two dollars a day', daily: '$2', monthly: '$60', copy: 'Help create more room for young people to encounter Jesus through WYPP.' },
  { name: 'Five dollars a day', daily: '$5', monthly: '$150', copy: 'Carry the vision further as WYPP reaches new people, campuses, and cities.' },
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
            <p className="simpleGivingKicker">The WYPP giving campaign</p>
            <h1>A DOLLAR A DAY<br /><em>FOR REVIVAL.</em></h1>
            <p>Make revival part of your rhythm. Your recurring gift helps WYPP create spaces where young people pray, meet Jesus, and carry the fire into their cities.</p>
          </header>

          <section className="compactGivingSection" aria-labelledby="partner-levels-title">
            <div className="compactSectionHeading">
              <h2 id="partner-levels-title">Choose your recurring level</h2>
              <p>Choose the daily commitment that fits you. Your gift will be set up as the matching monthly amount.</p>
            </div>
            <div className="campaignTiers">
              {levels.map((level) => (
                <article className="campaignTier" key={level.name}>
                  <p className="campaignDaily">{level.daily}<span> / day</span></p>
                  <h3>{level.name}<br />for revival</h3>
                  <p className="campaignMonthly">{level.monthly}<span> every month</span></p>
                  <p className="campaignCopy">{level.copy}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="compactGivingSection howToGive">
            <div className="compactSectionHeading">
              <h2>How to give</h2>
              <p>Open our secure giving page and follow these steps.</p>
            </div>
            <ol className="compactSteps">
              <li><span>01</span><p>Open Pushpay and choose <strong>Set up recurring</strong>.</p></li>
              <li><span>02</span><p>Enter <strong>$30, $60, or $150</strong> and select monthly giving.</p></li>
              <li><span>03</span><p>Under <strong>Campus</strong>, choose <strong>WHEN YOUNG PEOPLE PRAY</strong>. The fund is already set to WYPP Global Partners.</p></li>
              <li><span>04</span><p>Confirm your start date and payment method, then select <strong>Next</strong>.</p></li>
            </ol>
            <div className="givingActions">
              <a className="givingPrimaryButton" href={givingUrl}>Give through Pushpay <Arrow /></a>
              <a className="givingSecondaryButton" href={partnershipUrl}>Complete the partner form <Arrow /></a>
            </div>
            <div className="givingNotes">
              <p>Prefer a single gift? Choose <strong>Give one time</strong> on the same page.</p>
              <p>Want to give another amount? Enter any amount directly on the Pushpay page.</p>
            </div>
          </section>

          <section className="compactAssurance" aria-label="Giving details">
            <div><h3>Change or stop anytime</h3><p>Update your amount or payment method from your giving account.</p></div>
            <div><h3>Secure giving</h3><p>Processed securely through Pushpay.</p></div>
            <div><h3>Giving statements</h3><p>Track your giving in your Pushpay account.</p></div>
          </section>

          <section className="compactFaq">
            <h2>Good to know</h2>
            <details open><summary>How do the levels work?</summary><p>Choose a daily commitment of $1, $2, or $5. On Pushpay, set up the matching recurring monthly gift of $30, $60, or $150.</p></details>
            <details><summary>Can I change or stop my gift?</summary><p>Yes. Sign in to your giving account to change the amount, update your payment method, or stop your recurring gift.</p></details>
            <details><summary>Can I give just once?</summary><p>Yes. Choose Give one time instead of Set up recurring.</p></details>
            <details><summary>Can I give a different amount?</summary><p>Yes. Every gift matters, and you can enter any amount on the Pushpay page.</p></details>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  );
}
