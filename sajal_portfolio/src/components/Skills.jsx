const skills = {
  language: [
    { name: "PYTHON", level: 95, imgSrc: "path_to_python_image.jpg" },
    { name: "JAVA", level: 88, imgSrc: "path_to_java_image.jpg" },
    { name: "JAVASCRIPT", level: 85, imgSrc: "path_to_javascript_image.jpg" },
  ],
  framework: [
    { name: "TENSORFLOW", level: 88, imgSrc: "path_to_tensorflow_image.jpg" },
    { name: "PYTORCH", level: 85, imgSrc: "path_to_pytorch_image.jpg" },
    { name: "KUBERNETES", level: 90, imgSrc: "path_to_kubernetes_image.jpg" },
    { name: "TENSORFLOW", level: 88, imgSrc: "path_to_tensorflow_image.jpg" },
  ],
  database: [
    { name: "MYSQL", level: 80, imgSrc: "path_to_mysql_image.jpg" },
    { name: "MONGO DB", level: 70, imgSrc: "path_to_mongo_image.jpg" },
    { name: "POSTGRESQL", level: 85, imgSrc: "path_to_postgresql_image.jpg" },
  ],
};

const Skills = () => {
  return (
    <div className="bg-gradient-to-b from-[#17153B] to-[#2E236C] text-white p-4">
      <h2 className="font-pixel text-xl md:text-2xl text-primary mb-10 text-center">STATS</h2>
      <div className="w-[80%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-auto">
        
        {/* Language Column */}
        <div className="flex flex-col">
          <h3 className="font-pixel text-lg text-primary text-center mb-6">Languages</h3>
          {skills.language.map((skill) => (
            <div key={skill.name} className="flex flex-col mb-8">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-3">
                  <img src={skill.imgSrc} alt={`${skill.name} icon`} className="w-6 h-6" />
                  <span className="font-pixel text-xs text-foreground">{skill.name}</span>
                </div>
                <span className="font-pixel text-xs text-accent">{skill.level}/100 XP</span>
              </div>
              <div className="h-8 bg-white-400 border-2 border-primary w-full mx-auto">   
                <div
                  className="h-full bg-gradient-to-r from-red-400 to-purple-900 bg-primary transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Framework Column */}
        <div className="flex flex-col">
          <h3 className="font-pixel text-lg text-primary text-center mb-6">Frameworks</h3>
          {skills.framework.map((skill) => (
            <div key={skill.name} className="flex flex-col mb-8">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-3">
                  <img src={skill.imgSrc} alt={`${skill.name} icon`} className="w-6 h-6" />
                  <span className="font-pixel text-xs text-foreground">{skill.name}</span>
                </div>
                <span className="font-pixel text-xs text-accent">{skill.level}/100 XP</span>
              </div>
              <div className="h-8 bg-white-400 border-2 border-primary w-full mx-auto">   
                <div
                  className="h-full bg-gradient-to-r from-red-400 to-purple-900 bg-primary transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Database Column */}
        <div className="flex flex-col">
          <h3 className="font-pixel text-lg text-primary text-center mb-6">Databases</h3>
          {skills.database.map((skill) => (
            <div key={skill.name} className="flex flex-col mb-8">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-3">
                  <img src={skill.imgSrc} alt={`${skill.name} icon`} className="w-6 h-6" />
                  <span className="font-pixel text-xs text-foreground">{skill.name}</span>
                </div>
                <span className="font-pixel text-xs text-accent">{skill.level}/100 XP</span>
              </div>
              <div className="h-8 bg-white-400 border-2 border-primary w-full mx-auto">   
                <div
                  className="h-full bg-gradient-to-r from-red-400 to-purple-900 bg-primary transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Skills;
