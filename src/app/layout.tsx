import './globals.css';
import { Montserrat } from 'next/font/google';

import Header from '@/components/patterns/Header';
import Providers from '@/redux/provider';
import { Metadata } from "next";
 
export const metadata: Metadata = {
  title: "Sneakers"
};

const montserrat = Montserrat({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} lg:flex lg:flex-col lg:justify-center lg:items-center bg-[--beige]`}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  )
}
