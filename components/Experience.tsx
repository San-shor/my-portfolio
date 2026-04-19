const experiences = [
  {
    id: 1,
    company: 'SELISE Digital Platforms',
    position: 'Associate Software Engineer',
    duration: 'Nov 2023 – May 2024',
    summary:
      'Frontend features with a strong focus on quality and test coverage.',
    responsibilities: ['Frontend development', 'Unit testing'],
    technologies: ['React', 'TypeScript', 'JavaScript'],
  },
  {
    id: 2,
    company: 'SELISE Digital Platforms',
    position: 'Software Intern',
    duration: 'Jul 2023 – Oct 2023',
    summary: null as string | null,
    responsibilities: [] as string[],
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
          <p className='text-xs sm:text-sm font-semibold uppercase tracking-wider text-neutral-500 mb-2 sm:mb-3'>
            Experience
          </p>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-950 tracking-tight text-balance'>
            Where I&apos;ve worked
          </h2>
          <p className='mt-3 sm:mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed text-pretty'>
            Recent roles in product-focused software development.
          </p>
        </header>

        <div className='space-y-4 sm:space-y-5'>
          {experiences.map((exp) => (
            <article
              key={exp.id}
              className='group rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6 md:p-7 shadow-sm transition hover:border-neutral-300 hover:shadow-md min-w-0'>
              <div className='flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6'>
                <div className='min-w-0 flex-1'>
                  <h3 className='text-lg sm:text-xl font-bold text-neutral-950 text-balance'>
                    {exp.position}
                  </h3>
                  <p className='mt-1 text-sm sm:text-base font-semibold text-neutral-800 break-words'>
                    {exp.company}
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

              {exp.responsibilities.length > 0 ? (
                <ul className='mt-3 sm:mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs sm:text-sm text-neutral-600'>
                  {exp.responsibilities.map((item) => (
                    <li key={item} className='flex items-center gap-2 min-w-0'>
                      <span
                        aria-hidden
                        className='h-1 w-1 shrink-0 rounded-full bg-neutral-950'
                      />
                      {item}
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
          ))}
        </div>
      </div>
    </section>
  );
}
