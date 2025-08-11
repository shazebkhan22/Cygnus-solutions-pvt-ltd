"use client";
import { FaLock, FaLockOpen } from "react-icons/fa";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const CyberSecurity = () => {
  const data = [
    {
      heading: "PIM/PAM",
      content: "Protect your network infrastructure with our advanced security solutions.",
    },
    {
      heading: "SIEM",
      content: "Secure all endpoints, including desktops, laptops, and mobile devices.",
    },
    {
      heading: "SCM",
      content: "Ensure the security of your cloud environments with our comprehensive solutions.",
    },
    {
      heading: "SOC",
      content: "Protect your applications from vulnerabilities and threats.",
    },
    {
      heading: "IDAM",
      content: "Safeguard your sensitive data with our robust security measures.",
    },
    {
      heading: "Cyber Audit",
      content: "Manage user identities and control access to critical resources.",
    },
  ];

  return (
    <section className="h-auto py-20 px-4 sm:px-6 lg:px-10 bg-slate-100">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-3xl lg:text-4xl font-semibold pb-4 max-w-7xl mx-auto text-left"
      >
        Cyber Security
      </motion.h2>
      <motion.h3
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-md sm:text-lg text-gray-600 pb-10 max-w-7xl mx-auto text-left"
      >
        Fortifying Your Future with Cutting-Edge Security Solutions
      </motion.h3>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
      >
        {data.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group bg-white relative p-6 rounded-xl overflow-hidden transition-all duration-500 ease-in-out cursor-pointer h-32 sm:h-32 md:h-28 lg:h-32 hover:h-56 sm:hover:h-64 md:hover:h-72 lg:hover:h-88 hover:border-2 hover:border-gray-800 shadow-md"          >
            <motion.div
              className="absolute text-white bg-gradient-to-tr from-gray-300 to-gray-600 inset-0 flex flex-col justify-center items-center transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0"
            >
              <h2 className="text-lg sm:text-xl font-semibold text-center text-white mb-2">{item.heading}</h2>
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 0 }}
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.5 }}
              >
                <FaLock className="mt-3 w-6 h-6 sm:w-7 sm:h-7" />
              </motion.div>
            </motion.div>

            {/* Back Face */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100">
              <p className="text-sm sm:text-base text-center text-gray-600">{item.content}</p>
              <motion.div
                initial={{ rotate: -180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <FaLockOpen className="mt-5 w-6 h-6 sm:w-7 sm:h-7 text-gray-700" />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default CyberSecurity;