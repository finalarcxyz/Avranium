import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const WA_HREF =
  'https://wa.me/919337925654?text=Hi%2C%20I%27m%20interested%20in%20a%203D%20walkthrough%20for%20my%20project'

const CONTACT_ITEMS = [
  {
    icon: MapPin,
    label: 'Above Indusind Bank, 3rd Floor, Jagamara Road, Near Airport, Bhubaneswar, Odisha 751030, India',
    href: null,
  },
  {
    icon: Phone,
    label: '+91 93379 25654',
    href: 'tel:+919337925654',
  },
  {
    icon: Mail,
    label: 'avranium@gmail.com',
    href: 'mailto:avranium@gmail.com',
  },
]

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">

          {/* ── Header ────────────────────────────────────────────── */}
          <h1 className="text-center text-4xl font-bold tracking-tight text-black sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-4 text-center text-lg text-[#6e6e73]">
            We typically reply within 2 hours on WhatsApp.
          </p>

          {/* ── Two-column layout ─────────────────────────────────── */}
          <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2">

            {/* ── Left: contact details ───────────────────────────── */}
            <div className="space-y-6">
              {CONTACT_ITEMS.map(({ icon: Icon, label, href }) => (
                <div key={label} className="flex items-start gap-3">
                  <Icon size={18} className="mt-0.5 shrink-0 text-[#6e6e73]" />
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-sm leading-relaxed text-black transition-colors duration-200 hover:text-[#6e6e73]"
                    >
                      {label}
                    </a>
                  ) : (
                    <p className="text-sm leading-relaxed text-[#6e6e73]">{label}</p>
                  )}
                </div>
              ))}

              {/* LinkedIn — inline SVG */}
              <div className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="mt-0.5 shrink-0 text-[#6e6e73]">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
                <a
                  href="https://www.linkedin.com/company/avranium/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm leading-relaxed text-black transition-colors duration-200 hover:text-[#6e6e73]"
                >
                  linkedin.com/company/avranium
                </a>
              </div>

              {/* Instagram — inline SVG */}
              <div className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-[#6e6e73]">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
                <a
                  href="https://www.instagram.com/avranium/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm leading-relaxed text-black transition-colors duration-200 hover:text-[#6e6e73]"
                >
                  @avranium
                </a>
              </div>
            </div>

            {/* ── Right: WhatsApp CTA card ─────────────────────────── */}
            <div className="rounded-2xl bg-black p-8 text-center">
              <MessageCircle size={32} className="mx-auto text-white" />
              <h2 className="mt-4 text-2xl font-bold text-white">
                Start on WhatsApp
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                Tell us about your project and we will get back to you with a quote.
              </p>
              <a
                href={WA_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-full bg-white px-8 py-3 text-sm font-medium text-black transition-colors duration-200 hover:bg-gray-100"
              >
                Open WhatsApp
              </a>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
