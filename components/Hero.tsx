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
     * The autoPlay / muted / playsInline attributes are still required —
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
        playsInline        // critical for iOS Safari — prevents fullscreen hijack
        preload="auto"     // start buffering immediately for smooth autoplay
        className="absolute inset-0 z-0 h-full w-full object-cover"
        aria-hidden="true"
      />

      {/* ── Dark overlay (55 % black) ──────────────────────────────── */}
      <div
        className="absolute inset-0 z-10 bg-black/55"
        aria-hidden="true"
      />

      {/* ── Hero content ──────────────────────────────────────────── */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center px-6 text-center">

        {/* Headline */}
        <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4.5rem]">
          Close more bookings, faster.
        </h1>

        {/* Subheadline */}
        <p className="mt-6 max-w-xl text-base leading-relaxed text-[#a3a3a3] sm:text-lg md:text-xl">
          Interactive 3D walkthroughs let buyers experience your project before
          construction begins — so they call you ready to book.
        </p>

        {/* CTA */}
        <div className="mt-10">
          <a
            href={WA_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-white px-8 py-3.5 text-base font-medium text-black transition-colors duration-200 hover:bg-gray-100 active:bg-gray-200"
          >
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
