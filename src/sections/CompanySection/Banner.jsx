import Silk from "../../components/Silk";

const Banner = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Silk background as canvas */}
      <div className="absolute inset-0 z-0">
        <Silk
          speed={12}
          scale={0.8}
          color="#2f48a5"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-3xl text-white">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
          Empowering Innovation, Delivering Excellence
        </h2>
        <p className="text-lg sm:text-xl mb-8 text-gray-200">
          At the forefront of technology, we craft solutions that transform
          businesses and shape the future.
        </p>
      </div>
    </section>
  );
};

export default Banner;
