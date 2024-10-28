import About from "@/components/About";
import Contact from "@/components/Contact";
import Feed from "@/components/Feed";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Stat from "@/components/Stat";
import ScrollUpButton from "@/components/scrollUpButton";


import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Stat />
      <Services />
      <Projects />
      <Feed />
      <Contact />
      <ScrollUpButton/>
      <Footer/>
    </>
  );
}
