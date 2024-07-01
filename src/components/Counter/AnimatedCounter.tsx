'use client';

import { useEffect, useState, useRef } from 'react';
import CountUp from 'react-countup';
import SectionTitle from '../Common/SectionTitle'; // Adjust path as per your project structure
import HorizontalLine from '../Common/HorizontalLine';
import Image from 'next/image'; // Import Image component from Next.js

const AnimatedCounter = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  // Ref for the section to observe
  const sectionRef = useRef(null);

  // Function to simulate fetching data (replace with actual API calls)
  const fetchData = () => {
    setTimeout(() => {
      setCount1(18);
      setCount2(4);
      setCount3(50);
    }, 1000); // Adjust timing as needed
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start fetching data when section is in view
            fetchData();
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 50% of the section is visible
      }
    );

    // Start observing the section
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup observer on unmount
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="py-8 md:py-10 lg:py-14" ref={sectionRef}>
      <div className="container">
        <p className="text-base !leading-relaxed text-body-color md:text-lg mb-10">
          Your Embedded AI solution could exeperience...
        </p>
        <div className="-mx-4 flex flex-wrap items-center">
          {/* Block #1 */}
          <article className="w-full px-4 lg:w-1/3">
            <div className="w-14 h-14 flex justify-center items-center rotate-3 mb-6">
            <Image
              src="/images/icons/artificial-intelligence.png"
              alt="Icon 1"
              fill // Use fill to allow the image to adapt to the parent container size
              style={{ objectFit: 'contain' }} // Object fit contain to ensure the image is scaled properly within the bounds
            />
            </div>
            <h2 className="text-5xl font-extrabold mb-2">
              <CountUp end={count1} duration={3} />x
              <span className="inline-flex font-semibold bg-clip-text text-primary mb-2">
                Faster Inference
              </span>
            </h2>
          </article>

          {/* Block #2 */}
          <article className="w-full px-4 lg:w-1/3">
            <div className="w-14 h-14 flex justify-center items-center -rotate-3 mb-6">
              <Image
                src="/images/icons/lighting.png"
                alt="Icon 2"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            <h2 className="text-5xl font-extrabold mb-2">
              <CountUp end={count2} duration={3} />x
              <span className="inline-flex font-semibold bg-clip-text text-primary mb-2">
                Longer Battery Life
              </span>
            </h2>
          </article>

          {/* Block #3 */}
          <article className="w-full px-4 lg:w-1/3">
            <div className="w-14 h-14 flex justify-center items-center rotate-3 mb-6">
              <Image
                src="/images/icons/clock.png"
                alt="Icon 3"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            <h2 className="text-5xl font-extrabold mb-2">
              <CountUp end={count3} duration={3} />%
              <span className="inline-flex font-semibold bg-clip-text text-primary mb-2">
                Faster Time To Market
              </span>
            </h2>
          </article>
        </div>
      </div>
    </section>
  );
};

export default AnimatedCounter;
