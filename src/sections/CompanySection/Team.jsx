import mem1 from "../../assets/team/mem1.jpg";
import mem2 from "../../assets/team/mem2.jpg";
import mem3 from "../../assets/team/mem3.jpg";
import mem4 from "../../assets/team/mem4.jpg";
import mem5 from "../../assets/team/mem5.jpg";
import mem6 from "../../assets/team/mem6.jpg";

const Team = () => {
  return (
    <>
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center lg:items-start md:mt-20 gap-12">
            {/* Text Content */}
            <div className="w-full lg:w-1/2 max-w-lg lg:max-w-none text-center lg:text-left">
              <h2 className="font-manrope text-4xl sm:text-5xl text-gray-900 font-bold leading-tight mb-7">
                Our Story
              </h2>
              <p className="text-base sm:text-lg text-gray-500 mb-6">
                Cygnus came into being in 2000 with a mission to provide
                mission-critical IT solutions. We aimed to combine advanced
                technology with practical solutions to meet market demands and
                exceed consumer expectations. Our journey began with a vision of
                innovation and reliability in the IT sector.
              </p>
              <p className="text-base sm:text-lg text-gray-500 mb-10">
                Our extensive experience in the industry has played a key role in
                establishing Cygnus as a trusted partner. With an unwavering
                commitment to excellence, we’ve built a reputation for
                dependability and delivering quality. Over the years, we’ve
                expanded our reach, partnering with several leading Original
                Equipment Manufacturers (OEMs) to offer cutting-edge IT solutions.
              </p>
            </div>

            {/* Images */}
            <div className="w-full lg:w-1/2 max-w-3xl">
              <div className="grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 gap-8">
                <img
                  src={mem1}
                  alt="Team member 1"
                  className="w-44 h-56 rounded-2xl object-cover mx-auto md:mt-20"
                />
                <img
                  src={mem2}
                  alt="Team member 2"
                  className="w-44 h-56 rounded-2xl object-cover mx-auto"
                />
                <img
                  src={mem3}
                  alt="Team member 3"
                  className="w-44 h-56 rounded-2xl object-cover mx-auto md:mt-20"
                />
                <img
                  src={mem4}
                  alt="Team member 4"
                  className="w-44 h-56 rounded-2xl object-cover mx-auto"
                />
                <img
                  src={mem5}
                  alt="Team member 5"
                  className="w-44 h-56 rounded-2xl object-cover mx-auto md:-mt-20"
                />
                <img
                  src={mem6}
                  alt="Team member 6"
                  className="w-44 h-56 rounded-2xl object-cover mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
