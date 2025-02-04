import Breadcrumb from '@/components/Common/Breadcrumb';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AmpleAI: Edge AI References",
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
              <li>Revenue icons created by Uniconlabs - <a href="https://www.flaticon.com/free-icons/revenue" title="Revenue icons">Flaticon</a></li>
              <li>Uptime icons created by Pixelmeetup - <a href="https://www.flaticon.com/free-icons/uptime" title="uptime icons">Flaticon</a></li>
              <li>Quality control icons created by Freepik - <a href="https://www.flaticon.com/free-icons/quality-control" title="quality control icons">Flaticon</a></li>
              <li>Manual icons created by LAFS - <a href="https://www.flaticon.com/free-icons/manual" title="manual icons">Flaticon</a></li>
              <li>Unplanned icons created by VectorPortal - <a href="https://www.flaticon.com/free-icons/unplanned" title="unplanned icons">Flaticon</a></li>
              <li>Constraint icons created by logisstudio - <a href="https://www.flaticon.com/free-icons/constraint" title="constraint icons">Flaticon</a></li>
              <li>Location icons created by Freepik - <a href="https://www.flaticon.com/free-icons/location" title="location icons">Flaticon</a></li>
              <li>Email icons created by Freepik - <a href="https://www.flaticon.com/free-icons/email" title="email icons">Flaticon</a></li>
              <li>Linkedin icons created by fauzin idea - <a href="https://www.flaticon.com/free-icons/linkedin" title="linkedin icons">Flaticon</a></li>
            </ul>
            <p className="text-left text-base font-medium italic text-body-color mb-2">
              Photos:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>Photo by ThisIsEngineering from <a href="https://www.pexels.com/photo/engineers-developing-robotic-arm-3913031/">Pexels</a></li>
            </ul>
            <h2 className="text-lg font-semibold text-body-color mb-4">Fonts</h2>
            <p className="text-left text-base font-medium italic text-body-color mb-2">
              Fonts:
            </p>
            <ul className="list-disc pl-5">
              <li>Prata - <a href="https://fonts.google.com/specimen/Prata" title="Prata font">Google Fonts</a></li>
              <li>Work Sans Medium - <a href="https://fonts.google.com/specimen/Work+Sans" title="Work Sans font">Google Fonts</a></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
