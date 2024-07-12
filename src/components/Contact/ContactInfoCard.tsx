import Image from "next/image";

const ContactInfoCard = () => {
  return (
    <div className="relative z-10 rounded-sm bg-white p-8 shadow-three dark:bg-gray-dark sm:p-11 lg:p-8 xl:p-11">
      <h3 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white">
        More Info
      </h3>
      <p className="mb-11 border-b border-body-color border-opacity-25 pb-11 text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-25">
        Join the TinyML Hub Community or reach out if you have any questions.
      </p>
      <div className="mt-12">
        <ul className="mt-4">
            <li className="flex items-center mb-4">
                <div className="w-8 h-8 flex justify-center items-center relative">
                    <Image
                        src="/images/icons/email.png"
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
                        src="/images/icons/placeholder.png"
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
                        src="/images/icons/business.png"
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
