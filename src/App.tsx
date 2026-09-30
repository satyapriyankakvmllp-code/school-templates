import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ScrollProgress from '@/components/ScrollProgress';
import Marquee from '@/components/Marquee';
import Features from '@/components/Features';
import About from '@/components/About';
import Programs from '@/components/Programs';
import DayCare from '@/components/DayCare';
import Activities from '@/components/Activities';
import Facilities from '@/components/Facilities';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Admissions from '@/components/Admissions';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cream-100">
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Features />
        <About />
        <Programs />
        <DayCare />
        <Activities />
        <Facilities />
        <Gallery />
        <Testimonials />
        <Admissions />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
