/** @format */
import React from "react";
// import Hero from "./pages/Hero";
import HamburgerMenu from "./components/HamburgerMenu";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import Footer from "./components/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { HashLink } from "react-router-hash-link";

function App() {
  // const [siteProperties, setSiteProperties] = React.useState({
  //   dark: false,
  //   currentSelection: "hero",
  // });

  // function currentSelection(event) {
  //   setSiteProperties((prevState) => ({
  //     ...prevState,
  //     currentSelection: event.target.id,
  //   }));
  // }

  const [menuVisibility, setMenuVisibility] = React.useState(false);
  console.log(menuVisibility);

  function toggleButton() {
    setMenuVisibility((prevState) => !prevState);
  }
  function open() {
    setMenuVisibility(true);
  }
  function close() {
    setMenuVisibility(false);
  }

  return (
    <div>
      <BrowserRouter>
        <Navbar menuVisibility={menuVisibility} toggleButton={toggleButton} />

        <HamburgerMenu onClick={open} />
        <div className="relative">
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
