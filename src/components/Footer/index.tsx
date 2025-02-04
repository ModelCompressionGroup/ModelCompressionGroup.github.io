// components/Footer.tsx
import Image from "next/image";
import Link from "next/link";
import ContactInfoCard from "../Contact/ContactInfoCard";

const Footer = () => {
  return (
    <footer className="relative z-10 pt-16 dark:bg-gray-dark md:pt-20 lg:pt-24">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 md:w-1/2 lg:w-6/12 xl:w-5/12">
            <div className="mb-12 max-w-[360px] lg:mb-16">
              <Link href="/" className="mb-8 inline-block">
                  <Image
                    src="/images/logo/logo.webp"
                    alt="logo"
                    width={100} 
                    height={100}
                    className="w-auto h-6 dark:hidden"
                  />
                  <Image
                    src="/images/logo/logo.webp"
                    alt="logo"
                    width={100} // Adjust width
                    height={100} // Adjust height to match text
                    className="hidden w-auto h-6 dark:block" // Adjust height here
                  />
              </Link>
              <p className="mb-9 text-base leading-relaxed text-body-color dark:text-body-color-dark">
              AmpleAI excels in AI model optimization for real-time inference, enhancing computational efficiency and model performance. Our services are specifically designed for tiny AI in embedded systems and edge devices, optimizing for hardware constraints and battery efficiency.
              </p>
            </div>
          </div>

          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-6/12 xl:w-3/12">
            <div className="mb-12 lg:mb-16">
              <h2 className="mb-10 text-xl font-semibold text-black dark:text-white">
                Useful Links
              </h2>
              <ul>
                <li>
                  <Link
                    href="/blog"
                    className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    Use Cases
                  </Link>
                </li>
                <li>
                  <Link
                    href="/company/about"
                    className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms/attributions"
                    className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    Attributions & Sources
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms/privacy-policy"
                    className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-4/12">
            {/* Adjusted to take full width on larger screens */}
            <div className="mb-12 lg:mb-16">
              <ContactInfoCard/>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
        <div className="py-8">
          <p className="text-center text-base text-body-color dark:text-white">
            All rights reserved{" "}
            <a
              href="https://ampleai.io"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              AmpleAI
            </a>{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

