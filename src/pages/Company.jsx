// import { Timeline } from "antd";
import Memories from "../components/Memories";
import Career from "../sections/CompanySection/Career";
import Community from "../sections/CompanySection/Community";
import Team from "../sections/CompanySection/Team";
import Values from "../sections/CompanySection/Values";
import Heads from "../sections/CompanySection/Heads";
import Banner from "../sections/CompanySection/Banner";
import TeamMembers from "../components/TeamMembers";

const Company = () => {
  return (
    <div>
      <Banner />
      <Team />
      <Community />
      <TeamMembers />


      <section className="py-20">
        <h2 className="text-center text-4xl font-bold mb-4">Life at Cygnus</h2>
        <p className="text-center text-gray-600">
          Empowering Growth, Celebrating Innovation, and Building a Culture of
          Excellence.
        </p>
        <Memories />
      </section>

      <Values />
      <Career />
      <Heads />
    </div>
  );
};

export default Company;
