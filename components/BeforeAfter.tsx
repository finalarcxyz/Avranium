'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

/* ── Types ───────────────────────────────────────────────────────── */

type ShowcaseLink = { label: string; href: string }

type Showcase = {
  name: string
  image: string
  video: string
  links: ShowcaseLink[]
}

/* ── Data ────────────────────────────────────────────────────────── */

const SHOWCASES: Showcase[] = [
  {
    name: 'Exterior',
    image: '/images/Avranium_Exterior_render_Tapi.jpg',
    video: '/videos/Avranium_Exterior_3D_walkthrough_Demo_project-Tapi.mp4',
    links: [
      { label: 'Explore Live →', href: 'https://avranakul.shapespark.com/tapiexterior_multiplecamera/' },
    ],
  },
  {
    name: 'Foyer',
    image: '/images/Avranium_foyer_3D_render_Tapi.jpg',
    video: '/videos/Avranium_Foyer_3D_walkthrough_Demo_project-Tapi.mp4',
    links: [
      { label: 'Explore Live →', href: 'https://avranakul.shapespark.com/foyer/' },
    ],
  },
  {
    name: 'Terrace',
    image: '/images/Avranium_Terrace_3D_render_Tapi.jpg',
    video: '/videos/Avranium_Terrace_night_3D_walkthrough_Demo_project-Tapi.mp4',
    links: [
      { label: 'Explore Live →', href: 'https://avranakul.shapespark.com/tbw_terrace-night/' },
    ],
  },
]

/* ── Shared media height classes ─────────────────────────────────── */
// Applied to both the image wrapper and the video so they're always equal.
const MEDIA_HEIGHT = 'h-[220px] md:h-[400px]'

/* ── ShowcaseRow ─────────────────────────────────────────────────── */

function ShowcaseRow({ showcase }: { showcase: Showcase }) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    /*
     * Play when ≥40 % of the video is visible; pause when it leaves.
     * The explicit .play() call (+ Safari .catch) is the same
     * failsafe pattern used in Hero.
     */
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { threshold: 0.4 },
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  return (
    <div>
      {/* ── Column labels ──────────────────────────────────────── */}
      <div className="mb-3 grid grid-cols-2 gap-4">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#6e6e73]">
          Static Render
        </p>
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#6e6e73]">
          3D Walkthrough
        </p>
      </div>

      {/* ── Media pair ─────────────────────────────────────────── */}
      <div className="grid grid-cols-2 gap-3 md:gap-5">

        {/* Before: static JPG */}
        <div className={`relative ${MEDIA_HEIGHT} overflow-hidden rounded-xl`}>
          <Image
            src={showcase.image}
            alt={`${showcase.name} static render`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 45vw, 480px"
          />
        </div>

        {/* After: IntersectionObserver-driven video */}
        <div className={`${MEDIA_HEIGHT} overflow-hidden rounded-xl`}>
          <video
            ref={videoRef}
            src={showcase.video}
            autoPlay          // attribute for Safari policy signal
            muted
            loop
            playsInline       // prevents iOS fullscreen hijack
            className="h-full w-full object-cover"
          />
        </div>

      </div>

      {/* ── Property name ──────────────────────────────────────── */}
      <p className="mt-5 text-center text-lg font-bold tracking-tight text-black">
        {showcase.name}
      </p>

      {/* ── Explore Live button(s) ──────────────────────────────── */}
      <div className="mt-3 flex justify-center gap-3">
        {showcase.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={[
              'rounded-full border border-black',
              'px-5 py-2 text-sm font-medium text-black',
              'transition-colors duration-200',
              'hover:bg-black hover:text-white',
            ].join(' ')}
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  )
}

/* ── Section ─────────────────────────────────────────────────────── */

export default function BeforeAfter() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-5xl px-6 lg:px-8">

        {/* ── Section header ──────────────────────────────────── */}
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#6e6e73]">
          The Difference
        </p>

        <h2 className="mx-auto mt-4 max-w-2xl text-center text-4xl font-bold tracking-tight text-black sm:text-5xl">
          See it for yourself
        </h2>

        <p className="mt-4 text-center text-lg text-[#6e6e73]">
          Static renders tell. Walkthroughs sell.
        </p>

        {/* ── Showcase rows ───────────────────────────────────── */}
        <div className="mt-16 space-y-20">
          {SHOWCASES.map((showcase) => (
            <ShowcaseRow key={showcase.name} showcase={showcase} />
          ))}
        </div>

      </div>
    </section>
  )
}
