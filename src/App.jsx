import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Help from "./components/Help";
import Howwork from "./components/Howwork";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Help />
      <Howwork />
      <Team />
      <Contact />
      <Footer/>
    </div>
  );
};

export default App;
