import "./app.scss";
import Description from "./components/description/Description";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Project from "./components/projects/Project";

function App() {
  return (
    <>
      <div>
        <section id="Home">
          <Navbar />
          <Hero />
        </section>
        <section id="O que é STEM?">
          <Parallax type="stem" />
        </section>
        <section id="Descrição">
          <Description />
        </section>
        <div id="Projects">
          <Project />
        </div>
        <section id="More">More informations</section>
        <section id="Comments">Comments</section>
      </div>
    </>
  );
}

export default App;
