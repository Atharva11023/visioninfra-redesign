import Loader       from '@/components/ui/Loader'
import Cursor       from '@/components/ui/Cursor'
import ScrollBar    from '@/components/ui/ScrollBar'
import Navbar       from '@/components/layout/Navbar'
import Hero         from '@/components/sections/Hero'
import LogoStrip    from '@/components/sections/LogoStrip'
import About        from '@/components/sections/About'
import Services     from '@/components/sections/Services'
import Stats        from '@/components/sections/Stats'
import Projects     from '@/components/sections/Projects'
import Timeline     from '@/components/sections/Timeline'
import WhyChooseUs  from '@/components/sections/WhyChooseUs'
import Process      from '@/components/sections/Process'
import Testimonials from '@/components/sections/Testimonials'
import Team         from '@/components/sections/Team'
import FAQ          from '@/components/sections/FAQ'
import Contact      from '@/components/sections/Contact'
import Footer       from '@/components/layout/Footer'

export default function Home() {
  return (
    <>
      <Cursor />
      <ScrollBar />
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <LogoStrip />
        <About />
        <Services />
        <Stats />
        <Projects />
        <Timeline />
        <WhyChooseUs />
        <Process />
        <Testimonials />
        <Team />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
