import { motion } from "framer-motion"; // NEW
import Banner from "../components/Banner";
import Principles from "../components/FirstPageProducts.jsx";
import IndustriesSlide from "../components/IndustriesSlide.jsx";
import img22 from "../assets/logo/aws.png";
import img32 from "../assets/logo/hp.png";
import img42 from "../assets/logo/nvidia.png";
import img52 from "../assets/logo/cisco.png";
import img62 from "../assets/logo/hewlett.png";
import img72 from "../assets/logo/ibm.png";
import img82 from "../assets/logo/microsoft.png";
import img92 from "../assets/logo/netapp.png";
import img102 from "../assets/logo/xerox.png";
import img112 from "../assets/logo/redhat.png";
import img113 from "../assets/logo/Arcon_logo.png"
import { LogoBanner } from "../components/LogoBanner.jsx";
import WhatSets from "../components/WhatSets.jsx";

const logoBannerImages = [
  img102, img22, img32, img42, img52, img62, img72, img82, img92, img112, img113
];

const Home = () => {
  return (
    <div>
      <Banner />

      <motion.section
        className="bg-center pb-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h4 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center px-4 mb-4">
          In Partnership With Leading Pioneers
        </h4>

        <p className="text-sm md:text-base lg:text-lg text-center mx-auto max-w-4xl text-gray-700">
          Collaborating with industry leaders, we guarantee top-tier IT
          solutions to meet your business requirements.
        </p>

        <LogoBanner
          items={logoBannerImages}
          direction="right"
          speed="normal"
          pauseOnHover={true}
          className="my-12"
        />
      </motion.section>

      <WhatSets />
      <Principles />
      <IndustriesSlide />
    </div>
  );
};

export default Home;
