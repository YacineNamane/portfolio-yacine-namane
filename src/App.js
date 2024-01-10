import "./App.css";
import Banner from "./components/Banner";
import MobileDropdown from "./components/BannerMobile";
import Home from "./components/Home";
import APropos from "./components/APropos";
import Projects from "./components/Projects";
import Compétences from "./components/Compétences";
import ContactMe from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Banner />
        <MobileDropdown />
        <Home />
        <APropos />
        <Compétences />
        <Projects />
        <ContactMe />
        <Footer />
      </header>
    </div>
  );
}

export default App;
