"use client";
import { Carousel, Card } from "../components/AppleCardCarousel";
import { useNavigate } from "react-router-dom";
import BankingBanner from "../assets/industrypics/Banking/banner.jpg";
import OilAndGasBanner from "../assets/industrypics/Oil/banner.jpg";
import EducationBanner from "../assets/industrypics/Education/classic-american-school-2025-02-11-21-11-14-utc-2.jpg";
import ManufacturingBanner from "../assets/industrypics/Manufacturing/industrial-worker-inspecting-and-check-up-machine-2025-03-14-13-22-31-utc.jpg";
import ConsumerSectorBanner from "../assets/industrypics/ConsumerSector/banner.jpg";
import SmallMediumBusinessBanner from "../assets/industrypics/Smb/banner.jpg";

const createSlug = (name) => {
  return name.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
};

const industrySlideData = [
  {
    id: 1,
    heading: "Banking & Finance",
    slug: createSlug("Banking & Finance"),
    image: BankingBanner,
    description: "Innovative solutions for secure financial growth",
  },
  {
    id: 2,
    heading: "Oil and Gas",
    slug: createSlug("Oil and Gas"),
    image: OilAndGasBanner,
    description: "Driving energy innovation and global supply",
  },
  {
    id: 3,
    heading: "Education",
    slug: createSlug("Education"),
    image: EducationBanner,
    description: "Empowering learning with modern technology",
  },
  {
    id: 4,
    heading: "Manufacturing",
    slug: createSlug("Manufacturing"),
    image: ManufacturingBanner,
    description: "Streamlined production through smart automation",
  },
  {
    id: 5,
    heading: "Consumer Sector",
    slug: createSlug("Consumer Sector"),
    image: ConsumerSectorBanner,
    description: "Enhancing lifestyles with innovative products",
  },
  {
    id: 6,
    heading: "Small & Medium Business",
    slug: createSlug("Small & Medium Business (SMB)"),
    image: SmallMediumBusinessBanner,
    description: "Tailored solutions for growing enterprises",
  },
];


const DummyContent = ({ title }) => {
  return (
    <>
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            {title}
          </span>{" "}
          Explore our tailored IT solutions for the {title} industry.
        </p>
        <img
          src="https://assets.aceternity.com/macbook.png"
          alt="Macbook mockup from Aceternity UI"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
        />
      </div>
    </>
  );
};

export function IndustriesCarousel() {
  const navigate = useNavigate();

  const handleSlideClick = (slug) => {
    navigate(`/industries/${slug}`);
  };

  const cards = industrySlideData.map((card, index) => (
    <div key={card.id} onClick={() => handleSlideClick(card.slug)} className="cursor-pointer">
      <Card
        key={card.image}
        card={{
          category: card.heading,
          title: card.description,
          src: card.image,
          content: <DummyContent title={card.heading} />,
        }}
        index={index}
      />
    </div>
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold max-w-7xl pl-4 mx-auto">
        Industries We Serve
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

export default IndustriesCarousel;