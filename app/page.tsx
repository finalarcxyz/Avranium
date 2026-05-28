import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ProjectTypes from '@/components/ProjectTypes'
import ValueProps from '@/components/ValueProps'
import BeforeAfter from '@/components/BeforeAfter'
import Comparison from '@/components/Comparison'
import HowItWorks from '@/components/HowItWorks'
import OurWork from '@/components/OurWork'
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
        <OurWork />
        <BeforeAfter />
        <Comparison />
        <HowItWorks />
        <Pricing />
        <About />
      </main>
      <Footer />
    </>
  )
}
