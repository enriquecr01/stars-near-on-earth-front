import { useEffect, useRef, useState } from "react";
import { register } from "swiper/element/bundle";
import Atropos from "atropos/react";
import Sheet from "react-modal-sheet";

// Import Swiper styles
import "swiper/css";
import "../styles/star.css";
import "atropos/css";

export default function StarCarrousel({ starImages, system }) {
  const [isOpen, setOpen] = useState(false);
  const [currentDescription, setDescription] = useState(false);


  return (
    <div className="star-carrousel">
      <swiper-container direction="vertical" mousewheel="true" keyboard="true">
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
                  onClick={() => {
                    setOpen(true);
                    setDescription(image.description);
                  }}
                />
              </Atropos>
              <div className="show-more">
                  <span
                    onClick={() => {
                      setOpen(true);
                      setDescription(image.description);
                    }}
                  >
                    More...
                  </span>
                </div>

              <div className="description-100">
                {image.description.substring(0, 100)}
                {image.description.length > 100 ? (
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

              <div className="description-150">

                {image.description.substring(0, 150)}
                {image.description.length > 150 ? (
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

        <Sheet isOpen={isOpen} onClose={() => setOpen(false)}>
          <Sheet.Container>
            <Sheet.Header>
              <span className="sheet-header">Full Description</span>
            </Sheet.Header>
            <Sheet.Content>
              <div>
                <label htmlFor="systemName">
                  <b>System:</b> {system.systemName}
                </label>
                <br />
                <label htmlFor="stars">
                  <b>Stars:</b> {system.starsNames}
                </label>
                <br />
                <label htmlFor="yearLightDistance">
                  <b>Year Light Distance:</b> {system.starsLightYear}
                </label>
                <hr></hr>
              </div>
            <Sheet.Scroller draggableAt="both">
              {/* Some content here that makes the sheet content scrollable */}
              <div>
                {currentDescription}
              </div>
            </Sheet.Scroller>
            </Sheet.Content>
          </Sheet.Container>
          <Sheet.Backdrop />
        </Sheet>
      </swiper-container>
    </div>
  );
}
