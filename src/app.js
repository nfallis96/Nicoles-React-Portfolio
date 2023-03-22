
import './App.css';
import Nav from "./components/nav"
import Header from "./components/header"
import About from "./components/about"
import Projects from "./components/projects"
import Contact from "./components/contact"
import Footer from "./components/footer"


function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
