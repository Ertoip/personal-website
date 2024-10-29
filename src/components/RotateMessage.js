import React, { useEffect, useState } from "react";
import "./RotateMessage.css";

const RotateMessage = ({ isInverted }) => {
    const [isPortrait, setIsPortrait] = useState(false);

    const checkOrientation = () => {
        if (window.matchMedia("(orientation: portrait)").matches) {
            setIsPortrait(true);
        } else {
            setIsPortrait(false);
        }
    };

    useEffect(() => {
        checkOrientation();
        window.addEventListener("resize", checkOrientation);

        return () => {
            window.removeEventListener("resize", checkOrientation);
        };
    }, []);

    return (
        <>
            {isPortrait && (
                <div className={`rotate-message ${isInverted ? "inverted" : ""}`}>
                    Please turn your phone to landscape mode for the best experience.
                </div>
            )}
        </>
    );
};

export default RotateMessage;
