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
      <div id="title">
        <h1>STARS NEAR EARTH</h1>

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