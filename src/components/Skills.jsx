import reactjs from "../assets/SVG/reactjs.svg"
import tailwind from "../assets/SVG/tailwind.svg"
import java from "../assets/SVG/java.svg"

const Skills = () => {
  return (
    <div className="bg-[#f9f8ff]">
      <div className="text-center text-lg font-bold">
        <h1>Skills</h1>
      </div>

      <div className="flex justify-evenly">
        <img src={reactjs} alt="reactjs" />
        <img src={tailwind} alt="tailwind" />
        <img src={java} alt="javascript" />
      </div>
    </div>
  );
};

export default Skills;
