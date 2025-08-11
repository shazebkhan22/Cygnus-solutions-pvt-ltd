import { Linkedin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import ss from "../assets/heads/Sumit Srivastava.jpg";
import rm from "../assets/heads/Rajesh Mishra.jpg";
import ag from "../assets/heads/Ajay Gandeja.jpg";
import hs from "../assets/heads/Hemang Shah.jpg";
import hn from "../assets/heads/Hardik Narielwala.jpg";
import pp from "../assets/heads/Parmanand Pandey.jpg";
import sj from "../assets/heads/sanjiv-jha.jpg"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const TeamMembers = () => {
  const teamMembers = [
    { id: 1, name: "Rajesh Mishra", role: "Director", image: rm, shape: "rounded-l-full", linkedin: "https://www.linkedin.com/in/rajesh-mishra-11414221/" },
    { id: 2, name: "Sumit Srivastava", role: "Managing Director", image: ss, shape: "rounded-t-full", linkedin: "https://www.linkedin.com/in/sumit-srivastava-04205925/" },
    { id: 3, name: "Ajay Gandeja", role: "Chief Finance Officer", image: ag, shape: "rounded-full", linkedin: "https://www.linkedin.com/in/ajay-gandeja-43b1ab7/" },
    { id: 4, name: "Hemang Shah", role: "Associate Director", image: hs, shape: "rounded-full", linkedin: "https://www.linkedin.com/in/hemang-shah-60596b109/" },
    { id: 5, name: "Hardik Narielwala", role: "Executive Director", image: hn, shape: "rounded-r-full", linkedin: "https://www.linkedin.com/in/hardik-narielwala-3120a250/" },
    { id: 6, name: "Parmanand Pandey", role: "Vice President", image: pp, shape: "rounded-l-full", linkedin: "https://www.linkedin.com/in/parmanand-pandey-946b9a24/" },
    { id: 7, name: "Sanjeev Jha", role: "Director - HR, Strategy", image: sj, shape: "rounded-b-full", linkedin: "https://www.linkedin.com/in/thesanjeevjha/" },
    { id: 8, name: "Tushar Gavande", role: "Vice President - Hybrid IT", image:"", shape: "rounded-r-full", linkedin: "https://www.linkedin.com/in/tushar-gavande-0624131b/" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-start mb-16"
        >
          <div>
            <div className="flex items-center gap-2 text-gray-600 mb-6">
              <div className="w-4 h-4 bg-black transform rotate-45"></div>
              <span className="text-lg font-medium">Our Team</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold">
              The Team Behind Your
              <br />
              <span className="text-gray-500">Digital Success</span>
            </h1>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-gray-800 transition-colors"
          >
            <Phone size={18} />
            Book a Call
          </motion.button>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
        {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className={`md:col-span-4 flex justify-center ${
                index === 3
                  ? "md:col-start-3"
                  : index === 4
                  ? "md:col-start-7"
                  : ""
              }`}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={index}
              viewport={{ once: true, amount: 0.2 }}
            >
              <TeamMemberCard member={member} size="large" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const TeamMemberCard = ({ member, size = "medium" }) => {
  const sizeClasses = {
    small: "w-32 h-32",
    medium: "w-40 h-40",
    large: "w-56 h-56",
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group cursor-pointer"
    >
      <div
        className={`${sizeClasses[size]} ${member.shape} overflow-hidden mb-4 transition-transform shadow-lg hover:shadow-xl`}
      >
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="text-center">
        <h3 className="font-bold text-xl text-gray-900 mb-1">{member.name}</h3>
        <div className="flex items-center justify-center gap-2 text-gray-600">
          <span className="text-sm">{member.role}</span>
          {member.linkedin && (
            <motion.a
              whileHover={{ scale: 1.2 }}
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              <Linkedin size={16} />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TeamMembers;
