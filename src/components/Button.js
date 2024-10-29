import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Button.css";

const Button = ({ isInverted }) => {
    const [isClicked, setIsClicked] = useState(false);
    const [overlayStyle, setOverlayStyle] = useState({});
    const buttonRef = useRef(null);
    const navigate = useNavigate();

    const handleClick = () => {
        const rect = buttonRef.current.getBoundingClientRect();
        setOverlayStyle({
            top: rect.top + window.scrollY,
            left: rect.left + window.scrollX,
            width: rect.width,
            height: rect.height,
        });
        setIsClicked(true);

        // Navigate after the overlay animation completes
        setTimeout(() => {
            if (isInverted) {
                navigate("/");
            } else {
                navigate("/inverted");
            }
        }, 1000); // Duration matches the overlay animation
    };

    return (
        <>
            <button
                ref={buttonRef}
                className={`center-button ${isInverted ? "inverted" : ""}`}
                onClick={handleClick}
            >
                
            </button>
            {isClicked && (
                <div
                    className={`overlay ${isInverted ? "inverted" : ""}`}
                    style={{
                        top: overlayStyle.top + "px",
                        left: overlayStyle.left + "px",
                        width: overlayStyle.width + "px",
                        height: overlayStyle.height + "px",
                    }}
                ></div>
            )}
        </>
    );
};

export default Button;