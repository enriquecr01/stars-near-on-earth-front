import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";

// Import Swiper styles
import "swiper/css";
import "../styles/star.css"

export default function StarCarrousel() {
  const swiperRef = useRef(null);

  useEffect(() => {
    // Register Swiper web component
    register();

    // Object with parameters
    const params = {
      slidesPerView: 1,
      autoHeight: true,
      mousewheel: true
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
    <div className="star-carrousel">
    <swiper-container direction="vertical" mousewheel="true" keyboard="true" ref={swiperRef}>
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>
        qlos
      </swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide>Slide 5</swiper-slide>
    </swiper-container>
    </div>
  );
}
