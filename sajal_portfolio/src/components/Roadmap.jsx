// src/components/Roadmap.js
import React from "react";

const Roadmap = () => {
  const steps = [
    "Create Collection",
    "Social Media",
    "Auto Price Increases",
    "Member Prizes",
    "Merchandise",
    "Mobile Game",
  ];

  return (
    <section id="roadmap" className=" bg-gradient-to-b from-[#150A25] to-gray-900 text-white py-16 relative overflow-hidden">
      <div className="w-[80%] container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Roadmap</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="bg-black p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Step {index + 1}</h3>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
