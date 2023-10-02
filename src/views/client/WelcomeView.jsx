import React from 'react'
import Header from "../../components/header/Header";
import Home from "../../components/home/Home";
import About from "../../components/about/About";
import Skills from "../../components/skills/Skills";
import Services from "../../components/services/Services";
import Testimonial from "../../components/testimonials/Testimonial";
import Contact from '../../components/contact/Contact';
import Footer from '../../components/footer/Footer';
import ScrollUp from '../../components/scrollup/ScrollUp';

function WelcomeView() {
  return (
    <div>
    <div className="">
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Testimonial/>
        <Contact/>
      </main>
      <Footer/>
      <ScrollUp/>
    </div>
  </div>
  )
}

export default WelcomeView