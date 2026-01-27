import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/gallery/Gallery";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Services from "./components/Services";

function App() {
  return (
    <BrowserRouter>
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
        {/* <MobileCTA /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
