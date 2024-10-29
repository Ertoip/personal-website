import React from "react";
import ParticlesBackground from "./ParticlesBackground";
import Button from "./Button";
import CustomCursor from "./CustomCursor";
import Header from "./Header";
import RotateMessage from "./RotateMessage"; // Import RotateMessage component
import "./HomePage.css";

function HomePage() {
    return (
        <div className="App">
            <ParticlesBackground />
            <Header />
            <header className="App-header">
                <div className="name-container">
                    <span className="first-name">Pietr</span>
                    <Button className="button-o" />
                    <span className="last-name">Avanzini</span>
                </div>
            </header>
            <CustomCursor />
            <RotateMessage />
        </div>
    );
}

export default HomePage;
