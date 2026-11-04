'use client';

import { useEffect, useState } from 'react';

const events = [
  { city: 'Boston, MA', label: 'November 6, 2026', dateTime: '2026-11-06', endsAt: '2026-11-06T23:59:59-05:00', ticketUrl: 'https://www.eventbrite.ca/e/when-young-people-pray-boston-tickets-1996355629428' },
  { city: 'New Jersey', label: 'November 7, 2026', dateTime: '2026-11-07', endsAt: '2026-11-07T23:59:59-05:00', ticketUrl: 'https://www.eventbrite.ca/e/when-young-people-pray-jersey-tickets-1996355656509' },
  { city: 'Chicago, IL', label: 'November 13, 2026', dateTime: '2026-11-13', endsAt: '2026-11-13T23:59:59-06:00', ticketUrl: 'https://www.eventbrite.ca/e/when-young-people-pray-chicago-tickets-1996355835043' },
  { city: 'Orlando, FL', label: 'November 14, 2026', dateTime: '2026-11-14', endsAt: '2026-11-14T23:59:59-05:00', ticketUrl: 'https://www.eventbrite.ca/e/when-young-people-pray-orlando-tickets-1996355883187' },
  { city: 'Dallas, TX', label: 'November 21, 2026', dateTime: '2026-11-21', endsAt: '2026-11-21T23:59:59-06:00', ticketUrl: 'https://www.eventbrite.ca/e/when-young-people-pray-dallas-tickets-1996355927319' },
  { city: 'Montréal, QC', label: 'November 28, 2026', dateTime: '2026-11-28', endsAt: '2026-11-28T23:59:59-05:00', ticketUrl: 'https://www.eventbrite.ca/e/when-young-people-pray-montreal-tickets-1996355968442' },
];

export default function WyppDates() {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    const updateTime = () => setNow(Date.now());
    updateTime();
    const timer = window.setInterval(updateTime, 60_000);
    return () => window.clearInterval(timer);
  }, []);

  if (now === null) return null;

  const datedEvents = events.map((event) => ({
    ...event,
    passed: now > new Date(event.endsAt).getTime(),
  }));

  if (datedEvents.every((event) => event.passed)) return null;

  return (
    <section className="wyppDates" aria-labelledby="wypp-dates-title">
      <div className="wyppDatesInner">
        <p className="datesKicker">City by city · Night by night</p>
        <h2 id="wypp-dates-title">WYPP DATES <em>2026</em></h2>
        <ul className="datesList">
          {datedEvents.map((event) => (
            <li className={`dateRow${event.passed ? ' passed' : ''}`} key={event.dateTime}>
              <time dateTime={event.dateTime}>{event.label}</time>
              <strong>{event.city}</strong>
              {event.passed ? (
                <span className="dateAction" aria-label={`${event.city} event has passed`}>Get tickets</span>
              ) : (
                <a className="dateAction" href={event.ticketUrl}>Get tickets <span className="arrowIcon" aria-hidden="true" /></a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
