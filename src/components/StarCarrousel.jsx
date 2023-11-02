import { useEffect, useRef, useState } from "react";
import { register } from "swiper/element/bundle";
import Atropos from "atropos/react";
import Sheet from "react-modal-sheet";

// Import Swiper styles
import "swiper/css";
import "../styles/star.css";
import "atropos/css";

export default function StarCarrousel({ starImages }) {
  const swiperRef = useRef(null);

  const [isOpen, setOpen] = useState(false);
  const [currentDescription, setDescription] = useState(false);

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
              <Atropos
                shadow={true}
                highlight={true}
                className="atropos"
                key={i}
              >
                <img
                  data-atropos-offset="-3"
                  className="star-image"
                  src={`${image.url}`}
                  alt={`${image.description}`}
                />
              </Atropos>
              <div className="description">
                {image.description.substring(0, 200)}
                {image.description.length > 200 ? (
                  <span
                    onClick={() => {
                      setOpen(true);
                      setDescription(image.description);
                    }}
                  >
                    →
                  </span>
                ) : (
                  ""
                )}
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

        <Sheet isOpen={isOpen} onClose={() => setOpen(false)}>
          <Sheet.Container>
            <Sheet.Header>
              <span className="sheet-header">
                Full Description
              </span>
            </Sheet.Header>
            <Sheet.Content>{currentDescription}</Sheet.Content>
          </Sheet.Container>
          <Sheet.Backdrop />
        </Sheet>
      </swiper-container>
    </div>
  );
}
