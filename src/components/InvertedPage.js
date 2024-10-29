import React from "react";
import ParticlesBackground from "./ParticlesBackground";
import Button from "./Button";
import CustomCursor from "./CustomCursor";
import Header from "./Header";
import RotateMessage from "./RotateMessage"; // Import RotateMessage component
import "./InvertedPage.css";

function InvertedPage() {
    return (
        <div className="App inverted">
            <ParticlesBackground isInverted />
            <Header isInverted />
            <header className="App-header">
                <div className="name-container">
                    <span className="first-name">Pietr</span>
                    <Button className="button-o" isInverted/>
                    <span className="last-name">Avanzini</span>
                </div>
            </header>
            <CustomCursor isInverted />
            <RotateMessage isInverted /> {/* Pass the isInverted prop */}
        </div>
    );
}

export default InvertedPage;
