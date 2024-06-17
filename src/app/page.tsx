import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import BlogSection from "@/components/Blog/BlogSection";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ample AI: Streamline your Edge AI deployments.",
  description: "Ample AI provides cutting-edge AI deployment tools for manufacturing and industrial IoT, enabling real-time quality control, warehouse automation, and more. We empower your engineering teams to reduce AI innovation cycle times by 50%.",
  keywords: "TinyML, Edge Device, engineering leaders,model compression, Edge Computing, AI solutions, manufacturing technology, industrial IoT, real-time quality control, warehouse automation, engineering AI, edge AI, engineering leaders, technology for manufacturing",
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
