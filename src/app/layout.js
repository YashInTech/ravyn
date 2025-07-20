// app/layout.js

import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Ravyn',
  description: 'Gym Clothin E-commerce Store',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-white text-gray-900`}>
        <Navbar />
        <main className='min-h-screen px-4 sm:px-6 lg:px-8 py-4'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
