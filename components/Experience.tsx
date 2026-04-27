const experiences = [
  {
    id: 1,
    company: 'SELISE Digital Platforms',
    position: 'Associate Software Engineer',
    duration: 'Nov 2023 – May 2024',
    location: 'Dhaka, Bangladesh',
    summary:
      'Owned frontend features end-to-end with a strong focus on quality and test coverage.',
    highlights: [
      'Built and maintained reusable React components used across product surfaces.',
      'Wrote unit tests to lock down behavior and prevent regressions during refactors.',
      'Collaborated with designers and backend engineers to ship polished, accessible UIs.',
    ],
    technologies: ['React', 'TypeScript', 'JavaScript', 'Jest'],
  },
  {
    id: 2,
    company: 'SELISE Digital Platforms',
    position: 'Software Intern',
    duration: 'Jul 2023 – Oct 2023',
    location: 'Dhaka, Bangladesh',
    summary:
      'Joined the frontend team to learn product engineering practices and contribute to live features.',
    highlights: [
      'Contributed UI improvements and bug fixes to existing React applications.',
      'Practiced code review, version control workflows, and team-based delivery.',
    ],
    technologies: ['React', 'JavaScript'],
  },
];

export default function Experience() {
  return (
    <section
      id='experience'
      className='py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 scroll-mt-24 border-t border-neutral-200 bg-neutral-100/50'>
      <div className='w-full max-w-3xl mx-auto min-w-0 px-0'>
        <header className='mb-10 sm:mb-12 md:mb-14'>
          <div className='flex items-center gap-3 mb-3 sm:mb-4'>
            <span className='font-mono text-[11px] tabular-nums text-neutral-400 shrink-0'>
              04
            </span>
            <span className='h-px w-10 bg-neutral-300 shrink-0' aria-hidden />
            <span className='text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-500 shrink-0'>
              Experience
            </span>
          </div>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-950 tracking-tight text-balance'>
            Where I&apos;ve worked
          </h2>
          <p className='mt-3 sm:mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed text-pretty'>
            Recent roles in product-focused software development.
          </p>
        </header>

        <ol className='relative border-l border-neutral-200 pl-6 sm:pl-8 space-y-6 sm:space-y-7'>
          {experiences.map((exp) => (
            <li key={exp.id} className='relative'>
              <span
                aria-hidden
                className='absolute -left-[33px] sm:-left-[41px] top-6 flex h-3.5 w-3.5 items-center justify-center'>
                <span className='absolute inline-flex h-full w-full rounded-full bg-neutral-950/10' />
                <span className='relative inline-flex h-2 w-2 rounded-full bg-neutral-950 ring-4 ring-neutral-100/50' />
              </span>

              <article className='group rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6 md:p-7 shadow-sm transition hover:border-neutral-300 hover:shadow-md min-w-0'>
                <div className='flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6'>
                  <div className='min-w-0 flex-1'>
                    <h3 className='text-lg sm:text-xl font-bold text-neutral-950 text-balance'>
                      {exp.position}
                    </h3>
                    <p className='mt-1 text-sm sm:text-base font-semibold text-neutral-800 wrap-break-word'>
                      {exp.company}
                      {exp.location ? (
                        <span className='font-normal text-neutral-500'>
                          {' · '}
                          {exp.location}
                        </span>
                      ) : null}
                    </p>
                  </div>
                  <p className='shrink-0 text-xs sm:text-sm font-medium text-neutral-500 tabular-nums sm:text-right'>
                    {exp.duration}
                  </p>
                </div>

                {exp.summary ? (
                  <p className='mt-3 sm:mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed text-pretty'>
                    {exp.summary}
                  </p>
                ) : null}

                {exp.highlights.length > 0 ? (
                  <ul className='mt-3 sm:mt-4 space-y-2 text-sm text-neutral-600'>
                    {exp.highlights.map((item) => (
                      <li key={item} className='flex items-start gap-3 min-w-0'>
                        <span
                          aria-hidden
                          className='mt-2 h-1 w-1 shrink-0 rounded-full bg-neutral-950'
                        />
                        <span className='text-pretty leading-relaxed'>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : null}

                <div className='mt-4 sm:mt-5 flex flex-wrap gap-2'>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className='text-xs font-medium rounded-lg bg-neutral-100 text-neutral-800 px-2.5 py-1.5 border border-neutral-200'>
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
