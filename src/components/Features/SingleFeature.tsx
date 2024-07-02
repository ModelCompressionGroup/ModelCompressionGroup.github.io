import Image from "next/image";
import { Feature } from "@/types/feature";

export interface Feature {
  id: number;
  icon: string; // Ensure this is a string
  title: string;
  paragraph: string;
}

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
          <Image src={icon} alt={title} width={40} height={40} />
        </div>
        <div className="flex flex-col justify-between h-full">
          <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            {title}
          </h3>
          <p className="text-base font-medium leading-relaxed text-body-color text-justify">
            {paragraph}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleFeature;
