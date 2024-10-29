import React from "react";
import ParticlesBackground from "./ParticlesBackground";
import Header from "./Header";
import CustomCursor from "./CustomCursor";
import RotateMessage from "./RotateMessage";
import "./PortfolioPage.css"; // CSS for the PortfolioPage

const projects = [
    {
        title: "AI Tutor",
        description: "An AI-powered tutor that analyzes files and generates insights using NLP and deep learning.",
        link: "#",
    },
    {
        title: "Personal Assistant",
        description: "A productivity tool for task management, developed with Python and TensorFlow.",
        link: "#",
    },
    {
        title: "Aidventure",
        description: "An interactive storytelling platform using AI to create personalized user experiences.",
        link: "#",
    },
    {
        title: "Monumetor",
        description: "Mobile app providing historical insights on monuments via AI and image recognition.",
        link: "#",
    },
];

const PortfolioPage = ({ isInverted }) => {
    return (
        <div className={`App ${isInverted ? "inverted" : ""}`}>
            <ParticlesBackground isInverted={isInverted} />
            <Header isInverted={isInverted} />
            <div className="portfolio-content">
                <header className="App-header">
                    <h1>My Portfolio</h1>
                    <p>Explore some of the projects I've worked on, spanning AI, web development, and interactive technologies.</p>
                    <div className="projects-grid">
                        {projects.map((project, index) => (
                            <div key={index} className={`project-card ${isInverted ? "inverted-card" : ""}`}>
                                <h2>{project.title}</h2>
                                <p>{project.description}</p>
                                {project.link && (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                                        View Project
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                </header>
            </div>
            <CustomCursor isInverted={isInverted} />
            <RotateMessage isInverted={isInverted} />
        </div>
    );
};

export default PortfolioPage;
