import { useEffect, useState } from "react";
import { BallTriangle, ColorRing, Dna, FidgetSpinner, InfinitySpin, ProgressBar, Rings, Vortex } from "react-loader-spinner";

// Import Swiper styles
import "../styles/random-loader.css";

export default function RandomLoader() {
  const [randomNumber, setRandomNumber] = useState(null);

  // Function to generate a random number
  const generateRandomNumber = () => {
    const randomValue = Math.floor(Math.random() * 8) + 1;
    setRandomNumber(randomValue);
  };

  useEffect(() => {
    generateRandomNumber();
  }, []);

  return (
    <div className="loader">
      {randomNumber === 1 && (
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#FF8427"
          ariaLabel="ball-triangle-loading"
        />
      )}

      {randomNumber === 2 && (
        <ColorRing
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          colors={["#1B181F", "#D1495B", "#FFF8E7", "#4D8B31", "#FF8427"]}
        />
      )}

      {randomNumber === 3 && (
        <Dna height="80" width="80" ariaLabel="dna-loading" />
      )}

      {randomNumber === 4 && (
        <FidgetSpinner
          height="80"
          width="80"
          ariaLabel="dna-loading"
          ballColors={["#FFF8E7", "#4D8B31", "#FF8427"]}
          backgroundColor="#444247"
        />
      )}

      {randomNumber === 5 && <InfinitySpin width="200" color="#FFF8E7" />}

      {randomNumber === 6 && (
        <ProgressBar
          height="80"
          width="80"
          ariaLabel="progress-bar-loading"
          borderColor="#444247"
          barColor="#FFF8E7"
        />
      )}

      {randomNumber === 7 && (
        <Rings
          height="80"
          width="80"
          color="#FFF8E7"
          radius="6"
          ariaLabel="rings-loading"
        />
      )}

      {randomNumber === 8 && (
        <Vortex
          visible={true}
          height="80"
          width="80"
          ariaLabel="vortex-loading"
          wrapperStyle={{}}
          wrapperClass="vortex-wrapper"
          colors={["#444247", "#D1495B", "#FFF8E7", "#4D8B31", "#FF8427", "#658E9C"]}
        />
      )}
    </div>
  );
}
