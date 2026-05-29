/* Server Component */

import Image from 'next/image'

type Person = {
  image: string
  objectPosition: string
  name: string
  role: string
  bio: string
  linkedinHref: string
}

const TEAM: Person[] = [
  {
    image: '/images/rajaram.jpeg',
    objectPosition: 'center top',
    name: 'Rajaram Swain',
    role: 'Growth & GTM',
    bio: 'From Web3 growth to immersive real estate experiences, Rajaram bridges the gap between great technical work and the clients who need it.',
    linkedinHref: 'https://linkedin.com/in/rajaram-swain',
  },
  {
    image: '/images/Nakul.jpeg',
    objectPosition: 'center top',
    name: 'Nakul Saxena',
    role: 'Technical Founder',
    bio: 'Nakul brings game optimisation expertise into architectural visualisation, the rare skill that makes a 40 million polygon building run smoothly on any browser or VR headset.',
    linkedinHref: 'https://www.linkedin.com/in/nakul-saxena/',
  },
]

export default function About() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">

        {/* ── Section label ─────────────────────────────────────── */}
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#6e6e73]">
          Who We Are
        </p>

        {/* ── Headline ──────────────────────────────────────────── */}
        <h2 className="mx-auto mt-4 max-w-2xl text-center text-4xl font-bold tracking-tight text-black sm:text-5xl">
          Built by people who understand both sides
        </h2>

        {/* ── Team cards ────────────────────────────────────────── */}
        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
          {TEAM.map((person) => (
            <article
              key={person.name}
              className="flex flex-col items-center rounded-2xl bg-[#f5f5f7] p-8 text-center"
            >
              {/* Avatar */}
              <Image
                src={person.image}
                alt={person.name}
                width={160}
                height={160}
                className="mx-auto h-40 w-40 rounded-full object-cover"
                style={{ objectPosition: person.objectPosition }}
                unoptimized
              />

              {/* Name */}
              <h3 className="mt-5 text-lg font-bold tracking-tight text-black">
                {person.name}
              </h3>

              {/* Role */}
              <p className="mt-1 text-sm font-medium text-[#6e6e73]">
                {person.role}
              </p>

              {/* Bio */}
              <p className="mt-4 text-sm leading-relaxed text-[#6e6e73]">
                {person.bio}
              </p>

              {/* LinkedIn button */}
              <a
                href={person.linkedinHref}
                target={person.linkedinHref === '#' ? undefined : '_blank'}
                rel={person.linkedinHref === '#' ? undefined : 'noopener noreferrer'}
                className="mt-6 rounded-full border border-black px-5 py-2 text-sm font-medium text-black transition-colors duration-200 hover:bg-black hover:text-white"
              >
                LinkedIn →
              </a>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
