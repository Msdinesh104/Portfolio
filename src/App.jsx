import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SocialLinks from "./components/SocialLinks";
import Experience from "./components/Experience";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio/>
      <Experience />
      <Contact />
      <Footer />
      <SocialLinks />
    </div>
  );
}

export default App;