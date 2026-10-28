import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://wypp-global-movement.etosegun.chatgpt.site'),
  title: 'WYPP — When Young People Pray',
  description: 'A global prayer and revival movement igniting the fire of young people around the world.',
  openGraph: {
    title: 'WYPP — When Young People Pray',
    description: 'Prayer. Revival. Global. Join a generation seeking God and transforming cities.',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'When Young People Pray — Prayer. Revival. Global.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WYPP — When Young People Pray',
    description: 'Prayer. Revival. Global. Join a generation seeking God and transforming cities.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
