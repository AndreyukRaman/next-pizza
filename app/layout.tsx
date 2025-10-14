import { Nunito } from 'next/font/google';
import './globals.css';
import Script from 'next/script';
import { Providers } from '@/shared/components/shared/providers';

const nunito = Nunito({
  subsets: ['cyrillic'],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCgeCl0KZ2TK_32eDrvdjpY2mexhHdiS2M&libraries=places&language=en`}
          strategy="afterInteractive"
        />
        <link data-rh="true" rel="icon" href="/logo.png" />
      </head>
      <body className={nunito.variable}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
