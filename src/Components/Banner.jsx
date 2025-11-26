import React from "react";
import { FaPlay } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = () => {
  const images = [
    "https://media.istockphoto.com/id/1041740040/photo/audience-raising-hands-up-while-businessman-is-speaking-in-training-at-the-office.jpg?s=612x612&w=0&k=20&c=Ng67VON1opO7LRIRssFWuawedQMi5X7tCFvaccnHzFA=",
    "https://transglobeedu.com/uploads/blogs/1694583520.JPG",
    "https://www.learningroutes.in/_next/image?url=https%3A%2F%2Faskusedu.com%2Fblogdashboard%2Fwp-content%2Fuploads%2F2024%2F08%2FInternational-vs-Domestic-Higher-Education.webp&w=1920&q=75",
  ];

  return (
    <div className="w-full h-[380px] sm:h-[450px] md:h-[550px] lg:h-[620px] relative">

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        speed={700}
        className="w-full h-full"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${img})` }}
            >
              {/* Overlay */}
              <div className="w-full h-full bg-blue-900/60 flex items-center">
                <div className="px-5 sm:px-8 md:px-14 lg:px-20 text-white max-w-3xl">

                  {/* TITLE */}
                  <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold leading-snug">
                    Building Futures, <br />
                    <span className="text-yellow-400">Not Just Applications</span>
                  </h1>

                  {/* SUB TEXT */}
                  <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-lg lg:text-xl max-w-xl">
                    Your trusted partner for international education. We guide
                    ambitious students to achieve their dreams with personalized
                    support and expert guidance.
                  </p>

                  {/* BUTTONS */}
                  <div className="mt-5 flex flex-wrap gap-3 sm:gap-4">
                    <button className="btn bg-[#002060] text-white hover:bg-[#9b1a1a] hover:text-white rounded-md px-8">
                      Start Your Journey
                    </button>
                  </div>

                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
