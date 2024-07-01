import Breadcrumb from '@/components/Common/Breadcrumb';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Ample AI: Edge AI References",
  description: "Resources used to create the website.",
  keywords: "icons, images"
};

export default function Attributions() {

  return (
    <>
      <Breadcrumb
        pageName="Attributions"
        description="The below sources were used to create this website."
      />

      <section className="pb-[60px] pt-[30px]">
        <div className="container">
          <div className="relative z-10 w-full mb-6 overflow-hidden rounded-md bg-primary bg-opacity-10 p-6 md:p-7 lg:p-6 xl:p-7">
            <h2 className="text-lg font-semibold text-body-color mb-4">Icons and Photos</h2>
            <p className="text-left text-base font-medium italic text-body-color mb-2">
              Icons:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>Battery icons created by Freepik - <a href="https://www.flaticon.com/free-icons/battery" title="battery icons">Flaticon</a></li>
              <li>Artificial intelligence icons created by shin_icons - <a href="https://www.flaticon.com/free-icons/artificial-intelligence" title="artificial intelligence icons">Flaticon</a></li>
              <li>Time icons created by Freepik - <a href="https://www.flaticon.com/free-icons/time" title="time icons">Flaticon</a></li>
              <li>Energy icons created by Pixel perfect - <a href="https://www.flaticon.com/free-icons/energy" title="energy icons">Flaticon</a></li>
            </ul>
            <p className="text-left text-base font-medium italic text-body-color mb-2">
              Photos:
            </p>
            <ul className="list-disc pl-5">
              <li>Photo by ThisIsEngineering from <a href="https://www.pexels.com/photo/engineers-developing-robotic-arm-3913031/">Pexels</a></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
