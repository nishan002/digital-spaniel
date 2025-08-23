import { useState } from "react";
import whellies01 from "../../assets/img/whellies01/whellies01.png";
import newspaper02 from "../../assets/img/newspaper02/newspaper02.png";
import makerek from "../../assets/img/makerek/makerek.png";
import newspaper from "../../assets/img/newspaper/newspaper.png";
import rider01 from "../../assets/img/rider01/rider01.png";

const categories = ["All", "Branding", "Web Design", "Digital Marketing"];

const projects = [
  {
    id: 1,
    title: "",
    desc: "",
    image: whellies01, 
  },
  {
    id: 2,
    title: "Make Ideas Happen",
    desc: "A local paper with big ideas needed. A sharp new brand to inspire readers.",
    image: newspaper02,
  },
  {
    id: 3,
    title: "",
    desc: "",
    image: makerek,
  },
  {
    id: 4,
    title: "",
    desc: "",
    image: newspaper,
  },
  {
    id: 5,
    title: "",
    desc: "",
    image: rider01,
  },
];

function RecentProjects() {
  const [active, setActive] = useState("All");

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">
          Some of our <span className="text-gray-500 block">recent projects</span>
        </h2>
        <div className="w-1/2 grid grid-cols-4 gap-2 mb-10 border-b border-gray-200">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`pb-2 relative text-sm font-medium ${
                active === i
                  ? "text-gray-900 border-b-2 border-red-500"
                  : "text-gray-500 hover:text-gray-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`relative rounded-xl overflow-hidden shadow-sm group 
        ${project.id === 4 ? "md:col-span-2" : ""}`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {project.title && (
                <div className="absolute inset-0 bg-black/50 text-white flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="text-sm">{project.desc}</p>
                  <button className="mt-2 text-sm underline">Full project</button>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-between items-center">
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">
            See all work
          </a>
          <div className="flex gap-2">
            <button className="w-10 h-10 flex items-center justify-center rounded-md bg-gray-200 hover:bg-gray-300">
              ‹
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-md bg-gray-800 text-white hover:bg-gray-700">
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RecentProjects;