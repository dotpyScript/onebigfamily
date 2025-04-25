import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/service";
import About from "./components/About";
import Impact from "./components/Impact";
import Membership from "./components/Membership";
import Events from "./components/Events";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <CustomCursor />
        <Navbar />
        <main>
          <Hero id="home" />
          <About id="about" />
          <Impact id="impact" />
          <Membership id="membership" />
          <Events id="events" />
          <Contact id="contact" />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
