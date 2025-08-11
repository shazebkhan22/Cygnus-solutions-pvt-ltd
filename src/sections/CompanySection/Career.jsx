import { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { Modal } from "antd";
import { motion } from "framer-motion";
import CareerForm from "../../components/CareerForm";

const Career = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState("");

  const jobListings = [
    {
      title: "Data Science – Associate Manager",
      type: "Full time",
      level: "4+ yrs. experience",
    },
    {
      title: "Data Engineering – Lead",
      type: "Full time",
      level: "Senior-Level",
    },
    {
      title: "Pre-Sales Consultant – Data Science and AI",
      type: "Full time",
      level: "3–5 yrs. experience",
    },
  ];

  const handleOpenForm = (jobTitle) => {
    setSelectedJob(jobTitle);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setSelectedJob("");
  };

  return (
    <>
      <div className="py-20 bg-gray-50">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-center font-bold text-4xl mb-4">Careers</h2>
          <p className="text-center text-gray-600 text-lg mb-12">
            Realize your sense of purpose with the incredible Cygnus Team
          </p>

          <div className="space-y-6">
            {jobListings.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ scale: 1.02 }}
                className="cursor-pointer hover:shadow-lg transition-all duration-300 ease-in-out py-4 w-full bg-white border border-gray-300 h-32 rounded-xl flex justify-between items-center px-8"
                onClick={() => handleOpenForm(job.title)}
              >
                <div className="flex flex-col space-y-2">
                  <h3 className="text-lg font-semibold">{job.title}</h3>
                  <p className="text-gray-600">
                    {job.type} | {job.level}
                  </p>
                </div>
                <IoIosAdd className="text-gray-600 hover:text-blue-800 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Modal
        open={showForm}
        onCancel={handleCloseForm}
        footer={null}
        centered
        width={600}
        destroyOnClose
      >
        <CareerForm selectedJob={selectedJob} />
      </Modal>
    </>
  );
};

export default Career;
