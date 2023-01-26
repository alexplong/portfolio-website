/** @format */
import React from "react";
import Hero from "./framework/Hero";
import Navigation from "./framework/Navigation";
import About from "./framework/About";
import Blog from "./framework/Blog";
import Footer from "./framework/Footer";

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
      <Navigation
        dark={siteProperties.dark}
        currentSelection={currentSelection}
      />
      {(() => {
        switch (siteProperties.currentSelection) {
          case "hero":
            return <Hero dark={siteProperties.dark} />;
          case "blog":
            return <Blog dark={siteProperties.dark} />;
          case "about":
            return <About dark={siteProperties.dark} />;
          default:
            return null;
        }
      })()}

      {/* <Hero dark={siteProperties.dark} /> */}
      <Footer dark={siteProperties.dark} />
    </div>
  );
}

export default App;
