"use client";

import Hero from "./components/Hero";
import Contact from "./components/Contact";
import About from "./components/About";
import AOS from "aos"
import "aos/dist/aos.css";
import {useEffect} from "react";

export default function Home() {
  useEffect(()=>{
    AOS.init({
      easing: "ease-out-back",
      duration: 1200,
      delay: 100,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    });
    AOS.refresh();
  }, []);
  return (
    <div>
      <Hero/>
      <Contact/>
      <About/>
    </div>
  )}
  