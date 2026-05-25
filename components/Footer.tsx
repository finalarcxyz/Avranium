/* Server Component */

const WA_HREF =
  'https://wa.me/919337925654?text=Hi%2C%20I%27m%20interested%20in%20a%203D%20walkthrough%20for%20my%20project'

export default function Footer() {
  return (
    <footer className="bg-black py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">

        {/* ── Row 1: CTA block ──────────────────────────────────── */}
        <div className="flex flex-col items-center py-8 text-center">

          <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            Ready to show your project<br className="hidden sm:block" /> before it&apos;s built?
          </h2>

          <p className="mt-5 max-w-md text-base leading-relaxed text-[#a3a3a3]">
            Get in touch on WhatsApp. We typically reply within 2 hours.
          </p>

          <a
            href={WA_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3.5 text-base font-medium text-black transition-colors duration-200 hover:bg-gray-100 active:bg-gray-200"
          >
            Start on WhatsApp
          </a>

        </div>

        {/* ── Row 2: Divider ────────────────────────────────────── */}
        <div className="border-t border-[#262626]" />

        {/* ── Row 3: Bottom bar ─────────────────────────────────── */}
        <div className="mt-8 flex flex-col items-center gap-4 md:flex-row md:justify-between">

          {/* Wordmark */}
          <span className="select-none text-xl font-bold tracking-tight text-white">
            Avranium
          </span>

          {/* Tagline */}
          <p className="text-sm text-[#6e6e73]">
            3D &amp; VR Walkthroughs for Real Estate
          </p>

          {/* Contact links */}
          <div className="flex flex-col items-center gap-1 sm:flex-row sm:gap-4">
            <a
              href="mailto:avranium@gmail.com"
              className="text-sm text-[#a3a3a3] transition-colors duration-200 hover:text-white"
            >
              avranium@gmail.com
            </a>
            <a
              href="tel:+919337925654"
              className="text-sm text-[#a3a3a3] transition-colors duration-200 hover:text-white"
            >
              +91 93379 25654
            </a>
          </div>

        </div>

      </div>
    </footer>
  )
}
