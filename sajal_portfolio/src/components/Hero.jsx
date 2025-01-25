import React, { useEffect, useState, useRef } from "react";
import { FaDownload } from "react-icons/fa"; // Import download icon
import backgroundImage from "../assets/t1.png"; 

const HeroSection = () => {
  const [text, setText] = useState("");
  const fullText = "MLL DEVELOPER / COMPUTER ENGINEER";
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
  
  const handleDownloadCV = () => {
    const cvUrl = "../assets/t1.png"; // Replace with actual path to your CV
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "CV.pdf"; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    console.log("Downloading CV...");
  };

  return (
    <section id="hero"
      className="relative w-full bg-[#150A25] bg-fixed bg-center bg-cover text-white py-16 overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Background image for parallax
      }}
    >
      <div className="w-[80%] lg:w-[60%] h-screen container mx-auto flex flex-col lg:flex-row items-center relative z-10 pt-16 lg:pt-0">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-center">
          <h1 className="mx-auto font-press text-5xl font-bold mb-6 leading-tight px-6 py-3 rounded-lg shadow-lg hover:text-white hover:shadow-purple-900 transition">
            Sajal Poudel
          </h1>
          <h2 className="text-4xl font-bold text-sm md:text-base text-foreground text-lg mb-8">
            {text}
            <span className="animate-text-blink">_</span>
          </h2>
        </div>
      </div>

      {/* Download CV icon */}
      <div className="mx-auto absolute right-10 bottom-40 z-20 flex flex-col items-center">
        <button
          onClick={handleDownloadCV}
          className="flex items-center justify-center p-3 bg-purple-600 text-white rounded-full shadow-md hover:bg-purple-700 transition duration-300"
        >
          <FaDownload className="w-6 h-6" />
        </button>
        <span className="text-white mt-2">CV.pdf</span> {/* Add margin-top for spacing */}
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#150A25] via-transparent to-bg-black opacity-50 z-0"></div>
    </section>
  );
};

export default HeroSection;
