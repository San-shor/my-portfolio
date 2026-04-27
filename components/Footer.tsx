const links = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
] as const;

const socials = [
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

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className='border-t border-neutral-200 bg-white px-4 sm:px-6 py-10 sm:py-12 pb-[max(1.5rem,env(safe-area-inset-bottom))]'>
      <div className='max-w-6xl mx-auto'>
        <div className='flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between'>
          <div className='max-w-md'>
            <a
              href='#home'
              className='text-base font-bold text-neutral-950 hover:text-neutral-700 transition-colors'>
              Sanjida Akter
            </a>
            <p className='mt-2 text-sm text-neutral-600 leading-relaxed text-pretty'>
              Software engineer building modern web experiences with React,
              Next.js, and TypeScript. Open to freelance and full-time
              opportunities.
            </p>
          </div>

          <div className='flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-12 lg:gap-16'>
            <div>
              <p className='text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400 mb-3'>
                Sitemap
              </p>
              <nav className='flex flex-col gap-1.5' aria-label='Footer'>
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className='text-sm text-neutral-600 hover:text-neutral-950 transition-colors'>
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div>
              <p className='text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400 mb-3'>
                Find me
              </p>
              <ul className='flex items-center gap-2'>
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target={s.href.startsWith('http') ? '_blank' : undefined}
                      rel={
                        s.href.startsWith('http')
                          ? 'noopener noreferrer'
                          : undefined
                      }
                      aria-label={s.label}
                      className='inline-flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 bg-white text-neutral-700 hover:text-neutral-950 hover:border-neutral-400 transition'>
                      {s.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className='mt-8 sm:mt-10 pt-6 border-t border-neutral-200 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-center sm:text-left'>
          <p className='text-xs text-neutral-500'>
            © {year} Sanjida Akter. All rights reserved.
          </p>
          <p className='text-xs text-neutral-500'>
            Built with Next.js &amp; Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
