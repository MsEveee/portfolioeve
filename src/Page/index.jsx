import Navbar from '../components/Navbar';
import About from '../components/About';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import ContactUs from '../components/ContactUs';
import Skills from '../components/Skills';
import Hero from '../components/Hero';

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="contact">
        <ContactUs />
      </div>
    </div>
  );
};

export default LandingPage;
