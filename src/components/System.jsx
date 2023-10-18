import StarCarrousel from "./StarCarrousel";

export default function System() {
  return (
    <div>
      <StarCarrousel />
      <label htmlFor="systemName"><b>Solar System:</b> </label>
      <br />
      <label htmlFor="stars"><b>Stars:</b> </label>
      <br />
      <label htmlFor="yearLightDistance"><b>Year Light Distance:</b> </label>
    </div>
  );
}
