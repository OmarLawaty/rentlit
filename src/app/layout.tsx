import Head from 'next/head';

import { Providers } from '@/components';
import { AppBg } from '@/assets';

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='' />
        {/* eslint-disable @next/next/no-page-custom-font */}
        <link
          href='https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap'
          rel='stylesheet'
        />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='' />
        <link
          href='https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100..700;1,100..700&family=IBM+Plex+Serif:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap'
          rel='stylesheet'
        />
      </Head>

      <body
        style={{
          color: 'white',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          backgroundImage: `url("${AppBg.src}")`,
          backgroundSize: 'cover',
          fontFamily: '"IBM Plex Sans", sans-serif',
        }}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
