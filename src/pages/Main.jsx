import { useEffect } from "react"
import "../styles/home.css"
import "../styles/main.css"
import { Link } from "react-router-dom"

export default function Home() {

  useEffect(() => {
    document.title = "Stars Near Earth"
  })

  return (
    <div>
      <div className="main-title">
        <h1>STARS NEAR EARTH</h1>

        <p className="description-paragraph">
          This webpage was made with the purpose of practice the technique named web scrapping. <br />
          
          I use the table of <a className="link-class" target="_blank" href="https://en.wikipedia.org/wiki/List_of_nearest_stars_and_brown_dwarfs">this page</a> of Wikipedia. <br />
          
          The button of Pre Saved stars load faster the stars that is because doesn't use the technique of web scraping. <br />
          If you want to view how it's work the scrapper. Use the button of Scrap Stars.
        </p>

        <div className="container">
            <Link to={"/pre-saved"} className="btn">Pre Saved Stars</Link>
            <Link to={"/scrap-stars"} className="btn">Scrap Stars</Link>
        </div>
      </div>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
    </div>
  );
}