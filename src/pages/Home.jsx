import { useEffect } from "react"
import Swipe from "../components/Swipe";
import "../styles/home.css"

export default function Home() {

  useEffect(() => {
    document.title = "Stars Near Earth"
  })

  return (
    <div>
      <div id="title">
        <Swipe />
      </div>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
    </div>
  );
}