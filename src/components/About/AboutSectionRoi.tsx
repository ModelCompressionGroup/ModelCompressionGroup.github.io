import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import HorizontalLine from "../Common/HorizontalLine";
import ScheduleDemoButton from "../Common/ScheduleDemoButton";
import NewTag from "../Common/NewTag";

const AboutSectionRoi = () => {
  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="mb-4">
          <p className="text-left text-base font-medium text-body-color sm:text-medium">
            Return on Investment in Manufacturing
          </p>
        </div>
        <div className="mb-8">
          <HorizontalLine/>
        </div>
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-start">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Maximize Your ROI" 
                paragraph="You’ll save time and money with AmpleAI. Don’t take it from us; take it from Manufacturers Alliance Foundation. Their study showed 110% return on investment over three years."
                mb="44px"
              />
              <div className="mt-8 flex justify-center lg:justify-start">
                <NewTag text="Read the full report" href="https://www.manufacturersalliance.org/sites/default/files/2024-06/AI-CS24-Report-F_0.pdf"/>
              </div>
            </div>

            <div className="hidden lg:block lg:w-1/12"></div>

            <div className="w-full px-4 lg:w-5/12">
              <div className="max-w-[470px]">
                <div className="mb-9">
                  <div className="w-8 h-8 flex justify-center items-center rotate-3 mb-6 relative">
                    <Image
                      src="/images/icons/revenue.png"
                      alt="Revenue Growth Icon"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectFit: 'contain' }}
                      priority
                    />
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Revenue Growth
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-medium sm:leading-relaxed">
                    AmpleAI boosts revenue by enhancing production efficiency, reducing costs, and speeding up time-to-market for new products.
                  </p>
                </div>
                <div className="mb-9">
                  <div className="w-8 h-8 flex justify-center items-center rotate-3 mb-6 relative">
                    <Image
                      src="/images/icons/uptime.png"
                      alt="Revenue Growth Icon"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectFit: 'contain' }}
                      priority
                    />
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Improved Uptime
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-medium sm:leading-relaxed">
                    Tiny AI models from AmpleAI monitor manufacturing lines, reliably predicting downtime and improving operational uptime.
                  </p>
                </div>
                <div className="mb-1">
                  <div className="w-8 h-8 flex justify-center items-center rotate-3 mb-6 relative">
                    <Image
                      src="/images/icons/quality-control.png"
                      alt="Revenue Growth Icon"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectFit: 'contain' }}
                      priority
                    />
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Product Quality
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-medium sm:leading-relaxed">
                    AmpleAI ensures competitive and innovative products, enhancing quality and driving long-term profitability.
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
