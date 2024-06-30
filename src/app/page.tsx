import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import BlogSection from "@/components/Blog/BlogSection";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ample AI: Transform Your Edge AI Deployments",
  description: "Ample AI offers machine learning tools for edge AI, enabling real-time quality control and automation. Reduce AI development cycle times by 50%.",
  keywords: "machine learning at the edge, machine learning tools, edge ai use cases, ai on the edge",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Brands />
      <Contact />
      <BlogSection />
    </>
  );
}
