import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
import System from "./System";
const systems = require('../stars.json'); 

// Import Swiper styles
import "swiper/css";
import "../styles/swipe.css";

export default function Swipe({ systems }) {
  
  console.log(systems)

  const swiperRef = useRef(null);
  
  useEffect(() => {
    // Register Swiper web component
    register();

    // Object with parameters
    const params = {
      slidesPerView: 1,
    };

    // Assign it to swiper element
    Object.assign(swiperRef.current, params);

    // initialize swiper
    swiperRef.current.initialize();
  }, []);

  return (
    <swiper-container keyboard="true" ref={swiperRef}>
      {systems.map((system, i)  => (
        <swiper-slide key={i}>
          <System system={system} />
        </swiper-slide>
      ))}
    </swiper-container>
  );
}
