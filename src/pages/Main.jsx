import { useEffect } from "react";
import "../styles/home.css";
import "../styles/main.css";
import { Link } from "react-router-dom";

export default function Home() {
  useEffect(() => {
    document.title = "Stars Near Earth";
  });

  return (
    <div>
      <div className="main-title">
        <h1>STARS NEAR EARTH</h1>

        <p className="description-paragraph">
          This webpage was made by{"\u00A0"}
          <a
            className="link-class"
            target="_blank"
            href="https://enriquechavezr.com/"
            rel="noreferrer"
          >
            Enrique Chavez Romero
          </a>
          {"\u00A0"}he wanted to practice a technique named web scrapping.{" "}
          <br />
          He used the table of{"\u00A0"}
          <a
            className="link-class"
            target="_blank"
            href="https://en.wikipedia.org/wiki/List_of_nearest_stars_and_brown_dwarfs"
            rel="noreferrer"
          >
            this page of Wikipedia
          </a>
          {"\u00A0"}to get all the data of nearest stars of earth then he scrap
          all the information that he wants and ordered to present here. <br />
          There are two buttons: The button of Pre Saved stars load faster is
          because doesn't use the technique of web scraping. If you want to view
          the scraped data from wikipedia then use the button of Scrap Stars.
        </p>

        <div className="container">
          <Link to={"/pre-saved"} className="btn">
            Pre Saved Stars
          </Link>
          <Link to={"/scrap-stars"} className="btn">
            Scrap Stars
          </Link>
        </div>
      </div>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
    </div>
  );
}
