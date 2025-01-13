
import React from "react";
import testImage from "../assets/test.png"; 
import backgroundImage from "../assets/t1.png"; 
import { useEffect, useState, useRef } from "react";

const HeroSection = () => {
  const [text, setText] = useState("");
  const fullText = "MLL ENGINEER / COMPUTER ENGINEER";
  const indexRef = useRef(0); // To keep track of the current index without triggering renders
  
  useEffect(() => {
    const timer = setInterval(() => {
      if (indexRef.current < fullText.length) {
        setText((prev) => prev + fullText.charAt(indexRef.current));
        indexRef.current += 1;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    // Cleanup on unmount
    return () => clearInterval(timer);
  }, []); // Dependency array ensures this runs only once
  
  return (
    
    <section
      className="relative bg-[#150A25] bg-fixed bg-center bg-cover text-white py-16 overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Background image for parallax
      }}
    >
      <div className=" h-screen container mx-auto flex flex-col lg:flex-row items-center relative z-10">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-center">
          <h1 className="font-press text-5xl font-bold mb-6 leading-tight">
            Sajal Poudel
          </h1>
          <h2 className="text-4xl font-bold text-sm md:text-base text-foreground text-lg mb-8">
        {text}
        <span className="animate-text-blink">_</span>
      </h2>
  
          <a
            href="#"
            className="bg-gray-900 text-Red px-6 py-3 rounded-lg shadow-lg  hover:bg-purple-900  transition">
            Github
          </a>
        </div>


       

      </div>


      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-bg-[#150A25] opacity-50 z-0"></div>
    </section>
  );
};

export default HeroSection;

