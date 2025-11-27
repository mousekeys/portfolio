import React from "react";
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="bg-black text-white min-h-screen flex flex-col justify-center items-center px-6">
      {/* Title */}
      <div className="text-center mb-6">
        <h1 className="text-5xl font-bold text-[#A78BFA]">Sajal Poudel</h1>
        <p className="text-xl mt-2">Computer Engineering Student</p>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mb-6">
      <a
      href="/cv"
      className="bg-blue-700 text-white hover:bg-[#A78BFA] hover:text-gray-900  px-4 py-2 rounded-md shadow-md transition"
    >
      My CV
    </a>
        <a
          href="/blog"
          className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md shadow-md transition"
        >
          My Blog
        </a>
        <a
          href="/plans"
          className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md shadow-md transition"
        >
          Idea Dumps
        </a>
      </div>

      {/* Links */}
      <div className="text-center space-y-4 text-gray-300">
        <p>
        My current {" "}
          <a
            href="/plans"
            className="text-blue-400 underline hover:text-blue-300"
          >
            plans
          </a>
          .🤖
        </p>
        <p>
          I build things I like.{" "}
          <a
            href="/mini-local"
            className="text-blue-400 underline hover:text-blue-300"
          >
          (Some Mini Projects)
          </a>
          🎯
        </p>
        
        <p>
          
           I  dump stuff on notes about{" "}
           <br></br>
          <a
            href="/things-learned"
            className="text-blue-400 underline hover:text-blue-300"
          >
             things I learned
          </a>
          .👾
        </p>
      </div>


      <div className=" text-center mt-6">
        <h2 className="text-xl font-semibold">Recent Blogs</h2>
        <ul className="list-disc list-inside mt-2 text-gray-300">
          <li>
            <a
              href="/blog/2024"
              className="text-blue-400 underline hover:text-blue-300"
            >
              💥 THE PAST LORE 💥
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
