import Image from "next/image";
import Script from "next/script";

const ContactInfoCard = () => {
  return (
    <div className="relative z-10 rounded-sm bg-transparent p-8 sm:p-11 lg:p-8 xl:p-11">
      <div>
        <ul className="mt-4">
            <li className="flex items-center mb-4">
                <div className="w-8 h-8 flex justify-center items-center relative">
                    <Image
                        src="/images/icons/email.webp"
                        alt="Email Icon"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{ objectFit: 'contain' }}
                        priority
                    />
                </div>
                <a href="mailto:info@ampleai.io" className="text-base text-sm ml-4">
                    <small className="block">Email</small>
                    <strong>info@ampleai.io</strong>
                </a>
            </li>
            <li className="flex items-center mb-4">
                <div className="w-8 h-8 flex justify-center items-center relative">
                    <Image
                        src="/images/icons/placeholder.webp"
                        alt="Location Icon"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{ objectFit: 'contain' }}
                        priority
                    />
                </div>
                <a className="text-base text-sm ml-4">
                    <small className="block">Location</small>
                    <strong>San Francisco, CA</strong>
                </a>
            </li>
            <li className="flex items-center mb-4">
                <div className="w-8 h-8 flex justify-center items-center relative">
                    <Image
                        src="/images/icons/business.webp"
                        alt="Revenue Growth Icon"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{ objectFit: 'contain' }}
                        priority
                    />
                </div>
                <a href="https://www.linkedin.com/groups/14464575/" className="text-base text-sm ml-4">
                    <small className="block">LinkedIn Community</small>
                    <strong>TinyML Hub</strong>
                </a>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactInfoCard;
