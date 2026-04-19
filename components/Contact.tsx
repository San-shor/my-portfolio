'use client';

import { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<string | null>(null);

  const isError = status === 'Please fill in all fields.';

  return (
    <section
      id='contact'
      className='py-14 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-neutral-50 to-white scroll-mt-24 border-t border-neutral-200 pb-[max(1.5rem,env(safe-area-inset-bottom))]'>
      <div className='w-full max-w-6xl mx-auto min-w-0'>
        <header className='text-center mb-10 sm:mb-12 lg:mb-14 max-w-2xl mx-auto px-1'>
          <p className='text-xs sm:text-sm font-semibold uppercase tracking-wider text-neutral-500 mb-2'>
            Contact
          </p>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-950 tracking-tight text-balance'>
            Let&apos;s talk
          </h2>
          <p className='mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed text-pretty'>
            Send a message or reach me directly via email or social links.
          </p>
        </header>

        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-start'>
          <div className='lg:col-span-7 order-2 lg:order-1 min-w-0'>
            <div className='rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6 md:p-8 shadow-sm'>
              <form
                className='space-y-4 sm:space-y-5'
                onSubmit={(e) => {
                  e.preventDefault();
                  setStatus(null);

                  if (!name.trim() || !email.trim() || !message.trim()) {
                    setStatus('Please fill in all fields.');
                    return;
                  }

                  setStatus('Thanks! Your message is ready to send.');
                  setName('');
                  setEmail('');
                  setMessage('');
                }}>
                <div>
                  <label
                    htmlFor='name'
                    className='block text-sm font-medium text-neutral-700 mb-2'>
                    Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className='w-full min-h-11 px-4 py-3 text-base border border-neutral-200 rounded-xl bg-neutral-50/80 text-neutral-950 placeholder:text-neutral-400 focus:ring-2 focus:ring-neutral-950/15 focus:border-neutral-950 outline-none transition'
                    placeholder='Your name'
                    autoComplete='name'
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-neutral-700 mb-2'>
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='w-full min-h-11 px-4 py-3 text-base border border-neutral-200 rounded-xl bg-neutral-50/80 text-neutral-950 placeholder:text-neutral-400 focus:ring-2 focus:ring-neutral-950/15 focus:border-neutral-950 outline-none transition'
                    placeholder='you@example.com'
                    autoComplete='email'
                    inputMode='email'
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor='message'
                    className='block text-sm font-medium text-neutral-700 mb-2'>
                    Message
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className='w-full px-4 py-3 text-base border border-neutral-200 rounded-xl bg-neutral-50/80 text-neutral-950 placeholder:text-neutral-400 focus:ring-2 focus:ring-neutral-950/15 focus:border-neutral-950 outline-none transition resize-y min-h-32 sm:min-h-[120px]'
                    placeholder='What would you like to discuss?'
                    required
                  />
                </div>

                <button
                  type='submit'
                  className='w-full min-h-11 bg-neutral-950 text-white py-3.5 rounded-xl hover:bg-neutral-800 transition font-medium text-base shadow-lg shadow-neutral-900/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2'>
                  Send message
                </button>

                <p
                  className={`text-sm text-center min-h-5 ${
                    status
                      ? isError
                        ? 'text-neutral-800 font-medium'
                        : 'text-neutral-600'
                      : 'text-transparent'
                  }`}
                  aria-live='polite'>
                  {status ?? ' '}
                </p>
              </form>
            </div>
          </div>

          <aside className='lg:col-span-5 order-1 lg:order-2 min-w-0'>
            <div className='rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6 md:p-7 shadow-sm lg:sticky lg:top-20 xl:top-24'>
              <h3 className='text-lg font-semibold text-neutral-950 mb-1'>
                Direct contact
              </h3>
              <p className='text-sm text-neutral-600 mb-5 sm:mb-6 text-pretty'>
                Prefer email or social? I&apos;m reachable here.
              </p>

              <div className='space-y-2 sm:space-y-3 mb-6 sm:mb-8'>
                <a
                  href='https://github.com/San-shor'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex min-h-11 items-center justify-between gap-3 px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50/80 hover:bg-white hover:border-neutral-300 transition text-neutral-900 text-sm font-medium active:bg-neutral-100'>
                  <span>GitHub</span>
                  <span aria-hidden className='text-neutral-400 shrink-0'>
                    →
                  </span>
                </a>
                <a
                  href='https://www.linkedin.com/in/ssanjida'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex min-h-11 items-center justify-between gap-3 px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50/80 hover:bg-white hover:border-neutral-300 transition text-neutral-900 text-sm font-medium active:bg-neutral-100'>
                  <span>LinkedIn</span>
                  <span aria-hidden className='text-neutral-400 shrink-0'>
                    →
                  </span>
                </a>
              </div>

              <div className='pt-5 sm:pt-6 border-t border-neutral-200 space-y-4 sm:space-y-5'>
                <div className='min-w-0'>
                  <p className='text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-1.5'>
                    Email
                  </p>
                  <a
                    href='mailto:sanjidaewu89@gmail.com'
                    className='text-neutral-950 hover:underline underline-offset-4 font-medium break-all text-sm sm:text-base'>
                    sanjidaewu89@gmail.com
                  </a>
                </div>
                <div>
                  <p className='text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-1.5'>
                    Phone
                  </p>
                  <a
                    href='tel:+8801757600287'
                    className='text-neutral-950 hover:underline underline-offset-4 font-medium tabular-nums inline-flex min-h-11 items-center'>
                    01757600287
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
