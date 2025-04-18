import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import SidePanel from "./components/SidePanel/SidePanel";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import CTA from "./components/CTA/CTA";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

  useEffect(() => {
    if (isSidePanelOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isSidePanelOpen]);

  const toggleSidePanel = () => {
    setIsSidePanelOpen(prev => !prev); 
  };

  return (
    <Router>
      <div className={`App ${isSidePanelOpen ? 'side-panel-open' : ''}`}>
        <ScrollToTop />
        <Header openSidePanel={toggleSidePanel} />

        
        <SidePanel 
          isOpen={isSidePanelOpen} 
          closeSidePanel={() => setIsSidePanelOpen(false)} 
        />
        
        {isSidePanelOpen && (
          <div 
            className="overlay" 
            onClick={() => setIsSidePanelOpen(false)}
            role="presentation"
            aria-hidden="true"
          />
        )}
        
        <main>
          <Routes>
            <Route path="/" element={<><Hero /><Features /><CTA /></>} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;