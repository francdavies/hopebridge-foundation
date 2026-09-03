import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Hero from '../components/home/Hero'
import AboutPreview from '../components/home/AboutPreview'
import ProgramsPreview from '../components/home/ProgramsPreview'
import Impact from '../components/home/Impact'
import HowWeHelp from '../components/home/HowWeHelp'
import StoriesPreview from '../components/home/StoriesPreview'
import GalleryPreview from '../components/home/GalleryPreview'
import CallToAction from '../components/home/CallToAction'

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <Hero />
        <AboutPreview />
        <ProgramsPreview />
        <Impact />
        <HowWeHelp />
        <StoriesPreview />
        <GalleryPreview />
        <CallToAction />
      </main>

      <Footer />
    </div>
  )
}

export default Home