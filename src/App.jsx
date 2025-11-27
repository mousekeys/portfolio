// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Blogs from "./components/Blogs";
import FooterEmailForm from "./components/FooterEmailForm ";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import VantaBackground from './components/Background';
import CV from "./components/CV";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Hero />
        <About />
        {/* <WorkExperience /> */}
        <Skills />
        {/* <Blogs /> */}
        <FooterEmailForm />
      </div>
    </Router>
  );
};

export default App;