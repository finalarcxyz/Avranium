/* Server Component */

import {
  Building2,
  Landmark,
  Home,
  Shield,
  Map,
  BedDouble,
  Layers,
  type LucideIcon,
} from 'lucide-react'

/* ── Data ────────────────────────────────────────────────────────── */

type ProjectType = {
  icon: LucideIcon
  label: string
}

const PROJECT_TYPES: ProjectType[] = [
  { icon: Building2,  label: 'Commercial Business Parks' },
  { icon: Landmark,   label: 'Residential Apartments' },
  { icon: Home,       label: 'Duplex & Villas' },
  { icon: Shield,     label: 'Gated Communities' },
  { icon: Map,        label: 'Townships' },
  { icon: BedDouble,  label: 'Hotels & Hospitality' },
  { icon: Layers,     label: 'Mixed-Use Developments' },
]

/* ── Component ───────────────────────────────────────────────────── */

export default function ProjectTypes() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">

        {/* ── Headline ──────────────────────────────────────────── */}
        <h2 className="mx-auto mt-4 max-w-2xl text-center text-4xl font-bold tracking-tight text-black sm:text-5xl">
          Built for every kind of real estate project
        </h2>

        {/* ── Subheadline ───────────────────────────────────────── */}
        <p className="mx-auto mt-5 max-w-xl text-center text-lg leading-relaxed text-[#6e6e73]">
          From a single luxury villa to a full township. If it&apos;s being built,
          we can walk buyers through it.
        </p>

        {/* ── Card grid ─────────────────────────────────────────── */}
        {/*
         * 2 columns on mobile + tablet, 4 columns on desktop (lg+).
         * flex-wrap + justify-center keeps any incomplete last row centred.
         *
         * Width math with gap-4 (16px):
         *   2-col: w = calc(50%  - 8px)   [2w + 1*16 = 100%]
         *   4-col: w = calc(25% - 12px)   [4w + 3*16 = 100%]
         */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {PROJECT_TYPES.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex w-[calc(50%-8px)] items-center rounded-xl bg-black px-4 py-3 lg:w-[calc(25%-12px)]"
            >
              <Icon size={18} className="shrink-0 text-white" aria-hidden="true" />
              <p className="ml-3 text-sm font-medium leading-snug text-white">
                {label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
