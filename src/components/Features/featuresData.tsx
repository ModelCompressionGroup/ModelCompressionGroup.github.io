import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: "/images/icons/hand.webp",
    title: "Excessive Time Spent on Manual Tasks",
    paragraph:
      "AI engineering teams spend over 50% of their time on tasks like chip selection, model selection, and optimization, slowing down development and limiting innovation.",
  },
  {
    id: 1,
    icon: "/images/icons/calendar.webp",
    title: "Unpredictable AI Model Optimization Results",
    paragraph:
      "Model optimization for edge devices often yields unpredictable results, extending development cycles and increasing resource usage, affecting project timelines.",
  },
  {
    id: 1,
    icon: "/images/icons/constraint.webp",
    title: "Hardware Constraints on Edge Devices",
    paragraph:
      "Integrating AI into existing systems is challenging due to hardware limitations in computation, latency, and memory, leading to substantial integration and operational hurdles.",
  },
];
export default featuresData;
