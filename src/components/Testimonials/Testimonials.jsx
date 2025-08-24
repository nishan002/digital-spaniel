import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Testimonials.css";
import testimonial_face01 from "../../assets/img/testimonial_face01/testimonial_face01.png";
import testimonial_face02 from "../../assets/img/testimonial_face02/testimonial_face02.png";
import testimonial_face03 from "../../assets/img/testimonial_face03/testimonial_face03.png";

const testimonials = [
  {
    text: "Working with Digital Spaniel has been a breath of fresh air. Their approach and attitude kept me informed and included from the start. Super pleased with the end results too!",
    name: "Paul Simon",
    title: "Founder, MegaCorp",
    img: testimonial_face03,
  },
  {
    text: "Advice and support from DigiSpan was second to none. Always willing to help and offer advice and solutions. A very good and rapid understanding of our requirements was key to this.",
    name: "Johnny B. Goode",
    title: "CEO, Getting Things Done",
    img: testimonial_face01,
  },
  {
    text: "We needed a creative and unique brand which could compete against established products. Digital Spaniel delivered in spades and we’ve seen a huge response to the product launch.",
    name: "Mary Jane",
    title: "CEO, Design Matters",
    img: testimonial_face02,
  },
];

export default function Testimonials() {
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
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 30 },
        }}
        modules={[Pagination]}
        className="max-w-5xl mx-auto py-4"
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            {({ isActive }) => (
              <div
                className={`relative w-80 rounded-xl shadow-md p-6 flex flex-col items-center transition-all duration-300
               ${
                 isActive
                   ? "bg-gray-900 text-white h-110"
                   : "bg-gray-100 text-gray-700 h-95 mt-8"
               }
             `}
              >
                <p className="slider-content italic px-8 mb-6 h-55">{t.text}</p>
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-16 h-16 rounded-full border-4 border-white shadow-md mb-3"
                />
                <h4 className="font-semibold">{t.name}</h4>
                <p className="text-sm opacity-80">{t.title}</p>
              </div>
            )}
          </SwiperSlide>
        ))}
        <div className="swiper-pagination mt-8"></div>
      </Swiper>
    </section>
  );
}
