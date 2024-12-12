import { FileInput } from "lucide-react";
import bidigreen from "../assets/images/bidigreen.png";
import yonell from "../assets/images/yonell.png";
import taskhub from "../assets/images/taskhub.png";
import todo from "../assets/images/todo.png";

const Projects = () => {
  return (
    <div className="bg-[#f9f8ff] py-12">
      <div className="text-center px-4 sm:px-8">
        <h1 className="font-semibold py-4 text-xl sm:text-2xl lg:text-3xl">
          My Projects
        </h1>
        <p className="text-sm sm:text-base">
          Discover my work and experience the fusion of innovation and design.
          Every project embodies a dedication to elegance, practicality, and
          delivering exceptional user experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-16 px-4 sm:px-8 lg:px-16 py-10">
        {[
          {
            image: bidigreen,
            alt: "Bidigreen Ghana Limited",
            title: "Bidigreen Ghana Limited",
            description: "A client's website for charcoal production",
            link: "https://bidi-green.vercel.app/",
            bgColor: "bg-green-300",
            textColor: "text-white",
            buttonColor: "bg-green-600",
          },
          {
            image: yonell,
            alt: "yonell-ventures",
            title: "Yonell-Ventures",
            description:
              "A client's website for household cleaning supplies and skincare products",
            link: "https://yonellventures.vercel.app/",
            bgColor: "bg-yellow-300",
            textColor: "text-white",
            buttonColor: "bg-yellow-600",
          },
          {
            image: taskhub,
            alt: "taskhub",
            title: "TaskHub",
            description:
              "A platform for booking professionals for home services.",
            link: "https://taskerhub.netlify.app/",
            bgColor: "bg-blue-300",
            textColor: "text-white",
            buttonColor: "bg-blue-600",
          },
          {
            image: todo,
            alt: "todo-list",
            title: "TODO-LIST",
            description: "A platform for planning your schedule for the day.",
            link: "https://todo-list-omega-nine-47.vercel.app/",
            bgColor: "bg-purple-400",
            textColor: "text-white",
            buttonColor: "bg-purple-600",
          },
        ].map((project, index) => (
          <div
            key={index}
            className="group relative w-full max-w-sm mx-auto overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={project.image}
              alt={project.alt}
              className="w-full h-64 object-cover transform transition duration-300 group-hover:scale-110"
            />
            <div
              className={`absolute inset-0 ${project.bgColor} bg-opacity-50 flex flex-col justify-center items-center text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
            >
              <h2 className={`text-lg sm:text-xl lg:text-2xl font-bold ${project.textColor} mb-2`}>
                {project.title}
              </h2>
              <p className="text-sm sm:text-base text-black mb-4">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-4 py-2 ${project.buttonColor} text-white text-sm sm:text-base rounded`}
              >
                <FileInput />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
