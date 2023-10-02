import React from 'react'
import Header from "../../components/header/Header";
import Home from "../../components/home/Home";
import About from "../../components/about/About";
import Skills from "../../components/skills/Skills";
import Services from "../../components/services/Services";
import Testimonial from "../../components/testimonials/Testimonial";
import Contact from '../../components/contact/Contact';
import Footer from '../../components/footer/Footer';

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
        <Footer/>
      </main>
    </div>
  </div>
  )
}

export default WelcomeView