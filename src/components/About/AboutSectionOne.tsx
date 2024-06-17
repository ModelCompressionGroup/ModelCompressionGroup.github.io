import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import MailerLiteButton from "../Common/MailerLiteContactButton";
import Popup from "../Common/Popup";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="360° Service for Scalable Edge AI Operations"
                paragraph="Our comprehensive services are designed to optimize and streamline your AI model deployment, making it easier for engineering teams to manage and enhance their edge AI capabilities."
                mb="44px"
              />

              <div className="mb-12 max-w-[570px] lg:mb-0" data-wow-delay=".15s">
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Empower Your Engineers" />
                    <List text="Focus on Innovation" />
                    <List text="50% time reduction" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Expert Support" />
                    <List text="Model Selection Suite" />
                    <List text="Model Compression Hub" />
                  </div>
                </div>
              </div>
              <div className="flex justify-start mt-4">
                <MailerLiteButton />
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-[25/24] max-w-[700px] lg:mr-0">
                <div className="relative w-full h-0" style={{ paddingBottom: '96%' }}>
                  <Image
                    src="/images/about/time-consumption-no-background.png"
                    alt="about-image"
                    fill
                    style={{ objectFit: "contain" }}
                    className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                  />
                  <Image
                    src="/images/about/time-consumption-no-background.png"
                    alt="about-image-dark"
                    fill
                    style={{ objectFit: "contain" }}
                    className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                  />
                </div>
                {/* Adjusted margin-top to reduce space */}
                <div className="mt-1 text-center">
                  <Popup
                    triggerText="Learn more"
                    title="About Our Approach"
                    imageSrc="/images/about/ampleai-timeline.png"
                    imageAlt="Detailed explanation image"
                  >
                    <p className="text-lg text-body-color">
                      The Ample AI approach reverses the traditional compression process by focusing on the desired outcome on the edge device from the beginning. This enables the use of larger, high-performance models upfront, which are then compressed to maximize edge device resource utilization.
                    </p>
                  </Popup>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

  );
};

export default AboutSectionOne;

