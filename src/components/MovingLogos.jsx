import img2 from "../assets/logo/aws.png";
import img3 from "../assets/logo/hp.png";
import img4 from "../assets/logo/nvidia.png";
import img5 from "../assets/logo/cisco.png";
import img6 from "../assets/logo/hewlett.png";
import img7 from "../assets/logo/ibm.png";
import img8 from "../assets/logo/microsoft.png";
import img9 from "../assets/logo/netapp.png";
import img10 from "../assets/logo/xerox.png";
import img11 from "../assets/logo/redhat.png";

const logos = [
  { src: img2, alt: "AWS" },
  { src: img3, alt: "Hp" },
  { src: img4, alt: "Nvidia" },
  { src: img5, alt: "Cisco" },
  { src: img6, alt: "Hewlett" },
  { src: img7, alt: "Ibm" },
  { src: img8, alt: "Microsoft" },
  { src: img9, alt: "NetApp" },
  { src: img10, alt: "Xerox", size: "small" },
  { src: img11, alt: "Redhat" },
];

const MovingLogos = () => {
  return (
    <div className="relative overflow-hidden py-12">
      <div className="flex animate-marquee space-x-8 sm:space-x-10 md:space-x-14 lg:space-x-16 px-4">
        {logos.concat(logos).map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className={`object-contain transition-transform duration-300 hover:scale-120 ${
              logo.size === "small"
                ? "h-8 sm:h-8 md:h-8"
                : "h-10 sm:h-10 md:h-10 lg:h-10"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default MovingLogos;
