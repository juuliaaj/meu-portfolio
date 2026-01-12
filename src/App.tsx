import "./style.css";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Education } from "./components/Education";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";
import { Technologies } from "./components/Technologies";
import { Contact } from "./components/Contact";
import { Credits } from "./components/Credits";
import { Events } from "./components/Events";

function App() {
  return (
    <>
    <Header />
    <div className="container">
      <Hero />
      <About />
      <Education />
      <Technologies />
      <Projects />
      <Events />
      <Contact />
      <Credits />
    </div>
    </>
  );
}

export default App;
