import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";

function App() {
  return (
    <>
      <div>
        <section id="Home">
          <Navbar />
          <Hero />
        </section>
        <section id="STEM">
          <Parallax type="stem" />
        </section>
        <section id="Projects">Projects</section>
        <section id="More">More informations</section>
        <section id="Comments">Comments</section>
      </div>
    </>
  );
}

export default App;
