import "./app.scss";
import Description from "./components/description/Description";
// import Form from "./components/form/Form";
import Hero from "./components/hero/Hero";
// import Last from "./components/last/Last";
import MoreInfo from "./components/moreinfo/MoreInfo";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Project from "./components/projects/Project";
import Footer from "./components/rodape/Footer";
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
        {/* <section id="Colégio">
          <Last />
        </section> */}
        {/* <section id="Feedback">
          <Form />
        </section> */}
        <section id="Footer">
          <Footer />
        </section>
      </div>
    </>
  );
}

export default App;
