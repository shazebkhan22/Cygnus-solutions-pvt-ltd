import { useEffect } from "react";
import laptop from "../../assets/solutionpics/laptop.jpg";
import pc from "../../assets/solutionpics/pc.jpg";
import workstation from "../../assets/solutionpics/work-station.jpg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const EndPointSolutions = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const solutions = [
    {
      title: "Laptops",
      description: "Mobile solutions for productivity on the go.",
      image: laptop,
    },
    {
      title: "PCs",
      description: "High-performance desktops for all industries.",
      image: pc,
    },
    {
      title: "Work Stations",
      description: "Powerful systems for specialized workloads.",
      image: workstation,
    },
  ];

  return (
    <section className="py-20 bg-blue-100 px-4">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-blue-800 font-semibold mb-4">
          End Point Solutions
        </h2>
        <p className="text-md sm:text-lg md:text-xl text-blue-600 max-w-4xl mx-auto mb-12">
          Empowering your team with the right tools for every task, from mobile
          productivity to specialized computing.
        </p>
      </div>

      <motion.div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mt-10"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {solutions.map((solution, index) => (
          <motion.div
            key={index}
            className="relative bg-white p-6 rounded-xl shadow-xl overflow-hidden group cursor-pointer"
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative overflow-hidden rounded-lg mb-4 h-64">
              <img
                src={solution.image}
                alt={solution.title}
                className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-blue-900 opacity-20 transition-opacity duration-300 group-hover:opacity-0"></div>
            </div>
            <div className="text-center">
              <h3 className="text-lg sm:text-xl font-semibold text-center text-gray-800 mb-2">
                {solution.title}
              </h3>
              <p className="text-sm sm:text-base text-center text-gray-600">
                {solution.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default EndPointSolutions;