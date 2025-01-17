import React from "react";
import { ExperienceCard } from "./ExperienceCard";
import { useEffect, useState } from 'react';
import star from "../assets/star.png";


const experienceData = [
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/4b1eeb5bfcb701bab675cc6f93b573aec12a2cd7410c3753a90f24e65568cd45?apiKey=8973cd7007234792a068b2cece109bce&",
    title: "GPT",
    description: "A replica of GPT model from 'Attention is All You Need' paper by OpenAI with training done on shakespearian literature.",
    link:"https://www.google.com",
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/4e758e53bd2b0603c63f10857f81398043698cf00877c6c3ef3fb38611fc94f3?apiKey=8973cd7007234792a068b2cece109bce&",
    title: "Legal Sathi",
    description: "A RAG finetuned model using pdf documents of legal laws to provide information on the legal laws of Nepal.",
    link:"https://www.google.com",
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/4e758e53bd2b0603c63f10857f81398043698cf00877c6c3ef3fb38611fc94f3?apiKey=8973cd7007234792a068b2cece109bce&",
    title: "Keypoints",
    description: "A hand keypoint and face keypoint detection model using OpenCV and MediaPipe.",
    link:"https://www.google.com",
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/4e758e53bd2b0603c63f10857f81398043698cf00877c6c3ef3fb38611fc94f3?apiKey=8973cd7007234792a068b2cece109bce&",
    title: "Steganalysis",
    description: "Performing steganalysis on images using deepm image preprocessing and ML algorithms.",
    link:"https://www.google.com",
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/4e758e53bd2b0603c63f10857f81398043698cf00877c6c3ef3fb38611fc94f3?apiKey=8973cd7007234792a068b2cece109bce&",
    title: "Glaucoma",
    description: "Glaucoma detection with novel approach of utilizng biological optimization algorithms.",
    link:"https://www.google.com",
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/4e758e53bd2b0603c63f10857f81398043698cf00877c6c3ef3fb38611fc94f3?apiKey=8973cd7007234792a068b2cece109bce&",
    title: "Conflict",
    description: "ACLED dataset to predict conflict in Regions based on various factors.",
    link:"https://www.google.com",
  },
];


const WorkExperience = () => {
  const starPoints = [
    { x: '5%', y: '10%' },
    { x: '90%', y: '10%' },
    { x: '4%', y: '60%' },
    { x: '83%', y: '95%' },
    { x: '94%', y: '25%' },
  ];

  return (
    <div id="projects"className="flex flex-col pt-28 pb-16 text-white bg-gradient-to-b from-black to-[#151515] rounded-none max-md:pt-24 relative">

      <h1 className=" self-start text-4xl tracking-wider mx-auto text-center text-white">Inventory</h1>
      <div className="  mt-11 mx-auto max-md:mt-10 max-md:mr-0.5 max-md:max-w-full">
        <div className="w-[80%] mx-auto grid grid-cols-2 gap-5 max-md:grid-cols-1">
          {experienceData.map((experience, index) => (
            <div key={index} className="flex flex-col">
              <ExperienceCard {...experience} />
            </div>
          ))}
        </div>
      </div>
      
   
       

    </div>
  );
};

export default WorkExperience;