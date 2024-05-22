import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Headlinecard from "./components/Headlinecard";
import Food from "./components/Food";
import Categoris from "./components/Categoris";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Headlinecard />
      <Food />
      <Categoris />
    </div>
  );
}

export default App;
