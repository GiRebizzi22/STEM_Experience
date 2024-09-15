import "./app.scss";
import Comments from "./components/comments/Comments";
import Description from "./components/description/Description";
import Hero from "./components/hero/Hero";
import MoreInfo from "./components/moreinfo/MoreInfo";
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
        <section id="More">
          <MoreInfo />
        </section>
        <section id="Comments">
          <Comments />
        </section>
      </div>
    </>
  );
}

export default App;
