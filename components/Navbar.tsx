'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

/* ── Constants ──────────────────────────────────────────────────── */
const WA_HREF =
  'https://wa.me/919337925654?text=Hi%2C%20I%27m%20interested%20in%20a%203D%20walkthrough%20for%20my%20project'

/* ── Nav links ──────────────────────────────────────────────────── */
const NAV_LINKS = [
  { href: '/contact', label: 'Contact' },
]

/* ── Component ──────────────────────────────────────────────────── */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4)
    // Run once on mount so the shadow is correct if page loads mid-scroll
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={[
        'sticky top-0 z-50 w-full bg-white',
        'border-b border-[#d2d2d7]',
        'transition-shadow duration-300',
        scrolled
          ? 'shadow-[0_1px_16px_0_rgba(0,0,0,0.07)]'
          : 'shadow-none',
      ].join(' ')}
    >
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* ── Logo wordmark ──────────────────────────────────────── */}
        <span className="select-none text-xl font-bold tracking-tight text-black">
          Avranium
        </span>

        {/* ── Nav links ─────────────────────────────────────────── */}
        <nav className="hidden sm:flex items-center gap-6">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium text-[#6e6e73] transition-colors duration-200 hover:text-black"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* ── WhatsApp CTA ───────────────────────────────────────── */}
        <a
          href={WA_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-black px-5 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#333333]"
        >
          {/* Full label on sm+ screens */}
          <span className="hidden sm:inline">Get a Walkthrough</span>
          {/* Compact label on xs screens */}
          <span className="sm:hidden">WhatsApp</span>
        </a>

      </div>
    </header>
  )
}
