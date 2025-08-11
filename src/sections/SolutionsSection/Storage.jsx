import san from "../../assets/solutionpics/5.svg";
import ss from "../../assets/solutionpics/6.svg";
import els from "../../assets/solutionpics/7.svg";
import st1 from "../../assets/solutionpics/storage1.jpg";
import st2 from "../../assets/solutionpics/storage2.jpg";
import st3 from "../../assets/solutionpics/storage3.jpg";
import CardSwap, { Card } from "../../components/CardSwap/CardSwap";

const Storage = () => {
  const storageData = [
    {
      title: "SAN/NAS Storages",
      description:
        "High-performance storage area and network-attached solutions.",
      image: san,
      fullImage: st1,
    },
    {
      title: "Smart Storages",
      description: "Intelligent systems for dynamic data needs.",
      image: ss,
      fullImage: st3,
    },
    {
      title: "Enterprise-Level Storage",
      description: "Secure, scalable storage for mission-critical operations.",
      image: els,
      fullImage: st2,
    },
  ];

  return (
    <>
      <section className="py-20 bg-blue-100">
        <section className="flex flex-col mx-auto max-w-6xl md:flex-row">
          <div className="w-full flex flex-col justify-center px-4 md:w-1/2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-blue-800 text-center md:text-left">
              Storage
            </h2>
            <p className="text-lg text-blue-600 text-center md:text-left">
              Explore high-performance, scalable, and intelligent storage
              options tailored to your business needs.
            </p>
          </div>
          <div className="w-full mt-8 sm:mt-0 md:mt-0 md:w-1/2 h-[350px] md:h-[600px] relative">
            <CardSwap
              cardDistance={60}
              verticalDistance={90}
              delay={3000}
              pauseOnHover={true}
            >
              {storageData.map((item, index) => (
                <Card
                  key={index}
                  className="p-2 shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-2xl bg-white border border-gray-200"
                >
                  <div className="flex gap-2 items-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-8 mb-1"
                      loading="lazy"
                    />
                    <h3 className="text-lg font-semibold text-gray-700">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    {item.description}
                  </p>
                  <hr className="border-t-2 w-full border-gray-700 mb-4" />
                  <img
                    src={item.fullImage}
                    alt={`${item.title} solution`}
                    className="w-full h-[18rem] rounded-lg"
                    loading="lazy"
                  />
                </Card>
              ))}
            </CardSwap>
          </div>
        </section>
      </section>
    </>
  );
};

export default Storage;
