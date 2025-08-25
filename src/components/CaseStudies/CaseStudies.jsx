import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    image: "/images/case-study-1.png", // replace with your actual image
    title: "Project title here",
    description:
      "Short project description goes here To explain what the project is all about.",
    link: "#",
  },
  {
    id: 2,
    image: "/images/case-study-2.png",
    title: "Another Project",
    description: "Another short description for a different case study.",
    link: "#",
  },
];

export default function CaseStudies() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === caseStudies.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Case Studies</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Every project is different. We like to work collaboratively with our
          clients, tailoring each project to suit the needs of you and your
          business.
        </p>

        {/* Case Study Card */}
        <div className="relative mt-12 flex items-center justify-center">
          <div className="flex flex-col md:flex-row bg-white shadow-xl rounded-2xl overflow-hidden max-w-5xl w-full">
            {/* Image */}
            <div className="md:w-2/3 bg-gray-100">
              <img
                src={caseStudies[current].image}
                alt={caseStudies[current].title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="md:w-1/3 bg-gray-900 text-left p-8 flex flex-col justify-center">
              <h3 className="text-xl font-semibold text-white mb-3">
                {caseStudies[current].title}
              </h3>
              <p className="text-gray-300 mb-6">
                {caseStudies[current].description}
              </p>
              <a
                href={caseStudies[current].link}
                className="text-white underline hover:text-gray-300"
              >
                Read more
              </a>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 md:-left-12 bg-white shadow-md p-2 rounded-full hover:bg-gray-100"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 md:-right-12 bg-white shadow-md p-2 rounded-full hover:bg-gray-100"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
}
