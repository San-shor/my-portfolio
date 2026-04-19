import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'Basic E-Commerce',
    description:
      'FreshMart-style responsive e-commerce UI with cart persistence, category filtering, and a checkout flow.',
    image: '/projects/basic-ecommerce.png',
    tags: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],
    github: 'https://github.com/San-shor/Basic-E-Commerce',
    demo: 'https://e-commerce-supermarket.netlify.app/',
  },
  {
    id: 2,
    title: 'Academic Website',
    description:
      'Evergreen University academic site built with Next.js, TypeScript, and Tailwind; responsive pages and glassmorphism UI.',
    image: '/projects/academic-website.png',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/San-shor/academic-website',
    demo: 'https://academic-website-blue.vercel.app',
  },
  {
    id: 3,
    title: 'NestFind App',
    description:
      'Property discovery UI with searching and browsing-style flows for finding places faster.',
    image: '/projects/nestfind.png',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/San-shor/nestfind-app',
    demo: 'https://nestfind-app.vercel.app',
  },
  {
    id: 4,
    title: 'SpaceX App',
    description:
      'SpaceX-themed UI with listings and detail pages to explore rockets and missions.',
    image: '/projects/spacex.png',
    tags: ['Flowbite', 'Svelte'],
    github: 'https://github.com/San-shor/spaceX-app',
    demo: 'https://space-x-app-ten.vercel.app',
  },
  {
    id: 5,
    title: 'Cinemte App',
    description:
      'Cinemte UI for browsing and discovering movies with a clean, modern interface.',
    image: '/projects/cinemate.png',
    tags: ['React Flowbite', 'React'],
    github: 'https://github.com/San-shor/Cinemte_App',
    demo: 'https://cinemte-app.vercel.app',
  },
  {
    id: 6,
    title: 'Task Application',
    description:
      'Task management UI (Taskify) with a simple workflow for organizing tasks and staying productive.',
    image: null as string | null,
    tags: ['React', 'LocalStorage', 'Tailwind CSS'],
    github: 'https://github.com/San-shor/Task_Application',
    demo: 'https://san-shor-taskify.netlify.app/',
  },
];

function projectInitial(title: string) {
  const words = title.trim().split(/\s+/);
  if (words.length >= 2) {
    return (words[0][0] + words[1][0]).toUpperCase();
  }
  return title.slice(0, 2).toUpperCase();
}

export default function Projects() {
  return (
    <section
      id='projects'
      className='py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 scroll-mt-24 bg-linear-to-b from-white to-neutral-50/80'>
      <div className='w-full max-w-6xl mx-auto min-w-0'>
        <header className='text-center mb-10 sm:mb-12 lg:mb-14 max-w-2xl mx-auto px-1'>
          <p className='text-xs sm:text-sm font-semibold uppercase tracking-wider text-neutral-500 mb-2'>
            Portfolio
          </p>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-950 tracking-tight text-balance'>
            Selected projects
          </h2>
          <p className='mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed text-pretty'>
            Interfaces and apps that reflect how I approach product-focused
            development.
          </p>
        </header>

        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 lg:gap-8'>
          {projects.map((project) => (
            <article
              key={project.id}
              className='group flex flex-col h-full min-w-0 rounded-2xl border border-neutral-200 bg-white shadow-sm overflow-hidden transition hover:shadow-lg hover:border-neutral-300 hover:-translate-y-0.5'>
              <div className='relative aspect-16/10 w-full shrink-0 border-b border-neutral-200 bg-neutral-100'>
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    fill
                    className='object-cover object-top'
                    sizes='(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw'
                  />
                ) : (
                  <>
                    <div
                      aria-hidden
                      className='absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(10,10,10,0.06),transparent_55%)]'
                    />
                    <div className='absolute inset-0 flex items-center justify-center p-6'>
                      <div className='flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl border border-neutral-200 bg-white text-base sm:text-lg font-bold tracking-tight text-neutral-950 shadow-md'>
                        {projectInitial(project.title)}
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div className='flex flex-1 flex-col p-4 sm:p-6 min-w-0'>
                <h3 className='text-base sm:text-lg font-bold text-neutral-950 mb-2 leading-snug text-balance'>
                  {project.title}
                </h3>
                <p className='text-neutral-600 text-xs sm:text-sm leading-relaxed mb-4 flex-1 text-pretty'>
                  {project.description}
                </p>
                <div className='flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5'>
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className='text-[11px] sm:text-xs font-medium bg-neutral-50 border border-neutral-200 text-neutral-700 px-2 py-1 rounded-md wrap-break-word'>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className='flex flex-wrap gap-x-4 gap-y-2 mt-auto pt-1 border-t border-neutral-100'>
                  <a
                    href={project.github}
                    className='text-sm font-medium text-neutral-950 hover:underline underline-offset-4 inline-flex min-h-11 items-center gap-1 py-1'
                    target='_blank'
                    rel='noopener noreferrer'>
                    GitHub{' '}
                    <span
                      aria-hidden
                      className='text-neutral-400 group-hover:text-neutral-950 transition-colors'>
                      →
                    </span>
                  </a>
                  {project.demo && project.demo !== '#' ? (
                    <a
                      href={project.demo}
                      className='text-sm font-medium text-neutral-950 hover:underline underline-offset-4 inline-flex min-h-11 items-center gap-1 py-1'
                      target='_blank'
                      rel='noopener noreferrer'>
                      Live demo{' '}
                      <span
                        aria-hidden
                        className='text-neutral-400 group-hover:text-neutral-950 transition-colors'>
                        →
                      </span>
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
