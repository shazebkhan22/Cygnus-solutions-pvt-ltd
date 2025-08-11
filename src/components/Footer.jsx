import footerLogo from "../assets/logo/cygnus_footer.png";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-blue-900">
      <div className="max-w-screen-xl mx-auto px-6 py-12">
        {/*----------- First Section (Logo and About) -----------*/}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-sm text-white">
          {/* Logo and Description */}
          <div className="flex flex-col items-start">
            <img className="mb-5 w-40" src={footerLogo} alt="Cygnus Logo" />
            <p className="leading-6 text-white">
              Cygnus was founded in 2000 with a mission to provide
              mission-critical IT solutions that integrate advanced technologies
              to meet market demands and exceed customer expectations.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <p className="text-xl font-medium mb-4">COMPANY</p>
            <ul className="flex flex-col gap-2">
              <li>
                <button
                  onClick={() => navigate("/")}
                  className="hover:text-blue-300 transition"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/solutions")}
                  className="hover:text-blue-300 transition"
                >
                  Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/industries")}
                  className="hover:text-blue-300 transition"
                >
                  Industries
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/casestudies")}
                  className="hover:text-blue-300 transition"
                >
                  Case Studies
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/company")}
                  className="hover:text-blue-300 transition"
                >
                  Company
                </button>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <p className="text-xl font-medium mb-4">LINKS</p>
            <ul className="flex flex-col gap-2">
              <li>
                <button
                  onClick={() => navigate("/careers")}
                  className="hover:text-blue-300 transition"
                >
                  Careers
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/terms")}
                  className="hover:text-blue-300 transition"
                >
                  Terms
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/privacy")}
                  className="hover:text-blue-300 transition"
                >
                  Privacy
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/cookies")}
                  className="hover:text-blue-300 transition"
                >
                  Cookies
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <p className="text-xl font-medium text-white mb-4">GET IN TOUCH</p>
            <ul className="flex flex-col gap-2">
              <li>sales@cygnussolutions.co.in</li>
              <li>+91-022-49636820</li>
              <li className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-500 transition"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.linkedin.com/company/cygnus-information-solutions-pvt-ltd-/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition"
                >
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/*----------- Footer Bottom Section (Copyright) -----------*/}
        <div className="py-5">
          <p className="text-sm text-center text-white">
            Copyright 2024 @ Cygnus - All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
