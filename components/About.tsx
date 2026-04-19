const coreSkills = [
  'React',
  'Next.js',
  'TypeScript',
  'JavaScript',
  'Node.js',
  'Tailwind CSS',
  'MongoDB',
  'MySQL',
  'Express',
  'React Native',
] as const;

export default function About() {
  return (
    <section
      id='about'
      className='py-16 sm:py-24 md:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 scroll-mt-24 relative overflow-hidden'>
      <div
        aria-hidden
        className='pointer-events-none absolute inset-0 bg-linear-to-b from-white via-neutral-50/40 to-white'
      />

      <div className='relative z-10 w-full max-w-6xl mx-auto min-w-0'>
        {/* Intro */}
        <div className='flex flex-col lg:flex-row lg:items-stretch lg:justify-between gap-8 sm:gap-10 lg:gap-16 mb-12 sm:mb-16 lg:mb-20'>
          <div className='lg:flex-1 lg:max-w-[min(100%,58%)] min-w-0'>
            <div className='flex items-center gap-3 mb-4 sm:mb-5'>
              <span className='font-mono text-[11px] tabular-nums text-neutral-400 shrink-0'>
                01
              </span>
              <span className='h-px flex-1 max-w-16 bg-neutral-300 min-w-0' aria-hidden />
              <span className='text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-500 shrink-0'>
                About
              </span>
            </div>
            <h2 className='text-[clamp(1.625rem,5vw,3.25rem)] font-semibold tracking-[-0.03em] text-neutral-950 leading-[1.08] text-balance'>
              Software engineer focused on the frontend
            </h2>
          </div>
          <div className='lg:flex-1 lg:max-w-md min-w-0 lg:pt-2 lg:border-l lg:border-neutral-200 lg:pl-8 xl:pl-10'>
            <p className='text-sm sm:text-base md:text-[17px] text-neutral-600 leading-relaxed text-pretty'>
              I build interfaces with React and Next.js, care about tests, and
              ship work that stays maintainable as products grow.
            </p>
          </div>
        </div>

        {/* Profile */}
        <div className='w-full max-w-3xl min-w-0'>
          <div className='flex flex-col rounded-[1.25rem] border border-neutral-200/90 bg-white px-4 py-7 sm:px-7 sm:py-8 md:px-9 md:py-10 shadow-[0_1px_0_0_rgba(10,10,10,0.04)]'>
            <p className='text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400 mb-5 sm:mb-6'>
              Profile
            </p>
            <div className='border-l-[3px] border-neutral-950 pl-4 sm:pl-6 md:pl-8'>
              <p className='text-sm sm:text-[15px] md:text-[17px] leading-[1.75] text-neutral-600 text-pretty'>
                I hold a{' '}
                <strong className='font-semibold text-neutral-950'>
                  B.Sc. in Computer Science and Engineering
                </strong>{' '}
                from East West University. At{' '}
                <strong className='font-semibold text-neutral-950'>
                  SELISE Digital Platforms
                </strong>
                , I worked as a software intern and then as an associate
                software engineer—mainly{' '}
                <strong className='font-semibold text-neutral-950'>
                  frontend development
                </strong>{' '}
                and{' '}
                <strong className='font-semibold text-neutral-950'>
                  unit testing
                </strong>
                .
              </p>
            </div>
          </div>
        </div>

        {/* Stack */}
        <div className='mt-4 sm:mt-5 lg:mt-6 rounded-[1.25rem] border border-neutral-200 bg-white/80 backdrop-blur-sm px-4 py-7 sm:px-6 sm:py-8 md:px-8 md:py-9'>
          <div className='flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-4 mb-5 sm:mb-6'>
            <div className='flex items-center gap-3'>
              <span className='font-mono text-[11px] tabular-nums text-neutral-400'>
                02
              </span>
              <span className='h-px w-8 bg-neutral-200 shrink-0' aria-hidden />
              <h3 className='text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-500'>
                Stack
              </h3>
            </div>
            <p className='text-xs text-neutral-400 sm:ml-auto'>
              Tools I use most often
            </p>
          </div>
          <ul className='flex flex-wrap gap-2 sm:gap-2.5'>
            {coreSkills.map((skill) => (
              <li key={skill}>
                <span className='inline-flex min-h-9 items-center rounded-lg border border-neutral-200 bg-neutral-50 px-2.5 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-neutral-900 transition-colors duration-200 hover:border-neutral-950 hover:bg-neutral-950 hover:text-white'>
                  {skill}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
