import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import HorizontalLine from "../Common/HorizontalLine";

const ProblemSection = () => {
  return (
    <section id="features" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="mb-8">
          <HorizontalLine/>
        </div>
        <SectionTitle
          title="Efficient Embedded AI - No More Wasted Efforts"
          paragraph="AI Engineering Teams Waste 50% of Their Time on Manual AI Model Optimization"
          center
        />
        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {featuresData.map((feature) => (
            <SingleFeature key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
