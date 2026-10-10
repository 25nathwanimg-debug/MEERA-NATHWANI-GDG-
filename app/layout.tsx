import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Google Developer Groups, RBU | GDG On Campus Ramdeobaba University',
  description: 'Empowering students with cutting-edge tech skills, community, and resources for a future in technology. GDG On Campus Ramdeobaba University.',
  keywords: ['GDG', 'Google Developer Groups', 'GDG RBU', 'Ramdeobaba University', 'Web Development', 'Tech Community', 'Frontend'],
  authors: [{ name: 'Meera Nathwani' }],
  icons: {
    icon: '/avatar.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
