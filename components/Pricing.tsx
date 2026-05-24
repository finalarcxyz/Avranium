'use client'

import { useState } from 'react'
import { Check, X } from 'lucide-react'

/* ── Constants ───────────────────────────────────────────────────── */

const WA_HREF =
  'https://wa.me/919337925654?text=Hi%2C%20I%27m%20interested%20in%20a%203D%20walkthrough%20for%20my%20project'

/* ── Types ───────────────────────────────────────────────────────── */

type Price = { inr: string; usd: string }

type Tier = {
  id: string
  name: string
  highlighted: boolean
  residential: Price
  commercial: Price
  timeline: string
  included: string[]
  excluded: string[]
}

/* ── Pricing data ────────────────────────────────────────────────── */

const TIERS: Tier[] = [
  {
    id: 'showcase',
    name: 'Showcase',
    highlighted: false,
    residential: { inr: '₹40,000 – ₹55,000',     usd: '~$500–$650' },
    commercial:  { inr: '₹55,000 – ₹70,000',     usd: '~$650–$850' },
    timeline: '1 scene · 5–7 days',
    included: [
      'Browser + VR ready',
      'Custom branded intro',
      'Day OR Night mood',
      'Ambient soundscapes',
      '2 revisions',
      '6 months hosting',
    ],
    excluded: [
      'Multiple scenes',
      'Day + Night toggle',
      'Custom hotspots',
    ],
  },
  {
    id: 'experience',
    name: 'Experience',
    highlighted: true,
    residential: { inr: '₹75,000 – ₹1,25,000',  usd: '~$900–$1,500' },
    commercial:  { inr: '₹1,00,000 – ₹1,75,000', usd: '~$1,200–$2,100' },
    timeline: 'Up to 3 scenes · 8–14 days',
    included: [
      'Browser + VR ready',
      'Branded intro',
      'Day + Night toggle',
      'Ambient sound',
      'Clickable hotspots',
      'Embeddable on website',
      '3 revisions',
      '1 year hosting',
    ],
    excluded: [
      'More than 3 scenes',
      'Priority delivery',
      'White label',
    ],
  },
  {
    id: 'immersive',
    name: 'Immersive',
    highlighted: false,
    residential: { inr: '₹1,75,000 – ₹2,25,000', usd: '~$2,100–$2,700' },
    commercial:  { inr: '₹2,00,000 – ₹3,50,000', usd: '~$2,400–$4,200' },
    timeline: 'Up to 5 scenes · 14–30 days',
    included: [
      'Browser + VR ready',
      'Custom animation intro',
      'Day + Evening + Night',
      'Custom sound per scene',
      'Advanced hotspots',
      'Material switcher',
      'Priority delivery',
      '5 revisions',
      '2 years hosting',
    ],
    excluded: [
      'More than 5 scenes without extra quote',
    ],
  },
]

/* ── Component ───────────────────────────────────────────────────── */

