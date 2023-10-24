import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
import Atropos from 'atropos/react';


// Import Swiper styles
import "swiper/css";
import "../styles/star.css";
import "atropos/css";

export default function StarCarrousel({ starImages }) {
  const swiperRef = useRef(null);

  useEffect(() => {
    // Register Swiper web component
    register();

    // Object with parameters
    const params = {
      slidesPerView: 1,
      autoHeight: true,
      mousewheel: true,
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
      <swiper-container
        direction="vertical"
        mousewheel="true"
        keyboard="true"
        ref={swiperRef}
      >
        {starImages.map((image, i) => (
          <swiper-slide key={i}>
            <div className="img-description">
              <Atropos shadow={true} highlight={true} className="atropos" key={i}>
                <img
                  data-atropos-offset="-3"
                  className="star-image"
                  src={`${image.url}`}
                  alt={`${image.description}`}
                />
              </Atropos>
              <div>
                <h6>{image.description}</h6>
              </div>
            </div>
          </swiper-slide>
        ))}
        {/* <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>
        qlos
      </swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide>Slide 5</swiper-slide> */}
      </swiper-container>
    </div>
  );
}
