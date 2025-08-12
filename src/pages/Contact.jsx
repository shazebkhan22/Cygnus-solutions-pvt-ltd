import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";
import Map from "../components/Map";
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import OfficeCards from "../components/OfficeCards";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Contact = () => {
  return (
    <>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="h-auto py-12 sm:py-14 bg-gradient-to-r from-blue-800 via-blue-500 to-blue-800 text-white flex flex-col items-center justify-center text-center px-4"
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6">
            Get in Touch
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-light">
            We’re here to help! Reach out to us for any inquiries, support, or
            collaboration opportunities.
          </p>
        </motion.div>
      </motion.section>

      {/* Office Locations
      <section className="h-auto pt-14 sm:pt-20 pb-8 sm:pb-10 bg-gray-100 px-4">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-8 sm:mb-12">
          Our Offices
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 w-full sm:w-10/12 mx-auto">
          {[
            {
              city: "Mumbai",
              address: `CYGNUS INFORMATION SOLUTIONS PVT. LTD.
              1005 Lodha Supremus,
              Opp MTNL Building,
              Saki Vihar Road,
              Andheri (E), Mumbai – 400072`,
            },
            {
              city: "Pune",
              address: `102,104, 1st Floor,
              Dorabjiee Classic,
              Survey Number:14A/3/1,
              Lane No 5,
              Near Turtulia Restaurant,
              Koregaon Park, Pune – 411001`,
            },
            {
              city: "NCR",
              address: `A-23, 2nd Floor,
              Sector 4, Noida – 201301`,
            },
            {
              city: "Dehradun",
              address: `85/1, Laxmi Road, Dalanwala,
              Dehradun – 248001`,
            },
          ].map((location, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="bg-white text-gray-800 p-4 sm:p-6 h-auto rounded-2xl shadow-lg text-start transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold pb-3 sm:pb-4 text-blue-900">
                {location.city}
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 whitespace-pre-line">
                {location.address}
              </p>
            </motion.div>
          ))}
        </div>
      </section> */}

      <OfficeCards/>

      {/* Map Section */}
      <section className="pt-6 sm:pt-10 bg-gray-100 px-4">
        <div className="w-full sm:w-10/12 mx-auto">
          <Map />
        </div>
      </section>

      {/* Contact Details & Form */}
      <section className="h-auto bg-gray-100 py-14 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Contact Details */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col items-center text-center space-y-10 sm:space-y-12 py-8 sm:py-12"
          >
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-3 sm:mb-4">
                Contact Us
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4 sm:mb-6">
                Have any questions? Reach out to us.
              </p>
              <p className="text-sm sm:text-base md:text-lg font-medium text-gray-800">
                📧 Email:{" "}
                <a
                  href="mailto:contact@corporate.com"
                  className="text-blue-600 hover:underline"
                >
                  contact@corporate.com
                </a>
              </p>
              <p className="text-sm sm:text-base md:text-lg font-medium text-gray-800">
                📞 Phone:{" "}
                <a
                  href="tel:+919876543210"
                  className="text-blue-600 hover:underline"
                >
                  +91 98765 43210
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-900 mb-3 sm:mb-4">
                Our Headquarters
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-xl">
                CYGNUS INFORMATION SOLUTIONS PVT. LTD.
                <br />
                1005 Lodha Supremus,
                <br />
                Opp MTNL Building,
                <br />
                Saki Vihar Road, Andheri (E), Mumbai – 400072
              </p>
            </div>

            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-900 mb-3 sm:mb-4">
                Follow Us
              </h2>
              <div className="flex justify-center space-x-4 sm:space-x-6">
                {[FaLinkedin, FaTwitter, FaInstagram, FaFacebook].map(
                  (Icon, i) => (
                    <motion.a
                      key={i}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon className="text-2xl sm:text-3xl text-blue-600" />
                    </motion.a>
                  )
                )}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="w-full"
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;
