import React, { useEffect, useState } from "react";
import "./CustomCursor.css";

const CustomCursor = ({ isInverted }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hover, setHover] = useState(false);
    const [clicking, setClicking] = useState(false);

    useEffect(() => {
        const addMouseListeners = () => {
            document.addEventListener("mousemove", mouseMoveHandler);
            document.addEventListener("mouseover", mouseOverHandler);
            document.addEventListener("mouseout", mouseOutHandler);
            document.addEventListener("mousedown", mouseDownHandler);
            document.addEventListener("mouseup", mouseUpHandler);
        };

        const removeMouseListeners = () => {
            document.removeEventListener("mousemove", mouseMoveHandler);
            document.removeEventListener("mouseover", mouseOverHandler);
            document.removeEventListener("mouseout", mouseOutHandler);
            document.removeEventListener("mousedown", mouseDownHandler);
            document.removeEventListener("mouseup", mouseUpHandler);
        };

        const mouseMoveHandler = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const mouseOverHandler = (e) => {
            if (e.target.tagName === "BUTTON" || e.target.tagName === "A") {
                setHover(true);
            }
        };

        const mouseOutHandler = (e) => {
            if (e.target.tagName === "BUTTON" || e.target.tagName === "A") {
                setHover(false);
            }
        };

        const mouseDownHandler = () => {
            setClicking(true);
        };

        const mouseUpHandler = () => {
            setClicking(false);
        };

        addMouseListeners();

        return () => removeMouseListeners();
    }, []);

    return (
        <div
            className={`custom-cursor ${isInverted ? "inverted" : ""} ${hover ? "cursor-hover" : ""} ${clicking ? "cursor-clicking" : ""}`}
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
            }}
        ></div>
    );
};

export default CustomCursor;
