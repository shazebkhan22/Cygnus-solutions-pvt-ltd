import { motion } from "framer-motion";

const Community = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-blue-400 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto text-center px-6">
        {/* Heading */}
        <motion.h3
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-blue-900 mb-8"
        >
          Join a Vision Community
        </motion.h3>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className="text-gray-700 leading-relaxed mb-12 max-w-4xl mx-auto"
        >
          Our high client retention reflects our reliability in the industry.
          With our mantra of being ‘consultant first,’ we possess a unique
          combination of business acumen and technical skills. We ensure that
          you grab new opportunities and move miles ahead of your competitors
          with our adaptive, agile, effective, and efficient solutions and
          service delivery.
        </motion.p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mx-auto max-w-5xl">
          {[1, 2, 3].map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15 + 0.2,
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-50 rounded-lg h-40 shadow-lg transition-transform"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;
