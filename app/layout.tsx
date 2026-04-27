import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ScrollToTop from '@/components/ScrollToTop';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const siteUrl = 'https://sanjida-akter.vercel.app';
const siteTitle = 'Sanjida Akter — Software Engineer & Frontend Developer';
const siteDescription =
  'Software engineer building modern web experiences with React, Next.js, and TypeScript. B.Sc. in CSE from East West University. Available for freelance and full-time roles.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: '%s | Sanjida Akter',
  },
  description: siteDescription,
  keywords: [
    'Sanjida Akter',
    'Software Engineer',
    'Frontend Developer',
    'React Developer',
    'Next.js Developer',
    'TypeScript',
    'Web Developer Bangladesh',
    'Freelance Developer',
    'UI Engineer',
  ],
  authors: [{ name: 'Sanjida Akter' }],
  creator: 'Sanjida Akter',
  publisher: 'Sanjida Akter',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    siteName: 'Sanjida Akter — Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    creator: '@sanjida',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'technology',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Sanjida Akter',
  url: siteUrl,
  jobTitle: 'Software Engineer',
  description: siteDescription,
  email: 'mailto:sanjidaewu89@gmail.com',
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'East West University',
  },
  worksFor: {
    '@type': 'Organization',
    name: 'SELISE Digital Platforms',
  },
  knowsAbout: [
    'React',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'Node.js',
    'Tailwind CSS',
    'Frontend Development',
    'Unit Testing',
  ],
  sameAs: [
    'https://github.com/San-shor',
    'https://www.linkedin.com/in/ssanjida',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='overflow-x-clip scroll-smooth'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-[100dvh] font-sans text-neutral-950 bg-neutral-50`}>
        <a
          href='#home'
          className='sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-3 focus:py-2 focus:rounded-lg focus:bg-neutral-950 focus:text-white focus:text-sm focus:font-medium focus:shadow-lg'>
          Skip to content
        </a>
        <div className='min-h-[100dvh] flex flex-col w-full min-w-0'>
          <Navbar />
          <main className='flex-1 pt-16 bg-linear-to-b from-neutral-50 via-white to-neutral-50'>
            {children}
          </main>
          <Footer />
        </div>
        <ScrollToTop />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
