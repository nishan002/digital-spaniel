import React from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Testimonials.css";

export default function Testimonials() {
  const testimonials = useSelector((state) => state.testimonials);

  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Kind words</h2>
      <p className="text-gray-500 mb-10">from our clients</p>

      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={30}
        initialSlide={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20, centeredSlides: true },
          768: { slidesPerView: 3, spaceBetween: 30, centeredSlides: true },
          1024: { slidesPerView: 3, spaceBetween: 30, centeredSlides: true },
        }}
        modules={[Pagination]}
        className="max-w-5xl mx-auto py-4"
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i} className="flex justify-center">
            {({ isActive }) => (
              <div
                className={`relative w-80 max-w-full mx-auto rounded-xl shadow-md p-6 flex flex-col items-center transition-all duration-300
               ${
                 isActive
                   ? "bg-gray-900 text-white h-110"
                   : "bg-gray-100 text-gray-700 h-95 mt-8"
               }
             `}
              >
                <p className="slider-content italic px-8 mb-6 h-55 text-center">{t.text}</p>
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-16 h-16 rounded-full border-4 border-white shadow-md mb-3"
                />
                <h4 className="font-semibold text-center">{t.name}</h4>
                <p className="text-sm opacity-80 text-center">{t.title}</p>
              </div>
            )}
          </SwiperSlide>
        ))}
        <div className="swiper-pagination mt-8"></div>
      </Swiper>
    </section>
  );
}