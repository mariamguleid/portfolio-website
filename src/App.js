import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";

function App() { 
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Education/>
      <Experience/>
    </div>
  );
}
export default App;
