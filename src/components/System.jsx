import StarCarrousel from "./StarCarrousel";
import "../styles/system.css";

export default function System({ system }) {
  const stars = system?.stars ?? [];
  let starsNames = "";
  let starsLightYear = "";
  let starImages = stars[0]?.images ?? [];

  stars.forEach((star) => {
    starsNames += star.name + ", ";
    starsLightYear += star.distance + ", ";
  });

  let systemFormatted = {
    systemName: system.systemName,
    starsNames: starsNames,
    starsLightYear: starsLightYear,
  };

  return (
    <div>
      <StarCarrousel starImages={starImages} system={systemFormatted} />
      <div className="system-label">
        <label htmlFor="systemName">
          <b>System:</b> {system.systemName}
        </label>
        <br />
        <label htmlFor="stars">
          <b>Stars:</b> {starsNames}
        </label>
        <br />
        <label htmlFor="yearLightDistance">
          <b>Year Light Distance:</b> {starsLightYear}
        </label>
      </div>
    </div>
  );
}
