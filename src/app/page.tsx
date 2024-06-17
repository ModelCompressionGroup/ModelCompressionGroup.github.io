import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import BlogSection from "@/components/Blog/BlogSection";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ample AI: Optimized AI Solutions for Manufacturing Technologies",
  description: "Ample AI provides cutting-edge AI solutions for manufacturing and industrial IoT, enabling real-time quality control, warehouse automation, and more. Empower your engineering teams and streamline your processes with our innovative technology.",
  keywords: "AI solutions, manufacturing technology, industrial IoT, real-time quality control, warehouse automation, engineering AI, model compression, edge AI, engineering leaders, technology for manufacturing",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <AboutSectionOne />
      <AboutSectionTwo />
      <BlogSection />
      <Contact />
    </>
  );
}
