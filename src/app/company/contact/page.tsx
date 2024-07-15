import Breadcrumb from '@/components/Common/Breadcrumb';
import { Metadata } from 'next';
import Script from 'next/script';
import ContactInfoCard from '@/components/Contact/ContactInfoCard';

export const metadata: Metadata = {
  title: "AmpleAI: Schedule a Free Demo Now!",
  description: "Discover how AmpleAI empowers engineering teams with edge AI solutions. Schedule a Free Demo Now!",
  keywords: "edge artificial intelligence, edge ai use cases, machine learning at the edge, edge ai examples"
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us Now!"
        description="Let’s get this conversation started. Tell us a bit about yourself, and we’ll get in touch as soon as we can."
      />

      <section className="pb-[60px] pt-[30px]">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row w-full">
            <div className="md:flex-1 md:w-2/3 p-4">
              <Script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer />
              <div className="elfsight-app-dde84adf-e68b-4589-be6d-2bd0fac2ea8f" data-elfsight-app-lazy></div>
            </div>
            <div className="md:w-1/3 p-4">
              <ContactInfoCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
