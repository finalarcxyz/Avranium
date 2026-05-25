/* ── Constants ───────────────────────────────────────────────────── */

const WA_HREF =
  'https://wa.me/919337925654?text=Hi%2C%20I\'m%20interested%20in%20a%203D%20walkthrough%20for%20my%20project'

/* ── Data ────────────────────────────────────────────────────────── */

const CARDS = [
  {
    label: 'RESIDENTIAL',
    price: 'Starts at ₹45,000',
    usd: '~$540 USD approx',
    description:
      'For apartments, villas, duplex, gated communities and townships.',
  },
  {
    label: 'COMMERCIAL',
    price: 'Starts at ₹1,00,000',
    usd: '~$1,200 USD approx',
    description:
      'For business parks, hotels, mixed-use and large-scale developments.',
  },
]

/* ── Component ───────────────────────────────────────────────────── */

export default function Pricing() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">

        {/* ── Header ────────────────────────────────────────────── */}
        <h2 className="text-center text-4xl font-bold text-black">
          Pricing
        </h2>
        <p className="mt-2 text-center text-lg text-[#6e6e73]">
          Exact quote depends on project type and scope. 50% advance, 50% on delivery.
        </p>

        {/* ── Cards ─────────────────────────────────────────────── */}
        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
          {CARDS.map((card) => (
            <div
              key={card.label}
              className="rounded-2xl border border-[#d2d2d7] bg-white p-8"
            >
              {/* Label */}
              <p className="text-xs font-semibold uppercase tracking-widest text-[#6e6e73]">
                {card.label}
              </p>

              {/* Price */}
              <p className="mt-2 text-3xl font-bold tracking-tight text-black">
                {card.price}
              </p>

              {/* USD */}
              <p className="mt-1 text-sm text-[#6e6e73]">
                {card.usd}
              </p>

              {/* Divider */}
              <div className="my-4 border-t border-[#d2d2d7]" />

              {/* Description */}
              <p className="text-sm text-[#6e6e73]">
                {card.description}
              </p>

            </div>
          ))}
        </div>

        {/* ── Single CTA ────────────────────────────────────────── */}
        <div className="mt-8 flex justify-center">
          <a
            href={WA_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-black px-8 py-4 text-sm font-medium text-white transition-colors duration-200 hover:bg-neutral-800 active:bg-neutral-700"
          >
            Get a Custom Quote on WhatsApp
          </a>
        </div>

        {/* ── Footnote ──────────────────────────────────────────── */}
        <p className="mt-8 text-center text-xs text-[#6e6e73]">
          * USD conversions approximate. International project pricing on request.
        </p>

      </div>
    </section>
  )
}
