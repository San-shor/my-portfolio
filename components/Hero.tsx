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

      <div className='relative z-10 w-full max-w-3xl mx-auto text-center px-0'>
        <div className='inline-flex max-w-full flex-wrap items-center justify-center gap-2 px-3 py-2 sm:px-4 sm:py-2 rounded-full bg-white border border-neutral-200 shadow-sm text-xs sm:text-sm text-neutral-700 mb-6 sm:mb-8'>
          <span className='inline-block w-2 h-2 shrink-0 rounded-full bg-neutral-950' />
          <span className='text-balance'>
            Software Engineer · Frontend Developer
          </span>
        </div>

        <h1 className='text-[clamp(2rem,8vw,4.5rem)] font-bold text-neutral-950 mb-4 sm:mb-5 leading-[1.1] tracking-tight text-balance'>
          Sanjida Akter
        </h1>
        <p className='text-lg sm:text-xl md:text-2xl text-neutral-800 mb-4 sm:mb-5 font-medium'>
          Software Engineer
        </p>
        <p className='text-sm sm:text-base md:text-lg text-neutral-600 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed text-pretty px-1'>
          I design and ship web interfaces with React and Next.js—backed by
          tests and solid fundamentals from a CS degree.
        </p>

        <div className='flex w-full max-w-md mx-auto flex-col sm:flex-row sm:justify-center gap-3 sm:gap-4'>
          <a
            href='#projects'
            className='inline-flex min-h-11 items-center justify-center gap-2 bg-neutral-950 text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl hover:bg-neutral-800 transition font-medium text-sm sm:text-base shadow-lg shadow-neutral-900/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 w-full sm:w-auto'>
            View my work <span aria-hidden>→</span>
          </a>
          <a
            href='#contact'
            className='inline-flex min-h-11 items-center justify-center gap-2 border border-neutral-300 bg-white text-neutral-950 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl hover:bg-neutral-50 hover:border-neutral-400 transition font-medium text-sm sm:text-base shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 w-full sm:w-auto'>
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
