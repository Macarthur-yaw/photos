import { Services } from "../Constant/Services";
import * as motion from "motion/react-client";

export default function Service() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="p-6"
    >
      <div className="text-center mt-10">
        <h1 className="text-4xl font-bold">Our Services</h1>
        <p className="mt-4 text-gray-600">
          We offer a wide range of photography services to meet your needs.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {Services.map((service, index) => (
          <div
            key={index}
            className="cursor-pointer border border-stone-200 hover:shadow-lg rounded-lg overflow-hidden transition duration-300"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-stone-800">
                {service.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
