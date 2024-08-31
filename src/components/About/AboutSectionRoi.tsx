import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import HorizontalLine from "../Common/HorizontalLine";
import NewTag from "../Common/NewTag";
import ScheduleDemoButton from "../Common/ScheduleDemoButton";

const AboutSectionRoi = () => {
  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="mb-4">
          <p className="text-left text-base font-medium text-body-color sm:text-medium">
            Identify Risks Locally with Small Language Models
          </p>
        </div>
        <div className="mb-8">
          <HorizontalLine />
        </div>
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-start">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Enhance Risk Identification"
                paragraph="AmpleAI’s Small Language Models (SLMs) empower payment providers to identify and mitigate risks locally. Our cutting-edge models deliver real-time analysis, ensuring secure and efficient transaction processing."
                mb="44px"
              />
              <div className="mt-8 flex justify-center lg:justify-start">
                <ScheduleDemoButton />
              </div>
            </div>

            <div className="hidden lg:block lg:w-1/12"></div>

            <div className="w-full px-4 lg:w-5/12">
              <div className="max-w-[470px]">
                <div className="mb-9">
                  <div className="w-8 h-8 flex justify-center items-center rotate-3 mb-6 relative">
                    <Image
                      src="/images/icons/revenue.webp"
                      alt="Revenue Growth Icon"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectFit: 'contain' }}
                      priority
                    />
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Real-Time Risk Identification
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-medium sm:leading-relaxed">
                    AmpleAI’s SLMs analyze transactions instantly, detecting and flagging suspicious activities to prevent fraud before it impacts your business.
                  </p>
                </div>
                <div className="mb-9">
                  <div className="w-8 h-8 flex justify-center items-center rotate-3 mb-6 relative">
                    <Image
                      src="/images/icons/uptime.webp"
                      alt="Operational Efficiency Icon"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectFit: 'contain' }}
                      priority
                    />
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Operational Efficiency
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-medium sm:leading-relaxed">
                    Our optimized SLMs ensure rapid processing of high-volume transactions, minimizing delays and maintaining seamless operations without compromising security.
                  </p>
                </div>
                <div className="mb-1">
                  <div className="w-8 h-8 flex justify-center items-center rotate-3 mb-6 relative">
                    <Image
                      src="/images/icons/quality-control.webp"
                      alt="Scalability Icon"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectFit: 'contain' }}
                      priority
                    />
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Scalability and Flexibility
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-medium sm:leading-relaxed">
                    AmpleAI’s scalable SLMs adapt to your growing transaction volumes, ensuring consistent performance and robust risk management as your business expands.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionRoi;
