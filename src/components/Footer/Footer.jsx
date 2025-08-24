import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left Column - Brand Message */}
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-snug">
              We’re a brands <br />
              <span className="font-normal">best friend</span>
            </h3>
            <a
              href="#contact"
              className="relative text-gray-800 font-medium after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-red-500"
            >
              Let’s talk
            </a>
          </div>
        </div>

        {/* Right Column - 3 Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
              Explore
            </h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-gray-900">Services</a></li>
              <li><a href="#work" className="hover:text-gray-900">Work</a></li>
              <li><a href="#about" className="hover:text-gray-900">About</a></li>
              <li><a href="#blog" className="hover:text-gray-900">Blog</a></li>
              <li><a href="#careers" className="hover:text-gray-900">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
              Services
            </h4>
            <ul className="space-y-2">
              <li><a href="#brand" className="hover:text-gray-900">Brand</a></li>
              <li><a href="#development" className="hover:text-gray-900">Development</a></li>
              <li><a href="#marketing" className="hover:text-gray-900">Marketing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
              Questions?
            </h4>
            <p className="mb-2">Call Us</p>
            <p className="mb-4">0121 345 678</p>
            <p className="mb-2">Email Us</p>
            <p className="mb-4">info@digitalspaniel.co.uk</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-300 pt-6 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6">
        <p className="text-sm text-gray-500">
          Copyright © Digital Spaniel 2019. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="text-gray-500 hover:text-gray-800">
            <FontAwesomeIcon icon={faFacebookF} size="lg" />
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-800">
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-800">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-800">
            <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;