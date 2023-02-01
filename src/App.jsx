import React from "react";
import "./App.css";
import Nav from "./sections/nav/Navigation";
import Home from "./sections/home/Home";
import About from "./sections/about/About";
import Projects from "./sections/projects/Projects";
import Footer from "./sections/footer/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
