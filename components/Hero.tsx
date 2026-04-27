import Link from 'next/link';

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/San-shor',
    icon: (
      <svg
        viewBox='0 0 24 24'
        fill='currentColor'
        className='h-4 w-4'
        aria-hidden>
        <path d='M12 .5C5.73.5.5 5.74.5 12.02c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.27-.01-1-.02-1.96-3.2.7-3.87-1.54-3.87-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.69 1.25 3.34.96.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.27-5.24-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.16 1.18.92-.26 1.9-.39 2.88-.39.98 0 1.96.13 2.88.39 2.2-1.49 3.16-1.18 3.16-1.18.62 1.58.23 2.75.11 3.04.74.8 1.18 1.82 1.18 3.07 0 4.4-2.7 5.36-5.27 5.65.41.36.78 1.06.78 2.13 0 1.54-.01 2.78-.01 3.16 0 .31.21.67.8.55C20.21 21.4 23.5 17.1 23.5 12.02 23.5 5.74 18.27.5 12 .5z' />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ssanjida',
    icon: (
      <svg
        viewBox='0 0 24 24'
        fill='currentColor'
        className='h-4 w-4'
        aria-hidden>
        <path d='M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z' />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:sanjidaewu89@gmail.com',
    icon: (
      <svg
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='h-4 w-4'
        aria-hidden>
        <rect x='2' y='4' width='20' height='16' rx='2' />
        <path d='m22 7-10 6L2 7' />
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section
      id='home'
      className='min-h-[calc(100dvh-4rem)] flex flex-col justify-center px-4 sm:px-6 lg:px-8 scroll-mt-24 relative overflow-hidden pb-12 sm:pb-16 md:pb-20 pt-6 sm:pt-0'>
      <div
        aria-hidden
        className='absolute inset-0 bg-linear-to-b from-neutral-50 via-white to-neutral-100/80'
      />
      <div
        aria-hidden
        className='absolute -top-28 left-1/2 -translate-x-1/2 w-[min(100vw,520px)] h-[min(520px,80vw)] max-h-[520px] rounded-full bg-neutral-200/40 blur-3xl'
      />
      <div
        aria-hidden
        className='absolute top-24 -left-16 w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-neutral-300/25 blur-3xl'
      />
      <div
        aria-hidden
        className='absolute bottom-10 -right-16 w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-neutral-300/25 blur-3xl'
      />
      <div
        aria-hidden
        className='absolute inset-0 bg-[linear-gradient(to_right,rgba(10,10,10,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(10,10,10,0.04)_1px,transparent_1px)] bg-size-[36px_36px] mask-[radial-gradient(ellipse_at_center,black,transparent_70%)]'
      />

      <div className='relative z-10 w-full max-w-3xl mx-auto text-center px-0'>
        <div className='inline-flex max-w-full flex-wrap items-center justify-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full bg-white border border-neutral-200 shadow-sm text-xs sm:text-sm text-neutral-700 mb-6 sm:mb-8'>
          <span className='relative flex h-2 w-2 shrink-0'>
            <span className='absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 animate-ping' />
            <span className='relative inline-flex h-2 w-2 rounded-full bg-emerald-500' />
          </span>
          <span className='text-balance'>
            Available for new projects · Remote
          </span>
        </div>

        <h1 className='text-[clamp(2rem,8vw,4.5rem)] font-bold text-neutral-950 mb-4 sm:mb-5 leading-[1.05] tracking-tight text-balance'>
          Building fast, reliable web experiences
          <span className='block mt-1 sm:mt-2 text-neutral-500 font-semibold'>
            with React &amp; Next.js
          </span>
        </h1>
        <p className='text-sm sm:text-base md:text-lg text-neutral-600 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed text-pretty px-1'>
          I&apos;m{' '}
          <span className='text-neutral-950 font-semibold'>Sanjida Akter</span>,
          a software engineer who designs and ships polished, well-tested
          interfaces. I help startups and teams turn ideas into production-ready
          products that look great and stay maintainable.
        </p>

        <div className='flex w-full max-w-md mx-auto flex-col sm:flex-row sm:justify-center gap-3 sm:gap-4'>
          <Link
            href='#projects'
            className='inline-flex min-h-11 items-center justify-center gap-2 bg-neutral-950 text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl hover:bg-neutral-800 transition font-medium text-sm sm:text-base shadow-lg shadow-neutral-900/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 w-full sm:w-auto'>
            View my work <span aria-hidden>→</span>
          </Link>
          <Link
            href='#contact'
            className='inline-flex min-h-11 items-center justify-center gap-2 border border-neutral-300 bg-white text-neutral-950 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl hover:bg-neutral-50 hover:border-neutral-400 transition font-medium text-sm sm:text-base shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 w-full sm:w-auto'>
            Hire me
          </Link>
        </div>

        <div className='mt-8 sm:mt-10 flex flex-col items-center gap-3'>
          <p className='text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-400'>
            Find me on
          </p>
          <ul className='flex items-center gap-2'>
            {socialLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={
                    item.href.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                  aria-label={item.label}
                  className='inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white/80 text-neutral-700 hover:text-neutral-950 hover:border-neutral-400 hover:bg-white transition shadow-sm'>
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        aria-hidden
        className='hidden sm:flex pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-neutral-400'>
        <span className='text-[10px] uppercase tracking-[0.25em]'>Scroll</span>
        <span className='block h-8 w-px bg-linear-to-b from-neutral-400/80 to-transparent' />
      </div>
    </section>
  );
}
