import { Users, Building } from "lucide-react";
import { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";

export default function Team() {
  const [showNumbers, setShowNumbers] = useState(false);

  const { numberOfEmployees } = useSpring({
    numberOfEmployees: showNumbers ? 250 : 0,
    from: { numberOfEmployees: 0 },
    config: { duration: 2000 },
  });

  const { numberOfClients } = useSpring({
    numberOfClients: showNumbers ? 1000 : 0,
    from: { numberOfClients: 0 },
    config: { duration: 2000 },
  });

  // Handle scroll into view to trigger animation
  const handleScrollIntoView = () => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShowNumbers(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(document.getElementById("team"));
    return () => observer.disconnect();
  };

  useEffect(() => {
    handleScrollIntoView();
  }, []);

  return (
    <section id="team" className="bg-white py-80">
      <div className="container px-4 mx-auto">
        <h2 className="mb-12 text-5xl font-bold text-center text-purple-800">
          Our Global Impact
        </h2>
        <div className="flex justify-center space-x-8 md:space-x-16">
          <div className="text-center">
            <Users className="w-16 h-16 mx-auto mb-4 text-purple-600" />
            <animated.h3 className="mb-2 text-4xl font-bold text-purple-800">
              {numberOfEmployees.to((n) => Math.floor(n))}
            </animated.h3>
            <p className="text-xl text-gray-600">Employees Worldwide</p>
          </div>
          <div className="text-center">
            <Building className="w-16 h-16 mx-auto mb-4 text-purple-600" />
            <animated.h3 className="mb-2 text-4xl font-bold text-purple-800">
              {numberOfClients.to((n) => Math.floor(n))}
            </animated.h3>
            <p className="text-xl text-gray-600">Satisfied Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
}