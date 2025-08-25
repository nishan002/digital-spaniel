import React from "react";
import "../../assets/fonts.css"; // Ensure this path is correct based on your project structure

function Capabilities() {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-20">
      <div className="max-w-6xl px-6 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Left Column */}
        <div>
          <h2 className="font-avant text-4xl text-gray-800 mb-4">
            What are <br /> <span className="text-gray-600">we capable of</span>
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed w-80">
            By focusing on design as an enabler and putting a huge emphasis on
            our clients as co-producers, we create innovative, sustainable
            marketing that enhances brand experience and user engagement.
          </p>
          <a
            href="#"
            className="text-gray-800 font-semibold border-b-2 border-pink-600 hover:text-pink-600 transition"
          >
            Our process
          </a>
        </div>

        {/* Right Column */}
        <div className="grid grid-cols-2 gap-10 text-gray-700">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-sm tracking-wide mb-4">BRAND</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                Brand Strategy <span className="ml-2">➝</span>
              </li>
              <li>Logo & Name</li>
              <li>Identity & Collateral</li>
            </ul>
          </div>

          {/* Marketing */}
          <div>
            <h3 className="font-bold text-sm tracking-wide mb-4">MARKETING</h3>
            <ul className="space-y-3">
              <li>Digital</li>
              <li>Market Research</li>
            </ul>
          </div>

          {/* Development */}
          <div>
            <h3 className="font-bold text-sm tracking-wide mb-4 mt-6 md:mt-0">
              DEVELOPMENT
            </h3>
            <ul className="space-y-3">
              <li>eCommerce</li>
              <li>Web Development</li>
              <li>Mobile Apps</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Capabilities;