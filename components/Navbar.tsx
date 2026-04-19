'use client';

import { useEffect, useState } from 'react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
] as const;

function MenuIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='20'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      aria-hidden>
      <path d='M4 6h16M4 12h16M4 18h16' />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='20'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      aria-hidden>
      <path d='M18 6L6 18M6 6l12 12' />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const ids = navItems.map((x) => x.href.replace('#', ''));
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0)
          )[0];
        if (visible?.target?.id) setActiveSection(visible.target.id);
      },
      {
        root: null,
        threshold: [0.1, 0.25, 0.4],
        rootMargin: '-20% 0px -65% 0px',
      }
    );

    for (const el of elements) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <header className='fixed top-0 left-0 right-0 z-50 border-b border-neutral-200/90 bg-white/90 backdrop-blur-md supports-backdrop-filter:bg-white/80'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='h-16 flex items-center justify-between gap-4'>
          <a
            href='#home'
            className='font-bold text-sm sm:text-base text-neutral-950 hover:text-neutral-600 transition-colors shrink-0 min-w-0 text-left leading-tight'
            onClick={() => setOpen(false)}>
            Sanjida Akter
          </a>

          <nav
            className='hidden md:flex items-center gap-1 lg:gap-2 text-sm'
            aria-label='Primary'>
            {navItems.map((item) => {
              const id = item.href.replace('#', '');
              const isActive = id === activeSection;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-lg transition-colors relative ${
                    isActive
                      ? 'text-neutral-950 font-medium'
                      : 'text-neutral-600 hover:text-neutral-950'
                  }`}>
                  <span>{item.label}</span>
                  {isActive && (
                    <span
                      className='absolute bottom-1 left-3 right-3 h-0.5 bg-neutral-950 rounded-full'
                      aria-hidden
                    />
                  )}
                </a>
              );
            })}
          </nav>

          <button
            type='button'
            className='md:hidden inline-flex items-center justify-center min-h-11 min-w-11 rounded-lg border border-neutral-200 text-neutral-800 hover:bg-neutral-50 transition-colors shrink-0'
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}>
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open && (
        <div className='md:hidden border-t border-neutral-200 bg-white/98 backdrop-blur-md max-h-[min(70vh,calc(100dvh-4rem))] overflow-y-auto overscroll-contain'>
          <nav
            className='max-w-6xl mx-auto px-4 sm:px-6 py-3 pb-[max(1rem,env(safe-area-inset-bottom))] flex flex-col gap-0.5'
            aria-label='Mobile'>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className='rounded-lg px-3 py-3.5 min-h-11 flex items-center text-neutral-900 hover:bg-neutral-50 transition-colors font-medium active:bg-neutral-100'
                onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
