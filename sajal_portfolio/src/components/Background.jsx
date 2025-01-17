import  Background3D from "./Background3D";

const Index = () => {
  return (
    <div className=" min-h-screen relative">
      <Background3D />
     
      <div className=" w-[60%] h-screen container mx-auto flex flex-col lg:flex-row items-center relative z-10">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-center">
          <h1 className="mx-auto font-press text-5xl font-bold mb-6 leading-tight px-6 py-3 rounded-lg shadow-lg hover:text-white hover:shadow-purple-900 transition">
            Sajal Poudel
          </h1>
          <h2 className="text-4xl font-bold text-sm md:text-base text-foreground text-lg mb-8">
            ML
            <span className="animate-text-blink">_</span>
          </h2>
  
          <a
            href="https://github.com/mousekeys"
            className="bg-transparent text-[#A891C4] px-6 py-3 rounded-lg shadow-lg hover:bg-black hover:text-white hover:shadow-purple-900 transition"
          >
            Github
          </a>
        </div>
      </div>

    </div>
  );
};

export default Index;
