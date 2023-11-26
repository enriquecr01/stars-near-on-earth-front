import { useEffect } from "react"
import Swipe from "../components/Swipe";
import "../styles/home.css"
const systems = require('../stars.json'); 


export default function PreSaved() {

  useEffect(() => {
    document.title = "Stars Near Earth"
  })

  return (
    <div>
      <div id="title">
        <Swipe systems={systems} />
      </div>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
    </div>
  );
}