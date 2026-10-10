import './globals.css';
import { Plus_Jakarta_Sans } from 'next/font/google';

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata = {
  title: 'Google Developer Groups, RBU | GDG On Campus Ramdeobaba University',
  description: 'Empowering students with cutting-edge tech skills, community, and resources for a future in technology. GDG On Campus Ramdeobaba University.',
  keywords: ['GDG', 'Google Developer Groups', 'GDG RBU', 'Ramdeobaba University', 'Web Development', 'Tech Community', 'Frontend'],
  authors: [{ name: 'Meera Nathwani' }],
  icons: {
    icon: '/avatar.png',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Press+Start+2P&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={plusJakartaSans.className}>{children}</body>
    </html>
  );
}
