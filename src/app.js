import React from "react";
import Nav from "./components/nav/nav";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Projects from "./components/projects/projects";


const App = () => {
  return (
    <>
      <Nav />
      <About />
      <Contact />
      <Projects />
      <Footer />
    </>
  );
};

export default App;