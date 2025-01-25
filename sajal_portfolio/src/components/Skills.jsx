import React from "react";
import { Briefcase, Code, Computer, Github, Laptop, Terminal } from "lucide-react";


const skillCategories = [
  {
    title: "Language",
    icon: <Code className="w-6 h-6" />,
    skills: ["Python","Matlab","C", "C++",,"Javascript","React"],
  },
  {
    title: "Databases",
    icon: <Terminal className="w-6 h-6" />,
    skills: ["SQL", "MongoDB", "Supabase", "RESTful APIs"],
  },
  {
    title: "Frameworks",
    icon: <Computer className="w-6 h-6" />,
    skills: ["PyTorch","Pyspark", "TensorFlow", "pandas","numpy", "sklearn"],
  },
  {
    title: "Development Tools",
    icon: <Laptop className="w-6 h-6" />,
    skills: ["Git", "VS Code","Linux servers","Docker"],
  },
];

const TechnicalSkills = () => {
  return (
    <div className="bg-black">
    <section className=" py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">
        Technical Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="p-6 rounded-lg border border-slate-200 hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white"
          >
            <div className="flex items-center  gap-3 mb-4">
              <div className="text-blue-800">{category.icon}</div>
              <h3 className="font-semibold text-lg text-[#A78BFA] mx-auto ">
                {category.title}
              </h3>
            </div>
            <ul className="space-y-2">
              {category.skills.map((skill, skillIndex) => (
                <li
                  key={skillIndex}
                  className="text-slate-600 text-sm flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default TechnicalSkills;