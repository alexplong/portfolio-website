/** @format */
import React from "react";
import Hero from "./pages/Hero";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Footer from "./components/Footer";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [siteProperties, setSiteProperties] = React.useState({
    dark: false,
    currentSelection: "hero",
  });

  function currentSelection(event) {
    setSiteProperties((prevState) => ({
      ...prevState,
      currentSelection: event.target.id,
    }));
  }

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
