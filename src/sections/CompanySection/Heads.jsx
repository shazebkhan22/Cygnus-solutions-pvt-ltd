import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { FaLinkedin } from "react-icons/fa";
// import ag from "../../assets/heads/Ajay Gandeja.jpg"
// import hs from "../../assets/heads/Hemang Shah.jpg"
// import hn from "../../assets/heads/Hardik Narielwala.jpg"
// import pp from "../../assets/heads/Parmanand Pandey.jpg"
// import ss from "../../assets/heads/Sumit Srivastava.jpg"
// import rm from "../../assets/heads/Rajesh Mishra.jpg";

// const team = [
//   {
//     name: "Sumit Srivastava",
//     role: "Managing Director",
//     img: ss,
//     linkedin: "https://www.linkedin.com/in/sumit-srivastava-04205925/",
//   },
//   {
//     name: "Rajesh Mishra",
//     role: "Director",
//     img: rm,
//     linkedin: "https://www.linkedin.com/in/rajesh-mishra-11414221/",
//   },
//   {
//     name: "Ajay Gandeja",
//     role: "Chief Finance Officer",
//     img: ag,
//     linkedin: "https://www.linkedin.com/in/ajay-gandeja-43b1ab7/",
//   },
//   {
//     name: "Hemang Shah",
//     role: "Associate Director",
//     img: hs,
//     linkedin: "https://www.linkedin.com/in/hemang-shah-60596b109/",
//   },
//   {
//     name: "Hardik Narielwala",
//     role: "Executive Director",
//     img: hn,
//     linkedin: "https://www.linkedin.com/in/hardik-narielwala-3120a250/",
//   },
//   {
//     name: "Parmanand Pandey",
//     role: "Vice President - Cloud Operations Security",
//     img: pp,
//     linkedin: "https://www.linkedin.com/in/parmanand-pandey-946b9a24/",
//   },
// ];

const Heads = () => {
  return (
    <section className="bg-blue-100 py-20 text-center">
      {/* <h2 className="text-4xl font-bold text-blue-900 mb-8">
        The Team behind the Digital Success
      </h2>
      <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto mb-12">
        Meet our dynamic leadership team that guides our team to work in
        synergy to deliver the best customer experiences and create a loyal
        customer base.
      </p> */}

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-10 max-w-6xl mx-auto mb-20">
        {team.map((member, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-3xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.4 }}
            variants={cardVariants}
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-auto object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-blue-900">
                {member.name}
              </h3>
              <p className="text-gray-600">{member.role}</p>
              <div className="mt-4">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800"
                >
                  <FaLinkedin className="text-2xl" />
                  <span className="ml-2 text-sm font-medium">LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div> */}

      <h2 className="text-4xl font-bold text-blue-900 mb-4">Want to join us?</h2>
      <p className="text-gray-700 leading-relaxed mb-8">
        Want to come along for a ride?
      </p>
      <Link to="/contact">
        <button className="text-white bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg font-medium rounded-lg text-sm px-6 py-2.5">
          Contact Us
        </button>
      </Link>
    </section>
  );
};

export default Heads;
