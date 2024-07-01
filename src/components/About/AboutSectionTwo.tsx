import Image from "next/image";
import NewTag from "../Common/NewTag";
import SectionTitle from "../Common/SectionTitle";
import ScheduleDemoButton from "../Common/ScheduleDemoButton";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
                title="Why Ample AI?"
                paragraph="Accelerate model development across edge device series, including trailing edge tech."
                center
        />
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2 text-center">
            <div className="flex justify-center lg:justify-start mb-2">
                <NewTag text="Try TinyML Hub" href="https://tinymlhub.com" />
            </div>
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/tinymlhub-3.png"
                alt="about image"
                fill
                style={{ objectFit: 'contain' }}
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/tinymlhub-3.png"
                alt="about image"
                fill
                style={{ objectFit: 'contain' }}
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Real-Time Inference
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Achieve instant data processing on edge devices.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Model Performance
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Maximize model performance under computing limits.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Battery Efficiency
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Optimize power consumption to extend battery life.
                </p>
              </div>
            </div>
            <div className="mt-8">
            <ScheduleDemoButton />
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
