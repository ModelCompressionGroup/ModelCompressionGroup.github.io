import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import BlogSection from "@/components/Blog/BlogSection";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import AnimatedCounter from "@/components/Counter/AnimatedCounter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AmpleAI | Best Platform for AI Model Optimization",
  description: "AmpleAI offers industry-leading AI model optimization for real-time inference, computational efficiency, and model performance. Enhance your tiny AI models for edge devices.",
  keywords: "tiny ai, embedded ai, ai model optimization, ai model compression, real-time inference",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <AboutSectionOne />
      <AboutSectionTwo />
      <AnimatedCounter />
      <Brands />
      <BlogSection />
      <Contact />
    </>
  );
}
