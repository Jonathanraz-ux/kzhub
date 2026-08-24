import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import VideoShowcase from "@/components/VideoShowcase";
import Services from "@/components/Services";
import WhyMadagascar from "@/components/WhyMadagascar";
import Portfolio from "@/components/Portfolio";
import WhyChoose from "@/components/WhyChoose";
import Responsible from "@/components/Responsible";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <VideoShowcase />
      <Services />
      <WhyMadagascar />
      <Portfolio />
      <WhyChoose />
      <Responsible />
      <Process />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingCTA />
      <BackToTop />
    </>
  );
}
