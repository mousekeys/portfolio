// src/components/Blogs.js
import React from "react";

const Blogs = () => {
  const steps = [
    "Create Collection",
    "Social Media",
    "dsfsfdsf"
  ];

  return (
    <section id="Blogs" className=" bg-gradient-to-b from-[#2E236C] to-[#433D8B] text-white py-16 relative overflow-hidden">
      <div className="w-[80%] container mx-auto text-center ">
        <h2 className="text-3xl font-bold mb-6">Blogs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col pb-6 w-full rounded-2xl bg-gray-900 shadow-[4px_7px_26px_rgba(0,0,0,0.12)] max-md:mt-5 max-md:max-w-full transform transition-all duration-300 hover:translate-y-[-10px] hover:bg-gray-800 hover:shadow-white">
              <h3 className="text-xl font-bold py-3 ">Blog {index + 1}</h3>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
