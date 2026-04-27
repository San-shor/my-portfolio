import Image from 'next/image';

type Project = {
  id: number;
  title: string;
  role: string;
  description: string;
  image: string | null;
  tags: string[];
  github: string;
  demo: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'NestFind App',
    role: 'Frontend · Next.js',
    description:
      'Property discovery UI with search and browsing flows designed to help users find places faster.',
    image: '/projects/nestfind.png',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/San-shor/nestfind-app',
    demo: 'https://nestfind-app.vercel.app',
  },
  {
    id: 2,
    title: 'Academic Website',
    role: 'Frontend · Next.js',
    description:
      'Evergreen University academic site with responsive pages and a modern glassmorphism UI built in Next.js and Tailwind.',
    image: '/projects/academic-website.png',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/San-shor/academic-website',
    demo: 'https://academic-website-blue.vercel.app',
  },
  {
    id: 3,
    title: 'Basic E-Commerce',
    role: 'Frontend · Vanilla JS',
    description:
      'FreshMart-style responsive e-commerce UI with cart persistence, category filtering, and a checkout flow.',
    image: '/projects/basic-ecommerce.png',
    tags: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],
    github: 'https://github.com/San-shor/Basic-E-Commerce',
    demo: 'https://e-commerce-supermarket.netlify.app/',
  },
  {
    id: 4,
    title: 'Cinemate App',
    role: 'Frontend · React',
    description:
      'A clean, modern movie-discovery interface for browsing titles, with a focus on simple navigation and a fast feel.',
    image: '/projects/cinemate.png',
    tags: ['React', 'Flowbite React'],
    github: 'https://github.com/San-shor/Cinemte_App',
    demo: 'https://cinemte-app.vercel.app',
  },
  {
    id: 5,
    title: 'SpaceX Explorer',
    role: 'Frontend · Svelte',
    description:
      'A SpaceX-themed UI with listings and detail pages for exploring rockets and missions.',
    image: '/projects/spacex.png',
    tags: ['Svelte', 'Flowbite'],
    github: 'https://github.com/San-shor/spaceX-app',
    demo: 'https://space-x-app-ten.vercel.app',
  },
  {
    id: 6,
    title: 'Taskify',
    role: 'Frontend · React',
    description:
      'A simple task management UI with a focused workflow for organizing tasks and staying productive.',
    image: null,
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

function ArrowIcon() {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      aria-hidden
      className='h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5'>
      <path d='M7 17L17 7' />
      <path d='M7 7h10v10' />
    </svg>
  );
}

export default function Projects() {
  return (
    <section
      id='projects'
      className='py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 scroll-mt-24 bg-linear-to-b from-white to-neutral-50/80 border-t border-neutral-200'>
      <div className='w-full max-w-6xl mx-auto min-w-0'>
        <header className='mb-10 sm:mb-12 lg:mb-14 max-w-2xl'>
          <div className='flex items-center gap-3 mb-3 sm:mb-4'>
            <span className='font-mono text-[11px] tabular-nums text-neutral-400 shrink-0'>
              05
            </span>
            <span className='h-px w-10 bg-neutral-300 shrink-0' aria-hidden />
            <span className='text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-500 shrink-0'>
              Portfolio
            </span>
          </div>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-950 tracking-tight text-balance'>
            Selected projects
          </h2>
          <p className='mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed text-pretty'>
            A selection of work that reflects how I approach product-focused
            development — from quick UI builds to full app experiences.
          </p>
        </header>

        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 lg:gap-8'>
          {projects.map((project) => (
            <article
              key={project.id}
              className='group flex flex-col h-full min-w-0 rounded-2xl border border-neutral-200 bg-white shadow-sm overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-neutral-300 hover:-translate-y-1'>
              <div className='relative aspect-16/10 w-full shrink-0 border-b border-neutral-200 bg-neutral-100 overflow-hidden'>
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    fill
                    className='object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]'
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
                <div
                  aria-hidden
                  className='pointer-events-none absolute inset-0 bg-linear-to-t from-neutral-950/15 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                />
              </div>
              <div className='flex flex-1 flex-col p-4 sm:p-6 min-w-0'>
                <p className='text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-400 mb-2'>
                  {project.role}
                </p>
                <h3 className='text-base sm:text-lg font-bold text-neutral-950 mb-2 leading-snug text-balance'>
                  {project.title}
                </h3>
                <p className='text-neutral-600 text-xs sm:text-sm leading-relaxed mb-4 flex-1 text-pretty'>
                  {project.description}
                </p>
                <div className='flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5'>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className='text-[11px] sm:text-xs font-medium bg-neutral-50 border border-neutral-200 text-neutral-700 px-2 py-1 rounded-md wrap-break-word'>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className='flex flex-wrap gap-x-4 gap-y-2 mt-auto pt-3 border-t border-neutral-100'>
                  <a
                    href={project.github}
                    className='group/link text-sm font-medium text-neutral-950 hover:underline underline-offset-4 inline-flex min-h-11 items-center gap-1.5 py-1'
                    target='_blank'
                    rel='noopener noreferrer'>
                    GitHub <ArrowIcon />
                  </a>
                  {project.demo && project.demo !== '#' ? (
                    <a
                      href={project.demo}
                      className='group/link text-sm font-medium text-neutral-950 hover:underline underline-offset-4 inline-flex min-h-11 items-center gap-1.5 py-1'
                      target='_blank'
                      rel='noopener noreferrer'>
                      Live demo <ArrowIcon />
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
