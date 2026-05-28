'use client'

import { useState } from 'react'
import Image from 'next/image'
import TapiCaseStudy from '@/components/TapiCaseStudy'

export default function OurWork() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <section className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">

          {/* ── Section header ────────────────────────────────────── */}
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-[#6e6e73]">
            Our Work
          </p>

          <h2 className="mx-auto mt-4 max-w-2xl text-center text-4xl font-bold tracking-tight text-black sm:text-5xl">
            Projects we&apos;ve delivered
          </h2>

          {/* ── Project card ──────────────────────────────────────── */}
          <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl border border-[#d2d2d7]">

            {/* Hero image */}
            <div className="relative h-72 w-full overflow-hidden">
              <Image
                src="/images/Avranium_Exterior_render_Tapi.jpg"
                alt="Tapi Business World — Exterior"
                fill
                className="rounded-t-2xl object-cover [object-position:center_25%]"
                sizes="(max-width: 768px) 100vw, 768px"
                priority
              />
            </div>

            {/* Card body */}
            <div className="rounded-b-2xl border-t border-[#d2d2d7] p-6">

              {/* Top row */}
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-bold text-black">
                  Tapi Business World
                </h3>
                <span className="shrink-0 text-sm text-[#6e6e73]">Gujarat</span>
              </div>

              {/* Type */}
              <p className="mt-1 text-sm text-[#6e6e73]">Commercial Business Park</p>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {['Commercial', 'Business Park', '8 Days'].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#f5f5f7] px-3 py-1 text-xs font-medium text-[#6e6e73]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <button
                onClick={() => setModalOpen(true)}
                className="mt-5 rounded-full bg-black px-6 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#333]"
              >
                View Case Study →
              </button>

            </div>
          </div>

        </div>
      </section>

      <TapiCaseStudy open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
