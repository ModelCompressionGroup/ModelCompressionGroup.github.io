import ProductServiceSection from "@/components/About/ProductServiceSection";
import BlogSection from "@/components/Blog/BlogSection";
import Contact from "@/components/Contact";
import ProblemSection from "@/components/Features";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import AnimatedCounter from "@/components/Counter/AnimatedCounter";
import { Metadata } from "next";
import AboutSectionRoi from "@/components/About/AboutSectionRoi";

export const metadata: Metadata = {
  title: "AmpleAI | Best Platform for AI Model Optimization",
  description: "AmpleAI offers industry-leading AI model optimization for real-time inference, computational efficiency, and model performance. Enhance your tiny AI models for edge devices.",
  keywords: "tiny ai, embedded ai, ai model optimization, ai model compression, real-time inference",
};

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <ProductServiceSection />
      <AnimatedCounter />
      <AboutSectionRoi/>
      <BlogSection />
      <Contact />
      <Brands />
    </>
  );
}
