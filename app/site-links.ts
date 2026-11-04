export const ticketUrl = 'https://www.eventbrite.com/o/when-young-people-pray-global-83494648743';
export const instagramUrl = 'https://www.instagram.com/wyppglobal/';
export const givingUrl = 'https://ppay.co/UdpNngQ1K_M';

export const headerLinks = [
  { label: 'About', href: '/#movement' },
  { label: 'Merch', href: '/#merch' },
  { label: 'Give', href: givingUrl },
  { label: 'Follow Us', href: instagramUrl },
];

export const footerLinks = [
  ...headerLinks.slice(0, 3),
  { label: 'WYPP Nights', href: ticketUrl },
  headerLinks[3],
];
