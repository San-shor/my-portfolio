const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
] as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className='border-t border-neutral-200 bg-white px-4 sm:px-6 py-8 sm:py-10 pb-[max(1.5rem,env(safe-area-inset-bottom))]'>
      <div className='max-w-6xl mx-auto flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between text-center sm:text-left'>
        <p className='text-xs sm:text-sm text-neutral-600 order-2 sm:order-1'>
          © {year} Sanjida Akter. All rights reserved.
        </p>

        <nav className='flex flex-wrap justify-center sm:justify-end gap-x-5 gap-y-1 text-xs sm:text-sm order-1 sm:order-2'>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className='text-neutral-600 hover:text-neutral-950 transition-colors inline-flex items-center py-2 sm:py-0'>
              {link.label}
            </a>
          ))}
          <a
            href='#home'
            className='text-neutral-600 hover:text-neutral-950 transition-colors inline-flex items-center gap-1 py-2 sm:py-0'>
            Top <span aria-hidden>↑</span>
          </a>
        </nav>
      </div>
    </footer>
  );
}
