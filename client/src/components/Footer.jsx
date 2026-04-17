import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import logo from "../assets/nav-logo.png"; // <-- your logo path

const Footer = () => {
  return (
    <footer className="px-6 py-12 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-gray-300">

      <div className="max-w-[1100px] mx-auto max-sm:text-center">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* BRAND */}
          <div>
            <div className="flex items-center max-sm:justify-center gap-3">
              <img
                src={logo}
                alt="CareerIQ AI"
                className="h-12 w-12 rounded-xl shadow-lg"
              />
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                CareerIQ AI
              </h2>
            </div>

            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              AI-powered resume analysis & job matching platform to boost your career growth 🚀
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {["Home", "Dashboard", "Upload Resume", "Features"].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="hover:text-blue-400 transition duration-300 hover:translate-x-1 inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {["About", "Careers", "Contact", "Blog"].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="hover:text-green-400 transition duration-300 hover:translate-x-1 inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>

            <div className="flex gap-4 max-sm:justify-center">
              <a className="p-3 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md hover:scale-110 hover:shadow-lg transition duration-300">
                <FaGithub />
              </a>

              <a className="p-3 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md hover:scale-110 hover:shadow-lg transition duration-300">
                <FaLinkedin />
              </a>

              <a className="p-3 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md hover:scale-110 hover:shadow-lg transition duration-300">
                <FaTwitter />
              </a>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-sm text-gray-400 mb-2">Subscribe</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-3 py-2 rounded-l-xl bg-gray-900 border border-gray-700 text-sm focus:outline-none"
                />
                <button className="px-4 py-2 rounded-r-xl bg-gradient-to-r from-blue-500 to-green-400 text-white hover:scale-105 transition">
                  Go
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="my-10 h-[1px] bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">

          <p>© {new Date().getFullYear()} CareerIQ AI. All rights reserved.</p>

          <div className="flex gap-5">
            <a href="#" className="hover:text-blue-400 transition">Privacy</a>
            <a href="#" className="hover:text-green-400 transition">Terms</a>
            <a href="#" className="hover:text-gray-200 transition">Security</a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
