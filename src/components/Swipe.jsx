import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
import Star from "./Star";

// Import Swiper styles
import "swiper/css";

export default function Swipe() {
  const swiperRef = useRef(null);

  useEffect(() => {
    // Register Swiper web component
    register();

    // Object with parameters
    const params = {
      slidesPerView: 1,

      //   breakpoints: {
      //     768: {
      //       slidesPerView: 4,
      //     },
      //   },
    };

    // Assign it to swiper element
    Object.assign(swiperRef.current, params);

    // initialize swiper
    swiperRef.current.initialize();
  }, []);

  return (
    <swiper-container ref={swiperRef}>
      <swiper-slide>
        <Star />
      </swiper-slide>
      <swiper-slide>
        Imbecil jajaj
        <Star />

      </swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide>Slide 5</swiper-slide>
      <swiper-slide>Slide 6</swiper-slide>
      <swiper-slide>Slide 7</swiper-slide>
      <swiper-slide>Slide 8</swiper-slide>
    </swiper-container>
  );
}
