const skills = [
    { name: "PYTHON", level: 95 },
    { name: "TENSORFLOW", level: 88 },
    { name: "PYTORCH", level: 85 },
    { name: "DATA SCIENCE", level: 92 },
  ];
  
  const Skills = () => {
    return (
      <div className="bg-gradient-to-b from-[#17153B] to-[#2E236C] text-white p-4 flex justify-between items-center">
        <div className="w-[30%] mx-auto">
          <h2 className="font-pixel text-xl md:text-2xl text-primary mb-10 text-center">STATS</h2>
          {skills.map((skill) => (
            <div key={skill.name} className="mb-8">
              <div className="flex justify-between mb-3">
                <span className="font-pixel text-xs text-foreground">{skill.name}</span>
                <span className="font-pixel text-xs text-accent">{skill.level}/100 XP</span>
              </div>
              <div className="h-8 bg-white-400 border-2 border-primary w-full mx-auto">   
                <div
                  className="h-full  bg-gradient-to-r from-red-400 to-purple-900 bg-primary transition-all duration-1000"
                  style={{ width: `${skill.level}%` }} 
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Skills;
  