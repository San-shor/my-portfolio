const contactMethods = [
  {
    label: 'Email',
    value: 'sanjidaewu89@gmail.com',
    href: 'mailto:sanjidaewu89@gmail.com',
    primary: true,
    icon: (
      <svg
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='1.6'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='h-4.5 w-4.5'
        aria-hidden>
        <rect x='2' y='4' width='20' height='16' rx='2' />
        <path d='m22 7-10 6L2 7' />
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: '+880 1757 600287',
    href: 'tel:+8801757600287',
    icon: (
      <svg
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='1.6'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='h-4.5 w-4.5'
        aria-hidden>
        <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.57 2.81.7A2 2 0 0 1 22 16.92z' />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'github.com/San-shor',
    href: 'https://github.com/San-shor',
    external: true,
    icon: (
      <svg
        viewBox='0 0 24 24'
        fill='currentColor'
        className='h-4.5 w-4.5'
        aria-hidden>
        <path d='M12 .5C5.73.5.5 5.74.5 12.02c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.27-.01-1-.02-1.96-3.2.7-3.87-1.54-3.87-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.69 1.25 3.34.96.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.27-5.24-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.16 1.18.92-.26 1.9-.39 2.88-.39.98 0 1.96.13 2.88.39 2.2-1.49 3.16-1.18 3.16-1.18.62 1.58.23 2.75.11 3.04.74.8 1.18 1.82 1.18 3.07 0 4.4-2.7 5.36-5.27 5.65.41.36.78 1.06.78 2.13 0 1.54-.01 2.78-.01 3.16 0 .31.21.67.8.55C20.21 21.4 23.5 17.1 23.5 12.02 23.5 5.74 18.27.5 12 .5z' />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/ssanjida',
    href: 'https://www.linkedin.com/in/ssanjida',
    external: true,
    icon: (
      <svg
        viewBox='0 0 24 24'
        fill='currentColor'
        className='h-4.5 w-4.5'
        aria-hidden>
        <path d='M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z' />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section
      id='contact'
      className='py-14 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-neutral-50 to-white scroll-mt-24 border-t border-neutral-200 pb-[max(1.5rem,env(safe-area-inset-bottom))]'>
      <div className='w-full max-w-3xl mx-auto min-w-0'>
        <header className='text-center mb-10 sm:mb-12'>
          <div className='flex items-center justify-center gap-3 mb-3 sm:mb-4'>
            <span className='font-mono text-[11px] tabular-nums text-neutral-400 shrink-0'>
              06
            </span>
            <span className='h-px w-10 bg-neutral-300 shrink-0' aria-hidden />
            <span className='text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-500 shrink-0'>
              Contact
            </span>
          </div>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-950 tracking-tight text-balance'>
            Let&apos;s build something great
          </h2>
          <p className='mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed text-pretty max-w-xl mx-auto'>
            Have a project, role, or idea you&apos;d like to discuss? I&apos;d
            love to hear about it. I usually reply within a day.
          </p>
          <div className='mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-200 bg-emerald-50 text-xs font-medium text-emerald-700'>
            <span className='relative flex h-2 w-2'>
              <span className='absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 animate-ping' />
              <span className='relative inline-flex h-2 w-2 rounded-full bg-emerald-500' />
            </span>
            Currently available for new work
          </div>
        </header>

        <div className='rounded-2xl border border-neutral-200 bg-white shadow-sm overflow-hidden'>
          <a
            href='mailto:sanjidaewu89@gmail.com'
            className='group flex items-center justify-between gap-4 p-5 sm:p-6 bg-neutral-950 text-white hover:bg-neutral-800 transition'>
            <div className='min-w-0'>
              <p className='text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400 mb-1'>
                Best way to reach me
              </p>
              <p className='text-base sm:text-lg font-semibold break-all'>
                sanjidaewu89@gmail.com
              </p>
            </div>
            <span
              aria-hidden
              className='shrink-0 inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 transition group-hover:bg-white/10 group-hover:translate-x-0.5'>
              <svg
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='h-4 w-4'>
                <path d='M5 12h14M13 5l7 7-7 7' />
              </svg>
            </span>
          </a>

          <ul className='divide-y divide-neutral-200'>
            {contactMethods
              .filter((m) => !m.primary)
              .map((method) => (
                <li key={method.label}>
                  <a
                    href={method.href}
                    target={method.external ? '_blank' : undefined}
                    rel={method.external ? 'noopener noreferrer' : undefined}
                    className='group flex items-center gap-4 px-5 sm:px-6 py-4 sm:py-5 hover:bg-neutral-50 transition'>
                    <span className='inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-700 group-hover:border-neutral-300 group-hover:text-neutral-950 transition'>
                      {method.icon}
                    </span>
                    <div className='min-w-0 flex-1'>
                      <p className='text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500'>
                        {method.label}
                      </p>
                      <p className='text-sm sm:text-base font-medium text-neutral-950 break-all'>
                        {method.value}
                      </p>
                    </div>
                    <span
                      aria-hidden
                      className='shrink-0 text-neutral-400 group-hover:text-neutral-950 group-hover:translate-x-0.5 transition-transform'>
                      →
                    </span>
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
