import { motion } from "framer-motion";
import img1 from "../../assets/industrypics/Manufacturing/data.jpg";
import img2 from "../../assets/industrypics/Manufacturing/itinfra.jpg";
import img3 from "../../assets/industrypics/Manufacturing/robot.jpg";
import img5 from "../../assets/industrypics/Manufacturing/cyber.jpg";
import img4 from "../../assets/industrypics/Manufacturing/cybersec.jpg";
import img6 from "../../assets/industrypics/Manufacturing/analytics.jpg";
import img7 from "../../assets/industrypics/Manufacturing/automation.jpg";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const Manufacturing = () => {
  const cardData = [
    {
      title: "Enterprise Resource Planning (ERP)",
      description:
        "Implement ERP systems to streamline operations, improve resource management, and provide real-time insights across manufacturing processes.",
      image: img1,
    },
    {
      title: "IT Infrastructure Management",
      description:
        "Develop and maintain scalable, reliable IT infrastructures that support mission-critical manufacturing operations, from production to distribution.",
      image: img2,
    },
    {
      title: "Industrial IoT (IoT) Integration",
      description:
        "Leverage IoT devices and sensors to monitor equipment, track inventory, and improve predictive maintenance, reducing downtime and increasing productivity.",
      image: img3,
    },
    {
      title: "Cybersecurity Solutions",
      description:
        "Protect sensitive operational data and critical infrastructure from cyber threats, ensuring compliance with industry standards and maintaining the integrity of manufacturing systems.",
      image: img4,
    },
    {
      title: "Cloud Solutions for Manufacturing",
      description:
        "Enable seamless data storage and real-time collaboration across teams with cloud-based solutions tailored to the manufacturing sector, ensuring scalability and flexibility.",
      image: img5,
    },
    {
      title: "Data Analytics and Business Intelligence",
      description:
        "Use data analytics to optimize production processes, predict trends, and make informed decisions that drive operational excellence.",
      image: img6,
    },
    {
      title: "Automation and Robotics Solutions",
      description:
        "Implement advanced automation systems and robotics to streamline production lines, reduce errors, and improve efficiency.",
      image: img7,
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="flex flex-col items-center gap-6 p-6 rounded-[24px] bg-white shadow-md hover:shadow-lg transition-shadow"
            style={{
              boxShadow: "0px 0px 2px 0px rgba(0, 0, 0, 0.20)",
            }}
          >
            {/* Number */}
            <div className="self-start w-12 h-12 bg-blue-900 text-white rounded-full flex justify-center items-center text-lg font-bold">
              {index + 1}
            </div>

            {/* Title */}
            <h3 className="text-center text-[#25272B] font-poppins text-lg sm:text-xl font-medium leading-snug">
              {card.title}
            </h3>

            {/* Description */}
            <p className="text-center text-gray-600 text-sm sm:text-base">
              {card.description}
            </p>

            {/* Image */}
            <div className="w-full aspect-[4/3] rounded-[24px] border border-[#E8E8E8] overflow-hidden">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Manufacturing;
