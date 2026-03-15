import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
import System from "./System";

// Import Swiper styles
import "swiper/css";
import "../styles/swipe.css";

export default function Swipe({ systems = [] }) {
  const swiperRef = useRef(null);

  useEffect(() => {
    // Register Swiper web component
    register();

    // Object with parameters
    const params = {
      slidesPerView: 1,
    };

    if (!swiperRef.current) return;
    Object.assign(swiperRef.current, params);
    swiperRef.current.initialize();
  }, []);

  const systemsArray = Array.isArray(systems) ? systems : [];

  if (!systemsArray.length) {
    return <div className="swipe-empty">No systems available.</div>;
  }

  return (
    <swiper-container keyboard="true" ref={swiperRef}>
      {systemsArray.map((system, i) => (
        <swiper-slide key={i}>
          <System system={system} />
        </swiper-slide>
      ))}
    </swiper-container>
  );
}
