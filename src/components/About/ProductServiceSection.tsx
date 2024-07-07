import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import ScheduleDemoButton from "../Common/ScheduleDemoButton";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const ProductServiceSection = () => {
  const List = ({ text, icon = checkIcon }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary shrink-0">
        {icon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="360° AI Model Optimization Services for Edge Devices" 
                paragraph="Our comprehensive services are designed to optimize and streamline your AI model development, making it easier for engineering teams to manage and enhance AI on the Edge."
                mb="44px"
              />

              <div className="mb-12 max-w-[570px] lg:mb-0" data-wow-delay=".15s">
                <div className="mx-[-12px]">
                  <div className="w-full px-3 lg:w-full">
                    <List text="Model Selection and Optimization Suite for Target Chips" />
                    <List text="Multi-Device Model Management Hub" />
                    <List text="AI Expert Consultant and Support" />
                  </div>
                </div>
              </div>
              <div className="flex justify-center md:justify-start flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-8">
                  <ScheduleDemoButton />
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-[25/24] max-w-[700px] lg:mr-0">
                <div className="relative w-full h-0" style={{ paddingBottom: '96%' }}>
                  <Image
                    src="/images/about/tinymlhub-3.png"
                    alt="Ample AI Tiny AI Hub for AI Model Optimization"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "contain" }}
                    className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                    priority
                  />
                  <Image
                    src="/images/about/tinymlhub-3.png"
                    alt="Ample AI Tiny AI Hub for AI Model Optimization"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "contain" }}
                    className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                    priority
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

  );
};

export default ProductServiceSection;

