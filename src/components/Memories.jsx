import mem1 from "../assets/team/mem1.jpg"
import mem2 from "../assets/team/mem2.jpg"
import mem3 from "../assets/team/mem3.jpg"
import mem4 from "../assets/team/mem4.jpg"
import mem5 from "../assets/team/mem5.jpg"
import mem6 from "../assets/team/mem6.jpg"
import mem7 from "../assets/team/mem7.jpg"

const casepics = [
    { src: mem1, alt: "AWS" },
    { src: mem2, alt: "Hp" },
    { src: mem3, alt: "Nvidia" },
    { src: mem4, alt: "Cisco" },
    { src: mem5, alt: "Hewlett" },
    { src: mem6, alt: "Ibm" },
    { src: mem7, alt: "Microsoft" },
  ];

const Memories = () => {
  return (
    <div className="relative overflow-hidden py-24 ">
      <div className="flex animate-marquee space-x-8 md:space-x-12 lg:space-x-16">
        {casepics.concat(casepics).map((photo, index) => (
          <img
            key={index}
            src={photo.src}
            alt={photo.alt}
            className={`object-cover rounded-lg shadow-lg transition-transform duration-300 ${
              index % 2 === 0 ? "translate-y-12" : "-translate-y-4"
            } h-40 w-60 md:h-48 md:w-72 lg:h-56 lg:w-80`}
          />
        ))}
      </div>
    </div>
  );
};

export default Memories;
