import { useState } from "react";
import weddingImg from "../assets/see.jpg";
import eventImg from "../assets/see.jpg";
import portraitImg from "../assets/pexels-remove.png";

const serviceData = [
  {
    title: "Wedding Photography",
    description:
      "Capture your most cherished moments with elegance and emotion. We offer full-day coverage, candid storytelling, and romantic portrait sessions.",
    image: weddingImg,
  },
  {
    title: "Event Coverage",
    description:
      "Professional photography for corporate events, birthdays, and special gatherings. We focus on key highlights, authentic interactions, and dynamic compositions.",
    image: eventImg,
  },
  {
    title: "Portrait Sessions",
    description:
      "Personalized portrait shoots either in studio or outdoor settings. Ideal for individuals, couples, families, and branding.",
    image: portraitImg,
  },
];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 mt-10">
      <h1 className="text-4xl font-bold text-center mb-6">Our Services</h1>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-8 gap-4 flex-wrap">
        {serviceData.map((service, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
              activeTab === index
                ? "bg-black text-white"
                : "bg-gray-200 hover:bg-gray-300 text-gray-800"
            }`}
          >
            {service.title}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        <img
          src={serviceData[activeTab].image}
          alt={serviceData[activeTab].title}
          className="w-full md:w-1/2 rounded-2xl shadow-lg"
        />
        <div className="text-center md:text-left max-w-xl">
          <h2 className="text-2xl font-semibold mb-4">
            {serviceData[activeTab].title}
          </h2>
          <p className="text-gray-600 text-base">{serviceData[activeTab].description}</p>
        </div>
      </div>
    </div>
  );
}
