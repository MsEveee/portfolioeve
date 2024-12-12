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
        "In full-stack development, expertise is key, and that's what we found with Hudson. Attention to detail, clear communication, and dedication to meeting project deadlines made the collaboration seamless. Couldn't be happier with the final product. If looking for a talented and reliable web developer, Hudson is the one to choose.",
    },
    {
      image: michael,
      name: "Michael Hammond",
      description:
        "In full-stack development, expertise is key, and that's what we found with Hudson. Attention to detail, clear communication, and dedication to meeting project deadlines made the collaboration seamless. Couldn't be happier with the final product. If looking for a talented and reliable web developer, Hudson is the one to choose.",
    },
    {
      image: yvonne,
      name: "Yvonne Charcoal",
      description:
        "In full-stack development, expertise is key, and that's what we found with Hudson. Attention to detail, clear communication, and dedication to meeting project deadlines made the collaboration seamless. Couldn't be happier with the final product. If looking for a talented and reliable web developer, Hudson is the one to choose.",
    },
    {
      image: david,
      name: "David Arhin",
      description:
        "In full-stack development, expertise is key, and that's what we found with Hudson. Attention to detail, clear communication, and dedication to meeting project deadlines made the collaboration seamless. Couldn't be happier with the final product. If looking for a talented and reliable web developer, Hudson is the one to choose.",
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
