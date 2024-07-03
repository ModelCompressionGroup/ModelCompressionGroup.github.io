'use client';

import { useEffect, useState, useRef } from 'react';
import CountUp from 'react-countup';
import SectionTitle from '../Common/SectionTitle'; // Adjust path as per your project structure
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
        threshold: 0.2, // Trigger when 20% of the section is visible
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
        <SectionTitle
          title="Your Tiny AI product will benefit from ..." 
          paragraph=""
          mb="20px"
        />
        <div className="-mx-4 flex flex-wrap items-center">
          {/* Block #1 */}
          <article className="w-full px-4 lg:w-1/3">
            <div className="w-14 h-14 flex justify-center items-center rotate-0 mb-6">
              <Image
                src="/images/icons/artificial-intelligence.png"
                alt="Artificial Intelligence Icon"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-2">
              <CountUp end={count1} duration={3} />x
            </h3>
            <h3 className="text-3xl inline-flex font-semibold bg-clip-text text-primary mb-2">
              Faster Inference
            </h3>
          </article>

          {/* Block #2 */}
          <article className="w-full px-4 lg:w-1/3">
            <div className="w-14 h-14 flex justify-center items-center rotate-0 mb-6">
              <Image
                src="/images/icons/lighting.png"
                alt="Lighting Efficiency Icon"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-2">
              <CountUp end={count2} duration={3} />x
            </h3>
            <h3 className="text-3xl inline-flex font-semibold bg-clip-text text-primary mb-2">
              Longer Battery Life
            </h3>
          </article>

          {/* Block #3 */}
          <article className="w-full px-4 lg:w-1/3">
            <div className="w-14 h-14 flex justify-center items-center rotate-0 mb-6">
              <Image
                src="/images/icons/clock.png"
                alt="Time Efficiency Icon"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-2">
              <CountUp end={count3} duration={3} />%
            </h3>
            <h3 className="text-3xl inline-flex font-semibold bg-clip-text text-primary mb-2">
              Faster Time To Market
            </h3>
          </article>
        </div>
      </div>
    </section>
  );
};

export default AnimatedCounter;
