import React from "react";

export function ExperienceCard({ imageSrc, title, description }) {
  return (
    <div className="flex flex-col pb-6 w-full rounded-2xl shadow-[4px_7px_26px_rgba(0,0,0,0.12)] max-md:mt-5 max-md:max-w-full">
      <div className="px-16 pt-9 pb-4 bg-gray-900 rounded-lg text-[white] max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[35%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src={imageSrc}
              alt="Work experience illustration"
              className="object-contain grow shrink-0 max-w-full aspect-[1.06] w-[122px] max-md:mt-10"
            />
          </div>
          <div className="flex flex-col ml-5 w-[65%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-2.5 font-medium text-white max-md:mt-10">
              <h2 className="text-2xl font-semibold leading-none">{title}</h2>
              <p className="font-sans mt-3.5 text-xs leading-3 max-md:mr-2.5">{description}</p>
              <button 
                className="px-7 pt-2.5 pb-4 mt-3 max-w-full text-xs leading-4 text-center rounded-xl border border-purple-800 border-solid bg-indigo-950 w-[119px] max-md:px-5"
                tabIndex="0"
                aria-label="Learn more about work experience"
              >
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}