import type { Metadata } from 'next';
import { Epilogue, Roboto } from 'next/font/google';
import MainPageheader from '@/components/mainPage/LandingHeader';
import './globals.css';
import '@/styles/globals.css';
import '@/styles/common.scss';
import Footer from '@/components/Footer/Footer';

const roboto = Epilogue({
  weight: ['300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    absolute: '',
    default: 'My City Turf',
    template: '%s | My City Turf',
  },
  description: 'My City Turf',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={roboto.className}>
        {/* header */}
        <MainPageheader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
