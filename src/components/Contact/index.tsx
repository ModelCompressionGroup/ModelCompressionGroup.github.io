import Script from "next/script";
import SectionTitle from "../Common/SectionTitle";

const Contact = () => {

  return (
    <>
      <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Schedule a free demo!"
            paragraph="Let’s get this conversation started. Tell us a bit about yourself, and we’ll get in touch as soon as we can."
            center
          />
          <div className="flex justify-center">
            <Script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer />
            <div className="elfsight-app-dde84adf-e68b-4589-be6d-2bd0fac2ea8f" data-elfsight-app-lazy></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
