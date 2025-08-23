import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Spaniel01_gradient from "../../assets/img/Spaniel01_gradient/Spaniel01_gradient.png"

function Header() {
    return (
      <div className="relative grid grid-cols-1 md:grid-cols-2 min-h-screen font-sans antialiased">
        <Navbar />
        {/* Left Side */}
        <div className="flex flex-col justify-between p-10 md:p-16 z-10">
          <div className="flex flex-col justify-center flex-grow">
            <p className="text-pink-600 text-sm tracking-wide uppercase font-semibold mb-4">
              Brand, Dev, Ecom, Marketing
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              We unleash <br />
              <span className="text-gray-700">business potential</span>
            </h1>
            <p className="text-gray-600 mb-8">
              We create brand experiences which are memorable and distinct. 
              Our experienced team create and develop brands with personality and resonance.
            </p>
            <a href="#contact" className="relative font-semibold text-gray-800 underline-hover">
              Let’s talk
            </a>
          </div>
        </div>
  
        {/* Right Side */}
        <div className="relative">
          <div className="absolute inset-0">
            <img src={Spaniel01_gradient} alt="Dog running" className="w-full h-full" />
            <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
          </div>
        </div>
      </div>
    );
  }
  

export default Header;