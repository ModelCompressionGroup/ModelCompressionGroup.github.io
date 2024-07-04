import NewTag from "../Common/NewTag";
import Image from "next/image";
import MailerLiteButton from "../Common/MailerLiteContactButton";
import ScheduleDemoButton from "../Common/ScheduleDemoButton";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative overflow-hidden pb-16 pt-[120px] bg-gray md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container mx-auto flex flex-wrap items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="relative z-10 text-center md:text-left">
              <h1 style={{ lineHeight: '130%' }} className="text-5xl font-bold leading-tight text-black sm:text-4xl md:text-5xl mb-6">
                <span className="text-primary">AI Model Optimization </span> for Edge Devices.
              </h1>
              <h2 className="mb-10 text-xl font-semibold text-black hidden md:block">
                Enhance Your Engineering Team’s Capabilities with Expert Tiny AI Model Optimization for Edge Devices.
              </h2>
              <p className="mb-6 text-sm leading-relaxed text-body-color sm:text-lg md:text-xl">
                We specialize in refining AI models for real-time inference, computational efficiency, and superior performance. Our services are tailored for IoT and embedded systems.
              </p>
              <div className="flex justify-center md:justify-start flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <MailerLiteButton />
                <ScheduleDemoButton />
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-300 opacity-40 blur-[80px]"></div>
            <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 hidden md:flex">
              <NewTag text="Edge AI in Manufacturing Case" href="/blog" />
            </div>
            <div className="relative w-full min-h-[350px] md:min-h-[450px] mt-8 md:mt-4"> 
              <Image
                src="/images/hero-image.png"
                alt="Hero image for Ample AI, a man training a robot with Tiny AI hub"
                fill
                style={{
                  objectFit: 'contain',
                }}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
