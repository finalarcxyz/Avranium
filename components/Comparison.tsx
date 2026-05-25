import { Check } from 'lucide-react'

/* ── Data ────────────────────────────────────────────────────────── */

type Row = {
  label: string
  render: string
  video: string
  avranium: string
  avraniumCheck: boolean
}

const ROWS: Row[] = [
  {
    label: 'Who controls it',
    render: 'The creator',
    video: 'The director',
    avranium: 'The buyer',
    avraniumCheck: false,
  },
  {
    label: 'What they see',
    render: 'One fixed angle',
    video: 'Fixed camera path',
    avranium: 'Wherever they want to go',
    avraniumCheck: false,
  },
  {
    label: 'Time spent',
    render: '3–5 seconds',
    video: 'Length of video',
    avranium: '15–20 minutes',
    avraniumCheck: false,
  },
  {
    label: 'Feel',
    render: 'Passive, they look',
    video: 'Passive, they watch',
    avranium: 'Active, they explore',
    avraniumCheck: true,
  },
  {
    label: 'Shareable',
    render: 'Image file',
    video: 'Video file',
    avranium: 'One link, opens instantly',
    avraniumCheck: true,
  },
  {
    label: 'Device',
    render: 'Any',
    video: 'Any',
    avranium: 'Phone, laptop, VR headset',
    avraniumCheck: false,
  },
  {
    label: 'Revisit',
    render: 'Look again',
    video: 'Scrub through',
    avranium: 'Walk through again anytime',
    avraniumCheck: true,
  },
  {
    label: 'Buyer trust',
    render: 'Must imagine the space',
    video: 'Must imagine from one angle',
    avranium: 'Has already experienced the space',
    avraniumCheck: true,
  },
  {
    label: 'NRI / remote buyer',
    render: 'Sees one image',
    video: 'Watches a video',
    avranium: 'Walks through from anywhere',
    avraniumCheck: true,
  },
  {
    label: 'Post-delivery updates',
    render: 'New render needed',
    video: 'New video needed',
    avranium: 'Update the scene',
    avraniumCheck: true,
  },
  {
    label: 'Outcome',
    render: 'Buyer imagines',
    video: 'Buyer watches',
    avranium: 'Buyer decides',
    avraniumCheck: true,
  },
]

/* ── Component ───────────────────────────────────────────────────── */

export default function Comparison() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">

        {/* ── Section header ──────────────────────────────────────── */}
        <h2 className="text-center text-4xl font-bold tracking-tight text-black sm:text-5xl">
          Your render impresses your architect. Our walkthrough sells to your buyer.
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-[#6e6e73]">
          We push visual quality as far as real-time performance allows. Sharp
          where buyers look, fast everywhere else. Accessible on any device,
          from anywhere, before the building exists.
        </p>

        {/* ── Table ───────────────────────────────────────────────── */}
        <div className="mt-16 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse">

            {/* ── Column headers ───────────────────────────────── */}
            <thead>
              <tr>
                {/* Empty first header */}
                <th className="py-4 px-6 text-left" />

                {/* Static 3D Render */}
                <th className="py-4 px-6 text-left text-sm font-normal text-[#6e6e73]">
                  Static 3D Render
                </th>

                {/* 3D Video Walkthrough */}
                <th className="py-4 px-6 text-left text-sm font-normal text-[#6e6e73]">
                  3D Video Walkthrough
                </th>

                {/* Avranium — winner column */}
                <th className="rounded-t-xl bg-black py-4 px-6 text-left text-sm font-bold text-white">
                  Avranium Interactive Walkthrough
                </th>
              </tr>
            </thead>

            {/* ── Rows ─────────────────────────────────────────── */}
            <tbody>
              {ROWS.map((row, i) => {
                const isLast = i === ROWS.length - 1
                const borderClass = isLast ? '' : 'border-b border-[#d2d2d7]'

                return (
                  <tr key={row.label}>
                    {/* Row label */}
                    <td
                      className={`py-4 px-6 text-sm font-medium text-black ${borderClass}`}
                    >
                      {row.label}
                    </td>

                    {/* Static render cell */}
                    <td
                      className={`py-4 px-6 text-sm text-[#6e6e73] ${borderClass}`}
                    >
                      {row.render}
                    </td>

                    {/* Video walkthrough cell */}
                    <td
                      className={`py-4 px-6 text-sm text-[#6e6e73] ${borderClass}`}
                    >
                      {row.video}
                    </td>

                    {/* Avranium cell */}
                    <td
                      className={`bg-[#f5f5f7] py-4 px-6 text-sm font-bold text-black ${borderClass}`}
                    >
                      {row.avraniumCheck ? (
                        <span className="flex items-center gap-2">
                          <Check size={16} className="shrink-0 text-black" />
                          {row.avranium}
                        </span>
                      ) : (
                        row.avranium
                      )}
                    </td>
                  </tr>
                )
              })}
            </tbody>

          </table>
        </div>

      </div>
    </section>
  )
}
