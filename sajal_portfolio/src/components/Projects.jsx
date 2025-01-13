// src/components/Projects.js
import React from "react";

const Projects = () => {
  const items = [
    { id: 1, name: "Portfolio #12", image: "src\\assets\\test.png" },
    { id: 2, name: "Portfolio #1286", image: "src\\assets\\test.png" },
    { id: 3, name: "Portfolio #1287", image: "src\\assets\\test.png" },
    { id: 4, name: "Portfolio #1288", image: "src\\assets\\test.png" },
    { id: 4, name: "Portfolio #1288", image: "src\\assets\\test.png" },
    { id: 4, name: "Portfolio #1288", image: "src\\assets\\test.png" },
  ];

  return (
    <section id="portfolio" className="bg-gradient-to-b from-black to-[#150A25] text-white py-16">
      <div className="container w-[80%] mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Latest Projects Listings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9">
          {items.map((item) => (
            <div key={item.id} className="bg-gray-900 rounded-lg p-4">
              <img src={item.image} alt={item.name} className="rounded-lg mb-4" />
              <h3 className="font-bold">{item.name}</h3>
              <a href="#" className="block mt-2 bg-purpleLight text-white py-2 rounded-md">
                Click Here
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
