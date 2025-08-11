import { motion } from "framer-motion";
import PropTypes from "prop-types";
import it1 from "../assets/itserve/infra2.jpg";
import it2 from "../assets/itserve/security.jpg";
import it3 from "../assets/itserve/product-n.jpg";
import it4 from "../assets/itserve/ai3.jpg";
import it5 from "../assets/itserve/data.jpg";
import it6 from "../assets/itserve/fms.jpg";
import it7 from "../assets/itserve/product-c.jpeg";
import { cn } from "../utils";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut"
    }
  }),
};

const PrincipleCard = ({ image, title, description, index }) => (
  <motion.div
    className="flex flex-col items-center text-center"
    custom={index}
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-blue-600 rounded-md w-full mb-4"
    >
      <img
        className="rounded-lg w-full h-56 object-cover"
        src={image}
        alt={title}
        loading="lazy" // Add this line for lazy loading
      />
    </motion.div>
    <div>
      <h2 className="font-semibold text-xl sm:text-2xl text-gray-200 mb-2">{title}</h2>
      <p className="text-gray-300 text-sm sm:text-base px-2">{description}</p>
    </div>
  </motion.div>
);

PrincipleCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

const Products = () => {
  const productData = [
    {
      image: it1,
      title: "Infrastructure",
      description:
        "Transform your business units into high-performance ones with Cygnus’ reliable, efficient, optimized, and secured technology solutions.",
    },
    {
      image: it2,
      title: "Security",
      description:
        "Protect your IT infrastructure and data from all types of cyber threats with the help of Cygnus’ robust cyber-security solutions.",
    },
    {
      image: it7,
      title: "Cloud",
      description:
        "Set up your virtual office and access your data anywhere, anytime with the help of our cloud computing solutions.",
    },
    {
      image: it4,
      title: "AI/ML",
      description:
        "Increase productivity and operational efficiency with Cygnus’ AI and ML solutions that help companies automate and optimize routine processes and tasks.",
    },
    {
      image: it3,
      title: "Networking",
      description:
        "We operate with integrity, innovation, and a commitment to achieving impactful results for our clients.",
    },
    {
      image: it5,
      title: "Data Center Solutions",
      description:
        "Focused on delivering tangible and quantifiable outcomes that enhance value and profitability for our clients.",
    },
    {
      image: it6,
      title: "Facility Management Services",
      description:
        "Focused on delivering tangible and quantifiable outcomes that enhance value and profitability for our clients.",
    },
  ];

  return (
    <div className="py-20 bg-blue-900 text-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center"
        >
          Products and Solutions
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-base sm:text-lg mb-12 max-w-4xl mx-auto text-center"
        >
          We provide a comprehensive range of IT services, including software
          development, system integration, IT consulting, and support, tailored to
          meet the unique needs of businesses and drive their digital transformation.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
          {productData.map((item, index) => {
            // Center the last card if it's alone
            const isLastCentered = index === productData.length - 1 && productData.length % 3 !== 0;
            return (
              <div
                key={index}
                className={cn(
                  isLastCentered
                    ? "col-span-1 sm:col-span-2 md:col-span-1 md:col-start-2 flex justify-center"
                    : ""
                )}
              >
                <PrincipleCard
                  index={index}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;