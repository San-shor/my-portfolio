const services = [
  {
    title: 'Web app development',
    description:
      'Production-ready React and Next.js apps — from landing pages to full dashboards — built to be fast, accessible, and easy to extend.',
    icon: (
      <svg
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='1.6'
        strokeLinecap='round'
        strokeLinejoin='round'
        aria-hidden
        className='h-5 w-5'>
        <rect x='3' y='4' width='18' height='14' rx='2' />
        <path d='M3 9h18' />
        <path d='M8 18v3M16 18v3M5 21h14' />
      </svg>
    ),
  },
  {
    title: 'UI engineering',
    description:
      'Pixel-precise interfaces from Figma designs, with reusable components, smooth interactions, and a focus on UX and accessibility.',
    icon: (
      <svg
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='1.6'
        strokeLinecap='round'
        strokeLinejoin='round'
        aria-hidden
        className='h-5 w-5'>
        <path d='M12 19l7-7 3 3-7 7-3-3z' />
        <path d='M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z' />
        <path d='M2 2l7.586 7.586' />
        <circle cx='11' cy='11' r='2' />
      </svg>
    ),
  },
  {
    title: 'Performance & quality',
    description:
      'Audits, refactors, and unit tests to keep codebases healthy as they grow. Catch regressions early and ship with confidence.',
    icon: (
      <svg
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='1.6'
        strokeLinecap='round'
        strokeLinejoin='round'
        aria-hidden
        className='h-5 w-5'>
        <path d='M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83' />
        <circle cx='12' cy='12' r='3' />
      </svg>
    ),
  },
  {
    title: 'Responsive & cross-platform',
    description:
      'Layouts that look right on every screen. Mobile-first by default, with React Native available when you need a native app too.',
    icon: (
      <svg
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='1.6'
        strokeLinecap='round'
        strokeLinejoin='round'
        aria-hidden
        className='h-5 w-5'>
        <rect x='2' y='4' width='14' height='12' rx='2' />
        <rect x='13' y='9' width='9' height='12' rx='2' />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section
      id='services'
      className='py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 scroll-mt-24 border-t border-neutral-200 bg-white'>
      <div className='w-full max-w-6xl mx-auto min-w-0'>
        <header className='max-w-2xl mb-10 sm:mb-12 lg:mb-14'>
          <div className='flex items-center gap-3 mb-4'>
            <span className='font-mono text-[11px] tabular-nums text-neutral-400 shrink-0'>
              03
            </span>
            <span className='h-px w-10 bg-neutral-300 shrink-0' aria-hidden />
            <span className='text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-500 shrink-0'>
              Services
            </span>
          </div>
          <h2 className='text-[clamp(1.625rem,5vw,3rem)] font-semibold tracking-[-0.03em] text-neutral-950 leading-[1.1] text-balance'>
            How I can help your team
          </h2>
          <p className='mt-3 sm:mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed text-pretty'>
            Whether you need a single landing page or an entire product UI, I
            bring engineering rigor and an eye for detail.
          </p>
        </header>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5'>
          {services.map((service) => (
            <div
              key={service.title}
              className='group relative rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6 md:p-7 shadow-sm transition hover:shadow-md hover:border-neutral-300 hover:-translate-y-0.5'>
              <div className='flex items-start gap-4'>
                <div className='inline-flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-neutral-950 text-white shadow-sm transition-transform group-hover:scale-105'>
                  {service.icon}
                </div>
                <div className='min-w-0 flex-1'>
                  <h3 className='text-base sm:text-lg font-semibold text-neutral-950 mb-1.5 sm:mb-2 text-balance'>
                    {service.title}
                  </h3>
                  <p className='text-sm sm:text-[15px] text-neutral-600 leading-relaxed text-pretty'>
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='mt-10 sm:mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-2xl border border-neutral-200 bg-neutral-50/70 p-5 sm:p-6'>
          <div>
            <p className='text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-1'>
              Have a project in mind?
            </p>
            <p className='text-sm sm:text-base text-neutral-700'>
              Tell me about it — I usually reply within a day.
            </p>
          </div>
          <a
            href='#contact'
            className='inline-flex min-h-11 items-center justify-center gap-2 self-start sm:self-auto bg-neutral-950 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl hover:bg-neutral-800 transition font-medium text-sm shadow-md shadow-neutral-900/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2'>
            Start a conversation <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
