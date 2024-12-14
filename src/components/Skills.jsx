import reactjs from "../assets/SVG/reactjs.svg";
import tailwind from "../assets/SVG/tailwind.svg";
import java from "../assets/SVG/java.svg";
// import python from "../assets/images/python.png";

const Skills = () => {
  return (
    <div className="bg-[#f9f8ff] py-16">
      <div className="text-center text-2xl font-semibold">
        <h1>Skills</h1>
      </div>

      <div className="flex justify-evenly">
        <img src={reactjs} alt="reactjs" />
        <img src={tailwind} alt="tailwind" />
        <img src={java} alt="javascript" />
        {/* <img src={python} alt="" width="7%" /> */}
      </div>
    </div>
  );
};

export default Skills;
