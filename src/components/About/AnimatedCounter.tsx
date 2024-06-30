'use client';

import { useEffect, useState, useRef } from 'react';
import CountUp from 'react-countup';
import SectionTitle from '../Common/SectionTitle'; // Adjust path as per your project structure
import HorizontalLine from '../Common/HorizontalLine';
import Image from 'next/image'; // Import Image component from Next.js

const AnimatedCounterSection = () => {
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
        threshold: 0.5, // Trigger when 50% of the section is visible
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
    <section className="py-16 md:py-20 lg:py-28" ref={sectionRef}>
      <div className="container">
        <SectionTitle
          title=""
          paragraph="Your Embedded AI product could experience..."
          center
        />
        <HorizontalLine /> {/* Horizontal line above the section */}
        <div className="-mx-4 flex flex-wrap items-center">
          {/* Block #1 */}
          <article className="w-full px-4 lg:w-1/3">
            <div className="w-14 h-14 flex justify-center items-center rotate-3 mb-6">
              <div className="relative w-14 h-14 overflow-hidden">
                <Image
                  src="/images/icons/artificial-intelligence.png"
                  alt="Icon 1"
                  width={56}
                  height={56}
                  layout="fixed"
                  className="bg-transparent"
                />
              </div>
            </div>
            <h2 className="text-5xl font-extrabold mb-2">
              <CountUp end={count1} duration={3} />x
              <span className="inline-flex font-semibold bg-clip-text text-primary mb-2">
                Faster Inference
              </span>
            </h2>
            <p className="text-sm text-slate-500">
              Achieve quicker decision-making with reduced inference times using embedded AI.
            </p>
          </article>

          {/* Block #2 */}
          <article className="w-full px-4 lg:w-1/3">
            <div className="w-14 h-14 flex justify-center items-center -rotate-3 mb-6">
              <div className="relative w-14 h-14 overflow-hidden">
                <Image
                  src="/images/icons/lighting.png"
                  alt="Icon 2"
                  width={56}
                  height={56}
                  layout="fixed"
                  className="bg-transparent"
                />
              </div>
            </div>
            <h2 className="text-5xl font-extrabold mb-2">
              <CountUp end={count2} duration={3} />x
              <span className="inline-flex font-semibold bg-clip-text text-primary mb-2">
                Improved Energy Efficiency
              </span>
            </h2>
            <p className="text-sm text-slate-500">
              Optimize power consumption and extend battery life significantly with our edge AI solutions.
            </p>
          </article>

          {/* Block #3 */}
          <article className="w-full px-4 lg:w-1/3">
            <div className="w-14 h-14 flex justify-center items-center rotate-3 mb-6">
              <div className="relative w-14 h-14 overflow-hidden">
                <Image
                  src="/images/icons/clock.png"
                  alt="Icon 3"
                  width={56}
                  height={56}
                  layout="fixed"
                  className="bg-transparent"
                />
              </div>
            </div>
            <h2 className="text-5xl font-extrabold mb-2">
              <CountUp end={count3} duration={3} />%
              <span className="inline-flex font-semibold bg-clip-text text-primary mb-2">
                Time To Market
              </span>
            </h2>
            <p className="text-sm text-slate-500">
              Accelerate product launch timelines with efficient AI model optimization and deployment on edge devices.
            </p>
          </article>
        </div>
        <HorizontalLine /> {/* Horizontal line below the section */}
      </div>
    </section>
  );
};

export default AnimatedCounterSection;
