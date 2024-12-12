import { FileInput } from "lucide-react";
import bidigreen from "../assets/images/bidigreen.png";
import yonell from "../assets/images/yonell.png";
import taskhub from "../assets/images/taskhub.png";
import todo from "../assets/images/todo.png";

const Projects = () => {
  return (
    <div className="bg-[#f9f8ff] py-12">
      <div className="text-center">
        <h1 className="font-semibold py-4 text-2xl">My Projects</h1>
        <p>
          Discover my work and experience the fusion of innovation and design.
          Every project embodies a dedication to elegance, practicality, and
          delivering exceptional user experiences.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-10 px-48 py-10">
        <div class="group relative w-full max-w-sm mx-auto overflow-hidden rounded-lg shadow-lg">
          <img
            src={bidigreen}
            alt="Bidigreen Ghana Limited"
            class="w-full h-64 object-cover transform transition duration-300 group-hover:scale-110"
          />
          <div class="absolute inset-0 bg-green-300 bg-opacity-50 flex flex-col justify-center items-center text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <h2 class="text-lg md:text-xl lg:text-2xl font-bold text-white mb-2">
              Bidigreen Ghana Limited
            </h2>
            <p class="text-sm md:text-base text-black mb-4">
              A client's website for charcoal production
            </p>
            <a
              href="https://bidi-green.vercel.app/"
              target="_blank"
              class="px-4 py-2 bg-green-600 text-white text-sm md:text-base rounded"
            >
              <FileInput />
            </a>
          </div>
        </div>
        <div class="group relative w-full max-w-sm mx-auto overflow-hidden rounded-lg shadow-lg">
          <img
            src={yonell}
            alt="yonell-ventures"
            class="w-full h-64 object-cover transform transition duration-300 group-hover:scale-110"
          />
          <div class="absolute inset-0 bg-yellow-300 bg-opacity-50 flex flex-col justify-center items-center text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <h2 class="text-lg md:text-xl lg:text-2xl font-bold text-white mb-2">
              Yonell-Ventures
            </h2>
            <p class="text-sm md:text-base text-black mb-4">
              A client's website for household cleaning supplies and skincare
              products
            </p>
            <a
              href="https://yonellventures.vercel.app/"
              target="_blank"
              class="px-4 py-2 bg-yellow-600 text-white text-sm md:text-base rounded"
            >
              <FileInput />
            </a>
          </div>
        </div>
        <div class="group relative w-full max-w-sm mx-auto overflow-hidden rounded-lg shadow-lg">
          <img
            src={taskhub}
            alt="taskhub"
            class="w-full h-64 object-cover transform transition duration-300 group-hover:scale-110"
          />
          <div class="absolute inset-0 bg-blue-300 bg-opacity-50 flex flex-col justify-center items-center text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <h2 class="text-lg md:text-xl lg:text-2xl font-bold text-white mb-2">
              TaskHub
            </h2>
            <p class="text-sm md:text-base text-black mb-4">
              A platform for booking professionals for home services.
            </p>
            <a
              href="https://taskerhub.netlify.app/"
              target="_blank"
              class="px-4 py-2 bg-blue-600 text-white text-sm md:text-base rounded"
            >
              <FileInput />
            </a>
          </div>
        </div>
        <div class="group relative w-full max-w-sm mx-auto overflow-hidden rounded-lg shadow-lg">
          <img
            src={todo}
            alt="todo-lis"
            class="w-full h-64 object-cover transform transition duration-300 group-hover:scale-110"
          />
          <div class="absolute inset-0 bg-purple-400 bg-opacity-50 flex flex-col justify-center items-center text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <h2 class="text-lg md:text-xl lg:text-2xl font-bold text-white mb-2">
              TOD0-LIST
            </h2>
            <p class="text-sm md:text-base text-black mb-4">
              A platform for planning your schedule for the day.
            </p>
            <a
              href="https://todo-list-omega-nine-47.vercel.app/"
              target="_blank"
              class="px-4 py-2 bg-purple-600 text-white text-sm md:text-base rounded"
            >
              <FileInput />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
