import SectionTitle from '../Common/SectionTitle'; // Adjust path as per your project structure
import Image from 'next/image'; // Import Image component from Next.js
import HorizontalLine from '../Common/HorizontalLine';

const AboutSectionApproach = () => {

  return (
    <section className="py-8 md:py-10 lg:py-14">
      <div className="container">
        <div className="mb-4">
          <p className="text-left text-base font-medium text-body-color sm:text-medium">
            Rethinking Traditional AI Model Optimization
          </p>
        </div>
        <div className="mb-8">
          <HorizontalLine/>
        </div>
        <SectionTitle
          title="About Our Approach 🚀" 
          paragraph="The Ample AI approach reverses the traditional compression process by focusing on the desired outcome on the edge device from the beginning. This enables the use of larger, high-performance models upfront, which are then compressed to maximize edge device resource utilization."
          mb="20px"
        />
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="relative w-full h-64">
                <Image
                  src="/images/about/ampleai-timeline-nobg.png"
                  alt="Detailed explanation for AI Model Optimization Process by Ample AI"
                  fill
                  objectFit="contain"
                  className="rounded"
                />
              </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionApproach;