export default function Pricing() {
  const [isCommercial, setIsCommercial] = useState(false)

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">

        {/* ── Section label ─────────────────────────────────────── */}
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#6e6e73]">
          Pricing
        </p>

        {/* ── Headline ──────────────────────────────────────────── */}
        <h2 className="mx-auto mt-4 max-w-2xl text-center text-4xl font-bold tracking-tight text-black sm:text-5xl">
          Simple, transparent pricing
        </h2>

        {/* ── Subheadline ───────────────────────────────────────── */}
        <p className="mt-4 text-center text-lg text-[#6e6e73]">
          No hidden fees. No surprises. 50% advance, 50% on delivery.
        </p>

        {/* ── Residential / Commercial toggle ───────────────────── */}
        <div className="mt-10 flex justify-center">
          <div className="flex items-center gap-1 rounded-full border border-[#d2d2d7] p-1">
            <button
              onClick={() => setIsCommercial(false)}
              className={[
                'rounded-full px-5 py-2 text-sm font-medium transition-colors duration-200',
                !isCommercial
                  ? 'bg-black text-white'
                  : 'text-[#6e6e73] hover:text-black',
              ].join(' ')}
            >
              Residential
            </button>
            <button
              onClick={() => setIsCommercial(true)}
              className={[
                'rounded-full px-5 py-2 text-sm font-medium transition-colors duration-200',
                isCommercial
                  ? 'bg-black text-white'
                  : 'text-[#6e6e73] hover:text-black',
              ].join(' ')}
            >
              Commercial
            </button>
          </div>
        </div>

        {/* ── Tier cards ────────────────────────────────────────── */}
        {/*
         * md:py-6 on the grid gives vertical room for the Experience card's
         * md:scale-105 so it doesn't get clipped by the grid container edge.
         */}
        <div className="mt-8 grid grid-cols-1 items-stretch gap-6 md:grid-cols-3 md:py-6">
          {TIERS.map((tier) => {
            const price = isCommercial ? tier.commercial : tier.residential
            const hl = tier.highlighted

            return (
              <div
                key={tier.id}
                className={[
                  'relative flex flex-col rounded-2xl p-8',
                  hl
                    ? 'z-10 bg-black text-white shadow-[0_8px_40px_rgba(0,0,0,0.14)] md:scale-105'
                    : 'border border-[#d2d2d7] bg-white text-black',
                ].join(' ')}
              >
                {/* Badge (Experience) or height-matching spacer (others) */}
                {hl ? (
                  <div className="mb-5 self-start">
                    <span className="rounded-full bg-neutral-700 px-3 py-1 text-xs font-medium text-white">
                      Most Popular
                    </span>
                  </div>
                ) : (
                  /*
                   * h-6 (24px) matches the badge height so tier names,
                   * prices, and feature lists stay vertically aligned
                   * across all three cards.
                   */
                  <div className="mb-5 h-6" aria-hidden="true" />
                )}

                {/* Tier name */}
                <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${hl ? 'text-white/60' : 'text-[#6e6e73]'}`}>
                  {tier.name}
                </p>

                {/* Price — INR */}
                <p className={`mt-2 text-2xl font-bold tracking-tight ${hl ? 'text-white' : 'text-black'}`}>
                  {price.inr}
                </p>

                {/* Price — USD approx */}
                <p className={`text-sm ${hl ? 'text-white/50' : 'text-[#6e6e73]'}`}>
                  {price.usd} USD approx*
                </p>

                {/* Scope note */}
                <p className={`mt-1 text-xs ${hl ? 'text-white/40' : 'text-[#6e6e73]'}`}>
                  Final quote based on project scope.
                </p>

                {/* Timeline */}
                <p className={`mt-4 text-sm font-medium ${hl ? 'text-white/80' : 'text-black'}`}>
                  {tier.timeline}
                </p>

                {/* Divider */}
                <div className={`my-6 border-t ${hl ? 'border-white/10' : 'border-[#d2d2d7]'}`} />

                {/* Included features */}
                <ul className="space-y-2.5">
                  {tier.included.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Check
                        size={15}
                        strokeWidth={2.5}
                        className={`mt-[1px] shrink-0 ${hl ? 'text-white' : 'text-black'}`}
                        aria-hidden="true"
                      />
                      <span className={`text-sm leading-snug ${hl ? 'text-white/90' : 'text-black'}`}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Excluded features */}
                <ul className="mt-4 space-y-2.5">
                  {tier.excluded.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <X
                        size={15}
                        strokeWidth={2.5}
                        className={`mt-[1px] shrink-0 ${hl ? 'text-white/35' : 'text-[#6e6e73]'}`}
                        aria-hidden="true"
                      />
                      <span className={`text-sm leading-snug ${hl ? 'text-white/35' : 'text-[#6e6e73]'}`}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Spacer — pushes CTA to the bottom of every card */}
                <div className="flex-1" />

                {/* CTA button */}
                <a
                  href={WA_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={[
                    'mt-8 block w-full rounded-full py-3 text-center text-sm font-medium',
                    'transition-colors duration-200',
                    hl
                      ? 'bg-white text-black hover:bg-gray-100 active:bg-gray-200'
                      : 'border border-black text-black hover:bg-black hover:text-white active:bg-[#333]',
                  ].join(' ')}
                >
                  Get Started on WhatsApp
                </a>

              </div>
            )
          })}
        </div>

        {/* ── Payment terms ─────────────────────────────────────── */}
        <p className="mt-10 text-center text-sm text-[#6e6e73]">
          50% advance before work starts · 50% on delivery · 2–3 revision rounds included
        </p>

        {/* ── USD footnote ──────────────────────────────────────── */}
        <p className="mt-3 text-center text-xs text-[#6e6e73]">
          * USD conversions approximate. International project pricing on request.
        </p>

      </div>
    </section>
  )
}
