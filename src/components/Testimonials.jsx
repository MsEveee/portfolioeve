import jenny from "../assets/images/jenny.png";
import michael from "../assets/images/michael.png";
import yvonne from "../assets/images/yvonne.png";
import david from "../assets/images/david.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const Testimonials = () => {
  const Testimonies = [
    {
      image: jenny,
      name: "Jennifer Kwakwa-Sarpong",
      description:
        "Excellent work on designing the Bidigreen Ghana Limited website! Your attention to detail, willingness to listen, and openness to feedback truly set you apart.Despite numerous changes, you remained patient and focused, delivering a flawless final product.Your dedication and professionalism are commendable.Thank you for a job perfectly done!",
    },
    {
      image: michael,
      name: "Michael Hammond",
      description: "Evelyn Yaa Biadoo is a standout talent I had the privilege of teaching during Grow Web Development - Cohort 2. Her remarkable work ethic, resilience, and commitment to growth were evident in her ability to tackle complex concepts and consistently deliver exceptional work. Evelyn approaches challenges with positivity and determination, striving for mastery while seeking opportunities to deepen her understanding. Her persistence and passion for growth make her an invaluable asset to any team or project."
        
    },


    {
      image: jenny,
      name: "Jennifer Kwakwa-Sarpong",
      description:
        "Excellent work on designing the Bidigreen Ghana Limited website! Your attention to detail, willingness to listen, and openness to feedback truly set you apart.Despite numerous changes, you remained patient and focused, delivering a flawless final product.Your dedication and professionalism are commendable.Thank you for a job perfectly done!",
    },
    // {
    //   image: yvonne,
    //   name: "Yvonne Charcoal",
    //   description:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    // },
    {
      image: david,
      name: "David Arhin",
      description:"Evelyn Yaa Biadoo was a top-performing student in the second cohort of the React class organized by Ideation Axis. Her enthusiasm, mastery of React, and commitment to excellence were evident in her high-quality work and proactive attitude. Evelyn stood out as a collaborative team player, always ready to assist others and engage in meaningful discussions. Her talent and dedication make her a valuable asset in web development projects, and I wholeheartedly recommend her for opportunities that require expertise in React and a strong work ethic."

    },
  ];

  return (
    <div className="px-4 py-8 lg:px-16 bg-[#f9f8ff]">
      {/* Header Section */}
      <div className="flex flex-col justify-center items-center mb-8">
        <h2 className="font-semibold text-center text-2xl md:text-lg lg:text-2xl">
          Testimonials
        </h2>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
        className="w-full"
      >
        {Testimonies.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-lg border border-blue-500 p-6 max-w-sm mx-auto flex flex-col items-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full shadow-lg mb-4"
              />
              <h3 className="text-lg  font-semibold text-blue-400 mb-2">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-600 text-center">
                {testimonial.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
