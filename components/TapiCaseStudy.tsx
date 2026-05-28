'use client'

import { X } from 'lucide-react'
import Image from 'next/image'

const WA_HREF =
  'https://wa.me/919337925654?text=Hi%2C%20I%27m%20interested%20in%20a%203D%20walkthrough%20for%20my%20project'

/* ── Sub-components ──────────────────────────────────────────────── */

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-3 border-l-4 border-black pl-4 text-lg font-bold text-black">
      {children}
    </h3>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 pl-1">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-sm text-[#3a3a3c]">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-black" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  )
}

function NumberedList({ items }: { items: string[] }) {
  return (
    <ol className="space-y-2 pl-1">
      {items.map((item, i) => (
        <li key={item} className="flex items-start gap-3 text-sm text-[#3a3a3c]">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-black text-[10px] font-bold text-white">
            {i + 1}
          </span>
          {item}
        </li>
      ))}
    </ol>
  )
}

/* ── Props ───────────────────────────────────────────────────────── */

interface Props {
  open: boolean
  onClose: () => void
}

/* ── Component ───────────────────────────────────────────────────── */

export default function TapiCaseStudy({ open, onClose }: Props) {
  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative mx-auto my-4 max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white lg:mx-auto lg:mt-12"
        onClick={(e) => e.stopPropagation()}
      >

        {/* ── Close button ──────────────────────────────────────── */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 rounded-full p-1.5 text-black transition-colors hover:bg-[#f5f5f7]"
        >
          <X size={20} strokeWidth={2} />
        </button>

        <div className="px-6 pb-12 pt-8 sm:px-10">

          {/* ── Header ────────────────────────────────────────────── */}
          <p className="text-xs font-semibold uppercase tracking-widest text-[#6e6e73]">
            Case Study
          </p>
          <h2 className="mt-2 text-3xl font-bold text-black">
            Tapi Business World
          </h2>
          <p className="mt-1 text-sm text-[#6e6e73]">
            Commercial Business Park, Surat, Gujarat
          </p>
          <div className="relative mt-4 h-64 w-full overflow-hidden rounded-xl">
            <Image
              src="/images/Avranium_Exterior_render_Tapi.jpg"
              alt="Tapi Business World — Exterior"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
              priority
            />
          </div>

          {/* ── Sections ──────────────────────────────────────────── */}
          <div className="mt-10 space-y-10">

            {/* 1 — The Problem */}
            <div>
              <SectionHeading>The Problem</SectionHeading>
              <BulletList items={[
                'Client had a high-quality 3D CAD file built by their architect',
                'No way to showcase it on web or VR',
                'Static renders and videos were not enough for pre-launch marketing',
                'Buyers and investors could not experience the space remotely',
              ]} />
            </div>

            {/* 2 — The Challenge */}
            <div>
              <SectionHeading>The Challenge</SectionHeading>
              <BulletList items={[
                'File was 40 million polygons, built for rendering not real-time',
                'Not optimized for browser or VR deployment',
                'Missing textures and geometry issues needed fixing',
                'Required 70–80% visual quality retention while making it run in real time',
              ]} />
            </div>

            {/* 3 — What We Delivered */}
            <div>
              <SectionHeading>What We Delivered</SectionHeading>
              <BulletList items={[
                '3 fully interactive scenes: Exterior, Foyer, Terrace Day and Night',
                'Browser-accessible link — no app, no download',
                'VR-ready, works on Meta Quest and other headsets',
                'Day and night lighting toggle on terrace',
                'Ambient sound and branded experience',
                'Delivered in 8 days from receiving the file',
              ]} />
            </div>

            {/* 4 — The Process */}
            <div>
              <SectionHeading>The Process</SectionHeading>
              <NumberedList items={[
                'Received FBX file from client',
                'Day 1: file assessment, identified issues',
                'Days 2–6: polygon optimization, geometry fixing, texture work',
                'Days 6–7: Shapespark setup, lighting, look development',
                'Day 8: baking, VR testing, final delivery',
              ]} />
            </div>

            {/* 5 — The Result */}
            <div>
              <SectionHeading>The Result</SectionHeading>
              <BulletList items={[
                'Live explorable link shared with buyers and investors',
                'Buyers could experience the commercial space remotely',
                'Brand stores could visualise their unit before possession',
                'Investors could walk through the entire complex before committing',
                'One link replaced brochures, videos, and site visits',
              ]} />
            </div>

            {/* 6 — Key Numbers */}
            <div>
              <SectionHeading>Key Numbers</SectionHeading>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  { stat: '40M → 3.5M', label: 'Polygons reduced' },
                  { stat: '70–80%',     label: 'Visual quality retained' },
                  { stat: '3 Scenes',   label: 'Delivered' },
                  { stat: '8 Days',     label: 'End to end' },
                ].map(({ stat, label }) => (
                  <div
                    key={label}
                    className="rounded-xl bg-[#f5f5f7] p-4 text-center"
                  >
                    <p className="text-lg font-bold text-black">{stat}</p>
                    <p className="mt-1 text-xs text-[#6e6e73]">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 7 — Explore Live */}
            <div>
              <SectionHeading>Explore Live</SectionHeading>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  { label: 'Exterior',      href: 'https://pointzero.shapespark.com/tbs_e/' },
                  { label: 'Foyer',         href: 'https://tapi.jrddesigning.com/foyer/' },
                  { label: 'Terrace Day',   href: 'https://tapi.jrddesigning.com/tbw_terrace-1/' },
                  { label: 'Terrace Night', href: 'https://tapi.jrddesigning.com/tbw_terrace-night/' },
                ].map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-black px-4 py-2.5 text-center text-sm font-medium text-black transition-colors duration-200 hover:bg-black hover:text-white"
                  >
                    {label}
                  </a>
                ))}
              </div>
              <p className="mt-4 text-xs text-[#6e6e73]">
                Use WASD or arrow keys to move. Click and drag to look around. Works on mobile and VR.
              </p>
            </div>

          </div>

          {/* ── Modal footer ──────────────────────────────────────── */}
          <div className="mt-12 border-t border-[#d2d2d7] pt-8 text-center">
            <p className="text-sm text-[#6e6e73]">
              Interested in a similar walkthrough for your project?
            </p>
            <a
              href={WA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block rounded-full bg-black px-8 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#333]"
            >
              Start on WhatsApp
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}
