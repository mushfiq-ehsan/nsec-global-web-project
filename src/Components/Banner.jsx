import React from 'react';
import { FaPlay } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Banner = () => {

  const images = [
    "https://media.istockphoto.com/id/1041740040/photo/audience-raising-hands-up-while-businessman-is-speaking-in-training-at-the-office.jpg?s=612x612&w=0&k=20&c=Ng67VON1opO7LRIRssFWuawedQMi5X7tCFvaccnHzFA=",
    "https://transglobeedu.com/uploads/blogs/1694583520.JPG",
    "https://www.learningroutes.in/_next/image?url=https%3A%2F%2Faskusedu.com%2Fblogdashboard%2Fwp-content%2Fuploads%2F2024%2F08%2FInternational-vs-Domestic-Higher-Education.webp&w=1920&q=75"
  ];

  return (
    <div className="w-full h-[480px] md:h-[600px] relative">

      {/* Slider */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        speed={600} 
        className="w-full h-full"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center transition-all duration-1000"
              style={{ backgroundImage: `url(${img})` }}
            >
              {/* Overlay */}
              <div className="w-full h-full bg-blue-900/60 flex items-center">
                <div className="max-w-3xl px-6 md:px-12 text-white">
                  <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
                    Building Futures,<br />
                    <span className="text-yellow-400">Not Just Applications</span>
                  </h1>

                  <p className="mt-4 text-sm md:text-base max-w-xl">
                    Your trusted partner for international education. We guide ambitious 
                    students to achieve their dreams of studying abroad with personalized 
                    support and expert guidance.
                  </p>

                  <div className="mt-6 flex gap-4">
                    <button className="btn btn-primary px-6 text-white">
                      Start Your Journey
                    </button>

                    <button className="btn btn-outline text-white border-white hover:bg-white hover:text-blue-900">
                      <FaPlay className="mr-2" />
                      Watch Our Story
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
