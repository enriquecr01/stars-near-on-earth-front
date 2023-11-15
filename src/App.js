// import React  from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PreSaved from "./pages/PreSaved";
import ScrapStars from "./pages/ScrapStars";

function App() {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/pre-saved" element={<PreSaved />} />
      <Route path="/scrap-stars" element={<ScrapStars />} />
    </Routes>
  );
}

export default App;
