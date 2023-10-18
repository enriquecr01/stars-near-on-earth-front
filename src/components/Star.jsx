import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";

// Import Swiper styles
import "swiper/css";

export default function Star() {
//   const swiperRef = useRef(null);

//   useEffect(() => {
//     // Register Swiper web component
//     register();

//     // Object with parameters
//     const params = {
//       slidesPerView: 1,
//       autoHeight: true,
//       mousewheel: true
//       //   breakpoints: {
//       //     768: {
//       //       slidesPerView: 4,
//       //     },
//       //   },
//     };

//     // Assign it to swiper element
//     Object.assign(swiperRef.current, params);

//     // initialize swiper
//     swiperRef.current.initialize();
//   }, []);

  return (
    <swiper-container direction="vertical">
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>
        qlos
      </swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide>Slide 5</swiper-slide>
    </swiper-container>
  );
}
