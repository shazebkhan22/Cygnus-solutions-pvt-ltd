import c1 from "../assets/contactImgs/gateway-of-india-mumbai-2024-10-18-04-00-10-utc.jpg";
import c2 from "../assets/contactImgs/inaugurated-inspection-commissioner-wednesday-inauguration-intimated-arrangements_4e89d13c-ab54-11e6-b4b4-3ed39deda4e7.jpg.jpg";
import c3 from "../assets/contactImgs/one-day-dehradun-local-sightseeing-tour-package-private-cab-header.jpg";
import c4 from "../assets/contactImgs/pune-4058851__480.jpg";
import { motion } from "framer-motion";


export default function App() {
  const locations = [
    {
      city: "Mumbai",
      address: `CYGNUS INFORMATION SOLUTIONS PVT. LTD.
1005 Lodha Supremus,
Opp MTNL Building,
Saki Vihar Road,
Andheri (E), Mumbai – 400072`,
      imageUrl: c1,
    },
    {
      city: "Pune",
      address: `102,104, 1st Floor,
Dorabjiee Classic,
Survey Number:14A/3/1,
Lane No 5,
Near Turtulia Restaurant,
Koregaon Park, Pune – 411001`,
      imageUrl: c4,
    },
    {
      city: "NCR",
      address: `A-23, 2nd Floor,
Sector 4, Noida – 201301`,
      imageUrl: c2,
    },
    {
      city: "Dehradun",
      address: `85/1, Laxmi Road, Dalanwala,
Dehradun – 248001`,
      imageUrl: c3,
    },
  ];

  // Card component with hover flip effect using Tailwind + custom CSS
  const Card = ({ location }) => {
    return (
      <div className="w-full h-72 perspective">
        <div className="relative w-full h-full rounded-2xl shadow-lg transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180 cursor-pointer">
          {/* Front side */}
          <div className="absolute w-full h-full rounded-2xl overflow-hidden backface-hidden">
            <img
              src={location.imageUrl}
              alt={`${location.city} office`}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
              <h3 className="text-white text-4xl font-bold">{location.city}</h3>
            </div>
          </div>

          {/* Back side */}
          <div
            className="
    absolute w-full h-full rounded-2xl
    bg-gradient-to-br from-blue-300 to-blue-200
    flex items-center justify-center p-6 text-center
    text-blue-800 font-semibold
    text-base sm:text-lg md:text-xl
    whitespace-pre-line backface-hidden rotate-y-180
  "
          >
            {location.address}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="h-auto py-14 sm:py-20 bg-gray-50 font-sans antialiased text-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl sm:text-5xl font-bold text-blue-900 mb-12">
          Our Offices
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {locations.map((location, idx) => (
            <Card key={idx} location={location} />
          ))}
        </div>
      </div>
    </div>
  );
}

// Append the necessary custom CSS for the flip effect
const style = document.createElement("style");
style.innerHTML = `
  .perspective {
    perspective: 1000px;
  }
  .transform-style-preserve-3d {
    transform-style: preserve-3d;
  }
  .backface-hidden {
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
  }
  .rotate-y-180 {
    transform: rotateY(180deg);
  }
  .hover\\:rotate-y-180:hover {
    transform: rotateY(180deg);
  }
`;
document.head.appendChild(style);
