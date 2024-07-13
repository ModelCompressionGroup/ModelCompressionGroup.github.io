import { Metadata } from 'next';
import Brands from '@/components/Brands';
import ScheduleDemoButton from '@/components/Common/ScheduleDemoButton';

export const metadata: Metadata = {
  title: "About AmpleAI: Revolutionizing Edge AI",
  description: "Learn how AmpleAI optimizes AI models for enhanced performance on edge devices, with a focus on tiny AI, real-time inference, and computational efficiency.",
  keywords: "AI model optimization, tiny AI, embedded AI, AI model compression, real-time inference, model performance, computational efficiency, embedded systems, edge devices, hardware constraints, battery efficiency, computing limits"
};

const AboutUs = () => {
  return (
    <>
      <section
        id="about-us"
        className="relative overflow-hidden pb-4 pt-[120px] bg-gray md:pb-8 md:pt-[150px] xl:pb-16 xl:pt-[180px] 2xl:pb-20 2xl:pt-[210px]"
      >
        <div className="container mx-auto flex flex-wrap items-center justify-center">
          <div className="w-full">
            <div className="relative z-10 text-left">
              <h1 style={{ lineHeight: '130%' }} className="text-5xl font-bold leading-tight text-black mb-10">
                We are engineers, programmers, robots, and product visionaries coming together to <span className="text-primary">change the way we distribute intelligence to the edge.</span>
              </h1>
              <h2 className="text-xl font-semibold text-black mb-4">
                Our Story
              </h2>
              <p className="text-sm leading-relaxed text-body-color sm:text-lg md:text-xl mb-8">
                Our journey at AmpleAI began in the intricate fields of Automotive IoT, Robotics, and Physics, where we initially tackled the challenges of AI model optimization through manual, iterative processes. Faced with the tedious nature of this work, we engaged with hundreds of engineers across industries, discovering that the inefficiencies in edge AI development were a widespread concern. This insight led to the founding of AmpleAI, with a dedicated purpose to streamline and enhance the AI development cycle. Today, we empower engineers, companies, and even robots to deliver more intelligent, user-friendly products at a significantly faster pace, revolutionizing how intelligent devices are brought to the edge.
              </p>
              <div className="flex justify-center space-y-4">
                <ScheduleDemoButton/>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Brands />
    </>
  );
};

export default AboutUs;

