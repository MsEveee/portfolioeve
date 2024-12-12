import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Instagram } from "lucide-react";
import eve from "../assets/images/eve.jpg";
import github from "../assets/SVG/github.svg";
import linkedin from "../assets/SVG/linkedin.svg";

const Hero = () => {
  const heroRef = useRef();
  const leftSectionRef = useRef();
  const rightSectionRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power2.out" } });

    // Animate the whole hero section
    tl.fromTo(
      heroRef.current,
      { opacity: 0 },
      { opacity: 1 }
    )
      // Animate the left section
      .fromTo(
        leftSectionRef.current,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1 },
        "-=0.5" // Overlap animations by 0.5 seconds
      )
      // Animate the right section
      .fromTo(
        rightSectionRef.current,
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1 },
        "-=0.5"
      );
  }, []);

  return (
    <div
      ref={heroRef}
      className="min-h-screen flex flex-col md:flex-row items-center justify-between bg-[#f9f8ff] px-8 md:px-16 py-8"
    >
      {/* Left Section */}
      <div
        ref={leftSectionRef}
        className="text-center md:text-left md:w-1/2 space-y-6"
      >
        <div className="bg-white shadow-md rounded-lg p-4 inline-block">
          <h2 className="text-lg font-bold text-black flex items-center space-x-2">
            <span>Hello</span>
            <span>👋</span>
          </h2>
          <p className="text-xl font-semibold">I'm Evelyn</p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-400">
            A Junior Software Developer
          </h2>
          <p className="text-gray-700">
            Explore my portfolio to discover a showcase of projects that
            highlight my passion for craftsmanship and innovation. If you have a
            project idea, feel free to reach out—I'm just an{" "}
            <a
              href="mailto:evelynyaabaidoo@gmail.com"
              className="text-blue-400 underline"
            >
              email
            </a>{" "}
            away!
          </p>
        </div>

        <div className="flex space-x-4 py-5 justify-center md:justify-start">
          <a href="https://github.com/MsEveee/CropCircle">
            <img src={github} alt="github" />
          </a>
          <a href="https://www.linkedin.com/in/evelynbaidoo">
            <img src={linkedin} alt="linkedin" />
          </a>
          <div className="py-1 ">
            <a href="https://www.instagram.com/_baidoo_/">
              <Instagram className="text-purple-400" />
            </a>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div
        ref={rightSectionRef}
        className="md:w-1/2 flex justify-center"
      >
        <div className="inline-block">
          <img
            src={eve}
            alt="Evelyn"
            className="border-4 border-blue-400 w-80 h-96 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
