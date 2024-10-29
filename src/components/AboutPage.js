import React from "react";
import ParticlesBackground from "./ParticlesBackground";
import Header from "./Header";
import CustomCursor from "./CustomCursor";
import RotateMessage from "./RotateMessage"; // Import RotateMessage component
import "./AboutPage.css"; // CSS for the AboutPage

const AboutPage = ({ isInverted }) => {
    return (
        <div className={`App ${isInverted ? "inverted" : ""}`}>
            <ParticlesBackground isInverted={isInverted} />
            <Header isInverted={isInverted} />
            <div className="about-content">
                <header className="App-header">
                    <div className={`text-box ${isInverted ? "inverted-bg" : "dark-bg"}`}>
                        <h1>About Me</h1>
                        <p>
                            I am a professional <strong>AI developer</strong> and <strong>full-stack web developer</strong>, currently studying <strong>Artificial Intelligence</strong> at the <strong>University of Pavia</strong>. My expertise spans <strong>AI, machine learning, backend, and frontend development</strong>.
                        </p>
                        <p>
                            In the field of <strong>AI and Machine Learning</strong>, I have hands-on experience with Python libraries like <strong>Keras</strong> and <strong>TensorFlow</strong>. I’ve applied these tools in developing <strong>chatbots</strong>, <strong>voice assistants</strong>, and <strong>AI-enabled education systems</strong>. My grounding in <strong>machine learning algorithms</strong> and <strong>neural networks</strong> enables me to tackle complex challenges with state-of-the-art solutions.
                        </p>
                        <p>
                            On the <strong>backend</strong>, I develop resilient systems using frameworks like <strong>Django</strong> and <strong>FastAPI</strong>. I design secure, scalable backend architectures with high-performance RESTful APIs and complex data processing, catering to diverse application needs.
                        </p>
                        <p>
                            For the <strong>frontend</strong>, my work incorporates <strong>HTML5, CSS3, and JavaScript</strong>, with frameworks like <strong>React</strong> and <strong>Laravel</strong>, delivering responsive, user-centered applications.
                        </p>
                        <p>
                            My technical expertise also extends to <strong>Linux-based environments</strong>, where I manage server installation, maintenance, and troubleshooting. I’m proficient in <strong>Bash, Git,</strong> and <strong>system administration</strong>.
                        </p>
                        <p>
                            Additionally, I am skilled in <strong>SQL and MySQL</strong>, ensuring efficient database management for supporting large-scale applications.
                        </p>
                        <h2>AI/ML Projects</h2>
                        <p>
                            <strong>AI Tutor</strong>: I developed an AI-powered tutor leveraging <strong>NLP</strong> and <strong>deep learning</strong> to analyze files and provide educational insights.
                        </p>
                        <p>
                            <strong>Personal Assistant</strong>: I built a personal assistant using Python and TensorFlow to help users manage tasks and schedules, enhancing productivity.
                        </p>
                        <p>
                            <strong>Aidventure</strong>: An interactive, AI-driven storytelling platform built with <strong>React</strong> and <strong>Node.js</strong>, delivering personalized user experiences.
                        </p>
                        <p>
                            <strong>Monumetor</strong>: A mobile app providing AI-driven historical insights on scanned monuments using <strong>AI</strong> and <strong>image recognition</strong>.
                        </p>
                    </div>
                </header>
            </div>
            <CustomCursor isInverted={isInverted} />
            <RotateMessage isInverted={isInverted} />
        </div>
    );
};

export default AboutPage;
