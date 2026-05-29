import { Check } from 'lucide-react'

/* ── Types ───────────────────────────────────────────────────────── */

type Row = {
  label: string
  video: string
  avranium: string
  avraniumCheck?: boolean
}

/* ── Data ────────────────────────────────────────────────────────── */

const ROWS: Row[] = [
  { label: 'Who controls it',     video: 'The director',             avranium: 'The buyer' },
  { label: 'What they see',       video: 'Fixed camera path',        avranium: 'Wherever they want to go' },
  { label: 'Time spent',          video: 'Length of video',          avranium: '15–20 minutes' },
  { label: 'Feel',                video: 'Passive, they watch',      avranium: 'Active, they explore',                  avraniumCheck: true },
  { label: 'Shareable',           video: 'Video file',               avranium: 'One link, opens instantly',             avraniumCheck: true },
  { label: 'Device',              video: 'Any',                      avranium: 'Phone, laptop, VR headset' },
  { label: 'Revisit',             video: 'Scrub through',            avranium: 'Walk through again anytime',            avraniumCheck: true },
  { label: 'Buyer trust',         video: 'Must imagine from one angle', avranium: 'Has already experienced the space',  avraniumCheck: true },
  { label: 'NRI / remote buyer',  video: 'Watches a video',          avranium: 'Walks through from anywhere',           avraniumCheck: true },
  { label: 'Post-delivery updates', video: 'New video needed',       avranium: 'Update the scene',                      avraniumCheck: true },
  { label: 'Outcome',             video: 'Buyer watches',            avranium: 'Buyer decides',                         avraniumCheck: true },
]

/* ── Component ───────────────────────────────────────────────────── */

export default function Comparison() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">

        {/* ── Section label ─────────────────────────────────────── */}
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#6e6e73]">
          WHY AVRANIUM
        </p>

        {/* ── Headline ──────────────────────────────────────────── */}
        <h2 className="mx-auto mt-4 max-w-3xl text-center text-4xl font-bold tracking-tight text-black sm:text-5xl">
          Not a 3D video. Something more useful.
        </h2>

        {/* ── Subheadline ───────────────────────────────────────── */}
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-[#6e6e73]">
          Your render impresses your architect. Our walkthrough sells to your buyer.
        </p>

        {/* ── Table ─────────────────────────────────────────────── */}
        {/*
         * overflow-x-auto lets the table scroll horizontally on narrow
         * viewports while min-w-[640px] keeps columns readable.
         *
         * border-separate + border-spacing-0 preserves border-radius on
         * individual cells (border-collapse would flatten them away).
         */}
        <div className="mt-16 overflow-x-auto">
          <table className="w-full min-w-[640px] border-separate border-spacing-0">

            {/* ── Column headers ──────────────────────────────── */}
            <thead>
              <tr>
                {/* Row-label column — no header text */}
                <th className="py-4 px-6" aria-label="Feature" />

                <th className="py-4 px-6 text-left text-sm font-normal text-[#6e6e73]">
                  3D Video Walkthrough
                </th>

                {/* Winner column header: black pill, rounded top */}
                <th className="rounded-t-xl bg-black px-6 py-4 text-left text-sm font-bold text-white">
                  Avranium Interactive Walkthrough
                </th>
              </tr>
            </thead>

            {/* ── Data rows ───────────────────────────────────── */}
            <tbody>
              {ROWS.map((row, i) => {
                const isLast  = i === ROWS.length - 1
                const rowBorder = isLast ? '' : ' border-b border-[#d2d2d7]'

                return (
                  <tr key={row.label}>

                    {/* Row label */}
                    <td className={`py-4 px-6 text-sm font-medium text-black${rowBorder}`}>
                      {row.label}
                    </td>

                    {/* Video walkthrough cell */}
                    <td className={`py-4 px-6 text-sm text-[#6e6e73]${rowBorder}`}>
                      {row.video}
                    </td>

                    {/* Avranium winner cell */}
                    <td
                      className={[
                        'bg-[#f5f5f7] px-6 py-4 text-sm font-bold text-black',
                        isLast ? 'rounded-b-xl' : 'border-b border-[#d2d2d7]',
                      ].join(' ')}
                    >
                      <span className="flex items-center gap-1.5">
                        {row.avraniumCheck && (
                          <Check
                            size={16}
                            strokeWidth={2.5}
                            className="shrink-0 text-black"
                            aria-hidden="true"
                          />
                        )}
                        {row.avranium}
                      </span>
                    </td>

                  </tr>
                )
              })}
            </tbody>

          </table>
        </div>

        {/* ── Closing line ──────────────────────────────────────────── */}
        <p className="mt-12 text-center text-xl font-semibold text-black">
          We make your project accessible to every buyer, on any device, from anywhere, before it exists.
        </p>

      </div>
    </section>
  )
}
