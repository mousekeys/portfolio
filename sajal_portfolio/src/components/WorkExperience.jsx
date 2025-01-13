import React from "react";
import { ExperienceCard } from "./ExperienceCard";

const experienceData = [
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/4e758e53bd2b0603c63f10857f81398043698cf00877c6c3ef3fb38611fc94f3?apiKey=8973cd7007234792a068b2cece109bce&",
    title: "CIB on the Mobile",
    description: "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/4b1eeb5bfcb701bab675cc6f93b573aec12a2cd7410c3753a90f24e65568cd45?apiKey=8973cd7007234792a068b2cece109bce&",
    title: "CIB on the Mobile",
    description: "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
  }
];

export function WorkExperience() {
  return (
    <div className="flex flex-col pt-28 pb-16 text-white bg-gray-800 rounded-none max-md:pt-24">
      <h1 className="self-start text-4xl tracking-wider mx-auto text-center text-white">Inventory</h1>
      <div className=" w-[80%] mt-11 mx-auto max-md:mt-10 max-md:mr-0.5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {experienceData.map((experience, index) => (
            <div key={index} className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <ExperienceCard {...experience} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}