import StarCarrousel from "./StarCarrousel";

export default function System({ system }) {
  console.log("putos", system)

  let starsNames = "";
  let starsLightYear = "";
  let starImages = system.stars[0].images
  system.stars.map(star => {
    starsNames += star.name + ", "
    starsLightYear += star.distance + ", "
  })

  return (
    <div>
      <StarCarrousel starImages={starImages} />
      <label htmlFor="systemName"><b>Solar System:</b> { system.systemName } </label>
      <br />
      <label htmlFor="stars"><b>Stars:</b> { starsNames }</label>
      <br />
      <label htmlFor="yearLightDistance"><b>Year Light Distance:</b> { starsLightYear } </label>
    </div>
  );
}
