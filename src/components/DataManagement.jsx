import logo from "../assets/collage.png"; // Ensure this path is correct or switch to an image if needed

const DataManagement = () => {
  const cardData = [
    {
      title: "Data Protection & Backup Solutions",
      description:
        "Our customized, comprehensive data protection and automated backup solutions protect your data from malicious users and prevent productivity and monetary losses.",
      bgColor: "bg-blue-200",
    },
    {
      title: "Disaster Recovery Solutions",
      description:
        "Our customized disaster recovery solutions help you resume business faster and reduce downtime following the disaster. Enjoy uninterrupted productivity with our advanced DR solutions.",
      bgColor: "bg-blue-200",
    },
    {
      title: "Primary & Unified Storage",
      description:
        "Our integrated data management services include primary and unified data storage products of prime brands, customized data protection, backup solutions, and robust disaster recovery (DR) solutions.",
      bgColor: "bg-blue-200",
    },
  ];

  return (
    <section className="py-20">
      <h2 className="text-4xl font-semibold text-gray-700 text-center px-6 py-4">
        Integrated Data Management
      </h2>

      <div className="my-10 bg-gray-100 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 p-10 rounded-xl">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`${card.bgColor} p-6 rounded-lg shadow-lg`}
          >
            <div className="flex justify-center mb-4">
              <img
                src={logo}
                alt={card.title}
                className="h-28 object-cover rounded-lg"
              />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {card.title}
            </h2>
            <p className="text-gray-700">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DataManagement;
