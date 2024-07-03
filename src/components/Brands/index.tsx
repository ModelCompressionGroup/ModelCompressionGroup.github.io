import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";
import HorizontalLine from "../Common/HorizontalLine";

const Brands = () => {
  return (
    <section className="pt-16">
      <div className="container">
        <div className="-mx-4">
          <div className="flex flex-wrap items-center justify-center">
            <p className="text-center text-lg mb-4">Built and trusted by alumni and fellows of</p>
          </div>
          <HorizontalLine />
          <div className="flex flex-wrap items-center justify-center py-4">
            {brandsData.map((brand) => (
              <SingleBrand key={brand.id} brand={brand} />
            ))}
          </div>
          <HorizontalLine />
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, imageLight, name } = brand;

  return (
    <div className="flex w-1/2 items-center justify-center px-3 py-[15px] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-10 w-full opacity-70 transition hover:opacity-100 dark:opacity-60 dark:hover:opacity-100"
        style={{ aspectRatio: "unset" }} // Ensure aspect ratio is unset to avoid conflicts
      >
        <div style={{ width: "100%", height: "100%" }}>
          <Image
            src={image}
            alt={name}
            fill
            style={{ objectFit: 'contain' }} // Adjust objectFit as needed (contain, cover, etc.)
            className="block"
          />
        </div>
      </a>
    </div>
  );
};
