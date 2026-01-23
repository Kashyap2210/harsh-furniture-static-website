import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./components/App";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import MobileCTA from "./components/MobileCTA";
import Navigation from "./components/Navigation";
import Services from "./components/Services";

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <MobileCTA />
      </div>
    </Router>
  );
}

export default App;
