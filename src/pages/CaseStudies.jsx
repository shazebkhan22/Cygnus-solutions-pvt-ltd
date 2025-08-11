"use client";
import { caseData } from "../assets/assets";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CaseStudies = () => {
  return (
    <div className="pt-10 pb-20 px-4 sm:px-6 md:px-10 mx-auto max-w-7xl">
      <motion.h2
        className="text-center text-3xl md:text-5xl font-bold mb-4 text-gray-800"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Case Studies
      </motion.h2>

      <motion.p
        className="text-center text-lg md:text-xl text-gray-600 mb-12 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        Explore how our innovative solutions have made a difference in various
        industries.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {caseData.map((card, index) => (
          <Link to={`/casestudies/${card.slug}`} key={index} className="w-full max-w-xs group/card">
            <motion.div
              className="relative cursor-pointer overflow-hidden rounded-md shadow-xl h-96 bg-cover bg-center flex flex-col justify-between p-4"
              style={{
                backgroundImage: `url(${card.image})`,
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Overlay */}
              <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60 z-0"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-0"></div>


              <div className="flex flex-row items-center space-x-4 z-10">
              
              </div>

              <div className="z-10">
                <h2 className="font-bold text-md md:text-xl text-gray-200 relative">
                  {card.heading}
                </h2>
                {/* <p className="font-normal text-sm text-gray-900 relative mt-2">
                  {card.description?.slice(0, 90)}
                </p> */}
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
