import Link from "next/link";
import NewTag from "../Common/NewTag";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative overflow-hidden pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container mx-auto flex flex-wrap items-center">
          <div className="w-full md:w-1/2">
            <div className="relative z-10 text-center md:text-left">
              <h1 style={{ lineHeight: '130%' }} className="text-5xl font-bold leading-tight text-black dark:text-white sm:text-4xl md:text-5xl mb-6">
                Edge AI Deployment Challenges? <span className="text-primary dark:text-white">Simplify with Ample AI.</span>
              </h1>
              <p className="mb-6 text-base leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                Let your engineers innovate: Spend more time on high-value tasks and less on repetitive AI model iterations with our advanced machine learning tools.
              </p>
              <div className="flex justify-center md:justify-start flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <Link
                  href="/contact"
                  className="inline-block px-6 py-3 font-medium text-white bg-black border border-black rounded-full hover:bg-white hover:text-black"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 hidden md:block relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600 opacity-40 dark:opacity-20 blur-[80px]"></div>
            <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <NewTag text="Edge AI in Manufacturing Case" href="/blog" />
            </div>
            <div className="relative w-full min-h-[400px] mt-8"> 
              <Image
                src="/images/hero-image.png"
                alt="about-image"
                layout="fill"
                objectFit="contain"  // Adjusted to 'contain' to ensure no cropping of the image
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
