import React from 'react';

const CV = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 space-y-8 font-poppins">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-purple-400">Sajal Poudel</h1>
        <p className="text-lg mt-2">
          +977 9865462432 | sajalpoudel40@gmail.com |{' '}
          <a href="#" className="underline text-blue-400">
            GitHub
          </a>{' '}
          |{' '}
          <a href="#" className="underline text-blue-400">
            LinkedIn
          </a>
        </p>
      </header>

      <section>
        <h2 className="text-2xl font-bold text-purple-300">Summary</h2>
        <p className="mt-4">
          I am a final-year Computer Engineering student with a keen interest in deep learning and natural language processing. As a data scientist, I am proficient in Python, PyTorch, TensorFlow, and image analysis, with strong problem-solving skills demonstrated through various technical projects. I also love taking on challenges.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-purple-300">Experience</h2>
        <div className="mt-4 space-y-4">
          <div>
            <h3 className="text-xl font-bold">Hult Prize (IT Lead)</h3>
            <p className="text-sm text-gray-400">2023 Dec - 2024 Feb</p>
            <p className="mt-2">
              Utilized front-end development skills to create a visually engaging and user-friendly webpage, enhancing online user experience. Strategically drove digital innovation to align with marketing objectives, optimizing operations, and enhancing the overall digital presence.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Freelance (ML Engineer)</h3>
            <p className="mt-2">
              Worked with various companies to create ML models such as hypo-glaucoma detection using a novel biological optimization algorithm, achieving 89% detection accuracy. Learned to communicate effectively with teams and gained experience with optimization algorithms.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-purple-300">Projects and Achievements</h2>
        <ul className="mt-4 list-disc list-inside space-y-2">
          <li>
            <strong>GPT:</strong> Developed a GPT model replica trained on Shakespearean literature, gaining hands-on experience with tokenizers and "Attention is All You Need" architecture.
          </li>
          <li>
            <strong>Robotics:</strong> Crafted precise movement algorithms for robots, optimized navigation, and performed real-time troubleshooting during competitions.
          </li>
          <li>
            <strong>Steganography Research:</strong> Conducted intensive research on ML and steganography, developing a Steganalysis model using shallow ML techniques.
          </li>
          <li>
            <strong>Legal Chatbot:</strong> Created a chatbot using RAG and LLaMA models for context-based legal assistance. Led a team to enhance collaboration and productivity.
          </li>
          <li>
            <strong>ASCII Art:</strong> Developed a program to convert images into ASCII art using filters and luminance values for edge detection and pixel mapping.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-purple-300">Skills & Interests</h2>
        <div className="mt-4">
          <p><strong>Skills:</strong> Python (pandas, numpy, tensorflow), Excel, Apache Spark, SQL, PyTorch, Machine Learning, Image Analysis, C, C++, Matlab, Strategic Planning, Dynamic Programming.</p>
          <p><strong>Interests:</strong> Hiking, Cycling, Football, Drawing, Coding.</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-purple-300">Education</h2>
        <div className="mt-4">
          <p><strong>2020 - Present:</strong> Bachelor in Computer Engineering</p>
          <p><strong>2018 - 2020:</strong> Higher Secondary (NEB)</p>
        </div>
      </section>
    </div>
  );
};

export default CV;
