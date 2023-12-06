// import React  from 'react';
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Home from "./pages/Home";
import PreSaved from "./pages/PreSaved";
import ScrapStars from "./pages/ScrapStars";

function App() {
  return (
    <Routes>
      <Route path="" element={<Main />} />
      <Route path="/" element={<Main />} />
      <Route path="/pre-saved" element={<PreSaved />} />
      <Route path="/scrap-stars" element={<ScrapStars />} />
    </Routes>
  );
}

export default App;
