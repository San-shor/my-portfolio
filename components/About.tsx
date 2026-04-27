const skillGroups = [
  {
    label: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'React Native'],
  },
  {
    label: 'Backend',
    items: ['Node.js', 'Express', 'MongoDB', 'MySQL'],
  },
  {
    label: 'Tooling & practices',
    items: ['Unit testing', 'Git', 'REST APIs', 'Responsive design', 'Accessibility'],
  },
];

const stats = [
  { value: '1+', label: 'Years of professional experience' },
  { value: '6+', label: 'Shipped projects' },
  { value: 'CSE', label: 'B.Sc. — East West University' },
];

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
              A frontend-focused engineer who cares about the details
            </h2>
          </div>
          <div className='lg:flex-1 lg:max-w-md min-w-0 lg:pt-2 lg:border-l lg:border-neutral-200 lg:pl-8 xl:pl-10'>
            <p className='text-sm sm:text-base md:text-[17px] text-neutral-600 leading-relaxed text-pretty'>
              I build interfaces with React and Next.js, write unit tests, and
              ship work that stays maintainable as products grow. I value clear
              communication, thoughtful design, and code that&apos;s easy for
              the next person to read.
            </p>
          </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-5 gap-5 sm:gap-6 items-stretch'>
          {/* Profile */}
          <div className='lg:col-span-3 min-w-0'>
            <div className='h-full flex flex-col rounded-[1.25rem] border border-neutral-200/90 bg-white px-4 py-7 sm:px-7 sm:py-8 md:px-9 md:py-10 shadow-[0_1px_0_0_rgba(10,10,10,0.04)]'>
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
                  software engineer — focused on{' '}
                  <strong className='font-semibold text-neutral-950'>
                    frontend development
                  </strong>{' '}
                  and{' '}
                  <strong className='font-semibold text-neutral-950'>
                    unit testing
                  </strong>
                  . Today I work with clients to design and ship modern web
                  apps end-to-end.
                </p>
              </div>

              <dl className='mt-7 sm:mt-8 grid grid-cols-3 gap-4 sm:gap-6 border-t border-neutral-200 pt-6 sm:pt-7'>
                {stats.map((stat) => (
                  <div key={stat.label} className='min-w-0'>
                    <dt className='order-2 mt-1 text-[11px] sm:text-xs text-neutral-500 leading-snug text-pretty'>
                      {stat.label}
                    </dt>
                    <dd className='order-1 text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-neutral-950 tabular-nums'>
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Stack */}
          <div className='lg:col-span-2 min-w-0'>
            <div className='h-full rounded-[1.25rem] border border-neutral-200 bg-white px-4 py-7 sm:px-6 sm:py-8 md:px-7 md:py-9'>
              <div className='flex items-center gap-3 mb-5 sm:mb-6'>
                <span className='font-mono text-[11px] tabular-nums text-neutral-400'>
                  02
                </span>
                <span className='h-px w-8 bg-neutral-200 shrink-0' aria-hidden />
                <h3 className='text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-500'>
                  Stack
                </h3>
              </div>

              <div className='space-y-5 sm:space-y-6'>
                {skillGroups.map((group) => (
                  <div key={group.label}>
                    <p className='text-xs font-semibold text-neutral-700 mb-2.5'>
                      {group.label}
                    </p>
                    <ul className='flex flex-wrap gap-1.5 sm:gap-2'>
                      {group.items.map((skill) => (
                        <li key={skill}>
                          <span className='inline-flex items-center rounded-lg border border-neutral-200 bg-neutral-50 px-2.5 py-1.5 text-xs font-medium text-neutral-900 transition-colors duration-200 hover:border-neutral-950 hover:bg-neutral-950 hover:text-white'>
                            {skill}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
