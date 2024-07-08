'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import SectionTitle from '../Common/SectionTitle';

const Contact = () => {
  useEffect(() => {
    // Setup logic if needed
  }, []);

  return (
    <>
      <style jsx>{`
        .calendly-inline-widget > div {
          background: none !important;
          padding: 0 !important;
        }
        .widget-container {
          min-width: 320px;
          width: 100%;
          max-width: 600px;  // Restrict the maximum width of the container
          height: 700px;
          background-color: #fff;  // A light background for the container
          border-radius: 20px;  // Rounded corners
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);  // Shadow to create a 3D effect
          overflow: hidden;  // Ensures nothing spills outside the rounded corners
        }
      `}</style>
      <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Schedule a free demo!"
            paragraph="Get in touch with our experts for a free consultation and discover how AmpleAI can help you optimize AI models for your edge application."
            center
          />
          <div className="flex justify-center">
            <div className="widget-container">
              <div className="calendly-inline-widget"
                   data-url="https://calendly.com/wenbo-zhang-ampleai/30min?hide_gdpr_banner=1&background_color=fdfaf2&text_color=002d72&primary_color=002d72"
                   style={{ width: '100%', height: '100%', backgroundColor: 'transparent' }}>
                {/* Placeholder for Calendly widget */}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        async
      />
    </>
  );
};

export default Contact;
