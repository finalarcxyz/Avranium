'use client'

import { useEffect, useRef } from 'react'

/* ── Constants ──────────────────────────────────────────────────── */
const WA_HREF =
  'https://wa.me/919337925654?text=Hi%2C%20I%27m%20interested%20in%20a%203D%20walkthrough%20for%20my%20project'

const VIDEO_SRC =
  '/videos/Avranium_Exterior_3D_walkthrough_Demo_project-Tapi.mp4'

/* ── Component ──────────────────────────────────────────────────── */
export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    /*
     * Explicit .play() call handles Safari's stricter autoplay policy.
     * The autoPlay / muted / playsInline attributes are still required;
     * they're the signals the browser checks before we call play().
     * We swallow the rejection: if autoplay is blocked the video simply
     * stays on its first frame, which is an acceptable fallback.
     */
    video.play().catch(() => {})
  }, [])

  return (
    <section className="relative h-screen overflow-hidden bg-black">

      {/* ── Video background ──────────────────────────────────────── */}
      <video
        ref={videoRef}
        src={VIDEO_SRC}
        autoPlay
        muted
        loop
        playsInline        // critical for iOS Safari, prevents fullscreen hijack
        preload="auto"     // start buffering immediately for smooth autoplay
        className="absolute inset-0 z-0 h-full w-full object-cover"
        aria-hidden="true"
      />

      {/* ── Dark overlay (55 % black) ──────────────────────────────── */}
      <div
        className="absolute inset-0 z-10 bg-black/70"
        aria-hidden="true"
      />

      {/* ── Hero content ──────────────────────────────────────────── */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center px-6 text-center">

        {/* Headline */}
        <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4.5rem]">
          Close pre-construction bookings faster.
        </h1>

        {/* Subheadline */}
        <p className="mt-6 max-w-xl text-base leading-relaxed text-[#a3a3a3] sm:text-lg md:text-xl">
          Interactive 3D walkthroughs let buyers experience your project before
          construction begins, so they call you ready to book.
        </p>

        {/* CTA */}
        <div className="mt-10">
          <a
            href={WA_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-white px-8 py-3.5 text-base font-medium text-black transition-colors duration-200 hover:bg-gray-100 active:bg-gray-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-2 shrink-0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.051L.787 23.617l4.681-1.476A11.934 11.934 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.001-1.366l-.359-.214-3.714 1.17 1.17-3.636-.234-.373A9.818 9.818 0 1 1 12 21.818z"/>
            </svg>
            Start on WhatsApp
          </a>
        </div>

        {/* Social proof whisper */}
        <p className="mt-4 text-sm text-[#6e6e73]">
          Typically replies within 2 hours
        </p>

      </div>
    </section>
  )
}
