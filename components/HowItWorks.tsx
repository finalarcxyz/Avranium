/* Server Component */

type Step = {
  number: string
  title: string
  description: string
}

const STEPS: Step[] = [
  {
    number: '01',
    title: 'Send Your Files',
    description:
      'FBX, OBJ, SKP or any standard 3D format. We assess quality within 1 day and confirm the timeline.',
  },
  {
    number: '02',
    title: 'We Build It',
    description:
      'We optimise for real-time performance, set up lighting, materials, and full interactivity. Delivered in 5–12 days.',
  },
  {
    number: '03',
    title: 'Share One Link',
    description:
      'Browser, mobile, and VR ready. Your clients walk through it instantly. No app needed.',
  },
]

/*
 * Padding strategy for the three columns:
 *   Step 1  →  md:pr-12          (flush left, space before divider)
 *   Step 2  →  md:px-12          (space on both sides of dividers)
 *   Step 3  →  md:pl-12          (space after divider, flush right)
 *
 * This keeps "01" aligned with the section headline on the left
 * and "03" flush with the right edge, avoiding unnecessary indentation
 * at the outer margins.
 */
const COL_PADDING = ['md:pr-12', 'md:px-12', 'md:pl-12'] as const

export default function HowItWorks() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">

        {/* ── Section label ─────────────────────────────────────── */}
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#6e6e73]">
          How It Works
        </p>

        {/* ── Headline ──────────────────────────────────────────── */}
        <h2 className="mx-auto mt-4 max-w-2xl text-center text-4xl font-bold tracking-tight text-black sm:text-5xl">
          Three steps to a live walkthrough
        </h2>

        {/* ── Steps row ─────────────────────────────────────────── */}
        {/*
         * divide-x draws a 1px border on the left side of every child
         * except the first, giving us the two vertical dividers between
         * steps at md+ breakpoints without any extra markup.
         * On mobile the flex direction flips to column so divide-x
         * produces no visible borders (they're 0-height in column flow).
         */}
        <div className="mt-16 flex flex-col gap-12 md:flex-row md:gap-0 md:divide-x md:divide-[#d2d2d7]">
          {STEPS.map((step, i) => (
            <div
              key={step.number}
              className={`flex-1 ${COL_PADDING[i]}`}
            >
              {/* Large decorative step number */}
              <p
                className="text-7xl font-bold leading-none tracking-tight text-[#d2d2d7]"
                aria-hidden="true"   // purely decorative; title conveys order
              >
                {step.number}
              </p>

              {/* Step title */}
              <h3 className="mt-5 text-xl font-bold tracking-tight text-black">
                {step.title}
              </h3>

              {/* Step description */}
              <p className="mt-3 text-base leading-relaxed text-[#6e6e73]">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
