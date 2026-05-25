import type { ReactNode } from 'react'

/* ── Icon components (24 × 24 outline SVGs, strokeWidth 1.5) ─────── */

function BoltIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  )
}

function GlobeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  )
}

function ArrowTrendingUpIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
    </svg>
  )
}

function BriefcaseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18a48.111 48.111 0 01-6.378.42c-2.162 0-4.291-.143-6.378-.42-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
    </svg>
  )
}

function SparklesIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    </svg>
  )
}

/* ── Data ────────────────────────────────────────────────────────── */

type Value = {
  icon: ReactNode
  title: string
  description: string
}

const VALUES: Value[] = [
  {
    icon: <BoltIcon />,
    title: 'Pre-sell Units Faster',
    description:
      `Buyers commit before construction begins because they've already walked through the space.`,
  },
  {
    icon: <GlobeIcon />,
    title: 'Convert Remote Buyers',
    description:
      'NRI and outstation investors explore on their phone from anywhere, any time.',
  },
  {
    icon: <ArrowTrendingUpIcon />,
    title: 'Better Ad Conversion',
    description:
      'The walkthrough becomes the landing page. Buyers spend 15–20 minutes instead of 30 seconds.',
  },
  {
    icon: <BriefcaseIcon />,
    title: 'Impress Investors',
    description:
      'One link sent before a meeting means they arrive already sold.',
  },
  {
    icon: <SparklesIcon />,
    title: 'Stand Out in Every Sales Conversation',
    description:
      'While competitors send brochures, your developer sends a link buyers walk through themselves.',
  },
]

/* ── Component ──────────────────────────────────────────────────── */

export default function ValueProps() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* ── Section label ─────────────────────────────────────── */}
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#6e6e73]">
          Why Avranium
        </p>

        {/* ── Headline ──────────────────────────────────────────── */}
        <h2 className="mx-auto mt-4 max-w-3xl text-center text-4xl font-bold leading-tight tracking-tight text-black sm:text-5xl">
          Give buyers certainty before construction begins.
        </h2>

        {/* ── Subheadline ───────────────────────────────────────── */}
        <p className="mx-auto mt-5 max-w-xl text-center text-lg leading-relaxed text-[#6e6e73]">
          One browser link. No app. Buyers experience the space from anywhere.
        </p>

        {/* ── Cards ─────────────────────────────────────────────── */}
        {/*
         * CSS grid 3-2 layout:
         *   - Parent: grid-cols-3 at lg, grid-cols-2 at sm, 1-col mobile
         *   - First 3 cards sit directly in the parent grid (one per column)
         *   - Last 2 cards are wrapped in a col-span-3 div so they span
         *     the full row, then centred with max-w-2xl mx-auto in their
         *     own 2-col sub-grid
         *   - items-stretch (CSS grid default) gives equal height within
         *     each row without any extra classes on the cards
         */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {/* Row 1: first 3 cards */}
          {VALUES.slice(0, 3).map((v) => (
            <article
              key={v.title}
              className="flex flex-col rounded-2xl bg-[#f5f5f7] p-7 lg:p-8"
            >
              <div className="mb-5 text-black">{v.icon}</div>
              <h3 className="mb-2 text-[1.0625rem] font-semibold leading-snug tracking-tight text-black">
                {v.title}
              </h3>
              <p className="text-[0.9375rem] leading-relaxed text-[#6e6e73]">
                {v.description}
              </p>
            </article>
          ))}

          {/* Row 2: last 2 cards — span all 3 columns, sub-grid centred */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-3">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2">
              {VALUES.slice(3).map((v) => (
                <article
                  key={v.title}
                  className="flex flex-col rounded-2xl bg-[#f5f5f7] p-7 lg:p-8"
                >
                  <div className="mb-5 text-black">{v.icon}</div>
                  <h3 className="mb-2 text-[1.0625rem] font-semibold leading-snug tracking-tight text-black">
                    {v.title}
                  </h3>
                  <p className="text-[0.9375rem] leading-relaxed text-[#6e6e73]">
                    {v.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
