import Motion from './motion';
import Globe from './globe';

const ticketUrl = 'https://www.eventbrite.com/o/when-young-people-pray-global-83494648743';
const schoolUrl = 'https://www.eventbrite.com/cc/when-young-people-pray-north-american-tour-3377139';
const giveUrl = 'https://pushpay.com/g/wyppnj';
const cities = ['Toronto', 'Ottawa', 'London', 'Accra', 'Kumasi', 'Amsterdam', 'Dublin', 'Dallas', 'New Jersey', 'Boston', 'Chicago', 'Orlando', 'Brooklyn', 'Atlanta'];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <Motion />
      <section className="hero" id="top">
        <nav className="nav" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="WYPP home">WYPP<span>®</span></a>
          <div className="navLinks">
            <a href="#movement">Movement</a>
            <a href="#gatherings">Gatherings</a>
            <a href="#story">Our story</a>
            <a href="#give">Give</a>
          </div>
          <a className="navCta" href={ticketUrl}>Join a gathering <Arrow /></a>
        </nav>

        <video
          className="heroVideo"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/prayer-wide.jpg"
          aria-hidden="true"
        >
          <source src="/images/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="heroWash" />
        <div className="heroOrbit" aria-hidden="true">PRAYER · REVIVAL · GLOBAL ·</div>
        <div className="heroContent">
          <div>
            <p className="eyebrow"><span>●</span> A global prayer movement</p>
            <h1 className="heroTitle">
              <span className="heroLine"><span data-hero-line>WHEN</span></span>
              <span className="heroLine"><span data-hero-line>YOUNG PEOPLE</span></span>
              <span className="heroLine"><em data-hero-line>PRAY.</em></span>
            </h1>
          </div>
          <div className="heroBottom">
            <p>Igniting a generation to seek God, carry revival, and transform cities around the world.</p>
            <a className="circleLink" href="#movement" aria-label="Explore the movement">↓</a>
          </div>
        </div>
        <div className="cityStrip" aria-label="Cities reached by WYPP">
          <div className="marqueeTrack">
            {[0, 1].map((copy) => (
              <div className="marqueeGroup" aria-hidden={copy === 1} key={copy}>
                {cities.map((city) => <span key={city}>{city}<i>✦</i></span>)}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="manifesto" id="movement">
        <div className="sectionTag" data-reveal><span>01</span> The movement</div>
        <div className="movementStage">
          <div className="movementSticky">
            <p className="kicker" data-reveal>Born online. Alive in cities.</p>
            <h2 data-heading>ONE SPARK.<br /><em>MANY CITIES.</em></h2>
            <p className="movementPrompt">From one virtual room to a global movement. Scroll to follow the story around the world.</p>
          </div>
          <Globe />
        </div>
        <div className="manifestoGrid">
          <p className="lead" data-reveal>When young people pray, rooms shift, hearts wake up, and cities are never the same.</p>
          <div className="bodyCopy" data-reveal>
            <p>WYPP started virtually and grew into revival gatherings across North America, Africa, and Europe. Different cities, one sound: a generation hungry for the presence of God.</p>
            <p>Every stop exists to ignite a fire that keeps burning long after the gathering ends.</p>
            <a className="textLink" href="#story">Discover our story <Arrow /></a>
          </div>
        </div>
        <div className="scribble" aria-hidden="true">PRAY / PRAY / PRAY / PRAY</div>
      </section>

      <section className="motionMarquee" aria-label="Prayer changes everything">
        <div className="marqueeTrack">
          {[0, 1].map((copy) => (
            <div className="marqueeGroup" aria-hidden={copy === 1} key={copy}>
              <span>PRAYER CHANGES EVERYTHING</span><i>✦</i><span>REVIVAL STARTS HERE</span><i>✦</i>
            </div>
          ))}
        </div>
      </section>

      <section className="gatherings" id="gatherings">
        <div className="gatheringIntro">
          <div>
            <div className="sectionTag light" data-reveal><span>02</span> Global gatherings</div>
            <h2 data-heading>THE ROOM<br /><em>CHANGES.</em></h2>
          </div>
          <div className="introSide" data-reveal>
            <p>We create room for a generation to encounter God together through prayer, worship, and the Word.</p>
            <a className="buttonDark" href={ticketUrl}>Find a gathering <Arrow /></a>
          </div>
        </div>

        <div className="photoGrid">
          <figure className="photoCard tall">
            <img src="/images/prayer-portrait.jpg" alt="Young adults together at a WYPP gathering" />
            <figcaption><strong>Presence</strong><span>Come hungry. Leave changed.</span></figcaption>
          </figure>
          <figure className="photoCard wide">
            <img src="/images/prayer-connect.jpg" alt="A speaker addressing a WYPP gathering" />
            <figcaption><strong>Revival</strong><span>City by city. Heart by heart.</span></figcaption>
          </figure>
          <div className="statCard" data-reveal><strong>09<span>+</span></strong><p>Cities connected by prayer and a shared hunger for revival.</p></div>
        </div>
      </section>

      <section className="sequence" aria-label="The rhythm of WYPP">
        <div><span>01</span><h3>GATHER</h3><p>One room. One sound. One generation seeking God.</p></div>
        <div><span>02</span><h3>ENCOUNTER</h3><p>Prayer and worship create space for lives to be transformed.</p></div>
        <div><span>03</span><h3>CARRY</h3><p>Take the fire home. Let revival move through your city.</p></div>
      </section>

      <section className="story" id="story">
        <div className="storyCopy">
          <div className="sectionTag" data-reveal><span>03</span> Leading the movement</div>
          <p className="kicker" data-reveal>A shared mandate</p>
          <h2 data-heading>MEET THE<br /><em>HOSTS.</em></h2>
          <p data-reveal>Raising leaders, strengthening young people, and sparking revival across cities.</p>
        </div>
        <div className="hostGrid">
          <article className="hostCard">
            <div className="hostImage"><img src="/images/host-kofi.jpg" alt="Pastor Kofi Dartey speaking" /><span>01 / 02</span></div>
            <p className="role">Host</p>
            <h3>Pastor Kofi Dartey</h3>
            <p>Founder and Head Pastor of Campus Rush, a global movement transforming lives and raising leaders on campuses and in cities.</p>
            <a href="https://www.instagram.com/kofi_dartey/">@kofi_dartey <Arrow /></a>
          </article>
          <article className="hostCard offset">
            <div className="hostImage"><img src="/images/host-ralph.jpg" alt="Prophet Ralph Dartey speaking" /><span>02 / 02</span></div>
            <p className="role">Host</p>
            <h3>Prophet Ralph Dartey</h3>
            <p>Head Pastor of Bridge Youth, Assistant Head Pastor of Campus Rush, and CEO of Minstrel Records.</p>
            <a href="https://www.instagram.com/ralphdarteyii/">@ralphdarteyii <Arrow /></a>
          </article>
        </div>
      </section>

      <section className="school">
        <div className="schoolMark" aria-hidden="true">+</div>
        <div className="sectionTag light" data-reveal><span>04</span> Beyond the gathering</div>
        <div className="schoolGrid">
          <h2 data-heading>SCHOOL OF<br /><em>MINISTRY.</em></h2>
          <div data-reveal>
            <p>A practical workshop for young leaders who want to grow in ministry, leadership, and their walk with God.</p>
            <a className="buttonLime" href={schoolUrl}>Register now <Arrow /></a>
          </div>
        </div>
      </section>

      <section className="merch" id="merch">
        <div className="merchPhoto"><img src="/images/merch.jpg" alt="Black WYPP Until hoodie and sweatpants" /><span>New drop</span></div>
        <div className="merchCopy">
          <div className="sectionTag" data-reveal><span>05</span> Wear the movement</div>
          <p className="kicker" data-reveal>WYPP merchandise</p>
          <h2 data-heading>PRAY<br /><em>UNTIL.</em></h2>
          <p data-reveal>The newest WYPP pieces are built to carry the message beyond the gathering.</p>
          <a className="buttonDark" href="https://checkout.square.site/merchant/MLQMJVN5CNB1C/checkout/RZPI3OR66MRZP6GWAQAZAWXA?src=sheet">Shop the drop <Arrow /></a>
        </div>
      </section>

      <section className="give" id="give">
        <div className="givePhoto" role="img" aria-label="WYPP leaders praying with young adults" />
        <div className="giveOverlay" />
        <div className="giveContent">
          <div className="sectionTag light" data-reveal><span>06</span> Partner with WYPP</div>
          <h2 data-heading>TAKE THE<br />FIRE <em>FURTHER.</em></h2>
          <div className="giveBottom">
            <p>Your generosity helps take WYPP to more cities and creates room for more young people to encounter God.</p>
            <a className="buttonLime" href={giveUrl}>Give to WYPP <Arrow /></a>
          </div>
        </div>
      </section>

      <section className="connect">
        <p className="kicker" data-reveal>Stay in the loop</p>
        <h2 data-heading>THIS IS YOUR<br /><em>INVITATION.</em></h2>
        <div className="connectActions">
          <a href={ticketUrl}>Join a gathering <Arrow /></a>
          <a href="https://www.instagram.com/wyppglobal/">Follow @wyppglobal <Arrow /></a>
        </div>
      </section>

      <footer>
        <a className="footerBrand" href="#top">WYPP®</a>
        <p>When Young People Pray<br />Prayer. Revival. Global.</p>
        <div className="footerLinks"><a href="#movement">Movement</a><a href="#gatherings">Gatherings</a><a href={giveUrl}>Give</a><a href="https://www.instagram.com/wyppglobal/">Instagram</a></div>
        <p className="copyright">© {new Date().getFullYear()} WYPP Global</p>
      </footer>
    </main>
  );
}
