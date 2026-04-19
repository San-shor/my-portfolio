export default function Contact() {
  return (
    <section
      id='contact'
      className='py-14 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-neutral-50 to-white scroll-mt-24 border-t border-neutral-200 pb-[max(1.5rem,env(safe-area-inset-bottom))]'>
      <div className='w-full max-w-2xl mx-auto min-w-0'>
        <header className='text-center mb-10 sm:mb-12'>
          <p className='text-xs sm:text-sm font-semibold uppercase tracking-wider text-neutral-500 mb-2'>
            Contact
          </p>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-950 tracking-tight text-balance'>
            Let&apos;s talk
          </h2>
          <p className='mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed text-pretty'>
            Reach me by email, phone, or social—whichever works best for you.
          </p>
        </header>

        <div className='rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-sm'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4'>
            <a
              href='https://github.com/San-shor'
              target='_blank'
              rel='noopener noreferrer'
              className='flex min-h-11 items-center justify-between gap-3 px-4 py-3.5 rounded-xl border border-neutral-200 bg-neutral-50/80 hover:bg-white hover:border-neutral-300 transition text-neutral-900 text-sm font-medium active:bg-neutral-100'>
              <span>GitHub</span>
              <span aria-hidden className='text-neutral-400 shrink-0'>
                →
              </span>
            </a>
            <a
              href='https://www.linkedin.com/in/ssanjida'
              target='_blank'
              rel='noopener noreferrer'
              className='flex min-h-11 items-center justify-between gap-3 px-4 py-3.5 rounded-xl border border-neutral-200 bg-neutral-50/80 hover:bg-white hover:border-neutral-300 transition text-neutral-900 text-sm font-medium active:bg-neutral-100'>
              <span>LinkedIn</span>
              <span aria-hidden className='text-neutral-400 shrink-0'>
                →
              </span>
            </a>
          </div>

          <div className='mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-neutral-200 space-y-5'>
            <div className='min-w-0'>
              <p className='text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-2'>
                Email
              </p>
              <a
                href='mailto:sanjidaewu89@gmail.com'
                className='text-neutral-950 hover:underline underline-offset-4 font-medium break-all text-base sm:text-lg'>
                sanjidaewu89@gmail.com
              </a>
            </div>
            <div>
              <p className='text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-2'>
                Phone
              </p>
              <a
                href='tel:+8801757600287'
                className='text-neutral-950 hover:underline underline-offset-4 font-medium tabular-nums inline-flex min-h-11 items-center text-base sm:text-lg'>
                01757600287
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
