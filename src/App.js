import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import InvertedPage from "./components/InvertedPage";
import AboutPage from "./components/AboutPage";
import PortfolioPage from "./components/PortfolioPage"; // Import PortfolioPage component
import "./App.css";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} /> {/* Standard About Page */}
                <Route path="/portfolio" element={<PortfolioPage />} /> {/* Standard Portfolio Page */}
                
                <Route path="/inverted" element={<InvertedPage />} /> {/* Inverted Home Page */}
                <Route path="/inverted/about" element={<AboutPage isInverted />} /> {/* Inverted About Page */}
                <Route path="/inverted/portfolio" element={<PortfolioPage isInverted />} /> {/* Inverted Portfolio Page */}
            </Routes>
        </Router>
    );
}

export default App;
