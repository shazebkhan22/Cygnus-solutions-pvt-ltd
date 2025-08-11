import logo from "../assets/anim/ai2.mp4";
const Enterprise = () => {
  return (
    <section className="py-10 justify-center bg-blue-100">
      <h2 className="flex justify-center text-4xl font-semibold text-gray-700 px-6 py-4">
        Enterprise and Cloud Computing
      </h2>
      <div className="m-10 mx-auto max-w-7xl">
        {/* First Div */}
        <div className="bg-sky-600 max-w-3xl text-xl px-6 py-4 rounded-xl mr-auto mb-10 shadow-xl">
          <div className="flex gap-6 items-center">
            <img
              src={logo}
              className="h-12 w-12 object-cover rounded-lg"
              alt="Logo"
            />
            <h4 className="text-3xl font-bold text-gray-800">
              Desktop Virtualization Solution
            </h4>
          </div>
          <p className="mt-4 text-gray-700 font-extralight leading-relaxed tracking-wide">
            Let your executives have uninterrupted access to their work while on
            the move. Our customized, cost-effective desktop virtualization
            solutions ensure greater flexibility, security, and mobility for
            your customers and employees.
          </p>
        </div>

        {/* Second Div */}
        <div className="bg-sky-300 max-w-3xl text-xl px-6 py-4 rounded-xl ml-auto mb-10 shadow-lg">
          <div className="flex gap-6 items-center">
            <img
              src={logo}
              className="h-12 w-12 object-cover rounded-lg"
              alt="Logo"
            />
            <h4 className="text-3xl font-bold text-gray-800">
              Server Virtualization Solution
            </h4>
          </div>
          <p className="mt-4 text-gray-700 leading-relaxed tracking-wide">
            Let your executives have uninterrupted access to their work while on
            the move. Our customized, cost-effective desktop virtualization
            solutions ensure greater flexibility, security, and mobility for
            your customers and employees. Get a competitive edge with our
            tailor-made server virtualization solutions. Our server
            consolidation and virtualization design help you reduce operational
            costs and the complexity of your data center operations.
          </p>
        </div>

        {/* Third Div */}
        <div className="bg-violet-200 max-w-3xl text-xl px-6 py-4 rounded-xl mr-auto shadow-lg">
          <div className="flex gap-6 items-center">
            <img
              src={logo}
              className="h-12 w-12 object-cover rounded-lg"
              alt="Logo"
            />
            <h4 className="text-3xl font-bold text-gray-800">Servers</h4>
          </div>
          <p className="mt-4 text-gray-700 leading-relaxed tracking-wide">
            Optimize your business processes with our high-performance servers
            and customized server virtualization solutions. Our cost-effective
            solutions help you streamline operations and minimize downtime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Enterprise;
