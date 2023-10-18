import "../styles/home.css"
import Swipe from "../components/Swipe";

export default function Home() {
  return (
    <div>
      <div id="title">
      <Swipe />
        {/* <span>Star Near on Earth</span>
        <br></br>
        <span>Check the nearest stars on Earth</span> */}
      </div>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
    </div>
  );
}