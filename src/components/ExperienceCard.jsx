import React from "react";

export function ExperienceCard({ imageSrc, title, description, link }) {
  return (
    <div className="flex flex-col pb-6 w-full rounded-2xl shadow-[4px_7px_26px_rgba(0,0,0,0.12)] max-md:mt-5 max-md:max-w-full transform transition-all duration-300 hover:translate-y-[-10px] hover:bg-gray-800 hover:shadow-white">
      <div className="px-16 pt-9 pb-4 bg-gray-900 rounded-lg text-[white] max-md:px-5 max-md:max-w-full transition-all duration-300">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[35%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src={imageSrc}
              alt="Work experience illustration"
              className="object-contain grow shrink-0 max-w-full aspect-[1.06] w-[122px] max-md:mt-10 transition-all duration-300"
            />
          </div>
          <div className="flex flex-col ml-5 w-[65%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-2.5 font-medium text-white max-md:mt-10">
              <h2 className="text-2xl font-semibold leading-2">{title}</h2>
              <p className="font-sans font-bold text-l mt-3.5 leading-5 max-md:mr-5.5">
                {description}
              </p>
              <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-7 pt-2.5 pb-3 mt-3 text-s max-w-full text-xs leading-none text-center rounded-xl border border-purple-800 border-solid bg-indigo-950 w-[119px] max-md:px-5 transition-all duration-300 hover:bg-purple-800"
                aria-label="Learn more about work experience"
              >
                PEAK
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
