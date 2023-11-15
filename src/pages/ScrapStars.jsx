import { useEffect } from "react"
import Swipe from "../components/Swipe";
import "../styles/home.css"

export default function ScrapStars() {

  useEffect(() => {
    document.title = "Stars Near Earth"
  })

  return (
    <div>
      <div id="title">
        Scrap
        <Swipe />
      </div>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
    </div>
  );
}