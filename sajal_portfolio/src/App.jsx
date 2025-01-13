// src/App.js
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Blogs from "./components/Blogs";
import FooterEmailForm from "./components/FooterEmailForm ";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";

const App = () => {
  return (
    <div >
      <Header />
      <Hero />

      {/* <Projects/> */}
      <WorkExperience/>
      <Skills />
      <Blogs />
      <FooterEmailForm/>
    </div>
  );
};

export default App;
