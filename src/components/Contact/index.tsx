// components/Contact/Contact.tsx
import SectionTitle from "../Common/SectionTitle";
import MailerLiteButton from "../Common/MailerLiteContactButton"; // Ensure this component is correctly imported

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Ready to Transform Your Edge AI Operations?"
          paragraph="Get in touch with our experts for a free consultation and discover how Ample AI can revolutionize your AI deployment process."
          center
        />
        <div className="flex justify-center">
          <MailerLiteButton />
        </div>
      </div>
    </section>
  );
};

export default Contact;

