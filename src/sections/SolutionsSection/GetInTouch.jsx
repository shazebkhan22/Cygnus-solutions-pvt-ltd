import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

const GetInTouch = () => {
  return (
    <section className="bg-blue-100 flex justify-center items-center py-24 px-4"> {/* Added px-4 for smaller screens */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-8 max-w-5xl mx-auto w-full p-8 md:p-16 rounded-3xl bg-gradient-to-br from-blue-800 to-blue-950 shadow-xl md:shadow-2xl"
      >
        {/* Heading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white text-center font-poppins text-lg md:text-xl lg:text-2xl font-semibold leading-relaxed"
        >
          Ready to transform your IT landscape? Let’s build your solution together
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.a
            as={Link} 
            to="/contact"
            className="bg-[#FDFDFF] text-blue-900 font-poppins text-base md:text-lg font-bold px-8 py-4 rounded-lg flex items-center gap-2 border border-transparent hover:border-blue-900 transition-colors duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)" }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Get In Touch
            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <BsArrowRight className="text-xl" /> {/* Increased icon size */}
            </motion.span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default GetInTouch;