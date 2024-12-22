import React from "react";
import "tailwindcss/tailwind.css";

// App.js
export default function App() {
  return (
    <div className="font-sans">
      <Header />
      <main className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <About />
          <Skills />
        </div>
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

// Header Component
function Header() {
  return (
    <header className="bg-blue-500 text-white py-6">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-4xl font-bold">Sajal Poudel</h1>
        <nav className="flex space-x-4">
          <a href="#about" className="text-white hover:text-blue-200">About Me</a>
          <a href="#skills" className="text-white hover:text-blue-200">Skills</a>
          <a href="#projects" className="text-white hover:text-blue-200">Projects</a>
          <a href="#experience" className="text-white hover:text-blue-200">Experience</a>
          <a href="#education" className="text-white hover:text-blue-200">Education</a>
          <a href="#contact" className="text-white hover:text-blue-200">Contact</a>
        </nav>
      </div>
    </header>
  );
}

// About Component
function About() {
  return (
    <section id="about" className="bg-gray-100 p-6 rounded shadow">
      <h2 className="text-3xl font-semibold mb-4">About Me</h2>
      <p className="text-gray-700">
        I am a final-year Computer Engineering student with a keen interest in
        deep learning and natural language processing. Proficient in Python,
        PyTorch, TensorFlow, and image analysis, I enjoy taking on challenges
        and solving problems.
      </p>
    </section>
  );
}

// Skills Component
function Skills() {
  return (
    <section id="skills" className="bg-gray-100 p-6 rounded shadow">
      <h2 className="text-3xl font-semibold mb-4">Skills</h2>
      <ul className="list-disc pl-6 text-gray-700">
        <li>Python, SQL, C, C++</li>
        <li>TensorFlow, PyTorch, Pandas, Numpy, Mediapipe</li>
        <li>Machine Learning, Image Analysis, Dynamic Programming</li>
        <li>Strategic Planning, Quick Troubleshooting</li>
      </ul>
    </section>
  );
}

// Projects Component
function Projects() {
  const projects = [
    { name: "GPTmini", description: "Basic GPT model replication using Shakespearean literature.", link: "https://github.com/mousekeys/GPTmini" },
    { name: "Meshmerize", description: "Movement algorithms for robotic competitions.", link: "https://github.com/mousekeys/Meshmerize" },
    { name: "Steganography Research", description: "Coupling Machine Learning with Steganography techniques.", link: "https://github.com/mousekeys/SteganographyResearch" },
    { name: "Hand Gesture Detection", description: "Model using Mediapipe, Numpy, and Pandas.", link: "https://github.com/mousekeys/HandGestureDetection" },
    { name: "Legal Bot", description: "Legal chatbot for context-based legal assistance.", link: "https://github.com/mousekeys/LegalBot" },
  ];

  return (
    <section id="projects" className="my-12">
      <h2 className="text-3xl font-semibold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="p-4 bg-gray-100 rounded shadow">
            <h3 className="text-2xl font-medium mb-2">{project.name}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View on GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
}

// Experience Component
function Experience() {
  return (
    <section id="experience" className="my-12 bg-gray-100 p-6 rounded shadow">
      <h2 className="text-3xl font-semibold mb-4">Experience</h2>
      <h3 className="text-2xl font-medium">IT Lead, Hult Prize (Dec 2023 - Feb 2024)</h3>
      <ul className="list-disc pl-6 text-gray-700">
        <li>Developed a user-friendly web page to enhance online engagement.</li>
        <li>Aligned technology initiatives with marketing objectives.</li>
      </ul>
    </section>
  );
}

// Education Component
function Education() {
  return (
    <section id="education" className="my-12 bg-gray-100 p-6 rounded shadow">
      <h2 className="text-3xl font-semibold mb-4">Education</h2>
      <ul className="list-disc pl-6 text-gray-700">
        <li>Bachelor in Computer Engineering (2020 - Present)</li>
        <li>Higher Secondary (GPA: 3.65, 2020)</li>
        <li>SEE (GPA: 3.85, 2018)</li>
      </ul>
    </section>
  );
}

// Contact Component
function Contact() {
  return (
    <section id="contact" className="my-12 bg-gray-100 p-6 rounded shadow">
      <h2 className="text-3xl font-semibold mb-4">Contact</h2>
      <ul className="list-none text-gray-700">
        <li>Email: <a href="mailto:sajalpoudel40@gmail.com" className="text-blue-500 hover:underline">sajalpoudel40@gmail.com</a></li>
        <li>GitHub: <a href="https://github.com/mousekeys" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">github.com/mousekeys</a></li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/sajal-poudel-10915a202/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">linkedin.com/in/sajal-poudel</a></li>
      </ul>
    </section>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-blue-500 text-white py-4 mt-12">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Sajal Poudel. All rights reserved.</p>
      </div>
    </footer>
  );
}
