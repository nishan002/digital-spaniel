import React from "react";
import office01 from "../../assets/img/office01/office01.png";
import office02 from "../../assets/img/office02/office02.png";
import office03 from "../../assets/img/office03/office03.png";
import office04 from "../../assets/img/office04/office04.png";

function About() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 leading-snug">
            What are <br /> <span className="font-normal">we all about?</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 grid-cols-4 mb-10">
          <div className="col-span-2 mt-2">
            <img
              src={office01}
              alt="Team working"
              className="object-cover"
              style={{ height: "310px", width: "100%" }}
            />
          </div>
          <div>
            <img
              src={office03}
              alt="Team collaboration"
              className="object-cover"
            />
            <img
              src={office04}
              alt="Motivational quote"
              className="object-cover"
              style={{ width: "200px", float: "right" }}
            />
          </div>
          <div>
            <img
              src={office02}
              alt="Office space"
              className="object-cover"
              style={{ height: "280px" }}
            />
          </div>
        </div>

        {/* Links */}
        <div className="flex space-x-8">
          <a
            href="#about"
            className="relative text-gray-800 font-medium after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-red-500"
          >
            About
          </a>
          <a
            href="#careers"
            className="relative text-gray-800 font-medium after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-red-500"
          >
            Careers
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
