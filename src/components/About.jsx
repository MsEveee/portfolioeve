import webIcon from "../assets/SVG/webIcon.svg";

const About = () => {
  return (
    <div className="bg-[#f9f8ff]">
      <div className="bg-gray-50 py-10">
        <div className="flex gap-2 justify-center text-3xl font-bold mb-4">
          <h1 className="text-blue-400">About</h1>
          <h1>Me</h1>
        </div>
        <p className="text-center  text-gray-700 min-w-xl mx-auto leading-relaxed">
          I'm Evelyn Yaa Biadoo, a growth-oriented Junior Software Engineer with
          a strong foundation in web development technologies. Drawing on my
          background in customer service, I prioritize user-centric design and
          innovative problem-solving to create impactful digital solutions. By
          blending technical expertise with a keen design sensibility, I aim to
          deliver exceptional results that consistently exceed expectations. I’m
          deeply passionate about continuous learning and thrive on embracing
          new challenges to stay ahead in the ever-evolving tech landscape.
        </p>
      </div>

      <div className="flex flex-wrap justify-evenly py-10 gap-6">
        
        {/* <div className="bg-white shadow-md rounded-lg border transform hover:scale-105 hover:shadow-2xl duration-500 border-gray-200 p-6 max-w-xl w-full sm:w-80 md:w-96 transition-all">
          <span className="text-gray-700 py-8 text-lg leading-relaxed">
            In my journey, I've had the opportunity to collaborate with a range
            of teams and clients, gaining hands-on experience across various
            industries. This has equipped me with a thorough understanding of
            the development process, including conceptualization, strategic
            planning, execution, and final deployment.
          </span>
        </div> */}

        
        <div className="bg-white shadow-md rounded-lg border border-gray-200 p-6 max-w-xl w-full sm:w-60 md:w-96 transform hover:scale-105 hover:shadow-2xl duration-500 transition-all">
          <div className="flex justify-center">
            <img src={webIcon} alt="" className="h-56" />
          </div>
          <h2 className="font-bold text-lg text-center mt-4">Web Developer</h2>
          <p className="text-center mt-2">
            A dynamic web developer proficient in frontend.
          </p>
        </div>
        
        <div className="bg-white shadow-md rounded-lg border border-gray-200 p-6 max-w-xl w-full sm:w-60 md:w-96 transform hover:scale-105 hover:shadow-2xl duration-500 transition-all">
          <div className="flex justify-center">
            <img src={webIcon} alt="" className="h-56" />
          </div>
          <h2 className="font-bold text-lg text-center mt-4">Web Developer</h2>
          <p className="text-center mt-2">
            A dynamic web developer proficient in frontend.
          </p>
        </div>
        
        <div className="bg-white shadow-md rounded-lg border border-gray-200 p-6 max-w-xl w-full sm:w-60 md:w-96 transform hover:scale-105 hover:shadow-2xl duration-500 transition-all">
          <div className="flex justify-center">
            <img src={webIcon} alt="" className="h-56" />
          </div>
          <h2 className="font-bold text-lg text-center mt-4">Web Developer</h2>
          <p className="text-center mt-2">
            A dynamic web developer proficient in frontend.
          </p>
        </div>

       
      </div>
    </div>
  );
};

export default About;
