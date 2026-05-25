import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ProjectTypes from '@/components/ProjectTypes'
import ValueProps from '@/components/ValueProps'
import BeforeAfter from '@/components/BeforeAfter'
import HowItWorks from '@/components/HowItWorks'
import Pricing from '@/components/Pricing'
import About from '@/components/About'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProjectTypes />
        <ValueProps />
        <BeforeAfter />
        <HowItWorks />
        <Pricing />
        <About />
      </main>
      <Footer />
    </>
  )
}
