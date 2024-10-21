import { motion } from "framer-motion";
import { Lightbulb, Globe, Rocket } from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "Innovative Strategies",
    description:
      "Developing cutting-edge solutions for complex business challenges.",
  },
  {
    icon: Globe,
    title: "Global Network",
    description:
      "Connecting businesses across borders for international growth.",
  },
  {
    icon: Rocket,
    title: "Tech Integration",
    description:
      "Seamlessly incorporating advanced technologies into your business processes.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-80">
      <div className="container px-4 mx-auto">
        <h2 className="mb-12 text-5xl font-bold text-center text-purple-800">
          Our Services
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="p-6 rounded-lg shadow-lg bg-purple-50"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <service.icon className="w-12 h-12 mx-auto mb-4 text-purple-600" />
              <h3 className="mb-2 text-xl font-semibold text-center text-purple-800">
                {service.title}
              </h3>
              <p className="text-center text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
