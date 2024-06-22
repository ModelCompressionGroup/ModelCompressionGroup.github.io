// components/Footer.tsx
import Image from "next/image";
import Link from "next/link";
import NewsletterBox from "../Contact/NewsLatterBox";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-white pt-16 dark:bg-gray-dark md:pt-20 lg:pt-24">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 md:w-1/2 lg:w-6/12 xl:w-5/12">
            <div className="mb-12 max-w-[360px] lg:mb-16">
              <Link href="/" className="mb-8 inline-block">
                  <Image
                    src="/images/logo/logo.png"
                    alt="logo"
                    width={100} 
                    height={100}
                    className="w-auto h-6 dark:hidden"
                  />
                  <Image
                    src="/images/logo/logo.png"
                    alt="logo"
                    width={100} // Adjust width
                    height={100} // Adjust height to match text
                    className="hidden w-auto h-6 dark:block" // Adjust height here
                  />
              </Link>
              <p className="mb-9 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                We at Ample AI provide engineering teams with the tools and
                expertise to swiftly bring cutting-edge AI capabilities to every
                edge device, enhancing both speed and scalability.
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
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-4/12">
            {/* Adjusted to take full width on larger screens */}
            <div className="mb-12 lg:mb-16">
              <NewsletterBox />
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
              Ample AI
            </a>{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

